<script setup>
import SourceCodeToggle from '../.vitepress/components/SourceCodeToggle.vue'
import source from './split-large-class.md?raw'
</script>

<SourceCodeToggle :source="source">
  <template #rendered>

---
tags: [refactoring, design-pattern]
version: 1.0.0
last_updated: 2026-09-03
---

# 拆分大类（重构建议）

## 适用场景
一个类超过了 500 行，职责过多，需要拆分。

## 提示词模板
我有以下类，它承担了太多职责，请帮我重构拆分：

[粘贴完整代码]


**重构目标：**
1. 识别并分离不同的职责
2. 提出拆分后的类结构（类名、职责、依赖关系）
3. 给出拆分后的核心代码示例
4. 遵循单一职责原则（SRP）
5. 保持对外接口不变

**输出格式：**
- 📋 **分析**：当前类的职责清单
- 🔧 **拆分方案**：拆分后的类结构图
- 💻 **代码示例**：各新类的核心代码
- 📌 **迁移步骤**：如何从旧类平滑迁移到新结构

## 使用示例
**输入：** [一个 800 行的 UserService 类]

**AI输出：**
（输出分析报告 + 拆分方案 + 代码示例）


  </template>
</SourceCodeToggle>
