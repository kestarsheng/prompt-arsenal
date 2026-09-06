<script setup>
import { ref } from 'vue'
import source from './create-table.md?raw'

const showSource = ref(false)
</script>

<button @click="showSource = !showSource" class="source-toggle-btn">
  {{ showSource ? '📖 返回阅读' : '📄 源码' }}
</button>

<div v-if="showSource" class="source-code-container">
  <pre><code>{{ source }}</code></pre>
</div>

<div v-else>

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
