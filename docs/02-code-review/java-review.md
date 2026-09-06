<script setup>
import { ref } from 'vue'
import source from './java-review.md?raw'

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
tags: [java, quality, code-review]
version: 1.0.0
last_updated: 2026-09-03
---

# Java代码审查助手

## 适用场景
完成一个Java类或方法的编写后，想让AI帮你检查潜在问题。

## 提示词模板

请对以下Java代码进行深度审查，检查以下维度：

    [粘贴你的代码]

审查清单：

1. 空指针安全：所有对象在使用前是否判空？是否使用了 Optional？
2. 异常处理：捕获的异常是否合理？是否抛出了合适的业务异常？
3. 性能隐患：循环内是否有不必要的 I/O 或数据库调用？是否有大对象频繁创建？
4. 线程安全：是否使用了线程不安全的集合？是否有竞态条件？
5. 设计模式：是否符合单一职责？是否存在重复代码可以抽取？
6. Java特性：是否充分利用了 Java 8+ 的特性（Stream, Optional, 新时间API）？

## 输出格式

- 🔴 **严重问题（必须修）**：行号 + 原因 + 修改建议
- 🟡 **警告（建议修）**：行号 + 原因 + 修改建议
- 🟢 **优秀实践（可保持）**：指出写得好的地方
- 💡 **可选优化**：进一步改进的思路

## 使用示例

**输入**：某个 Service 类的代码

**AI输出**：

🔴 L23：使用 get() 前未检查 Optional.isPresent()，可能抛出 NoSuchElementException
    建议改为 orElseThrow(() -> new UserNotFoundException())

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
