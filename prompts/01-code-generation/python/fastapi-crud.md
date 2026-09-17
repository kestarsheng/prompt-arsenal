---
tags: [python, fastapi, codegen]
version: 2.0.0
last_updated: 2026-09-17
---

# 生成 FastAPI CRUD 接口

## 适用场景
在 FastAPI 项目中新增标准 CRUD 路由，要求异步实现、状态码语义正确、类型注解完整。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| `[model_name]` | 模型名称（帕斯卡命名） | Product |
| `[model_name_lower]` | 路由前缀（小写） | product |
| `[schema_name]` | Pydantic Schema 名 | ProductSchema |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的 Python 后端工程师，长期维护 FastAPI 生产项目。只做与任务直接相关的事；不编造 API 或依赖；遇到不确定的点先说明假设。

【任务】
为 [model_name] 生成一个 FastAPI 路由模块，包含完整可运行的 Python 代码。

【约束】
必须：
- 使用 APIRouter，prefix="/[model_name_lower]"，并设置 tags
- 端点全部 async/await，函数带完整类型注解
- 请求体和响应都用 [schema_name]，响应端点显式声明 response_model
- POST 返回 201，DELETE 成功返回 204，GET /{id} 查不到时抛 HTTPException 404
- 数据库会话用 Depends 注入，依赖函数本身不在本模块实现时，以 get_db 占位并注明假设
- 补全所有 import，代码可直接运行

禁止：
- 在路由函数里写业务逻辑，只做参数接收、调用数据层、组装响应
- 返回裸 dict 而不用 Schema

端点清单：
- GET /{id}：按 ID 查询
- GET /：分页查询，skip/limit 带 default 与 le 约束
- POST /：新增
- PUT /{id}：更新
- DELETE /{id}：删除

## 使用示例
**输入：**
model_name: Product
model_name_lower: product
schema_name: ProductSchema

**AI 输出：**
完整的 product 路由模块：五个 async 端点、response_model 声明、201/204/404 语义正确、get_db 依赖注入。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，补充 response_model、状态码语义、Depends 注入与假设说明等约束
