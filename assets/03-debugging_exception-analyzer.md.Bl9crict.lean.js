import{o as r,c as a,a as o,t,u as s,a8 as d,b as c}from"./chunks/framework.LKx99Srq.js";const l=`<script setup>
import { ref } from 'vue'
import source from './exception-analyzer.md?raw'

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
`,p={key:0,class:"source-code-container"},u={key:1},g={key:0,class:"source-code-container"},b={key:1},m=JSON.parse('{"title":"异常堆栈分析与排查","description":"","frontmatter":{},"headers":[],"relativePath":"03-debugging/exception-analyzer.md","filePath":"03-debugging/exception-analyzer.md"}'),h={name:"03-debugging/exception-analyzer.md"},w=Object.assign(h,{setup(x){const e=c(!1);return(f,n)=>(r(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671457000"},[o("button",{onClick:n[0]||(n[0]=i=>e.value=!e.value),class:"source-toggle-btn"},t(e.value?"📖 返回阅读":"📄 源码"),1),e.value?(r(),a("div",p,[o("pre",null,[o("code",null,t(s(l)),1)])])):(r(),a("div",u,[o("button",{onClick:n[1]||(n[1]=i=>e.value=!e.value),class:"source-toggle-btn"}," [ showSource ? '📖 返回阅读' : '📄 源码' ] "),e.value?(r(),a("div",g,[...n[2]||(n[2]=[o("pre",null,[o("code",null,"[ source ]")],-1)])])):(r(),a("div",b,[...n[3]||(n[3]=[d("",13)])]))]))]))}});export{m as __pageData,w as default};
