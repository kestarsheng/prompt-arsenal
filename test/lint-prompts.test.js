// lint 规则的逐条测试：每个规则配合法与违规夹具。
import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import { lintPrompt, findEmojis } from '../scripts/lint-prompts.js'

const VALID = `---
tags: [git, automation]
version: 1.1.0
last_updated: 2026-09-17
---

# 生成规范的Git提交信息

## 适用场景
写完代码后使用。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[diff]\` | 改动内容 | 粘贴 diff |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

【任务】
根据 [diff] 生成提交信息。

## 使用示例
**输入：** 一段改动

**AI 输出：** feat(auth): 示例

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 1.1.0 (2026-09-17): 按新模板重构
`

describe('lintPrompt 合法样例', () => {
  test('完全合规的文件零问题', () => {
    assert.deepEqual(lintPrompt('05-git/commit-message.md', VALID), [])
  })

  test('模板页豁免 frontmatter/章节规则，仅查 emoji', () => {
    const tpl = '---\ntags: [标签1, 标签2]\nversion: 1.0.0\nlast_updated: YYYY-MM-DD\n---\n\n# 提示词标题\n\n占位\n'
    assert.deepEqual(lintPrompt('templates/prompt-template.md', tpl), [])
  })
})

describe('R1 frontmatter 契约', () => {
  test('缺少 frontmatter', () => {
    const issues = lintPrompt('x/a.md', '# 标题\n\n## 适用场景\nx\n\n## 提示词模板\nx\n\n## 使用示例\nx\n\n## 迭代记录\n- 1.0.0 (2026-09-17): x\n')
    assert.equal(issues.some((i) => i.rule === 'frontmatter' && i.message.includes('缺少 frontmatter')), true)
  })

  test('version 不是 semver', () => {
    const bad = VALID.replace('version: 1.1.0', 'version: v1')
    assert.equal(lintPrompt('x/a.md', bad).some((i) => i.rule === 'frontmatter' && i.message.includes('version')), true)
  })

  test('last_updated 不是合法日期', () => {
    const bad = VALID.replace('last_updated: 2026-09-17', 'last_updated: 2026-9-17')
    assert.equal(lintPrompt('x/a.md', bad).some((i) => i.rule === 'frontmatter' && i.message.includes('last_updated')), true)
  })
})

describe('R2 必需章节', () => {
  test('缺少「使用示例」被检出', () => {
    const bad = VALID.split('## 使用示例')[0] + '## 迭代记录\n- 1.1.0 (2026-09-17): x\n'
    assert.equal(lintPrompt('x/a.md', bad).some((i) => i.rule === 'sections' && i.message.includes('使用示例')), true)
  })
})

describe('R3 迭代记录对齐', () => {
  test('version 不一致', () => {
    const bad = VALID.replace('version: 1.1.0', 'version: 1.2.0')
    const issues = lintPrompt('x/a.md', bad)
    assert.equal(issues.some((i) => i.rule === 'iteration' && i.message.includes('version')), true)
  })

  test('日期不一致', () => {
    const bad = VALID.replace('last_updated: 2026-09-17', 'last_updated: 2026-09-18')
    assert.equal(lintPrompt('x/a.md', bad).some((i) => i.rule === 'iteration' && i.message.includes('last_updated')), true)
  })

  test('迭代记录为空', () => {
    const bad = VALID.replace(/## 迭代记录[\s\S]*$/, '## 迭代记录\n')
    assert.equal(lintPrompt('x/a.md', bad).some((i) => i.rule === 'iteration'), true)
  })
})

describe('R4 ASCII 占位符声明', () => {
  test('未声明的占位符被检出', () => {
    const bad = VALID.replace('根据 [diff] 生成提交信息。', '根据 [diff] 和 [repo_url] 生成提交信息。')
    assert.equal(
      lintPrompt('x/a.md', bad).some((i) => i.rule === 'variables' && i.message.includes('[repo_url]')),
      true
    )
  })

  test('中文行内占位不参与检查', () => {
    const bad = VALID.replace('根据 [diff] 生成提交信息。', '根据 [在这里粘贴改动] 生成提交信息。')
    assert.deepEqual(lintPrompt('x/a.md', bad), [])
  })
})

describe('R5 模板占位标题', () => {
  test('正式提示词残留占位标题被检出', () => {
    const bad = VALID.replace('# 生成规范的Git提交信息', '# 提示词标题')
    assert.equal(lintPrompt('x/a.md', bad).some((i) => i.rule === 'placeholder-title'), true)
  })
})

describe('R6 零 emoji', () => {
  test('增补平面与符号区 emoji 被检出', () => {
    const bad = VALID.replace('写完代码后使用。', '写完代码后使用。注意：✅ ⚠️ 🔴')
    assert.equal(lintPrompt('x/a.md', bad).some((i) => i.rule === 'emoji'), true)
  })

  test('findEmojis 报告编码点', () => {
    assert.deepEqual(findEmojis('plain text 中文'), [])
    assert.equal(findEmojis('a 💡 b').length, 1)
    assert.equal(findEmojis('一个 ✅ 和一个 ⚡').length, 2)
  })

  test('中文与常规标点不受影响', () => {
    assert.deepEqual(findEmojis('「引号」——破折号、【方头括号】、① 序号、· 间隔号'), [])
  })
})
