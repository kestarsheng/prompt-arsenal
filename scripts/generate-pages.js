// scripts/generate-pages.js
// 从 prompts/ 的干净源文件生成 docs/ 下的站点页面。
//
// 设计要点：源文件永不被改写。本脚本只读 prompts/、只写 docs/，
// 因此不存在「从已改写文件中反推原始正文」的往返逻辑，
// 也就不存在往返导致正文被截断/损坏的可能。
import { readdirSync, readFileSync, writeFileSync, statSync, mkdirSync, rmSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const promptsDir = join(rootDir, 'prompts')
const docsDir = join(rootDir, 'docs')

// 模板是给贡献者复制的脚手架：其 frontmatter 与正文都是占位示例，
// 注入元信息卡片会把占位值渲染成真实数据，故原样复制、不注入。
const isTemplate = (rel) => rel.startsWith('templates/')

// 页面开头的 YAML frontmatter
const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/

function getAllMdFiles(dir, basePath = '') {
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

function escapeHtml(text) {
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
function parseSimpleYaml(yaml) {
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

function splitFrontmatter(content) {
  const match = content.match(FRONTMATTER_RE)
  if (!match) return { yaml: null, body: content }
  return { yaml: match[1].trim(), body: content.slice(match[0].length) }
}

// 渲染元信息卡片；无任何元信息时返回空串
function renderMetaCard(data) {
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
function sourceImportPath(relPath) {
  const dirDepth = dirname(relPath).split('/').filter(Boolean).length
  return `${'../'.repeat(dirDepth + 1)}prompts/${relPath}`
}

function processFile(file, content) {
  const rel = file.relPath
  console.log(`生成: ${rel}`)

  // 模板页原样搬运，不注入
  if (isTemplate(rel)) {
    const dest = join(docsDir, rel)
    mkdirSync(dirname(dest), { recursive: true })
    writeFileSync(dest, content, 'utf-8')
    console.log('  ✅ 已复制（模板页不注入）')
    return true
  }

  const source = splitFrontmatter(content)
  const yaml = source.yaml
  const body = source.body.trim()
  const metaCard = renderMetaCard(yaml ? parseSimpleYaml(yaml) : {})
  const renderedBody = metaCard ? `${metaCard}\n\n${body}` : body
  // frontmatter 必须位于文件首位，放在 <script setup> 之后会被当作正文渲染
  const frontmatterBlock = yaml ? `---\n${yaml}\n---\n\n` : ''
  const importPath = sourceImportPath(rel)

  const newContent = `${frontmatterBlock}<script setup>
import { ref } from 'vue'
import source from '${importPath}?raw'

const showSource = ref(false)
</script>

<div style="position: sticky; top: 80px; float: right; z-index: 100; margin-bottom: 12px; margin-left: 12px;">
  <button @click="showSource = !showSource" style="padding: 6px 14px; background: var(--vp-c-brand); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: 500; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: all 0.2s ease;">
    {{ showSource ? '📖 返回阅读' : '📄 源码' }}
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

  const dest = join(docsDir, rel)
  mkdirSync(dirname(dest), { recursive: true })
  writeFileSync(dest, newContent, 'utf-8')
  console.log(`  ✅ 已生成 (正文长度: ${renderedBody.length})`)
  return true
}

function main() {
  console.log('📂 扫描 prompts 目录...')
  const files = getAllMdFiles(promptsDir)
  console.log(`📄 找到 ${files.length} 个源文件`)

  // 生成物完全由 prompts/ 派生：先清掉本次要重建的顶层目录，避免残留过期页面
  const topDirs = readdirSync(promptsDir).filter((item) =>
    statSync(resolve(promptsDir, item)).isDirectory()
  )
  for (const dir of topDirs) {
    rmSync(resolve(docsDir, dir), { recursive: true, force: true })
  }

  let processedCount = 0
  for (const file of files) {
    const content = readFileSync(file.fullPath, 'utf-8')
    if (processFile(file, content)) processedCount++
  }

  console.log(`\n✅ 完成！共生成 ${processedCount} 个页面`)
}

main()
