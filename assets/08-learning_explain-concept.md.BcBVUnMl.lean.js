import{o as a,c as l,j as n,t as o,k as r,a8 as i,p}from"./chunks/framework.BcVvFr-R.js";const d=`---
tags: [learning, concept, explanation]
version: 2.0.0
last_updated: 2026-09-17
---

# 解释技术概念

## 适用场景
学习新技术或遇到不理解的概念时，得到一个由浅入深、边界清晰的解释，而不是术语循环。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[concept]\` | 要解释的概念 | CAP 定理 |
| \`[level]\` | 理解深度：入门/进阶/深入源码 | 入门 |
| \`[analogy]\` | 是否需要生活类比：需要/不需要 | 需要 |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的工程师，擅长把复杂概念讲清楚。解释从本质出发，不用听不懂的术语解释术语。

【任务】
解释以下技术概念。

【概念】
[concept]

【深度要求】
[level]

【是否需要生活类比】
[analogy]

【约束】
必须：
- 第一句先给本质概括，一句话说清"它到底是什么"
- 说明它解决什么问题、没有它会怎样
- 需要类比时给出一个准确的类比，并明确指出"这个类比在哪里失效"——类比不等于原理
- 与最容易被混淆的相近概念对比区别
- 给出优缺点与适用边界
- 给出下一步学习路径（看什么文档、写什么练习）

禁止：
- 用未解释的新术语解释当前概念
- 编造不存在的特性、版本或历史
- 超出指定深度展开，入门级不贴源码

【输出】
按以下顺序组织：一句话本质、解决什么问题、核心原理（[level] 对应的深度）、类比与失效点（如需要）、相近概念对比、优缺点与适用边界、学习路径。

## 使用示例
**输入：**
concept: CAP 定理
level: 入门
analogy: 需要

**AI 输出：**
一句话本质（分布式系统三属性不可兼得）、没有 CAP 约束会怎样、P 在网络分区下的取舍原理、用"连锁餐厅与分店账本"类比并指出失效点、CAP 与 ACID 的区别、入门学习路径。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，增加"类比须指出失效点""禁止术语循环""禁止编造"约束，输出顺序固定
`,s={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},h={key:1},_=JSON.parse('{"title":"解释技术概念","description":"","frontmatter":{"tags":["learning","concept","explanation"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"08-learning/explain-concept.md","filePath":"08-learning/explain-concept.md"}'),u={name:"08-learning/explain-concept.md"},m=Object.assign(u,{setup(b){const t=p(!1);return(f,e)=>(a(),l("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789709268474"},[n("div",s,[n("button",{onClick:e[0]||(e[0]=v=>t.value=!t.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},o(t.value?"📖 返回阅读":"📄 源码"),1)]),t.value?(a(),l("div",c,[n("pre",x,[n("code",g,o(r(d)),1)])])):(a(),l("div",h,[...e[1]||(e[1]=[i("",23)])]))]))}});export{_ as __pageData,m as default};
