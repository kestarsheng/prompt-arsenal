// new-prompt 脚手架的单元测试：scaffold 为纯落盘函数，在临时目录运行。
import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import { mkdirSync, writeFileSync, readFileSync, existsSync, rmSync, mkdtempSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'
import { scaffold } from '../scripts/new-prompt.js'

function makeTempDir() {
  return mkdtempSync(join(tmpdir(), 'pa-new-test-'))
}

function setup() {
  const root = makeTempDir()
  const templatesDir = join(root, 'templates')
  const promptsDir = join(root, 'prompts')
  mkdirSync(templatesDir, { recursive: true })
  writeFileSync(
    join(templatesDir, 'prompt-template.md'),
    '---\ntags: [标签1, 标签2]\nversion: 1.0.0\nlast_updated: YYYY-MM-DD\n---\n\n# 提示词标题\n\n占位\n'
  )
  return { templatesDir, promptsDir }
}

describe('scaffold', () => {
  test('按 分类/名称 创建文件，last_updated 替换为当天', () => {
    const { templatesDir, promptsDir } = setup()
    try {
      const dest = scaffold({ rel: '06-documentation/code-explainer', templatesDir, promptsDir, today: '2026-09-18' })
      assert.equal(existsSync(dest), true)
      const content = readFileSync(dest, 'utf-8')
      assert.equal(content.includes('last_updated: 2026-09-18'), true)
      assert.equal(content.includes('# 提示词标题'), true)
      assert.equal(content.includes('YYYY-MM-DD'), false)
    } finally {
      rmSync(join(templatesDir, '..'), { recursive: true, force: true })
    }
  })

  test('接受带 .md 后缀的参数', () => {
    const { templatesDir, promptsDir } = setup()
    try {
      const dest = scaffold({ rel: '05-git/x.md', templatesDir, promptsDir })
      assert.equal(/[\\/]05-git[\\/]x\.md$/.test(dest), true)
    } finally {
      rmSync(join(templatesDir, '..'), { recursive: true, force: true })
    }
  })

  test('拒绝已存在的文件', () => {
    const { templatesDir, promptsDir } = setup()
    try {
      mkdirSync(join(promptsDir, '05-git'), { recursive: true })
      writeFileSync(join(promptsDir, '05-git', 'x.md'), '已有内容')
      assert.throws(() => scaffold({ rel: '05-git/x', templatesDir, promptsDir }), /已存在/)
    } finally {
      rmSync(join(templatesDir, '..'), { recursive: true, force: true })
    }
  })

  test('拒绝根级文件与路径穿越', () => {
    const { templatesDir, promptsDir } = setup()
    try {
      assert.throws(() => scaffold({ rel: 'loose-file', templatesDir, promptsDir }), /不合法/)
      assert.throws(() => scaffold({ rel: '../escape', templatesDir, promptsDir }), /不合法/)
      assert.throws(() => scaffold({ rel: '', templatesDir, promptsDir }), /缺少参数/)
      assert.throws(() => scaffold({ rel: undefined, templatesDir, promptsDir }), /缺少参数/)
    } finally {
      rmSync(join(templatesDir, '..'), { recursive: true, force: true })
    }
  })
})
