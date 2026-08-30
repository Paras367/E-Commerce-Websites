// KAARVAN — home.js

const HERO_SLIDES = [
  {
    eyebrow: "Monsoon Tech Edit", title: "Upgrade your setup for less",
    copy: "Earbuds, monitors and everyday carry \u2014 handpicked electronics at caravan prices.",
    cta: "Shop Electronics", ctaLink: "products.html?category=electronics",
    cta2: "Explore Deals", cta2Link: "deals.html",
    img: "https://picsum.photos/seed/kaarvan-hero-1/900/700", discount: 40
  },
  {
    eyebrow: "Festive Handloom Edit", title: "Weaves worth waiting for",
    copy: "Handloom kurtas, Chanderi sarees and block-printed dupattas from small studios across India.",
    cta: "Shop Fashion", ctaLink: "products.html?category=fashion",
    cta2: "New Arrivals", cta2Link: "new-arrivals.html",
    img: "https://picsum.photos/seed/kaarvan-hero-2/900/700", discount: 50
  },
  {
    eyebrow: "Kitchen Season", title: "Kadhais, tawas & kulhads",
    copy: "Cast iron, copper and handmade clay cookware \u2014 built for a real Indian kitchen.",
    cta: "Shop Home & Kitchen", ctaLink: "products.html?category=home",
    cta2: "See Bestsellers", cta2Link: "products.html?sort=bestseller",
    img: "https://picsum.photos/seed/kaarvan-hero-3/900/700", discount: 35
  }
];

function renderHero() {
  const track = Utils.qs("#heroTrack");
  const dots = Utils.qs("#heroDots");
  if (!track) return;
  track.innerHTML = HERO_SLIDES.map(s => `
    <div class="hero-slide">
      <div class="hero-slide-copy">
        <span class="eyebrow">${s.eyebrow}</span>
        <h1>${s.title}</h1>
        <p>${s.copy}</p>
        <div class="hero-cta-row">
          <a href="${s.ctaLink}" class="btn btn-gold btn-lg">${s.cta}</a>
          <a href="${s.cta2Link}" class="btn btn-outline btn-lg" style="border-color:rgba(255,255,255,0.3);color:#fff">${s.cta2}</a>
        </div>
      </div>
      <div class="hero-slide-media">
        <div class="hero-badge"><span class="pct">${s.discount}%</span><span class="off">OFF</span></div>
        <img src="${s.img}" alt="${s.eyebrow}" onerror="this.src='https://picsum.photos/seed/fallback-hero/900/700'">
      </div>
    </div>`).join("");
  dots.innerHTML = HERO_SLIDES.map((_, i) => `<button type="button" class="hero-dot ${i === 0 ? "active" : ""}" data-hero-dot="${i}" aria-label="Slide ${i + 1}"></button>`).join("");

  let current = 0;
  let timer;
  function go(i) {
    current = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    Utils.qsa(".hero-dot", dots).forEach((d, idx) => d.classList.toggle("active", idx === current));
  }
  function next() { go(current + 1); }
  function play() { timer = setInterval(next, 5000); }
  function pause() { clearInterval(timer); }
  play();

  Utils.qs("#heroPrev").addEventListener("click", () => { go(current - 1); pause(); play(); });
  Utils.qs("#heroNext").addEventListener("click", () => { next(); pause(); play(); });
  dots.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-hero-dot]");
    if (btn) { go(Number(btn.dataset.heroDot)); pause(); play(); }
  });
  const heroEl = Utils.qs(".hero");
  heroEl.addEventListener("mouseenter", pause);
  heroEl.addEventListener("mouseleave", play);

  // Swipe support
  let touchStartX = null;
  track.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; pause(); }, { passive: true });
  track.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 50) go(current - 1);
    else if (dx < -50) next();
    touchStartX = null;
    play();
  }, { passive: true });
}

function renderCategoryShortcuts() {
  const grid = Utils.qs("#catGrid");
  if (!grid) return;
  grid.innerHTML = Object.entries(CATEGORIES).map(([key, c]) => {
    const count = PRODUCTS.filter(p => p.category === key).length;
    return `<a href="products.html?category=${key}" class="cat-card">
      <div class="cat-icon-wrap"><i data-lucide="${c.icon}" class="icon-lg"></i></div>
      <h4>${c.label}</h4>
      <span class="count">${count} products</span>
    </a>`;
  }).join("");
  Utils.refreshIcons();
}

function initFlashSale() {
  const KEY = "krv_flash_end";
  let end = localStorage.getItem(KEY);
  if (!end || Number(end) < Date.now()) {
    end = Date.now() + 1000 * 60 * 60 * 6; // 6 hour window
    localStorage.setItem(KEY, end);
  }
  end = Number(end);

  const flashProducts = [...PRODUCTS].filter(p => p.discount >= 25 && p.stock > 0).sort((a, b) => b.discount - a.discount).slice(0, 8);
  renderProductGrid(flashProducts, Utils.qs("#flashGrid"));

  const box = Utils.qs("#flashCountdown");
  function tick() {
    const remaining = end - Date.now();
    if (remaining <= 0) {
      box.innerHTML = `<span class="sale-ended-tag"><i data-lucide="clock" class="icon-sm"></i> Sale Ended \u2014 check back soon</span>`;
      Utils.refreshIcons();
      Utils.qsa(".pc-add", Utils.qs("#flashGrid")).forEach(btn => { btn.disabled = true; btn.textContent = "Deal Expired"; });
      clearInterval(interval);
      return;
    }
    const h = String(Math.floor(remaining / 3600000)).padStart(2, "0");
    const m = String(Math.floor((remaining % 3600000) / 60000)).padStart(2, "0");
    const s = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0");
    box.innerHTML = `
      <div class="cbox"><div class="n">${h}</div><div class="l">Hrs</div></div>
      <span class="sep">:</span>
      <div class="cbox"><div class="n">${m}</div><div class="l">Min</div></div>
      <span class="sep">:</span>
      <div class="cbox"><div class="n">${s}</div><div class="l">Sec</div></div>`;
  }
  tick();
  const interval = setInterval(tick, 1000);
}

function renderRails() {
  const trending = [...PRODUCTS].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 10);
  renderProductGrid(trending, Utils.qs("#trendingRail"), "compact");

  const bestsellers = PRODUCTS.filter(p => p.badge === "Bestseller").slice(0, 10);
  renderProductGrid(bestsellers.length ? bestsellers : [...PRODUCTS].sort((a,b)=>b.rating-a.rating).slice(0,10), Utils.qs("#bestsellerRail"), "compact");

  const recommended = [...PRODUCTS].sort(() => 0.5 - Math.random()).slice(0, 10);
  renderProductGrid(recommended, Utils.qs("#recommendedGrid"));

  const newArrivals = PRODUCTS.filter(p => p.badge === "New").slice(0, 10);
  renderProductGrid(newArrivals.length ? newArrivals : PRODUCTS.slice(-10), Utils.qs("#newArrivalsRail"), "compact");

  const deals = PRODUCTS.filter(p => p.discount >= 30).slice(0, 8);
  renderProductGrid(deals, Utils.qs("#dealsGrid"));
}

document.addEventListener("DOMContentLoaded", () => {
  bootShell("home");
  renderHero();
  renderCategoryShortcuts();
  initFlashSale();
  renderRails();

  document.addEventListener("krv:refresh-product-ui", () => { initFlashSale(); renderRails(); });
  document.addEventListener("krv:wishlist-ui-change", () => { initFlashSale(); renderRails(); });

  Utils.qs("#newsletterForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = Utils.qs("#newsletterEmail");
    if (!Utils.emailValid(input.value)) { Toast.show("Please enter a valid email address", "error"); return; }
    Toast.show("You're subscribed! Welcome to the caravan.", "success");
    input.value = "";
  });
});
