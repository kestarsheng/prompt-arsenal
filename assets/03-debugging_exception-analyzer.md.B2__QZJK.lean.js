import{o as r,c as o,j as n,t,k as i,a8 as p,p as d}from"./chunks/framework.BcVvFr-R.js";const s=`---
tags: [debugging, exception, error]
version: 1.0.0
last_updated: 2026-09-03
---

# 异常堆栈分析与排查

## 适用场景
遇到异常堆栈时，想快速定位问题根因并找到解决方案。

## 提示词模板
我遇到了以下异常，请帮我分析根因并给出修复方案：
[粘贴完整的异常堆栈]

**相关代码：**
[粘贴相关代码片段]


**分析要求：**
1. 指出异常发生的准确位置（类、方法、行号）
2. 分析异常的根本原因（不是表面现象）
3. 判断是代码 Bug、配置问题还是环境问题
4. 给出至少两种修复方案，并推荐最优方案
5. 如果涉及第三方库，说明版本兼容性注意事项

## 使用示例
**输入：** [NullPointerException 堆栈 + 相关代码]

**AI输出：**
（输出异常分析报告）
`,l={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},b={key:1},m=JSON.parse('{"title":"异常堆栈分析与排查","description":"","frontmatter":{"tags":["debugging","exception","error"],"version":"1.0.0","last_updated":"2026-09-03T00:00:00.000Z"},"headers":[],"relativePath":"03-debugging/exception-analyzer.md","filePath":"03-debugging/exception-analyzer.md"}'),u={name:"03-debugging/exception-analyzer.md"},y=Object.assign(u,{setup(v){const e=d(!1);return(h,a)=>(r(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789658404795"},[n("div",l,[n("button",{onClick:a[0]||(a[0]=f=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},t(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(r(),o("div",c,[n("pre",g,[n("code",x,t(i(s)),1)])])):(r(),o("div",b,[...a[1]||(a[1]=[p("",12)])]))]))}});export{m as __pageData,y as default};
