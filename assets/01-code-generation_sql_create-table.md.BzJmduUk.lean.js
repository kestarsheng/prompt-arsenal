import{o as r,c as n,j as t,t as o,k as i,a8 as d,p as s}from"./chunks/framework.BcVvFr-R.js";const l=`---
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
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},u={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},b={key:1},m=JSON.parse('{"title":"生成 SQL 建表语句","description":"","frontmatter":{"tags":["sql","database","codegen"],"version":"1.0.0","last_updated":"2026-09-03T00:00:00.000Z"},"headers":[],"relativePath":"01-code-generation/sql/create-table.md","filePath":"01-code-generation/sql/create-table.md"}'),g={name:"01-code-generation/sql/create-table.md"},y=Object.assign(g,{setup(_){const e=s(!1);return(h,a)=>(r(),n("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789552024642"},[t("div",p,[t("button",{onClick:a[0]||(a[0]=f=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},o(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(r(),n("div",c,[t("pre",u,[t("code",x,o(i(l)),1)])])):(r(),n("div",b,[...a[1]||(a[1]=[d("",16)])]))]))}});export{m as __pageData,y as default};
