<script setup>
import SourceCodeToggle from '../../.vitepress/components/SourceCodeToggle.vue'
import source from './spring-controller.md?raw'
</script>

<SourceCodeToggle :source="source">
  <template #rendered>

---
tags: [java, spring, codegen]
version: 1.0.0
last_updated: 2026-09-03
---

# 生成 Spring Boot REST Controller

## 适用场景
需要快速生成一个标准的 Spring Boot REST Controller 时使用。

## 输入变量
- `[entity_name]`: 实体名称（如 User, Product）
- `[entity_name_lowercase]`: 实体名小写（如 user, product）
- `[service_name]`: Service 类名（如 UserService）
- `[dto_name]`: 返回的 DTO 类名（如 UserResponseDTO）

## 提示词模板
请为 [entity_name] 生成一个 Spring Boot REST Controller，要求：

1. 使用 `@RestController` 和 `@RequestMapping("/api/[entity_name_lowercase]")`
2. 注入 `[service_name]`
3. 实现以下接口：
   - GET /{id} - 根据 ID 查询
   - GET /list - 分页查询（支持 page 和 size 参数）
   - POST / - 新增
   - PUT /{id} - 更新
   - DELETE /{id} - 删除
4. 使用 `[dto_name]` 作为返回对象，不直接返回 Entity
5. 使用 `@Valid` 进行参数校验
6. 统一使用 `ResponseEntity` 包装返回值

请生成完整的 Java 代码，包含所有 import 语句。

## 使用示例
**输入变量：**
- entity_name: Product
- service_name: ProductService
- dto_name: ProductResponseDTO

**AI输出：**
（预期生成一个完整的 ProductController.java 文件）


  </template>
</SourceCodeToggle>
