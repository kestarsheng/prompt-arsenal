import{o as a,c as r,a as o,t,u as l,a8 as s,b as c}from"./chunks/framework.LKx99Srq.js";const d=`<script setup>
import { ref } from 'vue'
import source from './explain-concept.md?raw'

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
tags: [learning, concept, explanation]
version: 1.0.0
last_updated: 2026-09-03
---

# 解释技术概念

## 适用场景
学习新技术或遇到不理解的概念时，想得到一个清晰易懂的解释。

## 输入变量
- \`[concept]\`: 要解释的概念
- \`[level]\`: 理解深度（入门/进阶/深入源码）
- \`[analogy]\`: 是否需要生活类比

## 提示词模板
请解释以下技术概念：

**概念：** [concept]

**深度要求：** [level]

**是否需要生活类比：** [analogy]

**解释要求：**
1. 用通俗易懂的语言
2. 先一句话概括本质
3. 说明解决什么问题
4. 核心原理（配上图示文字描述）
5. 实际应用场景
6. 优缺点对比
7. 与其他相近概念的区别
8. 学习建议（下一步看什么）

## 使用示例
**输入：**
- 概念: CAP 定理
- 深度: 入门
- 类比: 需要

**AI输出：**
（输出 CAP 定理的完整解释，含生活类比）

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
`,p={key:0,class:"source-code-container"},u={key:1},g={key:0,class:"source-code-container"},h={key:1},m=JSON.parse('{"title":"解释技术概念","description":"","frontmatter":{},"headers":[],"relativePath":"08-learning/explain-concept.md","filePath":"08-learning/explain-concept.md"}'),b={name:"08-learning/explain-concept.md"},w=Object.assign(b,{setup(x){const e=c(!1);return(f,n)=>(a(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671457000"},[o("button",{onClick:n[0]||(n[0]=i=>e.value=!e.value),class:"source-toggle-btn"},t(e.value?"📖 返回阅读":"📄 源码"),1),e.value?(a(),r("div",p,[o("pre",null,[o("code",null,t(l(d)),1)])])):(a(),r("div",u,[o("button",{onClick:n[1]||(n[1]=i=>e.value=!e.value),class:"source-toggle-btn"}," [ showSource ? '📖 返回阅读' : '📄 源码' ] "),e.value?(a(),r("div",g,[...n[2]||(n[2]=[o("pre",null,[o("code",null,"[ source ]")],-1)])])):(a(),r("div",h,[...n[3]||(n[3]=[s(`<hr><h2 id="tags-learning-concept-explanation-version-1-0-0last-updated-2026-09-03" tabindex="-1">tags: [learning, concept, explanation] version: 1.0.0 last_updated: 2026-09-03 <a class="header-anchor" href="#tags-learning-concept-explanation-version-1-0-0last-updated-2026-09-03" aria-label="Permalink to &quot;tags: [learning, concept, explanation]
version: 1.0.0
last_updated: 2026-09-03&quot;">​</a></h2><h1 id="解释技术概念" tabindex="-1">解释技术概念 <a class="header-anchor" href="#解释技术概念" aria-label="Permalink to &quot;解释技术概念&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>学习新技术或遇到不理解的概念时，想得到一个清晰易懂的解释。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><ul><li><code>[concept]</code>: 要解释的概念</li><li><code>[level]</code>: 理解深度（入门/进阶/深入源码）</li><li><code>[analogy]</code>: 是否需要生活类比</li></ul><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>请解释以下技术概念：</p><p><strong>概念：</strong> [concept]</p><p><strong>深度要求：</strong> [level]</p><p><strong>是否需要生活类比：</strong> [analogy]</p><p><strong>解释要求：</strong></p><ol><li>用通俗易懂的语言</li><li>先一句话概括本质</li><li>说明解决什么问题</li><li>核心原理（配上图示文字描述）</li><li>实际应用场景</li><li>优缺点对比</li><li>与其他相近概念的区别</li><li>学习建议（下一步看什么）</li></ol><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong></p><ul><li>概念: CAP 定理</li><li>深度: 入门</li><li>类比: 需要</li></ul><p><strong>AI输出：</strong> （输出 CAP 定理的完整解释，含生活类比）</p>`,18)])]))]))]))}});export{m as __pageData,w as default};
