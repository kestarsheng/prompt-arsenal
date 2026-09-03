---
tags: [git, automation]
version: 1.0.0
last_updated: 2026-09-03
---

# 生成规范的Git提交信息

## 适用场景
写完代码后，需要写符合 Conventional Commits 规范的提交信息。

## 提示词模板

请根据以下代码改动生成 Git 提交信息，遵循 Conventional Commits 规范：

    [在这里粘贴 git diff 或简要描述改动]

输出格式必须严格按照以下结构：

    <type>(<scope>): <subject>

    <body>

    <footer>

其中：

- type 可选：feat, fix, docs, style, refactor, perf, test, chore
- scope 是改动的模块名（如 auth, payment, api）
- subject 用现在时，不超过50字符
- body 用 `-` 列表说明具体改动（如有多个改动点）
- footer 标注 BREAKING CHANGE 或关闭的 Issue（如有关联）

## 使用示例

**输入**：在 UserService 里新增了 resetPassword 方法，加了单元测试

**AI输出**：

    feat(auth): add password reset functionality

    - Implement resetPassword method in UserService
    - Add input validation for email and new password
    - Create corresponding unit tests for success and failure cases