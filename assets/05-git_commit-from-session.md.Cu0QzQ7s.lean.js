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
`,p={key:0,class:"source-code-container"},u={key:1},h={key:0,class:"source-code-container"},g={key:1},v=JSON.parse('{"title":"根据会话历史生成 Git 提交信息","description":"","frontmatter":{},"headers":[],"relativePath":"05-git/commit-from-session.md","filePath":"05-git/commit-from-session.md"}'),b={name:"05-git/commit-from-session.md"},w=Object.assign(b,{setup(m){const e=c(!1);return(f,n)=>(r(),t("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671457000"},[o("button",{onClick:n[0]||(n[0]=s=>e.value=!e.value),class:"source-toggle-btn"},a(e.value?"📖 返回阅读":"📄 源码"),1),e.value?(r(),t("div",p,[o("pre",null,[o("code",null,a(i(l)),1)])])):(r(),t("div",u,[o("button",{onClick:n[1]||(n[1]=s=>e.value=!e.value),class:"source-toggle-btn"}," [ showSource ? '📖 返回阅读' : '📄 源码' ] "),e.value?(r(),t("div",h,[...n[2]||(n[2]=[o("pre",null,[o("code",null,"[ source ]")],-1)])])):(r(),t("div",g,[...n[3]||(n[3]=[d("",19)])]))]))]))}});export{v as __pageData,w as default};
