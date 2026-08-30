// KAARVAN — product.js

const MOCK_REVIEWS_POOL = [
  { name: "Ananya R.", text: "Quality feels premium for the price. Delivery was quick too, arrived a day early." },
  { name: "Rohit Malhotra", text: "Exactly as described. Been using it for three weeks now, holding up well." },
  { name: "Priya S.", text: "Good product but packaging could be sturdier. The item itself is solid." },
  { name: "Vikram Nair", text: "Second time ordering from KAARVAN, consistent quality across both orders." },
  { name: "Sneha Kulkarni", text: "Worth every rupee. Would recommend to anyone on the fence about buying this." },
  { name: "Arjun Desai", text: "Took a star off for the size running slightly different from what I expected." },
  { name: "Meera Iyer", text: "Customer support was helpful when I had a question about care instructions." },
  { name: "Kabir Singh", text: "This is my second purchase of this exact item, that should say enough." },
];

function generateReviews(product) {
  const count = 6;
  const reviews = [];
  for (let i = 0; i < count; i++) {
    const base = MOCK_REVIEWS_POOL[(product.id + i) % MOCK_REVIEWS_POOL.length];
    const daysAgo = (i + 1) * 9 + product.id;
    const rating = Utils.clamp(Math.round(product.rating) + (i % 3 === 0 ? -1 : 0), 3, 5);
    reviews.push({
      ...base, rating,
      date: new Date(Date.now() - daysAgo * 86400000).toISOString(),
      verified: i % 4 !== 3,
      helpful: (product.id * 3 + i * 7) % 40,
      id: `${product.id}-${i}`
    });
  }
  return reviews;
}

function ratingDistribution(rating) {
  // Derive a plausible distribution centred on the product rating.
  const base = Math.round(rating);
  const dist = { 5: 8, 4: 8, 3: 8, 2: 8, 1: 8 };
  dist[base] = 55;
  dist[Math.min(5, base + 1)] += 12;
  const total = Object.values(dist).reduce((a, b) => a + b, 0);
  const pct = {};
  [5, 4, 3, 2, 1].forEach(k => pct[k] = Math.round((dist[k] / total) * 100));
  return pct;
}

function renderGallery(p) {
  const main = Utils.qs("#galleryMain");
  const thumbs = Utils.qs("#galleryThumbs");
  let activeIdx = 0;
  function show(i) {
    activeIdx = i;
    main.src = p.images[i];
    Utils.qsa(".gallery-thumb", thumbs).forEach((t, idx) => t.classList.toggle("active", idx === i));
  }
  main.onerror = () => { main.src = `https://picsum.photos/seed/fallback${p.id}/800/800`; };
  thumbs.innerHTML = p.images.map((img, i) =>
    `<button type="button" class="gallery-thumb ${i === 0 ? "active" : ""}" data-idx="${i}"><img src="${img}" alt="View ${i+1}" onerror="this.src='https://picsum.photos/seed/fallback${p.id}-${i}/200/200'"></button>`).join("");
  thumbs.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-idx]");
    if (btn) show(Number(btn.dataset.idx));
  });
  show(0);

  Utils.qs("#galleryPrev")?.addEventListener("click", () => show((activeIdx - 1 + p.images.length) % p.images.length));
  Utils.qs("#galleryNext")?.addEventListener("click", () => show((activeIdx + 1) % p.images.length));
  Utils.qs("#galleryZoom")?.addEventListener("click", () => {
    Utils.qs("#zoomModal").classList.add("show");
    Utils.qs("#zoomImg").src = p.images[activeIdx];
    document.body.style.overflow = "hidden";
  });
}

function renderBuyBox(p) {
  const wrap = Utils.qs("#buyBox");
  const wished = Store.isWishlisted(p.id);
  wrap.innerHTML = `
    <span class="pc-brand">${Utils.escapeHtml(p.brand)}</span>
    <h1 style="font-size:1.5rem;margin:6px 0 10px">${Utils.escapeHtml(p.name)}</h1>
    <div class="flex items-center gap-3" style="margin-bottom:16px">
      ${Utils.starIcons(p.rating)}
      <span style="font-weight:700">${p.rating}</span>
      <a href="#reviewsSection" class="text-muted" style="font-size:0.85rem;text-decoration:underline">${p.reviewCount.toLocaleString("en-IN")} ratings</a>
      <span class="chip" style="padding:3px 9px;font-size:0.7rem;${p.stock > 0 ? "" : "color:var(--danger);border-color:var(--danger)"}">${p.stock > 0 ? (p.stock <= 6 ? `Only ${p.stock} left` : "In Stock") : "Out of Stock"}</span>
    </div>
    <div class="pc-price-row" style="margin-bottom:6px">
      <span class="pc-price" style="font-size:2rem">${Utils.formatPrice(p.price)}</span>
      ${p.mrp > p.price ? `<span class="pc-mrp" style="font-size:1rem">${Utils.formatPrice(p.mrp)}</span><span class="pc-off" style="font-size:0.9rem">${p.discount}% off</span>` : ""}
    </div>
    <p class="text-muted" style="font-size:0.8rem;margin-bottom:18px">Inclusive of all taxes &middot; EMI from ${Utils.formatPrice(Math.round(p.price / 6))}/month</p>

    ${p.colors ? `<div style="margin-bottom:16px">
      <h5 style="font-size:0.8rem;margin-bottom:8px">Colour: <span id="selColorLabel" style="font-weight:400;color:var(--muted)">${p.colors[0]}</span></h5>
      <div class="flex gap-2" id="colorOptions">
        ${p.colors.map((c, i) => `<button type="button" class="chip ${i === 0 ? "active" : ""}" data-color="${Utils.escapeHtml(c)}" style="${i === 0 ? "border-color:var(--gold);background:var(--gold-light)" : ""}">${Utils.escapeHtml(c)}</button>`).join("")}
      </div>
    </div>` : ""}

    ${p.sizes ? `<div style="margin-bottom:16px">
      <h5 style="font-size:0.8rem;margin-bottom:8px">Size</h5>
      <div class="flex gap-2" id="sizeOptions" style="flex-wrap:wrap">
        ${p.sizes.map((s, i) => `<button type="button" class="chip ${i === 0 ? "active" : ""}" data-size="${Utils.escapeHtml(s)}" style="${i === 0 ? "border-color:var(--gold);background:var(--gold-light)" : ""}">${Utils.escapeHtml(s)}</button>`).join("")}
      </div>
    </div>` : ""}

    <div style="margin-bottom:18px">
      <h5 style="font-size:0.8rem;margin-bottom:8px">Quantity</h5>
      <div class="pc-qty" style="width:120px">
        <button type="button" id="pdQtyDec">\u2212</button>
        <span class="qty-val" id="pdQtyVal">1</span>
        <button type="button" id="pdQtyInc">+</button>
      </div>
    </div>

    <div class="flex gap-3" style="margin-bottom:20px">
      <button type="button" class="btn btn-outline btn-lg" style="flex:1" id="pdAddCart" ${p.stock === 0 ? "disabled" : ""}><i data-lucide="shopping-cart" class="icon-sm"></i> Add to Cart</button>
      <button type="button" class="btn btn-gold btn-lg" style="flex:1" id="pdBuyNow" ${p.stock === 0 ? "disabled" : ""}><i data-lucide="zap" class="icon-sm"></i> Buy Now</button>
      <button type="button" class="btn-icon ${wished ? "is-active" : ""}" data-wishlist-toggle="${p.id}" aria-label="Wishlist" style="width:50px;height:50px"><i data-lucide="heart" class="icon"></i></button>
      <button type="button" class="btn-icon ${Store.isComparing(p.id) ? "is-active" : ""}" data-compare-toggle="${p.id}" aria-label="Add to compare" style="width:50px;height:50px"><i data-lucide="git-compare" class="icon"></i></button>
      <button type="button" class="btn-icon" id="pdShare" aria-label="Share" style="width:50px;height:50px"><i data-lucide="share-2" class="icon"></i></button>
    </div>

    <div class="panel" style="padding:16px;margin-bottom:16px">
      <h5 style="font-size:0.82rem;margin-bottom:10px">Check Delivery</h5>
      <div class="flex gap-2">
        <input type="text" id="pincodeInput" placeholder="Enter 6-digit pincode" maxlength="6" style="flex:1;padding:10px 12px;border-radius:var(--radius);border:1px solid var(--border)">
        <button type="button" class="btn btn-outline btn-sm" id="pincodeCheckBtn">Check</button>
      </div>
      <div id="pincodeResult" style="margin-top:10px;font-size:0.82rem"></div>
    </div>

    <div class="panel" style="padding:16px">
      <h5 style="font-size:0.82rem;margin-bottom:10px"><i data-lucide="tag" class="icon-sm" style="vertical-align:-2px"></i> Available Offers</h5>
      <ul style="font-size:0.82rem;color:var(--muted);display:flex;flex-direction:column;gap:8px;padding-left:18px;list-style:disc">
        <li>10% instant discount on select bank cards</li>
        <li>${p.price >= SITE_CONFIG.freeDeliveryThreshold ? "Free delivery on this order" : `Free delivery on orders above ${Utils.formatPrice(SITE_CONFIG.freeDeliveryThreshold)}`}</li>
        <li>Extra 5% off on prepaid orders</li>
        <li>Use code <strong>WELCOME15</strong> \u2014 15% off for new customers</li>
      </ul>
    </div>`;
  Utils.refreshIcons();
}

function wireBuyBox(p) {
  let selectedColor = p.colors ? p.colors[0] : null;
  let selectedSize = p.sizes ? p.sizes[0] : null;
  let qty = 1;

  Utils.qs("#colorOptions")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-color]");
    if (!btn) return;
    selectedColor = btn.dataset.color;
    Utils.qsa("#colorOptions .chip").forEach(c => { c.classList.remove("active"); c.style.borderColor = ""; c.style.background = ""; });
    btn.classList.add("active"); btn.style.borderColor = "var(--gold)"; btn.style.background = "var(--gold-light)";
    Utils.qs("#selColorLabel").textContent = selectedColor;
  });
  Utils.qs("#sizeOptions")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-size]");
    if (!btn) return;
    selectedSize = btn.dataset.size;
    Utils.qsa("#sizeOptions .chip").forEach(c => { c.classList.remove("active"); c.style.borderColor = ""; c.style.background = ""; });
    btn.classList.add("active"); btn.style.borderColor = "var(--gold)"; btn.style.background = "var(--gold-light)";
  });

  Utils.qs("#pdQtyInc")?.addEventListener("click", () => { qty = Utils.clamp(qty + 1, 1, Math.min(10, p.stock)); Utils.qs("#pdQtyVal").textContent = qty; });
  Utils.qs("#pdQtyDec")?.addEventListener("click", () => { qty = Utils.clamp(qty - 1, 1, 10); Utils.qs("#pdQtyVal").textContent = qty; });

  Utils.qs("#pdAddCart")?.addEventListener("click", () => {
    if (p.sizes && !selectedSize) { Toast.show("Please select a size", "error"); return; }
    Store.addToCart(p.id, { color: selectedColor, size: selectedSize, qty });
    Toast.show(`${p.name} added to cart`, "success");
    refreshAllProductUI();
    Cart.openDrawer();
  });
  Utils.qs("#pdBuyNow")?.addEventListener("click", () => {
    if (p.sizes && !selectedSize) { Toast.show("Please select a size", "error"); return; }
    Store.addToCart(p.id, { color: selectedColor, size: selectedSize, qty });
    refreshAllProductUI();
    window.location.href = "checkout.html";
  });
  Utils.qs("#pdShare")?.addEventListener("click", async () => {
    const shareData = { title: p.name, text: `Check out ${p.name} on KAARVAN`, url: window.location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (e) { /* user cancelled */ }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        Toast.show("Product link copied to clipboard", "success");
      } catch (e) { Toast.show("Could not copy link", "error"); }
    }
  });
  Utils.qs("#pincodeCheckBtn")?.addEventListener("click", () => {
    const val = Utils.qs("#pincodeInput").value;
    const resultEl = Utils.qs("#pincodeResult");
    if (!Utils.pincodeValid(val)) {
      resultEl.innerHTML = `<span style="color:var(--danger)"><i data-lucide="alert-circle" class="icon-sm" style="vertical-align:-2px"></i> Please enter a valid 6-digit pincode.</span>`;
    } else {
      const days = 2 + (Number(val[val.length - 1]) % 4);
      const eta = new Date(Date.now() + days * 86400000).toLocaleDateString("en-IN", { day: "numeric", month: "short" });
      resultEl.innerHTML = `<span style="color:var(--success)"><i data-lucide="check-circle" class="icon-sm" style="vertical-align:-2px"></i> Delivery available \u2014 estimated by <strong>${eta}</strong></span><br><span class="text-muted">Free returns within 7 days of delivery.</span>`;
    }
    Utils.refreshIcons();
  });
}

function renderInfoTabs(p) {
  Utils.qs("#tabHighlights").innerHTML = `<ul style="padding-left:20px;list-style:disc;display:flex;flex-direction:column;gap:10px">${p.highlights.map(h => `<li>${Utils.escapeHtml(h)}</li>`).join("")}</ul>`;
  Utils.qs("#tabDescription").innerHTML = `<p style="line-height:1.75">${Utils.escapeHtml(p.description)}</p>`;
  Utils.qs("#tabSpecs").innerHTML = `<table style="width:100%;border-collapse:collapse">
    ${Object.entries(p.specifications).map(([k, v]) => `<tr style="border-bottom:1px solid var(--border)"><td style="padding:10px 0;color:var(--muted);width:40%">${k}</td><td style="padding:10px 0;font-weight:600">${v}</td></tr>`).join("")}
  </table>`;
}

function renderReviews(p) {
  const reviews = generateReviews(p);
  const dist = ratingDistribution(p.rating);
  Utils.qs("#reviewSummary").innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px">
      <div style="font-family:var(--font-display);font-weight:800;font-size:2.4rem">${p.rating}</div>
      <div>
        ${Utils.starIcons(p.rating)}
        <div class="text-muted" style="font-size:0.8rem;margin-top:2px">${p.reviewCount.toLocaleString("en-IN")} ratings</div>
      </div>
    </div>
    ${[5,4,3,2,1].map(star => `<div style="display:flex;align-items:center;gap:8px;font-size:0.78rem;margin-bottom:6px">
      <span style="width:40px">${star} \u2605</span>
      <div class="progress-track" style="flex:1"><div class="progress-fill" style="width:${dist[star]}%"></div></div>
      <span style="width:32px;text-align:right;color:var(--muted)">${dist[star]}%</span>
    </div>`).join("")}`;

  const list = Utils.qs("#reviewsList");
  function paint(sortMode) {
    let sorted = [...reviews];
    if (sortMode === "recent") sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sortMode === "helpful") sorted.sort((a, b) => b.helpful - a.helpful);
    if (sortMode === "high") sorted.sort((a, b) => b.rating - a.rating);
    if (sortMode === "low") sorted.sort((a, b) => a.rating - b.rating);
    list.innerHTML = sorted.map(r => `
      <div style="padding:20px 0;border-bottom:1px solid var(--border)">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <span class="chip" style="background:var(--success-bg);color:var(--success);border:none;padding:3px 8px;font-size:0.68rem">${r.rating} \u2605</span>
          <strong style="font-size:0.85rem">${Utils.escapeHtml(r.name)}</strong>
          ${r.verified ? `<span class="text-muted" style="font-size:0.72rem"><i data-lucide="badge-check" class="icon-sm" style="width:12px;height:12px;vertical-align:-2px"></i> Verified Purchase</span>` : ""}
          <span class="text-muted" style="font-size:0.72rem;margin-left:auto">${Utils.timeAgo(r.date)}</span>
        </div>
        <p style="font-size:0.88rem;margin-bottom:10px">${Utils.escapeHtml(r.text)}</p>
        <button type="button" class="btn btn-ghost btn-sm" data-helpful="${r.id}" style="padding:4px 10px"><i data-lucide="thumbs-up" class="icon-sm"></i> Helpful (<span class="helpful-count">${r.helpful}</span>)</button>
      </div>`).join("");
    Utils.refreshIcons();
  }
  paint("recent");
  Utils.qs("#reviewSort").addEventListener("change", (e) => paint(e.target.value));
  list.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-helpful]");
    if (!btn) return;
    if (btn.classList.contains("is-marked")) return;
    btn.classList.add("is-marked");
    const countEl = Utils.qs(".helpful-count", btn);
    countEl.textContent = Number(countEl.textContent) + 1;
    btn.style.color = "var(--gold-dark)";
  });
}

function renderRecommendations(p) {
  const similar = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 8);
  renderProductGrid(similar, Utils.qs("#similarRail"), "compact");

  const fbt = PRODUCTS.filter(x => x.subcategory === p.subcategory && x.id !== p.id).slice(0, 3);
  Utils.qs("#fbtGrid").innerHTML = [p, ...fbt].map((x, i) => `
    <div style="text-align:center">
      <img src="${x.images[0]}" style="width:90px;height:90px;object-fit:cover;border-radius:10px;border:1px solid var(--border)" onerror="this.src='https://picsum.photos/seed/fallback${x.id}/200/200'">
      <div style="font-size:0.7rem;margin-top:6px;max-width:100px">${Utils.escapeHtml(x.name.split(" ").slice(0,3).join(" "))}</div>
      <div style="font-size:0.76rem;font-weight:700">${Utils.formatPrice(x.price)}</div>
    </div>
    ${i < fbt.length ? `<div style="align-self:center;color:var(--muted);font-size:1.3rem">+</div>` : ""}`).join("");
  const fbtTotal = [p, ...fbt].reduce((s, x) => s + x.price, 0);
  Utils.qs("#fbtTotal").textContent = Utils.formatPrice(fbtTotal);
  Utils.qs("#fbtAddAll")?.addEventListener("click", () => {
    [p, ...fbt].forEach(x => Store.addToCart(x.id));
    Toast.show("Added all items to cart", "success");
    refreshAllProductUI();
  });

  const recentIds = Store.getRecentlyViewed().filter(id => id !== p.id);
  const recentProducts = recentIds.map(id => Utils.findProduct(id)).filter(Boolean).slice(0, 8);
  const recentSection = Utils.qs("#recentlyViewedSection");
  if (recentProducts.length) {
    recentSection.classList.remove("hide");
    renderProductGrid(recentProducts, Utils.qs("#recentlyViewedRail"), "compact");
  } else {
    recentSection.classList.add("hide");
  }
}

function initProductPage() {
  const id = Utils.getParam("id");
  const p = Utils.findProduct(id);
  const notFound = Utils.qs("#productNotFound");

  if (!p) {
    Utils.qs("#productContent").classList.add("hide");
    notFound.classList.remove("hide");
    return;
  }

  document.title = `${p.name} — KAARVAN`;
  Utils.qs("#metaDescription")?.setAttribute("content", p.description.slice(0, 155));
  Utils.qs("#breadcrumbCategory").textContent = CATEGORIES[p.category].label;
  Utils.qs("#breadcrumbCategory").href = `products.html?category=${p.category}`;
  Utils.qs("#breadcrumbName").textContent = p.name;

  Store.addRecentlyViewed(p.id);

  renderGallery(p);
  renderBuyBox(p);
  wireBuyBox(p);
  renderInfoTabs(p);
  renderReviews(p);
  renderRecommendations(p);
  initTabs();
  initAccordions();

  document.addEventListener("krv:refresh-product-ui", () => renderBuyBox(p) || wireBuyBox(p));
  document.addEventListener("krv:wishlist-ui-change", () => renderBuyBox(p) || wireBuyBox(p));

  Utils.qs("#zoomClose")?.addEventListener("click", () => {
    Utils.qs("#zoomModal").classList.remove("show");
    document.body.style.overflow = "";
  });
  Utils.qs("#zoomModal")?.addEventListener("click", (e) => {
    if (e.target.id === "zoomModal") { e.currentTarget.classList.remove("show"); document.body.style.overflow = ""; }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bootShell("categories");
  initProductPage();
});
