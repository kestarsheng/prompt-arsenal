# 🧠 我的个人AI提示词库

> 一个持续更新的AI提示词集合，用于提升日常开发效率。

📖 在线文档：https://kestarsheng.github.io/prompt-arsenal/

## 📂 目录结构

| 目录 | 用途 |
| :--- | :--- |
| `docs/01-code-generation/` | 生成各类代码（Java/Python/SQL/API） |
| `docs/02-code-review/` | 代码审查检查清单 |
| `docs/03-debugging/` | 异常分析和性能问题定位 |
| `docs/04-refactoring/` | 代码重构建议 |
| `docs/05-git/` | Git提交信息、PR描述生成 |
| `docs/06-documentation/` | API文档、README生成 |
| `docs/07-architecture/` | 系统设计、数据库设计 |
| `docs/08-learning/` | 概念解释、技术对比 |
| `docs/09-面试/` | 模拟面试、项目经验梳理 |
| `docs/templates/` | 空白模板，用于创建新提示词 |

侧边栏由 `docs/.vitepress/sidebar.js` 自动扫描 `docs/` 生成，新增文件无需手动登记。

## 🚀 快速使用

### 在线阅读

打开 https://kestarsheng.github.io/prompt-arsenal/ ，每页右上角有 **「📄 源码」** 按钮，可查看该文件的原始 Markdown。

> ⚠️ 源码面板包含的是磁盘上的完整文件，顶部是 frontmatter 与页面包装代码。**提示词正文从第一个 `#` 标题开始**，复制时请从标题行起。

### 取出纯提示词正文

`docs/` 下的文件被 `npm run add-toggle` 注入了阅读/源码切换的包装代码：顶部是脚本生成的标记（frontmatter、`<script setup>`、按钮样式、元信息卡片），文件末尾还跟着 `</div>` 与 `<style>` 块。**正文始终从 `#` 标题行开始**（当前 13 个文件均为第 33 行）。直接 `cat` 会把包装代码一起拷走。

用下面的命令只取正文（Git Bash）：

    awk '/^# /{f=1} f&&/^<\/div>/{exit} f' docs/05-git/commit-message.md

> 局限：该命令在标题之后遇到第一个 `</div>` 行就停止。若正文中出现以 `</div>` 开头的 HTML 示例，会被截断（当前 13 个文件均无此情况）。

### 本地查找

    find docs -name "*.md" | grep "关键词"

注意限定在 `docs/` 目录下。全仓库共有 186 个 `.md`，其中 170 个在 `node_modules/` 里；例如搜 `readme` 时限定 `docs/` 命中 0 个，不限定则命中 147 个无关文件。

## 📝 如何添加新提示词

1. 复制 `docs/templates/prompt-template.md` 到目标目录，重命名为 `描述性名称.md`
2. 填写文件顶部的 YAML frontmatter：

   | 字段 | 作用 |
   | :--- | :--- |
   | `tags` | 标签数组，在页面顶部渲染为标签胶囊 |
   | `version` | 版本号，渲染为「版本 vX.Y.Z」 |
   | `last_updated` | 更新日期，渲染为「更新于 YYYY-MM-DD」 |

   三个字段都可省略；全部为空时不渲染元信息卡片。
3. 正文从 `#` 标题开始，按模板的章节填写。变量占位符统一写作 `[变量名]`（脚本会自动把 `{{变量名}}` 转成 `[变量名]`）。
4. 本地预览：`npm run docs:dev`
5. 提交并推送到 `main` —— GitHub Actions 会自动构建并部署到 Pages，无需手动操作。
   > 页面包装代码由 `npm run docs:build` 自动生成，**不要手工编辑或删除**。

## 🔄 持续更新

这个库会随我的使用反馈持续迭代，每次优化后都会记录在文件的 **迭代记录** 部分。

> 开始时间：2026-09-03
