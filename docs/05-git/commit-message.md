---
tags: [git, automation]
version: 1.1.0
last_updated: 2026-09-04
---

# 生成规范的Git提交信息（中英混合版）

## 适用场景
写完代码后，需要写符合 Conventional Commits 规范的提交信息，但描述部分用中文更清晰。

## 提示词模板
请根据以下代码改动生成 Git 提交信息，遵循 Conventional Commits 规范：
[在这里粘贴 git diff 或简要描述改动]

**输出格式：**
    `[type]`(`[scope]`): `[中文主题]`
    - `[中文改动点1]`
    - `[中文改动点2]`
    - `[中文改动点3]`

type 可选：feat（新功能）, fix（修复）, docs（文档）, style（格式）, refactor（重构）, perf（性能）, test（测试）, chore（杂务）
scope 是改动的模块名（如 auth, payment, api）
subject 用中文描述，不超过50字
body 用 - 列表说明具体改动，用中文描述

## 使用示例
**输入：** 在 UserService 里新增了 resetPassword 方法，加了单元测试

**AI输出：**
feat(auth): 添加密码重置功能
- 在 UserService 中实现 resetPassword 方法
- 增加邮箱和新密码的输入校验
- 新增成功和失败场景的单元测试

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 1.1.0 (2026-09-04): 改为中英双语标题格式，正文改用中文列表