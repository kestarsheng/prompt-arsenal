import{o as n,c as o,j as e,t as r,k as i,a8 as l,p as d}from"./chunks/framework.BcVvFr-R.js";const p=`---
tags: [interview, career, mock, auto-search]
version: 2.1.0
last_updated: 2026-09-17
---

# 模拟技术面试（AI 自动搜索面经版）

## 适用场景
准备面试时，让 AI 根据简历和目标岗位 JD 自动搜索真实面经，针对性出题、模拟追问并给反馈。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[简历]\` | 最新简历，突出项目经验与技术栈 | 粘贴简历文本 |
| \`[目标岗位]\` | 公司 + 岗位，或 JD 原文/链接 | 字节跳动 后端开发（校招） |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的面试官，出题风格贴近真实面试：由浅入深、逐层追问、盯着简历细节问。信息不足时如实说明，不编造面经内容。

【我的简历】
[简历]

【目标岗位】
[目标岗位]

【执行步骤】
1. 解析简历与 JD：提取技术栈、项目经验、工作年限、岗位要求与技术关键词
2. 联网搜索面经，按以下关键词组合：
   - [公司名] [岗位名] 面经
   - [公司名] [技术栈] 面试经验
   - [公司名] [岗位名] 技术面 真题
   搜索来源优先级：牛客网、小红书、技术社区博客。优先近 30 天内容，至少交叉对比 3-5 篇不同来源
3. 生成面经分析报告：高频考点 Top5（须出现 3 次以上，标注来源与时间）、面试风格判断（深挖程度/有无系统设计/追问风格）、典型追问链示例
4. 模拟面试：技术问答 8-10 题，优先覆盖高频考点并结合我简历里的项目深挖；面经显示有系统设计环节则加一题；模拟面试官追问链
5. 面试反馈：结构化评价、薄弱环节 Top3、针对性练习建议

【约束】
- 面经内容必须来自真实搜索结果，标注来源与获取时间
- 搜索结果不足（少于 3 篇有效面经）时如实说明，降级为基于 JD 与简历的通用题库，并明确标注"非面经驱动"
- 每道题等我回答后再给点评，不要一次全部抛出
- 点评给参考答案要点与评分，指出我回答里的事实性错误

## 使用示例
**输入：**
简历：3 年 Java 经验，Spring Cloud 项目，负责订单模块
目标岗位：字节跳动 后端开发工程师

**AI 执行：**
提取关键词后搜索"字节跳动 后端 面经"，交叉对比 5 篇面经输出高频考点报告，结合订单模块出题，逐题追问与点评，最后给薄弱环节与练习建议。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本（通用模拟面试）
- 2.0.0 (2026-09-04): AI 自动联网搜索面经，无需用户手动粘贴
- 2.1.0 (2026-09-17): 按新模板重构，去除 emoji，占位符统一为 [变量名]，增加"来源标注""搜索不足降级""逐题互动"约束
`,s={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},u={key:1},y=JSON.parse('{"title":"模拟技术面试（AI 自动搜索面经版）","description":"","frontmatter":{"tags":["interview","career","mock","auto-search"],"version":"2.1.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"09-面试/mock-interview.md","filePath":"09-面试/mock-interview.md"}'),b={name:"09-面试/mock-interview.md"},k=Object.assign(b,{setup(g){const t=d(!1);return(v,a)=>(n(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789702877050"},[e("div",s,[e("button",{onClick:a[0]||(a[0]=f=>t.value=!t.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},r(t.value?"📖 返回阅读":"📄 源码"),1)]),t.value?(n(),o("div",c,[e("pre",x,[e("code",h,r(i(p)),1)])])):(n(),o("div",u,[...a[1]||(a[1]=[l('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v2.1.0</strong></span><span>更新于 2026-09-17</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">interview</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">career</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">mock</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">auto-search</span></div></div><h1 id="模拟技术面试-ai-自动搜索面经版" tabindex="-1">模拟技术面试（AI 自动搜索面经版） <a class="header-anchor" href="#模拟技术面试-ai-自动搜索面经版" aria-label="Permalink to &quot;模拟技术面试（AI 自动搜索面经版）&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>准备面试时，让 AI 根据简历和目标岗位 JD 自动搜索真实面经，针对性出题、模拟追问并给反馈。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">含义</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[简历]</code></td><td style="text-align:left;">最新简历，突出项目经验与技术栈</td><td style="text-align:left;">粘贴简历文本</td></tr><tr><td style="text-align:left;"><code>[目标岗位]</code></td><td style="text-align:left;">公司 + 岗位，或 JD 原文/链接</td><td style="text-align:left;">字节跳动 后端开发（校招）</td></tr></tbody></table><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>把下面整段复制给 AI，替换 [占位符] 后使用。</p><p>你是一名有 10 年以上经验的面试官，出题风格贴近真实面试：由浅入深、逐层追问、盯着简历细节问。信息不足时如实说明，不编造面经内容。</p><p>【我的简历】 [简历]</p><p>【目标岗位】 [目标岗位]</p><p>【执行步骤】</p><ol><li>解析简历与 JD：提取技术栈、项目经验、工作年限、岗位要求与技术关键词</li><li>联网搜索面经，按以下关键词组合： <ul><li>[公司名] [岗位名] 面经</li><li>[公司名] [技术栈] 面试经验</li><li>[公司名] [岗位名] 技术面 真题 搜索来源优先级：牛客网、小红书、技术社区博客。优先近 30 天内容，至少交叉对比 3-5 篇不同来源</li></ul></li><li>生成面经分析报告：高频考点 Top5（须出现 3 次以上，标注来源与时间）、面试风格判断（深挖程度/有无系统设计/追问风格）、典型追问链示例</li><li>模拟面试：技术问答 8-10 题，优先覆盖高频考点并结合我简历里的项目深挖；面经显示有系统设计环节则加一题；模拟面试官追问链</li><li>面试反馈：结构化评价、薄弱环节 Top3、针对性练习建议</li></ol><p>【约束】</p><ul><li>面经内容必须来自真实搜索结果，标注来源与获取时间</li><li>搜索结果不足（少于 3 篇有效面经）时如实说明，降级为基于 JD 与简历的通用题库，并明确标注&quot;非面经驱动&quot;</li><li>每道题等我回答后再给点评，不要一次全部抛出</li><li>点评给参考答案要点与评分，指出我回答里的事实性错误</li></ul><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> 简历：3 年 Java 经验，Spring Cloud 项目，负责订单模块 目标岗位：字节跳动 后端开发工程师</p><p><strong>AI 执行：</strong> 提取关键词后搜索&quot;字节跳动 后端 面经&quot;，交叉对比 5 篇面经输出高频考点报告，结合订单模块出题，逐题追问与点评，最后给薄弱环节与练习建议。</p><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本（通用模拟面试）</li><li>2.0.0 (2026-09-04): AI 自动联网搜索面经，无需用户手动粘贴</li><li>2.1.0 (2026-09-17): 按新模板重构，去除 emoji，占位符统一为 [变量名]，增加&quot;来源标注&quot;&quot;搜索不足降级&quot;&quot;逐题互动&quot;约束</li></ul>',20)])]))]))}});export{y as __pageData,k as default};
