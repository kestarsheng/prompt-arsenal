import{o as i,c as r,j as e,t as l,k as x,a8 as g,p as s}from"./chunks/framework.BcVvFr-R.js";const u=`---
tags: [debugging, exception, error]
version: 2.0.0
last_updated: 2026-09-17
---

# 异常堆栈分析与排查

## 适用场景
遇到异常堆栈时，快速定位根因并拿到可执行的修复方案，而不是停留在异常字面含义。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[异常堆栈]\` | 完整的异常堆栈信息 | NPE 完整堆栈 |
| \`[相关代码]\` | 堆栈涉及的业务代码片段 | 调用链上的方法 |
| \`[环境信息]\` | 可选：版本、配置、部署方式 | Spring Boot 3.2 / JDK 17 |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的工程师，擅长从堆栈和代码中定位线上问题。结论先行：先给根因判断，再给推理过程；信息不足以定位时，明确列出还需要的材料，不要猜。

【任务】
分析以下异常，定位根本原因，给出修复方案。

【异常堆栈】
[粘贴完整的异常堆栈]

【相关代码】
[粘贴相关代码片段]

【环境信息】
[技术栈版本、配置、部署环境，可省略]

【约束】
必须：
- 指出异常抛出的准确位置（类、方法、行号）
- 区分根因与表面现象，说清因果链
- 判断问题归类：代码缺陷、配置问题、还是环境问题
- 给出至少两种修复方案，说明取舍并推荐一种
- 涉及第三方库时，说明版本兼容性与升级注意点

禁止：
- 堆栈信息不足以定位时强行给结论
- 编造不存在的 API、配置项或类
- 只复述异常信息而不分析

【输出】
- 根因结论：一到两句话
- 定位：抛出点与关键调用链
- 因果链分析：为什么发生
- 修复方案对比：至少两种，含取舍与推荐
- 预防建议：同类问题如何避免再次发生

## 使用示例
**输入：**
NullPointerException 堆栈 + 对应 Service 方法代码

**AI 输出：**
根因结论一句话，定位到 L42 的链式调用，说明中间某步返回 null 的原因，给出判空与 Optional 两种方案并推荐其一，附防止复发的建议。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，结论先行，增加"信息不足列材料而不是猜"与防编造约束
`,b={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px",display:"flex","flex-direction":"column","align-items":"flex-end",gap:"8px"}},h={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},f={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},v={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},y={key:1},P=JSON.parse('{"title":"异常堆栈分析与排查","description":"","frontmatter":{"tags":["debugging","exception","error"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"03-debugging/exception-analyzer.md","filePath":"03-debugging/exception-analyzer.md"}'),m={name:"03-debugging/exception-analyzer.md"},q=Object.assign(m,{setup(_){const t=s(!1),o=s(!1),d=`# 异常堆栈分析与排查

## 适用场景
遇到异常堆栈时，快速定位根因并拿到可执行的修复方案，而不是停留在异常字面含义。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[异常堆栈]\` | 完整的异常堆栈信息 | NPE 完整堆栈 |
| \`[相关代码]\` | 堆栈涉及的业务代码片段 | 调用链上的方法 |
| \`[环境信息]\` | 可选：版本、配置、部署方式 | Spring Boot 3.2 / JDK 17 |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的工程师，擅长从堆栈和代码中定位线上问题。结论先行：先给根因判断，再给推理过程；信息不足以定位时，明确列出还需要的材料，不要猜。

【任务】
分析以下异常，定位根本原因，给出修复方案。

【异常堆栈】
[粘贴完整的异常堆栈]

【相关代码】
[粘贴相关代码片段]

【环境信息】
[技术栈版本、配置、部署环境，可省略]

【约束】
必须：
- 指出异常抛出的准确位置（类、方法、行号）
- 区分根因与表面现象，说清因果链
- 判断问题归类：代码缺陷、配置问题、还是环境问题
- 给出至少两种修复方案，说明取舍并推荐一种
- 涉及第三方库时，说明版本兼容性与升级注意点

禁止：
- 堆栈信息不足以定位时强行给结论
- 编造不存在的 API、配置项或类
- 只复述异常信息而不分析

【输出】
- 根因结论：一到两句话
- 定位：抛出点与关键调用链
- 因果链分析：为什么发生
- 修复方案对比：至少两种，含取舍与推荐
- 预防建议：同类问题如何避免再次发生

## 使用示例
**输入：**
NullPointerException 堆栈 + 对应 Service 方法代码

**AI 输出：**
根因结论一句话，定位到 L42 的链式调用，说明中间某步返回 null 的原因，给出判空与 Optional 两种方案并推荐其一，附防止复发的建议。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，结论先行，增加"信息不足列材料而不是猜"与防编造约束`;let p=null;async function c(){try{await navigator.clipboard.writeText(d)}catch{const n=document.createElement("textarea");n.value=d,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}o.value=!0,clearTimeout(p),p=setTimeout(()=>{o.value=!1},1500)}return(n,a)=>(i(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789745426701"},[e("div",b,[e("button",{onClick:a[0]||(a[0]=k=>t.value=!t.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},l(t.value?"📖 返回阅读":"📄 源码"),1),e("button",{onClick:c,style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},l(o.value?"已复制":"复制提示词"),1)]),t.value?(i(),r("div",h,[e("pre",f,[e("code",v,l(x(u)),1)])])):(i(),r("div",y,[...a[1]||(a[1]=[g("",24)])]))]))}});export{P as __pageData,q as default};
