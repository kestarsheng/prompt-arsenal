import{o as l,c as r,j as e,t as i,k as x,a8 as g,p as s}from"./chunks/framework.BcVvFr-R.js";const u=`---
tags: [learning, concept, explanation]
version: 2.0.0
last_updated: 2026-09-17
---

# 解释技术概念

## 适用场景
学习新技术或遇到不理解的概念时，得到一个由浅入深、边界清晰的解释，而不是术语循环。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[concept]\` | 要解释的概念 | CAP 定理 |
| \`[level]\` | 理解深度：入门/进阶/深入源码 | 入门 |
| \`[analogy]\` | 是否需要生活类比：需要/不需要 | 需要 |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的工程师，擅长把复杂概念讲清楚。解释从本质出发，不用听不懂的术语解释术语。

【任务】
解释以下技术概念。

【概念】
[concept]

【深度要求】
[level]

【是否需要生活类比】
[analogy]

【约束】
必须：
- 第一句先给本质概括，一句话说清"它到底是什么"
- 说明它解决什么问题、没有它会怎样
- 需要类比时给出一个准确的类比，并明确指出"这个类比在哪里失效"——类比不等于原理
- 与最容易被混淆的相近概念对比区别
- 给出优缺点与适用边界
- 给出下一步学习路径（看什么文档、写什么练习）

禁止：
- 用未解释的新术语解释当前概念
- 编造不存在的特性、版本或历史
- 超出指定深度展开，入门级不贴源码

【输出】
按以下顺序组织：一句话本质、解决什么问题、核心原理（[level] 对应的深度）、类比与失效点（如需要）、相近概念对比、优缺点与适用边界、学习路径。

## 使用示例
**输入：**
concept: CAP 定理
level: 入门
analogy: 需要

**AI 输出：**
一句话本质（分布式系统三属性不可兼得）、没有 CAP 约束会怎样、P 在网络分区下的取舍原理、用"连锁餐厅与分店账本"类比并指出失效点、CAP 与 ACID 的区别、入门学习路径。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，增加"类比须指出失效点""禁止术语循环""禁止编造"约束，输出顺序固定
`,h={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px",display:"flex","flex-direction":"column","align-items":"flex-end",gap:"8px"}},v={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},b={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},f={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},y={key:1},w=JSON.parse('{"title":"解释技术概念","description":"","frontmatter":{"tags":["learning","concept","explanation"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"08-learning/explain-concept.md","filePath":"08-learning/explain-concept.md"}'),m={name:"08-learning/explain-concept.md"},q=Object.assign(m,{setup(_){const t=s(!1),o=s(!1),p=`# 解释技术概念

## 适用场景
学习新技术或遇到不理解的概念时，得到一个由浅入深、边界清晰的解释，而不是术语循环。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[concept]\` | 要解释的概念 | CAP 定理 |
| \`[level]\` | 理解深度：入门/进阶/深入源码 | 入门 |
| \`[analogy]\` | 是否需要生活类比：需要/不需要 | 需要 |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的工程师，擅长把复杂概念讲清楚。解释从本质出发，不用听不懂的术语解释术语。

【任务】
解释以下技术概念。

【概念】
[concept]

【深度要求】
[level]

【是否需要生活类比】
[analogy]

【约束】
必须：
- 第一句先给本质概括，一句话说清"它到底是什么"
- 说明它解决什么问题、没有它会怎样
- 需要类比时给出一个准确的类比，并明确指出"这个类比在哪里失效"——类比不等于原理
- 与最容易被混淆的相近概念对比区别
- 给出优缺点与适用边界
- 给出下一步学习路径（看什么文档、写什么练习）

禁止：
- 用未解释的新术语解释当前概念
- 编造不存在的特性、版本或历史
- 超出指定深度展开，入门级不贴源码

【输出】
按以下顺序组织：一句话本质、解决什么问题、核心原理（[level] 对应的深度）、类比与失效点（如需要）、相近概念对比、优缺点与适用边界、学习路径。

## 使用示例
**输入：**
concept: CAP 定理
level: 入门
analogy: 需要

**AI 输出：**
一句话本质（分布式系统三属性不可兼得）、没有 CAP 约束会怎样、P 在网络分区下的取舍原理、用"连锁餐厅与分店账本"类比并指出失效点、CAP 与 ACID 的区别、入门学习路径。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，增加"类比须指出失效点""禁止术语循环""禁止编造"约束，输出顺序固定`;let d=null;async function c(){try{await navigator.clipboard.writeText(p)}catch{const n=document.createElement("textarea");n.value=p,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}o.value=!0,clearTimeout(d),d=setTimeout(()=>{o.value=!1},1500)}return(n,a)=>(l(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789745426703"},[e("div",h,[e("button",{onClick:a[0]||(a[0]=k=>t.value=!t.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},i(t.value?"📖 返回阅读":"📄 源码"),1),e("button",{onClick:c,style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},i(o.value?"已复制":"复制提示词"),1)]),t.value?(l(),r("div",v,[e("pre",b,[e("code",f,i(x(u)),1)])])):(l(),r("div",y,[...a[1]||(a[1]=[g('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v2.0.0</strong></span><span>更新于 2026-09-17</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">learning</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">concept</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">explanation</span></div></div><h1 id="解释技术概念" tabindex="-1">解释技术概念 <a class="header-anchor" href="#解释技术概念" aria-label="Permalink to &quot;解释技术概念&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>学习新技术或遇到不理解的概念时，得到一个由浅入深、边界清晰的解释，而不是术语循环。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">含义</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[concept]</code></td><td style="text-align:left;">要解释的概念</td><td style="text-align:left;">CAP 定理</td></tr><tr><td style="text-align:left;"><code>[level]</code></td><td style="text-align:left;">理解深度：入门/进阶/深入源码</td><td style="text-align:left;">入门</td></tr><tr><td style="text-align:left;"><code>[analogy]</code></td><td style="text-align:left;">是否需要生活类比：需要/不需要</td><td style="text-align:left;">需要</td></tr></tbody></table><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>把下面整段复制给 AI，替换 [占位符] 后使用。</p><p>你是一名有 10 年以上经验的工程师，擅长把复杂概念讲清楚。解释从本质出发，不用听不懂的术语解释术语。</p><p>【任务】 解释以下技术概念。</p><p>【概念】 [concept]</p><p>【深度要求】 [level]</p><p>【是否需要生活类比】 [analogy]</p><p>【约束】 必须：</p><ul><li>第一句先给本质概括，一句话说清&quot;它到底是什么&quot;</li><li>说明它解决什么问题、没有它会怎样</li><li>需要类比时给出一个准确的类比，并明确指出&quot;这个类比在哪里失效&quot;——类比不等于原理</li><li>与最容易被混淆的相近概念对比区别</li><li>给出优缺点与适用边界</li><li>给出下一步学习路径（看什么文档、写什么练习）</li></ul><p>禁止：</p><ul><li>用未解释的新术语解释当前概念</li><li>编造不存在的特性、版本或历史</li><li>超出指定深度展开，入门级不贴源码</li></ul><p>【输出】 按以下顺序组织：一句话本质、解决什么问题、核心原理（[level] 对应的深度）、类比与失效点（如需要）、相近概念对比、优缺点与适用边界、学习路径。</p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> concept: CAP 定理 level: 入门 analogy: 需要</p><p><strong>AI 输出：</strong> 一句话本质（分布式系统三属性不可兼得）、没有 CAP 约束会怎样、P 在网络分区下的取舍原理、用&quot;连锁餐厅与分店账本&quot;类比并指出失效点、CAP 与 ACID 的区别、入门学习路径。</p><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>2.0.0 (2026-09-17): 按新模板重构，增加&quot;类比须指出失效点&quot;&quot;禁止术语循环&quot;&quot;禁止编造&quot;约束，输出顺序固定</li></ul>',23)])]))]))}});export{w as __pageData,q as default};
