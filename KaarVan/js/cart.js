// KAARVAN — cart.js

function renderCartPage() {
  const cart = Store.getCart();
  const wrap = Utils.qs("#cartItemsWrap");
  const empty = Utils.qs("#cartEmptyState");
  const summaryWrap = Utils.qs("#cartSummary");

  if (!cart.length) {
    wrap.innerHTML = "";
    empty.classList.remove("hide");
    summaryWrap.classList.add("hide");
    return;
  }
  empty.classList.add("hide");
  summaryWrap.classList.remove("hide");

  wrap.innerHTML = cart.map(item => {
    const p = Utils.findProduct(item.id);
    if (!p) return "";
    const key = `${p.id}|${item.color || ""}|${item.size || ""}`;
    return `<div class="panel" style="display:flex;gap:16px;margin-bottom:14px" data-cart-key="${key}">
      <a href="product.html?id=${p.id}"><img src="${p.images[0]}" alt="" style="width:96px;height:96px;object-fit:cover;border-radius:var(--radius-sm)" onerror="this.src='https://picsum.photos/seed/fallback${p.id}/200/200'"></a>
      <div style="flex:1;min-width:0">
        <div style="display:flex;justify-content:space-between;gap:10px">
          <div>
            <a href="product.html?id=${p.id}" style="font-weight:700">${Utils.escapeHtml(p.name)}</a>
            <div class="text-muted" style="font-size:0.8rem;margin-top:2px">${p.brand} ${item.color ? " &middot; " + item.color : ""} ${item.size ? " &middot; Size " + item.size : ""}</div>
            <div style="font-size:0.78rem;margin-top:4px;color:${p.stock > 0 ? "var(--success)" : "var(--danger)"}">${p.stock > 0 ? "In Stock" : "Out of Stock"} &middot; ${p.delivery}</div>
          </div>
          <button type="button" class="btn-icon" data-cart-remove="${key}" aria-label="Remove item"><i data-lucide="trash-2" class="icon-sm"></i></button>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:14px;flex-wrap:wrap;gap:10px">
          <div class="pc-qty" style="width:110px">
            <button type="button" data-cart-dec="${key}">\u2212</button>
            <span class="qty-val">${item.qty}</span>
            <button type="button" data-cart-inc="${key}">+</button>
          </div>
          <div>
            <button type="button" class="btn btn-ghost btn-sm" data-move-wishlist="${key}"><i data-lucide="heart" class="icon-sm"></i> Move to Wishlist</button>
          </div>
          <div style="text-align:right">
            <strong style="font-size:1.05rem">${Utils.formatPrice(p.price * item.qty)}</strong>
            ${p.mrp > p.price ? `<div class="text-muted" style="font-size:0.76rem;text-decoration:line-through">${Utils.formatPrice(p.mrp * item.qty)}</div>` : ""}
          </div>
        </div>
      </div>
    </div>`;
  }).join("");

  renderSummary();
  Utils.refreshIcons();
}

function renderSummary() {
  const totals = Cart.calcTotals(Store.getCart());
  const coupon = Store.getCoupon();
  Utils.qs("#cartSummary").innerHTML = `
    <div class="panel" style="position:sticky;top:calc(var(--header-h) + var(--announce-h) + 16px)">
      <h3 style="margin-bottom:16px">Order Summary</h3>
      <div style="margin-bottom:16px">
        <div class="flex gap-2">
          <input type="text" id="couponInput" placeholder="Enter coupon code" value="${coupon || ""}" style="flex:1;padding:10px 12px;border-radius:var(--radius);border:1px solid var(--border);text-transform:uppercase">
          <button type="button" class="btn btn-outline btn-sm" id="applyCouponBtn">Apply</button>
        </div>
        <div id="couponMsg" style="font-size:0.78rem;margin-top:8px"></div>
        <div class="text-muted" style="font-size:0.74rem;margin-top:8px">Try: SAVE10, SAVE20, WELCOME15, FREESHIP</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;font-size:0.88rem;padding:16px 0;border-top:1px dashed var(--border);border-bottom:1px dashed var(--border)">
        <div class="flex justify-between"><span class="text-muted">Subtotal (MRP)</span><span>${Utils.formatPrice(totals.mrpTotal)}</span></div>
        <div class="flex justify-between"><span class="text-muted">Product Discount</span><span style="color:var(--success)">\u2212${Utils.formatPrice(totals.productDiscount)}</span></div>
        ${totals.couponDiscount > 0 ? `<div class="flex justify-between"><span class="text-muted">Coupon Discount</span><span style="color:var(--success)">\u2212${Utils.formatPrice(totals.couponDiscount)}</span></div>` : ""}
        <div class="flex justify-between"><span class="text-muted">Delivery</span><span>${totals.delivery === 0 ? "FREE" : Utils.formatPrice(totals.delivery)}</span></div>
        <div class="flex justify-between"><span class="text-muted">Taxes (5%)</span><span>${Utils.formatPrice(totals.tax)}</span></div>
      </div>
      <div class="flex justify-between" style="padding:16px 0;font-weight:800;font-size:1.2rem"><span>Total</span><span>${Utils.formatPrice(totals.total)}</span></div>
      <a href="checkout.html" class="btn btn-primary btn-block btn-lg">Proceed to Checkout <i data-lucide="arrow-right" class="icon-sm"></i></a>
      <div class="flex items-center gap-2" style="margin-top:14px;justify-content:center;color:var(--muted);font-size:0.76rem"><i data-lucide="shield-check" class="icon-sm"></i> 100% Secure Checkout</div>
    </div>`;
  Utils.refreshIcons();

  Utils.qs("#applyCouponBtn").addEventListener("click", () => {
    const code = Utils.qs("#couponInput").value.trim().toUpperCase();
    const msg = Utils.qs("#couponMsg");
    if (!code) { Store.clearCoupon(); renderSummary(); return; }
    const c = SITE_CONFIG.coupons[code];
    if (!c) { msg.innerHTML = `<span style="color:var(--danger)">Invalid coupon code</span>`; return; }
    const subtotal = Cart.calcTotals(Store.getCart()).subtotal;
    if (subtotal < c.minOrder) { msg.innerHTML = `<span style="color:var(--danger)">Add ${Utils.formatPrice(c.minOrder - subtotal)} more to use this code</span>`; return; }
    Store.setCoupon(code);
    Toast.show(`Coupon ${code} applied \u2014 ${c.desc}`, "success");
    renderSummary();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bootShell("cart");
  renderCartPage();

  document.addEventListener("krv:cart-change", renderCartPage);

  Utils.qs("#cartItemsWrap").addEventListener("click", (e) => {
    const removeBtn = e.target.closest("[data-cart-remove]");
    const incBtn = e.target.closest("[data-cart-inc]");
    const decBtn = e.target.closest("[data-cart-dec]");
    const moveBtn = e.target.closest("[data-move-wishlist]");
    const keyStr = removeBtn?.dataset.cartRemove || incBtn?.dataset.cartInc || decBtn?.dataset.cartDec || moveBtn?.dataset.moveWishlist;
    if (!keyStr) return;
    const [id, color, size] = keyStr.split("|");
    const item = Store.getCart().find(i => i.id == id && (i.color || "") === color && (i.size || "") === size);
    if (!item) return;

    if (removeBtn) { Store.removeFromCart(Number(id), item.color, item.size); Toast.show("Item removed from cart", "info"); }
    if (incBtn) Store.updateCartQty(Number(id), item.color, item.size, item.qty + 1);
    if (decBtn) {
      if (item.qty <= 1) { Store.removeFromCart(Number(id), item.color, item.size); Toast.show("Item removed from cart", "info"); }
      else Store.updateCartQty(Number(id), item.color, item.size, item.qty - 1);
    }
    if (moveBtn) {
      Store.toggleWishlist(Number(id));
      Store.removeFromCart(Number(id), item.color, item.size);
      Toast.show("Moved to wishlist", "success");
    }
    Header.updateCounts();
  });
});
