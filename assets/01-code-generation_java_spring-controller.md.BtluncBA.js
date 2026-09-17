import{o as a,c as r,j as n,t as o,k as i,a8 as l,p as d}from"./chunks/framework.BcVvFr-R.js";const s=`---
tags: [java, spring, codegen]
version: 2.0.0
last_updated: 2026-09-17
---

# 生成 Spring Boot REST Controller

## 适用场景
在 Spring Boot 项目中新增标准 CRUD 的 REST Controller，要求接口风格统一、语义正确、不返工。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[entity_name]\` | 实体类名（帕斯卡命名） | Product |
| \`[entity_name_lowercase]\` | URL 资源路径（小写） | product |
| \`[service_name]\` | 对应 Service 类名 | ProductService |
| \`[dto_name]\` | 返回的 DTO 类名 | ProductResponseDTO |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的 Java 后端工程师，长期维护大型 Spring Boot 生产项目。只做与任务直接相关的事；不编造 API 或依赖；遇到不确定的点先说明假设。

【任务】
为 [entity_name] 生成 [entity_name]Controller，包含完整可编译的 Java 代码。

【约束】
必须：
- 使用 @RestController 与 @RequestMapping("/api/[entity_name_lowercase]")
- 构造器注入 [service_name]，禁止字段注入
- 返回值统一用 ResponseEntity 包装 [dto_name]
- GET /{id} 查不到时返回 404，DELETE 成功返回 204，POST 成功返回 201
- 写操作接口用 @Valid 校验请求体
- 分页用 page、size 两个参数，带默认值
- 补全所有 import，代码可直接编译

禁止：
- 在 Controller 里写业务逻辑，只做接收参数、调用 Service、组装响应
- 直接返回 Entity 或 Map

接口清单：
- GET /{id}：按 ID 查询
- GET /list：分页查询
- POST /：新增
- PUT /{id}：更新
- DELETE /{id}：删除

## 使用示例
**输入：**
entity_name: Product
entity_name_lowercase: product
service_name: ProductService
dto_name: ProductResponseDTO

**AI 输出：**
完整的 ProductController.java：五个接口、构造器注入、@Valid 校验、404/201/204 语义正确，可直接编译。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，补充构造器注入、REST 状态码语义、禁止返回 Entity 等约束
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},u={key:1},b=JSON.parse('{"title":"生成 Spring Boot REST Controller","description":"","frontmatter":{"tags":["java","spring","codegen"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"01-code-generation/java/spring-controller.md","filePath":"01-code-generation/java/spring-controller.md"}'),v={name:"01-code-generation/java/spring-controller.md"},f=Object.assign(v,{setup(_){const t=d(!1);return(h,e)=>(a(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789658404793"},[n("div",p,[n("button",{onClick:e[0]||(e[0]=y=>t.value=!t.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},o(t.value?"📖 返回阅读":"📄 源码"),1)]),t.value?(a(),r("div",c,[n("pre",g,[n("code",x,o(i(s)),1)])])):(a(),r("div",u,[...e[1]||(e[1]=[l('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v2.0.0</strong></span><span>更新于 2026-09-17</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">java</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">spring</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">codegen</span></div></div><h1 id="生成-spring-boot-rest-controller" tabindex="-1">生成 Spring Boot REST Controller <a class="header-anchor" href="#生成-spring-boot-rest-controller" aria-label="Permalink to &quot;生成 Spring Boot REST Controller&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>在 Spring Boot 项目中新增标准 CRUD 的 REST Controller，要求接口风格统一、语义正确、不返工。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">含义</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[entity_name]</code></td><td style="text-align:left;">实体类名（帕斯卡命名）</td><td style="text-align:left;">Product</td></tr><tr><td style="text-align:left;"><code>[entity_name_lowercase]</code></td><td style="text-align:left;">URL 资源路径（小写）</td><td style="text-align:left;">product</td></tr><tr><td style="text-align:left;"><code>[service_name]</code></td><td style="text-align:left;">对应 Service 类名</td><td style="text-align:left;">ProductService</td></tr><tr><td style="text-align:left;"><code>[dto_name]</code></td><td style="text-align:left;">返回的 DTO 类名</td><td style="text-align:left;">ProductResponseDTO</td></tr></tbody></table><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>把下面整段复制给 AI，替换 [占位符] 后使用。</p><p>你是一名有 10 年以上经验的 Java 后端工程师，长期维护大型 Spring Boot 生产项目。只做与任务直接相关的事；不编造 API 或依赖；遇到不确定的点先说明假设。</p><p>【任务】 为 [entity_name] 生成 [entity_name]Controller，包含完整可编译的 Java 代码。</p><p>【约束】 必须：</p><ul><li>使用 @RestController 与 @RequestMapping(&quot;/api/[entity_name_lowercase]&quot;)</li><li>构造器注入 [service_name]，禁止字段注入</li><li>返回值统一用 ResponseEntity 包装 [dto_name]</li><li>GET /{id} 查不到时返回 404，DELETE 成功返回 204，POST 成功返回 201</li><li>写操作接口用 @Valid 校验请求体</li><li>分页用 page、size 两个参数，带默认值</li><li>补全所有 import，代码可直接编译</li></ul><p>禁止：</p><ul><li>在 Controller 里写业务逻辑，只做接收参数、调用 Service、组装响应</li><li>直接返回 Entity 或 Map</li></ul><p>接口清单：</p><ul><li>GET /{id}：按 ID 查询</li><li>GET /list：分页查询</li><li>POST /：新增</li><li>PUT /{id}：更新</li><li>DELETE /{id}：删除</li></ul><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong> entity_name: Product entity_name_lowercase: product service_name: ProductService dto_name: ProductResponseDTO</p><p><strong>AI 输出：</strong> 完整的 ProductController.java：五个接口、构造器注入、@Valid 校验、404/201/204 语义正确，可直接编译。</p><h2 id="迭代记录" tabindex="-1">迭代记录 <a class="header-anchor" href="#迭代记录" aria-label="Permalink to &quot;迭代记录&quot;">​</a></h2><ul><li>1.0.0 (2026-09-03): 初始版本</li><li>2.0.0 (2026-09-17): 按新模板重构，补充构造器注入、REST 状态码语义、禁止返回 Entity 等约束</li></ul>',21)])]))]))}});export{b as __pageData,f as default};
