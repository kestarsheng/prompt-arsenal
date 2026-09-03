# 🧠 我的个人AI提示词库

> 一个持续更新的AI提示词集合，用于提升日常开发效率。

## 📂 目录结构

| 目录 | 用途 |
| :--- | :--- |
| `01-code-generation/` | 生成各类代码（Java/Python/SQL/API） |
| `02-code-review/` | 代码审查检查清单 |
| `03-debugging/` | 异常分析和性能问题定位 |
| `04-refactoring/` | 代码重构建议 |
| `05-git/` | Git提交信息、PR描述生成 |
| `06-documentation/` | API文档、README生成 |
| `07-architecture/` | 系统设计、数据库设计 |
| `08-learning/` | 概念解释、技术对比 |
| `09-面试/` | 模拟面试、项目经验梳理 |
| `templates/` | 空白模板，用于创建新提示词 |

## 🚀 快速使用

### 查找提示词

    find . -name "*.md" | grep "关键词"

### 复制提示词内容

    cat 05-git/commit-message.md

然后把输出的提示词粘贴给AI（Claude/ChatGPT）即可。

## 📝 如何添加新提示词

1. 复制 `templates/prompt-template.md` 到对应目录
2. 重命名为 `描述性名称.md`
3. 填写内容
4. 提交到Git仓库

## 🔄 持续更新

这个库会随我的使用反馈持续迭代，每次优化后都会记录在文件的 **迭代记录** 部分。

> 开始时间：2026-09-03