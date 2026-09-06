<script setup>
import SourceCodeToggle from '../.vitepress/components/SourceCodeToggle.vue'
import source from './prompt-template.md?raw'
</script>

<SourceCodeToggle :source="source">
  <template #rendered>

---
tags: [标签1, 标签2]
version: 1.0.0
last_updated: YYYY-MM-DD
---

# 提示词标题

## 适用场景
描述在什么情况下使用这个提示词。

## 输入变量
- `[变量名1]`: 变量含义说明
- `[变量名2]`: 变量含义说明

## 提示词模板
[主体提示词内容，用 [变量] 表示可变部分]

## 使用示例
**输入变量：**
- 变量1: 实际值
- 变量2: 实际值

**AI输出：**
[预期输出示例]

## 效果评价
- ✅ 优点：
- ⚠️ 注意事项：
- 💡 优化建议：

## 迭代记录
- 1.0.0 (YYYY-MM-DD): 初始版本


  </template>
</SourceCodeToggle>
