import{o as i,c as r,j as t,t as s,k as f,a8 as h,p}from"./chunks/framework.BcVvFr-R.js";const u=`---
tags: [git, automation]
version: 2.0.0
last_updated: 2026-09-17
---

# 生成规范的Git提交信息（中英混合版）

## 适用场景
写完代码后，让 AI 根据 diff 生成符合 Conventional Commits 的提交信息；主题用中文，团队里更好读。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[改动内容]\` | git diff 输出，或简短的改动说明 | 粘贴 diff |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的工程师，负责把关团队的提交信息规范。只输出提交信息本身，不解释、不加评论。

【任务】
根据下面的改动内容，生成一条 Git 提交信息。

【约束】
- 第一行格式：type(scope): 中文主题，主题不超过 50 字，结尾不加句号
- type 只能取：feat fix docs style refactor perf test chore
- scope 用模块名（如 auth, payment）；改动跨多个模块时省略 scope
- 正文用中文短横线列表，只写本次实际做了什么，不写评价、影响范围等废话
- diff 里没有的改动不要写；意图不明的地方在正文末尾标注"待确认"

【改动内容】
[在这里粘贴 git diff 或简要描述改动]

## 使用示例
**输入：**
在 UserService 里新增了 resetPassword 方法，加了单元测试

**AI 输出：**
feat(auth): 添加密码重置功能
- 在 UserService 中实现 resetPassword 方法
- 增加邮箱和新密码的输入校验
- 新增成功和失败场景的单元测试

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 1.1.0 (2026-09-04): 改为中英双语标题格式，正文改用中文列表
- 2.0.0 (2026-09-17): 按新模板重构，补充 scope 省略规则、"只输出提交信息本身"与防虚构约束
`,x={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px",display:"flex","flex-direction":"column","align-items":"flex-end",gap:"8px"}},g={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},m={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},b={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},v={key:1},P=JSON.parse('{"title":"生成规范的Git提交信息（中英混合版）","description":"","frontmatter":{"tags":["git","automation"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"05-git/commit-message.md","filePath":"05-git/commit-message.md"}'),y={name:"05-git/commit-message.md"},q=Object.assign(y,{setup(_){const a=p(!1),o=p(!1),d=`# 生成规范的Git提交信息（中英混合版）

## 适用场景
写完代码后，让 AI 根据 diff 生成符合 Conventional Commits 的提交信息；主题用中文，团队里更好读。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[改动内容]\` | git diff 输出，或简短的改动说明 | 粘贴 diff |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的工程师，负责把关团队的提交信息规范。只输出提交信息本身，不解释、不加评论。

【任务】
根据下面的改动内容，生成一条 Git 提交信息。

【约束】
- 第一行格式：type(scope): 中文主题，主题不超过 50 字，结尾不加句号
- type 只能取：feat fix docs style refactor perf test chore
- scope 用模块名（如 auth, payment）；改动跨多个模块时省略 scope
- 正文用中文短横线列表，只写本次实际做了什么，不写评价、影响范围等废话
- diff 里没有的改动不要写；意图不明的地方在正文末尾标注"待确认"

【改动内容】
[在这里粘贴 git diff 或简要描述改动]

## 使用示例
**输入：**
在 UserService 里新增了 resetPassword 方法，加了单元测试

**AI 输出：**
feat(auth): 添加密码重置功能
- 在 UserService 中实现 resetPassword 方法
- 增加邮箱和新密码的输入校验
- 新增成功和失败场景的单元测试

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 1.1.0 (2026-09-04): 改为中英双语标题格式，正文改用中文列表
- 2.0.0 (2026-09-17): 按新模板重构，补充 scope 省略规则、"只输出提交信息本身"与防虚构约束`;let l=null;async function c(){try{await navigator.clipboard.writeText(d)}catch{const e=document.createElement("textarea");e.value=d,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}o.value=!0,clearTimeout(l),l=setTimeout(()=>{o.value=!1},1500)}return(e,n)=>(i(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789745426702"},[t("div",x,[t("button",{onClick:n[0]||(n[0]=w=>a.value=!a.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},s(a.value?"📖 返回阅读":"📄 源码"),1),t("button",{onClick:c,style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},s(o.value?"已复制":"复制提示词"),1)]),a.value?(i(),r("div",g,[t("pre",m,[t("code",b,s(f(u)),1)])])):(i(),r("div",v,[...n[1]||(n[1]=[h('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v2.0.0</strong></span><span>更新于 2026-09-17</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">git</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">automation</span></div></div><h1 id="生成规范的git提交信息-中英混合版" tabindex="-1">生成规范的Git提交信息（中英混合版） <a class="header-anchor" href="#生成规范的git提交信息-中英混合版" aria-label="Permalink to &quot;生成规范的Git提交信息（中英混合版）&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>写完代码后，让 AI 根据 diff 生成符合 Conventional Commits 的提交信息；主题用中文，团队里更好读。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">含义</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[改动内容]</code></td><td style="text-align:left;">git diff 输出，或简短的改动说明</td><td style="text-align:left;">粘贴 diff</td></tr></tbody></table><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>把下面整段复制给 AI，替换 [占位符] 后使用。</p><p>你是一名有 10 年以上经验的工程师，负责把关团队的提交信息规范。只输出提交信息本身，不解释、不加评论。</p><p>【任务】 根据下面的改动内容，生成一条 Git 提交信息。</p><p>【约束】</p><ul><li>第一行格式：type(scope): 中文主题，主题不超过 50 字，结尾不加句号</li><li>type 只能取：feat fix docs style refactor perf test chore</li><li>scope 用模块名（如 auth, payment）；改动跨多个模块时省略 scope</li><li>正文用中文短横线列表，只写本次实际做了什么，不写评价、影响范围等废话</li><li>diff 里没有的改动不要写；意图不明的地方在正文末尾标注&quot;待确认&quot;</li></ul><p>【改动内容】 [在这里粘贴 git diff 或简要描述改动]</p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> 在 UserService 里新增了 resetPassword 方法，加了单元测试</p><p><strong>AI 输出：</strong> feat(auth): 添加密码重置功能</p><ul><li>在 UserService 中实现 resetPassword 方法</li><li>增加邮箱和新密码的输入校验</li><li>新增成功和失败场景的单元测试</li></ul><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>1.1.0 (2026-09-04): 改为中英双语标题格式，正文改用中文列表</li><li>2.0.0 (2026-09-17): 按新模板重构，补充 scope 省略规则、&quot;只输出提交信息本身&quot;与防虚构约束</li></ul>',19)])]))]))}});export{P as __pageData,q as default};
