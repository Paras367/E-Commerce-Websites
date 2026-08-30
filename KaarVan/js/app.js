// KAARVAN — app.js
// Boots the shared shell on every page: header, footer, toasts, cart drawer,
// quick view modal, mega menu, search, theme switcher, mobile nav, floating UI.

const LOGO_SVG = `<svg class="logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 3 L27 10 L27 22 L16 29 L5 22 L5 10 Z" stroke="currentColor" stroke-width="1.6" stroke-dasharray="3 3"/>
  <circle cx="16" cy="16" r="5.5" fill="currentColor"/>
</svg>`;

// ============================================================================
// TOASTS
// ============================================================================
const Toast = (() => {
  let stack;
  function ensure() {
    stack = Utils.qs(".toast-stack");
    if (!stack) {
      stack = document.createElement("div");
      stack.className = "toast-stack";
      stack.setAttribute("aria-live", "polite");
      document.body.appendChild(stack);
    }
  }
  const icons = { success: "check-circle", error: "x-circle", info: "info" };
  function show(message, type = "success", duration = 2600) {
    ensure();
    const el = document.createElement("div");
    el.className = `toast ${type}`;
    el.innerHTML = `<i data-lucide="${icons[type] || "info"}" class="icon-sm"></i><span>${Utils.escapeHtml(message)}</span>`;
    stack.appendChild(el);
    Utils.refreshIcons();
    setTimeout(() => {
      el.classList.add("leaving");
      setTimeout(() => el.remove(), 240);
    }, duration);
  }
  return { show };
})();

// ============================================================================
// HEADER
// ============================================================================
const Header = (() => {
  function categoryLinks() {
    return Object.entries(CATEGORIES).map(([key, c]) =>
      `<a href="products.html?category=${key}">${c.label}</a>`).join("");
  }

  function megaMenuHTML() {
    const cols = Object.entries(CATEGORIES).slice(0, 4).map(([key, c]) => {
      const subcats = [...new Set(PRODUCTS.filter(p => p.category === key).map(p => p.subcategory))].slice(0, 5);
      return `<div class="mega-col">
        <div class="mega-col-title"><i data-lucide="${c.icon}" class="icon-sm"></i> ${c.label}</div>
        <ul>
          ${subcats.map(s => `<li><a href="products.html?category=${key}&sub=${encodeURIComponent(s)}">${s}</a></li>`).join("")}
          <li><a href="products.html?category=${key}" style="font-weight:700;color:var(--gold-dark)">View All \u2192</a></li>
        </ul>
      </div>`;
    }).join("");
    return `<div class="mega-menu-inner container">
      ${cols}
      <div class="mega-promo">
        <span class="eyebrow">Weekend Sale</span>
        <h4>Up to 60% off Electronics</h4>
        <a href="deals.html">Shop the sale \u2192</a>
      </div>
    </div>`;
  }

  function html() {
    const cartN = Store.cartCount();
    const wishN = Store.getWishlist().length;
    return `
    <div class="announce-bar">
      <div class="announce-track" id="announceTrack"></div>
    </div>
    <header class="site-header">
      <!-- Desktop header -->
      <div class="desktop-header container">
        <div class="header-main">
          <a href="index.html" class="logo">${LOGO_SVG}<span>KAARVAN<span class="logo-sub">est. bazaar</span></span></a>

          <nav class="nav-categories">
            <button type="button" class="nav-cat-trigger" id="megaMenuTrigger" aria-expanded="false" aria-haspopup="true">
              <i data-lucide="menu" class="icon-sm"></i> Categories <i data-lucide="chevron-down" class="chev"></i>
            </button>
            <a href="deals.html" class="nav-cat-trigger">Deals</a>
            <a href="new-arrivals.html" class="nav-cat-trigger">New Arrivals</a>
          </nav>

          <div class="header-search">
            <form class="search-form" id="searchForm" role="search">
              <i data-lucide="search" class="icon-sm" style="color:var(--muted)"></i>
              <input type="text" id="searchInput" placeholder="Search for products, brands and more" autocomplete="off" aria-label="Search products">
              <button type="button" class="btn-icon search-clear" id="searchClearBtn" aria-label="Clear search" style="width:28px;height:28px;border:none"><i data-lucide="x" class="icon-sm"></i></button>
              <button type="submit" class="search-submit" aria-label="Search"><i data-lucide="search" class="icon-sm"></i></button>
            </form>
            <div class="search-suggest" id="searchSuggest"></div>
          </div>

          <button type="button" class="location-pill" id="pincodeTrigger">
            <i data-lucide="map-pin" class="icon-sm"></i>
            <span class="label-text">Deliver to <strong id="pincodeLabel">134109</strong></span>
          </button>

          <div class="header-actions">
            <button type="button" class="header-action" id="themeToggle" aria-label="Toggle dark mode">
              <i data-lucide="moon" class="icon"></i><span class="label">Theme</span>
            </button>
            <a href="account.html" class="header-action"><i data-lucide="user" class="icon"></i><span class="label">Account</span></a>
            <a href="compare.html" class="header-action" id="compareAction"><i data-lucide="git-compare" class="icon"></i><span class="badge-count hide" id="compareCount">0</span><span class="label">Compare</span></a>
            <a href="wishlist.html" class="header-action"><i data-lucide="heart" class="icon"></i><span class="badge-count ${wishN ? "" : "hide"}" id="wishCount">${wishN}</span><span class="label">Wishlist</span></a>
            <button type="button" class="header-action" id="cartTrigger"><i data-lucide="shopping-cart" class="icon"></i><span class="badge-count ${cartN ? "" : "hide"}" id="cartCount">${cartN}</span><span class="label">Cart</span></button>
          </div>
        </div>
        <div class="mega-menu" id="megaMenu">${megaMenuHTML()}</div>
      </div>

      <!-- Mobile header -->
      <div class="mobile-header">
        <div class="mobile-header-top">
          <a href="index.html" class="logo">${LOGO_SVG}<span>KAARVAN</span></a>
          <div class="mobile-header-actions">
            <button type="button" class="btn-icon" id="themeToggleMobile" aria-label="Toggle dark mode"><i data-lucide="moon" class="icon-sm"></i></button>
            <button type="button" class="btn-icon" id="cartTriggerMobile" aria-label="Cart" style="position:relative">
              <i data-lucide="shopping-cart" class="icon-sm"></i>
              <span class="badge-count ${cartN ? "" : "hide"}" id="cartCountMobile" style="transform:translate(20%,-40%)">${cartN}</span>
            </button>
          </div>
        </div>
        <div class="mobile-search-row">
          <form class="search-form" id="searchFormMobile" role="search">
            <i data-lucide="search" class="icon-sm" style="color:var(--muted)"></i>
            <input type="text" id="searchInputMobile" placeholder="Search KAARVAN" autocomplete="off" aria-label="Search products">
            <button type="submit" class="search-submit" aria-label="Search"><i data-lucide="search" class="icon-sm"></i></button>
          </form>
          <div class="search-suggest" id="searchSuggestMobile"></div>
        </div>
      </div>
    </header>`;
  }

  function bottomNavHTML(active) {
    const cartN = Store.cartCount();
    const item = (href, icon, label, key) =>
      `<a href="${href}" class="mobile-nav-item ${active === key ? "active" : ""}">
        <i data-lucide="${icon}" class="icon-sm"></i>
        ${key === "cart" && cartN ? `<span class="badge-count">${cartN}</span>` : ""}
        ${label}
      </a>`;
    return `<nav class="mobile-bottom-nav" aria-label="Primary">
      ${item("index.html", "home", "Home", "home")}
      ${item("products.html", "layout-grid", "Categories", "categories")}
      ${item("search.html", "search", "Search", "search")}
      ${item("wishlist.html", "heart", "Wishlist", "wishlist")}
      ${item("cart.html", "shopping-cart", "Cart", "cart")}
    </nav>`;
  }

  function updateCounts() {
    const cartN = Store.cartCount();
    const wishN = Store.getWishlist().length;
    const compN = Store.getCompare().length;
    [Utils.qs("#cartCount"), Utils.qs("#cartCountMobile")].forEach(el => {
      if (!el) return;
      el.textContent = cartN;
      el.classList.toggle("hide", cartN === 0);
    });
    const wishEl = Utils.qs("#wishCount");
    if (wishEl) { wishEl.textContent = wishN; wishEl.classList.toggle("hide", wishN === 0); }
    const compEl = Utils.qs("#compareCount");
    if (compEl) { compEl.textContent = compN; compEl.classList.toggle("hide", compN === 0); }
    Utils.qsa(".mobile-nav-item .badge-count").forEach(el => el.textContent = cartN);
  }

  function initAnnounce() {
    const track = Utils.qs("#announceTrack");
    if (!track) return;
    const items = SITE_CONFIG.announcements;
    const doubled = [...items, ...items];
    track.innerHTML = doubled.map(t => `<span><i data-lucide="sparkle" class="icon-sm"></i>${t}</span>`).join("");
  }

  function initMegaMenu() {
    const trigger = Utils.qs("#megaMenuTrigger");
    const menu = Utils.qs("#megaMenu");
    if (!trigger || !menu) return;
    function close() { menu.classList.remove("show"); trigger.setAttribute("aria-expanded", "false"); }
    function open() { menu.classList.add("show"); trigger.setAttribute("aria-expanded", "true"); }
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.contains("show") ? close() : open();
    });
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && e.target !== trigger) close();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  function initTheme() {
    function updateIcon() {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      Utils.qsa("#themeToggle i, #themeToggleMobile i").forEach(i => i.setAttribute("data-lucide", isDark ? "sun" : "moon"));
      Utils.refreshIcons();
    }
    updateIcon();
    [Utils.qs("#themeToggle"), Utils.qs("#themeToggleMobile")].forEach(btn => {
      if (!btn) return;
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        Store.setTheme(current === "dark" ? "light" : "dark");
        updateIcon();
      });
    });
  }

  function initPincode() {
    const trigger = Utils.qs("#pincodeTrigger");
    if (!trigger) return;
    trigger.addEventListener("click", () => {
      const val = prompt("Enter delivery pincode:", Utils.qs("#pincodeLabel").textContent);
      if (val && Utils.pincodeValid(val)) {
        Utils.qs("#pincodeLabel").textContent = val.trim();
        Toast.show("Delivery location updated", "success");
      } else if (val) {
        Toast.show("Please enter a valid 6-digit pincode", "error");
      }
    });
  }

  function mount(activeMobileNav) {
    const root = Utils.qs("#site-header-root");
    if (!root) return;
    root.innerHTML = html();
    const navRoot = Utils.qs("#mobile-nav-root");
    if (navRoot) navRoot.innerHTML = bottomNavHTML(activeMobileNav);
    Utils.refreshIcons();
    initAnnounce();
    initMegaMenu();
    initTheme();
    initPincode();
    Search.init();
    Utils.qs("#cartTrigger")?.addEventListener("click", () => Cart.openDrawer());
    Utils.qs("#cartTriggerMobile")?.addEventListener("click", () => Cart.openDrawer());
    document.addEventListener("krv:cart-change", updateCounts);
    document.addEventListener("krv:wishlist-change", updateCounts);
    document.addEventListener("krv:wishlist-ui-change", updateCounts);
    document.addEventListener("krv:compare-change", updateCounts);
    Utils.refreshIcons();
  }

  return { mount, updateCounts, categoryLinks };
})();

// ============================================================================
// SEARCH
// ============================================================================
const Search = (() => {
  function matches(q) {
    q = q.toLowerCase().trim();
    if (!q) return [];
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q)) ||
      p.description.toLowerCase().includes(q)
    );
  }

  function trending() {
    return ["Wireless Earbuds", "Running Shoes", "Yoga Mat", "Kajal", "Gaming Chair"];
  }

  function renderSuggestions(panel, query) {
    if (!query) {
      const recents = Store.getRecentSearches();
      panel.innerHTML = `
        ${recents.length ? `<div class="suggest-group">
          <div class="suggest-label">Recent Searches <button type="button" id="clearRecentSearch">Clear</button></div>
          ${recents.map(r => `<button type="button" class="suggest-item" data-search-term="${Utils.escapeHtml(r)}" style="width:100%;text-align:left"><i data-lucide="clock" class="icon-sm"></i><span class="meta"><span class="name">${Utils.escapeHtml(r)}</span></span></button>`).join("")}
        </div>` : ""}
        <div class="suggest-group">
          <div class="suggest-label">Trending Searches</div>
          ${trending().map(t => `<button type="button" class="suggest-item" data-search-term="${t}" style="width:100%;text-align:left"><i data-lucide="trending-up" class="icon-sm"></i><span class="meta"><span class="name">${t}</span></span></button>`).join("")}
        </div>`;
      Utils.qs("#clearRecentSearch", panel)?.addEventListener("click", (e) => {
        e.stopPropagation();
        Store.clearRecentSearches();
        renderSuggestions(panel, "");
      });
      Utils.refreshIcons();
      return;
    }

    const results = matches(query);
    if (!results.length) {
      panel.innerHTML = `<div class="suggest-empty"><i data-lucide="search-x" class="icon-lg" style="margin:0 auto 10px;color:var(--muted)"></i><br>No results for "${Utils.escapeHtml(query)}"</div>`;
      Utils.refreshIcons();
      return;
    }
    const productMatches = results.slice(0, 5);
    const cats = [...new Set(results.map(r => r.category))].slice(0, 3);

    panel.innerHTML = `
      <div class="suggest-group">
        <div class="suggest-label">Products</div>
        ${productMatches.map(p => `<a href="product.html?id=${p.id}" class="suggest-item">
          <img class="thumb" src="${p.images[0]}" alt="" onerror="this.style.visibility='hidden'">
          <span class="meta"><span class="name">${Utils.escapeHtml(p.name)}</span><span class="cat">${CATEGORIES[p.category].label}</span></span>
          <span class="price">${Utils.formatPrice(p.price)}</span>
        </a>`).join("")}
      </div>
      ${cats.length ? `<div class="suggest-group">
        <div class="suggest-label">Categories</div>
        ${cats.map(c => `<a href="products.html?category=${c}" class="suggest-item"><i data-lucide="${CATEGORIES[c].icon}" class="icon-sm"></i><span class="meta"><span class="name">${CATEGORIES[c].label}</span></span></a>`).join("")}
      </div>` : ""}`;
    Utils.refreshIcons();
  }

  function wireInput(inputEl, panelEl, formEl) {
    if (!inputEl || !panelEl) return;
    let activeIndex = -1;

    function open() { panelEl.classList.add("show"); }
    function close() { panelEl.classList.remove("show"); activeIndex = -1; }

    renderSuggestions(panelEl, "");

    inputEl.addEventListener("focus", () => { renderSuggestions(panelEl, inputEl.value); open(); });
    inputEl.addEventListener("input", Utils.debounce(() => {
      renderSuggestions(panelEl, inputEl.value);
      open();
      const clearBtn = Utils.qs("#searchClearBtn");
      if (clearBtn) clearBtn.classList.toggle("show", inputEl.value.length > 0);
    }, 180));

    inputEl.addEventListener("keydown", (e) => {
      const items = Utils.qsa(".suggest-item", panelEl);
      if (e.key === "ArrowDown") { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, items.length - 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); }
      else if (e.key === "Escape") { close(); inputEl.blur(); return; }
      else if (e.key === "Enter") {
        if (activeIndex >= 0 && items[activeIndex]) { e.preventDefault(); items[activeIndex].click(); return; }
      } else return;
      items.forEach((it, i) => it.classList.toggle("active", i === activeIndex));
      if (items[activeIndex]) items[activeIndex].scrollIntoView({ block: "nearest" });
    });

    panelEl.addEventListener("click", (e) => {
      const termBtn = e.target.closest("[data-search-term]");
      if (termBtn) {
        inputEl.value = termBtn.dataset.searchTerm;
        submit(inputEl.value);
      }
    });

    document.addEventListener("click", (e) => {
      if (formEl && !formEl.contains(e.target) && !panelEl.contains(e.target)) close();
    });

    formEl?.addEventListener("submit", (e) => {
      e.preventDefault();
      submit(inputEl.value);
    });

    function submit(term) {
      term = term.trim();
      if (!term) return;
      Store.addRecentSearch(term);
      window.location.href = "search.html?q=" + encodeURIComponent(term);
    }
  }

  function init() {
    wireInput(Utils.qs("#searchInput"), Utils.qs("#searchSuggest"), Utils.qs("#searchForm"));
    wireInput(Utils.qs("#searchInputMobile"), Utils.qs("#searchSuggestMobile"), Utils.qs("#searchFormMobile"));
    Utils.qs("#searchClearBtn")?.addEventListener("click", () => {
      const input = Utils.qs("#searchInput");
      input.value = "";
      input.focus();
      renderSuggestions(Utils.qs("#searchSuggest"), "");
      Utils.qs("#searchClearBtn").classList.remove("show");
    });
  }

  return { init, matches };
})();

// ============================================================================
// CART DRAWER
// ============================================================================
const Cart = (() => {
  function calcTotals(cart) {
    let subtotal = 0, mrpTotal = 0;
    cart.forEach(item => {
      const p = Utils.findProduct(item.id);
      if (!p) return;
      subtotal += p.price * item.qty;
      mrpTotal += p.mrp * item.qty;
    });
    const productDiscount = mrpTotal - subtotal;
    let couponDiscount = 0;
    let freeShip = false;
    const couponCode = Store.getCoupon();
    if (couponCode && SITE_CONFIG.coupons[couponCode]) {
      const c = SITE_CONFIG.coupons[couponCode];
      if (subtotal >= c.minOrder) {
        if (c.type === "percent") couponDiscount = Math.round(subtotal * (c.value / 100));
        if (c.type === "shipping") freeShip = true;
      }
    }
    const afterDiscount = subtotal - couponDiscount;
    const delivery = (freeShip || subtotal >= SITE_CONFIG.freeDeliveryThreshold || subtotal === 0) ? 0 : SITE_CONFIG.deliveryFee;
    const tax = Math.round(afterDiscount * SITE_CONFIG.taxRate);
    const total = afterDiscount + delivery + tax;
    return { subtotal, mrpTotal, productDiscount, couponDiscount, delivery, tax, total, freeShip };
  }

  function renderDrawerItems() {
    const cart = Store.getCart();
    const list = Utils.qs("#drawerItems");
    if (!list) return;
    if (!cart.length) {
      list.innerHTML = `<div class="empty-state" style="padding:40px 10px">
        <div class="icon-wrap"><i data-lucide="shopping-cart" class="icon-lg"></i></div>
        <h3 style="font-size:1rem">Your cart is empty</h3>
        <p style="font-size:0.82rem">Add something you like — it'll show up right here.</p>
        <button type="button" class="btn btn-primary btn-sm" id="drawerShopBtn">Start Shopping</button>
      </div>`;
      Utils.refreshIcons();
      Utils.qs("#drawerShopBtn")?.addEventListener("click", () => closeDrawer());
      return;
    }
    list.innerHTML = cart.map(item => {
      const p = Utils.findProduct(item.id);
      if (!p) return "";
      return `<div class="cart-line-item" style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--border)">
        <img src="${p.images[0]}" alt="" style="width:64px;height:64px;border-radius:8px;object-fit:cover;flex-shrink:0" onerror="this.style.opacity=0">
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;font-size:0.85rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Utils.escapeHtml(p.name)}</div>
          <div style="font-size:0.74rem;color:var(--muted)">${item.color ? item.color + " · " : ""}${item.size ? "Size " + item.size : ""}</div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
            <div class="pc-qty" style="width:96px">
              <button type="button" data-drawer-dec="${p.id}|${item.color || ""}|${item.size || ""}">\u2212</button>
              <span class="qty-val">${item.qty}</span>
              <button type="button" data-drawer-inc="${p.id}|${item.color || ""}|${item.size || ""}">+</button>
            </div>
            <strong style="font-size:0.88rem">${Utils.formatPrice(p.price * item.qty)}</strong>
          </div>
        </div>
      </div>`;
    }).join("");
    Utils.refreshIcons();
  }

  function renderDrawerFooter() {
    const totals = calcTotals(Store.getCart());
    const remaining = SITE_CONFIG.freeDeliveryThreshold - totals.subtotal;
    const footer = Utils.qs("#drawerFooter");
    if (!footer) return;
    if (!Store.getCart().length) { footer.innerHTML = ""; return; }
    footer.innerHTML = `
      <div class="free-ship-progress">
        <div class="msg">${remaining > 0 ? `Add <strong>${Utils.formatPrice(remaining)}</strong> more for FREE delivery` : `<strong>\u2713 You've unlocked free delivery!</strong>`}</div>
        <div class="progress-track"><div class="progress-fill" style="width:${Utils.clamp((totals.subtotal / SITE_CONFIG.freeDeliveryThreshold) * 100, 4, 100)}%"></div></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-weight:800;font-size:1.05rem;margin-bottom:14px">
        <span>Subtotal</span><span>${Utils.formatPrice(totals.subtotal)}</span>
      </div>
      <a href="checkout.html" class="btn btn-primary btn-block btn-lg">Proceed to Checkout <i data-lucide="arrow-right" class="icon-sm"></i></a>
      <a href="cart.html" class="btn btn-ghost btn-block btn-sm mt-2">View Full Cart</a>`;
    Utils.refreshIcons();
  }

  function renderDrawer() { renderDrawerItems(); renderDrawerFooter(); }

  function openDrawer() {
    ensureDrawer();
    renderDrawer();
    Utils.qs("#cartOverlay").classList.add("show");
    Utils.qs("#cartDrawer").classList.add("show");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    Utils.qs("#cartOverlay")?.classList.remove("show");
    Utils.qs("#cartDrawer")?.classList.remove("show");
    document.body.style.overflow = "";
  }

  function ensureDrawer() {
    if (Utils.qs("#cartDrawer")) return;
    const wrap = document.createElement("div");
    wrap.innerHTML = `
      <div class="overlay" id="cartOverlay"></div>
      <aside class="drawer" id="cartDrawer" aria-label="Shopping cart">
        <div class="drawer-header">
          <h3><i data-lucide="shopping-cart" class="icon-sm"></i> Your Cart</h3>
          <button type="button" class="btn-icon" id="cartDrawerClose" aria-label="Close cart"><i data-lucide="x" class="icon-sm"></i></button>
        </div>
        <div class="drawer-body" id="drawerItems"></div>
        <div class="drawer-footer" id="drawerFooter"></div>
      </aside>`;
    document.body.appendChild(wrap);
    Utils.qs("#cartOverlay").addEventListener("click", closeDrawer);
    Utils.qs("#cartDrawerClose").addEventListener("click", closeDrawer);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });
    Utils.qs("#cartDrawer").addEventListener("click", (e) => {
      const inc = e.target.closest("[data-drawer-inc]");
      const dec = e.target.closest("[data-drawer-dec]");
      if (inc) {
        const [id, color, size] = inc.dataset.drawerInc.split("|");
        const item = Store.getCart().find(i => i.id == id && (i.color || "") === color && (i.size || "") === size);
        Store.updateCartQty(Number(id), item.color, item.size, item.qty + 1);
        renderDrawer(); refreshAllProductUI();
      }
      if (dec) {
        const [id, color, size] = dec.dataset.drawerDec.split("|");
        const item = Store.getCart().find(i => i.id == id && (i.color || "") === color && (i.size || "") === size);
        if (item.qty <= 1) Store.removeFromCart(Number(id), item.color, item.size);
        else Store.updateCartQty(Number(id), item.color, item.size, item.qty - 1);
        renderDrawer(); refreshAllProductUI();
      }
    });
    document.addEventListener("krv:cart-change", () => { if (Utils.qs("#cartDrawer")) renderDrawer(); });
  }

  return { openDrawer, closeDrawer, calcTotals };
})();

// ============================================================================
// QUICK VIEW MODAL
// ============================================================================
const QuickView = (() => {
  function ensure() {
    if (Utils.qs("#quickViewModal")) return;
    const wrap = document.createElement("div");
    wrap.innerHTML = `<div class="modal" id="quickViewModal">
      <div class="modal-panel" id="quickViewPanel"></div>
    </div>`;
    document.body.appendChild(wrap);
    Utils.qs("#quickViewModal").addEventListener("click", (e) => {
      if (e.target.id === "quickViewModal") close();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }
  function close() {
    Utils.qs("#quickViewModal")?.classList.remove("show");
    document.body.style.overflow = "";
  }
  function open(id) {
    ensure();
    const p = Utils.findProduct(id);
    if (!p) return;
    const panel = Utils.qs("#quickViewPanel");
    panel.innerHTML = `
      <button type="button" class="modal-close" id="qvClose" aria-label="Close"><i data-lucide="x" class="icon-sm"></i></button>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0" class="qv-grid">
        <div style="background:var(--surface-2)"><img src="${p.images[0]}" alt="${Utils.escapeHtml(p.name)}" style="width:100%;height:100%;object-fit:cover;min-height:340px" onerror="this.src='https://picsum.photos/seed/fallback${p.id}/700/700'"></div>
        <div style="padding:28px">
          <span class="pc-brand">${Utils.escapeHtml(p.brand)}</span>
          <h3 style="margin:4px 0 8px">${Utils.escapeHtml(p.name)}</h3>
          <div class="pc-rating" style="margin-bottom:10px">
            <span class="stars">${p.rating} <i data-lucide="star" class="icon-sm" style="width:9px;height:9px"></i></span>
            <span class="count">(${p.reviewCount.toLocaleString("en-IN")} reviews)</span>
          </div>
          <div class="pc-price-row" style="margin-bottom:14px">
            <span class="pc-price" style="font-size:1.4rem">${Utils.formatPrice(p.price)}</span>
            ${p.mrp > p.price ? `<span class="pc-mrp">${Utils.formatPrice(p.mrp)}</span><span class="pc-off">${p.discount}% off</span>` : ""}
          </div>
          <p class="text-muted" style="font-size:0.88rem;margin-bottom:16px">${Utils.escapeHtml(p.description)}</p>
          <ul style="font-size:0.85rem;margin-bottom:18px;padding-left:18px;list-style:disc;color:var(--text)">
            ${p.highlights.slice(0, 4).map(h => `<li style="margin-bottom:4px">${Utils.escapeHtml(h)}</li>`).join("")}
          </ul>
          <div style="display:flex;gap:10px">
            <button type="button" class="btn btn-primary" data-add-cart="${p.id}"><i data-lucide="shopping-cart" class="icon-sm"></i> Add to Cart</button>
            <a href="product.html?id=${p.id}" class="btn btn-outline">View Full Details</a>
            <button type="button" class="btn-icon ${Store.isWishlisted(p.id) ? "is-active" : ""}" data-wishlist-toggle="${p.id}" aria-label="Wishlist"><i data-lucide="heart" class="icon-sm"></i></button>
            <button type="button" class="btn-icon ${Store.isComparing(p.id) ? "is-active" : ""}" data-compare-toggle="${p.id}" aria-label="Add to compare"><i data-lucide="git-compare" class="icon-sm"></i></button>
          </div>
        </div>
      </div>`;
    Utils.refreshIcons();
    Utils.qs("#qvClose").addEventListener("click", close);
    Utils.qs("#quickViewModal").classList.add("show");
    document.body.style.overflow = "hidden";
  }
  return { open, close };
})();

// ============================================================================
// FOOTER
// ============================================================================
const Footer = (() => {
  function html() {
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="index.html" class="logo">${LOGO_SVG}<span>KAARVAN</span></a>
            <p>An original marketplace for the modern Indian home — electronics, fashion, beauty and everyday essentials, curated in one caravan.</p>
            <div class="footer-social">
              <a href="https://github.com/Paras367" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
              <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <h5>Shop</h5>
            <ul>
              <li><a href="products.html">All Products</a></li>
              <li><a href="new-arrivals.html">New Arrivals</a></li>
              <li><a href="products.html?sort=bestseller">Best Sellers</a></li>
              <li><a href="deals.html">Deals</a></li>
              <li><a href="products.html">Categories</a></li>
            </ul>
          </div>
          <div class="footer-col hide-lg">
            <h5>Customer Service</h5>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="orders.html">Track Order</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Account</h5>
            <ul>
              <li><a href="login.html">Login</a></li>
              <li><a href="orders.html">Orders</a></li>
              <li><a href="wishlist.html">Wishlist</a></li>
              <li><a href="account.html">Profile</a></li>
            </ul>
            <div class="footer-payments">
              <span><i class="fa-brands fa-cc-visa"></i></span>
              <span><i class="fa-brands fa-cc-mastercard"></i></span>
              <span><i class="fa-solid fa-indian-rupee-sign"></i></span>
              <span><i class="fa-solid fa-money-bill-wave"></i></span>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>\u00a9 ${new Date().getFullYear()} KAARVAN. All rights reserved.</span>
          <div class="footer-credit">
            <span>Built by <strong>Softwarelabs</strong> &middot; Founder <strong>Paras Dhiman</strong></span>
            <a href="https://paras367.github.io" target="_blank" rel="noopener">paras367.github.io</a>
            <span>&middot;</span>
            <a href="https://github.com/Paras367" target="_blank" rel="noopener">Github.com/Paras367</a>
          </div>
          <div class="footer-legal-links">
            <a href="#">Privacy</a><a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>`;
  }
  function mount() {
    const root = Utils.qs("#site-footer-root");
    if (root) root.innerHTML = html();
    Utils.refreshIcons();
  }
  return { mount };
})();

// ============================================================================
// FLOATING UI
// ============================================================================
function initFloatingUI() {
  const root = document.getElementById("float-stack-root");
  if (!root) return;
  root.innerHTML = `<div class="float-stack">
    <button type="button" class="float-btn" id="floatSupport" aria-label="Customer support"><i data-lucide="headphones" class="icon-sm"></i></button>
    <button type="button" class="float-btn gold" id="floatTop" aria-label="Scroll to top" style="opacity:0;pointer-events:none"><i data-lucide="arrow-up" class="icon-sm"></i></button>
  </div>`;
  Utils.refreshIcons();
  const topBtn = Utils.qs("#floatTop");
  window.addEventListener("scroll", Utils.debounce(() => {
    topBtn.classList.toggle("show", window.scrollY > 500);
  }, 80));
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  Utils.qs("#floatSupport").addEventListener("click", () => Toast.show("Support chat is a demo in this build \u2014 reach us at hello@kaarvan.in", "info", 3400));
}

// ============================================================================
// ACCORDION / TABS (shared UI helpers)
// ============================================================================
function initAccordions(root = document) {
  Utils.qsa(".accordion-trigger", root).forEach(trigger => {
    trigger.addEventListener("click", () => {
      const panel = trigger.nextElementSibling;
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      panel.style.maxHeight = expanded ? "0px" : panel.scrollHeight + "px";
    });
  });
}
function initTabs(root = document) {
  Utils.qsa(".tabs", root).forEach(tabGroup => {
    const panelWrapId = tabGroup.dataset.panels;
    Utils.qsa(".tab-btn", tabGroup).forEach(btn => {
      btn.addEventListener("click", () => {
        Utils.qsa(".tab-btn", tabGroup).forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const panels = Utils.qsa(".tab-panel", document.getElementById(panelWrapId));
        panels.forEach(p => p.classList.toggle("active", p.dataset.tab === btn.dataset.tab));
      });
    });
  });
}

// ============================================================================
// BOOT
// ============================================================================
function bootShell(activeMobileNav) {
  Header.mount(activeMobileNav);
  Footer.mount();
  initFloatingUI();
}
