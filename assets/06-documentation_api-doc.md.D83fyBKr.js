import{o as a,c as t,j as n,t as r,k as i,a8 as d,p as s}from"./chunks/framework.BcVvFr-R.js";const p=`<script setup>
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

---
tags: [documentation, api, openapi]
version: 1.0.0
last_updated: 2026-09-03
---

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
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},u={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},m={key:1},_=JSON.parse('{"title":"生成 API 文档","description":"","frontmatter":{},"headers":[],"relativePath":"06-documentation/api-doc.md","filePath":"06-documentation/api-doc.md"}'),g={name:"06-documentation/api-doc.md"},v=Object.assign(g,{setup(f){const e=s(!1);return(b,o)=>(a(),t("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671708000"},[n("div",l,[n("button",{onClick:o[0]||(o[0]=x=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},r(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(a(),t("div",c,[n("pre",h,[n("code",u,r(i(p)),1)])])):(a(),t("div",m,[...o[1]||(o[1]=[d(`<hr><h2 id="tags-documentation-api-openapi-version-1-0-0last-updated-2026-09-03" tabindex="-1">tags: [documentation, api, openapi] version: 1.0.0 last_updated: 2026-09-03 <a class="header-anchor" href="#tags-documentation-api-openapi-version-1-0-0last-updated-2026-09-03" aria-label="Permalink to &quot;tags: [documentation, api, openapi]
version: 1.0.0
last_updated: 2026-09-03&quot;">​</a></h2><h1 id="生成-api-文档" tabindex="-1">生成 API 文档 <a class="header-anchor" href="#生成-api-文档" aria-label="Permalink to &quot;生成 API 文档&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>写完 API 接口后，需要生成标准的接口文档供前端/测试使用。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><ul><li><code>[api_name]</code>: API 名称</li><li><code>[endpoints]</code>: 接口列表及说明</li><li><code>[schemas]</code>: 请求/响应数据结构</li></ul><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>请为以下 API 生成完整的接口文档：</p><p><strong>API 名称：</strong> [api_name]</p><p><strong>接口列表：</strong> [endpoints]</p><p><strong>数据结构：</strong> [schemas]</p><p><strong>文档要求：</strong></p><ol><li>每个接口包含：路径、方法、请求参数、请求示例、响应示例</li><li>使用 Markdown 表格展示参数</li><li>包含错误码说明</li><li>包含认证方式说明</li><li>符合 RESTful API 规范</li></ol><p><strong>输出格式：</strong></p><ul><li>接口总览（表格）</li><li>每个接口的详细说明</li><li>数据模型说明</li><li>错误码对照表</li></ul><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> [用户管理 API 的接口列表]</p><p><strong>AI输出：</strong> （输出完整的 API 文档）</p>`,19)])]))]))}});export{_ as __pageData,v as default};
