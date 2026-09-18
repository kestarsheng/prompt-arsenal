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
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},u={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},h={key:1},_=JSON.parse('{"title":"生成 API 文档","description":"","frontmatter":{"tags":["documentation","api","openapi"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"06-documentation/api-doc.md","filePath":"06-documentation/api-doc.md"}'),g={name:"06-documentation/api-doc.md"},y=Object.assign(g,{setup(f){const t=l(!1);return(b,e)=>(n(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789744399285"},[a("div",p,[a("button",{onClick:e[0]||(e[0]=m=>t.value=!t.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},o(t.value?"📖 返回阅读":"📄 源码"),1)]),t.value?(n(),i("div",c,[a("pre",u,[a("code",x,o(r(s)),1)])])):(n(),i("div",h,[...e[1]||(e[1]=[d('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v2.0.0</strong></span><span>更新于 2026-09-17</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">documentation</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">api</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">openapi</span></div></div><h1 id="生成-api-文档" tabindex="-1">生成 API 文档 <a class="header-anchor" href="#生成-api-文档" aria-label="Permalink to &quot;生成 API 文档&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>接口写完后生成可直接交给前端/测试使用的接口文档，要求示例数据真实可解析。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">含义</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[api_name]</code></td><td style="text-align:left;">API 名称</td><td style="text-align:left;">用户管理 API</td></tr><tr><td style="text-align:left;"><code>[endpoints]</code></td><td style="text-align:left;">接口列表及说明</td><td style="text-align:left;">POST /users 创建用户</td></tr><tr><td style="text-align:left;"><code>[schemas]</code></td><td style="text-align:left;">请求/响应数据结构</td><td style="text-align:left;">User 对象字段定义</td></tr></tbody></table><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>把下面整段复制给 AI，替换 [占位符] 后使用。</p><p>你是一名有 10 年以上经验的工程师，写的接口文档以&quot;拿到就能联调&quot;为标准。示例数据必须是合法可解析的内容；接口定义里没有的字段不要编造。</p><p>【任务】 为以下 API 生成完整的接口文档。</p><p>【API 信息】 API 名称：[api_name] 接口列表：[endpoints] 数据结构：[schemas]</p><p>【约束】 必须：</p><ul><li>每个接口包含：路径与方法、参数表（参数名/类型/必填/说明）、请求示例、响应示例</li><li>请求与响应示例用合法 JSON 代码块，字段与数据结构定义严格一致</li><li>参数用 Markdown 表格展示</li><li>包含错误码对照表（错误码、含义、处理建议）</li><li>包含认证方式说明</li><li>路径命名遵循 RESTful 习惯，资源用复数名词</li></ul><p>禁止：</p><ul><li>使用&quot;省略&quot;、&quot;同上&quot;之类的占位写法</li><li>编造接口未定义的字段或错误码</li><li>输出与接口无关的章节</li></ul><p>【输出】 按以下顺序组织：</p><ol><li>接口总览（表格：方法、路径、说明）</li><li>每个接口的详细说明</li><li>数据模型说明</li><li>错误码对照表</li></ol><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> api_name: 用户管理 API endpoints: POST /users 创建用户、GET /users/{id} 查询用户 schemas: User(id, name, email, created_at)</p><p><strong>AI 输出：</strong> 接口总览表 + 两个接口的参数表与合法 JSON 示例 + User 模型说明 + 错误码对照表，可直接用于联调。</p><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>2.0.0 (2026-09-17): 按新模板重构，增加&quot;示例必须合法可解析&quot;&quot;禁止编造字段&quot;约束</li></ul>',22)])]))]))}});export{_ as __pageData,y as default};
