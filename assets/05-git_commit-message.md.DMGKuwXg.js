import{o,c as r,j as t,t as n,k as i,a8 as s,p as d}from"./chunks/framework.BcVvFr-R.js";const p=`---
tags: [git, automation]
version: 1.1.0
last_updated: 2026-09-04
---

# 生成规范的Git提交信息（中英混合版）

## 适用场景
写完代码后，需要写符合 Conventional Commits 规范的提交信息，但描述部分用中文更清晰。

## 提示词模板
请根据以下代码改动生成 Git 提交信息，遵循 Conventional Commits 规范：
[在这里粘贴 git diff 或简要描述改动]

**输出格式：**
    \`[type]\`(\`[scope]\`): \`[中文主题]\`
    - \`[中文改动点1]\`
    - \`[中文改动点2]\`
    - \`[中文改动点3]\`

type 可选：feat（新功能）, fix（修复）, docs（文档）, style（格式）, refactor（重构）, perf（性能）, test（测试）, chore（杂务）
scope 是改动的模块名（如 auth, payment, api）
subject 用中文描述，不超过50字
body 用 - 列表说明具体改动，用中文描述

## 使用示例
**输入：** 在 UserService 里新增了 resetPassword 方法，加了单元测试

**AI输出：**
feat(auth): 添加密码重置功能
- 在 UserService 中实现 resetPassword 方法
- 增加邮箱和新密码的输入校验
- 新增成功和失败场景的单元测试

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 1.1.0 (2026-09-04): 改为中英双语标题格式，正文改用中文列表
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},x={key:1},_=JSON.parse('{"title":"生成规范的Git提交信息（中英混合版）","description":"","frontmatter":{"tags":["git","automation"],"version":"1.1.0","last_updated":"2026-09-04T00:00:00.000Z"},"headers":[],"relativePath":"05-git/commit-message.md","filePath":"05-git/commit-message.md"}'),f={name:"05-git/commit-message.md"},y=Object.assign(f,{setup(u){const e=d(!1);return(m,a)=>(o(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789658560800"},[t("div",l,[t("button",{onClick:a[0]||(a[0]=v=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},n(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(o(),r("div",c,[t("pre",g,[t("code",h,n(i(p)),1)])])):(o(),r("div",x,[...a[1]||(a[1]=[s('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v1.1.0</strong></span><span>更新于 2026-09-04</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">git</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">automation</span></div></div><h1 id="生成规范的git提交信息-中英混合版" tabindex="-1">生成规范的Git提交信息（中英混合版） <a class="header-anchor" href="#生成规范的git提交信息-中英混合版" aria-label="Permalink to &quot;生成规范的Git提交信息（中英混合版）&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>写完代码后，需要写符合 Conventional Commits 规范的提交信息，但描述部分用中文更清晰。</p><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>请根据以下代码改动生成 Git 提交信息，遵循 Conventional Commits 规范： [在这里粘贴 git diff 或简要描述改动]</p><p><strong>输出格式：</strong><code>[type]</code>(<code>[scope]</code>): <code>[中文主题]</code> - <code>[中文改动点1]</code> - <code>[中文改动点2]</code> - <code>[中文改动点3]</code></p><p>type 可选：feat（新功能）, fix（修复）, docs（文档）, style（格式）, refactor（重构）, perf（性能）, test（测试）, chore（杂务） scope 是改动的模块名（如 auth, payment, api） subject 用中文描述，不超过50字 body 用 - 列表说明具体改动，用中文描述</p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> 在 UserService 里新增了 resetPassword 方法，加了单元测试</p><p><strong>AI输出：</strong> feat(auth): 添加密码重置功能</p><ul><li>在 UserService 中实现 resetPassword 方法</li><li>增加邮箱和新密码的输入校验</li><li>新增成功和失败场景的单元测试</li></ul><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>1.1.0 (2026-09-04): 改为中英双语标题格式，正文改用中文列表</li></ul>',14)])]))]))}});export{_ as __pageData,y as default};
