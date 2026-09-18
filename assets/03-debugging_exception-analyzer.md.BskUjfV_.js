import{o as a,c as i,j as n,t as r,k as l,a8 as o,p as d}from"./chunks/framework.BcVvFr-R.js";const p=`---
tags: [debugging, exception, error]
version: 2.0.0
last_updated: 2026-09-17
---

# 异常堆栈分析与排查

## 适用场景
遇到异常堆栈时，快速定位根因并拿到可执行的修复方案，而不是停留在异常字面含义。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[异常堆栈]\` | 完整的异常堆栈信息 | NPE 完整堆栈 |
| \`[相关代码]\` | 堆栈涉及的业务代码片段 | 调用链上的方法 |
| \`[环境信息]\` | 可选：版本、配置、部署方式 | Spring Boot 3.2 / JDK 17 |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的工程师，擅长从堆栈和代码中定位线上问题。结论先行：先给根因判断，再给推理过程；信息不足以定位时，明确列出还需要的材料，不要猜。

【任务】
分析以下异常，定位根本原因，给出修复方案。

【异常堆栈】
[粘贴完整的异常堆栈]

【相关代码】
[粘贴相关代码片段]

【环境信息】
[技术栈版本、配置、部署环境，可省略]

【约束】
必须：
- 指出异常抛出的准确位置（类、方法、行号）
- 区分根因与表面现象，说清因果链
- 判断问题归类：代码缺陷、配置问题、还是环境问题
- 给出至少两种修复方案，说明取舍并推荐一种
- 涉及第三方库时，说明版本兼容性与升级注意点

禁止：
- 堆栈信息不足以定位时强行给结论
- 编造不存在的 API、配置项或类
- 只复述异常信息而不分析

【输出】
- 根因结论：一到两句话
- 定位：抛出点与关键调用链
- 因果链分析：为什么发生
- 修复方案对比：至少两种，含取舍与推荐
- 预防建议：同类问题如何避免再次发生

## 使用示例
**输入：**
NullPointerException 堆栈 + 对应 Service 方法代码

**AI 输出：**
根因结论一句话，定位到 L42 的链式调用，说明中间某步返回 null 的原因，给出判空与 Optional 两种方案并推荐其一，附防止复发的建议。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，结论先行，增加"信息不足列材料而不是猜"与防编造约束
`,s={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},h={key:1},_=JSON.parse('{"title":"异常堆栈分析与排查","description":"","frontmatter":{"tags":["debugging","exception","error"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"03-debugging/exception-analyzer.md","filePath":"03-debugging/exception-analyzer.md"}'),u={name:"03-debugging/exception-analyzer.md"},m=Object.assign(u,{setup(b){const t=d(!1);return(f,e)=>(a(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789744638988"},[n("div",s,[n("button",{onClick:e[0]||(e[0]=v=>t.value=!t.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},r(t.value?"📖 返回阅读":"📄 源码"),1)]),t.value?(a(),i("div",c,[n("pre",x,[n("code",g,r(l(p)),1)])])):(a(),i("div",h,[...e[1]||(e[1]=[o('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v2.0.0</strong></span><span>更新于 2026-09-17</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">debugging</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">exception</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">error</span></div></div><h1 id="异常堆栈分析与排查" tabindex="-1">异常堆栈分析与排查 <a class="header-anchor" href="#异常堆栈分析与排查" aria-label="Permalink to &quot;异常堆栈分析与排查&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>遇到异常堆栈时，快速定位根因并拿到可执行的修复方案，而不是停留在异常字面含义。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">含义</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[异常堆栈]</code></td><td style="text-align:left;">完整的异常堆栈信息</td><td style="text-align:left;">NPE 完整堆栈</td></tr><tr><td style="text-align:left;"><code>[相关代码]</code></td><td style="text-align:left;">堆栈涉及的业务代码片段</td><td style="text-align:left;">调用链上的方法</td></tr><tr><td style="text-align:left;"><code>[环境信息]</code></td><td style="text-align:left;">可选：版本、配置、部署方式</td><td style="text-align:left;">Spring Boot 3.2 / JDK 17</td></tr></tbody></table><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>把下面整段复制给 AI，替换 [占位符] 后使用。</p><p>你是一名有 10 年以上经验的工程师，擅长从堆栈和代码中定位线上问题。结论先行：先给根因判断，再给推理过程；信息不足以定位时，明确列出还需要的材料，不要猜。</p><p>【任务】 分析以下异常，定位根本原因，给出修复方案。</p><p>【异常堆栈】 [粘贴完整的异常堆栈]</p><p>【相关代码】 [粘贴相关代码片段]</p><p>【环境信息】 [技术栈版本、配置、部署环境，可省略]</p><p>【约束】 必须：</p><ul><li>指出异常抛出的准确位置（类、方法、行号）</li><li>区分根因与表面现象，说清因果链</li><li>判断问题归类：代码缺陷、配置问题、还是环境问题</li><li>给出至少两种修复方案，说明取舍并推荐一种</li><li>涉及第三方库时，说明版本兼容性与升级注意点</li></ul><p>禁止：</p><ul><li>堆栈信息不足以定位时强行给结论</li><li>编造不存在的 API、配置项或类</li><li>只复述异常信息而不分析</li></ul><p>【输出】</p><ul><li>根因结论：一到两句话</li><li>定位：抛出点与关键调用链</li><li>因果链分析：为什么发生</li><li>修复方案对比：至少两种，含取舍与推荐</li><li>预防建议：同类问题如何避免再次发生</li></ul><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> NullPointerException 堆栈 + 对应 Service 方法代码</p><p><strong>AI 输出：</strong> 根因结论一句话，定位到 L42 的链式调用，说明中间某步返回 null 的原因，给出判空与 Optional 两种方案并推荐其一，附防止复发的建议。</p><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>2.0.0 (2026-09-17): 按新模板重构，结论先行，增加&quot;信息不足列材料而不是猜&quot;与防编造约束</li></ul>',24)])]))]))}});export{_ as __pageData,m as default};
