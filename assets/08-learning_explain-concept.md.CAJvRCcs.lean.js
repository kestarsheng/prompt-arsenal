import{o,c as r,j as e,t,k as i,a8 as l,p}from"./chunks/framework.BcVvFr-R.js";const s=`---
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
`,d={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},h={key:1},m=JSON.parse('{"title":"解释技术概念","description":"","frontmatter":{"tags":["learning","concept","explanation"],"version":"1.0.0","last_updated":"2026-09-03T00:00:00.000Z"},"headers":[],"relativePath":"08-learning/explain-concept.md","filePath":"08-learning/explain-concept.md"}'),v={name:"08-learning/explain-concept.md"},y=Object.assign(v,{setup(b){const a=p(!1);return(u,n)=>(o(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789658173740"},[e("div",d,[e("button",{onClick:n[0]||(n[0]=f=>a.value=!a.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},t(a.value?"📖 返回阅读":"📄 源码"),1)]),a.value?(o(),r("div",c,[e("pre",g,[e("code",x,t(i(s)),1)])])):(o(),r("div",h,[...n[1]||(n[1]=[l("",17)])]))]))}});export{m as __pageData,y as default};
