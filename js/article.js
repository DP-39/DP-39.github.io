/**
 * article.js — 文章详情页逻辑
 * URL参数解析 | 文章渲染 | 阅读进度条 | 估计阅读时间
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    // 从URL获取文章slug
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");

    if (!slug) {
      showNotFound();
      return;
    }

    // 查找文章
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) {
      showNotFound();
      return;
    }

    renderArticle(post);
    initReadingProgress();
    updatePageTitle(post);
  });

  function renderArticle(post) {
    const container = document.getElementById("article-container");
    if (!container) return;

    container.innerHTML = `
      <div class="article-header reveal">
        <a href="blog.html" class="article-back">← 返回博客列表</a>
        <h1 class="article-title">${post.title}</h1>
        <div class="article-meta">
          <span>📅 ${formatDate(post.date)}</span>
          <span class="read-time">⏱ ${post.readTime} 分钟阅读</span>
          <span>📂 ${post.category}</span>
        </div>
        <div class="card-tags">
          ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="article-content reveal">
        ${post.content}
      </div>
    `;

    // 再次触发滚动动画
    setTimeout(initArticleReveal, 100);
  }

  function showNotFound() {
    const container = document.getElementById("article-container");
    if (!container) return;
    container.innerHTML = `
      <div style="text-align:center;padding:80px 20px;">
        <div style="font-size:3rem;margin-bottom:16px;">📄</div>
        <h2>文章未找到</h2>
        <p style="color:var(--text-secondary);margin:12px 0 24px;">请检查链接是否正确，或返回博客列表浏览其他文章。</p>
        <a href="blog.html" class="btn btn-primary">返回博客列表</a>
      </div>
    `;
  }

  function initReadingProgress() {
    const bar = document.getElementById("reading-progress-bar");
    if (!bar) return;

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        bar.style.width = "0%";
        return;
      }
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      bar.style.width = progress + "%";
    }, { passive: true });
  }

  function updatePageTitle(post) {
    document.title = post.title + " - DevLog";
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
  }

  function initArticleReveal() {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
  }
})();
