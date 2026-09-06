<script setup>
import SourceCodeToggle from '../../.vitepress/components/SourceCodeToggle.vue'
import source from './create-table.md?raw'
</script>

<SourceCodeToggle :source="source">
  <template #rendered>

---
tags: [sql, database, codegen]
version: 1.0.0
last_updated: 2026-09-03
---

# 生成 SQL 建表语句

## 适用场景
需要根据实体类或需求描述生成标准建表语句时使用。

## 输入变量
- `[table_name]`: 表名
- `[fields]`: 字段列表及类型说明
- `[primary_key]`: 主键字段名
- `[indexes]`: 需要建索引的字段

## 提示词模板
请根据以下需求生成 MySQL 建表语句：

**表名：** [table_name]
**字段：** [fields]
**主键：** [primary_key]
**索引：** [indexes]

要求：
1. 使用 InnoDB 引擎
2. 字符集使用 utf8mb4
3. 包含 created_at 和 updated_at 时间戳字段
4. 主键使用 BIGINT AUTO_INCREMENT
5. 为每个字段添加合适的注释
6. 为外键字段和查询频繁字段添加索引

请生成完整的 CREATE TABLE 语句。

## 使用示例
**输入：**
- 表名: orders
- 字段: id, user_id, product_id, quantity, total_price, status, created_at, updated_at
- 主键: id
- 索引: user_id, status

**AI输出：**
（预期生成完整的 orders 表建表语句）


  </template>
</SourceCodeToggle>
