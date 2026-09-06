// scripts/add-source-toggle.js
import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = resolve(__dirname, '../docs')

const forceMode = process.argv.includes('--force')
const excludeFiles = ['index.md', 'README.md']

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
      if (excludeFiles.includes(item)) continue
      files.push({ fullPath, relPath, fileName: item, relativeDir: dirname(relPath) })
    }
  }
  return files
}

function getComponentImportPath(file) {
  const fileDir = file.relativeDir
  const depth = fileDir === '.' ? 0 : fileDir.split('/').length
  const prefix = depth === 0 ? '.' : '../'.repeat(depth)
  return `${prefix}.vitepress/components/SourceCodeToggle.vue`
}

function replaceMustache(content) {
  return content.replace(/\{\{([^}]+)\}\}/g, '[$1]')
}

function cleanContent(content) {
  let cleaned = content
  cleaned = cleaned.replace(/<script setup>[\s\S]*?<\/script>\n?/g, '')
  cleaned = cleaned.replace(/<SourceCodeToggle[\s\S]*?<\/SourceCodeToggle>/g, '')
  cleaned = cleaned.replace(/<\/template>/g, '')
  cleaned = cleaned.replace(/<template[^>]*>/g, '')
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n')
  return cleaned.trim()
}

function processFile(file) {
  console.log(`处理: ${file.relPath}`)
  
  let content = readFileSync(file.fullPath, 'utf-8')
  
  if (!forceMode && content.includes('import SourceCodeToggle')) {
    console.log(`  跳过（已包裹）`)
    return
  }

  content = cleanContent(content)
  content = replaceMustache(content)

  // 🔧 最终方案：使用 script + v-html，不添加任何标签
  const newContent = `<script setup>
import { ref } from 'vue'
import source from './${file.fileName}?raw'

const showSource = ref(false)
</script>

<button @click="showSource = !showSource" class="source-toggle-btn">
  {{ showSource ? '📖 返回阅读' : '📄 源码' }}
</button>

<div v-if="showSource" class="source-code-container">
  <pre><code>{{ source }}</code></pre>
</div>

<div v-else>

${content}

</div>

<style>
.source-toggle-btn {
  position: sticky;
  top: 80px;
  float: right;
  z-index: 100;
  padding: 6px 14px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: all 0.2s ease;
  margin-bottom: 12px;
  margin-left: 12px;
}
.source-toggle-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.source-code-container {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 24px;
  border-radius: 8px;
  max-height: 80vh;
  overflow: auto;
  margin: 20px 0;
  border: 1px solid #333;
  clear: both;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.source-code-container pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.source-code-container code {
  font-family: inherit;
  font-size: 14px;
  color: #d4d4d4;
}
html.dark .source-code-container {
  background: #0d0d0d;
  border-color: #2d2d2d;
}
</style>
`

  writeFileSync(file.fullPath, newContent, 'utf-8')
  console.log(`  ✅ 已处理`)
}

function main() {
  console.log('📂 扫描 docs 目录...')
  const files = getAllMdFiles(docsDir)
  console.log(`📄 找到 ${files.length} 个 .md 文件${forceMode ? ' (强制模式)' : ''}`)

  let processedCount = 0
  for (const file of files) {
    const content = readFileSync(file.fullPath, 'utf-8')
    if (forceMode || !content.includes('import SourceCodeToggle')) {
      processFile(file)
      processedCount++
    }
  }

  console.log(`\n✅ 完成！共处理 ${processedCount} 个文件`)
}

main()