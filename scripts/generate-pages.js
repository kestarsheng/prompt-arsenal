// scripts/generate-pages.js
// 从 prompts/ 的干净源文件生成 docs/ 下的站点页面。
//
// 设计要点：源文件永不被改写。本脚本只读 prompts/、只写 docs/，
// 因此不存在「从已改写文件中反推原始正文」的往返逻辑，
// 也就不存在往返导致正文被截断/损坏的可能。
//
// 结构说明：所有构建逻辑都是导出的纯函数（可被 test/ 下的测试直接调用），
// 文件末尾通过 import.meta.url 判断是否被直接执行，只有 CLI 方式才会写盘。
import { readdirSync, readFileSync, writeFileSync, statSync, mkdirSync, rmSync, existsSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const DEFAULT_PROMPTS_DIR = join(rootDir, 'prompts')
const DEFAULT_DOCS_DIR = join(rootDir, 'docs')

// 模板是给贡献者复制的脚手架：其 frontmatter 与正文都是占位示例，
// 注入元信息卡片会把占位值渲染成真实数据，故原样复制、不注入。
export const isTemplate = (rel) => rel.startsWith('templates/')

// 页面开头的 YAML frontmatter
export const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/

export function getAllMdFiles(dir, basePath = '') {
  const items = readdirSync(dir)
  const files = []
  for (const item of items) {
    if (item.startsWith('.')) continue
    const fullPath = resolve(dir, item)
    const stat = statSync(fullPath)
    const relPath = basePath ? `${basePath}/${item}` : item
    if (stat.isDirectory()) {
      files.push(...getAllMdFiles(fullPath, relPath))
    } else if (item.endsWith('.md')) {
      files.push({ fullPath, relPath, fileName: item })
    }
  }
  return files
}

export function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function unquote(text) {
  return text.trim().replace(/^['"]|['"]$/g, '')
}

// 解析模板用到的 YAML 子集：key: value 与 key: [a, b]
export function parseSimpleYaml(yaml) {
  const data = {}
  for (const line of yaml.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/)
    if (!match) continue
    const [, key, rawValue] = match
    const value = rawValue.trim()
    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map(unquote)
        .filter(Boolean)
    } else {
      data[key] = unquote(value)
    }
  }
  return data
}

export function splitFrontmatter(content) {
  const match = content.match(FRONTMATTER_RE)
  if (!match) return { yaml: null, body: content }
  return { yaml: match[1].trim(), body: content.slice(match[0].length) }
}

// 渲染元信息卡片；无任何元信息时返回空串
export function renderMetaCard(data) {
  const tags = Array.isArray(data.tags) ? data.tags : []
  const meta = []
  if (data.version) {
    meta.push(
      `<span>版本 <strong style="color:var(--vp-c-text-1);">v${escapeHtml(data.version)}</strong></span>`
    )
  }
  if (data.last_updated) {
    meta.push(`<span>更新于 ${escapeHtml(data.last_updated)}</span>`)
  }

  if (meta.length === 0 && tags.length === 0) return ''

  const chips = tags
    .map(
      (tag) =>
        `<span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">${escapeHtml(tag)}</span>`
    )
    .join('')

  return `<!--prompt-meta-->
<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);">
${meta.length > 0 ? `  <div style="display:flex;flex-wrap:wrap;gap:2px 20px;">${meta.join('')}</div>\n` : ''}${chips ? `  <div style="margin-top:8px;">${chips}</div>\n` : ''}</div>
<!--/prompt-meta-->`
}

// docs/<rel> 相对 prompts/<rel> 的导入路径
// 例：docs/05-git/x.md        -> ../../prompts/05-git/x.md
//     docs/01-code/java/x.md  -> ../../../prompts/01-code/java/x.md
export function sourceImportPath(relPath) {
  // 过滤掉 dirname 对根级文件返回的 '.'，否则根级文件会多算一层
  const dirDepth = dirname(relPath)
    .split('/')
    .filter((seg) => seg && seg !== '.').length
  return `${'../'.repeat(dirDepth + 1)}prompts/${relPath}`
}

// 由单个源文件构建页面内容（纯函数，不落盘）。
// 模板页原样返回；其余页面注入切换按钮、元信息卡片与源码导入。
export function buildPageContent(rel, content) {
  if (isTemplate(rel)) return content

  const source = splitFrontmatter(content)
  const yaml = source.yaml
  const body = source.body.trim()
  const metaCard = renderMetaCard(yaml ? parseSimpleYaml(yaml) : {})
  const renderedBody = metaCard ? `${metaCard}\n\n${body}` : body
  // frontmatter 必须位于文件首位，放在 <script setup> 之后会被当作正文渲染
  const frontmatterBlock = yaml ? `---\n${yaml}\n---\n\n` : ''
  const importPath = sourceImportPath(rel)
  // 构建期注入正文（不含 frontmatter）：复制按钮一键拷贝的就是它。
  // JSON.stringify 保证任意内容都成为合法 JS 字符串；`</` 转义为 `<\\/`
  // 防止正文里出现 </script> 时提前闭合脚本块（与 Vite 对 raw 导入的处理一致）。
  const promptBodyJson = JSON.stringify(body).replace(/<\//g, '<\\/')

  return `${frontmatterBlock}<script setup>
import { ref } from 'vue'
import source from '${importPath}?raw'

const showSource = ref(false)
const copied = ref(false)
// 构建期注入的正文，一键复制给 AI 时直接可用
const promptBody = ${promptBodyJson}
let copyTimer = null
async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(promptBody)
  } catch {
    // 剪贴板 API 不可用时的兑底
    const ta = document.createElement('textarea')
    ta.value = promptBody
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
  copied.value = true
  clearTimeout(copyTimer)
  copyTimer = setTimeout(() => { copied.value = false }, 1500)
}
</script>

<div style="position: sticky; top: 80px; float: right; z-index: 100; margin-bottom: 12px; margin-left: 12px; display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
  <button @click="showSource = !showSource" style="padding: 6px 14px; background: var(--vp-c-brand); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: 500; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: all 0.2s ease;">
    {{ showSource ? '📖 返回阅读' : '📄 源码' }}
  </button>
  <button @click="copyPrompt" style="padding: 6px 14px; background: var(--vp-c-brand); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: 500; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: all 0.2s ease;">
    {{ copied ? '已复制' : '复制提示词' }}
  </button>
</div>

<div v-if="showSource" style="background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; max-height: 80vh; overflow: auto; margin: 20px 0; border: 1px solid #333; clear: both; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.7; white-space: pre-wrap; word-wrap: break-word;">
  <pre style="margin: 0; white-space: pre-wrap; word-wrap: break-word;"><code style="font-family: inherit; font-size: 14px; color: #d4d4d4;">{{ source }}</code></pre>
</div>

<div v-else>

${renderedBody}

</div>

<style>
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`
}

// 完整跑一遍生成：读 prompts/，重建 docs/ 下对应目录。返回处理数量。
export function generate({ promptsDir = DEFAULT_PROMPTS_DIR, docsDir = DEFAULT_DOCS_DIR, log = () => {} } = {}) {
  log('📂 扫描 prompts 目录...')
  const files = getAllMdFiles(promptsDir)
  log(`📄 找到 ${files.length} 个源文件`)

  // 生成物完全由 prompts/ 派生：先清掉本次要重建的顶层目录，避免残留过期页面
  const topDirs = readdirSync(promptsDir).filter((item) =>
    statSync(resolve(promptsDir, item)).isDirectory()
  )
  for (const dir of topDirs) {
    rmSync(resolve(docsDir, dir), { recursive: true, force: true })
  }

  // 清理孤儿目录：prompts/ 里已删除的分类，其 docs/ 页面目录也一并删除。
  // 点目录（如 .vitepress）与非目录文件（如手写的 index.md）不受影响。
  const promptTopSet = new Set(topDirs)
  if (existsSync(docsDir)) {
    for (const entry of readdirSync(docsDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue
      if (entry.name.startsWith('.')) continue
      if (!promptTopSet.has(entry.name)) {
        rmSync(resolve(docsDir, entry.name), { recursive: true, force: true })
      }
    }
  }

  let processedCount = 0
  for (const file of files) {
    const content = readFileSync(file.fullPath, 'utf-8')
    log(`生成: ${file.relPath}`)
    const page = buildPageContent(file.relPath, content)
    const dest = join(docsDir, file.relPath)
    mkdirSync(dirname(dest), { recursive: true })
    writeFileSync(dest, page, 'utf-8')
    processedCount++
    if (isTemplate(file.relPath)) {
      log('  ✅ 已复制（模板页不注入）')
    } else {
      const { body } = splitFrontmatter(content)
      log(`  ✅ 已生成 (正文长度: ${body.trim().length})`)
    }
  }

  log(`\n✅ 完成！共生成 ${processedCount} 个页面`)
  return processedCount
}

function main() {
  generate({
    promptsDir: DEFAULT_PROMPTS_DIR,
    docsDir: DEFAULT_DOCS_DIR,
    log: (msg) => console.log(msg),
  })
}

// 仅在作为 CLI 直接执行时落盘；被测试 import 时不产生副作用
const isCli = process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href
if (isCli) {
  main()
}
