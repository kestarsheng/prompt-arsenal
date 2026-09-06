import{o as r,c as t,a as o,t as a,u as i,a8 as d,b as c}from"./chunks/framework.LKx99Srq.js";const l=`<script setup>
import { ref } from 'vue'
import source from './system-design.md?raw'

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
tags: [architecture, design, system]
version: 1.0.0
last_updated: 2026-09-03
---

# 系统设计思路与方案

## 适用场景
需要设计一个新系统或新模块时，需要梳理设计思路。

## 输入变量
- \`[project_name]\`: 项目名称
- \`[requirements]\`: 核心需求列表
- \`[constraints]\`: 约束条件（预算、时间、技术栈限制）

## 提示词模板
请为 [project_name] 设计一个系统方案：

**核心需求：** [requirements]

**约束条件：** [constraints]

**设计要求：**
1. 给出整体架构图（文字描述或 Mermaid 格式）
2. 技术选型与理由
3. 数据库设计（核心表结构）
4. 核心模块划分与职责
5. 关键流程（至少 2 个核心业务流程的时序图）
6. 性能与扩展性考虑
7. 安全方案
8. 部署方案

**输出格式：**
- 📐 整体架构
- 🛠️ 技术栈选型
- 🗄️ 数据模型
- 🔄 核心流程
- ⚡ 性能优化
- 🔒 安全设计
- 🚀 部署方案

## 使用示例
**输入：** [一个电商订单系统的需求]

**AI输出：**
（输出完整的系统设计方案）

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
`,p={key:0,class:"source-code-container"},u={key:1},h={key:0,class:"source-code-container"},g={key:1},v=JSON.parse('{"title":"系统设计思路与方案","description":"","frontmatter":{},"headers":[],"relativePath":"07-architecture/system-design.md","filePath":"07-architecture/system-design.md"}'),b={name:"07-architecture/system-design.md"},w=Object.assign(b,{setup(m){const e=c(!1);return(x,n)=>(r(),t("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671457000"},[o("button",{onClick:n[0]||(n[0]=s=>e.value=!e.value),class:"source-toggle-btn"},a(e.value?"📖 返回阅读":"📄 源码"),1),e.value?(r(),t("div",p,[o("pre",null,[o("code",null,a(i(l)),1)])])):(r(),t("div",u,[o("button",{onClick:n[1]||(n[1]=s=>e.value=!e.value),class:"source-toggle-btn"}," [ showSource ? '📖 返回阅读' : '📄 源码' ] "),e.value?(r(),t("div",h,[...n[2]||(n[2]=[o("pre",null,[o("code",null,"[ source ]")],-1)])])):(r(),t("div",g,[...n[3]||(n[3]=[d("",18)])]))]))]))}});export{v as __pageData,w as default};
