// 项目根目录/vite.config.js
import { defineConfig } from 'vite'
import { readdirSync, statSync, readFileSync } from 'fs'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import raw from 'vite-plugin-raw'

// 自动扫描 docs 目录生成侧边栏数据的函数
function generateSidebar() {
  const docsDir = resolve(process.cwd(), 'docs')
  
  function scanDir(dir, parentPath = '') {
    const items = readdirSync(dir)
    const result = []
    
    for (const item of items) {
      if (item.startsWith('.') || item === 'index.md') continue
      
      const fullPath = resolve(dir, item)
      const stat = statSync(fullPath)
      const linkPath = parentPath ? `${parentPath}/${item}` : item
      
      if (stat.isDirectory()) {
        const children = scanDir(fullPath, linkPath)
        if (children.length > 0) {
          result.push({
            text: item,
            collapsed: true,
            items: children
          })
        }
      } else if (item.endsWith('.md')) {
        const name = item.replace(/\.md$/, '')
        const link = '/' + linkPath.replace(/\.md$/, '')
        result.push({
          text: name,
          link: link
        })
      }
    }
    return result
  }
  
  return scanDir(docsDir)
}

// 预生成源码映射
function generateSourceMap() {
  const docsDir = resolve(process.cwd(), 'docs')
  const map = {}
  
  function scanDirForSource(dir, basePath = '') {
    const items = readdirSync(dir)
    
    for (const item of items) {
      if (item.startsWith('.')) continue
      
      const fullPath = resolve(dir, item)
      const stat = statSync(fullPath)
      const relPath = basePath ? `${basePath}/${item}` : item
      
      if (stat.isDirectory()) {
        scanDirForSource(fullPath, relPath)
      } else if (item.endsWith('.md')) {
        const key = '/' + relPath
        try {
          const content = readFileSync(fullPath, 'utf-8')
          map[key] = content
        } catch (e) {
          console.warn(`读取文件失败: ${fullPath}`)
          map[key] = '读取文件失败'
        }
      }
    }
  }
  
  scanDirForSource(docsDir)
  return map
}

const sourceMap = generateSourceMap()
const sidebarData = generateSidebar()

export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/] }),
    raw({ fileRegex: /\.md$/ })
  ],
  // 关键：这里的 define 配置需要保留
  define: {
    '__SOURCE_MAP__': sourceMap
  },
  optimizeDeps: {
    include: ['vue']
  },
  server: {
    fs: {
      allow: [
        resolve(__dirname, 'node_modules')
      ]
    }
  }
})

// 导出侧边栏数据供 VitePress config.js 使用
export { sidebarData }