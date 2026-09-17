import{_ as a,o as i,c as n,a8 as l}from"./chunks/framework.BcVvFr-R.js";const c=JSON.parse('{"title":"提示词标题","description":"","frontmatter":{"tags":[],"version":"1.0.0","last_updated":"YYYY-MM-DD"},"headers":[],"relativePath":"templates/prompt-template.md","filePath":"templates/prompt-template.md"}'),p={name:"templates/prompt-template.md"};function t(e,s,h,r,k,o){return i(),n("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1789657342329"},[...s[0]||(s[0]=[l(`<h1 id="提示词标题" tabindex="-1">提示词标题 <a class="header-anchor" href="#提示词标题" aria-label="Permalink to &quot;提示词标题&quot;">​</a></h1><h2 id="角色定义" tabindex="-1">角色定义 <a class="header-anchor" href="#角色定义" aria-label="Permalink to &quot;角色定义&quot;">​</a></h2><p>你是一位拥有 10 年以上实战经验的 [技术方向] 工程师。 你的风格：结论先行、直击要害、代码即文档。 你不做无意义的客套，不写多余的解释，不给出你自己都无法在生产环境里运行的代码。</p><h2 id="上下文背景" tabindex="-1">上下文背景 <a class="header-anchor" href="#上下文背景" aria-label="Permalink to &quot;上下文背景&quot;">​</a></h2><p>[交代业务场景、现有约束、项目现状。 示例：公司内部使用 FastAPI + Pydantic v2 构建的支付对账系统， 当前需要新增退款流水查询接口，涉及 Stripe 退款逻辑。 技术栈约束：Python 3.11+，项目使用 Poetry 管理依赖，代码遵循 PEP 8。]</p><h2 id="核心任务" tabindex="-1">核心任务 <a class="header-anchor" href="#核心任务" aria-label="Permalink to &quot;核心任务&quot;">​</a></h2><p>[用一句话说清楚要做什么。不可模糊、不可宽泛。 示例：为退款模块新增 /refunds/{id} 接口，返回退款状态、退款金额、退款时间、关联原支付单号。]</p><h2 id="约束条件" tabindex="-1">约束条件 <a class="header-anchor" href="#约束条件" aria-label="Permalink to &quot;约束条件&quot;">​</a></h2><p><strong>必须做到：</strong></p><ul><li>[约束1]</li><li>[约束2]</li></ul><p><strong>明确禁止：</strong></p><ul><li>[禁止项1]</li><li>[禁止项2]</li></ul><p>[示例：</p><ul><li>必须保留原有接口签名，不破坏向后兼容</li><li>错误响应必须遵循项目统一的 ErrorResponse 格式（code + message + detail）</li><li>不得硬编码任何敏感信息（密钥、token、内部域名）</li><li>涉及外部 API 调用的函数必须附带完整的类型注解与文档字符串</li><li>单次函数不超过 50 行，超出则必须拆分]</li></ul><h2 id="执行步骤" tabindex="-1">执行步骤 <a class="header-anchor" href="#执行步骤" aria-label="Permalink to &quot;执行步骤&quot;">​</a></h2><p>[对于复杂任务，分步骤指引。 示例：</p><ol><li>先分析现有 /payments/{id} 接口的实现模式，确保新接口风格一致</li><li>设计退款查询的数据模型（RefundInfo），确认与 Stripe 退款对象的字段映射</li><li>在 api/refunds.py 中新增路由处理器，路由路径与支付模块对齐</li><li>编写对应的 Pydantic schema，包含请求验证与响应序列化</li><li>补充单元测试，覆盖正常退款、已退款状态、退款不存在三种情况</li><li>自测：用 curl 或 Postman 验证接口可正常响应]</li></ol><h2 id="输出格式" tabindex="-1">输出格式 <a class="header-anchor" href="#输出格式" aria-label="Permalink to &quot;输出格式&quot;">​</a></h2><p><strong>结构要求：</strong> [示例：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 核心代码实现</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;explanation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 关键决策说明（为什么这样设计）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;test_cases&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 单元测试用例（命名规范、断言清晰）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">**格式规范：**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- 代码块必须标注语言</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- 测试用例必须可直接运行（pytest 可执行）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- 禁止在代码中混入自然语言注释（注释仅用于解释「为什么」，不解释「是什么」）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">## 输入变量</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 变量 | 含义 | 示例 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| :--- | :--- | :--- |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| \`[</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">变量名</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]\` | 变量含义说明 | 示例值 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">## 使用示例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">**输入：**</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**预期输出：**</span></span>
<span class="line"><span>[符合上述输出格式的完整示例，包含 code / explanation / test_cases 三部分]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 效果评价</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- ✅ 优点：</span></span>
<span class="line"><span>- ⚠️ 注意事项：</span></span>
<span class="line"><span>- 💡 优化建议：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 迭代记录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 1.0.0 (YYYY-MM-DD): 初始版本</span></span></code></pre></div>`,21)])])}const E=a(p,[["render",t]]);export{c as __pageData,E as default};
