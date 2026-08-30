// KAARVAN — checkout.js

const Checkout = (() => {
  let step = 1;
  let selectedAddress = null;
  let deliveryOption = "standard";
  let paymentMethod = "upi";

  function totals() { return Cart.calcTotals(Store.getCart()); }

  function goToStep(n) {
    step = n;
    Utils.qsa(".checkout-step").forEach((el, i) => el.classList.toggle("active", i === n - 1));
    Utils.qsa(".step-indicator .step-dot").forEach((el, i) => {
      el.classList.toggle("done", i < n - 1);
      el.classList.toggle("active", i === n - 1);
    });
    if (n === 4) renderReview();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderAddressList() {
    const list = Store.getAddresses();
    const wrap = Utils.qs("#savedAddresses");
    if (!list.length) { wrap.innerHTML = `<p class="text-muted" style="font-size:0.85rem;margin-bottom:14px">No saved addresses yet — add one below.</p>`; return; }
    wrap.innerHTML = list.map((a, i) => `
      <label class="panel" style="display:flex;gap:12px;margin-bottom:10px;cursor:pointer;padding:14px">
        <input type="radio" name="savedAddr" value="${a.id}" ${i === 0 ? "checked" : ""} style="margin-top:3px;accent-color:var(--gold)">
        <div>
          <strong>${Utils.escapeHtml(a.name)}</strong> <span class="chip" style="padding:2px 8px;font-size:0.65rem">${a.type}</span>
          <div class="text-muted" style="font-size:0.82rem;margin-top:4px">${Utils.escapeHtml(a.address)}, ${Utils.escapeHtml(a.city)}, ${a.state} \u2014 ${a.pincode}</div>
          <div class="text-muted" style="font-size:0.82rem">Phone: ${a.phone}</div>
        </div>
      </label>`).join("");
    if (list[0]) selectedAddress = list[0];
    wrap.addEventListener("change", (e) => {
      if (e.target.name === "savedAddr") selectedAddress = list.find(a => a.id === e.target.value);
    });
  }

  function validateAddressForm() {
    let valid = true;
    const fields = [
      { id: "addrName", test: v => v.trim().length > 2, msg: "Please enter your full name" },
      { id: "addrPhone", test: Utils.phoneValid, msg: "Enter a valid 10-digit mobile number" },
      { id: "addrLine", test: v => v.trim().length > 5, msg: "Please enter your full address" },
      { id: "addrCity", test: v => v.trim().length > 1, msg: "Please enter your city" },
      { id: "addrState", test: v => v.trim().length > 1, msg: "Please select your state" },
      { id: "addrPincode", test: Utils.pincodeValid, msg: "Enter a valid 6-digit pincode" },
    ];
    fields.forEach(f => {
      const input = Utils.qs("#" + f.id);
      const field = input.closest(".form-field");
      const ok = f.test(input.value);
      field.classList.toggle("has-error", !ok);
      const err = Utils.qs(".form-error-msg", field);
      if (err) { err.textContent = f.msg; err.classList.toggle("show", !ok); }
      if (!ok) valid = false;
    });
    return valid;
  }

  function wireAddressStep() {
    renderAddressList();
    Utils.qs("#addNewAddrToggle").addEventListener("click", () => {
      Utils.qs("#newAddrForm").classList.toggle("hide");
    });
    Utils.qs("#saveAddrBtn").addEventListener("click", () => {
      if (!validateAddressForm()) { Toast.show("Please fix the highlighted fields", "error"); return; }
      const addr = {
        name: Utils.qs("#addrName").value, phone: Utils.qs("#addrPhone").value,
        address: Utils.qs("#addrLine").value, city: Utils.qs("#addrCity").value,
        state: Utils.qs("#addrState").value, pincode: Utils.qs("#addrPincode").value,
        type: Utils.qs("#addrType").value
      };
      selectedAddress = Store.addAddress(addr);
      Toast.show("Address saved", "success");
      Utils.qs("#newAddrForm").classList.add("hide");
      renderAddressList();
    });
    Utils.qs("#toStep2").addEventListener("click", () => {
      if (!selectedAddress) { Toast.show("Please add or select a delivery address", "error"); return; }
      goToStep(2);
    });
  }

  function wireDeliveryStep() {
    Utils.qsa('input[name="deliveryOpt"]').forEach(r => r.addEventListener("change", (e) => {
      deliveryOption = e.target.value;
      updateDeliverySummary();
    }));
    updateDeliverySummary();
    Utils.qs("#backToStep1").addEventListener("click", () => goToStep(1));
    Utils.qs("#toStep3").addEventListener("click", () => goToStep(3));
  }

  function updateDeliverySummary() {
    const t = totals();
    const expressFee = 129;
    const el = Utils.qs("#deliveryFeeNote");
    if (el) el.textContent = deliveryOption === "express" ? `Express delivery: ${Utils.formatPrice(expressFee)}` : t.delivery === 0 ? "Standard delivery: FREE" : `Standard delivery: ${Utils.formatPrice(t.delivery)}`;
  }

  function wirePaymentStep() {
    Utils.qsa('input[name="paymentMethod"]').forEach(r => r.addEventListener("change", (e) => {
      paymentMethod = e.target.value;
      Utils.qsa(".payment-detail-panel").forEach(p => p.classList.add("hide"));
      Utils.qs(`#panel-${paymentMethod}`)?.classList.remove("hide");
    }));
    Utils.qs("#backToStep2").addEventListener("click", () => goToStep(2));
    Utils.qs("#toStep4").addEventListener("click", () => {
      if (paymentMethod === "upi") {
        const upi = Utils.qs("#upiIdInput").value;
        if (!upi.includes("@")) { Toast.show("Enter a valid UPI ID (e.g. name@bank)", "error"); return; }
      }
      if (paymentMethod === "card") {
        const num = Utils.qs("#cardNumberInput").value.replace(/\s/g, "");
        if (!/^\d{16}$/.test(num)) { Toast.show("Enter a valid 16-digit card number", "error"); return; }
        const expiry = Utils.qs("#cardExpiryInput").value;
        if (!/^\d{2}\/\d{2}$/.test(expiry)) { Toast.show("Enter expiry as MM/YY", "error"); return; }
        const cvv = Utils.qs("#cardCvvInput").value;
        if (!/^\d{3}$/.test(cvv)) { Toast.show("Enter a valid 3-digit CVV", "error"); return; }
      }
      goToStep(4);
    });
  }

  function renderReview() {
    const cart = Store.getCart();
    const t = totals();
    const deliveryFee = deliveryOption === "express" ? 129 : t.delivery;
    const finalTotal = t.subtotal - t.couponDiscount + deliveryFee + t.tax;

    Utils.qs("#reviewItems").innerHTML = cart.map(item => {
      const p = Utils.findProduct(item.id);
      return `<div style="display:flex;gap:10px;align-items:center;padding:8px 0">
        <img src="${p.images[0]}" style="width:44px;height:44px;object-fit:cover;border-radius:6px" onerror="this.style.opacity=0">
        <div style="flex:1;font-size:0.82rem">${Utils.escapeHtml(p.name)} <span class="text-muted">\u00d7${item.qty}</span></div>
        <strong style="font-size:0.85rem">${Utils.formatPrice(p.price * item.qty)}</strong>
      </div>`;
    }).join("");

    Utils.qs("#reviewAddress").innerHTML = selectedAddress ? `
      <strong>${Utils.escapeHtml(selectedAddress.name)}</strong><br>
      <span class="text-muted">${Utils.escapeHtml(selectedAddress.address)}, ${selectedAddress.city}, ${selectedAddress.state} \u2014 ${selectedAddress.pincode}</span><br>
      <span class="text-muted">Phone: ${selectedAddress.phone}</span>` : "";

    Utils.qs("#reviewDelivery").textContent = deliveryOption === "express" ? "Express Delivery (1-2 days)" : "Standard Delivery (3-5 days)";
    Utils.qs("#reviewPayment").textContent = { upi: "UPI", card: "Credit / Debit Card", netbanking: "Net Banking", cod: "Cash on Delivery", wallet: "Wallet" }[paymentMethod];

    Utils.qs("#reviewTotals").innerHTML = `
      <div class="flex justify-between" style="font-size:0.86rem;margin-bottom:8px"><span class="text-muted">Subtotal</span><span>${Utils.formatPrice(t.subtotal)}</span></div>
      ${t.couponDiscount > 0 ? `<div class="flex justify-between" style="font-size:0.86rem;margin-bottom:8px"><span class="text-muted">Coupon</span><span style="color:var(--success)">\u2212${Utils.formatPrice(t.couponDiscount)}</span></div>` : ""}
      <div class="flex justify-between" style="font-size:0.86rem;margin-bottom:8px"><span class="text-muted">Delivery</span><span>${deliveryFee === 0 ? "FREE" : Utils.formatPrice(deliveryFee)}</span></div>
      <div class="flex justify-between" style="font-size:0.86rem;margin-bottom:8px"><span class="text-muted">Taxes</span><span>${Utils.formatPrice(t.tax)}</span></div>
      <div class="flex justify-between" style="font-weight:800;font-size:1.15rem;padding-top:10px;border-top:1px dashed var(--border)"><span>Total</span><span>${Utils.formatPrice(finalTotal)}</span></div>`;

    Utils.qs("#backToStep3").onclick = () => goToStep(3);
    Utils.qs("#placeOrderBtn").onclick = placeOrder;
  }

  function placeOrder() {
    const btn = Utils.qs("#placeOrderBtn");
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner"></span> Placing Order...`;
    setTimeout(() => {
      const cart = Store.getCart();
      const t = totals();
      const deliveryFee = deliveryOption === "express" ? 129 : t.delivery;
      const orderId = Utils.generateOrderId();
      const etaDays = deliveryOption === "express" ? 2 : 5;
      const order = {
        id: orderId,
        date: new Date().toISOString(),
        items: cart.map(i => ({ ...i, name: Utils.findProduct(i.id)?.name, price: Utils.findProduct(i.id)?.price, image: Utils.findProduct(i.id)?.images[0] })),
        address: selectedAddress,
        delivery: deliveryOption,
        payment: paymentMethod,
        total: t.subtotal - t.couponDiscount + deliveryFee + t.tax,
        eta: new Date(Date.now() + etaDays * 86400000).toISOString(),
        status: "placed"
      };
      Store.addOrder(order);
      Store.clearCart();
      Store.clearCoupon();
      window.location.href = `order-success.html?order=${orderId}`;
    }, 1100);
  }

  function init() {
    if (!Store.getCart().length) {
      Utils.qs("#checkoutFlow").classList.add("hide");
      Utils.qs("#checkoutEmpty").classList.remove("hide");
      return;
    }
    wireAddressStep();
    wireDeliveryStep();
    wirePaymentStep();
    goToStep(1);
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", () => {
  bootShell("cart");
  Checkout.init();
});
