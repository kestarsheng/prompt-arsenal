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
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},x={key:1},y=JSON.parse('{"title":"拆分大类（重构建议）","description":"","frontmatter":{"tags":["refactoring","design-pattern"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"04-refactoring/split-large-class.md","filePath":"04-refactoring/split-large-class.md"}'),f={name:"04-refactoring/split-large-class.md"},_=Object.assign(f,{setup(u){const e=s(!1);return(v,t)=>(n(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789658632402"},[a("div",p,[a("button",{onClick:t[0]||(t[0]=b=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},i(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(n(),r("div",c,[a("pre",g,[a("code",h,i(o(d)),1)])])):(n(),r("div",x,[...t[1]||(t[1]=[l('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v2.0.0</strong></span><span>更新于 2026-09-17</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">refactoring</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">design-pattern</span></div></div><h1 id="拆分大类-重构建议" tabindex="-1">拆分大类（重构建议） <a class="header-anchor" href="#拆分大类-重构建议" aria-label="Permalink to &quot;拆分大类（重构建议）&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>一个类职责过多（如超过 500 行）需要拆分，要求纯结构重构：行为不变、对外接口不变。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">含义</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[代码]</code></td><td style="text-align:left;">待拆分的完整类代码</td><td style="text-align:left;">800 行的 UserService</td></tr><tr><td style="text-align:left;"><code>[痛点说明]</code></td><td style="text-align:left;">可选：哪里最痛、为什么想拆</td><td style="text-align:left;">改一个功能总碰坏另一个</td></tr></tbody></table><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>把下面整段复制给 AI，替换 [占位符] 后使用。</p><p>你是一名有 10 年以上经验的工程师，擅长在不改变行为的前提下做结构重构。拆分以职责为界，不过度设计；每一步必须保持可编译、可测试。</p><p>【任务】 分析以下类的职责，给出拆分方案与核心代码，并给出现有调用方平滑迁移的步骤。</p><p>【代码】 [粘贴完整代码]</p><p>【痛点说明】 [可省略]</p><p>【约束】 必须：</p><ul><li>先列出职责清单，再按职责划分类边界</li><li>拆分后的类给出：类名、职责一句话、与原类的依赖关系</li><li>保持原有公共方法签名不变，调用方无感知</li><li>核心代码给出关键方法的完整实现，标注原代码来源</li><li>迁移步骤分阶段，每阶段结束后项目可编译、测试可通过</li></ul><p>禁止：</p><ul><li>顺手修改功能或修复无关 Bug</li><li>引入新框架或新依赖</li><li>为拆而拆：类数量克制，两个方法强相关就留在同一类；计划拆出超过 5 个类时先说明理由</li></ul><p>【输出】</p><ul><li>职责分析：当前类的职责清单与耦合点</li><li>拆分方案：新类结构（类名、职责、依赖关系）</li><li>核心代码：各新类的关键实现</li><li>迁移步骤：从旧类到新结构的平滑路径</li></ul><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> 一个 800 行的 UserService 类，包含注册、登录、权限、通知四块逻辑</p><p><strong>AI 输出：</strong> 职责清单四项，拆为 UserService（保留门面与公共签名）+ UserAuthService + UserPermissionService + NotificationService，给出各新类核心代码与三阶段迁移步骤。</p><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>2.0.0 (2026-09-17): 按新模板重构，去除 emoji，明确纯结构重构边界与&quot;为拆而拆&quot;防线</li></ul>',23)])]))]))}});export{y as __pageData,_ as default};
