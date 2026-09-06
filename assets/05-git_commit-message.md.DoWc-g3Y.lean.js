import{o as a,c as r,j as o,t as n,k as i,a8 as s,p as d}from"./chunks/framework.BcVvFr-R.js";const p=`<script setup>
import { ref } from 'vue'
import source from './commit-message.md?raw'

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
tags: [git, automation]
version: 1.1.0
last_updated: 2026-09-04
---

# 生成规范的Git提交信息（中英混合版）

## 适用场景
写完代码后，需要写符合 Conventional Commits 规范的提交信息，但描述部分用中文更清晰。

## 提示词模板
请根据以下代码改动生成 Git 提交信息，遵循 Conventional Commits 规范：
[在这里粘贴 git diff 或简要描述改动]

**输出格式：**
    \`[type]\`(\`[scope]\`): \`[中文主题]\`
    - \`[中文改动点1]\`
    - \`[中文改动点2]\`
    - \`[中文改动点3]\`

type 可选：feat（新功能）, fix（修复）, docs（文档）, style（格式）, refactor（重构）, perf（性能）, test（测试）, chore（杂务）
scope 是改动的模块名（如 auth, payment, api）
subject 用中文描述，不超过50字
body 用 - 列表说明具体改动，用中文描述

## 使用示例
**输入：** 在 UserService 里新增了 resetPassword 方法，加了单元测试

**AI输出：**
feat(auth): 添加密码重置功能
- 在 UserService 中实现 resetPassword 方法
- 增加邮箱和新密码的输入校验
- 新增成功和失败场景的单元测试

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 1.1.0 (2026-09-04): 改为中英双语标题格式，正文改用中文列表

</div>

<style>
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},u={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},m={key:1},w=JSON.parse('{"title":"生成规范的Git提交信息（中英混合版）","description":"","frontmatter":{},"headers":[],"relativePath":"05-git/commit-message.md","filePath":"05-git/commit-message.md"}'),f={name:"05-git/commit-message.md"},_=Object.assign(f,{setup(g){const e=d(!1);return(b,t)=>(a(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671708000"},[o("div",l,[o("button",{onClick:t[0]||(t[0]=x=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},n(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(a(),r("div",c,[o("pre",h,[o("code",u,n(i(p)),1)])])):(a(),r("div",m,[...t[1]||(t[1]=[s("",15)])]))]))}});export{w as __pageData,_ as default};
