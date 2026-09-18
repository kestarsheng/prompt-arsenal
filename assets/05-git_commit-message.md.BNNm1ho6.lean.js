import{o as i,c as o,j as a,t as n,k as r,a8 as s,p as d}from"./chunks/framework.BcVvFr-R.js";const l=`---
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
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},f={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},g={key:1},y=JSON.parse('{"title":"生成规范的Git提交信息（中英混合版）","description":"","frontmatter":{"tags":["git","automation"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"05-git/commit-message.md","filePath":"05-git/commit-message.md"}'),x={name:"05-git/commit-message.md"},_=Object.assign(x,{setup(u){const t=d(!1);return(b,e)=>(i(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789744399285"},[a("div",p,[a("button",{onClick:e[0]||(e[0]=v=>t.value=!t.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},n(t.value?"📖 返回阅读":"📄 源码"),1)]),t.value?(i(),o("div",c,[a("pre",f,[a("code",h,n(r(l)),1)])])):(i(),o("div",g,[...e[1]||(e[1]=[s("",19)])]))]))}});export{y as __pageData,_ as default};
