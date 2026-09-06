import{S as r}from"./chunks/theme.zlxXPql8.js";import{o,c as d,E as s,w as i,a as e,e as a,t as l,u}from"./chunks/framework.LKx99Srq.js";const m=`<script setup>
import SourceCodeToggle from '../../.vitepress/components/SourceCodeToggle.vue'

// 直接导入原始 .md 源码
import source from './fastapi-crud.md?raw'
<\/script>

<SourceCodeToggle :source="source">
  <template #rendered>

<!-- 这里放原来所有的 Markdown 渲染内容 -->
---
tags: [python, fastapi, codegen]
version: 1.0.0
last_updated: 2026-09-03
---

# 生成 FastAPI CRUD 接口

## 适用场景
需要快速生成一个 FastAPI 的 CRUD 接口时使用。

## 输入变量
<template v-pre>
- \`{{model_name}}\`: 模型名称（如 User, Product）
- \`{{model_name_lower}}\`: 模型名小写（如 user, product）
- \`{{schema_name}}\`: Pydantic Schema 名称（如 UserSchema）
</template>

## 提示词模板
请为 {{model_name}} 生成一个 FastAPI CRUD 接口，要求：

1. 使用 APIRouter 管理路由，prefix 为 \`/{{model_name_lower}}\`
2. 实现以下端点：
   - GET /{id} - 根据 ID 查询
   - GET / - 分页查询（支持 skip 和 limit 参数）
   - POST / - 新增
   - PUT /{id} - 更新
   - DELETE /{id} - 删除
3. 使用 \`{{schema_name}}\` 作为请求和响应模型
4. 使用 async/await 异步处理
5. 包含基本的异常处理（HTTPException）

## 使用示例
**输入变量：**
- model_name: Product
- schema_name: ProductSchema

**AI输出：**
（预期生成一个完整的 product_router.py 文件）

  </template>
</SourceCodeToggle>`,T=JSON.parse('{"title":"生成 FastAPI CRUD 接口","description":"","frontmatter":{},"headers":[],"relativePath":"01-code-generation/python/fastapi-crud.md","filePath":"01-code-generation/python/fastapi-crud.md"}'),p={name:"01-code-generation/python/fastapi-crud.md"},y=Object.assign(p,{setup(P){return(t,n)=>(o(),d("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671457000"},[s(r,{source:u(m)},{rendered:i(()=>[n[6]||(n[6]=e("hr",null,null,-1)),n[7]||(n[7]=e("h2",{id:"tags-python-fastapi-codegen-version-1-0-0last-updated-2026-09-03",tabindex:"-1"},[a("tags: [python, fastapi, codegen] version: 1.0.0 last_updated: 2026-09-03 "),e("a",{class:"header-anchor",href:"#tags-python-fastapi-codegen-version-1-0-0last-updated-2026-09-03","aria-label":`Permalink to "tags: [python, fastapi, codegen]
version: 1.0.0
last_updated: 2026-09-03"`},"​")],-1)),n[8]||(n[8]=e("h1",{id:"生成-fastapi-crud-接口",tabindex:"-1"},[a("生成 FastAPI CRUD 接口 "),e("a",{class:"header-anchor",href:"#生成-fastapi-crud-接口","aria-label":'Permalink to "生成 FastAPI CRUD 接口"'},"​")],-1)),n[9]||(n[9]=e("h2",{id:"适用场景",tabindex:"-1"},[a("适用场景 "),e("a",{class:"header-anchor",href:"#适用场景","aria-label":'Permalink to "适用场景"'},"​")],-1)),n[10]||(n[10]=e("p",null,"需要快速生成一个 FastAPI 的 CRUD 接口时使用。",-1)),n[11]||(n[11]=e("h2",{id:"输入变量",tabindex:"-1"},[a("输入变量 "),e("a",{class:"header-anchor",href:"#输入变量","aria-label":'Permalink to "输入变量"'},"​")],-1)),n[12]||(n[12]=e("template",null,[a(" - `{{model_name}}`: 模型名称（如 User, Product） - `{{model_name_lower}}`: 模型名小写（如 user, product） - `{{schema_name}}`: Pydantic Schema 名称（如 UserSchema） ")],-1)),n[13]||(n[13]=e("h2",{id:"提示词模板",tabindex:"-1"},[a("提示词模板 "),e("a",{class:"header-anchor",href:"#提示词模板","aria-label":'Permalink to "提示词模板"'},"​")],-1)),e("p",null,"请为 "+l(t.model_name)+" 生成一个 FastAPI CRUD 接口，要求：",1),e("ol",null,[e("li",null,[n[0]||(n[0]=a("使用 APIRouter 管理路由，prefix 为 ",-1)),e("code",null,"/"+l(t.model_name_lower),1)]),n[3]||(n[3]=e("li",null,[a("实现以下端点： "),e("ul",null,[e("li",null,"GET /{id} - 根据 ID 查询"),e("li",null,"GET / - 分页查询（支持 skip 和 limit 参数）"),e("li",null,"POST / - 新增"),e("li",null,"PUT /{id} - 更新"),e("li",null,"DELETE /{id} - 删除")])],-1)),e("li",null,[n[1]||(n[1]=a("使用 ",-1)),e("code",null,l(t.schema_name),1),n[2]||(n[2]=a(" 作为请求和响应模型",-1))]),n[4]||(n[4]=e("li",null,"使用 async/await 异步处理",-1)),n[5]||(n[5]=e("li",null,"包含基本的异常处理（HTTPException）",-1))]),n[14]||(n[14]=e("h2",{id:"使用示例",tabindex:"-1"},[a("使用示例 "),e("a",{class:"header-anchor",href:"#使用示例","aria-label":'Permalink to "使用示例"'},"​")],-1)),n[15]||(n[15]=e("p",null,[e("strong",null,"输入变量：")],-1)),n[16]||(n[16]=e("ul",null,[e("li",null,"model_name: Product"),e("li",null,"schema_name: ProductSchema")],-1)),n[17]||(n[17]=e("p",null,[e("strong",null,"AI输出："),a(" （预期生成一个完整的 product_router.py 文件）")],-1))]),_:1},8,["source"])]))}});export{T as __pageData,y as default};
