import{o as n,c as r,j as a,t as i,k as d,a8 as s,p as l}from"./chunks/framework.BcVvFr-R.js";const o=`---
tags: [sql, database, codegen]
version: 2.0.0
last_updated: 2026-09-17
---

# 生成 SQL 建表语句

## 适用场景
根据字段需求生成可直接执行的 MySQL 建表语句，避免类型选择和索引设计的常见错误。

## 输入变量
| 变量 | 含义 | 示例 |
| :--- | :--- | :--- |
| \`[table_name]\` | 表名（蛇形命名） | orders |
| \`[fields]\` | 字段及业务含义说明 | user_id 用户ID、total_price 金额、status 状态 |
| \`[indexes]\` | 需要建索引的字段 | user_id, status |

## 提示词模板

把下面整段复制给 AI，替换 [占位符] 后使用。

你是一名有 10 年以上经验的 MySQL DBA 型后端工程师，长期负责高并发业务的表结构设计。只做与任务直接相关的事；不确定的字段类型先说明假设。

【任务】
为 [table_name] 生成一条可直接执行的 CREATE TABLE 语句。

【表结构需求】
字段：[fields]
主键：id
索引：[indexes]

【约束】
必须：
- InnoDB 引擎，utf8mb4 字符集，显式声明 COLLATE utf8mb4_0900_ai_ci 或注明版本兼容的排序规则
- 主键用 BIGINT UNSIGNED AUTO_INCREMENT
- 每个字段 NOT NULL 并给默认值，确实允许为空的字段才用 NULL 并注明原因
- 表和每个字段都写 COMMENT；状态类字段在注释里枚举取值含义
- 金额用 DECIMAL，禁止 FLOAT/DOUBLE
- 时间字段统一 created_at DATETIME DEFAULT CURRENT_TIMESTAMP、updated_at 加 ON UPDATE CURRENT_TIMESTAMP
- 索引命名 ix_表名_字段名
- 语句末尾带表注释，可直接在 MySQL 8.0 执行

禁止：
- 使用外键约束（一致性由应用层保证；如需要外键先说明再给出）
- 使用 TEXT/BLOB 存结构化数据
- 对枚举取值用 ENUM 类型，统一用 TINYINT 加注释

## 使用示例
**输入：**
table_name: orders
fields: user_id 用户ID、product_id 商品ID、quantity 数量、total_price 订单金额、status 订单状态(1待支付 2已支付 3已取消)
indexes: user_id, status

**AI 输出：**
完整的 orders 建表语句：BIGINT 主键、DECIMAL 金额、TINYINT 状态带枚举注释、ix_orders_user_id 与 ix_orders_status 索引、created_at/updated_at 齐全。

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本
- 2.0.0 (2026-09-17): 按新模板重构，补充 NOT NULL 策略、DECIMAL/TINYINT 类型规则、去外键约束等取舍说明
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},_={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},x={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},u={key:1},I=JSON.parse('{"title":"生成 SQL 建表语句","description":"","frontmatter":{"tags":["sql","database","codegen"],"version":"2.0.0","last_updated":"2026-09-17T00:00:00.000Z"},"headers":[],"relativePath":"01-code-generation/sql/create-table.md","filePath":"01-code-generation/sql/create-table.md"}'),b={name:"01-code-generation/sql/create-table.md"},N=Object.assign(b,{setup(T){const t=l(!1);return(f,e)=>(n(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789744399282"},[a("div",p,[a("button",{onClick:e[0]||(e[0]=g=>t.value=!t.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},i(t.value?"📖 返回阅读":"📄 源码"),1)]),t.value?(n(),r("div",c,[a("pre",_,[a("code",x,i(d(o)),1)])])):(n(),r("div",u,[...e[1]||(e[1]=[s("",20)])]))]))}});export{I as __pageData,N as default};
