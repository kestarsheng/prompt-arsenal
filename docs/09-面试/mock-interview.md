<script setup>
import { ref } from 'vue'
import source from './mock-interview.md?raw'

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
tags: [interview, career, mock, auto-search]
version: 2.0.0
last_updated: 2026-09-04
---

# 模拟技术面试（AI 自动搜索面经版）

## 适用场景
准备面试时，希望 AI 根据你的简历和目标公司 JD，**自动去牛客、小红书等平台搜索真实面经**，然后针对性地出题模拟面试。

## 输入说明
请提供以下材料：

**1. 你的最新简历**（重点突出项目经验和技术栈）

**2. 目标公司 + 岗位信息**（如“字节跳动 后端开发工程师（校招）”或直接贴 JD 链接/文字/图片）

## AI 执行流程

### 第一步：解析简历与 JD
- 从简历中提取：技术栈、项目经验、工作年限、核心亮点
- 从 JD 中提取：岗位要求、技术关键词、面试轮次说明

### 第二步：自动搜索面经
使用联网搜索能力，按以下关键词组合进行搜索：
- `{公司名} {岗位名} 面经 2026`
- `{公司名} {技术栈} 面试经验`
- `{公司名} {岗位名} 技术面 真题`

**搜索来源优先级：**
1. 牛客网（面经最全、时效性强）
2. 小红书（近期面经细节丰富）
3. 博客/技术社区（深度解析）

**搜索策略：**
- 优先获取近 30 天内的面经，保障时效性
- 至少抓取 3-5 篇不同来源的面经进行交叉对比
- 标注出现频次 ≥ 3 次的高频考点

### 第三步：生成面经分析报告
基于搜索结果，输出一份结构化报告：
📊 面经分析报告
**目标公司：** {公司名}
**岗位：** {岗位名}

**高频考点 Top5：**
1. {考点1}（出现次数：X/5）
2. {考点2}（出现次数：X/5）

**面试风格判断：**
- 技术深挖程度：深/中/浅
- 是否有系统设计题：是/否
- 面试官风格：强势追问/温和引导

**典型追问链：**
{从面经中提取的追问路径示例}

### 第四步：模拟面试
基于面经分析报告 + 你的简历 + JD，进行针对性模拟面试：

1. 技术问答（8-10题）：优先覆盖高频考点，结合简历项目深挖
2. 系统设计题（如面经显示有该环节）
3. 追问模拟：模拟面试官的层层追问（参考面经中的追问逻辑）
4. 反问环节建议

### 第五步：面试反馈
- 结构性评价
- 薄弱环节 Top3
- 针对性练习建议

## 使用示例

**用户输入：**
- 简历：3年 Java 经验，Spring Cloud 项目，负责订单模块
- 目标公司：字节跳动 后端开发工程师

**AI 执行：**
1. 提取关键词 → 搜索“字节跳动 后端 面经 2026”
2. 抓取 5 篇面经，识别高频考点
3. 生成面经分析报告
4. 结合简历中的订单模块，针对性出题
5. 逐题点评、追问、打分

## 迭代记录
- 1.0.0 (2026-09-03): 初始版本（通用模拟面试）
- 2.0.0 (2026-09-04): AI 自动联网搜索面经，无需用户手动粘贴

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
