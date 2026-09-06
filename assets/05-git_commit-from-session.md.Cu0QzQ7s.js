import{o as r,c as t,a as o,t as a,u as i,a8 as d,b as c}from"./chunks/framework.LKx99Srq.js";const l=`<script setup>
import { ref } from 'vue'
import source from './commit-from-session.md?raw'

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
version: 1.0.0
last_updated: 2026-09-04
---

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
`,p={key:0,class:"source-code-container"},u={key:1},h={key:0,class:"source-code-container"},g={key:1},v=JSON.parse('{"title":"根据会话历史生成 Git 提交信息","description":"","frontmatter":{},"headers":[],"relativePath":"05-git/commit-from-session.md","filePath":"05-git/commit-from-session.md"}'),b={name:"05-git/commit-from-session.md"},w=Object.assign(b,{setup(m){const e=c(!1);return(f,n)=>(r(),t("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671457000"},[o("button",{onClick:n[0]||(n[0]=s=>e.value=!e.value),class:"source-toggle-btn"},a(e.value?"📖 返回阅读":"📄 源码"),1),e.value?(r(),t("div",p,[o("pre",null,[o("code",null,a(i(l)),1)])])):(r(),t("div",u,[o("button",{onClick:n[1]||(n[1]=s=>e.value=!e.value),class:"source-toggle-btn"}," [ showSource ? '📖 返回阅读' : '📄 源码' ] "),e.value?(r(),t("div",h,[...n[2]||(n[2]=[o("pre",null,[o("code",null,"[ source ]")],-1)])])):(r(),t("div",g,[...n[3]||(n[3]=[d(`<hr><h2 id="tags-git-automation-version-1-0-0last-updated-2026-09-04" tabindex="-1">tags: [git, automation] version: 1.0.0 last_updated: 2026-09-04 <a class="header-anchor" href="#tags-git-automation-version-1-0-0last-updated-2026-09-04" aria-label="Permalink to &quot;tags: [git, automation]
version: 1.0.0
last_updated: 2026-09-04&quot;">​</a></h2><h1 id="根据会话历史生成-git-提交信息" tabindex="-1">根据会话历史生成 Git 提交信息 <a class="header-anchor" href="#根据会话历史生成-git-提交信息" aria-label="Permalink to &quot;根据会话历史生成 Git 提交信息&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>你通过 AI 辅助完成代码改动后，希望 AI 根据本次会话中的所有修改自动生成提交信息，无需手动描述改动内容。</p><h2 id="前置条件" tabindex="-1">前置条件 <a class="header-anchor" href="#前置条件" aria-label="Permalink to &quot;前置条件&quot;">​</a></h2><ul><li>本次会话中 AI 已帮你生成或修改了代码</li><li>改动尚未提交到 Git</li></ul><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>请回顾本次会话中我们完成的所有代码改动，生成一条符合 Conventional Commits 规范的 Git 提交信息。</p><p><strong>提取规则：</strong></p><ol><li>总结本次会话涉及的核心功能或修复</li><li>列出关键改动点（文件级别或功能级别）</li><li>根据改动性质自动推断 type（feat/fix/refactor/perf/docs/style/test/chore）</li><li>根据改动的模块自动推断 scope</li></ol><p><strong>输出格式：</strong><code>[type]</code>(<code>[scope]</code>): <code>[中文主题]</code> - <code>[中文改动点1]</code> - <code>[中文改动点2]</code> - <code>[中文改动点3]</code></p><p><strong>如果你不确定 type 或 scope，也请给出建议并说明理由。</strong></p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>会话背景：</strong> 用户让 AI 在 UserService 中新增 resetPassword 方法，AI 生成了完整代码，并补充了对应的单元测试，还修改了 UserController 添加了对应的 API 端点。</p><p><strong>AI输出：</strong> feat(auth): 添加密码重置功能</p><ul><li>在 UserService 中实现 resetPassword 方法</li><li>新增 UserController.resetPassword API 端点</li><li>添加对应的单元测试（成功和失败场景）</li></ul><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-04): 初始版本</li></ul>`,19)])]))]))]))}});export{v as __pageData,w as default};
