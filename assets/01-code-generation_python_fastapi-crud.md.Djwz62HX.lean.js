import{o as r,c as t,j as o,t as a,k as i,p as d}from"./chunks/framework.BcVvFr-R.js";const s=`<script setup>
import { ref } from 'vue'
import source from './fastapi-crud.md?raw'

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



</div>

<style>
html.dark .source-code-container {
  background: #0d0d0d !important;
  border-color: #2d2d2d !important;
}
</style>
`,p={style:{position:"sticky",top:"80px",float:"right","z-index":"100","margin-bottom":"12px","margin-left":"12px"}},c={key:0,style:{background:"#1e1e1e",color:"#d4d4d4",padding:"24px","border-radius":"8px","max-height":"80vh",overflow:"auto",margin:"20px 0",border:"1px solid #333",clear:"both","font-family":"'Fira Code', monospace","font-size":"14px","line-height":"1.7","white-space":"pre-wrap","word-wrap":"break-word"}},l={style:{margin:"0","white-space":"pre-wrap","word-wrap":"break-word"}},f={style:{"font-family":"inherit","font-size":"14px",color:"#d4d4d4"}},h={key:1},b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"01-code-generation/python/fastapi-crud.md","filePath":"01-code-generation/python/fastapi-crud.md"}'),u={name:"01-code-generation/python/fastapi-crud.md"},v=Object.assign(u,{setup(x){const e=d(!1);return(m,n)=>(r(),t("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1788675292000"},[o("div",p,[o("button",{onClick:n[0]||(n[0]=g=>e.value=!e.value),style:{padding:"6px 14px",background:"var(--vp-c-brand)",color:"white",border:"none","border-radius":"4px",cursor:"pointer","font-size":"13px","font-weight":"500","box-shadow":"0 2px 8px rgba(0,0,0,0.15)",transition:"all 0.2s ease"}},a(e.value?"📖 返回阅读":"📄 源码"),1)]),e.value?(r(),t("div",c,[o("pre",l,[o("code",f,a(i(s)),1)])])):(r(),t("div",h))]))}});export{b as __pageData,v as default};
