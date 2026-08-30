// KAARVAN — compare.js

function allSpecKeys(products) {
  const keys = [];
  products.forEach(p => Object.keys(p.specifications).forEach(k => { if (!keys.includes(k)) keys.push(k); }));
  return keys;
}

function renderComparePage() {
  const ids = Store.getCompare();
  const products = ids.map(id => Utils.findProduct(id)).filter(Boolean);
  const wrap = Utils.qs("#compareWrap");
  const empty = Utils.qs("#compareEmpty");

  if (!products.length) {
    wrap.innerHTML = "";
    empty.classList.remove("hide");
    return;
  }
  empty.classList.add("hide");

  const keys = allSpecKeys(products);

  wrap.innerHTML = `
  <div style="overflow-x:auto">
  <table class="compare-table" style="width:100%;border-collapse:collapse;min-width:${products.length * 220}px">
    <thead>
      <tr>
        <td style="width:140px"></td>
        ${products.map(p => `<td style="padding:14px;text-align:center;border-bottom:1px solid var(--border)">
          <button type="button" class="btn-icon" style="float:right" data-remove-compare="${p.id}" aria-label="Remove"><i data-lucide="x" class="icon-sm"></i></button>
          <a href="product.html?id=${p.id}"><img src="${p.images[0]}" style="width:100px;height:100px;object-fit:cover;border-radius:var(--radius-sm);margin:0 auto 10px" onerror="this.src='https://picsum.photos/seed/fallback${p.id}/200/200'"></a>
          <div style="font-weight:700;font-size:0.85rem">${Utils.escapeHtml(p.name)}</div>
        </td>`).join("")}
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding:12px 14px;color:var(--muted);font-weight:600">Price</td>${products.map(p => `<td style="text-align:center;padding:12px;border-bottom:1px solid var(--border)"><strong>${Utils.formatPrice(p.price)}</strong></td>`).join("")}</tr>
      <tr><td style="padding:12px 14px;color:var(--muted);font-weight:600">Rating</td>${products.map(p => `<td style="text-align:center;padding:12px;border-bottom:1px solid var(--border)">${p.rating} \u2605 (${p.reviewCount})</td>`).join("")}</tr>
      <tr><td style="padding:12px 14px;color:var(--muted);font-weight:600">Brand</td>${products.map(p => `<td style="text-align:center;padding:12px;border-bottom:1px solid var(--border)">${p.brand}</td>`).join("")}</tr>
      <tr><td style="padding:12px 14px;color:var(--muted);font-weight:600">Availability</td>${products.map(p => `<td style="text-align:center;padding:12px;border-bottom:1px solid var(--border);color:${p.stock > 0 ? "var(--success)" : "var(--danger)"}">${p.stock > 0 ? "In Stock" : "Out of Stock"}</td>`).join("")}</tr>
      ${keys.map(k => `<tr><td style="padding:12px 14px;color:var(--muted);font-weight:600">${k}</td>${products.map(p => `<td style="text-align:center;padding:12px;border-bottom:1px solid var(--border)">${p.specifications[k] || "\u2014"}</td>`).join("")}</tr>`).join("")}
      <tr><td></td>${products.map(p => `<td style="text-align:center;padding:14px"><button type="button" class="btn btn-primary btn-sm" data-add-cart="${p.id}">Add to Cart</button></td>`).join("")}</tr>
    </tbody>
  </table>
  </div>
  <button type="button" class="btn btn-outline btn-sm mt-4" id="clearCompareBtn">Clear All</button>`;
  Utils.refreshIcons();

  Utils.qs("#clearCompareBtn").addEventListener("click", () => { Store.clearCompare(); renderComparePage(); });
  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-remove-compare]");
    if (btn) { Store.toggleCompare(Number(btn.dataset.removeCompare)); renderComparePage(); }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bootShell("compare");
  renderComparePage();
  document.addEventListener("krv:compare-change", renderComparePage);
});
