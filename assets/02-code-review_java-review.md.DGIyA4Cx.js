import{o as r,c as o,j as n,t,k as i,a8 as p,p as s}from"./chunks/framework.BcVvFr-R.js";const d=`---
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
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},v={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},g={key:1},w=JSON.parse('{"title":"Java代码审查助手","description":"","frontmatter":{"tags":["java","quality","code-review"],"version":"1.0.0","last_updated":"2026-09-03T00:00:00.000Z"},"headers":[],"relativePath":"02-code-review/java-review.md","filePath":"02-code-review/java-review.md"}'),h={name:"02-code-review/java-review.md"},_=Object.assign(h,{setup(u){const a=s(!1);return(b,e)=>(r(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789658404794"},[n("div",l,[n("button",{onClick:e[0]||(e[0]=f=>a.value=!a.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},t(a.value?"📖 返回阅读":"📄 源码"),1)]),a.value?(r(),o("div",c,[n("pre",v,[n("code",x,t(i(d)),1)])])):(r(),o("div",g,[...e[1]||(e[1]=[p(`<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v1.0.0</strong></span><span>更新于 2026-09-03</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">java</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">quality</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">code-review</span></div></div><h1 id="java代码审查助手" tabindex="-1">Java代码审查助手 <a class="header-anchor" href="#java代码审查助手" aria-label="Permalink to &quot;Java代码审查助手&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>完成一个Java类或方法的编写后，想让AI帮你检查潜在问题。</p><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>请对以下Java代码进行深度审查，检查以下维度：</p><pre><code>[粘贴你的代码]
</code></pre><p>审查清单：</p><ol><li>空指针安全：所有对象在使用前是否判空？是否使用了 Optional？</li><li>异常处理：捕获的异常是否合理？是否抛出了合适的业务异常？</li><li>性能隐患：循环内是否有不必要的 I/O 或数据库调用？是否有大对象频繁创建？</li><li>线程安全：是否使用了线程不安全的集合？是否有竞态条件？</li><li>设计模式：是否符合单一职责？是否存在重复代码可以抽取？</li><li>Java特性：是否充分利用了 Java 8+ 的特性（Stream, Optional, 新时间API）？</li></ol><h2 id="输出格式" tabindex="-1">输出格式 <a class="header-anchor" href="#输出格式" aria-label="Permalink to &quot;输出格式&quot;">​</a></h2><ul><li>🔴 <strong>严重问题（必须修）</strong>：行号 + 原因 + 修改建议</li><li>🟡 <strong>警告（建议修）</strong>：行号 + 原因 + 修改建议</li><li>🟢 <strong>优秀实践（可保持）</strong>：指出写得好的地方</li><li>💡 <strong>可选优化</strong>：进一步改进的思路</li></ul><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入</strong>：某个 Service 类的代码</p><p><strong>AI输出</strong>：</p><p>🔴 L23：使用 get() 前未检查 Optional.isPresent()，可能抛出 NoSuchElementException 建议改为 orElseThrow(() -&gt; new UserNotFoundException())</p>`,15)])]))]))}});export{w as __pageData,_ as default};
