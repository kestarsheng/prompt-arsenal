import{o,c as r,j as t,t as n,k as i,a8 as d,p as s}from"./chunks/framework.BcVvFr-R.js";const l=`<script setup>
import { ref } from 'vue'
import source from './create-table.md?raw'

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
tags: [sql, database, codegen]
version: 1.0.0
last_updated: 2026-09-03
---

# 生成 SQL 建表语句

## 适用场景
需要根据实体类或需求描述生成标准建表语句时使用。

## 输入变量
- \`[table_name]\`: 表名
- \`[fields]\`: 字段列表及类型说明
- \`[primary_key]\`: 主键字段名
- \`[indexes]\`: 需要建索引的字段

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
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},u={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},h={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},b={key:1},w=JSON.parse('{"title":"生成 SQL 建表语句","description":"","frontmatter":{},"headers":[],"relativePath":"01-code-generation/sql/create-table.md","filePath":"01-code-generation/sql/create-table.md"}'),_={name:"01-code-generation/sql/create-table.md"},y=Object.assign(_,{setup(g){const e=s(!1);return(m,a)=>(o(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788675292000"},[t("div",p,[t("button",{onClick:a[0]||(a[0]=f=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},n(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(o(),r("div",c,[t("pre",u,[t("code",h,n(i(l)),1)])])):(o(),r("div",b,[...a[1]||(a[1]=[d(`<hr><h2 id="tags-sql-database-codegen-version-1-0-0last-updated-2026-09-03" tabindex="-1">tags: [sql, database, codegen] version: 1.0.0 last_updated: 2026-09-03 <a class="header-anchor" href="#tags-sql-database-codegen-version-1-0-0last-updated-2026-09-03" aria-label="Permalink to &quot;tags: [sql, database, codegen]
version: 1.0.0
last_updated: 2026-09-03&quot;">​</a></h2><h1 id="生成-sql-建表语句" tabindex="-1">生成 SQL 建表语句 <a class="header-anchor" href="#生成-sql-建表语句" aria-label="Permalink to &quot;生成 SQL 建表语句&quot;">​</a></h1><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>需要根据实体类或需求描述生成标准建表语句时使用。</p><h2 id="输入变量" tabindex="-1">输入变量 <a class="header-anchor" href="#输入变量" aria-label="Permalink to &quot;输入变量&quot;">​</a></h2><ul><li><code>[table_name]</code>: 表名</li><li><code>[fields]</code>: 字段列表及类型说明</li><li><code>[primary_key]</code>: 主键字段名</li><li><code>[indexes]</code>: 需要建索引的字段</li></ul><h2 id="提示词模板" tabindex="-1">提示词模板 <a class="header-anchor" href="#提示词模板" aria-label="Permalink to &quot;提示词模板&quot;">​</a></h2><p>请根据以下需求生成 MySQL 建表语句：</p><p><strong>表名：</strong> [table_name] <strong>字段：</strong> [fields] <strong>主键：</strong> [primary_key] <strong>索引：</strong> [indexes]</p><p>要求：</p><ol><li>使用 InnoDB 引擎</li><li>字符集使用 utf8mb4</li><li>包含 created_at 和 updated_at 时间戳字段</li><li>主键使用 BIGINT AUTO_INCREMENT</li><li>为每个字段添加合适的注释</li><li>为外键字段和查询频繁字段添加索引</li></ol><p>请生成完整的 CREATE TABLE 语句。</p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p><strong>输入：</strong></p><ul><li>表名: orders</li><li>字段: id, user_id, product_id, quantity, total_price, status, created_at, updated_at</li><li>主键: id</li><li>索引: user_id, status</li></ul><p><strong>AI输出：</strong> （预期生成完整的 orders 表建表语句）</p>`,17)])]))]))}});export{w as __pageData,y as default};
