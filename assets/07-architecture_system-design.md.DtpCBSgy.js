import{o,c as i,j as t,t as s,k as u,a8 as x,p}from"./chunks/framework.BcVvFr-R.js";const m=`---
tags: [architecture, design, system]
version: 2.0.0
last_updated: 2026-09-17
---

# 系统设计思路与方案

## 适用场景
设计一个新系统或新模块时，快速产出一份覆盖架构、数据、流程与非功能需求的可评审方案。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[project_name]\` | 项目名称 | 电商订单系统 |
| \`[requirements]\` | 核心需求列表 | 日订单 10 万，支持退款 |
| \`[constraints]\` | 约束：团队、时间、技术栈 | 3 人团队，2 个月，Java 栈 |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的系统架构师，方案以"团队能落地"为标准：选型务实、结构清晰、不为炫技引入复杂度。需求或约束信息不足时，先列出待确认问题，再基于明确写出的假设给出方案。

【任务】
为 [project_name] 设计系统方案。

【核心需求】
[requirements]

【约束条件】
[constraints]

【约束】
必须：
- 用 Mermaid 给出整体架构图与至少 2 个核心业务流程的时序图
- 技术选型给出理由与备选方案对比，不选为了新而新的技术
- 数据库设计给出核心表结构与关键索引
- 明确模块划分与职责边界
- 权衡点明说：一致性还是可用性、强实时还是最终一致，以及为什么
- 覆盖性能估算、扩展路径、安全方案、部署方案

禁止：
- 堆砌组件：当前规模用不到的中间件不要引入，需要时说明触发条件（如"QPS 超过 X 再引入"）
- 过度设计：不给团队规模和时限匹配不了的方案
- 只讲优点不讲代价

【输出】
按以下顺序组织：整体架构、技术选型与理由、数据模型、模块划分、核心流程（时序图）、性能与扩展、安全设计、部署方案、待确认问题清单。

## 使用示例
**输入：**
project_name: 电商订单系统
requirements: 日订单 10 万，支持下单、支付、退款，订单查询秒级响应
constraints: 3 人团队，2 个月上线，Java + MySQL 栈

**AI 输出：**
一套可评审方案：Mermaid 架构图与下单/退款时序图、MySQL 核心表设计、订单/支付/库存模块划分、QPS 估算与分库分表触发条件、幂等与超时处理、灰度部署方案。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，去除 emoji，增加"需求不足先列问题""组件引入需触发条件""只讲优点不讲代价"等架构师约束
`,h={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px",display:"flex","flex-direction":"column","align-items":"flex-end",gap:"8px"}},g={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},b={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},f={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},v={key:1},w=JSON.parse('{"title":"系统设计思路与方案","description":"","frontmatter":{"tags":["architecture","design","system"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"07-architecture/system-design.md","filePath":"07-architecture/system-design.md"}'),y={name:"07-architecture/system-design.md"},S=Object.assign(y,{setup(_){const n=p(!1),r=p(!1),d=`# 系统设计思路与方案

## 适用场景
设计一个新系统或新模块时，快速产出一份覆盖架构、数据、流程与非功能需求的可评审方案。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[project_name]\` | 项目名称 | 电商订单系统 |
| \`[requirements]\` | 核心需求列表 | 日订单 10 万，支持退款 |
| \`[constraints]\` | 约束：团队、时间、技术栈 | 3 人团队，2 个月，Java 栈 |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的系统架构师，方案以"团队能落地"为标准：选型务实、结构清晰、不为炫技引入复杂度。需求或约束信息不足时，先列出待确认问题，再基于明确写出的假设给出方案。

【任务】
为 [project_name] 设计系统方案。

【核心需求】
[requirements]

【约束条件】
[constraints]

【约束】
必须：
- 用 Mermaid 给出整体架构图与至少 2 个核心业务流程的时序图
- 技术选型给出理由与备选方案对比，不选为了新而新的技术
- 数据库设计给出核心表结构与关键索引
- 明确模块划分与职责边界
- 权衡点明说：一致性还是可用性、强实时还是最终一致，以及为什么
- 覆盖性能估算、扩展路径、安全方案、部署方案

禁止：
- 堆砌组件：当前规模用不到的中间件不要引入，需要时说明触发条件（如"QPS 超过 X 再引入"）
- 过度设计：不给团队规模和时限匹配不了的方案
- 只讲优点不讲代价

【输出】
按以下顺序组织：整体架构、技术选型与理由、数据模型、模块划分、核心流程（时序图）、性能与扩展、安全设计、部署方案、待确认问题清单。

## 使用示例
**输入：**
project_name: 电商订单系统
requirements: 日订单 10 万，支持下单、支付、退款，订单查询秒级响应
constraints: 3 人团队，2 个月上线，Java + MySQL 栈

**AI 输出：**
一套可评审方案：Mermaid 架构图与下单/退款时序图、MySQL 核心表设计、订单/支付/库存模块划分、QPS 估算与分库分表触发条件、幂等与超时处理、灰度部署方案。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，去除 emoji，增加"需求不足先列问题""组件引入需触发条件""只讲优点不讲代价"等架构师约束`;let l=null;async function c(){try{await navigator.clipboard.writeText(d)}catch{const e=document.createElement("textarea");e.value=d,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}r.value=!0,clearTimeout(l),l=setTimeout(()=>{r.value=!1},1500)}return(e,a)=>(o(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789745426703"},[t("div",h,[t("button",{onClick:a[0]||(a[0]=q=>n.value=!n.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},s(n.value?"📖 返回阅读":"📄 源码"),1),t("button",{onClick:c,style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},s(r.value?"已复制":"复制提示词"),1)]),n.value?(o(),i("div",g,[t("pre",b,[t("code",f,s(u(m)),1)])])):(o(),i("div",v,[...a[1]||(a[1]=[x('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v2.0.0</strong></span><span>更新于 2026-09-17</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">architecture</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">design</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">system</span></div></div><h1 id="系统设计思路与方案" tabindex="-1">系统设计思路与方案 <a class="header-anchor" href="#系统设计思路与方案" aria-label="Permalink to &quot;系统设计思路与方案&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>设计一个新系统或新模块时，快速产出一份覆盖架构、数据、流程与非功能需求的可评审方案。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">含义</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[project_name]</code></td><td style="text-align:left;">项目名称</td><td style="text-align:left;">电商订单系统</td></tr><tr><td style="text-align:left;"><code>[requirements]</code></td><td style="text-align:left;">核心需求列表</td><td style="text-align:left;">日订单 10 万，支持退款</td></tr><tr><td style="text-align:left;"><code>[constraints]</code></td><td style="text-align:left;">约束：团队、时间、技术栈</td><td style="text-align:left;">3 人团队，2 个月，Java 栈</td></tr></tbody></table><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>把下面整段复制给 AI，替换 [占位符] 后使用。</p><p>你是一名有 10 年以上经验的系统架构师，方案以&quot;团队能落地&quot;为标准：选型务实、结构清晰、不为炫技引入复杂度。需求或约束信息不足时，先列出待确认问题，再基于明确写出的假设给出方案。</p><p>【任务】 为 [project_name] 设计系统方案。</p><p>【核心需求】 [requirements]</p><p>【约束条件】 [constraints]</p><p>【约束】 必须：</p><ul><li>用 Mermaid 给出整体架构图与至少 2 个核心业务流程的时序图</li><li>技术选型给出理由与备选方案对比，不选为了新而新的技术</li><li>数据库设计给出核心表结构与关键索引</li><li>明确模块划分与职责边界</li><li>权衡点明说：一致性还是可用性、强实时还是最终一致，以及为什么</li><li>覆盖性能估算、扩展路径、安全方案、部署方案</li></ul><p>禁止：</p><ul><li>堆砌组件：当前规模用不到的中间件不要引入，需要时说明触发条件（如&quot;QPS 超过 X 再引入&quot;）</li><li>过度设计：不给团队规模和时限匹配不了的方案</li><li>只讲优点不讲代价</li></ul><p>【输出】 按以下顺序组织：整体架构、技术选型与理由、数据模型、模块划分、核心流程（时序图）、性能与扩展、安全设计、部署方案、待确认问题清单。</p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> project_name: 电商订单系统 requirements: 日订单 10 万，支持下单、支付、退款，订单查询秒级响应 constraints: 3 人团队，2 个月上线，Java + MySQL 栈</p><p><strong>AI 输出：</strong> 一套可评审方案：Mermaid 架构图与下单/退款时序图、MySQL 核心表设计、订单/支付/库存模块划分、QPS 估算与分库分表触发条件、幂等与超时处理、灰度部署方案。</p><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>2.0.0 (2026-09-17): 按新模板重构，去除 emoji，增加&quot;需求不足先列问题&quot;&quot;组件引入需触发条件&quot;&quot;只讲优点不讲代价&quot;等架构师约束</li></ul>',22)])]))]))}});export{w as __pageData,S as default};
