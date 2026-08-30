// KAARVAN — wishlist.js

function renderWishlistPage() {
  const ids = Store.getWishlist();
  const grid = Utils.qs("#wishlistGrid");
  const empty = Utils.qs("#wishlistEmpty");
  const countEl = Utils.qs("#wishlistCount");

  if (!ids.length) {
    grid.innerHTML = "";
    empty.classList.remove("hide");
    countEl.textContent = "";
    return;
  }
  empty.classList.add("hide");
  const products = ids.map(id => Utils.findProduct(id)).filter(Boolean);
  countEl.textContent = `${products.length} item${products.length !== 1 ? "s" : ""} saved`;
  renderProductGrid(products, grid);
}

document.addEventListener("DOMContentLoaded", () => {
  bootShell("wishlist");
  renderWishlistPage();
  document.addEventListener("krv:wishlist-change", renderWishlistPage);
  document.addEventListener("krv:wishlist-ui-change", renderWishlistPage);
  document.addEventListener("krv:refresh-product-ui", renderWishlistPage);
});
