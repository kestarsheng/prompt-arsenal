// 生成器的单元测试：node:test 零依赖，直接调用导出的纯函数。
// 涉及落盘的用例在临时目录中运行，结束后清理。
import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, statSync, existsSync, rmSync } from 'fs'
import { createHash } from 'crypto'
import { tmpdir } from 'os'
import { join } from 'path'
import {
  splitFrontmatter,
  parseSimpleYaml,
  renderMetaCard,
  sourceImportPath,
  buildPageContent,
  generate,
} from '../scripts/generate-pages.js'

function makeTempDir() {
  return mkdtempSync(join(tmpdir(), 'pa-gen-test-'))
}

const SAMPLE_PROMPT = `---
tags: [git, automation]
version: 1.1.0
last_updated: 2026-09-04
---

# 标题

正文第一段。
`

describe('splitFrontmatter', () => {
  test('解析 LF frontmatter', () => {
    const { yaml, body } = splitFrontmatter(SAMPLE_PROMPT)
    assert.match(yaml, /version: 1\.1\.0/)
    assert.equal(body.startsWith('\n# 标题'), true)
  })

  test('容忍 CRLF 行尾', () => {
    const { yaml, body } = splitFrontmatter(SAMPLE_PROMPT.replace(/\n/g, '\r\n'))
    assert.match(yaml, /last_updated: 2026-09-04/)
    assert.equal(body.includes('# 标题'), true)
  })

  test('无 frontmatter 时 yaml 为 null 且 body 为原文', () => {
    const raw = '# 纯正文\n没有 frontmatter\n'
    const { yaml, body } = splitFrontmatter(raw)
    assert.equal(yaml, null)
    assert.equal(body, raw)
  })
})

describe('parseSimpleYaml', () => {
  test('数组、去引号与标量', () => {
    const data = parseSimpleYaml("tags: [a, 'b c', \"d\"]\nversion: 1.2.3\nlast_updated: 2026-09-17")
    assert.deepEqual(data.tags, ['a', 'b c', 'd'])
    assert.equal(data.version, '1.2.3')
    assert.equal(data.last_updated, '2026-09-17')
  })

  test('忽略不含冒号的行与空数组', () => {
    const data = parseSimpleYaml('这是一行说明\ntags: []')
    assert.deepEqual(data.tags, [])
    assert.equal('这是一行说明' in data, false)
  })
})

describe('renderMetaCard', () => {
  test('无元信息时返回空串', () => {
    assert.equal(renderMetaCard({}), '')
    assert.equal(renderMetaCard({ tags: [] }), '')
  })

  test('渲染版本与更新时间', () => {
    const html = renderMetaCard({ version: '2.0.0', last_updated: '2026-09-17' })
    assert.match(html, /版本 <strong[^>]*>v2\.0\.0<\/strong>/)
    assert.match(html, /更新于 2026-09-17/)
  })

  test('标签做 HTML 转义，防止注入', () => {
    const html = renderMetaCard({ tags: ['<b>x&y'] })
    assert.equal(html.includes('<b>x'), false)
    assert.match(html, /&lt;b&gt;x&amp;y/)
  })
})

describe('sourceImportPath', () => {
  test('按目录深度生成相对路径', () => {
    assert.equal(sourceImportPath('x.md'), '../prompts/x.md')
    assert.equal(sourceImportPath('05-git/x.md'), '../../prompts/05-git/x.md')
    assert.equal(
      sourceImportPath('01-code-generation/java/x.md'),
      '../../../prompts/01-code-generation/java/x.md'
    )
  })
})

describe('buildPageContent', () => {
  test('模板页原样透传，不含注入包装', () => {
    const raw = '---\ntags: [标签1]\n---\n\n# 提示词标题\n\n占位内容\n'
    const page = buildPageContent('templates/prompt-template.md', raw)
    assert.equal(page, raw)
    assert.equal(page.includes('showSource'), false)
  })

  test('普通页面：frontmatter 在首位、import 指向 prompts 源、元信息卡在正文前', () => {
    const page = buildPageContent('05-git/commit-message.md', SAMPLE_PROMPT)
    assert.equal(page.startsWith('---\ntags: [git, automation]\nversion: 1.1.0\nlast_updated: 2026-09-04\n---\n\n'), true)
    assert.match(page, /import source from '\.\.\/\.\.\/prompts\/05-git\/commit-message\.md\?raw'/)
    const metaIdx = page.indexOf('<!--prompt-meta-->')
    const bodyIdx = page.indexOf('# 标题')
    assert.equal(metaIdx > -1 && metaIdx < bodyIdx, true)
    assert.match(page, /版本 <strong[^>]*>v1\.1\.0<\/strong>/)
  })

  test('无 frontmatter 的源文件不渲染 frontmatter 与元信息卡', () => {
    const page = buildPageContent('x.md', '# 纯正文\n')
    assert.equal(page.startsWith('---'), false)
    assert.equal(page.includes('prompt-meta'), false)
  })
})

describe('generate（落盘流程）', () => {
  test('幂等：连续两次生成输出逐字节一致', () => {
    const promptsDir = makeTempDir()
    const docsDir = makeTempDir()
    try {
      mkdirSync(join(promptsDir, '05-git'), { recursive: true })
      mkdirSync(join(promptsDir, 'templates'), { recursive: true })
      writeFileSync(join(promptsDir, '05-git', 'a.md'), SAMPLE_PROMPT)
      writeFileSync(join(promptsDir, 'templates', 't.md'), '# 提示词标题\n\n占位\n')

      const firstRun = generate({ promptsDir, docsDir })
      const snapshot = () => {
        const hashes = {}
        const walk = (dir, base = '') => {
          for (const item of readdirSync(dir)) {
            const full = join(dir, item)
            const rel = base ? `${base}/${item}` : item
            if (statSync(full).isDirectory()) {
              walk(full, rel)
              continue
            }
            hashes[rel] = createHash('sha256').update(readFileSync(full)).digest('hex')
          }
        }
        walk(docsDir)
        return hashes
      }
      const h1 = snapshot()

      const secondRun = generate({ promptsDir, docsDir })
      const h2 = snapshot()

      assert.equal(firstRun, 2)
      assert.equal(secondRun, 2)
      assert.deepEqual(h2, h1)
      assert.equal(Object.keys(h2).length, 2)
    } finally {
      rmSync(promptsDir, { recursive: true, force: true })
      rmSync(docsDir, { recursive: true, force: true })
    }
  })

  test('清理过期目录：docs 下残留的顶层目录会被重建清掉', () => {
    const promptsDir = makeTempDir()
    const docsDir = makeTempDir()
    try {
      mkdirSync(join(promptsDir, '05-git'), { recursive: true })
      writeFileSync(join(promptsDir, '05-git', 'a.md'), SAMPLE_PROMPT)
      // 模拟上次构建留下的过期页面目录
      mkdirSync(join(docsDir, '05-git'), { recursive: true })
      writeFileSync(join(docsDir, '05-git', 'stale.md'), '过期内容')
      mkdirSync(join(docsDir, '99-removed'), { recursive: true })
      writeFileSync(join(docsDir, '99-removed', 'old.md'), '应被删除')

      generate({ promptsDir, docsDir })

      assert.equal(existsSync(join(docsDir, '05-git', 'stale.md')), false)
      assert.equal(existsSync(join(docsDir, '99-removed')), false)
      assert.equal(existsSync(join(docsDir, '05-git', 'a.md')), true)
    } finally {
      rmSync(promptsDir, { recursive: true, force: true })
      rmSync(docsDir, { recursive: true, force: true })
    }
  })

  test('模板页落盘为原样内容，普通页含注入包装', () => {
    const promptsDir = makeTempDir()
    const docsDir = makeTempDir()
    try {
      mkdirSync(join(promptsDir, 'templates'), { recursive: true })
      mkdirSync(join(promptsDir, '05-git'), { recursive: true })
      writeFileSync(join(promptsDir, 'templates', 't.md'), SAMPLE_PROMPT)
      writeFileSync(join(promptsDir, '05-git', 'a.md'), SAMPLE_PROMPT)
      generate({ promptsDir, docsDir })

      const tpl = readFileSync(join(docsDir, 'templates', 't.md'), 'utf-8')
      assert.equal(tpl.includes('showSource'), false)

      const page = readFileSync(join(docsDir, '05-git', 'a.md'), 'utf-8')
      assert.match(page, /import source from '\.\.\/\.\.\/prompts\/05-git\/a\.md\?raw'/)
      assert.equal(page.includes('showSource'), true)
    } finally {
      rmSync(promptsDir, { recursive: true, force: true })
      rmSync(docsDir, { recursive: true, force: true })
    }
  })
})
