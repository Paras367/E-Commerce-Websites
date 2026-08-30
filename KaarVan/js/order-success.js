// KAARVAN — order-success.js

document.addEventListener("DOMContentLoaded", () => {
  bootShell("home");
  const orderId = Utils.getParam("order");
  const orders = Store.getOrders();
  const order = orders.find(o => o.id === orderId) || orders[0];

  if (!order) {
    Utils.qs("#successContent").classList.add("hide");
    Utils.qs("#noOrderState").classList.remove("hide");
    return;
  }

  Utils.qs("#orderIdLabel").textContent = order.id;
  Utils.qs("#orderEtaLabel").textContent = new Date(order.eta).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
  Utils.qs("#orderPaymentLabel").textContent = { upi: "UPI", card: "Credit / Debit Card", netbanking: "Net Banking", cod: "Cash on Delivery", wallet: "Wallet" }[order.payment] || order.payment;

  Utils.qs("#orderItemsList").innerHTML = order.items.map(i => `
    <div style="display:flex;gap:10px;align-items:center;padding:8px 0">
      <img src="${i.image}" style="width:48px;height:48px;object-fit:cover;border-radius:6px" onerror="this.style.opacity=0">
      <div style="flex:1;font-size:0.85rem">${Utils.escapeHtml(i.name)} <span class="text-muted">\u00d7${i.qty}</span></div>
      <strong style="font-size:0.85rem">${Utils.formatPrice(i.price * i.qty)}</strong>
    </div>`).join("");

  Utils.qs("#trackOrderLink").href = `orders.html?order=${order.id}`;
});
