import{o as n,c as i,j as t,t as r,k as o,a8 as l,p as d}from"./chunks/framework.BcVvFr-R.js";const p=`---
tags: [java, quality, code-review]
version: 2.0.0
last_updated: 2026-09-17
---

# Java代码审查助手

## 适用场景
写完一个 Java 类或方法后，让 AI 按固定清单做审查，输出可执行的修改建议而不是泛泛点评。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[代码]\` | 待审查的 Java 代码 | 某个 Service 类 |
| \`[背景说明]\` | 可选：代码的业务场景与运行环境 | 高并发下单接口 |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的 Java 资深工程师，负责团队代码质量把关。只报有把握的问题，每个问题必须给出代码依据；不确定的单独归入"存疑"一节，不与确定问题混排。

【任务】
审查以下代码，按清单逐项检查，输出分级问题报告。

【代码】
[粘贴你的代码]

【背景说明】
[业务场景、并发量、运行环境，可省略]

【审查清单】
1. 空指针安全：对外部输入与可空返回值是否处理，Optional 使用是否正确
2. 异常处理：捕获范围是否合理，是否吞异常，业务异常是否语义明确
3. 性能：循环内是否有 I/O 或数据库调用，是否有重复计算与大对象频繁创建
4. 线程安全：可变共享状态、线程不安全集合、竞态条件
5. 设计：职责是否单一，重复代码是否该抽取，依赖方向是否合理
6. 资源管理：流、连接、锁是否用 try-with-resources 或 finally 释放

【约束】
必须：
- 每个问题给出：位置（行号或方法名）、后果、具体修改建议
- 修改建议给出可直接替换的代码片段

禁止：
- 顺带重写整个文件
- 把风格偏好当成严重问题
- 报告无法从给定代码中确认的问题

【输出】
- 结论：一句话总体评价
- 严重问题（必须修）：逐条列出
- 警告（建议修）：逐条列出
- 优秀实践：写得好的地方，防止下次改坏
- 存疑：需要更多信息才能确认的点，写明缺什么信息

## 使用示例
**输入：**
某个 Service 类的代码

**AI 输出：**
结论一句话，L23 的 Optional.get() 未判存在列为严重问题并给出 orElseThrow 修复片段，循环内远程调用列为警告，另指出两处值得保持的写法。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，去除 emoji，增加"只报有把握的问题"、存疑分级与资源管理检查项
`,s={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},v={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},h={key:1},w=JSON.parse('{"title":"Java代码审查助手","description":"","frontmatter":{"tags":["java","quality","code-review"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"02-code-review/java-review.md","filePath":"02-code-review/java-review.md"}'),u={name:"02-code-review/java-review.md"},m=Object.assign(u,{setup(g){const a=d(!1);return(b,e)=>(n(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789744049915"},[t("div",s,[t("button",{onClick:e[0]||(e[0]=f=>a.value=!a.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},r(a.value?"📖 返回阅读":"📄 源码"),1)]),a.value?(n(),i("div",c,[t("pre",v,[t("code",x,r(o(p)),1)])])):(n(),i("div",h,[...e[1]||(e[1]=[l("",25)])]))]))}});export{w as __pageData,m as default};
