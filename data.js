/**
 * 网站数据文件
 * 包含博客文章、项目展示、个人信息等所有静态数据
 */

// ==================== 博客文章数据 ====================
const blogPosts = [
  {
    slug: "html5-semantic-guide",
    title: "HTML5语义化标签完全指南",
    date: "2026-05-20",
    category: "前端开发",
    tags: ["HTML5", "语义化", "Web标准"],
    summary: "深入理解HTML5语义化标签的重要性，学习如何使用header、nav、main、article、section等标签构建结构清晰的网页。",
    readTime: 8,
    content: `
      <h2>为什么需要语义化？</h2>
      <p>语义化HTML是指使用恰当的HTML标签来表达内容的含义，而不仅仅是使用&lt;div&gt;和&lt;span&gt;来包裹所有内容。语义化的网页具有以下优势：</p>
      <ul>
        <li><strong>可访问性（Accessibility）：</strong>屏幕阅读器可以更好地理解页面结构，帮助视障用户浏览网页。</li>
        <li><strong>SEO优化：</strong>搜索引擎能够更准确地理解页面内容，提高搜索排名。</li>
        <li><strong>代码可维护性：</strong>清晰的标签结构使代码更易读、更易维护。</li>
        <li><strong>向前兼容：</strong>遵循Web标准，确保网站在未来浏览器中正常运行。</li>
      </ul>

      <h2>常用语义化标签</h2>
      <h3>&lt;header&gt; — 页眉</h3>
      <p>&lt;header&gt;标签用于定义文档或节的头部区域，通常包含网站Logo、导航菜单、搜索框等介绍性内容。一个页面可以有多个&lt;header&gt;元素。</p>
      <pre><code>&lt;header&gt;
  &lt;h1&gt;我的博客&lt;/h1&gt;
  &lt;nav&gt;...&lt;/nav&gt;
&lt;/header&gt;</code></pre>

      <h3>&lt;nav&gt; — 导航</h3>
      <p>&lt;nav&gt;标签用于标记主导航链接组。并非所有链接都需要放在&lt;nav&gt;中，它主要用于主要的导航块。</p>

      <h3>&lt;main&gt; — 主要内容</h3>
      <p>&lt;main&gt;标签代表文档的主要内容区域，每个页面应该只有一个&lt;main&gt;元素，且其内容应该是页面独有的。</p>

      <h3>&lt;article&gt; — 独立内容</h3>
      <p>&lt;article&gt;标签表示独立的、可复用的内容块，如博客文章、新闻报道、论坛帖子等。</p>

      <h3>&lt;section&gt; — 节</h3>
      <p>&lt;section&gt;标签用于对内容进行分组，通常包含一个标题。它与&lt;article&gt;的区别在于：&lt;article&gt;是独立完整的，而&lt;section&gt;是主题分组。</p>

      <h3>&lt;aside&gt; — 侧边栏</h3>
      <p>&lt;aside&gt;标签用于标记与主内容相关但非核心的附加内容，如侧边栏、引用、广告等。</p>

      <h3>&lt;footer&gt; — 页脚</h3>
      <p>&lt;footer&gt;标签定义文档或节的底部区域，通常包含版权信息、联系方式、相关链接等。</p>

      <h2>最佳实践</h2>
      <p>在实际开发中，建议遵循以下原则：</p>
      <ol>
        <li>首先使用语义化标签规划页面结构</li>
        <li>避免过度使用&lt;div&gt;，在合适的地方使用语义化标签</li>
        <li>确保标题层级（h1-h6）合理嵌套</li>
        <li>为图片添加有意义的alt属性</li>
        <li>使用ARIA属性增强可访问性</li>
      </ol>
    `
  },
  {
    slug: "css-grid-mastery",
    title: "CSS Grid布局：从入门到精通",
    date: "2026-05-10",
    category: "前端开发",
    tags: ["CSS3", "Grid", "布局"],
    summary: "全面掌握CSS Grid布局系统，通过实际案例学习如何使用grid-template、grid-area、fr单位等核心概念构建灵活的响应式布局。",
    readTime: 12,
    content: `
      <h2>什么是CSS Grid？</h2>
      <p>CSS Grid Layout（网格布局）是CSS中最强大的布局系统。它是一个二维布局系统，可以同时处理行和列，非常适合构建复杂的网页布局。与Flexbox的一维布局不同，Grid让你能够同时在两个维度上精确控制元素的位置。</p>

      <h2>核心概念</h2>
      <h3>Grid容器与Grid项目</h3>
      <p>通过设置 <code>display: grid</code> 来创建Grid容器，其直接子元素自动成为Grid项目。</p>

      <h3>定义行与列</h3>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}</code></pre>

      <h3>fr单位</h3>
      <p><code>fr</code>（fraction）是Grid布局中专用的弹性单位，表示可用空间的一份。例如 <code>1fr 2fr 1fr</code> 表示三列分别占1/4、1/2、1/4的宽度。</p>

      <h3>Grid Area与命名</h3>
      <p>使用 <code>grid-template-areas</code> 可以直观地定义布局区域：</p>
      <pre><code>.container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}</code></pre>

      <h2>响应式Grid布局</h2>
      <p>结合 <code>auto-fill</code> 和 <code>minmax()</code> 可以轻松实现响应式布局，无需媒体查询：</p>
      <pre><code>.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}</code></pre>

      <h2>Grid vs Flexbox</h2>
      <table>
        <tr><th>场景</th><th>推荐方案</th></tr>
        <tr><td>整体页面布局</td><td>Grid</td></tr>
        <tr><td>组件内部排列</td><td>Flexbox</td></tr>
        <tr><td>一维排列（行或列）</td><td>Flexbox</td></tr>
        <tr><td>二维排列（行列同时）</td><td>Grid</td></tr>
      </table>

      <h2>总结</h2>
      <p>CSS Grid是现代Web布局的基石。掌握Grid布局后，你会发现以前需要大量CSS hack才能实现的布局，现在几行代码就能优雅地解决。</p>
    `
  },
  {
    slug: "javascript-async-guide",
    title: "JavaScript异步编程深度解析",
    date: "2026-04-28",
    category: "前端开发",
    tags: ["JavaScript", "异步", "Promise", "Async/Await"],
    summary: "从回调函数到Promise再到async/await，系统地理解JavaScript异步编程的演进历程和最佳实践。",
    readTime: 10,
    content: `
      <h2>JavaScript的单线程模型</h2>
      <p>JavaScript是单线程语言，这意味着它一次只能执行一个任务。那么如何处理网络请求、定时器等耗时操作而不阻塞主线程呢？答案就是异步编程。</p>

      <h2>回调函数（Callback）</h2>
      <p>最早的异步处理方式是将回调函数作为参数传递给异步操作：</p>
      <pre><code>fetchData(url, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    processData(data);
  }
});</code></pre>
      <p>回调函数的问题在于嵌套过深时会产生"回调地狱"（Callback Hell），代码难以阅读和维护。</p>

      <h2>Promise — 更好的异步方案</h2>
      <p>Promise代表一个异步操作的最终完成（或失败）及其结果值。它有三种状态：pending（进行中）、fulfilled（已成功）、rejected（已失败）。</p>
      <pre><code>fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('数据加载成功:', data);
  })
  .catch(error => {
    console.error('请求失败:', error);
  });</code></pre>

      <h3>Promise的静态方法</h3>
      <ul>
        <li><strong>Promise.all()</strong> — 等待所有Promise完成，如果任一失败则整体失败</li>
        <li><strong>Promise.allSettled()</strong> — 等待所有Promise完成，不论成功或失败</li>
        <li><strong>Promise.race()</strong> — 返回最先完成的Promise结果</li>
        <li><strong>Promise.any()</strong> — 返回第一个成功的Promise结果</li>
      </ul>

      <h2>Async/Await — 同步风格的异步代码</h2>
      <p>async/await是Promise的语法糖，让异步代码看起来像同步代码：</p>
      <pre><code>async function loadUserData() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('加载失败:', error);
  }
}</code></pre>

      <h2>事件循环（Event Loop）</h2>
      <p>理解事件循环是掌握JavaScript异步编程的关键。事件循环不断地检查调用栈和任务队列，当调用栈为空时，将微任务（Promise回调）或宏任务（setTimeout、事件回调）推入调用栈执行。</p>

      <h2>最佳实践</h2>
      <ol>
        <li>优先使用async/await而非原始Promise链</li>
        <li>总是处理错误（try/catch 或 .catch()）</li>
        <li>避免在循环中使用await，考虑使用Promise.all并发执行</li>
        <li>了解微任务和宏任务的执行顺序</li>
      </ol>
    `
  },
  {
    slug: "web-performance-optimization",
    title: "前端性能优化的10个实用技巧",
    date: "2026-04-15",
    category: "性能优化",
    tags: ["性能", "优化", "用户体验", "Lighthouse"],
    summary: "从资源加载、渲染优化到运行时性能，分享10个经过实践验证的前端性能优化技巧，让你的网站速度提升50%以上。",
    readTime: 7,
    content: `
      <h2>为什么性能重要？</h2>
      <p>研究表明，页面加载时间每增加1秒，转化率下降约7%。对于内容型网站，性能直接影响用户体验和搜索引擎排名。Google将Core Web Vitals作为排名因素之一。</p>

      <h2>1. 图片优化</h2>
      <p>图片通常占据页面体积的60%以上。使用以下策略优化：</p>
      <ul>
        <li>使用WebP/AVIF等现代格式</li>
        <li>实现懒加载（loading="lazy"）</li>
        <li>使用响应式图片（srcset + sizes）</li>
        <li>压缩图片而不损失视觉质量</li>
      </ul>

      <h2>2. 资源压缩与打包</h2>
      <p>启用Gzip或Brotli压缩可以显著减少传输体积。HTML、CSS、JS文件压缩率通常可达70-80%。</p>

      <h2>3. 使用CDN</h2>
      <p>内容分发网络（CDN）将静态资源部署到全球节点，用户从最近的节点获取资源，大幅减少网络延迟。</p>

      <h2>4. 代码分割与懒加载</h2>
      <p>不要一次性加载所有JavaScript。使用动态import()按需加载模块：</p>
      <pre><code>button.addEventListener('click', async () => {
  const module = await import('./heavy-module.js');
  module.doSomething();
});</code></pre>

      <h2>5. CSS优化</h2>
      <ul>
        <li>移除未使用的CSS规则</li>
        <li>避免深层嵌套选择器</li>
        <li>使用will-change或transform进行动画，而非修改left/top</li>
        <li>关键CSS内联到&lt;head&gt;中</li>
      </ul>

      <h2>6. 减少DOM操作</h2>
      <p>批量更新DOM，使用DocumentFragment或虚拟DOM技术减少重排和重绘。</p>

      <h2>7. 合理使用缓存</h2>
      <p>为静态资源设置强缓存（Cache-Control: max-age=31536000），使用文件哈希实现缓存更新。</p>

      <h2>8. 预加载与预连接</h2>
      <pre><code>&lt;link rel="preconnect" href="https://api.example.com"&gt;
&lt;link rel="preload" href="critical-font.woff2" as="font" crossorigin&gt;</code></pre>

      <h2>9. 减少第三方脚本</h2>
      <p>每个第三方脚本都是性能风险。定期审计你的第三方依赖，移除非必要的脚本。</p>

      <h2>10. 监控与测量</h2>
      <p>使用Lighthouse、WebPageTest等工具定期检测性能。设置性能预算，确保每次迭代不会退化。</p>

      <h2>总结</h2>
      <p>性能优化是一个持续的过程。从用户感知的加载速度出发，优先优化首屏渲染和交互响应时间，逐步提升整体体验。</p>
    `
  },
  {
    slug: "git-workflow-best-practices",
    title: "Git团队协作工作流最佳实践",
    date: "2026-03-30",
    category: "开发工具",
    tags: ["Git", "团队协作", "版本控制", "GitHub"],
    summary: "掌握Git分支管理策略，学习Git Flow、GitHub Flow和Trunk-Based Development等主流工作流，提升团队协作效率。",
    readTime: 9,
    content: `
      <h2>为什么需要分支策略？</h2>
      <p>在团队开发中，多人同时修改代码库是常态。良好的分支策略可以：</p>
      <ul>
        <li>隔离开发中的功能，避免影响稳定版本</li>
        <li>支持并行开发多个功能</li>
        <li>便于代码审查（Code Review）</li>
        <li>清晰地记录项目演进历史</li>
      </ul>

      <h2>Git Flow</h2>
      <p>Git Flow是最经典的分支模型，定义了严格的分支角色：</p>
      <ul>
        <li><strong>main/master</strong> — 生产就绪代码</li>
        <li><strong>develop</strong> — 集成分支，最新开发代码</li>
        <li><strong>feature/*</strong> — 功能分支，从develop分出，合并回develop</li>
        <li><strong>release/*</strong> — 发布准备分支</li>
        <li><strong>hotfix/*</strong> — 紧急修复分支，从main分出</li>
      </ul>
      <p>适合有明确发布周期的项目。</p>

      <h2>GitHub Flow</h2>
      <p>更简洁的模型，只有一个长期分支main：</p>
      <ol>
        <li>从main创建功能分支</li>
        <li>在功能分支上开发和提交</li>
        <li>创建Pull Request进行代码审查</li>
        <li>合并到main后立即部署</li>
      </ol>
      <p>适合持续部署（CD）的项目。</p>

      <h2>Trunk-Based Development</h2>
      <p>开发者频繁地将小改动合并到主干（trunk/main），分支生命周期很短（通常不超过一天）。配合特性开关（Feature Flag）使用，实现了最快速的集成。</p>

      <h2>提交信息规范</h2>
      <p>使用Conventional Commits规范编写提交信息：</p>
      <pre><code>feat: 添加用户登录功能
fix: 修复导航栏响应式布局问题
docs: 更新API文档
style: 格式化代码，不影响逻辑
refactor: 重构用户状态管理模块</code></pre>

      <h2>代码审查要点</h2>
      <ul>
        <li>检查代码逻辑是否正确</li>
        <li>关注代码可读性和可维护性</li>
        <li>确认测试覆盖充分</li>
        <li>检查是否有安全漏洞</li>
        <li>保持建设性和尊重性的沟通</li>
      </ul>
    `
  },
  {
    slug: "responsive-design-principles",
    title: "响应式网页设计核心原则与实践",
    date: "2026-03-15",
    category: "前端开发",
    tags: ["响应式", "CSS3", "移动优先", "媒体查询"],
    summary: "从移动优先策略到弹性布局，系统讲解响应式设计的核心原则和现代实现方法。",
    readTime: 6,
    content: `
      <h2>什么是响应式设计？</h2>
      <p>响应式网页设计（Responsive Web Design）是一种让网页在不同设备（桌面、平板、手机）上都能良好显示的设计方法。它由Ethan Marcotte在2010年提出，核心理念是"一次设计，处处适配"。</p>

      <h2>三大核心技术</h2>

      <h3>1. 弹性网格布局（Fluid Grid）</h3>
      <p>使用相对单位（%、vw、fr）而非固定像素来定义布局宽度：</p>
      <pre><code>.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}</code></pre>

      <h3>2. 弹性图片（Flexible Images）</h3>
      <p>使用max-width确保图片不会溢出容器：</p>
      <pre><code>img {
  max-width: 100%;
  height: auto;
}</code></pre>

      <h3>3. 媒体查询（Media Queries）</h3>
      <p>根据设备特性应用不同的CSS样式：</p>
      <pre><code>@media (max-width: 768px) {
  .sidebar { display: none; }
  .content { width: 100%; }
}</code></pre>

      <h2>移动优先（Mobile First）</h2>
      <p>移动优先是一种设计策略：先设计移动端布局，然后通过媒体查询逐步增强大屏幕的体验。使用min-width而非max-width：</p>
      <pre><code>/* 移动端默认样式 */
.grid { grid-template-columns: 1fr; }

/* 平板 */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* 桌面 */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}</code></pre>

      <h2>现代响应式工具</h2>
      <ul>
        <li><strong>clamp()函数</strong> — 动态调整字体大小：<code>font-size: clamp(1rem, 2vw + 1rem, 2rem)</code></li>
        <li><strong>Container Queries</strong> — 基于容器而非视口尺寸调整样式</li>
        <li><strong>CSS Grid的auto-fill/minmax</strong> — 无需媒体查询的响应式网格</li>
      </ul>

      <h2>总结</h2>
      <p>响应式设计已经成为Web开发的基本要求。采用移动优先策略，灵活运用现代CSS工具，可以以更少的代码实现更好的响应式体验。</p>
    `
  }
];

// ==================== 项目展示数据 ====================
const projects = [
  {
    id: 1,
    name: "个人技术博客",
    description: "基于HTML5+CSS3+JavaScript构建的响应式个人博客网站，支持深色/浅色主题切换、博客分类筛选、留言板等完整功能。",
    tech: ["HTML5", "CSS3", "JavaScript"],
    cover: "images/project-blog.svg",
    link: "index.html"
  },
  {
    id: 2,
    name: "天气预报应用",
    description: "调用OpenWeatherMap API实现的天气预报Web应用，支持城市搜索、5天预报、天气图标动态展示。",
    tech: ["JavaScript", "API", "CSS3"],
    cover: "images/project-weather.svg",
    link: "#"
  },
  {
    id: 3,
    name: "待办事项管理器",
    description: "基于localStorage的待办事项管理工具，支持添加、删除、标记完成、分类筛选和拖拽排序功能。",
    tech: ["HTML5", "CSS3", "JavaScript"],
    cover: "images/project-todo.svg",
    link: "#"
  },
  {
    id: 4,
    name: "Canvas绘图板",
    description: "基于HTML5 Canvas的在线绘图工具，支持画笔颜色、粗细调节、橡皮擦、撤销和导出图片功能。",
    tech: ["Canvas", "JavaScript", "CSS3"],
    cover: "images/project-drawing.svg",
    link: "#"
  },
  {
    id: 5,
    name: "学生成绩管理系统",
    description: "基于纯前端技术的成绩管理SPA，支持数据录入、成绩统计、排名计算、图表可视化和数据导出。",
    tech: ["JavaScript", "Chart.js", "HTML5"],
    cover: "images/project-scores.svg",
    link: "#"
  },
  {
    id: 6,
    name: "在线Markdown编辑器",
    description: "实时预览的Markdown编辑器，支持语法高亮、自定义主题、导出HTML/PDF、自动保存到localStorage。",
    tech: ["JavaScript", "CSS3", "Markdown"],
    cover: "images/project-markdown.svg",
    link: "#"
  }
];

// ==================== 网站配置 ====================
const siteConfig = {
  name: "DevLog",
  fullName: "DevLog - 个人技术博客",
  author: "DP050",
  authorName: "DP050",
  authorBio: "深圳大学计算机与软件学院学生，热爱Web前端开发与开源技术。专注于HTML5/CSS3/JavaScript技术栈，正在探索全栈开发之路。",
  authorAvatar: "images/avatar.svg",
  github: "https://github.com/DP050",
  email: "dp050@example.com",
  copyRight: "© 2026 DevLog. All rights reserved.",
  navLinks: [
    { href: "index.html", label: "首页", icon: "🏠" },
    { href: "blog.html", label: "博客", icon: "📝" },
    { href: "projects.html", label: "项目", icon: "💻" },
    { href: "about.html", label: "关于", icon: "👤" }
  ]
};
