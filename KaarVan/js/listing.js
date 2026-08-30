// KAARVAN — listing.js
// Powers products.html, category.html, search.html, deals.html, new-arrivals.html.
// Centralized pipeline: base set -> search -> filters -> sort -> paginate -> render.

const Listing = (() => {
  let state = {
    q: "", category: "all", sub: "all", brands: [], priceMax: 30000,
    rating: 0, inStockOnly: false, minDiscount: 0, sort: "relevance", page: 1
  };
  const PAGE_SIZE = 12;
  let baseSet = [];
  let mode = "all";

  function baseSetForMode() {
    switch (mode) {
      case "deals": return PRODUCTS.filter(p => p.discount >= 20);
      case "new": return PRODUCTS.filter(p => p.badge === "New").concat(PRODUCTS.slice(-14)).filter((p, i, arr) => arr.indexOf(p) === i);
      case "search": return PRODUCTS;
      default: return PRODUCTS;
    }
  }

  function applyPipeline() {
    let list = baseSet;

    if (state.q.trim()) {
      list = Search.matches(state.q);
    }
    if (state.category !== "all") list = list.filter(p => p.category === state.category);
    if (state.sub !== "all") list = list.filter(p => p.subcategory === state.sub);
    if (state.brands.length) list = list.filter(p => state.brands.includes(p.brand));
    list = list.filter(p => p.price <= state.priceMax);
    if (state.rating > 0) list = list.filter(p => p.rating >= state.rating);
    if (state.inStockOnly) list = list.filter(p => p.stock > 0);
    if (state.minDiscount > 0) list = list.filter(p => p.discount >= state.minDiscount);

    switch (state.sort) {
      case "price-low": list = [...list].sort((a, b) => a.price - b.price); break;
      case "price-high": list = [...list].sort((a, b) => b.price - a.price); break;
      case "rating": list = [...list].sort((a, b) => b.rating - a.rating); break;
      case "newest": list = [...list].sort((a, b) => b.id - a.id); break;
      case "discount": list = [...list].sort((a, b) => b.discount - a.discount); break;
      case "popularity": list = [...list].sort((a, b) => b.reviewCount - a.reviewCount); break;
      case "bestseller": list = [...list].sort((a, b) => (b.badge === "Bestseller") - (a.badge === "Bestseller") || b.rating - a.rating); break;
      default: break; // relevance = dataset order
    }
    return list;
  }

  function renderChips() {
    const chips = [];
    if (state.category !== "all") chips.push({ key: "category", label: CATEGORIES[state.category]?.label || state.category });
    if (state.sub !== "all") chips.push({ key: "sub", label: state.sub });
    state.brands.forEach(b => chips.push({ key: "brand", label: b, value: b }));
    if (state.rating > 0) chips.push({ key: "rating", label: state.rating + "\u2605 & above" });
    if (state.priceMax < 30000) chips.push({ key: "priceMax", label: "Under " + Utils.formatPrice(state.priceMax) });
    if (state.inStockOnly) chips.push({ key: "inStockOnly", label: "In Stock Only" });
    if (state.minDiscount > 0) chips.push({ key: "minDiscount", label: state.minDiscount + "% off or more" });

    const wrap = Utils.qs("#activeChips");
    if (!wrap) return;
    if (!chips.length) { wrap.innerHTML = ""; wrap.classList.add("hide"); return; }
    wrap.classList.remove("hide");
    wrap.innerHTML = chips.map(c => `<span class="chip" data-chip-key="${c.key}" data-chip-value="${c.value || ""}">${c.label} <button type="button" aria-label="Remove filter"><i data-lucide="x" class="icon-sm"></i></button></span>`).join("")
      + `<button type="button" class="chip" id="clearAllFilters" style="border-style:dashed">Clear All</button>`;
    Utils.refreshIcons();
  }

  function renderBrandFilters(scopedList) {
    const wraps = Utils.qsa(".js-brand-filter-list");
    if (!wraps.length) return;
    const brands = [...new Set(scopedList.map(p => p.brand))].sort();
    const html = brands.map(b => `
      <label class="checkbox-row" style="margin-bottom:8px">
        <input type="checkbox" value="${Utils.escapeHtml(b)}" ${state.brands.includes(b) ? "checked" : ""} data-brand-filter>
        ${Utils.escapeHtml(b)} <span class="text-muted">(${scopedList.filter(p => p.brand === b).length})</span>
      </label>`).join("");
    wraps.forEach(w => w.innerHTML = html);
  }

  function render() {
    const filtered = applyPipeline();
    renderChips();

    const catScoped = state.category !== "all" ? baseSet.filter(p => p.category === state.category) : baseSet;
    renderBrandFilters(catScoped);

    const countEl = Utils.qs("#resultCount");
    if (countEl) countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? "s" : ""}`;

    const titleEl = Utils.qs("#listingTitle");
    if (titleEl) {
      if (state.q) titleEl.textContent = `Results for "${state.q}"`;
      else if (mode === "deals") titleEl.textContent = "Deals & Offers";
      else if (mode === "new") titleEl.textContent = "New Arrivals";
      else if (state.category !== "all") titleEl.textContent = CATEGORIES[state.category]?.label || "Products";
      else titleEl.textContent = "All Products";
    }

    const grid = Utils.qs("#listingGrid");
    const visible = filtered.slice(0, state.page * PAGE_SIZE);

    if (!filtered.length) {
      grid.innerHTML = "";
      Utils.qs("#listingEmpty").classList.remove("hide");
    } else {
      Utils.qs("#listingEmpty").classList.add("hide");
      grid.innerHTML = visible.map(p => renderProductCard(p)).join("");
      Utils.refreshIcons();
    }

    const loadMoreBtn = Utils.qs("#loadMoreBtn");
    if (loadMoreBtn) loadMoreBtn.classList.toggle("hide", visible.length >= filtered.length);

    syncUrl();
  }

  function syncUrl() {
    const params = new URLSearchParams();
    if (state.q) params.set("q", state.q);
    if (state.category !== "all") params.set("category", state.category);
    if (state.sub !== "all") params.set("sub", state.sub);
    if (state.sort !== "relevance") params.set("sort", state.sort);
    const newUrl = window.location.pathname + (params.toString() ? "?" + params.toString() : "");
    window.history.replaceState({}, "", newUrl);
  }

  function readFromUrl() {
    state.q = Utils.getParam("q") || "";
    state.category = Utils.getParam("category") || "all";
    state.sub = Utils.getParam("sub") || "all";
    state.sort = Utils.getParam("sort") || (Utils.getParam("badge") ? "bestseller" : "relevance");
  }

  function wireControls() {
    Utils.qs("#sortSelect")?.addEventListener("change", (e) => { state.sort = e.target.value; state.page = 1; render(); });

    // Delegated listeners so both the desktop sidebar and the cloned mobile
    // sheet (same classes, no unique ids) stay in sync from one code path.
    document.addEventListener("change", (e) => {
      if (e.target.matches(".js-rating-filter")) { state.rating = Number(e.target.value); state.page = 1; render(); }
      if (e.target.matches(".js-discount-filter")) { state.minDiscount = Number(e.target.value); state.page = 1; render(); }
      if (e.target.matches(".js-instock-filter")) { state.inStockOnly = e.target.checked; state.page = 1; render(); }
      if (e.target.matches(".js-price-range")) { state.page = 1; render(); }
      if (e.target.matches("[data-brand-filter]")) {
        const val = e.target.value;
        if (e.target.checked) state.brands.push(val);
        else state.brands = state.brands.filter(b => b !== val);
        state.page = 1;
        render();
      }
    });
    document.addEventListener("input", (e) => {
      if (e.target.matches(".js-price-range")) {
        state.priceMax = Number(e.target.value);
        Utils.qsa(".js-price-range-label").forEach(l => l.textContent = Utils.formatPrice(state.priceMax));
      }
    });

    document.addEventListener("click", (e) => {
      const link = e.target.closest(".category-filter-link");
      if (!link) return;
      e.preventDefault();
      state.category = link.dataset.category;
      state.sub = "all";
      state.brands = [];
      state.page = 1;
      Utils.qsa(".category-filter-link").forEach(l => l.classList.remove("active"));
      Utils.qsa(`.category-filter-link[data-category="${state.category}"]`).forEach(l => l.classList.add("active"));
      render();
    });

    Utils.qs("#loadMoreBtn")?.addEventListener("click", () => { state.page++; render(); });

    Utils.qs("#activeChips")?.addEventListener("click", (e) => {
      if (e.target.closest("#clearAllFilters")) {
        state = { ...state, category: "all", sub: "all", brands: [], priceMax: 30000, rating: 0, inStockOnly: false, minDiscount: 0, page: 1 };
        resetControlsUI();
        render();
        return;
      }
      const chip = e.target.closest("[data-chip-key]");
      if (!chip) return;
      const key = chip.dataset.chipKey;
      if (key === "category") state.category = "all";
      if (key === "sub") state.sub = "all";
      if (key === "brand") state.brands = state.brands.filter(b => b !== chip.dataset.chipValue);
      if (key === "rating") state.rating = 0;
      if (key === "priceMax") state.priceMax = 30000;
      if (key === "inStockOnly") state.inStockOnly = false;
      if (key === "minDiscount") state.minDiscount = 0;
      state.page = 1;
      resetControlsUI();
      render();
    });

    Utils.qs("#mobileFilterOpen")?.addEventListener("click", () => {
      Utils.qs("#filterOverlay").classList.add("show");
      Utils.qs("#filterSheet").classList.add("show");
    });
    Utils.qs("#filterOverlay")?.addEventListener("click", closeMobileFilter);
    Utils.qs("#filterSheetClose")?.addEventListener("click", closeMobileFilter);
    Utils.qs("#filterSheetApply")?.addEventListener("click", closeMobileFilter);
  }

  function closeMobileFilter() {
    Utils.qs("#filterOverlay")?.classList.remove("show");
    Utils.qs("#filterSheet")?.classList.remove("show");
  }

  function resetControlsUI() {
    Utils.qsa(".js-price-range").forEach(el => el.value = state.priceMax);
    Utils.qsa(".js-price-range-label").forEach(l => l.textContent = Utils.formatPrice(state.priceMax));
    Utils.qsa(".js-rating-filter").forEach(el => el.value = state.rating);
    Utils.qsa(".js-instock-filter").forEach(el => el.checked = state.inStockOnly);
    Utils.qsa(".js-discount-filter").forEach(el => el.value = state.minDiscount);
    Utils.qsa("[data-brand-filter]").forEach(cb => cb.checked = state.brands.includes(cb.value));
  }

  function init(pageMode) {
    mode = pageMode || document.body.dataset.mode || "all";
    readFromUrl();
    if (mode === "deals" || mode === "new") state.category = state.category || "all";
    baseSet = baseSetForMode();
    renderSkeletonCards(Utils.qs("#listingGrid"), 8);
    wireControls();
    resetControlsUI();
    setTimeout(render, 260); // brief perceived-load skeleton, per spec
    document.addEventListener("krv:refresh-product-ui", render);
    document.addEventListener("krv:wishlist-ui-change", render);
  }

  return { init, get state() { return state; } };
})();
