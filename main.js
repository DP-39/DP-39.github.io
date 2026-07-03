/**
 * main.js — 网站共享功能
 * 导航栏注入 | 主题切换 | 页脚 | 回到顶部 | 滚动动画 | 打字机效果
 */

(function () {
  "use strict";

  // ==================== DOM 就绪后初始化 ====================
  document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initTheme();
    initFooter();
    initBackToTop();
    initScrollReveal();
    initTypewriter();
    initMobileMenu();
  });

  // ==================== 导航栏动态注入 ====================
  function initNavigation() {
    const navPlaceholder = document.getElementById("site-nav");
    if (!navPlaceholder) return;

    // 获取当前页面文件名
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navPlaceholder.innerHTML = `
      <div class="nav-inner">
        <a href="index.html" class="nav-brand">
          <span class="logo-icon">D</span>
          DevLog
        </a>
        <ul class="nav-links" id="nav-links">
          ${siteConfig.navLinks
            .map(
              (link) => `
            <li>
              <a href="${link.href}" class="${
                currentPage === link.href || (currentPage === "" && link.href === "index.html")
                  ? "active"
                  : ""
              }" data-page="${link.href}">
                <span>${link.icon}</span> ${link.label}
              </a>
            </li>`
            )
            .join("")}
        </ul>
        <div style="display:flex;align-items:center;">
          <button class="theme-toggle" id="theme-toggle" aria-label="切换主题" title="切换深色/浅色主题">
            🌙
          </button>
          <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="菜单">
            ☰
          </button>
        </div>
      </div>
    `;

    // 重新绑定主题按钮事件（因为DOM被替换了）
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
  }

  // ==================== 主题切换 ====================
  function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  }

  // ==================== 页脚动态注入 ====================
  function initFooter() {
    const footerPlaceholder = document.getElementById("site-footer");
    if (!footerPlaceholder) return;

    const year = new Date().getFullYear();
    footerPlaceholder.innerHTML = `
      <div class="footer-inner">
        <p class="footer-text">${siteConfig.copyRight.replace("2026", year)}</p>
        <p class="footer-text">基于 HTML5 + CSS3 + JavaScript 构建 · 无后端依赖</p>
        <div class="footer-links">
          <a href="index.html">首页</a>
          <a href="blog.html">博客</a>
          <a href="projects.html">项目</a>
          <a href="about.html">关于</a>
        </div>
      </div>
    `;
  }

  // ==================== 回到顶部按钮 ====================
  function initBackToTop() {
    const btn = document.createElement("button");
    btn.className = "back-to-top";
    btn.innerHTML = "↑";
    btn.setAttribute("aria-label", "回到顶部");
    btn.title = "回到顶部";
    document.body.appendChild(btn);

    let scrollTimeout;
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 400) {
          btn.classList.add("visible");
        } else {
          btn.classList.remove("visible");
        }
      }, 50);
    }, { passive: true });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ==================== 滚动显示动画（Intersection Observer） ====================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  // ==================== 打字机效果 ====================
  function initTypewriter() {
    const typewriterEl = document.getElementById("typewriter");
    if (!typewriterEl) return;

    const phrases = [
      "Web前端开发者",
      "热爱开源技术",
      "持续学习中...",
      "欢迎来到我的博客！"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isWaiting) {
        // 打完一个词组后暂停
        setTimeout(() => {
          isWaiting = false;
          isDeleting = true;
          type();
        }, 2000);
        return;
      }

      if (isDeleting) {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentPhrase.length) {
        // 打完一个词组
        isWaiting = true;
        speed = 500;
      } else if (isDeleting && charIndex === 0) {
        // 删完一个词组
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 300;
      }

      setTimeout(type, speed);
    }

    // 初始延迟后开始
    setTimeout(type, 500);
  }

  // ==================== 移动端菜单 ====================
  function initMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuBtn.textContent = isOpen ? "✕" : "☰";
    });

    // 点击导航链接后关闭菜单
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.textContent = "☰";
      });
    });

    // 点击页面其他地方关闭菜单
    document.addEventListener("click", (e) => {
      if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("open");
        menuBtn.textContent = "☰";
      }
    });
  }
})();
