import{o as r,c as n,j as o,t,k as i,a8 as s,p as d}from"./chunks/framework.BcVvFr-R.js";const l=`<script setup>
import { ref } from 'vue'
import source from './java-review.md?raw'

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
tags: [java, quality, code-review]
version: 1.0.0
last_updated: 2026-09-03
---

# Java代码审查助手

## 适用场景
完成一个Java类或方法的编写后，想让AI帮你检查潜在问题。

## 提示词模板

请对以下Java代码进行深度审查，检查以下维度：

    [粘贴你的代码]

审查清单：

1. 空指针安全：所有对象在使用前是否判空？是否使用了 Optional？
2. 异常处理：捕获的异常是否合理？是否抛出了合适的业务异常？
3. 性能隐患：循环内是否有不必要的 I/O 或数据库调用？是否有大对象频繁创建？
4. 线程安全：是否使用了线程不安全的集合？是否有竞态条件？
5. 设计模式：是否符合单一职责？是否存在重复代码可以抽取？
6. Java特性：是否充分利用了 Java 8+ 的特性（Stream, Optional, 新时间API）？

## 输出格式

- 🔴 **严重问题（必须修）**：行号 + 原因 + 修改建议
- 🟡 **警告（建议修）**：行号 + 原因 + 修改建议
- 🟢 **优秀实践（可保持）**：指出写得好的地方
- 💡 **可选优化**：进一步改进的思路

## 使用示例

**输入**：某个 Service 类的代码

**AI输出**：

🔴 L23：使用 get() 前未检查 Optional.isPresent()，可能抛出 NoSuchElementException
    建议改为 orElseThrow(() -> new UserNotFoundException())

</div>

<style>
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},v={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},u={key:1},f=JSON.parse('{"title":"Java代码审查助手","description":"","frontmatter":{},"headers":[],"relativePath":"02-code-review/java-review.md","filePath":"02-code-review/java-review.md"}'),g={name:"02-code-review/java-review.md"},_=Object.assign(g,{setup(w){const e=d(!1);return(x,a)=>(r(),n("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788675292000"},[o("div",p,[o("button",{onClick:a[0]||(a[0]=m=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},t(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(r(),n("div",c,[o("pre",h,[o("code",v,t(i(l)),1)])])):(r(),n("div",u,[...a[1]||(a[1]=[s("",16)])]))]))}});export{f as __pageData,_ as default};
