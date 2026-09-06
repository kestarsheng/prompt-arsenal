import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
// 从根目录的 vite.config.js 导入侧边栏数据
import { sidebarData } from '../../vite.config.js'

export default defineConfig({
  title: 'prompt-arsenal',
  description: '结构化AI提示词模板库，覆盖代码生成、审查、Git提交等开发场景',
  base: '/prompt-arsenal/',
  lang: 'zh-cn',

  vite: {
    plugins: [
      pagefindPlugin({
        btnPlaceholder: '搜索文档',
        placeholder: '搜索提示词...',
        emptyText: '没有找到相关内容',
        heading: '共 {{searchResult}} 条结果',
        forceLanguage: 'zh-cn'
      })
    ],
    ssr: {
      noExternal: ['vitepress-plugin-pagefind']
    },
    optimizeDeps: {
      include: ['vitepress-plugin-pagefind']
    }
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/kestarsheng/prompt-arsenal' },
    ],
    // 使用从 vite.config.js 导入的侧边栏数据
    sidebar: sidebarData,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kestarsheng/prompt-arsenal' }
    ],
    outline: {
      level: [2, 3],
      label: '本页目录'
    }
  }
})