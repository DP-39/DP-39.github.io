/**
 * blog.js — 博客列表页逻辑
 * 文章列表渲染 | 分类筛选 | 日期排序 | 关键词搜索
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    renderFilterTags();
    renderBlogList(blogPosts);

    // 搜索
    const searchInput = document.getElementById("blog-search");
    if (searchInput) {
      let debounceTimer;
      searchInput.addEventListener("input", () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          applyFilters();
        }, 300);
      });
    }

    // 排序切换
    const sortBtn = document.getElementById("sort-btn");
    if (sortBtn) {
      sortBtn.addEventListener("click", () => {
        const current = sortBtn.dataset.order || "desc";
        const next = current === "desc" ? "asc" : "desc";
        sortBtn.dataset.order = next;
        sortBtn.innerHTML = next === "desc" ? "↓ 最新优先" : "↑ 最早优先";
        applyFilters();
      });
    }
  });

  // 获取所有唯一的分类
  function getCategories() {
    const cats = new Set();
    blogPosts.forEach((p) => cats.add(p.category));
    return ["全部", ...cats];
  }

  // 渲染分类筛选标签
  function renderFilterTags() {
    const container = document.getElementById("filter-tags");
    if (!container) return;

    let currentFilter = container.dataset.active || "全部";

    container.innerHTML = getCategories()
      .map(
        (cat) =>
          `<button class="tag ${cat === currentFilter ? "active" : ""}" data-category="${cat}">${cat}</button>`
      )
      .join("");

    // 绑定点击事件
    container.querySelectorAll(".tag").forEach((tagBtn) => {
      tagBtn.addEventListener("click", () => {
        container.dataset.active = tagBtn.dataset.category;
        container.querySelectorAll(".tag").forEach((t) => t.classList.remove("active"));
        tagBtn.classList.add("active");
        applyFilters();
      });
    });
  }

  // 综合筛选
  function applyFilters() {
    const activeCategory =
      document.getElementById("filter-tags")?.dataset.active || "全部";
    const searchTerm = document.getElementById("blog-search")?.value.trim().toLowerCase() || "";
    const sortOrder = document.getElementById("sort-btn")?.dataset.order || "desc";

    let filtered = [...blogPosts];

    // 分类筛选
    if (activeCategory !== "全部") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // 关键词搜索
    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm) ||
          p.summary.toLowerCase().includes(searchTerm) ||
          p.tags.some((t) => t.toLowerCase().includes(searchTerm))
      );
    }

    // 排序
    filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

    renderBlogList(filtered);
  }

  // 渲染博客列表
  function renderBlogList(posts) {
    const grid = document.getElementById("blog-grid");
    if (!grid) return;

    if (posts.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <p>未找到匹配的文章</p>
          <p style="font-size:0.85rem;margin-top:8px;">尝试修改筛选条件或搜索关键词</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = posts
      .map(
        (post, i) => `
      <article class="card" style="animation: fadeInUp 0.4s ease forwards; animation-delay: ${i * 0.06}s;">
        <a href="article.html?slug=${encodeURIComponent(post.slug)}" class="card-link">
          <div class="card-date">📅 ${formatDate(post.date)} · ⏱ ${post.readTime} 分钟阅读</div>
          <h3 class="card-title">${post.title}</h3>
          <p class="card-summary">${post.summary}</p>
          <div class="card-tags">
            <span class="tag" style="background:var(--accent);color:#fff;">${post.category}</span>
            ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </a>
      </article>`
      )
      .join("");
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
  }
})();
