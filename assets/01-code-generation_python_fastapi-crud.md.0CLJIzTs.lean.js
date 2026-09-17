import{o,c as t,j as n,t as r,k as i,a8 as d,p as s}from"./chunks/framework.BcVvFr-R.js";const p=`---
tags: [python, fastapi, codegen]
version: 1.0.0
last_updated: 2026-09-03
---

# 生成 FastAPI CRUD 接口

## 适用场景
需要快速生成一个 FastAPI 的 CRUD 接口时使用。

## 输入变量
- [model_name]: 模型名称（如 User, Product）
- [model_name_lower]: 模型名小写（如 user, product）
- [schema_name]: Pydantic Schema 名称（如 UserSchema）

## 提示词模板
请为 [model_name] 生成一个 FastAPI CRUD 接口，要求：

1. 使用 APIRouter 管理路由，prefix 为 /[model_name_lower]
2. 实现以下端点：
   - GET /{id} - 根据 ID 查询
   - GET / - 分页查询（支持 skip 和 limit 参数）
   - POST / - 新增
   - PUT /{id} - 更新
   - DELETE /{id} - 删除
3. 使用 [schema_name] 作为请求和响应模型
4. 使用 async/await 异步处理
5. 包含基本的异常处理（HTTPException）

请生成完整的 Python 代码，包含所有 import 语句。

## 使用示例
**输入变量：**
- model_name: Product
- schema_name: ProductSchema

**AI输出：**
（预期生成一个完整的 product_router.py 文件）
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},m={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},u={key:1},v=JSON.parse('{"title":"生成 FastAPI CRUD 接口","description":"","frontmatter":{"tags":["python","fastapi","codegen"],"version":"1.0.0","last_updated":"2026-09-03T00:00:00.000Z"},"headers":[],"relativePath":"01-code-generation/python/fastapi-crud.md","filePath":"01-code-generation/python/fastapi-crud.md"}'),x={name:"01-code-generation/python/fastapi-crud.md"},y=Object.assign(x,{setup(_){const a=s(!1);return(f,e)=>(o(),t("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789658173736"},[n("div",l,[n("button",{onClick:e[0]||(e[0]=g=>a.value=!a.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},r(a.value?"📖 返回阅读":"📄 源码"),1)]),a.value?(o(),t("div",c,[n("pre",m,[n("code",h,r(i(p)),1)])])):(o(),t("div",u,[...e[1]||(e[1]=[d("",14)])]))]))}});export{v as __pageData,y as default};
