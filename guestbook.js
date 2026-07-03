/**
 * guestbook.js — 留言板逻辑
 * 表单验证 | localStorage持久化 | 留言卡片渲染
 */

(function () {
  "use strict";

  const STORAGE_KEY = "devlog_guestbook_messages";

  document.addEventListener("DOMContentLoaded", () => {
    renderMessages();
    initForm();
  });

  // 初始化表单
  function initForm() {
    const form = document.getElementById("guestbook-form");
    if (!form) return;

    const nicknameInput = document.getElementById("gb-nickname");
    const messageInput = document.getElementById("gb-message");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // 清除之前的错误状态
      clearErrors();

      // 验证
      let hasError = false;
      const nickname = nicknameInput.value.trim();
      const message = messageInput.value.trim();

      if (!nickname) {
        showError(nicknameInput, "请输入昵称");
        hasError = true;
      } else if (nickname.length > 20) {
        showError(nicknameInput, "昵称不能超过20个字符");
        hasError = true;
      }

      if (!message) {
        showError(messageInput, "请输入留言内容");
        hasError = true;
      } else if (message.length > 500) {
        showError(messageInput, "留言内容不能超过500个字符");
        hasError = true;
      }

      if (hasError) return;

      // 保存留言
      const newMessage = {
        id: Date.now(),
        nickname: nickname,
        message: message,
        timestamp: Date.now(),
      };

      const messages = getMessages();
      messages.unshift(newMessage); // 最新留言在前
      saveMessages(messages);

      // 清空表单
      nicknameInput.value = "";
      messageInput.value = "";

      // 重新渲染
      renderMessages();
    });
  }

  // 显示错误
  function showError(inputEl, msg) {
    const formGroup = inputEl.closest(".form-group");
    if (formGroup) {
      formGroup.classList.add("error");
      const errorEl = formGroup.querySelector(".error-msg");
      if (errorEl) errorEl.textContent = msg;
    }
  }

  // 清除所有错误
  function clearErrors() {
    document.querySelectorAll(".form-group.error").forEach((el) => {
      el.classList.remove("error");
    });
  }

  // 获取留言列表
  function getMessages() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn("读取留言数据失败:", e);
      return [];
    }
  }

  // 保存留言列表
  function saveMessages(messages) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {
      console.error("保存留言数据失败:", e);
      alert("保存失败，请检查浏览器存储空间");
    }
  }

  // 渲染留言列表
  function renderMessages() {
    const container = document.getElementById("messages-list");
    if (!container) return;

    const messages = getMessages();

    if (messages.length === 0) {
      container.innerHTML = `
        <div class="message-empty">
          <span style="font-size:2rem;display:block;margin-bottom:8px;">💬</span>
          还没有留言，来做第一个留言的人吧！
        </div>
      `;
      return;
    }

    container.innerHTML = messages
      .map(
        (msg) => `
      <div class="message-card">
        <div class="message-header">
          <span class="message-nickname">${escapeHtml(msg.nickname)}</span>
          <span class="message-time">${formatTime(msg.timestamp)}</span>
        </div>
        <div class="message-body">${escapeHtml(msg.message)}</div>
      </div>
    `
      )
      .join("");
  }

  // 时间格式化
  function formatTime(timestamp) {
    const d = new Date(timestamp);
    const now = new Date();
    const diff = now - d;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "刚刚";
    if (minutes < 60) return minutes + " 分钟前";
    if (hours < 24) return hours + " 小时前";
    if (days < 7) return days + " 天前";

    return (
      d.getFullYear() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getDate() +
      " " +
      pad(d.getHours()) +
      ":" +
      pad(d.getMinutes())
    );
  }

  function pad(n) {
    return n < 10 ? "0" + n : "" + n;
  }

  // XSS防护：转义HTML特殊字符
  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
})();
