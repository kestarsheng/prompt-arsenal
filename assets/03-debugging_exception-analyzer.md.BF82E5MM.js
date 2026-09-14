import{o,c as a,j as e,t,k as i,a8 as p,p as d}from"./chunks/framework.BcVvFr-R.js";const s=`---
tags: [debugging, exception, error]
version: 1.0.0
last_updated: 2026-09-03
---

<script setup>
import { ref } from 'vue'
import source from './exception-analyzer.md?raw'

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
  <div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">debugging</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">exception</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">error</span></div>
</div>
<!--/prompt-meta-->

# 异常堆栈分析与排查

## 适用场景
遇到异常堆栈时，想快速定位问题根因并找到解决方案。

## 提示词模板
我遇到了以下异常，请帮我分析根因并给出修复方案：
[粘贴完整的异常堆栈]

**相关代码：**
[粘贴相关代码片段]


**分析要求：**
1. 指出异常发生的准确位置（类、方法、行号）
2. 分析异常的根本原因（不是表面现象）
3. 判断是代码 Bug、配置问题还是环境问题
4. 给出至少两种修复方案，并推荐最优方案
5. 如果涉及第三方库，说明版本兼容性注意事项

## 使用示例
**输入：** [NullPointerException 堆栈 + 相关代码]

**AI输出：**
（输出异常分析报告）

</div>

<style>
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},b={key:1},y=JSON.parse('{"title":"异常堆栈分析与排查","description":"","frontmatter":{"tags":["debugging","exception","error"],"version":"1.0.0","last_updated":"2026-09-03T00:00:00.000Z"},"headers":[],"relativePath":"03-debugging/exception-analyzer.md","filePath":"03-debugging/exception-analyzer.md"}'),v={name:"03-debugging/exception-analyzer.md"},w=Object.assign(v,{setup(u){const r=d(!1);return(f,n)=>(o(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789401259000"},[e("div",l,[e("button",{onClick:n[0]||(n[0]=h=>r.value=!r.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},t(r.value?"📖 返回阅读":"📄 源码"),1)]),r.value?(o(),a("div",c,[e("pre",x,[e("code",g,t(i(s)),1)])])):(o(),a("div",b,[...n[1]||(n[1]=[p('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v1.0.0</strong></span><span>更新于 2026-09-03</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">debugging</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">exception</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">error</span></div></div><h1 id="异常堆栈分析与排查" tabindex="-1">异常堆栈分析与排查 <a class="header-anchor" href="#异常堆栈分析与排查" aria-label="Permalink to &quot;异常堆栈分析与排查&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>遇到异常堆栈时，想快速定位问题根因并找到解决方案。</p><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>我遇到了以下异常，请帮我分析根因并给出修复方案： [粘贴完整的异常堆栈]</p><p><strong>相关代码：</strong> [粘贴相关代码片段]</p><p><strong>分析要求：</strong></p><ol><li>指出异常发生的准确位置（类、方法、行号）</li><li>分析异常的根本原因（不是表面现象）</li><li>判断是代码 Bug、配置问题还是环境问题</li><li>给出至少两种修复方案，并推荐最优方案</li><li>如果涉及第三方库，说明版本兼容性注意事项</li></ol><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> [NullPointerException 堆栈 + 相关代码]</p><p><strong>AI输出：</strong> （输出异常分析报告）</p>',12)])]))]))}});export{y as __pageData,w as default};
