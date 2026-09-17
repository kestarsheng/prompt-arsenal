import{o as r,c as o,j as t,t as i,k as n,a8 as s,p}from"./chunks/framework.BcVvFr-R.js";const d=`---
tags: [git, automation]
version: 2.0.0
last_updated: 2026-09-17
---

# 根据会话历史生成 Git 提交信息

## 适用场景
AI 辅助完成代码改动后，直接让它回顾本次会话生成提交信息，省去手动描述改动。前提：改动尚未提交。

## 输入变量
无需输入变量，直接在完成改动的会话里使用。

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的工程师，负责把关团队的提交信息规范。只输出提交信息本身，不解释、不加评论。

【任务】
回顾本次会话中你为我完成的全部代码改动，生成一条 Git 提交信息。

【约束】
- 第一行格式：type(scope): 中文主题，主题不超过 50 字，结尾不加句号
- type 只能取：feat fix docs style refactor perf test chore，根据改动性质推断
- scope 根据改动模块推断；跨多个模块时省略
- 正文用中文短横线列表，只列本次会话中实际发生的改动，按文件或功能归组
- 会话里没做过的改动不要写；不确定改动意图时先问我，不要猜

【补充说明】
[如果有 diff 之外的背景（如手动改过的文件、临时放弃的方案），写在这里，可省略]

## 使用示例
**会话背景：**
让 AI 在 UserService 中新增 resetPassword 方法并补充单元测试，同时修改 UserController 添加对应端点。

**AI 输出：**
feat(auth): 添加密码重置功能
- 在 UserService 中实现 resetPassword 方法
- 新增 UserController.resetPassword API 端点
- 添加成功和失败场景的单元测试

## 迭代记录
- 1.0.0 (2026-09-04): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，与 commit-message 的格式规则对齐，增加"不确定先问"约束
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},f={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},x={key:1},_=JSON.parse('{"title":"根据会话历史生成 Git 提交信息","description":"","frontmatter":{"tags":["git","automation"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"05-git/commit-from-session.md","filePath":"05-git/commit-from-session.md"}'),u={name:"05-git/commit-from-session.md"},y=Object.assign(u,{setup(g){const e=p(!1);return(m,a)=>(r(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789658969060"},[t("div",l,[t("button",{onClick:a[0]||(a[0]=v=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},i(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(r(),o("div",c,[t("pre",h,[t("code",f,i(n(d)),1)])])):(r(),o("div",x,[...a[1]||(a[1]=[s('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v2.0.0</strong></span><span>更新于 2026-09-17</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">git</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">automation</span></div></div><h1 id="根据会话历史生成-git-提交信息" tabindex="-1">根据会话历史生成 Git 提交信息 <a class="header-anchor" href="#根据会话历史生成-git-提交信息" aria-label="Permalink to &quot;根据会话历史生成 Git 提交信息&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>AI 辅助完成代码改动后，直接让它回顾本次会话生成提交信息，省去手动描述改动。前提：改动尚未提交。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><p>无需输入变量，直接在完成改动的会话里使用。</p><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>把下面整段复制给 AI，替换 [占位符] 后使用。</p><p>你是一名有 10 年以上经验的工程师，负责把关团队的提交信息规范。只输出提交信息本身，不解释、不加评论。</p><p>【任务】 回顾本次会话中你为我完成的全部代码改动，生成一条 Git 提交信息。</p><p>【约束】</p><ul><li>第一行格式：type(scope): 中文主题，主题不超过 50 字，结尾不加句号</li><li>type 只能取：feat fix docs style refactor perf test chore，根据改动性质推断</li><li>scope 根据改动模块推断；跨多个模块时省略</li><li>正文用中文短横线列表，只列本次会话中实际发生的改动，按文件或功能归组</li><li>会话里没做过的改动不要写；不确定改动意图时先问我，不要猜</li></ul><p>【补充说明】 [如果有 diff 之外的背景（如手动改过的文件、临时放弃的方案），写在这里，可省略]</p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>会话背景：</strong> 让 AI 在 UserService 中新增 resetPassword 方法并补充单元测试，同时修改 UserController 添加对应端点。</p><p><strong>AI 输出：</strong> feat(auth): 添加密码重置功能</p><ul><li>在 UserService 中实现 resetPassword 方法</li><li>新增 UserController.resetPassword API 端点</li><li>添加成功和失败场景的单元测试</li></ul><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-04): 初始版本</li><li>2.0.0 (2026-09-17): 按新模板重构，与 commit-message 的格式规则对齐，增加&quot;不确定先问&quot;约束</li></ul>',19)])]))]))}});export{_ as __pageData,y as default};
