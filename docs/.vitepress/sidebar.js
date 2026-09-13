// docs/.vitepress/sidebar.js
// 扫描 docs 目录自动生成侧边栏数据，支持无限层级嵌套
import { readdirSync, statSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const docsDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function scanDir(dir, parentPath = '') {
  const result = []

  for (const item of readdirSync(dir)) {
    if (item.startsWith('.') || item === 'index.md') continue

    const stat = statSync(resolve(dir, item))
    const linkPath = parentPath ? `${parentPath}/${item}` : item

    if (stat.isDirectory()) {
      const children = scanDir(resolve(dir, item), linkPath)
      if (children.length > 0) {
        result.push({
          text: item,
          collapsed: true,
          items: children
        })
      }
    } else if (item.endsWith('.md')) {
      result.push({
        text: item.replace(/\.md$/, ''),
        link: '/' + linkPath.replace(/\.md$/, '')
      })
    }
  }

  return result
}

export const sidebarData = scanDir(docsDir)
