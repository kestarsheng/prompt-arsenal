// scripts/add-source-toggle.js
import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs'
import { resolve, join, relative, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = resolve(__dirname, '../docs')

// 需要排除的文件（不需要添加按钮的文件）
const excludeFiles = [
  'index.md',
  'README.md'
]

// 递归扫描所有 .md 文件
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
      // 跳过排除的文件
      if (excludeFiles.includes(item)) continue
      files.push({
        fullPath,
        relPath,
        fileName: item
      })
    }
  }

  return files
}

// 判断文件是否已经被包裹
function isAlreadyWrapped(content) {
  return content.includes('<SourceCodeToggle') && content.includes('</SourceCodeToggle>')
}

// 处理单个文件
function processFile(file) {
  console.log(`处理: ${file.relPath}`)

  let content = readFileSync(file.fullPath, 'utf-8')

  // 如果已经被包裹，跳过
  if (isAlreadyWrapped(content)) {
    console.log(`  跳过（已包裹）`)
    return
  }

  // 计算相对于 docs 目录的路径（用于 import 语句）
  const relativeToDocs = relative(docsDir, dirname(file.fullPath))
  const importPath = relativeToDocs ? 
    `'${relativeToDocs.replace(/\\/g, '/')}/SourceCodeToggle.vue'` : 
    "'./SourceCodeToggle.vue'"

  // 构建新的文件内容
  const newContent = `<script setup>
import SourceCodeToggle from ${importPath}
import source from './${file.fileName}?raw'
</script>

<SourceCodeToggle :source="source">
  <template #rendered>

${content}

  </template>
</SourceCodeToggle>
`

  writeFileSync(file.fullPath, newContent, 'utf-8')
  console.log(`  ✅ 已添加源码切换按钮`)
}

// 主函数
function main() {
  console.log('📂 扫描 docs 目录...')
  const files = getAllMdFiles(docsDir)
  console.log(`📄 找到 ${files.length} 个 .md 文件`)

  let processedCount = 0
  for (const file of files) {
    const content = readFileSync(file.fullPath, 'utf-8')
    if (!isAlreadyWrapped(content)) {
      processFile(file)
      processedCount++
    }
  }

  console.log(`\n✅ 完成！共处理 ${processedCount} 个文件`)
}

main()