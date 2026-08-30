// KAARVAN — utils.js
// Small, dependency-free helpers shared by every page.

const Utils = (() => {

  function formatPrice(n) {
    if (n === 0) return "Free";
    return "\u20b9" + Math.round(n).toLocaleString("en-IN");
  }

  function debounce(fn, delay = 250) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), delay);
    };
  }

  function qs(sel, ctx = document) { return ctx.querySelector(sel); }
  function qsa(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function slugify(str) {
    return str.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function findProduct(idOrSlug) {
    if (idOrSlug == null) return null;
    return PRODUCTS.find(p => p.id == idOrSlug || p.slug === idOrSlug) || null;
  }

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function starIcons(rating, size = "icon-sm") {
    let html = '<span class="stars-row">';
    for (let i = 1; i <= 5; i++) {
      const filled = rating >= i - 0.25;
      html += `<svg class="${size} ${filled ? "filled" : ""}" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    }
    return html + "</span>";
  }

  function timeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / 86400000);
    if (days <= 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 30) return `${days} days ago`;
    const months = Math.floor(days / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }

  function generateOrderId() {
    const rand = Math.floor(100000 + Math.random() * 900000);
    return "KRV" + new Date().getFullYear() + rand;
  }

  function pincodeValid(pin) {
    return /^[1-9][0-9]{5}$/.test(pin.trim());
  }

  function emailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function phoneValid(phone) {
    return /^[6-9]\d{9}$/.test(phone.trim());
  }

  function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

  function refreshIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

  return {
    formatPrice, debounce, qs, qsa, getParam, slugify, findProduct,
    escapeHtml, starIcons, timeAgo, generateOrderId, pincodeValid,
    emailValid, phoneValid, clamp, refreshIcons
  };
})();
