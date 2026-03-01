---
layout: home
title: 前端视界

hero:
  name: "前端视界"
  text: "探索代码与视觉的交汇点，创造数字世界的无限可能"
  tagline: 3D可视化 · 低代码平台 · 前端架构 · 技术沉淀
  image:
    src: /logo.svg
    alt: Logo
  actions:
    - theme: brand
      text: 探索项目实践
      link: /notes/
    - theme: alt
      text: 技术文章
      link: /posts/

features:
  - icon: 🏗️
    title: 实战项目沉淀
    details: 从传统Web应用到3D可视化，从组件库到低代码平台，分享一线项目中的技术思考与解决方案
  - icon: 🚀
    title: 前沿技术探索
    details: Babylon.js、WebRTC、AR、GIS等新技术实践，带你了解前端技术的边界与可能性
  - icon: 💡
    title: 架构思维培养
    details: 不仅是代码实现，更是系统设计与架构思考，助你从"写代码"到"做产品"
---

<div class="home-content">

## 技术沉淀 · 项目实践精选

<div class="project-cards">

<a href="/blog/notes/亚信大厦智慧楼宇3D可视化平台" class="project-card">

<img src="https://xiaomanbala.oss-cn-beijing.aliyuncs.com/blog/smart-building.webp" alt="某智慧楼宇 3D 可视化平台" class="project-banner">

<div class="project-content">

<h3>某智慧楼宇 3D 可视化平台</h3>

<p>打造从楼宇室内外场景 3D 仿真到楼宇应用的可视化管理系统</p>

</div>

</a>

<a href="/blog/notes/全景展厅工坊项目总结" class="project-card">

<img src="https://xiaomanbala.oss-cn-beijing.aliyuncs.com/blog/640 (1).gif"  class="project-banner">

<div class="project-content">

<h3>全景展厅工坊</h3>

<p>让非技术用户生成个性化沉浸式在线展厅</p>

</div>

</a>


<a href="/blog/notes/可视化编辑器" class="project-card">

<img src="https://xiaomanbala.oss-cn-beijing.aliyuncs.com/blog/visual-editor-cover.png" alt="IDC机房空间可视化编辑器" class="project-banner">

<div class="project-content">

<h3>可视化编辑器</h3>

<p>可视化大屏搭建编辑器</p>

</div>

</a>


<a href="/blog/notes/江苏移动AR小程序" class="project-card">

<img src="https://xiaomanbala.oss-cn-beijing.aliyuncs.com/blog/ar-miniprogram-cover.png" alt="某 AR 小程序" class="project-banner" style="object-fit: contain;">

<div class="project-content">

<h3>某 AR 小程序</h3>

<p>为某品牌手机打造 AR 体验小程序</p>

</div>

</a>

<a href="/blog/notes/低空经济3D地理时空可视化项目" class="project-card">

<img src="https://xiaomanbala.oss-cn-beijing.aliyuncs.com/blog/low-altitude-flight.png" alt="低空经济 3D 地理时空可视化项目" class="project-banner">

<div class="project-content">

<h3>低空经济 3D 地理时空可视化项目</h3>

<p>紧跟低空经济发展趋势，实现3D 地理信息可视化</p>
</div>

</a>


<a href="/blog/notes/企业级组件库实战：模块化架构与组件设计落地指南" class="project-card">

<img src="https://xiaomanbala.oss-cn-beijing.aliyuncs.com/blog/component-library.jpg" alt="企业级组件库实战：模块化架构与组件设计落地指南" class="project-banner">

<div class="project-content">

<h3>企业级组件库实战：模块化架构与组件设计落地指南</h3>

<p>分享企业级前端组件库的设计与实现，包括组件分层开发、规范校验、单元测试等</p>

</div>

</a>

</div>

[探索更多项目实践 →](/notes/)

## 技术思考与分享

<ul class="article-list">

<li class="article-item">

<a href="/blog/posts/Trae + MasterGo 前端一键生成页面" class="article-link">

<h3 class="article-title">Trae + MasterGo 前端一键生成页面</h3>

<p class="article-excerpt">使用 Trae 编辑器配合 MasterGo MCP Server 实现设计到代码的一键生成</p>

<div class="article-meta">

<span class="article-date">2025-05-19</span>

</div>

</a>

</li>

<li class="article-item">

<a href="/blog/posts/快速搞定大屏可视化" class="article-link">

<h3 class="article-title">快速搞定大屏可视化</h3>

<p class="article-excerpt">分享大屏开发中可复用的模块，包括适配方案、时间组件、天气组件、全屏组件、滚动列表等</p>

<div class="article-meta">

<span class="article-date">2023-05-25</span>

</div>

</a>

</li>

<li class="article-item">

<a href="/blog/posts/前端最新技术栈 Vite2 + Vue3 + TypeScript + Pinia 实战" class="article-link">

<h3 class="article-title">前端最新技术栈 Vite2 + Vue3 + TypeScript + Pinia 实战</h3>

<p class="article-excerpt">分享使用前端最新技术栈 Vite2.x + Vue3 + TypeScript + Pinia 开发项目的经验总结</p>

<div class="article-meta">

<span class="article-date">2022-01-01</span>

</div>

</a>

</li>

</ul>

[阅读更多技术文章 →](/posts/)

</div>

<style>

.project-cards {

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 24px;

  margin: 24px 0;

}

.project-card {

  background: var(--vp-c-bg-soft);

  border: 1px solid var(--vp-c-border);

  border-radius: 12px;

  overflow: hidden;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  display: flex;

  flex-direction: column;

  text-decoration: none;

  color: inherit;

}

.project-card:hover {

  transform: translateY(-5px);

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

}

.project-banner {

  width: 100%;

  height: 180px;

  object-fit: cover;

  background-color: var(--vp-c-brand);

}

.project-content {

  padding: 20px;

  flex-grow: 1;

  display: flex;

  flex-direction: column;

}

.project-content h3 {

  margin: 0 0 12px 0;

  font-size: 18px;

  font-weight: 600;

  color: var(--vp-c-text-1);

}

.project-content p {

  margin: 0 0 16px 0;

  color: var(--vp-c-text-2);

  flex-grow: 1;

}

.project-tags {

  display: flex;

  flex-wrap: wrap;

  gap: 8px;

}

.project-tags span {

  background: var(--vp-c-brand);

  color: white;

  padding: 4px 8px;

  border-radius: 4px;

  font-size: 12px;

}

/* 文章列表样式 */
.article-list {

  list-style: none;

  padding: 0;

  margin: 24px 0;

}

.article-item {

  margin-bottom: 24px;

  padding-bottom: 24px;

  border-bottom: 1px solid var(--vp-c-border);

}

.article-item:last-child {

  margin-bottom: 0;

  padding-bottom: 0;

  border-bottom: none;

}

.article-link {

  text-decoration: none;

  color: inherit;

  display: block;

}

.article-link:hover {

  text-decoration: none;

}

.article-link:hover .article-title {

  color: var(--vp-c-brand);

}

.article-title {

  margin: 0 0 12px 0;

  font-size: 20px;

  font-weight: 600;

  color: var(--vp-c-text-1);

  transition: color 0.3s ease;

}

.article-excerpt {

  margin: 0 0 16px 0;

  color: var(--vp-c-text-2);

  line-height: 1.6;

}

.article-meta {

  margin-top: 12px;

}

.article-date {

  color: var(--vp-c-text-3);

  font-size: 14px;

}

/* 调整文章模块宽度与项目模块宽度一致 */
.home-content {
  max-width: 100%;
}

.VPDoc .container {
  max-width: 100% !important;
}

.VPDoc .content-container {
  max-width: 100% !important;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .project-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .project-cards {
    grid-template-columns: 1fr;
  }
}
</style>
