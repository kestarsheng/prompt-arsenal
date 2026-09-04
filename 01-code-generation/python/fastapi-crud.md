---
tags: [python, fastapi, codegen]
version: 1.0.0
last_updated: 2026-09-03
---

# 生成 FastAPI CRUD 接口

## 适用场景
需要快速生成一个 FastAPI 的 CRUD 接口时使用。

## 输入变量
- `{{model_name}}`: 模型名称（如 User, Product）
- `{{model_name_lower}}`: 模型名小写（如 user, product）
- `{{schema_name}}`: Pydantic Schema 名称（如 UserSchema）

## 提示词模板
请为 {{model_name}} 生成一个 FastAPI CRUD 接口，要求：

1. 使用 APIRouter 管理路由，prefix 为 `/{{model_name_lower}}`
2. 实现以下端点：
   - GET /{id} - 根据 ID 查询
   - GET / - 分页查询（支持 skip 和 limit 参数）
   - POST / - 新增
   - PUT /{id} - 更新
   - DELETE /{id} - 删除
3. 使用 `{{schema_name}}` 作为请求和响应模型
4. 使用 async/await 异步处理
5. 包含基本的异常处理（HTTPException）

请生成完整的 Python 代码，包含所有 import 语句。

## 使用示例
**输入变量：**
- model_name: Product
- schema_name: ProductSchema

**AI输出：**
（预期生成一个完整的 product_router.py 文件）
