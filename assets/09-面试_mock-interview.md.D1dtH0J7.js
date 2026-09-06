import{o,c as r,j as n,t as i,k as s,a8 as t,a as l,p as d}from"./chunks/framework.BcVvFr-R.js";const p=`<script setup>
import { ref } from 'vue'
import source from './mock-interview.md?raw'

const showSource = ref(false)
<\/script>

<div style="position: sticky; top: 80px; float: right; z-index: 100; margin-bottom: 12px; margin-left: 12px;">
  <button @click="showSource = !showSource" style="padding: 6px 14px; background: var(--vp-c-brand); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: 500; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: all 0.2s ease;">
    {{ showSource ? '📖 返回阅读' : '📄 源码' }}
  </button>
</div>

<div v-if="showSource" style="background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; max-height: 80vh; overflow: auto; margin: 20px 0; border: 1px solid #333; clear: both; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.7; white-space: pre-wrap; word-wrap: break-word;">
  <pre style="margin: 0; white-space: pre-wrap; word-wrap: break-word;"><code style="font-family: inherit; font-size: 14px; color: #d4d4d4;">{{ source }}</code></pre>
</div>

<div v-else>

---
tags: [interview, career, mock, auto-search]
version: 2.0.0
last_updated: 2026-09-04
---

# 模拟技术面试（AI 自动搜索面经版）

## 适用场景
准备面试时，希望 AI 根据你的简历和目标公司 JD，**自动去牛客、小红书等平台搜索真实面经**，然后针对性地出题模拟面试。

## 输入说明
请提供以下材料：

**1. 你的最新简历**（重点突出项目经验和技术栈）

**2. 目标公司 + 岗位信息**（如“字节跳动 后端开发工程师（校招）”或直接贴 JD 链接/文字/图片）

## AI 执行流程

### 第一步：解析简历与 JD
- 从简历中提取：技术栈、项目经验、工作年限、核心亮点
- 从 JD 中提取：岗位要求、技术关键词、面试轮次说明

### 第二步：自动搜索面经
使用联网搜索能力，按以下关键词组合进行搜索：
- \`{公司名} {岗位名} 面经 2026\`
- \`{公司名} {技术栈} 面试经验\`
- \`{公司名} {岗位名} 技术面 真题\`

**搜索来源优先级：**
1. 牛客网（面经最全、时效性强）
2. 小红书（近期面经细节丰富）
3. 博客/技术社区（深度解析）

**搜索策略：**
- 优先获取近 30 天内的面经，保障时效性
- 至少抓取 3-5 篇不同来源的面经进行交叉对比
- 标注出现频次 ≥ 3 次的高频考点

### 第三步：生成面经分析报告
基于搜索结果，输出一份结构化报告：
📊 面经分析报告
**目标公司：** {公司名}
**岗位：** {岗位名}

**高频考点 Top5：**
1. {考点1}（出现次数：X/5）
2. {考点2}（出现次数：X/5）

**面试风格判断：**
- 技术深挖程度：深/中/浅
- 是否有系统设计题：是/否
- 面试官风格：强势追问/温和引导

**典型追问链：**
{从面经中提取的追问路径示例}

### 第四步：模拟面试
基于面经分析报告 + 你的简历 + JD，进行针对性模拟面试：

1. 技术问答（8-10题）：优先覆盖高频考点，结合简历项目深挖
2. 系统设计题（如面经显示有该环节）
3. 追问模拟：模拟面试官的层层追问（参考面经中的追问逻辑）
4. 反问环节建议

### 第五步：面试反馈
- 结构性评价
- 薄弱环节 Top3
- 针对性练习建议

## 使用示例

**用户输入：**
- 简历：3年 Java 经验，Spring Cloud 项目，负责订单模块
- 目标公司：字节跳动 后端开发工程师

**AI 执行：**
1. 提取关键词 → 搜索“字节跳动 后端 面经 2026”
2. 抓取 5 篇面经，识别高频考点
3. 生成面经分析报告
4. 结合简历中的订单模块，针对性出题
5. 逐题点评、追问、打分

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本（通用模拟面试）
- 2.0.0 (2026-09-04): AI 自动联网搜索面经，无需用户手动粘贴

</div>

<style>
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,c={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},h={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},u={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},b={key:1},v=JSON.parse('{"title":"模拟技术面试（AI 自动搜索面经版）","description":"","frontmatter":{},"headers":[],"relativePath":"09-面试/mock-interview.md","filePath":"09-面试/mock-interview.md"}'),m={name:"09-面试/mock-interview.md"},k=Object.assign(m,{setup(f){const e=d(!1);return(x,a)=>(o(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788675645000"},[n("div",c,[n("button",{onClick:a[0]||(a[0]=_=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},i(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(o(),r("div",h,[n("pre",u,[n("code",g,i(s(p)),1)])])):(o(),r("div",b,[...a[1]||(a[1]=[t(`<hr><h2 id="tags-interview-career-mock-auto-search-version-2-0-0last-updated-2026-09-04" tabindex="-1">tags: [interview, career, mock, auto-search] version: 2.0.0 last_updated: 2026-09-04 <a class="header-anchor" href="#tags-interview-career-mock-auto-search-version-2-0-0last-updated-2026-09-04" aria-label="Permalink to &quot;tags: [interview, career, mock, auto-search]
version: 2.0.0
last_updated: 2026-09-04&quot;">​</a></h2><h1 id="模拟技术面试-ai-自动搜索面经版" tabindex="-1">模拟技术面试（AI 自动搜索面经版） <a class="header-anchor" href="#模拟技术面试-ai-自动搜索面经版" aria-label="Permalink to &quot;模拟技术面试（AI 自动搜索面经版）&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>准备面试时，希望 AI 根据你的简历和目标公司 JD，<strong>自动去牛客、小红书等平台搜索真实面经</strong>，然后针对性地出题模拟面试。</p><h2 id="输入说明" tabindex="-1">输入说明 <a class="header-anchor" href="#输入说明" aria-label="Permalink to &quot;输入说明&quot;">​</a></h2><p>请提供以下材料：</p><p><strong>1. 你的最新简历</strong>（重点突出项目经验和技术栈）</p><p><strong>2. 目标公司 + 岗位信息</strong>（如“字节跳动 后端开发工程师（校招）”或直接贴 JD 链接/文字/图片）</p><h2 id="ai-执行流程" tabindex="-1">AI 执行流程 <a class="header-anchor" href="#ai-执行流程" aria-label="Permalink to &quot;AI 执行流程&quot;">​</a></h2><h3 id="第一步-解析简历与-jd" tabindex="-1">第一步：解析简历与 JD <a class="header-anchor" href="#第一步-解析简历与-jd" aria-label="Permalink to &quot;第一步：解析简历与 JD&quot;">​</a></h3><ul><li>从简历中提取：技术栈、项目经验、工作年限、核心亮点</li><li>从 JD 中提取：岗位要求、技术关键词、面试轮次说明</li></ul><h3 id="第二步-自动搜索面经" tabindex="-1">第二步：自动搜索面经 <a class="header-anchor" href="#第二步-自动搜索面经" aria-label="Permalink to &quot;第二步：自动搜索面经&quot;">​</a></h3><p>使用联网搜索能力，按以下关键词组合进行搜索：</p><ul><li><code>{公司名} {岗位名} 面经 2026</code></li><li><code>{公司名} {技术栈} 面试经验</code></li><li><code>{公司名} {岗位名} 技术面 真题</code></li></ul><p><strong>搜索来源优先级：</strong></p><ol><li>牛客网（面经最全、时效性强）</li><li>小红书（近期面经细节丰富）</li><li>博客/技术社区（深度解析）</li></ol><p><strong>搜索策略：</strong></p><ul><li>优先获取近 30 天内的面经，保障时效性</li><li>至少抓取 3-5 篇不同来源的面经进行交叉对比</li><li>标注出现频次 ≥ 3 次的高频考点</li></ul><h3 id="第三步-生成面经分析报告" tabindex="-1">第三步：生成面经分析报告 <a class="header-anchor" href="#第三步-生成面经分析报告" aria-label="Permalink to &quot;第三步：生成面经分析报告&quot;">​</a></h3>`,20),n("p",{岗位名:""},[l("基于搜索结果，输出一份结构化报告： 📊 面经分析报告 "),n("strong",null,"目标公司："),l(" {公司名} "),n("strong",null,"岗位：")],-1),n("p",null,[n("strong",null,"高频考点 Top5：")],-1),n("ol",null,[n("li",null,"{考点1}（出现次数：X/5）"),n("li",null,"{考点2}（出现次数：X/5）")],-1),n("p",null,[n("strong",null,"面试风格判断：")],-1),n("ul",null,[n("li",null,"技术深挖程度：深/中/浅"),n("li",null,"是否有系统设计题：是/否"),n("li",null,"面试官风格：强势追问/温和引导")],-1),n("p",{从面经中提取的追问路径示例:""},[n("strong",null,"典型追问链：")],-1),t('<h3 id="第四步-模拟面试" tabindex="-1">第四步：模拟面试 <a class="header-anchor" href="#第四步-模拟面试" aria-label="Permalink to &quot;第四步：模拟面试&quot;">​</a></h3><p>基于面经分析报告 + 你的简历 + JD，进行针对性模拟面试：</p><ol><li>技术问答（8-10题）：优先覆盖高频考点，结合简历项目深挖</li><li>系统设计题（如面经显示有该环节）</li><li>追问模拟：模拟面试官的层层追问（参考面经中的追问逻辑）</li><li>反问环节建议</li></ol><h3 id="第五步-面试反馈" tabindex="-1">第五步：面试反馈 <a class="header-anchor" href="#第五步-面试反馈" aria-label="Permalink to &quot;第五步：面试反馈&quot;">​</a></h3><ul><li>结构性评价</li><li>薄弱环节 Top3</li><li>针对性练习建议</li></ul><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>用户输入：</strong></p><ul><li>简历：3年 Java 经验，Spring Cloud 项目，负责订单模块</li><li>目标公司：字节跳动 后端开发工程师</li></ul><p><strong>AI 执行：</strong></p><ol><li>提取关键词 → 搜索“字节跳动 后端 面经 2026”</li><li>抓取 5 篇面经，识别高频考点</li><li>生成面经分析报告</li><li>结合简历中的订单模块，针对性出题</li><li>逐题点评、追问、打分</li></ol><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本（通用模拟面试）</li><li>2.0.0 (2026-09-04): AI 自动联网搜索面经，无需用户手动粘贴</li></ul>',12)])]))]))}});export{v as __pageData,k as default};
