import{o as n,c as i,j as a,t as o,k as r,a8 as d,p as l}from"./chunks/framework.BcVvFr-R.js";const s=`---
tags: [documentation, api, openapi]
version: 2.0.0
last_updated: 2026-09-17
---

# 生成 API 文档

## 适用场景
接口写完后生成可直接交给前端/测试使用的接口文档，要求示例数据真实可解析。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[api_name]\` | API 名称 | 用户管理 API |
| \`[endpoints]\` | 接口列表及说明 | POST /users 创建用户 |
| \`[schemas]\` | 请求/响应数据结构 | User 对象字段定义 |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的工程师，写的接口文档以"拿到就能联调"为标准。示例数据必须是合法可解析的内容；接口定义里没有的字段不要编造。

【任务】
为以下 API 生成完整的接口文档。

【API 信息】
API 名称：[api_name]
接口列表：[endpoints]
数据结构：[schemas]

【约束】
必须：
- 每个接口包含：路径与方法、参数表（参数名/类型/必填/说明）、请求示例、响应示例
- 请求与响应示例用合法 JSON 代码块，字段与数据结构定义严格一致
- 参数用 Markdown 表格展示
- 包含错误码对照表（错误码、含义、处理建议）
- 包含认证方式说明
- 路径命名遵循 RESTful 习惯，资源用复数名词

禁止：
- 使用"省略"、"同上"之类的占位写法
- 编造接口未定义的字段或错误码
- 输出与接口无关的章节

【输出】
按以下顺序组织：
1. 接口总览（表格：方法、路径、说明）
2. 每个接口的详细说明
3. 数据模型说明
4. 错误码对照表

## 使用示例
**输入：**
api_name: 用户管理 API
endpoints: POST /users 创建用户、GET /users/{id} 查询用户
schemas: User(id, name, email, created_at)

**AI 输出：**
接口总览表 + 两个接口的参数表与合法 JSON 示例 + User 模型说明 + 错误码对照表，可直接用于联调。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，增加"示例必须合法可解析""禁止编造字段"约束
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},u={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},h={key:1},_=JSON.parse('{"title":"生成 API 文档","description":"","frontmatter":{"tags":["documentation","api","openapi"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"06-documentation/api-doc.md","filePath":"06-documentation/api-doc.md"}'),g={name:"06-documentation/api-doc.md"},y=Object.assign(g,{setup(f){const t=l(!1);return(b,e)=>(n(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789659003832"},[a("div",p,[a("button",{onClick:e[0]||(e[0]=m=>t.value=!t.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},o(t.value?"📖 返回阅读":"📄 源码"),1)]),t.value?(n(),i("div",c,[a("pre",u,[a("code",x,o(r(s)),1)])])):(n(),i("div",h,[...e[1]||(e[1]=[d("",22)])]))]))}});export{_ as __pageData,y as default};
