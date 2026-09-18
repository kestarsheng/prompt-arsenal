import{o as n,c as t,j as s,t as e,k as l,a8 as p,p as r}from"./chunks/framework.BcVvFr-R.js";const o=`---
tags: [documentation, productivity, summary, subtask]
version: 2.1.0
last_updated: 2026-09-17
---

# 子任务完成摘要

## 适用场景
完成一个开发子任务后，快速生成结构化摘要，用于衔接下一个任务或个人复盘。

## 输入变量
无需输入变量，直接在完成改动的会话里使用。

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的工程师，摘要写给"接下来接手的人"看，标准是：读完就知道做了什么、要防什么、接下来干什么。内容只来自本次会话的实际工作，没做过的事不要写。

【任务】
根据本次会话中完成的工作，生成一份 Markdown 格式的子任务完成摘要。

【约束】
- 只输出以下三个章节，不带任何开场白、结束语或解释
- 每个章节下用 \`- \` 列表，每条一句话说清一件事
- "重点注意事项"必须写风险的原因，不是只写现象
- "下一步建议"必须具体可执行，不写空方向
- 章节标题严格使用以下字面：

\`\`\`markdown
## 本次完成
- [一句话说明完成了什么功能或修复]

## 重点注意事项
- [技术细节、潜在风险及原因]

## 下一步建议
- [具体可行的后续动作]
\`\`\`

【格式示例】
以下示例只演示结构与颗粒度，内容必须基于本次会话的实际工作。

\`\`\`markdown
## 本次完成
- 密码重置功能：UserService 中实现 resetPassword 方法，支持通过邮件验证码重置密码
- 邮件验证码发送：集成邮件服务，生成6位数字验证码，有效期5分钟

## 重点注意事项
- 邮件服务当前使用测试环境配置，上线前需更换为生产环境配置，否则验证码发不出去
- 验证码存储在内存缓存中，重启即丢失，多实例部署时无法共享

## 下一步建议
- 验证码存储从内存缓存迁移到 Redis
- 重置密码接口增加 IP 维度频率限制（如每小时最多 3 次）
\`\`\`

## 使用示例
**用法：**
子任务完成后，在原会话直接发送提示词正文即可，AI 会输出恰好三个章节的 Markdown。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-04): 强化输出约束：只输出三个章节，无开场白与解释
- 2.1.0 (2026-09-17): 按新模板重构，输出结构与示例改用代码围栏呈现，增加防虚构与颗粒度要求
`,d={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},h={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},k={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},c={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},g={key:1},E=JSON.parse('{"title":"子任务完成摘要","description":"","frontmatter":{"tags":["documentation","productivity","summary","subtask"],"version":"2.1.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"06-documentation/work-log.md","filePath":"06-documentation/work-log.md"}'),u={name:"06-documentation/work-log.md"},f=Object.assign(u,{setup(b){const i=r(!1);return(x,a)=>(n(),t("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789744638990"},[s("div",d,[s("button",{onClick:a[0]||(a[0]=v=>i.value=!i.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},e(i.value?"📖 返回阅读":"📄 源码"),1)]),i.value?(n(),t("div",h,[s("pre",k,[s("code",c,e(l(o)),1)])])):(n(),t("div",g,[...a[1]||(a[1]=[p(`<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v2.1.0</strong></span><span>更新于 2026-09-17</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">documentation</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">productivity</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">summary</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">subtask</span></div></div><h1 id="子任务完成摘要" tabindex="-1">子任务完成摘要 <a class="header-anchor" href="#子任务完成摘要" aria-label="Permalink to &quot;子任务完成摘要&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>完成一个开发子任务后，快速生成结构化摘要，用于衔接下一个任务或个人复盘。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><p>无需输入变量，直接在完成改动的会话里使用。</p><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>把下面整段复制给 AI，替换 [占位符] 后使用。</p><p>你是一名有 10 年以上经验的工程师，摘要写给&quot;接下来接手的人&quot;看，标准是：读完就知道做了什么、要防什么、接下来干什么。内容只来自本次会话的实际工作，没做过的事不要写。</p><p>【任务】 根据本次会话中完成的工作，生成一份 Markdown 格式的子任务完成摘要。</p><p>【约束】</p><ul><li>只输出以下三个章节，不带任何开场白、结束语或解释</li><li>每个章节下用 <code>- </code> 列表，每条一句话说清一件事</li><li>&quot;重点注意事项&quot;必须写风险的原因，不是只写现象</li><li>&quot;下一步建议&quot;必须具体可执行，不写空方向</li><li>章节标题严格使用以下字面：</li></ul><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 本次完成</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">一句话说明完成了什么功能或修复</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 重点注意事项</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">技术细节、潜在风险及原因</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 下一步建议</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">具体可行的后续动作</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>【格式示例】 以下示例只演示结构与颗粒度，内容必须基于本次会话的实际工作。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 本次完成</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 密码重置功能：UserService 中实现 resetPassword 方法，支持通过邮件验证码重置密码</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 邮件验证码发送：集成邮件服务，生成6位数字验证码，有效期5分钟</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 重点注意事项</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 邮件服务当前使用测试环境配置，上线前需更换为生产环境配置，否则验证码发不出去</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 验证码存储在内存缓存中，重启即丢失，多实例部署时无法共享</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 下一步建议</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 验证码存储从内存缓存迁移到 Redis</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 重置密码接口增加 IP 维度频率限制（如每小时最多 3 次）</span></span></code></pre></div><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>用法：</strong> 子任务完成后，在原会话直接发送提示词正文即可，AI 会输出恰好三个章节的 Markdown。</p><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>2.0.0 (2026-09-04): 强化输出约束：只输出三个章节，无开场白与解释</li><li>2.1.0 (2026-09-17): 按新模板重构，输出结构与示例改用代码围栏呈现，增加防虚构与颗粒度要求</li></ul>`,19)])]))]))}});export{E as __pageData,f as default};
