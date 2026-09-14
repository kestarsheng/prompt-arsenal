import{o as a,c as o,j as n,t,k as i,a8 as s,p}from"./chunks/framework.BcVvFr-R.js";const d=`---
tags: [architecture, design, system]
version: 1.0.0
last_updated: 2026-09-03
---

<script setup>
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

<!--prompt-meta-->
<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);">
  <div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v1.0.0</strong></span><span>更新于 2026-09-03</span></div>
  <div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">architecture</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">design</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">system</span></div>
</div>
<!--/prompt-meta-->

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
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},v={key:1},y=JSON.parse('{"title":"系统设计思路与方案","description":"","frontmatter":{"tags":["architecture","design","system"],"version":"1.0.0","last_updated":"2026-09-03T00:00:00.000Z"},"headers":[],"relativePath":"07-architecture/system-design.md","filePath":"07-architecture/system-design.md"}'),b={name:"07-architecture/system-design.md"},w=Object.assign(b,{setup(h){const r=p(!1);return(u,e)=>(a(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789378157000"},[n("div",l,[n("button",{onClick:e[0]||(e[0]=m=>r.value=!r.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},t(r.value?"📖 返回阅读":"📄 源码"),1)]),r.value?(a(),o("div",c,[n("pre",x,[n("code",g,t(i(d)),1)])])):(a(),o("div",v,[...e[1]||(e[1]=[s("",17)])]))]))}});export{y as __pageData,w as default};
