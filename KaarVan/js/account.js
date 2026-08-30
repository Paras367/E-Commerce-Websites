// KAARVAN — account.js

function requireAuthGate() {
  const user = Store.getUser();
  if (!user) {
    Utils.qs("#accountContent").classList.add("hide");
    Utils.qs("#authGate").classList.remove("hide");
    return false;
  }
  Utils.qs("#authGate").classList.add("hide");
  Utils.qs("#accountContent").classList.remove("hide");
  return true;
}

function renderOverview(user) {
  const orders = Store.getOrders();
  const wish = Store.getWishlist();
  Utils.qs("#tab-overview").innerHTML = `
    <div class="panel" style="margin-bottom:18px">
      <h3 style="margin-bottom:4px">Welcome back, ${Utils.escapeHtml(user.name.split(" ")[0])} \ud83d\udc4b</h3>
      <p class="text-muted" style="font-size:0.86rem">Here's a quick look at your account.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:20px" class="account-stats-grid">
      <div class="panel" style="text-align:center"><div style="font-family:var(--font-display);font-weight:800;font-size:1.6rem">${orders.length}</div><div class="text-muted" style="font-size:0.8rem">Orders</div></div>
      <div class="panel" style="text-align:center"><div style="font-family:var(--font-display);font-weight:800;font-size:1.6rem">${wish.length}</div><div class="text-muted" style="font-size:0.8rem">Wishlist Items</div></div>
      <div class="panel" style="text-align:center"><div style="font-family:var(--font-display);font-weight:800;font-size:1.6rem">${Store.getAddresses().length}</div><div class="text-muted" style="font-size:0.8rem">Saved Addresses</div></div>
    </div>
    <div class="panel">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px"><h4>Recent Orders</h4><a href="orders.html" class="section-link" style="font-size:0.8rem">View All</a></div>
      ${orders.length ? orders.slice(0, 3).map(o => `<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:0.85rem">
        <span>${o.id}</span><span class="text-muted">${new Date(o.date).toLocaleDateString("en-IN")}</span><strong>${Utils.formatPrice(o.total)}</strong>
      </div>`).join("") : `<p class="text-muted" style="font-size:0.85rem">No orders yet.</p>`}
    </div>`;
}

function renderAddressesTab() {
  const list = Store.getAddresses();
  Utils.qs("#tab-addresses").innerHTML = `
    <div class="panel">
      <h4 style="margin-bottom:14px">Saved Addresses</h4>
      ${list.length ? list.map(a => `<div style="padding:14px 0;border-bottom:1px solid var(--border);font-size:0.85rem">
        <strong>${Utils.escapeHtml(a.name)}</strong> <span class="chip" style="padding:2px 8px;font-size:0.65rem">${a.type}</span>
        <div class="text-muted" style="margin-top:4px">${Utils.escapeHtml(a.address)}, ${a.city}, ${a.state} \u2014 ${a.pincode}</div>
        <div class="text-muted">Phone: ${a.phone}</div>
      </div>`).join("") : `<p class="text-muted" style="font-size:0.85rem">No saved addresses. Add one during checkout.</p>`}
      <a href="checkout.html" class="btn btn-outline btn-sm mt-4">Add Address at Checkout</a>
    </div>`;
}

function renderProfileTab(user) {
  Utils.qs("#tab-profile").innerHTML = `
    <div class="panel">
      <h4 style="margin-bottom:16px">Profile Information</h4>
      <div class="form-row">
        <div class="form-field"><label>Full Name</label><input type="text" id="profileName" value="${Utils.escapeHtml(user.name)}"></div>
        <div class="form-field"><label>Email</label><input type="email" id="profileEmail" value="${Utils.escapeHtml(user.email)}"></div>
      </div>
      <div class="form-field" style="max-width:340px"><label>Phone</label><input type="tel" id="profilePhone" value="${Utils.escapeHtml(user.phone || "")}"></div>
      <button type="button" class="btn btn-primary" id="saveProfileBtn">Save Changes</button>
    </div>`;
  Utils.qs("#saveProfileBtn").addEventListener("click", () => {
    const name = Utils.qs("#profileName").value.trim();
    const email = Utils.qs("#profileEmail").value.trim();
    if (!name || !Utils.emailValid(email)) { Toast.show("Please enter a valid name and email", "error"); return; }
    const updated = { ...user, name, email, phone: Utils.qs("#profilePhone").value.trim() };
    Store.setUser(updated);
    Toast.show("Profile updated", "success");
    renderAll();
  });
}

function renderNotificationsTab() {
  Utils.qs("#tab-notifications").innerHTML = `
    <div class="panel">
      <h4 style="margin-bottom:16px">Notification Preferences</h4>
      <label class="checkbox-row" style="margin-bottom:12px"><input type="checkbox" checked> Order updates &amp; delivery alerts</label>
      <label class="checkbox-row" style="margin-bottom:12px"><input type="checkbox" checked> Price drop alerts on wishlist items</label>
      <label class="checkbox-row" style="margin-bottom:12px"><input type="checkbox"> Promotional emails &amp; newsletters</label>
      <label class="checkbox-row"><input type="checkbox" checked> SMS notifications</label>
    </div>`;
}

function renderSecurityTab() {
  Utils.qs("#tab-security").innerHTML = `
    <div class="panel">
      <h4 style="margin-bottom:16px">Password &amp; Security</h4>
      <div class="form-field" style="max-width:340px"><label>Current Password</label><input type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"></div>
      <div class="form-field" style="max-width:340px"><label>New Password</label><input type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"></div>
      <button type="button" class="btn btn-primary" id="updatePwBtn">Update Password</button>
      <p class="text-muted" style="font-size:0.78rem;margin-top:14px">This is a frontend demo \u2014 password changes aren't sent anywhere.</p>
    </div>`;
  Utils.qs("#updatePwBtn").addEventListener("click", () => Toast.show("Password updated (demo)", "success"));
}

function renderPaymentsTab() {
  Utils.qs("#tab-payments").innerHTML = `
    <div class="panel">
      <h4 style="margin-bottom:16px">Saved Payment Methods</h4>
      <p class="text-muted" style="font-size:0.85rem;margin-bottom:14px">No saved cards yet. Payment details are entered fresh at checkout for your security.</p>
      <a href="checkout.html" class="btn btn-outline btn-sm">Go to Checkout</a>
    </div>`;
}

function renderAll() {
  const user = Store.getUser();
  if (!user) return;
  renderOverview(user);
  renderProfileTab(user);
  renderAddressesTab();
  renderNotificationsTab();
  renderSecurityTab();
  renderPaymentsTab();
  const wishGrid = Utils.qs("#tab-wishlist");
  const products = Store.getWishlist().map(id => Utils.findProduct(id)).filter(Boolean);
  wishGrid.innerHTML = products.length ? `<div class="product-grid" id="acctWishGrid"></div>` : `<p class="text-muted">Your wishlist is empty.</p>`;
  if (products.length) renderProductGrid(products, Utils.qs("#acctWishGrid"));
  Utils.refreshIcons();
}

function initSidebarNav() {
  Utils.qsa(".account-nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
      if (item.dataset.tab === "logout") return; // handled separately
      e.preventDefault();
      Utils.qsa(".account-nav-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      Utils.qsa(".account-tab-panel").forEach(p => p.classList.toggle("active", p.id === "tab-" + item.dataset.tab));
    });
  });
  Utils.qs('[data-tab="logout"]')?.addEventListener("click", (e) => {
    e.preventDefault();
    Store.logout();
    Toast.show("Logged out", "info");
    window.location.href = "index.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bootShell("home");
  if (requireAuthGate()) {
    renderAll();
    initSidebarNav();
  }
  document.addEventListener("krv:wishlist-change", () => { if (Store.getUser()) renderAll(); });
});
