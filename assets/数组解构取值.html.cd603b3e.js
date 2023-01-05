import{_ as n,o as s,c as a,a as e}from"./app.e1fdcc9c.js";const t={},o=e(`<h1 id="数组解构取值" tabindex="-1"><a class="header-anchor" href="#数组解构取值" aria-hidden="true">#</a> 数组解构取值</h1><p>快速提取数组中的指定成员</p><h2 id="常规方式声明变量赋值-不推荐" tabindex="-1"><a class="header-anchor" href="#常规方式声明变量赋值-不推荐" aria-hidden="true">#</a> 常规方式声明变量赋值（不推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> color <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> firstColor <span class="token operator">=</span> color<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">//&#39;red&#39;;</span>
<span class="token keyword">let</span> secondColor <span class="token operator">=</span> color<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">//&#39;green&#39;;</span>
<span class="token keyword">let</span> thirdColor <span class="token operator">=</span> color<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">//&#39;blue&#39;;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组解构-推荐" tabindex="-1"><a class="header-anchor" href="#数组解构-推荐" aria-hidden="true">#</a> 数组解构（推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> color <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;blue&#39;</span>，<span class="token string">&#39;pink&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>firstColor<span class="token punctuation">,</span>secondColor<span class="token punctuation">,</span>thirdColor<span class="token punctuation">]</span> <span class="token operator">=</span> color<span class="token punctuation">;</span><span class="token comment">// &#39;red&#39;,&#39;green&#39;,[&#39;blue&#39;,&#39;pink&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>数组解构取值可以嵌套吗</p>`,8),p=[o];function c(l,r){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","数组解构取值.html.vue"]]);export{d as default};
