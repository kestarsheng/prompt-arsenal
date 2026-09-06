import{o as r,c as a,a as o,t,u as s,a8 as d,b as l}from"./chunks/framework.LKx99Srq.js";const c=`<script setup>
import { ref } from 'vue'
import source from './prompt-template.md?raw'

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
tags: [标签1, 标签2]
version: 1.0.0
last_updated: YYYY-MM-DD
---

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
`,p={key:0,class:"source-code-container"},u={key:1},h={key:0,class:"source-code-container"},b={key:1},v=JSON.parse('{"title":"提示词标题","description":"","frontmatter":{},"headers":[],"relativePath":"templates/prompt-template.md","filePath":"templates/prompt-template.md"}'),g={name:"templates/prompt-template.md"},w=Object.assign(g,{setup(m){const e=l(!1);return(x,n)=>(r(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671457000"},[o("button",{onClick:n[0]||(n[0]=i=>e.value=!e.value),class:"source-toggle-btn"},t(e.value?"📖 返回阅读":"📄 源码"),1),e.value?(r(),a("div",p,[o("pre",null,[o("code",null,t(s(c)),1)])])):(r(),a("div",u,[o("button",{onClick:n[1]||(n[1]=i=>e.value=!e.value),class:"source-toggle-btn"}," [ showSource ? '📖 返回阅读' : '📄 源码' ] "),e.value?(r(),a("div",h,[...n[2]||(n[2]=[o("pre",null,[o("code",null,"[ source ]")],-1)])])):(r(),a("div",b,[...n[3]||(n[3]=[d("",17)])]))]))]))}});export{v as __pageData,w as default};
