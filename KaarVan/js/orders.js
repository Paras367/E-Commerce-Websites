// KAARVAN — orders.js

const STATUS_STEPS = ["Order Placed", "Payment Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered"];

function orderProgress(order) {
  const placedAt = new Date(order.date).getTime();
  const etaAt = new Date(order.eta).getTime();
  const elapsed = Date.now() - placedAt;
  const span = etaAt - placedAt;
  const pct = Utils.clamp(elapsed / span, 0, 1);
  return Utils.clamp(Math.floor(pct * (STATUS_STEPS.length - 1)) + 1, 1, STATUS_STEPS.length);
}

function renderTimeline(order) {
  const currentStep = orderProgress(order);
  return `<div class="panel">
    <h4 style="margin-bottom:20px">Order Tracking</h4>
    ${STATUS_STEPS.map((label, i) => {
      const done = i + 1 < currentStep;
      const active = i + 1 === currentStep;
      return `<div style="display:flex;gap:14px">
        <div style="display:flex;flex-direction:column;align-items:center">
          <div style="width:22px;height:22px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;
            background:${done || active ? "var(--gold)" : "var(--surface-2)"};
            border:2px solid ${done || active ? "var(--gold)" : "var(--border-strong)"};">
            ${done ? '<i data-lucide="check" class="icon-sm" style="width:12px;height:12px;color:#221400"></i>' : ""}
          </div>
          ${i < STATUS_STEPS.length - 1 ? `<div style="width:2px;flex:1;min-height:28px;background:${done ? "var(--gold)" : "var(--border)"}"></div>` : ""}
        </div>
        <div style="padding-bottom:24px">
          <div style="font-weight:${done || active ? "700" : "500"};color:${done || active ? "var(--text)" : "var(--muted)"}">${label}</div>
          ${active ? `<div class="text-muted" style="font-size:0.78rem">In progress</div>` : ""}
        </div>
      </div>`;
    }).join("")}
    <p class="text-muted" style="font-size:0.82rem">Estimated delivery: <strong style="color:var(--text)">${new Date(order.eta).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</strong></p>
  </div>`;
}

function renderOrderCard(order) {
  const currentStep = orderProgress(order);
  const statusLabel = STATUS_STEPS[currentStep - 1];
  return `<div class="panel" style="margin-bottom:16px">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:14px">
      <div>
        <strong>${order.id}</strong>
        <div class="text-muted" style="font-size:0.78rem">Placed on ${new Date(order.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</div>
      </div>
      <span class="chip" style="background:${currentStep === 6 ? "var(--success-bg)" : "var(--gold-light)"};color:${currentStep === 6 ? "var(--success)" : "var(--gold-dark)"};border:none">${statusLabel}</span>
    </div>
    <div style="display:flex;gap:10px;overflow-x:auto;padding-bottom:8px;margin-bottom:12px">
      ${order.items.map(i => `<img src="${i.image}" style="width:52px;height:52px;object-fit:cover;border-radius:8px;flex-shrink:0" onerror="this.style.opacity=0">`).join("")}
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center">
      <strong>${Utils.formatPrice(order.total)}</strong>
      <button type="button" class="btn btn-outline btn-sm" data-track-order="${order.id}">View Tracking</button>
    </div>
    <div class="track-panel hide" id="track-${order.id}" style="margin-top:16px">${renderTimeline(order)}</div>
  </div>`;
}

function renderOrdersPage() {
  const orders = Store.getOrders();
  const wrap = Utils.qs("#ordersList");
  const empty = Utils.qs("#ordersEmpty");
  if (!orders.length) {
    wrap.innerHTML = "";
    empty.classList.remove("hide");
    return;
  }
  empty.classList.add("hide");
  wrap.innerHTML = orders.map(renderOrderCard).join("");
  Utils.refreshIcons();

  const focusId = Utils.getParam("order");
  if (focusId && Utils.qs(`#track-${focusId}`)) {
    Utils.qs(`#track-${focusId}`).classList.remove("hide");
    Utils.qs(`[data-track-order="${focusId}"]`).textContent = "Hide Tracking";
    Utils.qs(`#track-${focusId}`).scrollIntoView({ behavior: "smooth", block: "center" });
  }

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-track-order]");
    if (!btn) return;
    const panel = Utils.qs(`#track-${btn.dataset.trackOrder}`);
    const show = panel.classList.contains("hide");
    panel.classList.toggle("hide");
    btn.textContent = show ? "Hide Tracking" : "View Tracking";
    Utils.refreshIcons();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bootShell("home");
  renderOrdersPage();
});
