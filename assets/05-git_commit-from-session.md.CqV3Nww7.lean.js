import{o as t,c as a,j as r,t as n,k as i,a8 as s,p}from"./chunks/framework.BcVvFr-R.js";const d=`---
tags: [git, automation]
version: 1.0.0
last_updated: 2026-09-04
---

<script setup>
import { ref } from 'vue'
import source from './commit-from-session.md?raw'

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
  <div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v1.0.0</strong></span><span>更新于 2026-09-04</span></div>
  <div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">git</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">automation</span></div>
</div>
<!--/prompt-meta-->

# 根据会话历史生成 Git 提交信息

## 适用场景
你通过 AI 辅助完成代码改动后，希望 AI 根据本次会话中的所有修改自动生成提交信息，无需手动描述改动内容。

## 前置条件
- 本次会话中 AI 已帮你生成或修改了代码
- 改动尚未提交到 Git

## 提示词模板
请回顾本次会话中我们完成的所有代码改动，生成一条符合 Conventional Commits 规范的 Git 提交信息。

**提取规则：**
1. 总结本次会话涉及的核心功能或修复
2. 列出关键改动点（文件级别或功能级别）
3. 根据改动性质自动推断 type（feat/fix/refactor/perf/docs/style/test/chore）
4. 根据改动的模块自动推断 scope

**输出格式：**
    \`[type]\`(\`[scope]\`): \`[中文主题]\`
    - \`[中文改动点1]\`
    - \`[中文改动点2]\`
    - \`[中文改动点3]\`

**如果你不确定 type 或 scope，也请给出建议并说明理由。**

## 使用示例
**会话背景：** 用户让 AI 在 UserService 中新增 resetPassword 方法，AI 生成了完整代码，并补充了对应的单元测试，还修改了 UserController 添加了对应的 API 端点。

**AI输出：**
feat(auth): 添加密码重置功能
- 在 UserService 中实现 resetPassword 方法
- 新增 UserController.resetPassword API 端点
- 添加对应的单元测试（成功和失败场景）

## 迭代记录
- 1.0.0 (2026-09-04): 初始版本

</div>

<style>
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},v={key:1},w=JSON.parse('{"title":"根据会话历史生成 Git 提交信息","description":"","frontmatter":{"tags":["git","automation"],"version":"1.0.0","last_updated":"2026-09-04T00:00:00.000Z"},"headers":[],"relativePath":"05-git/commit-from-session.md","filePath":"05-git/commit-from-session.md"}'),h={name:"05-git/commit-from-session.md"},y=Object.assign(h,{setup(f){const e=p(!1);return(b,o)=>(t(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789378157000"},[r("div",l,[r("button",{onClick:o[0]||(o[0]=u=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},n(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(t(),a("div",c,[r("pre",x,[r("code",g,n(i(d)),1)])])):(t(),a("div",v,[...o[1]||(o[1]=[s("",18)])]))]))}});export{w as __pageData,y as default};
