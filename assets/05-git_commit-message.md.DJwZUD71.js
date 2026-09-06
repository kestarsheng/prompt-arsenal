import{o as t,c as r,a as o,t as a,u as i,a8 as d,b as c}from"./chunks/framework.LKx99Srq.js";const l=`<script setup>
import { ref } from 'vue'
import source from './commit-message.md?raw'

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
`,p={key:0,class:"source-code-container"},u={key:1},h={key:0,class:"source-code-container"},g={key:1},v=JSON.parse('{"title":"生成规范的Git提交信息（中英混合版）","description":"","frontmatter":{},"headers":[],"relativePath":"05-git/commit-message.md","filePath":"05-git/commit-message.md"}'),m={name:"05-git/commit-message.md"},w=Object.assign(m,{setup(b){const e=c(!1);return(f,n)=>(t(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671457000"},[o("button",{onClick:n[0]||(n[0]=s=>e.value=!e.value),class:"source-toggle-btn"},a(e.value?"📖 返回阅读":"📄 源码"),1),e.value?(t(),r("div",p,[o("pre",null,[o("code",null,a(i(l)),1)])])):(t(),r("div",u,[o("button",{onClick:n[1]||(n[1]=s=>e.value=!e.value),class:"source-toggle-btn"}," [ showSource ? '📖 返回阅读' : '📄 源码' ] "),e.value?(t(),r("div",h,[...n[2]||(n[2]=[o("pre",null,[o("code",null,"[ source ]")],-1)])])):(t(),r("div",g,[...n[3]||(n[3]=[d(`<hr><h2 id="tags-git-automation-version-1-1-0last-updated-2026-09-04" tabindex="-1">tags: [git, automation] version: 1.1.0 last_updated: 2026-09-04 <a class="header-anchor" href="#tags-git-automation-version-1-1-0last-updated-2026-09-04" aria-label="Permalink to &quot;tags: [git, automation]
version: 1.1.0
last_updated: 2026-09-04&quot;">​</a></h2><h1 id="生成规范的git提交信息-中英混合版" tabindex="-1">生成规范的Git提交信息（中英混合版） <a class="header-anchor" href="#生成规范的git提交信息-中英混合版" aria-label="Permalink to &quot;生成规范的Git提交信息（中英混合版）&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>写完代码后，需要写符合 Conventional Commits 规范的提交信息，但描述部分用中文更清晰。</p><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>请根据以下代码改动生成 Git 提交信息，遵循 Conventional Commits 规范： [在这里粘贴 git diff 或简要描述改动]</p><p><strong>输出格式：</strong><code>[type]</code>(<code>[scope]</code>): <code>[中文主题]</code> - <code>[中文改动点1]</code> - <code>[中文改动点2]</code> - <code>[中文改动点3]</code></p><p>type 可选：feat（新功能）, fix（修复）, docs（文档）, style（格式）, refactor（重构）, perf（性能）, test（测试）, chore（杂务） scope 是改动的模块名（如 auth, payment, api） subject 用中文描述，不超过50字 body 用 - 列表说明具体改动，用中文描述</p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> 在 UserService 里新增了 resetPassword 方法，加了单元测试</p><p><strong>AI输出：</strong> feat(auth): 添加密码重置功能</p><ul><li>在 UserService 中实现 resetPassword 方法</li><li>增加邮箱和新密码的输入校验</li><li>新增成功和失败场景的单元测试</li></ul><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>1.1.0 (2026-09-04): 改为中英双语标题格式，正文改用中文列表</li></ul>`,15)])]))]))]))}});export{v as __pageData,w as default};
