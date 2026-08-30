// KAARVAN — product-card.js
// renderProductCard() is the single source of truth for how a product looks
// anywhere in the app: grids, rails, search suggestions, recommendations.

function badgeClass(badge) {
  if (!badge) return "";
  return badge.toLowerCase().replace(/\s+/g, "-").replace("stock", "").trim();
}

function renderProductCard(p, variant = "standard") {
  const wished = Store.isWishlisted(p.id);
  const cart = Store.getCart();
  const cartItem = cart.find(i => i.id === p.id);
  const inStock = p.stock > 0;
  const lowStock = p.stock > 0 && p.stock <= 6;
  const cls = variant === "compact" ? "product-card compact" : variant === "horizontal" ? "product-card horizontal" : "product-card";

  const badgeCls = badgeClass(p.badge);
  const stockPct = inStock ? Utils.clamp(100 - (p.stock / 250) * 100, 8, 96) : 100;

  return `
  <article class="${cls}" data-product-id="${p.id}">
    <a href="product.html?id=${p.id}" class="pc-media" aria-label="${Utils.escapeHtml(p.name)}">
      ${p.badge ? `<span class="pc-badge ${badgeCls}">${p.badge}</span>` : ""}
      ${p.discount > 0 ? `<span class="pc-discount">${p.discount}% OFF</span>` : ""}
      <img class="img-a" src="${p.images[0]}" alt="${Utils.escapeHtml(p.name)}" loading="lazy" onerror="this.src='https://picsum.photos/seed/fallback${p.id}/700/700'">
      <img class="img-b" src="${p.images[1] || p.images[0]}" alt="" loading="lazy" onerror="this.style.display='none'">
      ${!inStock ? `<div class="pc-stock-bar"><span style="width:100%;background:var(--muted)"></span></div>` : lowStock ? `<div class="pc-stock-bar"><span style="width:${stockPct}%"></span></div>` : ""}
      <div class="pc-quick-actions">
        <button type="button" class="pc-quick-btn" data-quick-view="${p.id}"><i data-lucide="eye" class="icon-sm"></i> Quick View</button>
      </div>
    </a>
    <button type="button" class="pc-wishlist ${wished ? "is-active" : ""}" data-wishlist-toggle="${p.id}" aria-label="${wished ? "Remove from wishlist" : "Add to wishlist"}">
      <i data-lucide="heart" class="icon-sm"></i>
    </button>
    <div class="pc-body">
      <span class="pc-brand">${Utils.escapeHtml(p.brand)}</span>
      <a href="product.html?id=${p.id}"><h4 class="pc-name">${Utils.escapeHtml(p.name)}</h4></a>
      <div class="pc-rating">
        <span class="stars">${p.rating} <i data-lucide="star" class="icon-sm" style="width:9px;height:9px"></i></span>
        <span class="count">(${p.reviewCount.toLocaleString("en-IN")})</span>
      </div>
      <div class="pc-price-row">
        <span class="pc-price">${Utils.formatPrice(p.price)}</span>
        ${p.mrp > p.price ? `<span class="pc-mrp">${Utils.formatPrice(p.mrp)}</span><span class="pc-off">${p.discount}% off</span>` : ""}
      </div>
      <span class="pc-delivery"><i data-lucide="truck" class="icon-sm" style="width:12px;height:12px"></i> ${p.delivery}</span>
      ${!inStock ? `<button class="pc-add" disabled>Out of Stock</button>`
        : cartItem
          ? `<div class="pc-qty">
               <button type="button" data-qty-dec="${p.id}" aria-label="Decrease quantity">\u2212</button>
               <span class="qty-val">${cartItem.qty}</span>
               <button type="button" data-qty-inc="${p.id}" aria-label="Increase quantity">+</button>
             </div>`
          : `<button type="button" class="pc-add" data-add-cart="${p.id}"><i data-lucide="shopping-cart" class="icon-sm"></i> Add to Cart</button>`}
    </div>
  </article>`;
}

function renderProductGrid(products, containerEl, variant = "standard") {
  if (!containerEl) return;
  if (!products.length) {
    containerEl.innerHTML = "";
    return;
  }
  containerEl.innerHTML = products.map(p => renderProductCard(p, variant)).join("");
  Utils.refreshIcons();
}

function renderSkeletonCards(containerEl, count = 8) {
  if (!containerEl) return;
  let html = "";
  for (let i = 0; i < count; i++) {
    html += `<div class="skeleton-card">
      <div class="skeleton sk-media"></div>
      <div class="sk-body">
        <div class="skeleton sk-line w40"></div>
        <div class="skeleton sk-line w60"></div>
        <div class="skeleton sk-line" style="height:22px"></div>
      </div>
    </div>`;
  }
  containerEl.innerHTML = html;
}

// Delegate click handling for add/qty/wishlist/quickview across any grid.
document.addEventListener("click", (e) => {
  const addBtn = e.target.closest("[data-add-cart]");
  if (addBtn) {
    e.preventDefault();
    const id = Number(addBtn.dataset.addCart);
    const product = Utils.findProduct(id);
    Store.addToCart(id);
    addBtn.classList.add("added-flash");
    Toast.show(`${product.name} added to cart`, "success");
    refreshAllProductUI();
    Cart.openDrawer();
    return;
  }
  const incBtn = e.target.closest("[data-qty-inc]");
  if (incBtn) {
    e.preventDefault();
    const id = Number(incBtn.dataset.qtyInc);
    const item = Store.getCart().find(i => i.id === id);
    Store.updateCartQty(id, item.color, item.size, item.qty + 1);
    refreshAllProductUI();
    return;
  }
  const decBtn = e.target.closest("[data-qty-dec]");
  if (decBtn) {
    e.preventDefault();
    const id = Number(decBtn.dataset.qtyDec);
    const item = Store.getCart().find(i => i.id === id);
    if (item.qty <= 1) {
      Store.removeFromCart(id, item.color, item.size);
      Toast.show("Removed from cart", "info");
    } else {
      Store.updateCartQty(id, item.color, item.size, item.qty - 1);
    }
    refreshAllProductUI();
    return;
  }
  const wishBtn = e.target.closest("[data-wishlist-toggle]");
  if (wishBtn) {
    e.preventDefault();
    const id = Number(wishBtn.dataset.wishlistToggle);
    const product = Utils.findProduct(id);
    const nowWished = Store.toggleWishlist(id);
    wishBtn.classList.toggle("is-active", nowWished);
    wishBtn.classList.add("pop");
    setTimeout(() => wishBtn.classList.remove("pop"), 420);
    Toast.show(nowWished ? `${product.name} added to wishlist` : "Removed from wishlist", nowWished ? "success" : "info");
    document.dispatchEvent(new CustomEvent("krv:wishlist-ui-change"));
    return;
  }
  const compareBtn = e.target.closest("[data-compare-toggle]");
  if (compareBtn) {
    e.preventDefault();
    const id = Number(compareBtn.dataset.compareToggle);
    const result = Store.toggleCompare(id);
    if (result.limitReached) {
      Toast.show("You can compare up to 4 products at a time", "error");
    } else {
      compareBtn.classList.toggle("is-active", result.added);
      Toast.show(result.added ? "Added to compare" : "Removed from compare", result.added ? "success" : "info");
    }
    return;
  }
  const qvBtn = e.target.closest("[data-quick-view]");
  if (qvBtn) {
    e.preventDefault();
    QuickView.open(Number(qvBtn.dataset.quickView));
  }
});

// Re-render every product grid currently on the page so add/remove/qty stays in sync everywhere.
function refreshAllProductUI() {
  document.dispatchEvent(new CustomEvent("krv:refresh-product-ui"));
  Header.updateCounts();
}
