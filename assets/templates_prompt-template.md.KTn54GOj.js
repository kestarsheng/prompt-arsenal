import{o,c as n,j as r,t,k as i,a8 as p,p as d}from"./chunks/framework.BcVvFr-R.js";const s=`---
tags: [标签1, 标签2]
version: 1.0.0
last_updated: YYYY-MM-DD
---

<script setup>
import { ref } from 'vue'
import source from './prompt-template.md?raw'

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
  <div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v1.0.0</strong></span><span>更新于 YYYY-MM-DD</span></div>
  <div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">标签1</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">标签2</span></div>
</div>
<!--/prompt-meta-->

# 提示词标题

## 适用场景
描述在什么情况下使用这个提示词。

## 输入变量
- \`[变量名1]\`: 变量含义说明
- \`[变量名2]\`: 变量含义说明

## 提示词模板
[主体提示词内容，用 [变量] 表示可变部分]

## 使用示例
**输入变量：**
- 变量1: 实际值
- 变量2: 实际值

**AI输出：**
[预期输出示例]

## 效果评价
- ✅ 优点：
- ⚠️ 注意事项：
- 💡 优化建议：

## 迭代记录
- 1.0.0 (YYYY-MM-DD): 初始版本

</div>

<style>
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},b={key:1},w=JSON.parse('{"title":"提示词标题","description":"","frontmatter":{"tags":["标签1","标签2"],"version":"1.0.0","last_updated":"YYYY-MM-DD"},"headers":[],"relativePath":"templates/prompt-template.md","filePath":"templates/prompt-template.md"}'),v={name:"templates/prompt-template.md"},y=Object.assign(v,{setup(u){const a=d(!1);return(g,e)=>(o(),n("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789289005000"},[r("div",l,[r("button",{onClick:e[0]||(e[0]=f=>a.value=!a.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},t(a.value?"📖 返回阅读":"📄 源码"),1)]),a.value?(o(),n("div",c,[r("pre",x,[r("code",h,t(i(s)),1)])])):(o(),n("div",b,[...e[1]||(e[1]=[p('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v1.0.0</strong></span><span>更新于 YYYY-MM-DD</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">标签1</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">标签2</span></div></div><h1 id="提示词标题" tabindex="-1">提示词标题 <a class="header-anchor" href="#提示词标题" aria-label="Permalink to &quot;提示词标题&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>描述在什么情况下使用这个提示词。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><ul><li><code>[变量名1]</code>: 变量含义说明</li><li><code>[变量名2]</code>: 变量含义说明</li></ul><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>[主体提示词内容，用 [变量] 表示可变部分]</p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入变量：</strong></p><ul><li>变量1: 实际值</li><li>变量2: 实际值</li></ul><p><strong>AI输出：</strong> [预期输出示例]</p><h2 id="效果评价" tabindex="-1">效果评价 <a class="header-anchor" href="#效果评价" aria-label="Permalink to &quot;效果评价&quot;">​</a></h2><ul><li>✅ 优点：</li><li>⚠️ 注意事项：</li><li>💡 优化建议：</li></ul><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (YYYY-MM-DD): 初始版本</li></ul>',16)])]))]))}});export{w as __pageData,y as default};
