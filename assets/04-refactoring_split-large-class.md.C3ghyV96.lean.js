import{o as n,c as r,j as a,t as i,k as o,a8 as l,p as s}from"./chunks/framework.BcVvFr-R.js";const d=`---
tags: [refactoring, design-pattern]
version: 2.0.0
last_updated: 2026-09-17
---

# 拆分大类（重构建议）

## 适用场景
一个类职责过多（如超过 500 行）需要拆分，要求纯结构重构：行为不变、对外接口不变。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[代码]\` | 待拆分的完整类代码 | 800 行的 UserService |
| \`[痛点说明]\` | 可选：哪里最痛、为什么想拆 | 改一个功能总碰坏另一个 |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的工程师，擅长在不改变行为的前提下做结构重构。拆分以职责为界，不过度设计；每一步必须保持可编译、可测试。

【任务】
分析以下类的职责，给出拆分方案与核心代码，并给出现有调用方平滑迁移的步骤。

【代码】
[粘贴完整代码]

【痛点说明】
[可省略]

【约束】
必须：
- 先列出职责清单，再按职责划分类边界
- 拆分后的类给出：类名、职责一句话、与原类的依赖关系
- 保持原有公共方法签名不变，调用方无感知
- 核心代码给出关键方法的完整实现，标注原代码来源
- 迁移步骤分阶段，每阶段结束后项目可编译、测试可通过

禁止：
- 顺手修改功能或修复无关 Bug
- 引入新框架或新依赖
- 为拆而拆：类数量克制，两个方法强相关就留在同一类；计划拆出超过 5 个类时先说明理由

【输出】
- 职责分析：当前类的职责清单与耦合点
- 拆分方案：新类结构（类名、职责、依赖关系）
- 核心代码：各新类的关键实现
- 迁移步骤：从旧类到新结构的平滑路径

## 使用示例
**输入：**
一个 800 行的 UserService 类，包含注册、登录、权限、通知四块逻辑

**AI 输出：**
职责清单四项，拆为 UserService（保留门面与公共签名）+ UserAuthService + UserPermissionService + NotificationService，给出各新类核心代码与三阶段迁移步骤。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，去除 emoji，明确纯结构重构边界与"为拆而拆"防线
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},x={key:1},y=JSON.parse('{"title":"拆分大类（重构建议）","description":"","frontmatter":{"tags":["refactoring","design-pattern"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"04-refactoring/split-large-class.md","filePath":"04-refactoring/split-large-class.md"}'),f={name:"04-refactoring/split-large-class.md"},_=Object.assign(f,{setup(u){const e=s(!1);return(v,t)=>(n(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789658632402"},[a("div",p,[a("button",{onClick:t[0]||(t[0]=b=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},i(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(n(),r("div",c,[a("pre",g,[a("code",h,i(o(d)),1)])])):(n(),r("div",x,[...t[1]||(t[1]=[l("",23)])]))]))}});export{y as __pageData,_ as default};
