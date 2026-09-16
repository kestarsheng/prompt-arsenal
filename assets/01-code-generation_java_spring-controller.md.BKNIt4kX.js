import{o as r,c as a,j as n,t,k as i,a8 as l,p as d}from"./chunks/framework.BcVvFr-R.js";const s=`---
tags: [java, spring, codegen]
version: 1.0.0
last_updated: 2026-09-03
---

# 生成 Spring Boot REST Controller

## 适用场景
需要快速生成一个标准的 Spring Boot REST Controller 时使用。

## 输入变量
- \`[entity_name]\`: 实体名称（如 User, Product）
- \`[entity_name_lowercase]\`: 实体名小写（如 user, product）
- \`[service_name]\`: Service 类名（如 UserService）
- \`[dto_name]\`: 返回的 DTO 类名（如 UserResponseDTO）

## 提示词模板
请为 [entity_name] 生成一个 Spring Boot REST Controller，要求：

1. 使用 \`@RestController\` 和 \`@RequestMapping("/api/[entity_name_lowercase]")\`
2. 注入 \`[service_name]\`
3. 实现以下接口：
   - GET /{id} - 根据 ID 查询
   - GET /list - 分页查询（支持 page 和 size 参数）
   - POST / - 新增
   - PUT /{id} - 更新
   - DELETE /{id} - 删除
4. 使用 \`[dto_name]\` 作为返回对象，不直接返回 Entity
5. 使用 \`@Valid\` 进行参数校验
6. 统一使用 \`ResponseEntity\` 包装返回值

请生成完整的 Java 代码，包含所有 import 语句。

## 使用示例
**输入变量：**
- entity_name: Product
- service_name: ProductService
- dto_name: ProductResponseDTO

**AI输出：**
（预期生成一个完整的 ProductController.java 文件）
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},v={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},u={key:1},f=JSON.parse('{"title":"生成 Spring Boot REST Controller","description":"","frontmatter":{"tags":["java","spring","codegen"],"version":"1.0.0","last_updated":"2026-09-03T00:00:00.000Z"},"headers":[],"relativePath":"01-code-generation/java/spring-controller.md","filePath":"01-code-generation/java/spring-controller.md"}'),_={name:"01-code-generation/java/spring-controller.md"},y=Object.assign(_,{setup(x){const e=d(!1);return(m,o)=>(r(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789552024641"},[n("div",p,[n("button",{onClick:o[0]||(o[0]=b=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},t(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(r(),a("div",c,[n("pre",g,[n("code",v,t(i(s)),1)])])):(r(),a("div",u,[...o[1]||(o[1]=[l('<div style="clear:both;margin:0 0 24px;padding:14px 18px;border:1px solid var(--vp-c-divider);border-left:4px solid var(--vp-c-brand-1);border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;line-height:1.8;color:var(--vp-c-text-2);"><div style="display:flex;flex-wrap:wrap;gap:2px 20px;"><span>版本 <strong style="color:var(--vp-c-text-1);">v1.0.0</strong></span><span>更新于 2026-09-03</span></div><div style="margin-top:8px;"><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">java</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">spring</span><span style="display:inline-block;margin:0 6px 4px 0;padding:2px 10px;border-radius:999px;background:var(--vp-c-brand-soft);color:var(--vp-c-brand-1);font-size:12px;font-weight:500;">codegen</span></div></div><h1 id="生成-spring-boot-rest-controller" tabindex="-1">生成 Spring Boot REST Controller <a class="header-anchor" href="#生成-spring-boot-rest-controller" aria-label="Permalink to &quot;生成 Spring Boot REST Controller&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>需要快速生成一个标准的 Spring Boot REST Controller 时使用。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><ul><li><code>[entity_name]</code>: 实体名称（如 User, Product）</li><li><code>[entity_name_lowercase]</code>: 实体名小写（如 user, product）</li><li><code>[service_name]</code>: Service 类名（如 UserService）</li><li><code>[dto_name]</code>: 返回的 DTO 类名（如 UserResponseDTO）</li></ul><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>请为 [entity_name] 生成一个 Spring Boot REST Controller，要求：</p><ol><li>使用 <code>@RestController</code> 和 <code>@RequestMapping(&quot;/api/[entity_name_lowercase]&quot;)</code></li><li>注入 <code>[service_name]</code></li><li>实现以下接口： <ul><li>GET /{id} - 根据 ID 查询</li><li>GET /list - 分页查询（支持 page 和 size 参数）</li><li>POST / - 新增</li><li>PUT /{id} - 更新</li><li>DELETE /{id} - 删除</li></ul></li><li>使用 <code>[dto_name]</code> 作为返回对象，不直接返回 Entity</li><li>使用 <code>@Valid</code> 进行参数校验</li><li>统一使用 <code>ResponseEntity</code> 包装返回值</li></ol><p>请生成完整的 Java 代码，包含所有 import 语句。</p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入变量：</strong></p><ul><li>entity_name: Product</li><li>service_name: ProductService</li><li>dto_name: ProductResponseDTO</li></ul><p><strong>AI输出：</strong> （预期生成一个完整的 ProductController.java 文件）</p>',14)])]))]))}});export{f as __pageData,y as default};
