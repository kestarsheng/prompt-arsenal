import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'prompt-arsenal',
  description: '结构化AI提示词模板库，覆盖代码生成、审查、Git提交等开发场景',
  base: '/prompt-arsenal/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/kestarsheng/prompt-arsenal' },
    ],
    sidebar: {
      // 自动根据目录结构生成侧边栏
      '/': getSidebar()
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kestarsheng/prompt-arsenal' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    }
  }
})

// 自动生成侧边栏的函数
function getSidebar() {
  return [
    {
      text: '代码生成',
      collapsed: false,
      items: [
        { text: 'Spring Controller (Java)', link: '/01-code-generation/java/spring-controller' },
        { text: 'FastAPI CRUD (Python)', link: '/01-code-generation/python/fastapi-crud' },
        { text: 'SQL 建表语句', link: '/01-code-generation/sql/create-table' }
      ]
    },
    {
      text: '代码审查',
      collapsed: false,
      items: [
        { text: 'Java 代码审查', link: '/02-code-review/java-review' }
      ]
    },
    {
      text: '调试与重构',
      collapsed: false,
      items: [
        { text: '异常堆栈分析', link: '/03-debugging/exception-analyzer' },
        { text: '拆分大类', link: '/04-refactoring/split-large-class' }
      ]
    },
    {
      text: 'Git 辅助',
      collapsed: false,
      items: [
        { text: '生成提交信息', link: '/05-git/commit-message' },
        { text: '基于会话生成提交信息', link: '/05-git/commit-from-session' }
      ]
    },
    {
      text: '文档生成',
      collapsed: false,
      items: [
        { text: 'API 文档生成', link: '/06-documentation/api-doc' },
        { text: '工作总结日志', link: '/06-documentation/work-log' }
      ]
    },
    {
      text: '系统设计',
      collapsed: false,
      items: [
        { text: '系统设计方案', link: '/07-architecture/system-design' }
      ]
    },
    {
      text: '学习与面试',
      collapsed: false,
      items: [
        { text: '技术概念解释', link: '/08-learning/explain-concept' },
        { text: '模拟面试（AI自动搜索面经）', link: '/09-面试/mock-interview' }
      ]
    },
    {
      text: '模板工具',
      collapsed: false,
      items: [
        { text: '空白模板', link: '/templates/prompt-template' }
      ]
    }
  ]
}