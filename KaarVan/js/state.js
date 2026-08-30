// KAARVAN — state.js
// Centralized state store, persisted to localStorage. Every page loads this
// before app.js so cart/wishlist counts are correct on first paint.

const Store = (() => {
  const KEYS = {
    cart: "krv_cart",
    wishlist: "krv_wishlist",
    compare: "krv_compare",
    recentlyViewed: "krv_recent",
    recentSearches: "krv_recent_searches",
    theme: "krv_theme",
    user: "krv_user",
    orders: "krv_orders",
    addresses: "krv_addresses",
    coupon: "krv_coupon",
  };

  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage full/blocked */ }
  }

  // ---- Cart --------------------------------------------------------------
  function getCart() { return read(KEYS.cart, []); }
  function setCart(cart) { write(KEYS.cart, cart); document.dispatchEvent(new CustomEvent("krv:cart-change")); }

  function addToCart(productId, opts = {}) {
    const cart = getCart();
    const color = opts.color || null;
    const size = opts.size || null;
    const qty = opts.qty || 1;
    const existing = cart.find(i => i.id === productId && i.color === color && i.size === size);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, qty, color, size });
    }
    setCart(cart);
    return cart;
  }
  function removeFromCart(productId, color = null, size = null) {
    const cart = getCart().filter(i => !(i.id === productId && i.color === color && i.size === size));
    setCart(cart);
  }
  function updateCartQty(productId, color, size, qty) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId && i.color === color && i.size === size);
    if (item) {
      item.qty = qty;
      if (item.qty <= 0) return removeFromCart(productId, color, size);
    }
    setCart(cart);
  }
  function clearCart() { setCart([]); }
  function cartCount() { return getCart().reduce((s, i) => s + i.qty, 0); }

  // ---- Wishlist ------------------------------------------------------------
  function getWishlist() { return read(KEYS.wishlist, []); }
  function setWishlist(list) { write(KEYS.wishlist, list); document.dispatchEvent(new CustomEvent("krv:wishlist-change")); }
  function isWishlisted(id) { return getWishlist().includes(id); }
  function toggleWishlist(id) {
    let list = getWishlist();
    if (list.includes(id)) list = list.filter(x => x !== id);
    else list.push(id);
    setWishlist(list);
    return list.includes(id);
  }
  function removeFromWishlist(id) { setWishlist(getWishlist().filter(x => x !== id)); }

  // ---- Compare ---------------------------------------------------------------
  function getCompare() { return read(KEYS.compare, []); }
  function setCompare(list) { write(KEYS.compare, list); document.dispatchEvent(new CustomEvent("krv:compare-change")); }
  function isComparing(id) { return getCompare().includes(id); }
  function toggleCompare(id) {
    let list = getCompare();
    if (list.includes(id)) { list = list.filter(x => x !== id); setCompare(list); return { added: false, list }; }
    if (list.length >= 4) return { added: false, limitReached: true, list };
    list.push(id); setCompare(list);
    return { added: true, list };
  }
  function clearCompare() { setCompare([]); }

  // ---- Recently Viewed -----------------------------------------------------
  function getRecentlyViewed() { return read(KEYS.recentlyViewed, []); }
  function addRecentlyViewed(id) {
    let list = getRecentlyViewed().filter(x => x !== id);
    list.unshift(id);
    list = list.slice(0, 12);
    write(KEYS.recentlyViewed, list);
  }

  // ---- Recent searches -------------------------------------------------------
  function getRecentSearches() { return read(KEYS.recentSearches, []); }
  function addRecentSearch(term) {
    term = term.trim();
    if (!term) return;
    let list = getRecentSearches().filter(x => x.toLowerCase() !== term.toLowerCase());
    list.unshift(term);
    list = list.slice(0, 8);
    write(KEYS.recentSearches, list);
  }
  function clearRecentSearches() { write(KEYS.recentSearches, []); }

  // ---- Theme -----------------------------------------------------------------
  function getTheme() { return read(KEYS.theme, "system"); }
  function setTheme(t) { write(KEYS.theme, t); applyTheme(); }
  function applyTheme() {
    const t = getTheme();
    const resolved = t === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : t;
    document.documentElement.setAttribute("data-theme", resolved);
  }

  // ---- Fake auth / user ------------------------------------------------------
  function getUser() { return read(KEYS.user, null); }
  function setUser(user) { write(KEYS.user, user); }
  function logout() { write(KEYS.user, null); }

  // ---- Addresses ---------------------------------------------------------------
  function getAddresses() { return read(KEYS.addresses, []); }
  function addAddress(addr) {
    const list = getAddresses();
    addr.id = "addr_" + Date.now();
    list.push(addr);
    write(KEYS.addresses, list);
    return addr;
  }

  // ---- Orders --------------------------------------------------------------------
  function getOrders() { return read(KEYS.orders, []); }
  function addOrder(order) {
    const list = getOrders();
    list.unshift(order);
    write(KEYS.orders, list);
  }

  // ---- Applied coupon -------------------------------------------------------------
  function getCoupon() { return read(KEYS.coupon, null); }
  function setCoupon(code) { write(KEYS.coupon, code); }
  function clearCoupon() { write(KEYS.coupon, null); }

  return {
    getCart, setCart, addToCart, removeFromCart, updateCartQty, clearCart, cartCount,
    getWishlist, toggleWishlist, isWishlisted, removeFromWishlist,
    getCompare, toggleCompare, isComparing, clearCompare,
    getRecentlyViewed, addRecentlyViewed,
    getRecentSearches, addRecentSearch, clearRecentSearches,
    getTheme, setTheme, applyTheme,
    getUser, setUser, logout,
    getAddresses, addAddress,
    getOrders, addOrder,
    getCoupon, setCoupon, clearCoupon,
  };
})();

Store.applyTheme();
