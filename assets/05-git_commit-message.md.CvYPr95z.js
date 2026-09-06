import{o as a,c as r,j as o,t as n,k as i,a8 as s,p as d}from"./chunks/framework.BcVvFr-R.js";const p=`<script setup>
import { ref } from 'vue'
import source from './commit-message.md?raw'

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
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},u={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},m={key:1},w=JSON.parse('{"title":"生成规范的Git提交信息（中英混合版）","description":"","frontmatter":{},"headers":[],"relativePath":"05-git/commit-message.md","filePath":"05-git/commit-message.md"}'),f={name:"05-git/commit-message.md"},_=Object.assign(f,{setup(g){const e=d(!1);return(b,t)=>(a(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788675645000"},[o("div",l,[o("button",{onClick:t[0]||(t[0]=x=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},n(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(a(),r("div",c,[o("pre",h,[o("code",u,n(i(p)),1)])])):(a(),r("div",m,[...t[1]||(t[1]=[s(`<hr><h2 id="tags-git-automation-version-1-1-0last-updated-2026-09-04" tabindex="-1">tags: [git, automation] version: 1.1.0 last_updated: 2026-09-04 <a class="header-anchor" href="#tags-git-automation-version-1-1-0last-updated-2026-09-04" aria-label="Permalink to &quot;tags: [git, automation]
version: 1.1.0
last_updated: 2026-09-04&quot;">​</a></h2><h1 id="生成规范的git提交信息-中英混合版" tabindex="-1">生成规范的Git提交信息（中英混合版） <a class="header-anchor" href="#生成规范的git提交信息-中英混合版" aria-label="Permalink to &quot;生成规范的Git提交信息（中英混合版）&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>写完代码后，需要写符合 Conventional Commits 规范的提交信息，但描述部分用中文更清晰。</p><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>请根据以下代码改动生成 Git 提交信息，遵循 Conventional Commits 规范： [在这里粘贴 git diff 或简要描述改动]</p><p><strong>输出格式：</strong><code>[type]</code>(<code>[scope]</code>): <code>[中文主题]</code> - <code>[中文改动点1]</code> - <code>[中文改动点2]</code> - <code>[中文改动点3]</code></p><p>type 可选：feat（新功能）, fix（修复）, docs（文档）, style（格式）, refactor（重构）, perf（性能）, test（测试）, chore（杂务） scope 是改动的模块名（如 auth, payment, api） subject 用中文描述，不超过50字 body 用 - 列表说明具体改动，用中文描述</p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> 在 UserService 里新增了 resetPassword 方法，加了单元测试</p><p><strong>AI输出：</strong> feat(auth): 添加密码重置功能</p><ul><li>在 UserService 中实现 resetPassword 方法</li><li>增加邮箱和新密码的输入校验</li><li>新增成功和失败场景的单元测试</li></ul><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>1.1.0 (2026-09-04): 改为中英双语标题格式，正文改用中文列表</li></ul>`,15)])]))]))}});export{w as __pageData,_ as default};
