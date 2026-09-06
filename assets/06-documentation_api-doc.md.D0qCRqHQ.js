import{o as a,c as r,a as e,t,u as s,a8 as d,b as c}from"./chunks/framework.LKx99Srq.js";const l=`<script setup>
import { ref } from 'vue'
import source from './api-doc.md?raw'

const showSource = ref(false)
<\/script>

<button @click="showSource = !showSource" class="source-toggle-btn">
  {{ showSource ? '📖 返回阅读' : '📄 源码' }}
</button>

<div v-if="showSource" class="source-code-container">
  <pre><code>{{ source }}</code></pre>
</div>

<div v-else>

<button @click="showSource = !showSource" class="source-toggle-btn">
  [ showSource ? '📖 返回阅读' : '📄 源码' ]
</button>

<div v-if="showSource" class="source-code-container">
  <pre><code>[ source ]</code></pre>
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
.source-toggle-btn {
  position: sticky;
  top: 80px;
  float: right;
  z-index: 100;
  padding: 6px 14px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: all 0.2s ease;
  margin-bottom: 12px;
  margin-left: 12px;
}
.source-toggle-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.source-code-container {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 24px;
  border-radius: 8px;
  max-height: 80vh;
  overflow: auto;
  margin: 20px 0;
  border: 1px solid #333;
  clear: both;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.source-code-container pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.source-code-container code {
  font-family: inherit;
  font-size: 14px;
  color: #d4d4d4;
}
html.dark .source-code-container {
  background: #0d0d0d;
  border-color: #2d2d2d;
}
</style>

</div>

<style>
.source-toggle-btn {
  position: sticky;
  top: 80px;
  float: right;
  z-index: 100;
  padding: 6px 14px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: all 0.2s ease;
  margin-bottom: 12px;
  margin-left: 12px;
}
.source-toggle-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.source-code-container {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 24px;
  border-radius: 8px;
  max-height: 80vh;
  overflow: auto;
  margin: 20px 0;
  border: 1px solid #333;
  clear: both;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.source-code-container pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.source-code-container code {
  font-family: inherit;
  font-size: 14px;
  color: #d4d4d4;
}
html.dark .source-code-container {
  background: #0d0d0d;
  border-color: #2d2d2d;
}
</style>
`,p={key:0,class:"source-code-container"},u={key:1},h={key:0,class:"source-code-container"},g={key:1},w=JSON.parse('{"title":"生成 API 文档","description":"","frontmatter":{},"headers":[],"relativePath":"06-documentation/api-doc.md","filePath":"06-documentation/api-doc.md"}'),b={name:"06-documentation/api-doc.md"},v=Object.assign(b,{setup(m){const o=c(!1);return(x,n)=>(a(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671457000"},[e("button",{onClick:n[0]||(n[0]=i=>o.value=!o.value),class:"source-toggle-btn"},t(o.value?"📖 返回阅读":"📄 源码"),1),o.value?(a(),r("div",p,[e("pre",null,[e("code",null,t(s(l)),1)])])):(a(),r("div",u,[e("button",{onClick:n[1]||(n[1]=i=>o.value=!o.value),class:"source-toggle-btn"}," [ showSource ? '📖 返回阅读' : '📄 源码' ] "),o.value?(a(),r("div",h,[...n[2]||(n[2]=[e("pre",null,[e("code",null,"[ source ]")],-1)])])):(a(),r("div",g,[...n[3]||(n[3]=[d(`<hr><h2 id="tags-documentation-api-openapi-version-1-0-0last-updated-2026-09-03" tabindex="-1">tags: [documentation, api, openapi] version: 1.0.0 last_updated: 2026-09-03 <a class="header-anchor" href="#tags-documentation-api-openapi-version-1-0-0last-updated-2026-09-03" aria-label="Permalink to &quot;tags: [documentation, api, openapi]
version: 1.0.0
last_updated: 2026-09-03&quot;">​</a></h2><h1 id="生成-api-文档" tabindex="-1">生成 API 文档 <a class="header-anchor" href="#生成-api-文档" aria-label="Permalink to &quot;生成 API 文档&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>写完 API 接口后，需要生成标准的接口文档供前端/测试使用。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><ul><li><code>[api_name]</code>: API 名称</li><li><code>[endpoints]</code>: 接口列表及说明</li><li><code>[schemas]</code>: 请求/响应数据结构</li></ul><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>请为以下 API 生成完整的接口文档：</p><p><strong>API 名称：</strong> [api_name]</p><p><strong>接口列表：</strong> [endpoints]</p><p><strong>数据结构：</strong> [schemas]</p><p><strong>文档要求：</strong></p><ol><li>每个接口包含：路径、方法、请求参数、请求示例、响应示例</li><li>使用 Markdown 表格展示参数</li><li>包含错误码说明</li><li>包含认证方式说明</li><li>符合 RESTful API 规范</li></ol><p><strong>输出格式：</strong></p><ul><li>接口总览（表格）</li><li>每个接口的详细说明</li><li>数据模型说明</li><li>错误码对照表</li></ul><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> [用户管理 API 的接口列表]</p><p><strong>AI输出：</strong> （输出完整的 API 文档）</p>`,19)])]))]))]))}});export{w as __pageData,v as default};
