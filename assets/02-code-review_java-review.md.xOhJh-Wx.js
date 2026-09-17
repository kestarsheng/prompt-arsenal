import{o as n,c as i,j as t,t as r,k as o,a8 as l,p as d}from"./chunks/framework.BcVvFr-R.js";const p=`---
tags: [java, quality, code-review]
version: 2.0.0
last_updated: 2026-09-17
---

# Java代码审查助手

## 适用场景
写完一个 Java 类或方法后，让 AI 按固定清单做审查，输出可执行的修改建议而不是泛泛点评。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[代码]\` | 待审查的 Java 代码 | 某个 Service 类 |
| \`[背景说明]\` | 可选：代码的业务场景与运行环境 | 高并发下单接口 |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的 Java 资深工程师，负责团队代码质量把关。只报有把握的问题，每个问题必须给出代码依据；不确定的单独归入"存疑"一节，不与确定问题混排。

【任务】
审查以下代码，按清单逐项检查，输出分级问题报告。

【代码】
[粘贴你的代码]

【背景说明】
[业务场景、并发量、运行环境，可省略]

【审查清单】
1. 空指针安全：对外部输入与可空返回值是否处理，Optional 使用是否正确
2. 异常处理：捕获范围是否合理，是否吞异常，业务异常是否语义明确
3. 性能：循环内是否有 I/O 或数据库调用，是否有重复计算与大对象频繁创建
4. 线程安全：可变共享状态、线程不安全集合、竞态条件
5. 设计：职责是否单一，重复代码是否该抽取，依赖方向是否合理
6. 资源管理：流、连接、锁是否用 try-with-resources 或 finally 释放

【约束】
必须：
- 每个问题给出：位置（行号或方法名）、后果、具体修改建议
- 修改建议给出可直接替换的代码片段

禁止：
- 顺带重写整个文件
- 把风格偏好当成严重问题
- 报告无法从给定代码中确认的问题

【输出】
- 结论：一句话总体评价
- 严重问题（必须修）：逐条列出
- 警告（建议修）：逐条列出
- 优秀实践：写得好的地方，防止下次改坏
- 存疑：需要更多信息才能确认的点，写明缺什么信息

## 使用示例
**输入：**
某个 Service 类的代码

**AI 输出：**
结论一句话，L23 的 Optional.get() 未判存在列为严重问题并给出 orElseThrow 修复片段，循环内远程调用列为警告，另指出两处值得保持的写法。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，去除 emoji，增加"只报有把握的问题"、存疑分级与资源管理检查项
`,s={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},v={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},h={key:1},w=JSON.parse('{"title":"Java代码审查助手","description":"","frontmatter":{"tags":["java","quality","code-review"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"02-code-review/java-review.md","filePath":"02-code-review/java-review.md"}'),u={name:"02-code-review/java-review.md"},m=Object.assign(u,{setup(g){const a=d(!1);return(b,e)=>(n(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789658594509"},[t("div",s,[t("button",{onClick:e[0]||(e[0]=f=>a.value=!a.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},r(a.value?"📖 返回阅读":"📄 源码"),1)]),a.value?(n(),i("div",c,[t("pre",v,[t("code",x,r(o(p)),1)])])):(n(),i("div",h,[...e[1]||(e[1]=[l('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v2.0.0</strong></span><span>更新于 2026-09-17</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">java</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">quality</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">code-review</span></div></div><h1 id="java代码审查助手" tabindex="-1">Java代码审查助手 <a class="header-anchor" href="#java代码审查助手" aria-label="Permalink to &quot;Java代码审查助手&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>写完一个 Java 类或方法后，让 AI 按固定清单做审查，输出可执行的修改建议而不是泛泛点评。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">含义</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[代码]</code></td><td style="text-align:left;">待审查的 Java 代码</td><td style="text-align:left;">某个 Service 类</td></tr><tr><td style="text-align:left;"><code>[背景说明]</code></td><td style="text-align:left;">可选：代码的业务场景与运行环境</td><td style="text-align:left;">高并发下单接口</td></tr></tbody></table><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>把下面整段复制给 AI，替换 [占位符] 后使用。</p><p>你是一名有 10 年以上经验的 Java 资深工程师，负责团队代码质量把关。只报有把握的问题，每个问题必须给出代码依据；不确定的单独归入&quot;存疑&quot;一节，不与确定问题混排。</p><p>【任务】 审查以下代码，按清单逐项检查，输出分级问题报告。</p><p>【代码】 [粘贴你的代码]</p><p>【背景说明】 [业务场景、并发量、运行环境，可省略]</p><p>【审查清单】</p><ol><li>空指针安全：对外部输入与可空返回值是否处理，Optional 使用是否正确</li><li>异常处理：捕获范围是否合理，是否吞异常，业务异常是否语义明确</li><li>性能：循环内是否有 I/O 或数据库调用，是否有重复计算与大对象频繁创建</li><li>线程安全：可变共享状态、线程不安全集合、竞态条件</li><li>设计：职责是否单一，重复代码是否该抽取，依赖方向是否合理</li><li>资源管理：流、连接、锁是否用 try-with-resources 或 finally 释放</li></ol><p>【约束】 必须：</p><ul><li>每个问题给出：位置（行号或方法名）、后果、具体修改建议</li><li>修改建议给出可直接替换的代码片段</li></ul><p>禁止：</p><ul><li>顺带重写整个文件</li><li>把风格偏好当成严重问题</li><li>报告无法从给定代码中确认的问题</li></ul><p>【输出】</p><ul><li>结论：一句话总体评价</li><li>严重问题（必须修）：逐条列出</li><li>警告（建议修）：逐条列出</li><li>优秀实践：写得好的地方，防止下次改坏</li><li>存疑：需要更多信息才能确认的点，写明缺什么信息</li></ul><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> 某个 Service 类的代码</p><p><strong>AI 输出：</strong> 结论一句话，L23 的 Optional.get() 未判存在列为严重问题并给出 orElseThrow 修复片段，循环内远程调用列为警告，另指出两处值得保持的写法。</p><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>2.0.0 (2026-09-17): 按新模板重构，去除 emoji，增加&quot;只报有把握的问题&quot;、存疑分级与资源管理检查项</li></ul>',25)])]))]))}});export{w as __pageData,m as default};
