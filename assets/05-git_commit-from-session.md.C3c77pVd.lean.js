import{o,c as i,j as t,t as s,k as u,a8 as f,p as d}from"./chunks/framework.BcVvFr-R.js";const x=`---
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
`,h={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px",display:"flex","flex-direction":"column","align-items":"flex-end",gap:"8px"}},m={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},v={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},b={key:1},P=JSON.parse('{"title":"根据会话历史生成 Git 提交信息","description":"","frontmatter":{"tags":["git","automation"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"05-git/commit-from-session.md","filePath":"05-git/commit-from-session.md"}'),y={name:"05-git/commit-from-session.md"},A=Object.assign(y,{setup(w){const a=d(!1),r=d(!1),l=`# 根据会话历史生成 Git 提交信息

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
- 2.0.0 (2026-09-17): 按新模板重构，与 commit-message 的格式规则对齐，增加"不确定先问"约束`;let p=null;async function c(){try{await navigator.clipboard.writeText(l)}catch{const e=document.createElement("textarea");e.value=l,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}r.value=!0,clearTimeout(p),p=setTimeout(()=>{r.value=!1},1500)}return(e,n)=>(o(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789745426701"},[t("div",h,[t("button",{onClick:n[0]||(n[0]=_=>a.value=!a.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},s(a.value?"📖 返回阅读":"📄 源码"),1),t("button",{onClick:c,style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},s(r.value?"已复制":"复制提示词"),1)]),a.value?(o(),i("div",m,[t("pre",g,[t("code",v,s(u(x)),1)])])):(o(),i("div",b,[...n[1]||(n[1]=[f("",19)])]))]))}});export{P as __pageData,A as default};
