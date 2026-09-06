import{o as r,c as t,j as n,t as a,k as i,a8 as d,p as s}from"./chunks/framework.BcVvFr-R.js";const l=`<script setup>
import { ref } from 'vue'
import source from './spring-controller.md?raw'

const showSource = ref(false)
<\/script>

<div style="position: sticky; top: 80px; float: right; z-index: 100; margin-bottom: 12px; margin-left: 12px;">
  <button @click="showSource = !showSource" style="padding: 6px 14px; background: var(--vp-c-brand); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: 500; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: all 0.2s ease;">
    {{ showSource ? '📖 返回阅读' : '📄 源码' }}
  </button>
</div>

<div v-if="showSource" style="background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; max-height: 80vh; overflow: auto; margin: 20px 0; border: 1px solid #333; clear: both; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.7; white-space: pre-wrap; word-wrap: break-word;">
  <pre style="margin: 0; white-space: pre-wrap; word-wrap: break-word;"><code style="font-family: inherit; font-size: 14px; color: #d4d4d4;">{{ source }}</code></pre>
</div>

<div v-else>

---
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

</div>

<style>
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,c={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},p={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},u={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},g={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},h={key:1},x=JSON.parse('{"title":"生成 Spring Boot REST Controller","description":"","frontmatter":{},"headers":[],"relativePath":"01-code-generation/java/spring-controller.md","filePath":"01-code-generation/java/spring-controller.md"}'),m={name:"01-code-generation/java/spring-controller.md"},w=Object.assign(m,{setup(_){const e=s(!1);return(v,o)=>(r(),t("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788675292000"},[n("div",c,[n("button",{onClick:o[0]||(o[0]=b=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},a(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(r(),t("div",p,[n("pre",u,[n("code",g,a(i(l)),1)])])):(r(),t("div",h,[...o[1]||(o[1]=[d("",15)])]))]))}});export{x as __pageData,w as default};
