// scripts/lint-prompts.js
// 提示词源文件质量门禁：把「模板契约、版本对齐、零 emoji、变量声明」
// 这些约定变成可执行检查，违反规则的文件会让命令以退出码 1 结束。
// 规则细节见 test/lint-prompts.test.js 中的夹具用例。
import { readFileSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { parseSimpleYaml, FRONTMATTER_RE, isTemplate, getAllMdFiles } from './generate-pages.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const DEFAULT_PROMPTS_DIR = join(rootDir, 'prompts')

// 正式提示词必须包含的章节（模板页是占位脚手架，豁免）
const REQUIRED_SECTIONS = ['适用场景', '提示词模板', '使用示例', '迭代记录']

// 扫描 emoji：增补平面符号 + 常见符号区（箭头/杂项符号/装饰符号/变体选择符）
export function findEmojis(text) {
  const found = []
  let i = 0
  while (i < text.length) {
    const cp = text.codePointAt(i)
    const step = cp > 0xffff ? 2 : 1
    const isEmoji =
      (cp >= 0x1f000 && cp <= 0x1faff) ||
      (cp >= 0x2600 && cp <= 0x27bf) ||
      (cp >= 0x2b00 && cp <= 0x2bff) ||
      (cp >= 0x2190 && cp <= 0x21ff) ||
      cp === 0xfe0f
    if (isEmoji) found.push(`U+${cp.toString(16).toUpperCase().padStart(5, '0')}`)
    i += step
  }
  return found
}

// 取「## 标题」章节的内容（到下一个二级标题或文件尾）；不存在返回 null
function sectionRange(content, title) {
  const m = content.match(new RegExp(`^## ${title}\\s*$`, 'm'))
  if (!m) return null
  const start = m.index
  const rest = content.slice(start + m[0].length)
  const next = rest.match(/^## /m)
  const end = next ? start + m[0].length + next.index : content.length
  return content.slice(start, end)
}

// 对单个源文件执行全部规则，返回问题列表
export function lintPrompt(rel, content) {
  const issues = []
  const tpl = isTemplate(rel)

  // 模板页只查 emoji（R6），frontmatter/章节等对占位脚手架无意义
  if (tpl) {
    const emojis = findEmojis(content)
    if (emojis.length > 0) {
      issues.push({ rule: 'emoji', message: `发现 emoji：${[...new Set(emojis)].join(' ')}` })
    }
    return issues
  }

  // R1 frontmatter 契约
  const fmMatch = content.match(FRONTMATTER_RE)
  let frontmatter = null
  if (!fmMatch) {
    issues.push({ rule: 'frontmatter', message: '缺少 frontmatter（文件必须以 --- 开头）' })
  } else {
    frontmatter = parseSimpleYaml(fmMatch[1])
    if (!/^\d+\.\d+\.\d+$/.test(frontmatter.version ?? '')) {
      issues.push({
        rule: 'frontmatter',
        message: `version 缺失或不是合法 semver：${JSON.stringify(frontmatter.version ?? null)}`,
      })
    }
    const d = frontmatter.last_updated ?? ''
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d) || Number.isNaN(Date.parse(d))) {
      issues.push({
        rule: 'frontmatter',
        message: `last_updated 缺失或不是 YYYY-MM-DD 日期：${JSON.stringify(frontmatter.last_updated ?? null)}`,
      })
    }
  }

  // R2 必需章节
  for (const s of REQUIRED_SECTIONS) {
    if (!sectionRange(content, s)) {
      issues.push({ rule: 'sections', message: `缺少章节「## ${s}」` })
    }
  }

  // R3 迭代记录最新条目须与 frontmatter 对齐
  if (frontmatter) {
    const log = sectionRange(content, '迭代记录')
    if (log) {
      const entries = [...log.matchAll(/-\s*(\d+\.\d+\.\d+)\s*\((\d{4}-\d{2}-\d{2})\)/g)]
      if (entries.length === 0) {
        issues.push({ rule: 'iteration', message: '迭代记录里没有任何「- x.y.z (YYYY-MM-DD): 说明」条目' })
      } else {
        const last = entries[entries.length - 1]
        if (last[1] !== frontmatter.version) {
          issues.push({
            rule: 'iteration',
            message: `frontmatter version (${frontmatter.version}) 与迭代记录最新条目 (${last[1]}) 不一致`,
          })
        }
        if (last[2] !== frontmatter.last_updated) {
          issues.push({
            rule: 'iteration',
            message: `frontmatter last_updated (${frontmatter.last_updated}) 与迭代记录最新条目日期 (${last[2]}) 不一致`,
          })
        }
      }
    }
  }

  // R4 提示词模板中的 ASCII 占位符必须在「输入变量」声明
  // 只检查 ASCII 标识符，避免把 [在这里粘贴...] 这类中文行内占位当变量
  const tplSection = sectionRange(content, '提示词模板') ?? ''
  const used = new Set([...tplSection.matchAll(/\[([a-zA-Z][a-zA-Z0-9_]*)\]/g)].map((m) => m[1]))
  if (used.size > 0) {
    const varSection = sectionRange(content, '输入变量') ?? ''
    const declared = new Set([...varSection.matchAll(/\[([a-zA-Z][a-zA-Z0-9_]*)\]/g)].map((m) => m[1]))
    for (const v of used) {
      if (!declared.has(v)) {
        issues.push({ rule: 'variables', message: `提示词模板使用了占位符 [${v}]，但「输入变量」未声明` })
      }
    }
  }

  // R5 模板占位标题不得残留在正式提示词
  if (/^# 提示词标题\s*$/m.test(content)) {
    issues.push({ rule: 'placeholder-title', message: '标题仍是模板占位「# 提示词标题」，请改为实际标题' })
  }

  // R6 零 emoji
  const emojis = findEmojis(content)
  if (emojis.length > 0) {
    issues.push({ rule: 'emoji', message: `发现 emoji：${[...new Set(emojis)].join(' ')}` })
  }

  return issues
}

// 对整个 prompts/ 目录跑 lint，返回有问题的文件列表
export function lintAll(promptsDir = DEFAULT_PROMPTS_DIR) {
  const results = []
  for (const f of getAllMdFiles(promptsDir)) {
    const content = readFileSync(f.fullPath, 'utf-8')
    const issues = lintPrompt(f.relPath, content)
    if (issues.length > 0) results.push({ rel: f.relPath, issues })
  }
  return results
}

// 仅在作为 CLI 直接执行时运行并决定退出码
const isCli = process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href
if (isCli) {
  const results = lintAll()
  if (results.length === 0) {
    console.log('lint 通过：所有提示词符合规范')
  } else {
    let count = 0
    for (const r of results) {
      console.error(`\n${r.rel}`)
      for (const i of r.issues) {
        console.error(`  [${i.rule}] ${i.message}`)
        count++
      }
    }
    console.error(`\n共 ${count} 个问题，位于 ${results.length} 个文件`)
    process.exitCode = 1
  }
}
