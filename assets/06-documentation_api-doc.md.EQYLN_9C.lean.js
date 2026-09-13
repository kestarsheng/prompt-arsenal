import{o as r,c as e,j as o,t as i,k as p,a8 as t,p as d}from"./chunks/framework.BcVvFr-R.js";const s=`---
tags: [documentation, api, openapi]
version: 1.0.0
last_updated: 2026-09-03
---

<script setup>
import { ref } from 'vue'
import source from './api-doc.md?raw'

const showSource = ref(false)
<\/script>

<div style="position: sticky; top: 80px; float: right; z-index: 100; margin-bottom: 12px; margin-left: 12px;">
  <button @click="showSource = !showSource" style="padding: 6px 14px; background: var(--vp-c-brand); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: 500; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: all 0.2s ease;">
    {{ showSource ? '📖 返回阅读' : '📄 源码' }}
  </button>
</div>

<div v-if="showSource" style="background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; max-height: 80vh; overflow: auto; margin: 20px 0; border: 1px solid #333; clear: both; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.7; white-space: pre-wrap; word-wrap: break-word;">
  <pre style="margin: 0; white-space: pre-wrap; word-wrap: break-word;"><code style="font-family: inherit; font-size: 14px; color: #d4d4d4;">{{ source }}</code></pre>
</div>

<div v-else>

<!--prompt-meta-->
<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);">
  <div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v1.0.0</strong></span><span>更新于 2026-09-03</span></div>
  <div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">documentation</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">api</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">openapi</span></div>
</div>
<!--/prompt-meta-->

# 生成 API 文档

## 适用场景
写完 API 接口后，需要生成标准的接口文档供前端/测试使用。

## 输入变量
- \`[api_name]\`: API 名称
- \`[endpoints]\`: 接口列表及说明
- \`[schemas]\`: 请求/响应数据结构

## 提示词模板
请为以下 API 生成完整的接口文档：

**API 名称：** [api_name]

**接口列表：** [endpoints]

**数据结构：** [schemas]

**文档要求：**
1. 每个接口包含：路径、方法、请求参数、请求示例、响应示例
2. 使用 Markdown 表格展示参数
3. 包含错误码说明
4. 包含认证方式说明
5. 符合 RESTful API 规范

**输出格式：**
- 接口总览（表格）
- 每个接口的详细说明
- 数据模型说明
- 错误码对照表

## 使用示例
**输入：** [用户管理 API 的接口列表]

**AI输出：**
（输出完整的 API 文档）

</div>

<style>
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},v={key:1},w=JSON.parse('{"title":"生成 API 文档","description":"","frontmatter":{"tags":["documentation","api","openapi"],"version":"1.0.0","last_updated":"2026-09-03T00:00:00.000Z"},"headers":[],"relativePath":"06-documentation/api-doc.md","filePath":"06-documentation/api-doc.md"}'),b={name:"06-documentation/api-doc.md"},y=Object.assign(b,{setup(u){const n=d(!1);return(h,a)=>(r(),e("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789289005000"},[o("div",l,[o("button",{onClick:a[0]||(a[0]=f=>n.value=!n.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},i(n.value?"📖 返回阅读":"📄 源码"),1)]),n.value?(r(),e("div",c,[o("pre",x,[o("code",g,i(p(s)),1)])])):(r(),e("div",v,[...a[1]||(a[1]=[t("",18)])]))]))}});export{w as __pageData,y as default};
