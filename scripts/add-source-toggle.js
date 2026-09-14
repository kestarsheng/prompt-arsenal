// scripts/add-source-toggle.js
import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = resolve(__dirname, '../docs')

// 已处理文件的标记：文件已被本脚本重写过
const PROCESSED_MARK = 'import { ref }'

// 从已处理文件中取回 <div v-else> 内的正文
const EXTRACT_RE = /<div v-else>\n*([\s\S]*)<\/div>\s*<style>/

// 元信息卡片整体（含标记注释），重新处理时先剥离再重建
const META_CARD_RE = /<!--prompt-meta-->[\s\S]*?<!--\/prompt-meta-->\n*/

// 文件或正文开头的 YAML frontmatter
const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n*/

const forceMode = process.argv.includes('--force')
const excludeFiles = ['index.md', 'README.md']
// templates/ 是给贡献者复制的脚手架，frontmatter 与正文都是占位示例，
// 按真实提示词页处理会把占位值渲染成元信息卡片
const excludeDirs = ['templates']

function getAllMdFiles(dir, basePath = '') {
  const items = readdirSync(dir)
  const files = []
  for (const item of items) {
    if (item.startsWith('.')) continue
    const fullPath = resolve(dir, item)
    const stat = statSync(fullPath)
    const relPath = basePath ? `${basePath}/${item}` : item
    if (stat.isDirectory()) {
      if (excludeDirs.includes(item)) continue
      files.push(...getAllMdFiles(fullPath, relPath))
    } else if (item.endsWith('.md')) {
      if (excludeFiles.includes(item)) continue
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

// 还原出原始 Markdown 的 frontmatter 与正文
function extractSource(content) {
  const processed = content.includes(PROCESSED_MARK)

  let body
  if (processed) {
    const match = content.match(EXTRACT_RE)
    if (!match || !match[1].trim()) return null
    body = match[1].replace(META_CARD_RE, '').trim()
  } else {
    body = content.trim()
  }
  if (!body) return null

  // frontmatter 可能位于文件顶部（本脚本生成后的格式），
  // 也可能仍留在正文开头（首次处理的旧格式），两种都要能取回
  const outer = processed ? splitFrontmatter(content) : { yaml: null }
  if (outer.yaml) return { yaml: outer.yaml, body }

  const inner = splitFrontmatter(body)
  return { yaml: inner.yaml, body: inner.body.trim() }
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

function replaceMustache(content) {
  return content.replace(/\{\{([^}]+)\}\}/g, '[$1]')
}

function processFile(file, content) {
  console.log(`处理: ${file.relPath}`)

  const source = extractSource(content)
  if (!source) {
    // 提取失败说明文件格式不符合预期，写入会损坏正文，故跳过
    console.warn('  ⚠️ 跳过：无法提取正文（格式异常），文件未修改')
    return false
  }

  const yaml = source.yaml ? replaceMustache(source.yaml) : null
  const body = replaceMustache(source.body)
  const metaCard = renderMetaCard(yaml ? parseSimpleYaml(yaml) : {})
  const renderedBody = metaCard ? `${metaCard}\n\n${body}` : body
  // frontmatter 必须位于文件首位，放在 <script setup> 之后会被当作正文渲染
  const frontmatterBlock = yaml ? `---\n${yaml}\n---\n\n` : ''

  const newContent = `${frontmatterBlock}<script setup>
import { ref } from 'vue'
import source from './${file.fileName}?raw'

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

  writeFileSync(file.fullPath, newContent, 'utf-8')
  console.log(`  ✅ 已处理 (正文长度: ${renderedBody.length})`)
  return true
}

function main() {
  console.log('📂 扫描 docs 目录...')
  const files = getAllMdFiles(docsDir)
  console.log(`📄 找到 ${files.length} 个 .md 文件${forceMode ? ' (强制模式)' : ''}`)

  let processedCount = 0
  for (const file of files) {
    const content = readFileSync(file.fullPath, 'utf-8')
    if (content.includes(PROCESSED_MARK) && !forceMode) continue
    if (processFile(file, content)) processedCount++
  }

  console.log(`\n✅ 完成！共处理 ${processedCount} 个文件`)
}

main()
