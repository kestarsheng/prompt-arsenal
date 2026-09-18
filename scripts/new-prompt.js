// scripts/new-prompt.js
// 新建提示词脚手架：把 templates/prompt-template.md 复制为
// prompts/<分类>/<名称>.md，并把 last_updated 占位替换为当天。
// 用法：npm run new -- 06-documentation/code-explainer
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const DEFAULT_TEMPLATES_DIR = join(rootDir, 'templates')
const DEFAULT_PROMPTS_DIR = join(rootDir, 'prompts')

// 分类/名称 只允许字母数字、连字符、下划线，防止路径穿越与奇怪文件名
const REL_RE = /^[\w-]+(\/[\w-]+)+$/

// 创建脚手架文件，返回写入的绝对路径；参数不合法时抛错
export function scaffold({ rel, templatesDir = DEFAULT_TEMPLATES_DIR, promptsDir = DEFAULT_PROMPTS_DIR, today }) {
  if (!rel) {
    throw new Error('缺少参数。用法：npm run new -- <分类>/<名称>，例如 npm run new -- 06-documentation/code-explainer')
  }
  const normalized = rel.replace(/\.md$/, '')
  if (!REL_RE.test(normalized)) {
    throw new Error(`路径不合法：${rel}。必须是「分类/名称」形式（至少一层目录），只含字母数字、连字符、下划线`)
  }
  const templatePath = join(templatesDir, 'prompt-template.md')
  if (!existsSync(templatePath)) {
    throw new Error(`找不到模板文件：${templatePath}`)
  }
  const destAbs = resolve(promptsDir, `${normalized}.md`)
  if (!destAbs.startsWith(resolve(promptsDir) + sepFor(destAbs))) {
    throw new Error('目标路径越出了 prompts/ 目录')
  }
  if (existsSync(destAbs)) {
    throw new Error(`文件已存在：${normalized}.md，请换个名称或直接编辑它`)
  }

  let content = readFileSync(templatePath, 'utf-8')
  if (today) {
    content = content.replace(/^(last_updated:\s*).*$/m, `$1${today}`)
  }
  mkdirSync(dirname(destAbs), { recursive: true })
  writeFileSync(destAbs, content, 'utf-8')
  return destAbs
}

// Windows 上 resolve() 产生反斜杠路径，用目标平台的分隔符做前缀检查
function sepFor() {
  return process.platform === 'win32' ? '\\' : '/'
}

function main() {
  const rel = process.argv[2]
  try {
    const dest = scaffold({ rel, today: new Date().toISOString().slice(0, 10) })
    console.log(`已创建: ${dest}`)
    console.log('接下来：')
    console.log('  1. 填写正文，替换模板中的占位内容（标题、章节、提示词模板、迭代记录）')
    console.log('  2. 运行 npm run lint:prompts 检查是否满足发布规范')
    console.log('  3. 运行 npm run docs:dev 本地预览页面')
  } catch (err) {
    console.error(err.message)
    process.exitCode = 1
  }
}

const isCli = process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href
if (isCli) {
  main()
}
