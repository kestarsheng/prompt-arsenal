import{o as n,c as t,j as e,t as o,k as i,a8 as s,p}from"./chunks/framework.BcVvFr-R.js";const d=`---
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
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},h={key:1},m=JSON.parse('{"title":"拆分大类（重构建议）","description":"","frontmatter":{"tags":["refactoring","design-pattern"],"version":"1.0.0","last_updated":"2026-09-03T00:00:00.000Z"},"headers":[],"relativePath":"04-refactoring/split-large-class.md","filePath":"04-refactoring/split-large-class.md"}'),v={name:"04-refactoring/split-large-class.md"},y=Object.assign(v,{setup(f){const a=p(!1);return(b,r)=>(n(),t("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789658336794"},[e("div",l,[e("button",{onClick:r[0]||(r[0]=u=>a.value=!a.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},o(a.value?"📖 返回阅读":"📄 源码"),1)]),a.value?(n(),t("div",c,[e("pre",g,[e("code",x,o(i(d)),1)])])):(n(),t("div",h,[...r[1]||(r[1]=[s('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v1.0.0</strong></span><span>更新于 2026-09-03</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">refactoring</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">design-pattern</span></div></div><h1 id="拆分大类-重构建议" tabindex="-1">拆分大类（重构建议） <a class="header-anchor" href="#拆分大类-重构建议" aria-label="Permalink to &quot;拆分大类（重构建议）&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>一个类超过了 500 行，职责过多，需要拆分。</p><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>我有以下类，它承担了太多职责，请帮我重构拆分：</p><p>[粘贴完整代码]</p><p><strong>重构目标：</strong></p><ol><li>识别并分离不同的职责</li><li>提出拆分后的类结构（类名、职责、依赖关系）</li><li>给出拆分后的核心代码示例</li><li>遵循单一职责原则（SRP）</li><li>保持对外接口不变</li></ol><p><strong>输出格式：</strong></p><ul><li>📋 <strong>分析</strong>：当前类的职责清单</li><li>🔧 <strong>拆分方案</strong>：拆分后的类结构图</li><li>💻 <strong>代码示例</strong>：各新类的核心代码</li><li>📌 <strong>迁移步骤</strong>：如何从旧类平滑迁移到新结构</li></ul><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> [一个 800 行的 UserService 类]</p><p><strong>AI输出：</strong> （输出分析报告 + 拆分方案 + 代码示例）</p>',14)])]))]))}});export{m as __pageData,y as default};
