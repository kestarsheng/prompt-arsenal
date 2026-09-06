// 项目根目录/vite.config.js
import { defineConfig } from 'vite'
import { readdirSync, statSync } from 'fs'
import { resolve } from 'path'

// 自动扫描 docs 目录生成侧边栏数据的函数
function generateSidebar() {
  const docsDir = resolve(process.cwd(), 'docs')
  
  function scanDir(dir, parentPath = '') {
    const items = readdirSync(dir)
    const result = []
    
    for (const item of items) {
      // 跳过隐藏文件和特殊文件
      if (item.startsWith('.') || item === 'index.md') continue
      
      const fullPath = resolve(dir, item)
      const stat = statSync(fullPath)
      // 构建相对路径，用于生成链接
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
        // 构建 VitePress 链接路径（去掉 docs 前缀）
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

// 将侧边栏数据注入到 VitePress 配置中
export default defineConfig({
  // 这个配置会被 VitePress 自动合并
  // 我们通过环境变量或自定义属性传递侧边栏数据
})

// 导出侧边栏数据供 config.js 使用
export const sidebarData = generateSidebar()