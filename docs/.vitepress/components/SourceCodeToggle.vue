<!-- docs/.vitepress/components/SourceCodeToggle.vue -->
<template>
  <div class="source-toggle-wrapper">
    <button @click="toggleSource" class="source-toggle-btn">
      {{ showSource ? '📖 返回阅读' : '📄 源码' }}
    </button>

    <!-- 源码显示区域 -->
    <div v-if="showSource" class="source-code-container">
      <pre><code>{{ sourceCode }}</code></pre>
    </div>

    <!-- 渲染内容 -->
    <div v-else>
      <slot name="rendered" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  source: {
    type: String,
    required: true
  }
})

const showSource = ref(false)
const sourceCode = props.source

function toggleSource() {
  showSource.value = !showSource.value
}
</script>

<style scoped>
.source-toggle-wrapper {
  position: relative;
}

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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  margin-bottom: 12px;
  margin-left: 12px;
}

.source-toggle-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.source-toggle-btn:active {
  transform: translateY(0);
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
  font-family: 'Fira Code', 'Consolas', 'Courier New', monospace;
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