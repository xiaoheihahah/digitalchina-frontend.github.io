import{_ as n,o as a,c as s,a as t}from"./app.e1fdcc9c.js";const p={},e=t(`<h1 id="解构函数参数-提高代码可读性" tabindex="-1"><a class="header-anchor" href="#解构函数参数-提高代码可读性" aria-hidden="true">#</a> 解构函数参数，提高代码可读性</h1><h2 id="不推荐" tabindex="-1"><a class="header-anchor" href="#不推荐" aria-hidden="true">#</a> 不推荐</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myFuction <span class="token operator">=</span> <span class="token punctuation">(</span>one<span class="token punctuation">,</span>two<span class="token punctuation">,</span>three<span class="token punctuation">,</span>four<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token function">myFuction</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过多的参数会使用户难以使用函数</p><h2 id="推荐" tabindex="-1"><a class="header-anchor" href="#推荐" aria-hidden="true">#</a> 推荐</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">myFuction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> one<span class="token punctuation">,</span> two<span class="token punctuation">,</span> three<span class="token punctuation">,</span> four <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token function">myFuction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">one</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">two</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">three</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">four</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解构函数参数允许用户传递一个单独对象，每个参数都有名称</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>若函数参数更多还有其他方法吗？</p>`,9),o=[e];function c(i,l){return a(),s("div",null,o)}const r=n(p,[["render",c],["__file","analytic-parameter.html.vue"]]);export{r as default};
