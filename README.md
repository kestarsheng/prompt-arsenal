# 🧠 我的个人AI提示词库

> 一个持续更新的AI提示词集合，用于提升日常开发效率。

📖 在线文档：https://kestarsheng.github.io/prompt-arsenal/

## 📂 目录结构

**`prompts/` 是提示词的唯一真相**，直接手工编辑并提交；`docs/` 是站点，其中页面由 `prompts/` 生成。

| 目录 | 用途 |
| :--- | :--- |
| `prompts/01-code-generation/` | 生成各类代码（Java/Python/SQL/API） |
| `prompts/02-code-review/` | 代码审查检查清单 |
| `prompts/03-debugging/` | 异常分析和性能问题定位 |
| `prompts/04-refactoring/` | 代码重构建议 |
| `prompts/05-git/` | Git提交信息、PR描述生成 |
| `prompts/06-documentation/` | API文档、README生成 |
| `prompts/07-architecture/` | 系统设计、数据库设计 |
| `prompts/08-learning/` | 概念解释、技术对比 |
| `prompts/09-面试/` | 模拟面试、项目经验梳理 |
| `prompts/templates/` | 空白模板，用于创建新提示词 |
| `docs/index.md` | 站点首页（手写，需要提交） |

### 页面是怎么生成的

`npm run gen-pages`（`scripts/generate-pages.js`）读取 `prompts/` 下的源文件，在 `docs/` 下生成对应页面，为其加上阅读/源码切换按钮与元信息卡片。

脚本**只读 `prompts/`、只写 `docs/`**，源文件永不被改写——所以 `prompts/` 里放着的就是可以直接复制使用的纯提示词，不存在「从已包装的页面里反推原文」这一步，也就不会有反推导致的正文损坏。

`docs:dev` 与 `docs:build` 都会先自动执行这一步。生成的页面已在 `.gitignore` 中，不必提交。侧边栏由 `docs/.vitepress/sidebar.js` 自动扫描 `docs/` 生成，新增文件无需手动登记。

## 🚀 快速使用

### 在线阅读

打开 https://kestarsheng.github.io/prompt-arsenal/ 。每页右上角有 **「📄 源码」** 按钮，点开即是该文件的原始 Markdown，内容与 `prompts/` 下的源文件一致。

### 直接取用提示词

`prompts/` 下的文件就是纯提示词，不含任何包装代码，直接查看即可：

    cat prompts/05-git/commit-message.md

文件顶部是 YAML frontmatter，随后是 `#` 标题与正文，整份复制即可使用。

### 本地查找

    find prompts -name "*.md" | grep "关键词"

注意限定在 `prompts/` 目录下：`docs/` 里是生成物，`node_modules/` 里另有 170 个无关的 `.md`。

## 📝 如何添加新提示词

1. 复制 `prompts/templates/prompt-template.md` 到目标目录，重命名为 `描述性名称.md`
2. 填写文件顶部的 YAML frontmatter：

   | 字段 | 作用 |
   | :--- | :--- |
   | `tags` | 标签数组，在页面顶部渲染为标签胶囊 |
   | `version` | 版本号，渲染为「版本 vX.Y.Z」 |
   | `last_updated` | 更新日期，渲染为「更新于 YYYY-MM-DD」 |

   三个字段都可省略；全部为空时不渲染元信息卡片。模板页本身是占位示例，不会被注入元信息卡片。
3. 正文从 `#` 标题开始，按模板的章节填写。变量占位符统一写作 `[变量名]`。
4. 本地预览：`npm run docs:dev`
5. 提交并推送到 `main` —— GitHub Actions 会自动构建并部署到 Pages，无需手动操作。

   > 请只编辑 `prompts/` 下的源文件。`docs/` 下的页面是生成物，会被下一次构建覆盖。

## 🔄 持续更新

这个库会随我的使用反馈持续迭代，每次优化后都会记录在文件的 **迭代记录** 部分。

> 开始时间：2026-09-03
