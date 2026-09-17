import{o as n,c as o,j as a,t as d,k as r,a8 as i,p as l}from"./chunks/framework.BcVvFr-R.js";const s=`---
tags: [python, fastapi, codegen]
version: 2.0.0
last_updated: 2026-09-17
---

# 生成 FastAPI CRUD 接口

## 适用场景
在 FastAPI 项目中新增标准 CRUD 路由，要求异步实现、状态码语义正确、类型注解完整。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[model_name]\` | 模型名称（帕斯卡命名） | Product |
| \`[model_name_lower]\` | 路由前缀（小写） | product |
| \`[schema_name]\` | Pydantic Schema 名 | ProductSchema |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的 Python 后端工程师，长期维护 FastAPI 生产项目。只做与任务直接相关的事；不编造 API 或依赖；遇到不确定的点先说明假设。

【任务】
为 [model_name] 生成一个 FastAPI 路由模块，包含完整可运行的 Python 代码。

【约束】
必须：
- 使用 APIRouter，prefix="/[model_name_lower]"，并设置 tags
- 端点全部 async/await，函数带完整类型注解
- 请求体和响应都用 [schema_name]，响应端点显式声明 response_model
- POST 返回 201，DELETE 成功返回 204，GET /{id} 查不到时抛 HTTPException 404
- 数据库会话用 Depends 注入，依赖函数本身不在本模块实现时，以 get_db 占位并注明假设
- 补全所有 import，代码可直接运行

禁止：
- 在路由函数里写业务逻辑，只做参数接收、调用数据层、组装响应
- 返回裸 dict 而不用 Schema

端点清单：
- GET /{id}：按 ID 查询
- GET /：分页查询，skip/limit 带 default 与 le 约束
- POST /：新增
- PUT /{id}：更新
- DELETE /{id}：删除

## 使用示例
**输入：**
model_name: Product
model_name_lower: product
schema_name: ProductSchema

**AI 输出：**
完整的 product 路由模块：五个 async 端点、response_model 声明、201/204/404 语义正确、get_db 依赖注入。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，补充 response_model、状态码语义、Depends 注入与假设说明等约束
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},m={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},u={key:1},y=JSON.parse('{"title":"生成 FastAPI CRUD 接口","description":"","frontmatter":{"tags":["python","fastapi","codegen"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"01-code-generation/python/fastapi-crud.md","filePath":"01-code-generation/python/fastapi-crud.md"}'),x={name:"01-code-generation/python/fastapi-crud.md"},v=Object.assign(x,{setup(g){const e=l(!1);return(f,t)=>(n(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789658738232"},[a("div",p,[a("button",{onClick:t[0]||(t[0]=_=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},d(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(n(),o("div",c,[a("pre",h,[a("code",m,d(r(s)),1)])])):(n(),o("div",u,[...t[1]||(t[1]=[i('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v2.0.0</strong></span><span>更新于 2026-09-17</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">python</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">fastapi</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">codegen</span></div></div><h1 id="生成-fastapi-crud-接口" tabindex="-1">生成 FastAPI CRUD 接口 <a class="header-anchor" href="#生成-fastapi-crud-接口" aria-label="Permalink to &quot;生成 FastAPI CRUD 接口&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>在 FastAPI 项目中新增标准 CRUD 路由，要求异步实现、状态码语义正确、类型注解完整。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">含义</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[model_name]</code></td><td style="text-align:left;">模型名称（帕斯卡命名）</td><td style="text-align:left;">Product</td></tr><tr><td style="text-align:left;"><code>[model_name_lower]</code></td><td style="text-align:left;">路由前缀（小写）</td><td style="text-align:left;">product</td></tr><tr><td style="text-align:left;"><code>[schema_name]</code></td><td style="text-align:left;">Pydantic Schema 名</td><td style="text-align:left;">ProductSchema</td></tr></tbody></table><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>把下面整段复制给 AI，替换 [占位符] 后使用。</p><p>你是一名有 10 年以上经验的 Python 后端工程师，长期维护 FastAPI 生产项目。只做与任务直接相关的事；不编造 API 或依赖；遇到不确定的点先说明假设。</p><p>【任务】 为 [model_name] 生成一个 FastAPI 路由模块，包含完整可运行的 Python 代码。</p><p>【约束】 必须：</p><ul><li>使用 APIRouter，prefix=&quot;/[model_name_lower]&quot;，并设置 tags</li><li>端点全部 async/await，函数带完整类型注解</li><li>请求体和响应都用 [schema_name]，响应端点显式声明 response_model</li><li>POST 返回 201，DELETE 成功返回 204，GET /{id} 查不到时抛 HTTPException 404</li><li>数据库会话用 Depends 注入，依赖函数本身不在本模块实现时，以 get_db 占位并注明假设</li><li>补全所有 import，代码可直接运行</li></ul><p>禁止：</p><ul><li>在路由函数里写业务逻辑，只做参数接收、调用数据层、组装响应</li><li>返回裸 dict 而不用 Schema</li></ul><p>端点清单：</p><ul><li>GET /{id}：按 ID 查询</li><li>GET /：分页查询，skip/limit 带 default 与 le 约束</li><li>POST /：新增</li><li>PUT /{id}：更新</li><li>DELETE /{id}：删除</li></ul><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> model_name: Product model_name_lower: product schema_name: ProductSchema</p><p><strong>AI 输出：</strong> 完整的 product 路由模块：五个 async 端点、response_model 声明、201/204/404 语义正确、get_db 依赖注入。</p><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>2.0.0 (2026-09-17): 按新模板重构，补充 response_model、状态码语义、Depends 注入与假设说明等约束</li></ul>',21)])]))]))}});export{y as __pageData,v as default};
