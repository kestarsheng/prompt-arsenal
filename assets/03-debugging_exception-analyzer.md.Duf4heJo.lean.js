import{o as r,c as t,j as n,t as a,k as i,a8 as d,p as s}from"./chunks/framework.BcVvFr-R.js";const p=`<script setup>
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

---
tags: [debugging, exception, error]
version: 1.0.0
last_updated: 2026-09-03
---

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
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},u={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},h={key:1},_=JSON.parse('{"title":"异常堆栈分析与排查","description":"","frontmatter":{},"headers":[],"relativePath":"03-debugging/exception-analyzer.md","filePath":"03-debugging/exception-analyzer.md"}'),x={name:"03-debugging/exception-analyzer.md"},v=Object.assign(x,{setup(b){const e=s(!1);return(f,o)=>(r(),t("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788675292000"},[n("div",l,[n("button",{onClick:o[0]||(o[0]=m=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},a(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(r(),t("div",c,[n("pre",g,[n("code",u,a(i(p)),1)])])):(r(),t("div",h,[...o[1]||(o[1]=[d("",13)])]))]))}});export{_ as __pageData,v as default};
