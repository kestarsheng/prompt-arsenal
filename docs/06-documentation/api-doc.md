<script setup>
import { ref } from 'vue'
import source from './api-doc.md?raw'

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
tags: [documentation, api, openapi]
version: 1.0.0
last_updated: 2026-09-03
---

# 生成 API 文档

## 适用场景
写完 API 接口后，需要生成标准的接口文档供前端/测试使用。

## 输入变量
- `[api_name]`: API 名称
- `[endpoints]`: 接口列表及说明
- `[schemas]`: 请求/响应数据结构

## 提示词模板
请为以下 API 生成完整的接口文档：

**API 名称：** [api_name]

**接口列表：** [endpoints]

**数据结构：** [schemas]

**文档要求：**
1. 每个接口包含：路径、方法、请求参数、请求示例、响应示例
2. 使用 Markdown 表格展示参数
3. 包含错误码说明
4. 包含认证方式说明
5. 符合 RESTful API 规范

**输出格式：**
- 接口总览（表格）
- 每个接口的详细说明
- 数据模型说明
- 错误码对照表

## 使用示例
**输入：** [用户管理 API 的接口列表]

**AI输出：**
（输出完整的 API 文档）

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
