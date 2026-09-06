import{o as r,c as o,j as n,t as a,k as i,a8 as s,p as d}from"./chunks/framework.BcVvFr-R.js";const l=`<script setup>
import { ref } from 'vue'
import source from './system-design.md?raw'

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
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},u={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},m={key:1},w=JSON.parse('{"title":"系统设计思路与方案","description":"","frontmatter":{},"headers":[],"relativePath":"07-architecture/system-design.md","filePath":"07-architecture/system-design.md"}'),g={name:"07-architecture/system-design.md"},v=Object.assign(g,{setup(b){const e=d(!1);return(f,t)=>(r(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788675645000"},[n("div",p,[n("button",{onClick:t[0]||(t[0]=x=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},a(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(r(),o("div",c,[n("pre",h,[n("code",u,a(i(l)),1)])])):(r(),o("div",m,[...t[1]||(t[1]=[s("",18)])]))]))}});export{w as __pageData,v as default};
