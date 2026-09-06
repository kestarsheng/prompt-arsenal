// scripts/add-source-toggle.js
import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = resolve(__dirname, '../docs')

// 需要排除的文件
const excludeFiles = ['index.md', 'README.md']

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
      if (excludeFiles.includes(item)) continue
      files.push({
        fullPath,
        relPath,
        fileName: item,
        relativeDir: dirname(relPath)
      })
    }
  }

  return files
}

// 判断是否已被包裹
function isAlreadyWrapped(content) {
  return content.includes('<SourceCodeToggle') && content.includes('</SourceCodeToggle>')
}

// 计算组件导入路径
function getComponentImportPath(file) {
  const fileDir = file.relativeDir
  const depth = fileDir === '.' ? 0 : fileDir.split('/').length
  const prefix = depth === 0 ? '.' : '../'.repeat(depth)
  return `${prefix}.vitepress/components/SourceCodeToggle.vue`
}

function wrapMustacheWithVPre(content) {
  const lines = content.split('\n')
  const newLines = []
  let insideCodeBlock = false
  
  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      insideCodeBlock = !insideCodeBlock
      newLines.push(line)
      continue
    }
    
    if (insideCodeBlock) {
      newLines.push(line)
      continue
    }
    
    // 🔧 核心改动：把 {{变量}} 替换为 [变量]
    let newLine = line
    // 匹配 {{xxx}} 并替换为 [xxx]
    newLine = newLine.replace(/\{\{([^}]+)\}\}/g, '[$1]')
    newLines.push(newLine)
  }
  
  return newLines.join('\n')
}

// 处理单个文件
function processFile(file) {
  console.log(`处理: ${file.relPath}`)

  let content = readFileSync(file.fullPath, 'utf-8')

  if (isAlreadyWrapped(content)) {
    console.log(`  跳过（已包裹）`)
    return
  }

  // 🔧 新增：处理 {{ }} 语法
  content = wrapMustacheWithVPre(content)

  const importPath = getComponentImportPath(file)

  const newContent = `<script setup>
import SourceCodeToggle from '${importPath}'
import source from './${file.fileName}?raw'
</script>

<SourceCodeToggle :source="source">
  <template #rendered>

${content}

  </template>
</SourceCodeToggle>
`

  writeFileSync(file.fullPath, newContent, 'utf-8')
  console.log(`  ✅ 已添加源码切换按钮 (import: ${importPath})`)
}

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