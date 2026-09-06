import{o as r,c as t,a as o,t as a,u as s,a8 as d,b as l}from"./chunks/framework.LKx99Srq.js";const c=`<script setup>
import { ref } from 'vue'
import source from './spring-controller.md?raw'

const showSource = ref(false)
<\/script>

<button @click="showSource = !showSource" class="source-toggle-btn">
  {{ showSource ? '📖 返回阅读' : '📄 源码' }}
</button>

<div v-if="showSource" class="source-code-container">
  <pre><code>{{ source }}</code></pre>
</div>

<div v-else>

<button @click="showSource = !showSource" class="source-toggle-btn">
  [ showSource ? '📖 返回阅读' : '📄 源码' ]
</button>

<div v-if="showSource" class="source-code-container">
  <pre><code>[ source ]</code></pre>
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
.source-toggle-btn {
  position: sticky;
  top: 80px;
  float: right;
  z-index: 100;
  padding: 6px 14px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: all 0.2s ease;
  margin-bottom: 12px;
  margin-left: 12px;
}
.source-toggle-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.source-code-container {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 24px;
  border-radius: 8px;
  max-height: 80vh;
  overflow: auto;
  margin: 20px 0;
  border: 1px solid #333;
  clear: both;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.source-code-container pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.source-code-container code {
  font-family: inherit;
  font-size: 14px;
  color: #d4d4d4;
}
html.dark .source-code-container {
  background: #0d0d0d;
  border-color: #2d2d2d;
}
</style>

</div>

<style>
.source-toggle-btn {
  position: sticky;
  top: 80px;
  float: right;
  z-index: 100;
  padding: 6px 14px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: all 0.2s ease;
  margin-bottom: 12px;
  margin-left: 12px;
}
.source-toggle-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.source-code-container {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 24px;
  border-radius: 8px;
  max-height: 80vh;
  overflow: auto;
  margin: 20px 0;
  border: 1px solid #333;
  clear: both;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.source-code-container pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.source-code-container code {
  font-family: inherit;
  font-size: 14px;
  color: #d4d4d4;
}
html.dark .source-code-container {
  background: #0d0d0d;
  border-color: #2d2d2d;
}
</style>
`,p={key:0,class:"source-code-container"},u={key:1},g={key:0,class:"source-code-container"},h={key:1},x=JSON.parse('{"title":"生成 Spring Boot REST Controller","description":"","frontmatter":{},"headers":[],"relativePath":"01-code-generation/java/spring-controller.md","filePath":"01-code-generation/java/spring-controller.md"}'),m={name:"01-code-generation/java/spring-controller.md"},f=Object.assign(m,{setup(v){const e=l(!1);return(b,n)=>(r(),t("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788671457000"},[o("button",{onClick:n[0]||(n[0]=i=>e.value=!e.value),class:"source-toggle-btn"},a(e.value?"📖 返回阅读":"📄 源码"),1),e.value?(r(),t("div",p,[o("pre",null,[o("code",null,a(s(c)),1)])])):(r(),t("div",u,[o("button",{onClick:n[1]||(n[1]=i=>e.value=!e.value),class:"source-toggle-btn"}," [ showSource ? '📖 返回阅读' : '📄 源码' ] "),e.value?(r(),t("div",g,[...n[2]||(n[2]=[o("pre",null,[o("code",null,"[ source ]")],-1)])])):(r(),t("div",h,[...n[3]||(n[3]=[d("",15)])]))]))]))}});export{x as __pageData,f as default};
