import{o as n,c as o,j as t,t as a,k as i,a8 as s,p as d}from"./chunks/framework.BcVvFr-R.js";const l=`<script setup>
import { ref } from 'vue'
import source from './split-large-class.md?raw'

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
tags: [refactoring, design-pattern]
version: 1.0.0
last_updated: 2026-09-03
---

# 拆分大类（重构建议）

## 适用场景
一个类超过了 500 行，职责过多，需要拆分。

## 提示词模板
我有以下类，它承担了太多职责，请帮我重构拆分：

[粘贴完整代码]


**重构目标：**
1. 识别并分离不同的职责
2. 提出拆分后的类结构（类名、职责、依赖关系）
3. 给出拆分后的核心代码示例
4. 遵循单一职责原则（SRP）
5. 保持对外接口不变

**输出格式：**
- 📋 **分析**：当前类的职责清单
- 🔧 **拆分方案**：拆分后的类结构图
- 💻 **代码示例**：各新类的核心代码
- 📌 **迁移步骤**：如何从旧类平滑迁移到新结构

## 使用示例
**输入：** [一个 800 行的 UserService 类]

**AI输出：**
（输出分析报告 + 拆分方案 + 代码示例）

</div>

<style>
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},u={key:1},v=JSON.parse('{"title":"拆分大类（重构建议）","description":"","frontmatter":{},"headers":[],"relativePath":"04-refactoring/split-large-class.md","filePath":"04-refactoring/split-large-class.md"}'),f={name:"04-refactoring/split-large-class.md"},_=Object.assign(f,{setup(b){const e=d(!1);return(x,r)=>(n(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671708000"},[t("div",p,[t("button",{onClick:r[0]||(r[0]=m=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},a(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(n(),o("div",c,[t("pre",g,[t("code",h,a(i(l)),1)])])):(n(),o("div",u,[...r[1]||(r[1]=[s(`<hr><h2 id="tags-refactoring-design-pattern-version-1-0-0last-updated-2026-09-03" tabindex="-1">tags: [refactoring, design-pattern] version: 1.0.0 last_updated: 2026-09-03 <a class="header-anchor" href="#tags-refactoring-design-pattern-version-1-0-0last-updated-2026-09-03" aria-label="Permalink to &quot;tags: [refactoring, design-pattern]
version: 1.0.0
last_updated: 2026-09-03&quot;">​</a></h2><h1 id="拆分大类-重构建议" tabindex="-1">拆分大类（重构建议） <a class="header-anchor" href="#拆分大类-重构建议" aria-label="Permalink to &quot;拆分大类（重构建议）&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>一个类超过了 500 行，职责过多，需要拆分。</p><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>我有以下类，它承担了太多职责，请帮我重构拆分：</p><p>[粘贴完整代码]</p><p><strong>重构目标：</strong></p><ol><li>识别并分离不同的职责</li><li>提出拆分后的类结构（类名、职责、依赖关系）</li><li>给出拆分后的核心代码示例</li><li>遵循单一职责原则（SRP）</li><li>保持对外接口不变</li></ol><p><strong>输出格式：</strong></p><ul><li>📋 <strong>分析</strong>：当前类的职责清单</li><li>🔧 <strong>拆分方案</strong>：拆分后的类结构图</li><li>💻 <strong>代码示例</strong>：各新类的核心代码</li><li>📌 <strong>迁移步骤</strong>：如何从旧类平滑迁移到新结构</li></ul><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> [一个 800 行的 UserService 类]</p><p><strong>AI输出：</strong> （输出分析报告 + 拆分方案 + 代码示例）</p>`,15)])]))]))}});export{v as __pageData,_ as default};
