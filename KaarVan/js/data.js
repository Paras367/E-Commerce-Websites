// KAARVAN — Product catalogue & site configuration
// Auto-composed dataset: realistic Indian D2C catalogue across 8 categories.

const CATEGORIES = {
  "electronics": {
    "label": "Electronics",
    "icon": "cpu"
  },
  "fashion": {
    "label": "Fashion",
    "icon": "shirt"
  },
  "beauty": {
    "label": "Beauty",
    "icon": "sparkles"
  },
  "home": {
    "label": "Home & Kitchen",
    "icon": "utensils-crossed"
  },
  "grocery": {
    "label": "Grocery",
    "icon": "shopping-basket"
  },
  "sports": {
    "label": "Sports",
    "icon": "dumbbell"
  },
  "gaming": {
    "label": "Gaming",
    "icon": "gamepad-2"
  },
  "accessories": {
    "label": "Accessories",
    "icon": "watch"
  }
};

const PRODUCTS = [
  {
    "id": 1,
    "slug": "nyra-airbuds-pro-2",
    "name": "Nyra AirBuds Pro 2",
    "brand": "Nyra Audio",
    "category": "electronics",
    "subcategory": "Audio",
    "price": 3499,
    "mrp": 5999,
    "discount": 42,
    "rating": 4.5,
    "reviewCount": 79,
    "images": [
      "https://picsum.photos/seed/nyra-airbuds-pro-2-1/700/700",
      "https://picsum.photos/seed/nyra-airbuds-pro-2-2/700/700",
      "https://picsum.photos/seed/nyra-airbuds-pro-2-3/700/700"
    ],
    "description": "True wireless earbuds with adaptive noise cancellation and a 32-hour case battery, tuned for long commutes and longer calls.",
    "highlights": [
      "Adaptive ANC with transparency mode",
      "32-hr total playback with case",
      "IPX5 sweat and splash resistant",
      "Bluetooth 5.3 with dual-device pairing"
    ],
    "specifications": {
      "Driver": "11mm Dynamic",
      "Battery (buds)": "7 hrs",
      "Battery (case)": "25 hrs",
      "Charging": "USB-C + Wireless",
      "Warranty": "1 Year"
    },
    "colors": [
      "Onyx Black",
      "Pearl White",
      "Sage Green"
    ],
    "sizes": null,
    "stock": 197,
    "badge": "Bestseller",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "electronics",
      "audio",
      "nyra-audio"
    ]
  },
  {
    "id": 2,
    "slug": "veyra-65w-gan-charger",
    "name": "Veyra 65W GaN Charger",
    "brand": "Veyra",
    "category": "electronics",
    "subcategory": "Charging",
    "price": 1299,
    "mrp": 1999,
    "discount": 35,
    "rating": 4.1,
    "reviewCount": 1536,
    "images": [
      "https://picsum.photos/seed/veyra-65w-gan-charger-1/700/700",
      "https://picsum.photos/seed/veyra-65w-gan-charger-2/700/700",
      "https://picsum.photos/seed/veyra-65w-gan-charger-3/700/700"
    ],
    "description": "A pocket-sized 65W GaN charger that can top up a laptop and a phone at the same time without the desk clutter.",
    "highlights": [
      "65W total output across 2 ports",
      "GaN tech stays cool under load",
      "Foldable pins for travel",
      "Compatible with laptops, phones, tablets"
    ],
    "specifications": {
      "Output": "65W (PD 3.0)",
      "Ports": "1x USB-C, 1x USB-A",
      "Input": "100-240V",
      "Warranty": "18 Months"
    },
    "colors": [
      "Charcoal",
      "White"
    ],
    "sizes": null,
    "stock": 34,
    "badge": "New",
    "delivery": "Delivery by Tomorrow",
    "tags": [
      "electronics",
      "charging",
      "veyra"
    ]
  },
  {
    "id": 3,
    "slug": "orbit-watch-s3",
    "name": "Orbit Watch S3",
    "brand": "Orbit",
    "category": "electronics",
    "subcategory": "Wearables",
    "price": 4999,
    "mrp": 8499,
    "discount": 41,
    "rating": 4.5,
    "reviewCount": 93,
    "images": [
      "https://picsum.photos/seed/orbit-watch-s3-1/700/700",
      "https://picsum.photos/seed/orbit-watch-s3-2/700/700",
      "https://picsum.photos/seed/orbit-watch-s3-3/700/700"
    ],
    "description": "An AMOLED smartwatch built for the Indian runner and the Monday-morning stand-up alike, with 10-day battery life.",
    "highlights": [
      "1.43\" AMOLED always-on display",
      "SpO2, heart rate & sleep tracking",
      "10-day battery, 2-day heavy use",
      "Bluetooth calling"
    ],
    "specifications": {
      "Display": "1.43\" AMOLED",
      "Battery": "10 Days",
      "Water Resistance": "5 ATM",
      "Warranty": "1 Year"
    },
    "colors": [
      "Jet Black",
      "Rose Gold",
      "Steel Grey"
    ],
    "sizes": null,
    "stock": 3,
    "badge": "Trending",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "electronics",
      "wearables",
      "orbit"
    ]
  },
  {
    "id": 4,
    "slug": "solace-soundbar-120w",
    "name": "Solace SoundBar 120W",
    "brand": "Solace",
    "category": "electronics",
    "subcategory": "Audio",
    "price": 6499,
    "mrp": 9999,
    "discount": 35,
    "rating": 4.1,
    "reviewCount": 1260,
    "images": [
      "https://picsum.photos/seed/solace-soundbar-120w-1/700/700",
      "https://picsum.photos/seed/solace-soundbar-120w-2/700/700",
      "https://picsum.photos/seed/solace-soundbar-120w-3/700/700"
    ],
    "description": "A 2.1-channel soundbar with a wired subwoofer that fills a living room without needing a home-theatre install crew.",
    "highlights": [
      "120W RMS with wired subwoofer",
      "Dolby Audio decoding",
      "HDMI ARC + Optical + Bluetooth 5.0",
      "Wall-mountable"
    ],
    "specifications": {
      "Output": "120W RMS",
      "Channels": "2.1",
      "Connectivity": "HDMI ARC, Optical, BT 5.0",
      "Warranty": "1 Year"
    },
    "colors": [
      "Black"
    ],
    "sizes": null,
    "stock": 14,
    "badge": null,
    "delivery": "Delivery in 2 Days",
    "tags": [
      "electronics",
      "audio",
      "solace"
    ]
  },
  {
    "id": 5,
    "slug": "krest-27-qhd-monitor",
    "name": "Krest 27\" QHD Monitor",
    "brand": "Krest",
    "category": "electronics",
    "subcategory": "Computer Accessories",
    "price": 15999,
    "mrp": 21999,
    "discount": 27,
    "rating": 4.6,
    "reviewCount": 1464,
    "images": [
      "https://picsum.photos/seed/krest-27-qhd-monitor-1/700/700",
      "https://picsum.photos/seed/krest-27-qhd-monitor-2/700/700",
      "https://picsum.photos/seed/krest-27-qhd-monitor-3/700/700"
    ],
    "description": "A 27-inch QHD IPS monitor with a 100Hz panel, equally at home in a spreadsheet marathon or a weekend game session.",
    "highlights": [
      "2560x1440 IPS panel",
      "100Hz refresh, 1ms MPRT",
      "HDR10 support",
      "Height-adjustable stand"
    ],
    "specifications": {
      "Panel": "IPS QHD",
      "Refresh Rate": "100Hz",
      "Ports": "HDMI x2, DisplayPort",
      "Warranty": "3 Years"
    },
    "colors": [
      "Black"
    ],
    "sizes": null,
    "stock": 147,
    "badge": null,
    "delivery": "Delivery in 2 Days",
    "tags": [
      "electronics",
      "computer-accessories",
      "krest"
    ]
  },
  {
    "id": 6,
    "slug": "pulseon-wireless-mouse",
    "name": "Pulseon Wireless Mouse",
    "brand": "Pulseon",
    "category": "electronics",
    "subcategory": "Computer Accessories",
    "price": 899,
    "mrp": 1499,
    "discount": 40,
    "rating": 4.3,
    "reviewCount": 597,
    "images": [
      "https://picsum.photos/seed/pulseon-wireless-mouse-1/700/700",
      "https://picsum.photos/seed/pulseon-wireless-mouse-2/700/700",
      "https://picsum.photos/seed/pulseon-wireless-mouse-3/700/700"
    ],
    "description": "A silent-click wireless mouse with a battery that genuinely lasts months, not the marketing kind of months.",
    "highlights": [
      "Silent clicks",
      "Up to 4 months battery life",
      "2.4GHz + Bluetooth dual mode",
      "Ergonomic shape for all-day use"
    ],
    "specifications": {
      "DPI": "800 / 1200 / 1600",
      "Connectivity": "2.4GHz + BT 5.0",
      "Battery": "1x AA",
      "Warranty": "1 Year"
    },
    "colors": [
      "Graphite",
      "White"
    ],
    "sizes": null,
    "stock": 0,
    "badge": "Limited Stock",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "electronics",
      "computer-accessories",
      "pulseon"
    ]
  },
  {
    "id": 7,
    "slug": "aeris-mechanical-keyboard-tkl",
    "name": "Aeris Mechanical Keyboard TKL",
    "brand": "Aeris",
    "category": "electronics",
    "subcategory": "Computer Accessories",
    "price": 3299,
    "mrp": 4999,
    "discount": 34,
    "rating": 4.6,
    "reviewCount": 724,
    "images": [
      "https://picsum.photos/seed/aeris-mechanical-keyboard-tkl-1/700/700",
      "https://picsum.photos/seed/aeris-mechanical-keyboard-tkl-2/700/700",
      "https://picsum.photos/seed/aeris-mechanical-keyboard-tkl-3/700/700"
    ],
    "description": "A tenkeyless mechanical keyboard with hot-swappable switches, built for people who have opinions about their typing feel.",
    "highlights": [
      "Hot-swappable switch sockets",
      "Per-key RGB backlighting",
      "Detachable USB-C cable",
      "PBT double-shot keycaps"
    ],
    "specifications": {
      "Switch": "Hot-swap (Red pre-installed)",
      "Layout": "TKL, 87 Keys",
      "Connectivity": "Wired USB-C",
      "Warranty": "1 Year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "sizes": null,
    "stock": 5,
    "badge": null,
    "delivery": "Delivery in 2 Days",
    "tags": [
      "electronics",
      "computer-accessories",
      "aeris"
    ]
  },
  {
    "id": 8,
    "slug": "kalinga-handloom-cotton-kurta",
    "name": "Kalinga Handloom Cotton Kurta",
    "brand": "Kalinga Weaves",
    "category": "fashion",
    "subcategory": "Ethnic Wear",
    "price": 1449,
    "mrp": 2199,
    "discount": 34,
    "rating": 4.9,
    "reviewCount": 717,
    "images": [
      "https://picsum.photos/seed/kalinga-handloom-cotton-kurta-1/700/700",
      "https://picsum.photos/seed/kalinga-handloom-cotton-kurta-2/700/700",
      "https://picsum.photos/seed/kalinga-handloom-cotton-kurta-3/700/700"
    ],
    "description": "A handloom cotton kurta woven in Sambalpur, cut for everyday wear with a mandarin collar and side slits.",
    "highlights": [
      "100% handloom cotton",
      "Mandarin collar, side slits",
      "Breathable weave for humid days",
      "Pre-shrunk fabric"
    ],
    "specifications": {
      "Fabric": "100% Cotton Handloom",
      "Fit": "Regular",
      "Care": "Hand wash cold",
      "Warranty": "NA"
    },
    "colors": [
      "Indigo",
      "Rust",
      "Off White"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 3,
    "badge": "Bestseller",
    "delivery": "Delivery in 4-5 Days",
    "tags": [
      "fashion",
      "ethnic-wear",
      "kalinga-weaves"
    ]
  },
  {
    "id": 9,
    "slug": "sundara-chanderi-silk-cotton-saree",
    "name": "Sundara Chanderi Silk-Cotton Saree",
    "brand": "Sundara",
    "category": "fashion",
    "subcategory": "Ethnic Wear",
    "price": 3999,
    "mrp": 6499,
    "discount": 38,
    "rating": 4.0,
    "reviewCount": 1763,
    "images": [
      "https://picsum.photos/seed/sundara-chanderi-silk-cotton-saree-1/700/700",
      "https://picsum.photos/seed/sundara-chanderi-silk-cotton-saree-2/700/700",
      "https://picsum.photos/seed/sundara-chanderi-silk-cotton-saree-3/700/700"
    ],
    "description": "A Chanderi silk-cotton saree with a fine zari border, light enough for a full day of wear at a wedding function.",
    "highlights": [
      "Authentic Chanderi weave",
      "Zari border and pallu",
      "Comes with unstitched blouse piece",
      "Lightweight, breathable drape"
    ],
    "specifications": {
      "Fabric": "Silk-Cotton Chanderi",
      "Length": "6.3m + Blouse",
      "Care": "Dry clean only",
      "Warranty": "NA"
    },
    "colors": [
      "Peacock Blue",
      "Maroon",
      "Sea Green"
    ],
    "sizes": null,
    "stock": 96,
    "badge": "New",
    "delivery": "Delivery by Tomorrow",
    "tags": [
      "fashion",
      "ethnic-wear",
      "sundara"
    ]
  },
  {
    "id": 10,
    "slug": "terra-linen-blend-casual-shirt",
    "name": "Terra Linen Blend Casual Shirt",
    "brand": "Terra & Co",
    "category": "fashion",
    "subcategory": "Men's Clothing",
    "price": 1699,
    "mrp": 2599,
    "discount": 35,
    "rating": 4.6,
    "reviewCount": 1126,
    "images": [
      "https://picsum.photos/seed/terra-linen-blend-casual-shirt-1/700/700",
      "https://picsum.photos/seed/terra-linen-blend-casual-shirt-2/700/700",
      "https://picsum.photos/seed/terra-linen-blend-casual-shirt-3/700/700"
    ],
    "description": "A linen-cotton blend shirt that breathes through Indian summers and still holds a crease well enough for the office.",
    "highlights": [
      "55% Linen, 45% Cotton blend",
      "Breathable summer weave",
      "Curved hem, regular fit",
      "Machine washable"
    ],
    "specifications": {
      "Fabric": "Linen-Cotton Blend",
      "Fit": "Regular",
      "Sleeve": "Full Sleeve",
      "Warranty": "NA"
    },
    "colors": [
      "Sand Beige",
      "Sky Blue",
      "Olive"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 39,
    "badge": "Trending",
    "delivery": "Delivery by Tomorrow",
    "tags": [
      "fashion",
      "men's-clothing",
      "terra-&-co"
    ]
  },
  {
    "id": 11,
    "slug": "mannat-slim-fit-stretch-jeans",
    "name": "Mannat Slim Fit Stretch Jeans",
    "brand": "Mannat Denim",
    "category": "fashion",
    "subcategory": "Men's Clothing",
    "price": 1899,
    "mrp": 2999,
    "discount": 37,
    "rating": 4.5,
    "reviewCount": 1726,
    "images": [
      "https://picsum.photos/seed/mannat-slim-fit-stretch-jeans-1/700/700",
      "https://picsum.photos/seed/mannat-slim-fit-stretch-jeans-2/700/700",
      "https://picsum.photos/seed/mannat-slim-fit-stretch-jeans-3/700/700"
    ],
    "description": "Stretch denim that moves with you through a full day of sitting, standing and squeezing into autos.",
    "highlights": [
      "2% Elastane for stretch",
      "Slim fit, mid rise",
      "Fade-resistant dye",
      "5-pocket classic styling"
    ],
    "specifications": {
      "Fabric": "98% Cotton, 2% Elastane",
      "Fit": "Slim",
      "Rise": "Mid Rise",
      "Warranty": "NA"
    },
    "colors": [
      "Indigo Blue",
      "Jet Black",
      "Grey"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "stock": 168,
    "badge": null,
    "delivery": "Delivery in 2 Days",
    "tags": [
      "fashion",
      "men's-clothing",
      "mannat-denim"
    ]
  },
  {
    "id": 12,
    "slug": "ojas-water-resistant-bomber-jacket",
    "name": "Ojas Water-Resistant Bomber Jacket",
    "brand": "Ojas",
    "category": "fashion",
    "subcategory": "Men's Clothing",
    "price": 2799,
    "mrp": 4499,
    "discount": 38,
    "rating": 4.6,
    "reviewCount": 121,
    "images": [
      "https://picsum.photos/seed/ojas-water-resistant-bomber-jacket-1/700/700",
      "https://picsum.photos/seed/ojas-water-resistant-bomber-jacket-2/700/700",
      "https://picsum.photos/seed/ojas-water-resistant-bomber-jacket-3/700/700"
    ],
    "description": "A lightweight bomber with a water-resistant shell, built for scooter commutes through an unpredictable monsoon.",
    "highlights": [
      "Water-resistant outer shell",
      "Ribbed cuffs and hem",
      "Zippered side pockets",
      "Quilted inner lining"
    ],
    "specifications": {
      "Shell": "Polyester (WR coating)",
      "Lining": "Quilted Polyfill",
      "Fit": "Regular",
      "Warranty": "NA"
    },
    "colors": [
      "Black",
      "Olive Green"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 177,
    "badge": null,
    "delivery": "Delivery in 3-4 Days",
    "tags": [
      "fashion",
      "men's-clothing",
      "ojas"
    ]
  },
  {
    "id": 13,
    "slug": "rangrez-hand-block-print-dupatta",
    "name": "Rangrez Hand Block-Print Dupatta",
    "brand": "Rangrez",
    "category": "fashion",
    "subcategory": "Women's Clothing",
    "price": 999,
    "mrp": 1599,
    "discount": 38,
    "rating": 4.9,
    "reviewCount": 1779,
    "images": [
      "https://picsum.photos/seed/rangrez-hand-block-print-dupatta-1/700/700",
      "https://picsum.photos/seed/rangrez-hand-block-print-dupatta-2/700/700",
      "https://picsum.photos/seed/rangrez-hand-block-print-dupatta-3/700/700"
    ],
    "description": "A hand block-printed cotton dupatta from a Bagru printing cluster, each piece carrying small variations from the block.",
    "highlights": [
      "Hand block-printed by artisans",
      "Pure cotton, natural dyes",
      "2.3m length",
      "Every piece is slightly unique"
    ],
    "specifications": {
      "Fabric": "Pure Cotton",
      "Length": "2.3m",
      "Print": "Hand Block Print",
      "Warranty": "NA"
    },
    "colors": [
      "Marigold Yellow",
      "Coral Pink",
      "Indigo"
    ],
    "sizes": null,
    "stock": 3,
    "badge": "Limited Stock",
    "delivery": "Delivery in 4-5 Days",
    "tags": [
      "fashion",
      "women's-clothing",
      "rangrez"
    ]
  },
  {
    "id": 14,
    "slug": "veerta-leather-sneakers",
    "name": "Veerta Leather Sneakers",
    "brand": "Veerta",
    "category": "fashion",
    "subcategory": "Footwear",
    "price": 2999,
    "mrp": 4999,
    "discount": 40,
    "rating": 4.2,
    "reviewCount": 1329,
    "images": [
      "https://picsum.photos/seed/veerta-leather-sneakers-1/700/700",
      "https://picsum.photos/seed/veerta-leather-sneakers-2/700/700",
      "https://picsum.photos/seed/veerta-leather-sneakers-3/700/700"
    ],
    "description": "Full-grain leather sneakers with a cushioned sole, styled to go from a Saturday brunch to a Monday commute.",
    "highlights": [
      "Full-grain leather upper",
      "Memory foam cushioned insole",
      "Anti-skid rubber outsole",
      "Breathable mesh lining"
    ],
    "specifications": {
      "Upper": "Genuine Leather",
      "Sole": "Rubber",
      "Closure": "Lace-up",
      "Warranty": "6 Months"
    },
    "colors": [
      "White",
      "Tan"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "stock": 221,
    "badge": null,
    "delivery": "Delivery in 2 Days",
    "tags": [
      "fashion",
      "footwear",
      "veerta"
    ]
  },
  {
    "id": 15,
    "slug": "prakriti-neem-and-turmeric-face-wash",
    "name": "Prakriti Neem & Turmeric Face Wash",
    "brand": "Prakriti",
    "category": "beauty",
    "subcategory": "Skincare",
    "price": 249,
    "mrp": 349,
    "discount": 29,
    "rating": 4.3,
    "reviewCount": 457,
    "images": [
      "https://picsum.photos/seed/prakriti-neem-and-turmeric-face-wash-1/700/700",
      "https://picsum.photos/seed/prakriti-neem-and-turmeric-face-wash-2/700/700",
      "https://picsum.photos/seed/prakriti-neem-and-turmeric-face-wash-3/700/700"
    ],
    "description": "A soap-free face wash with neem and turmeric extracts, formulated for oily and acne-prone skin common in humid cities.",
    "highlights": [
      "Soap-free, pH balanced formula",
      "Neem and turmeric extracts",
      "No parabens or sulphates",
      "Dermatologically tested"
    ],
    "specifications": {
      "Skin Type": "Oily, Acne-Prone",
      "Volume": "100ml / 200ml",
      "Key Ingredient": "Neem, Turmeric",
      "Shelf Life": "24 Months"
    },
    "colors": null,
    "sizes": [
      "100ml",
      "200ml"
    ],
    "stock": 179,
    "badge": "Bestseller",
    "delivery": "Delivery by Tomorrow",
    "tags": [
      "beauty",
      "skincare",
      "prakriti"
    ]
  },
  {
    "id": 16,
    "slug": "vedantika-rose-kumkumadi-face-oil",
    "name": "Vedantika Rose Kumkumadi Face Oil",
    "brand": "Vedantika",
    "category": "beauty",
    "subcategory": "Skincare",
    "price": 899,
    "mrp": 1299,
    "discount": 31,
    "rating": 4.5,
    "reviewCount": 378,
    "images": [
      "https://picsum.photos/seed/vedantika-rose-kumkumadi-face-oil-1/700/700",
      "https://picsum.photos/seed/vedantika-rose-kumkumadi-face-oil-2/700/700",
      "https://picsum.photos/seed/vedantika-rose-kumkumadi-face-oil-3/700/700"
    ],
    "description": "A traditional Kumkumadi Ayurvedic face oil infused with 24-karat gold leaf and Kashmiri saffron for an evening glow ritual.",
    "highlights": [
      "24-karat gold leaf infused",
      "Kashmiri saffron and 16 herbs",
      "Cold-pressed sesame oil base",
      "For a radiant, even skin tone"
    ],
    "specifications": {
      "Skin Type": "All Skin Types",
      "Volume": "15ml / 30ml",
      "Key Ingredient": "Saffron, Gold Leaf",
      "Shelf Life": "18 Months"
    },
    "colors": null,
    "sizes": [
      "15ml",
      "30ml"
    ],
    "stock": 144,
    "badge": "New",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "beauty",
      "skincare",
      "vedantika"
    ]
  },
  {
    "id": 17,
    "slug": "prakriti-charcoal-detox-face-mask",
    "name": "Prakriti Charcoal Detox Face Mask",
    "brand": "Prakriti",
    "category": "beauty",
    "subcategory": "Skincare",
    "price": 399,
    "mrp": 599,
    "discount": 33,
    "rating": 4.4,
    "reviewCount": 580,
    "images": [
      "https://picsum.photos/seed/prakriti-charcoal-detox-face-mask-1/700/700",
      "https://picsum.photos/seed/prakriti-charcoal-detox-face-mask-2/700/700",
      "https://picsum.photos/seed/prakriti-charcoal-detox-face-mask-3/700/700"
    ],
    "description": "An activated charcoal clay mask that pulls out pollution build-up after a day on Indian roads, without over-drying skin.",
    "highlights": [
      "Activated bamboo charcoal",
      "Bentonite clay base",
      "Removes excess oil and impurities",
      "10-minute wash-off mask"
    ],
    "specifications": {
      "Skin Type": "Normal, Oily",
      "Volume": "75g",
      "Key Ingredient": "Activated Charcoal",
      "Shelf Life": "24 Months"
    },
    "colors": null,
    "sizes": [
      "75g"
    ],
    "stock": 171,
    "badge": "Trending",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "beauty",
      "skincare",
      "prakriti"
    ]
  },
  {
    "id": 18,
    "slug": "kohlwala-intense-matte-kajal-duo",
    "name": "Kohlwala Intense Matte Kajal Duo",
    "brand": "Kohlwala",
    "category": "beauty",
    "subcategory": "Makeup",
    "price": 349,
    "mrp": 499,
    "discount": 30,
    "rating": 4.6,
    "reviewCount": 1754,
    "images": [
      "https://picsum.photos/seed/kohlwala-intense-matte-kajal-duo-1/700/700",
      "https://picsum.photos/seed/kohlwala-intense-matte-kajal-duo-2/700/700",
      "https://picsum.photos/seed/kohlwala-intense-matte-kajal-duo-3/700/700"
    ],
    "description": "A pack of two smudge-resistant kajal pencils that survive a full monsoon commute without a touch-up.",
    "highlights": [
      "12-hour smudge resistance",
      "Waterproof, sweat-proof formula",
      "Intense matte black pigment",
      "Easy glide, no tugging"
    ],
    "specifications": {
      "Type": "Kajal Pencil (Pack of 2)",
      "Finish": "Matte",
      "Waterproof": "Yes",
      "Shelf Life": "30 Months"
    },
    "colors": [
      "Kohl Black",
      "Deep Brown"
    ],
    "sizes": null,
    "stock": 0,
    "badge": null,
    "delivery": "Delivery in 2 Days",
    "tags": [
      "beauty",
      "makeup",
      "kohlwala"
    ]
  },
  {
    "id": 19,
    "slug": "vedantika-argan-and-bhringraj-hair-serum",
    "name": "Vedantika Argan & Bhringraj Hair Serum",
    "brand": "Vedantika",
    "category": "beauty",
    "subcategory": "Haircare",
    "price": 549,
    "mrp": 799,
    "discount": 31,
    "rating": 4.7,
    "reviewCount": 1676,
    "images": [
      "https://picsum.photos/seed/vedantika-argan-and-bhringraj-hair-serum-1/700/700",
      "https://picsum.photos/seed/vedantika-argan-and-bhringraj-hair-serum-2/700/700",
      "https://picsum.photos/seed/vedantika-argan-and-bhringraj-hair-serum-3/700/700"
    ],
    "description": "A lightweight serum combining Moroccan argan oil with Ayurvedic bhringraj, tames frizz without weighing hair down.",
    "highlights": [
      "Argan oil and bhringraj blend",
      "Tames frizz and flyaways",
      "Adds shine without greasiness",
      "Heat protection up to 180°C"
    ],
    "specifications": {
      "Hair Type": "Frizzy, Dry",
      "Volume": "50ml",
      "Key Ingredient": "Argan Oil, Bhringraj",
      "Shelf Life": "24 Months"
    },
    "colors": null,
    "sizes": [
      "50ml"
    ],
    "stock": 88,
    "badge": null,
    "delivery": "Delivery in 3-4 Days",
    "tags": [
      "beauty",
      "haircare",
      "vedantika"
    ]
  },
  {
    "id": 20,
    "slug": "prakriti-sandalwood-body-lotion",
    "name": "Prakriti Sandalwood Body Lotion",
    "brand": "Prakriti",
    "category": "beauty",
    "subcategory": "Bath & Body",
    "price": 299,
    "mrp": 449,
    "discount": 33,
    "rating": 4.0,
    "reviewCount": 1189,
    "images": [
      "https://picsum.photos/seed/prakriti-sandalwood-body-lotion-1/700/700",
      "https://picsum.photos/seed/prakriti-sandalwood-body-lotion-2/700/700",
      "https://picsum.photos/seed/prakriti-sandalwood-body-lotion-3/700/700"
    ],
    "description": "A daily body lotion with sandalwood and shea butter, light enough for humid mornings and rich enough for dry winters.",
    "highlights": [
      "Sandalwood and shea butter",
      "24-hour hydration claim",
      "Non-sticky, quick absorbing",
      "Suitable for all skin types"
    ],
    "specifications": {
      "Skin Type": "All Skin Types",
      "Volume": "200ml / 400ml",
      "Key Ingredient": "Sandalwood, Shea Butter",
      "Shelf Life": "36 Months"
    },
    "colors": null,
    "sizes": [
      "200ml",
      "400ml"
    ],
    "stock": 232,
    "badge": "Limited Stock",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "beauty",
      "bath-body",
      "prakriti"
    ]
  },
  {
    "id": 21,
    "slug": "copperline-hammered-kadhai-with-lid",
    "name": "Copperline Hammered Kadhai with Lid",
    "brand": "Copperline",
    "category": "home",
    "subcategory": "Cookware",
    "price": 1899,
    "mrp": 2999,
    "discount": 37,
    "rating": 4.6,
    "reviewCount": 838,
    "images": [
      "https://picsum.photos/seed/copperline-hammered-kadhai-with-lid-1/700/700",
      "https://picsum.photos/seed/copperline-hammered-kadhai-with-lid-2/700/700",
      "https://picsum.photos/seed/copperline-hammered-kadhai-with-lid-3/700/700"
    ],
    "description": "A hand-hammered copper-bottom kadhai that heats evenly for tempering, deep-frying and everything in between.",
    "highlights": [
      "Hand-hammered copper base",
      "Even heat distribution",
      "Stainless steel interior, food-safe",
      "Includes matching lid"
    ],
    "specifications": {
      "Material": "Copper Bottom, SS Body",
      "Capacity": "2L / 3L",
      "Induction Compatible": "Yes",
      "Warranty": "2 Years"
    },
    "colors": [
      "Copper"
    ],
    "sizes": [
      "2L",
      "3L"
    ],
    "stock": 234,
    "badge": null,
    "delivery": "Delivery in 2 Days",
    "tags": [
      "home",
      "cookware",
      "copperline"
    ]
  },
  {
    "id": 22,
    "slug": "mitti-handmade-clay-cooking-pot-set",
    "name": "Mitti Handmade Clay Cooking Pot Set",
    "brand": "Mitti",
    "category": "home",
    "subcategory": "Cookware",
    "price": 1299,
    "mrp": 1899,
    "discount": 32,
    "rating": 4.2,
    "reviewCount": 533,
    "images": [
      "https://picsum.photos/seed/mitti-handmade-clay-cooking-pot-set-1/700/700",
      "https://picsum.photos/seed/mitti-handmade-clay-cooking-pot-set-2/700/700",
      "https://picsum.photos/seed/mitti-handmade-clay-cooking-pot-set-3/700/700"
    ],
    "description": "Unglazed clay pots handmade by potters in Khurja, said to bring back the taste of dal cooked the old way.",
    "highlights": [
      "100% natural clay, unglazed",
      "Retains nutrients while cooking",
      "Set of 3 sizes",
      "Seasoning guide included"
    ],
    "specifications": {
      "Material": "Natural Clay",
      "Set": "3 Pots (1L, 1.5L, 2L)",
      "Stovetop Safe": "Yes (low-medium flame)",
      "Warranty": "NA"
    },
    "colors": [
      "Terracotta"
    ],
    "sizes": [
      "Set of 3"
    ],
    "stock": 198,
    "badge": "Bestseller",
    "delivery": "Delivery in 3-4 Days",
    "tags": [
      "home",
      "cookware",
      "mitti"
    ]
  },
  {
    "id": 23,
    "slug": "veda-pre-seasoned-cast-iron-tawa",
    "name": "Veda Pre-Seasoned Cast Iron Tawa",
    "brand": "Veda Home",
    "category": "home",
    "subcategory": "Cookware",
    "price": 899,
    "mrp": 1399,
    "discount": 36,
    "rating": 4.6,
    "reviewCount": 905,
    "images": [
      "https://picsum.photos/seed/veda-pre-seasoned-cast-iron-tawa-1/700/700",
      "https://picsum.photos/seed/veda-pre-seasoned-cast-iron-tawa-2/700/700",
      "https://picsum.photos/seed/veda-pre-seasoned-cast-iron-tawa-3/700/700"
    ],
    "description": "A pre-seasoned cast iron tawa that only gets better with every roti, building its own natural non-stick surface over time.",
    "highlights": [
      "Pre-seasoned, ready to use",
      "Naturally improves with use",
      "Even heat retention for rotis",
      "Works on gas, induction, open flame"
    ],
    "specifications": {
      "Material": "Cast Iron",
      "Diameter": "10\" / 12\"",
      "Induction Compatible": "Yes",
      "Warranty": "NA"
    },
    "colors": [
      "Black"
    ],
    "sizes": [
      "10 inch",
      "12 inch"
    ],
    "stock": 237,
    "badge": "New",
    "delivery": "Delivery in 3-4 Days",
    "tags": [
      "home",
      "cookware",
      "veda-home"
    ]
  },
  {
    "id": 24,
    "slug": "aangan-300-tc-cotton-bedsheet-set",
    "name": "Aangan 300 TC Cotton Bedsheet Set",
    "brand": "Aangan",
    "category": "home",
    "subcategory": "Bedding",
    "price": 1499,
    "mrp": 2299,
    "discount": 35,
    "rating": 4.1,
    "reviewCount": 311,
    "images": [
      "https://picsum.photos/seed/aangan-300-tc-cotton-bedsheet-set-1/700/700",
      "https://picsum.photos/seed/aangan-300-tc-cotton-bedsheet-set-2/700/700",
      "https://picsum.photos/seed/aangan-300-tc-cotton-bedsheet-set-3/700/700"
    ],
    "description": "A 300 thread-count cotton bedsheet set with two pillow covers, soft enough for peninsular summers.",
    "highlights": [
      "300 thread count pure cotton",
      "Includes 2 pillow covers",
      "Fade-resistant reactive dyes",
      "Fits mattress up to 10 inches"
    ],
    "specifications": {
      "Fabric": "300 TC Cotton",
      "Size": "Double / King",
      "Set Includes": "1 Bedsheet + 2 Pillow Covers",
      "Warranty": "NA"
    },
    "colors": [
      "Dusty Rose",
      "Slate Blue",
      "Charcoal"
    ],
    "sizes": [
      "Double",
      "King"
    ],
    "stock": 138,
    "badge": "Trending",
    "delivery": "Delivery by Tomorrow",
    "tags": [
      "home",
      "bedding",
      "aangan"
    ]
  },
  {
    "id": 25,
    "slug": "mitti-handpainted-kulhad-chai-set-of-6",
    "name": "Mitti Handpainted Kulhad Chai Set of 6",
    "brand": "Mitti",
    "category": "home",
    "subcategory": "Dining",
    "price": 699,
    "mrp": 999,
    "discount": 30,
    "rating": 4.7,
    "reviewCount": 1791,
    "images": [
      "https://picsum.photos/seed/mitti-handpainted-kulhad-chai-set-of-6-1/700/700",
      "https://picsum.photos/seed/mitti-handpainted-kulhad-chai-set-of-6-2/700/700",
      "https://picsum.photos/seed/mitti-handpainted-kulhad-chai-set-of-6-3/700/700"
    ],
    "description": "Six handpainted terracotta kulhads, the kind that make a regular chai break feel like a roadside stall in Varanasi.",
    "highlights": [
      "Handpainted terracotta clay",
      "Set of 6, 150ml each",
      "Microwave safe",
      "Adds earthy aroma to chai"
    ],
    "specifications": {
      "Material": "Terracotta Clay",
      "Set": "6 Kulhads, 150ml each",
      "Microwave Safe": "Yes",
      "Warranty": "NA"
    },
    "colors": [
      "Terracotta"
    ],
    "sizes": [
      "Set of 6"
    ],
    "stock": 5,
    "badge": null,
    "delivery": "Delivery in 2 Days",
    "tags": [
      "home",
      "dining",
      "mitti"
    ]
  },
  {
    "id": 26,
    "slug": "sundara-brass-diya-set",
    "name": "Sundara Brass Diya Set",
    "brand": "Sundara Home",
    "category": "home",
    "subcategory": "Decor",
    "price": 799,
    "mrp": 1199,
    "discount": 33,
    "rating": 4.7,
    "reviewCount": 892,
    "images": [
      "https://picsum.photos/seed/sundara-brass-diya-set-1/700/700",
      "https://picsum.photos/seed/sundara-brass-diya-set-2/700/700",
      "https://picsum.photos/seed/sundara-brass-diya-set-3/700/700"
    ],
    "description": "Five hand-cast brass diyas with an antique finish, sized for a festival mandir shelf or a dinner table centrepiece.",
    "highlights": [
      "Hand-cast solid brass",
      "Antique oxidised finish",
      "Set of 5 in graduated sizes",
      "Reusable for every festival"
    ],
    "specifications": {
      "Material": "Solid Brass",
      "Set": "5 Diyas",
      "Finish": "Antique Oxidised",
      "Warranty": "NA"
    },
    "colors": [
      "Antique Brass"
    ],
    "sizes": [
      "Set of 5"
    ],
    "stock": 3,
    "badge": null,
    "delivery": "Delivery in 4-5 Days",
    "tags": [
      "home",
      "decor",
      "sundara-home"
    ]
  },
  {
    "id": 27,
    "slug": "kavach-5-piece-non-stick-cookware-set",
    "name": "Kavach 5-Piece Non-Stick Cookware Set",
    "brand": "Kavach",
    "category": "home",
    "subcategory": "Cookware",
    "price": 2499,
    "mrp": 3999,
    "discount": 38,
    "rating": 4.3,
    "reviewCount": 986,
    "images": [
      "https://picsum.photos/seed/kavach-5-piece-non-stick-cookware-set-1/700/700",
      "https://picsum.photos/seed/kavach-5-piece-non-stick-cookware-set-2/700/700",
      "https://picsum.photos/seed/kavach-5-piece-non-stick-cookware-set-3/700/700"
    ],
    "description": "A starter non-stick set covering a kadhai, tawa and two pans, built for a first apartment kitchen.",
    "highlights": [
      "PFOA-free non-stick coating",
      "Includes kadhai, tawa, 2 pans, 1 lid",
      "Induction and gas compatible",
      "Soft-touch heat-resistant handles"
    ],
    "specifications": {
      "Coating": "3-Layer Non-Stick, PFOA-Free",
      "Pieces": "5",
      "Induction Compatible": "Yes",
      "Warranty": "1 Year"
    },
    "colors": [
      "Black"
    ],
    "sizes": [
      "5 Piece Set"
    ],
    "stock": 143,
    "badge": "Limited Stock",
    "delivery": "Delivery by Tomorrow",
    "tags": [
      "home",
      "cookware",
      "kavach"
    ]
  },
  {
    "id": 28,
    "slug": "himvan-farms-a2-bilona-ghee",
    "name": "Himvan Farms A2 Bilona Ghee",
    "brand": "Himvan Farms",
    "category": "grocery",
    "subcategory": "Dairy",
    "price": 699,
    "mrp": 899,
    "discount": 22,
    "rating": 4.6,
    "reviewCount": 262,
    "images": [
      "https://picsum.photos/seed/himvan-farms-a2-bilona-ghee-1/700/700",
      "https://picsum.photos/seed/himvan-farms-a2-bilona-ghee-2/700/700",
      "https://picsum.photos/seed/himvan-farms-a2-bilona-ghee-3/700/700"
    ],
    "description": "A2 ghee made from Gir cow milk using the traditional bilona churning method, in small batches.",
    "highlights": [
      "A2 Gir cow milk ghee",
      "Traditional bilona churned",
      "No preservatives or additives",
      "Rich aroma, grainy texture"
    ],
    "specifications": {
      "Type": "A2 Cow Ghee",
      "Volume": "500ml / 1L",
      "Process": "Bilona Churned",
      "Shelf Life": "9 Months"
    },
    "colors": null,
    "sizes": [
      "500ml",
      "1L"
    ],
    "stock": 182,
    "badge": null,
    "delivery": "Delivery in 3-4 Days",
    "tags": [
      "grocery",
      "dairy",
      "himvan-farms"
    ]
  },
  {
    "id": 29,
    "slug": "malenadu-filter-coffee-powder",
    "name": "Malenadu Filter Coffee Powder",
    "brand": "Malenadu",
    "category": "grocery",
    "subcategory": "Beverages",
    "price": 349,
    "mrp": 449,
    "discount": 22,
    "rating": 4.7,
    "reviewCount": 724,
    "images": [
      "https://picsum.photos/seed/malenadu-filter-coffee-powder-1/700/700",
      "https://picsum.photos/seed/malenadu-filter-coffee-powder-2/700/700",
      "https://picsum.photos/seed/malenadu-filter-coffee-powder-3/700/700"
    ],
    "description": "An 80:20 coffee-chicory blend roasted in small batches in Chikmagalur, made for the steel filter, not the machine.",
    "highlights": [
      "80% coffee, 20% chicory blend",
      "Small-batch roasted",
      "Traditional South Indian filter blend",
      "Rich decoction, low bitterness"
    ],
    "specifications": {
      "Blend": "80:20 Coffee-Chicory",
      "Weight": "500g",
      "Roast": "Medium-Dark",
      "Shelf Life": "12 Months"
    },
    "colors": null,
    "sizes": [
      "500g"
    ],
    "stock": 36,
    "badge": "Bestseller",
    "delivery": "Delivery in 4-5 Days",
    "tags": [
      "grocery",
      "beverages",
      "malenadu"
    ]
  },
  {
    "id": 30,
    "slug": "anaaj-kesar-basmati-rice-5kg",
    "name": "Anaaj Kesar Basmati Rice 5kg",
    "brand": "Anaaj",
    "category": "grocery",
    "subcategory": "Staples",
    "price": 649,
    "mrp": 849,
    "discount": 24,
    "rating": 4.1,
    "reviewCount": 34,
    "images": [
      "https://picsum.photos/seed/anaaj-kesar-basmati-rice-5kg-1/700/700",
      "https://picsum.photos/seed/anaaj-kesar-basmati-rice-5kg-2/700/700",
      "https://picsum.photos/seed/anaaj-kesar-basmati-rice-5kg-3/700/700"
    ],
    "description": "Aged Kesar basmati rice with long, non-sticky grains, aged for a year to develop its aroma before packing.",
    "highlights": [
      "12-month aged basmati",
      "Extra-long grain, non-sticky",
      "Aromatic, low starch content",
      "Sourced from Himalayan foothills"
    ],
    "specifications": {
      "Type": "Basmati Rice",
      "Weight": "5kg / 10kg",
      "Aging": "12 Months",
      "Shelf Life": "24 Months"
    },
    "colors": null,
    "sizes": [
      "5kg",
      "10kg"
    ],
    "stock": 192,
    "badge": "New",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "grocery",
      "staples",
      "anaaj"
    ]
  },
  {
    "id": 31,
    "slug": "anaaj-cold-pressed-groundnut-oil",
    "name": "Anaaj Cold-Pressed Groundnut Oil",
    "brand": "Anaaj",
    "category": "grocery",
    "subcategory": "Cooking Oil",
    "price": 449,
    "mrp": 599,
    "discount": 25,
    "rating": 4.4,
    "reviewCount": 245,
    "images": [
      "https://picsum.photos/seed/anaaj-cold-pressed-groundnut-oil-1/700/700",
      "https://picsum.photos/seed/anaaj-cold-pressed-groundnut-oil-2/700/700",
      "https://picsum.photos/seed/anaaj-cold-pressed-groundnut-oil-3/700/700"
    ],
    "description": "Groundnut oil extracted using the traditional wood-pressed kolhu method, retaining its natural nutty aroma.",
    "highlights": [
      "Cold / wood-pressed extraction",
      "No chemical refining",
      "High smoke point for deep frying",
      "Naturally nutty aroma"
    ],
    "specifications": {
      "Type": "Groundnut Oil",
      "Volume": "1L / 2L",
      "Extraction": "Cold-Pressed",
      "Shelf Life": "9 Months"
    },
    "colors": null,
    "sizes": [
      "1L",
      "2L"
    ],
    "stock": 230,
    "badge": "Trending",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "grocery",
      "cooking-oil",
      "anaaj"
    ]
  },
  {
    "id": 32,
    "slug": "prakriti-foods-organic-turmeric-powder",
    "name": "Prakriti Foods Organic Turmeric Powder",
    "brand": "Prakriti Foods",
    "category": "grocery",
    "subcategory": "Spices",
    "price": 179,
    "mrp": 249,
    "discount": 28,
    "rating": 4.1,
    "reviewCount": 1589,
    "images": [
      "https://picsum.photos/seed/prakriti-foods-organic-turmeric-powder-1/700/700",
      "https://picsum.photos/seed/prakriti-foods-organic-turmeric-powder-2/700/700",
      "https://picsum.photos/seed/prakriti-foods-organic-turmeric-powder-3/700/700"
    ],
    "description": "Organically grown Erode turmeric, sun-dried and stone-ground to preserve its curcumin content and colour.",
    "highlights": [
      "Certified organic farming",
      "Sun-dried, stone-ground",
      "High curcumin content",
      "No added colour or fillers"
    ],
    "specifications": {
      "Type": "Turmeric Powder",
      "Weight": "200g / 500g",
      "Origin": "Erode, Tamil Nadu",
      "Shelf Life": "12 Months"
    },
    "colors": null,
    "sizes": [
      "200g",
      "500g"
    ],
    "stock": 49,
    "badge": null,
    "delivery": "Delivery by Tomorrow",
    "tags": [
      "grocery",
      "spices",
      "prakriti-foods"
    ]
  },
  {
    "id": 33,
    "slug": "malenadu-assam-orthodox-tea",
    "name": "Malenadu Assam Orthodox Tea",
    "brand": "Malenadu",
    "category": "grocery",
    "subcategory": "Beverages",
    "price": 299,
    "mrp": 399,
    "discount": 25,
    "rating": 4.5,
    "reviewCount": 1028,
    "images": [
      "https://picsum.photos/seed/malenadu-assam-orthodox-tea-1/700/700",
      "https://picsum.photos/seed/malenadu-assam-orthodox-tea-2/700/700",
      "https://picsum.photos/seed/malenadu-assam-orthodox-tea-3/700/700"
    ],
    "description": "Full-leaf orthodox Assam tea from a single garden, brewed strong for the classic cutting chai.",
    "highlights": [
      "Single-garden Assam estate tea",
      "Orthodox full-leaf processing",
      "Bold malty flavour",
      "Ideal for masala chai"
    ],
    "specifications": {
      "Type": "Assam Orthodox Tea",
      "Weight": "500g",
      "Leaf Grade": "Whole Leaf",
      "Shelf Life": "18 Months"
    },
    "colors": null,
    "sizes": [
      "500g"
    ],
    "stock": 3,
    "badge": null,
    "delivery": "Delivery in 3-4 Days",
    "tags": [
      "grocery",
      "beverages",
      "malenadu"
    ]
  },
  {
    "id": 34,
    "slug": "veer-cricket-kit-bag-with-wheels",
    "name": "Veer Cricket Kit Bag with Wheels",
    "brand": "Veer Sports",
    "category": "sports",
    "subcategory": "Cricket",
    "price": 2299,
    "mrp": 3499,
    "discount": 34,
    "rating": 4.8,
    "reviewCount": 1731,
    "images": [
      "https://picsum.photos/seed/veer-cricket-kit-bag-with-wheels-1/700/700",
      "https://picsum.photos/seed/veer-cricket-kit-bag-with-wheels-2/700/700",
      "https://picsum.photos/seed/veer-cricket-kit-bag-with-wheels-3/700/700"
    ],
    "description": "A wheeled cricket kit bag with dedicated bat, pad and shoe compartments for the weekend gully-to-turf commute.",
    "highlights": [
      "Separate bat and pad compartments",
      "Smooth-roll wheels",
      "Water-resistant base panel",
      "Padded shoulder strap"
    ],
    "specifications": {
      "Material": "600D Polyester",
      "Wheels": "Yes",
      "Compartments": "4",
      "Warranty": "6 Months"
    },
    "colors": [
      "Navy/Red",
      "Black/Grey"
    ],
    "sizes": null,
    "stock": 214,
    "badge": "Limited Stock",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "sports",
      "cricket",
      "veer-sports"
    ]
  },
  {
    "id": 35,
    "slug": "smash-pro-grip-carbon-badminton-racquet",
    "name": "Smash Pro-Grip Carbon Badminton Racquet",
    "brand": "Smash",
    "category": "sports",
    "subcategory": "Badminton",
    "price": 1599,
    "mrp": 2499,
    "discount": 36,
    "rating": 4.0,
    "reviewCount": 1826,
    "images": [
      "https://picsum.photos/seed/smash-pro-grip-carbon-badminton-racquet-1/700/700",
      "https://picsum.photos/seed/smash-pro-grip-carbon-badminton-racquet-2/700/700",
      "https://picsum.photos/seed/smash-pro-grip-carbon-badminton-racquet-3/700/700"
    ],
    "description": "A full-carbon racquet strung at 24 lbs out of the box, tuned for club-level players who play more for speed than power.",
    "highlights": [
      "Full carbon fibre shaft",
      "Pre-strung at 24 lbs",
      "Lightweight, head-light balance",
      "Includes half-cover"
    ],
    "specifications": {
      "Weight": "85g (unstrung)",
      "Material": "Full Carbon Fibre",
      "String Tension": "Up to 28 lbs",
      "Warranty": "6 Months"
    },
    "colors": [
      "Matte Black",
      "Electric Blue"
    ],
    "sizes": null,
    "stock": 3,
    "badge": null,
    "delivery": "Delivery by Tomorrow",
    "tags": [
      "sports",
      "badminton",
      "smash"
    ]
  },
  {
    "id": 36,
    "slug": "flexfit-6mm-yoga-mat",
    "name": "FlexFit 6mm Yoga Mat",
    "brand": "FlexFit",
    "category": "sports",
    "subcategory": "Fitness",
    "price": 799,
    "mrp": 1199,
    "discount": 33,
    "rating": 4.6,
    "reviewCount": 1699,
    "images": [
      "https://picsum.photos/seed/flexfit-6mm-yoga-mat-1/700/700",
      "https://picsum.photos/seed/flexfit-6mm-yoga-mat-2/700/700",
      "https://picsum.photos/seed/flexfit-6mm-yoga-mat-3/700/700"
    ],
    "description": "A 6mm TPE yoga mat with a textured, sweat-resistant surface, rolled up and carried to more studios than most.",
    "highlights": [
      "6mm cushioning for joints",
      "TPE material, eco-friendly",
      "Sweat-resistant, non-slip texture",
      "Includes carry strap"
    ],
    "specifications": {
      "Material": "TPE",
      "Thickness": "6mm",
      "Dimensions": "183cm x 61cm",
      "Warranty": "NA"
    },
    "colors": [
      "Teal",
      "Charcoal",
      "Coral"
    ],
    "sizes": null,
    "stock": 25,
    "badge": "Bestseller",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "sports",
      "fitness",
      "flexfit"
    ]
  },
  {
    "id": 37,
    "slug": "trailblaze-mens-running-shoes",
    "name": "TrailBlaze Men's Running Shoes",
    "brand": "TrailBlaze",
    "category": "sports",
    "subcategory": "Footwear",
    "price": 1999,
    "mrp": 3299,
    "discount": 39,
    "rating": 4.0,
    "reviewCount": 1001,
    "images": [
      "https://picsum.photos/seed/trailblaze-mens-running-shoes-1/700/700",
      "https://picsum.photos/seed/trailblaze-mens-running-shoes-2/700/700",
      "https://picsum.photos/seed/trailblaze-mens-running-shoes-3/700/700"
    ],
    "description": "A breathable mesh running shoe with a responsive EVA sole, built for tempo runs on Indian city roads.",
    "highlights": [
      "Breathable engineered mesh upper",
      "Responsive EVA midsole",
      "Reflective details for low light",
      "Reinforced heel counter"
    ],
    "specifications": {
      "Upper": "Engineered Mesh",
      "Sole": "EVA",
      "Closure": "Lace-up",
      "Warranty": "6 Months"
    },
    "colors": [
      "Black/Volt",
      "Grey/Orange"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "stock": 5,
    "badge": "New",
    "delivery": "Delivery in 3-4 Days",
    "tags": [
      "sports",
      "footwear",
      "trailblaze"
    ]
  },
  {
    "id": 38,
    "slug": "ironcore-adjustable-dumbbell-set",
    "name": "IronCore Adjustable Dumbbell Set",
    "brand": "IronCore",
    "category": "sports",
    "subcategory": "Fitness",
    "price": 3999,
    "mrp": 5999,
    "discount": 33,
    "rating": 4.4,
    "reviewCount": 1270,
    "images": [
      "https://picsum.photos/seed/ironcore-adjustable-dumbbell-set-1/700/700",
      "https://picsum.photos/seed/ironcore-adjustable-dumbbell-set-2/700/700",
      "https://picsum.photos/seed/ironcore-adjustable-dumbbell-set-3/700/700"
    ],
    "description": "Adjustable dumbbells that swap plates in seconds, sized for a home gym corner rather than a full rack.",
    "highlights": [
      "Quick-adjust weight plates",
      "Knurled anti-slip grip",
      "Rubber-coated plates, floor safe",
      "Compact storage footprint"
    ],
    "specifications": {
      "Weight Range": "5-20kg per dumbbell",
      "Material": "Cast Iron, Rubber Coated",
      "Adjustment": "Quick-Lock",
      "Warranty": "1 Year"
    },
    "colors": [
      "Black/Red"
    ],
    "sizes": [
      "10kg Pair",
      "20kg Pair"
    ],
    "stock": 116,
    "badge": "Trending",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "sports",
      "fitness",
      "ironcore"
    ]
  },
  {
    "id": 39,
    "slug": "smash-champion-football-size-5",
    "name": "Smash Champion Football Size 5",
    "brand": "Smash",
    "category": "sports",
    "subcategory": "Football",
    "price": 899,
    "mrp": 1299,
    "discount": 31,
    "rating": 4.6,
    "reviewCount": 845,
    "images": [
      "https://picsum.photos/seed/smash-champion-football-size-5-1/700/700",
      "https://picsum.photos/seed/smash-champion-football-size-5-2/700/700",
      "https://picsum.photos/seed/smash-champion-football-size-5-3/700/700"
    ],
    "description": "A machine-stitched size 5 football with a butyl bladder that holds air pressure through a full season of turf games.",
    "highlights": [
      "Machine-stitched PU cover",
      "Butyl bladder, holds air longer",
      "All-weather playable surface",
      "FIFA-standard size and weight"
    ],
    "specifications": {
      "Size": "5 (Standard)",
      "Material": "PU Cover, Butyl Bladder",
      "Use": "Turf / Ground",
      "Warranty": "NA"
    },
    "colors": [
      "White/Red",
      "White/Blue"
    ],
    "sizes": [
      "Size 5"
    ],
    "stock": 179,
    "badge": null,
    "delivery": "Delivery in 4-5 Days",
    "tags": [
      "sports",
      "football",
      "smash"
    ]
  },
  {
    "id": 40,
    "slug": "havok-rgb-gaming-mouse",
    "name": "Havok RGB Gaming Mouse",
    "brand": "Havok",
    "category": "gaming",
    "subcategory": "Peripherals",
    "price": 1299,
    "mrp": 1999,
    "discount": 35,
    "rating": 4.8,
    "reviewCount": 952,
    "images": [
      "https://picsum.photos/seed/havok-rgb-gaming-mouse-1/700/700",
      "https://picsum.photos/seed/havok-rgb-gaming-mouse-2/700/700",
      "https://picsum.photos/seed/havok-rgb-gaming-mouse-3/700/700"
    ],
    "description": "A lightweight gaming mouse with an 16000 DPI optical sensor and on-the-fly DPI switching for fast-paced titles.",
    "highlights": [
      "16000 DPI optical sensor",
      "On-the-fly DPI switching",
      "6 programmable buttons",
      "Customisable RGB lighting"
    ],
    "specifications": {
      "Sensor": "Optical, 16000 DPI",
      "Buttons": "6 Programmable",
      "Connectivity": "Wired USB",
      "Warranty": "1 Year"
    },
    "colors": [
      "Black"
    ],
    "sizes": null,
    "stock": 38,
    "badge": null,
    "delivery": "Delivery in 2 Days",
    "tags": [
      "gaming",
      "peripherals",
      "havok"
    ]
  },
  {
    "id": 41,
    "slug": "havok-mechanical-gaming-keyboard",
    "name": "Havok Mechanical Gaming Keyboard",
    "brand": "Havok",
    "category": "gaming",
    "subcategory": "Peripherals",
    "price": 2999,
    "mrp": 4499,
    "discount": 33,
    "rating": 4.0,
    "reviewCount": 71,
    "images": [
      "https://picsum.photos/seed/havok-mechanical-gaming-keyboard-1/700/700",
      "https://picsum.photos/seed/havok-mechanical-gaming-keyboard-2/700/700",
      "https://picsum.photos/seed/havok-mechanical-gaming-keyboard-3/700/700"
    ],
    "description": "A full-size mechanical keyboard with blue clicky switches and per-key RGB, loud enough to annoy a roommate.",
    "highlights": [
      "Blue clicky mechanical switches",
      "Per-key RGB backlighting",
      "Anti-ghosting, N-key rollover",
      "Detachable wrist rest"
    ],
    "specifications": {
      "Switch": "Blue Mechanical",
      "Layout": "Full Size, 104 Keys",
      "Connectivity": "Wired USB",
      "Warranty": "1 Year"
    },
    "colors": [
      "Black"
    ],
    "sizes": null,
    "stock": 158,
    "badge": "Limited Stock",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "gaming",
      "peripherals",
      "havok"
    ]
  },
  {
    "id": 42,
    "slug": "pulseon-gaming-headset-7-1",
    "name": "Pulseon Gaming Headset 7.1",
    "brand": "Pulseon",
    "category": "gaming",
    "subcategory": "Audio",
    "price": 1799,
    "mrp": 2799,
    "discount": 36,
    "rating": 4.5,
    "reviewCount": 42,
    "images": [
      "https://picsum.photos/seed/pulseon-gaming-headset-7-1-1/700/700",
      "https://picsum.photos/seed/pulseon-gaming-headset-7-1-2/700/700",
      "https://picsum.photos/seed/pulseon-gaming-headset-7-1-3/700/700"
    ],
    "description": "A closed-back gaming headset with virtual 7.1 surround, letting you hear footsteps before your squad calls it out.",
    "highlights": [
      "Virtual 7.1 surround sound",
      "Detachable noise-cancelling mic",
      "Memory foam ear cushions",
      "50mm drivers"
    ],
    "specifications": {
      "Driver": "50mm",
      "Surround": "Virtual 7.1",
      "Connectivity": "USB / 3.5mm",
      "Warranty": "1 Year"
    },
    "colors": [
      "Black/Red"
    ],
    "sizes": null,
    "stock": 0,
    "badge": null,
    "delivery": "Delivery in 2 Days",
    "tags": [
      "gaming",
      "audio",
      "pulseon"
    ]
  },
  {
    "id": 43,
    "slug": "orbit-ergonomic-gaming-chair",
    "name": "Orbit Ergonomic Gaming Chair",
    "brand": "Orbit",
    "category": "gaming",
    "subcategory": "Furniture",
    "price": 8999,
    "mrp": 13999,
    "discount": 36,
    "rating": 4.0,
    "reviewCount": 92,
    "images": [
      "https://picsum.photos/seed/orbit-ergonomic-gaming-chair-1/700/700",
      "https://picsum.photos/seed/orbit-ergonomic-gaming-chair-2/700/700",
      "https://picsum.photos/seed/orbit-ergonomic-gaming-chair-3/700/700"
    ],
    "description": "A reclining gaming chair with lumbar and neck support, built for the marathon raid that runs past midnight.",
    "highlights": [
      "Reclines up to 155 degrees",
      "Lumbar and neck pillow included",
      "4D adjustable armrests",
      "Class-4 gas lift"
    ],
    "specifications": {
      "Material": "PU Leather",
      "Recline": "90-155 degrees",
      "Weight Capacity": "120kg",
      "Warranty": "2 Years"
    },
    "colors": [
      "Black/Red",
      "Black/Blue"
    ],
    "sizes": null,
    "stock": 228,
    "badge": "Bestseller",
    "delivery": "Delivery by Tomorrow",
    "tags": [
      "gaming",
      "furniture",
      "orbit"
    ]
  },
  {
    "id": 44,
    "slug": "krest-24-240hz-gaming-monitor",
    "name": "Krest 24\" 240Hz Gaming Monitor",
    "brand": "Krest",
    "category": "gaming",
    "subcategory": "Monitors",
    "price": 17999,
    "mrp": 24999,
    "discount": 28,
    "rating": 4.4,
    "reviewCount": 598,
    "images": [
      "https://picsum.photos/seed/krest-24-240hz-gaming-monitor-1/700/700",
      "https://picsum.photos/seed/krest-24-240hz-gaming-monitor-2/700/700",
      "https://picsum.photos/seed/krest-24-240hz-gaming-monitor-3/700/700"
    ],
    "description": "A 24-inch Full HD panel running at 240Hz, for players who insist the extra frames actually matter.",
    "highlights": [
      "1920x1080 @ 240Hz",
      "1ms response time",
      "AMD FreeSync Premium",
      "Low blue light mode"
    ],
    "specifications": {
      "Panel": "IPS Full HD",
      "Refresh Rate": "240Hz",
      "Response Time": "1ms",
      "Warranty": "3 Years"
    },
    "colors": [
      "Black"
    ],
    "sizes": null,
    "stock": 179,
    "badge": "New",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "gaming",
      "monitors",
      "krest"
    ]
  },
  {
    "id": 45,
    "slug": "havok-wireless-gamepad",
    "name": "Havok Wireless Gamepad",
    "brand": "Havok",
    "category": "gaming",
    "subcategory": "Peripherals",
    "price": 1499,
    "mrp": 2299,
    "discount": 35,
    "rating": 4.4,
    "reviewCount": 1509,
    "images": [
      "https://picsum.photos/seed/havok-wireless-gamepad-1/700/700",
      "https://picsum.photos/seed/havok-wireless-gamepad-2/700/700",
      "https://picsum.photos/seed/havok-wireless-gamepad-3/700/700"
    ],
    "description": "A wireless controller with hall-effect thumbsticks that resist drift, compatible with PC and Android.",
    "highlights": [
      "Hall-effect thumbsticks, drift-resistant",
      "2.4GHz wireless + Bluetooth",
      "20-hour battery life",
      "PC and Android compatible"
    ],
    "specifications": {
      "Connectivity": "2.4GHz + Bluetooth",
      "Battery": "20 Hours",
      "Compatibility": "PC, Android",
      "Warranty": "1 Year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "sizes": null,
    "stock": 233,
    "badge": "Trending",
    "delivery": "Delivery in 2 Days",
    "tags": [
      "gaming",
      "peripherals",
      "havok"
    ]
  },
  {
    "id": 46,
    "slug": "rangrez-handcrafted-leather-wallet",
    "name": "Rangrez Handcrafted Leather Wallet",
    "brand": "Rangrez",
    "category": "accessories",
    "subcategory": "Wallets & Bags",
    "price": 799,
    "mrp": 1299,
    "discount": 38,
    "rating": 4.7,
    "reviewCount": 1681,
    "images": [
      "https://picsum.photos/seed/rangrez-handcrafted-leather-wallet-1/700/700",
      "https://picsum.photos/seed/rangrez-handcrafted-leather-wallet-2/700/700",
      "https://picsum.photos/seed/rangrez-handcrafted-leather-wallet-3/700/700"
    ],
    "description": "A slim bi-fold wallet hand-stitched by leather artisans in Kanpur, breaking in a little more with every month carried.",
    "highlights": [
      "Genuine hand-stitched leather",
      "6 card slots + 2 currency pockets",
      "RFID-blocking lining",
      "Slim bi-fold profile"
    ],
    "specifications": {
      "Material": "Genuine Leather",
      "Slots": "6 Card, 2 Currency",
      "RFID Protected": "Yes",
      "Warranty": "6 Months"
    },
    "colors": [
      "Tan",
      "Dark Brown",
      "Black"
    ],
    "sizes": null,
    "stock": 112,
    "badge": null,
    "delivery": "Delivery by Tomorrow",
    "tags": [
      "accessories",
      "wallets-bags",
      "rangrez"
    ]
  },
  {
    "id": 47,
    "slug": "veerta-canvas-everyday-backpack",
    "name": "Veerta Canvas Everyday Backpack",
    "brand": "Veerta",
    "category": "accessories",
    "subcategory": "Wallets & Bags",
    "price": 1599,
    "mrp": 2499,
    "discount": 36,
    "rating": 4.0,
    "reviewCount": 910,
    "images": [
      "https://picsum.photos/seed/veerta-canvas-everyday-backpack-1/700/700",
      "https://picsum.photos/seed/veerta-canvas-everyday-backpack-2/700/700",
      "https://picsum.photos/seed/veerta-canvas-everyday-backpack-3/700/700"
    ],
    "description": "A rugged canvas backpack with a padded 15-inch laptop sleeve, sized for a commute that includes a metro squeeze.",
    "highlights": [
      "Water-resistant canvas fabric",
      "Padded 15-inch laptop sleeve",
      "22L capacity, multiple compartments",
      "Reinforced haul handle"
    ],
    "specifications": {
      "Material": "Canvas + PU Trims",
      "Capacity": "22L",
      "Laptop Sleeve": "Up to 15\"",
      "Warranty": "6 Months"
    },
    "colors": [
      "Olive",
      "Black",
      "Navy"
    ],
    "sizes": [
      "22L"
    ],
    "stock": 98,
    "badge": null,
    "delivery": "Delivery in 4-5 Days",
    "tags": [
      "accessories",
      "wallets-bags",
      "veerta"
    ]
  },
  {
    "id": 48,
    "slug": "sundara-oxidised-silver-jhumka-earrings",
    "name": "Sundara Oxidised Silver Jhumka Earrings",
    "brand": "Sundara",
    "category": "accessories",
    "subcategory": "Jewellery",
    "price": 599,
    "mrp": 899,
    "discount": 33,
    "rating": 4.4,
    "reviewCount": 1521,
    "images": [
      "https://picsum.photos/seed/sundara-oxidised-silver-jhumka-earrings-1/700/700",
      "https://picsum.photos/seed/sundara-oxidised-silver-jhumka-earrings-2/700/700",
      "https://picsum.photos/seed/sundara-oxidised-silver-jhumka-earrings-3/700/700"
    ],
    "description": "Oxidised jhumka earrings with a temple-inspired motif, light enough for daily wear and festive enough for occasions.",
    "highlights": [
      "Oxidised German silver",
      "Temple-inspired motif",
      "Lightweight for all-day wear",
      "Hypoallergenic hooks"
    ],
    "specifications": {
      "Material": "Oxidised German Silver",
      "Style": "Jhumka",
      "Closure": "Hook",
      "Warranty": "NA"
    },
    "colors": [
      "Oxidised Silver"
    ],
    "sizes": null,
    "stock": 3,
    "badge": "Limited Stock",
    "delivery": "Delivery by Tomorrow",
    "tags": [
      "accessories",
      "jewellery",
      "sundara"
    ]
  },
  {
    "id": 49,
    "slug": "terra-aviator-sunglasses",
    "name": "Terra Aviator Sunglasses",
    "brand": "Terra & Co",
    "category": "accessories",
    "subcategory": "Eyewear",
    "price": 1199,
    "mrp": 1899,
    "discount": 37,
    "rating": 4.3,
    "reviewCount": 722,
    "images": [
      "https://picsum.photos/seed/terra-aviator-sunglasses-1/700/700",
      "https://picsum.photos/seed/terra-aviator-sunglasses-2/700/700",
      "https://picsum.photos/seed/terra-aviator-sunglasses-3/700/700"
    ],
    "description": "Classic aviator sunglasses with polarised lenses, cutting glare on the drive without turning the world orange.",
    "highlights": [
      "Polarised UV400 lenses",
      "Anti-glare coating",
      "Spring-loaded hinges",
      "Includes hard case"
    ],
    "specifications": {
      "Lens": "Polarised UV400",
      "Frame": "Alloy",
      "Style": "Aviator",
      "Warranty": "1 Year"
    },
    "colors": [
      "Gold/Green",
      "Gunmetal/Grey"
    ],
    "sizes": null,
    "stock": 3,
    "badge": null,
    "delivery": "Delivery in 2 Days",
    "tags": [
      "accessories",
      "eyewear",
      "terra-&-co"
    ]
  },
  {
    "id": 50,
    "slug": "ojas-reversible-web-belt",
    "name": "Ojas Reversible Web Belt",
    "brand": "Ojas",
    "category": "accessories",
    "subcategory": "Belts",
    "price": 499,
    "mrp": 799,
    "discount": 38,
    "rating": 4.1,
    "reviewCount": 1126,
    "images": [
      "https://picsum.photos/seed/ojas-reversible-web-belt-1/700/700",
      "https://picsum.photos/seed/ojas-reversible-web-belt-2/700/700",
      "https://picsum.photos/seed/ojas-reversible-web-belt-3/700/700"
    ],
    "description": "A reversible canvas web belt with a flip buckle, swapping black to brown without needing a second belt.",
    "highlights": [
      "Reversible black and brown",
      "Flip-style auto-lock buckle",
      "Adjustable, trimmable length",
      "Rust-resistant hardware"
    ],
    "specifications": {
      "Material": "Canvas + Leather Trim",
      "Buckle": "Flip Auto-Lock",
      "Reversible": "Yes",
      "Warranty": "NA"
    },
    "colors": [
      "Black/Brown"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 5,
    "badge": "Bestseller",
    "delivery": "Delivery in 4-5 Days",
    "tags": [
      "accessories",
      "belts",
      "ojas"
    ]
  },
  {
    "id": 51,
    "slug": "mannat-silver-tone-bracelet-watch",
    "name": "Mannat Silver-Tone Bracelet Watch",
    "brand": "Mannat",
    "category": "accessories",
    "subcategory": "Watches",
    "price": 1399,
    "mrp": 2199,
    "discount": 36,
    "rating": 4.1,
    "reviewCount": 975,
    "images": [
      "https://picsum.photos/seed/mannat-silver-tone-bracelet-watch-1/700/700",
      "https://picsum.photos/seed/mannat-silver-tone-bracelet-watch-2/700/700",
      "https://picsum.photos/seed/mannat-silver-tone-bracelet-watch-3/700/700"
    ],
    "description": "A slim analog watch on a stainless steel bracelet strap, dressed up enough for a saree and casual enough for jeans.",
    "highlights": [
      "Stainless steel bracelet strap",
      "Japanese quartz movement",
      "Scratch-resistant mineral glass",
      "Water resistant up to 30m"
    ],
    "specifications": {
      "Movement": "Japanese Quartz",
      "Case": "Stainless Steel",
      "Water Resistance": "30m",
      "Warranty": "1 Year"
    },
    "colors": [
      "Silver",
      "Rose Gold"
    ],
    "sizes": null,
    "stock": 3,
    "badge": "New",
    "delivery": "Delivery in 4-5 Days",
    "tags": [
      "accessories",
      "watches",
      "mannat"
    ]
  }
];

const SITE_CONFIG = {
  brand: "KAARVAN",
  tagline: "The trade route, reimagined",
  announcements: [
    "Free delivery on orders above \u20b9499",
    "7-day easy returns on every order",
    "100% secure payments \u2014 UPI, cards & COD",
    "New arrivals dropping every Friday"
  ],
  coupons: {
    "SAVE10":   { type: "percent", value: 10, minOrder: 999,  desc: "10% off on orders above \u20b9999" },
    "SAVE20":   { type: "percent", value: 20, minOrder: 2499, desc: "20% off on orders above \u20b92499" },
    "WELCOME15":{ type: "percent", value: 15, minOrder: 0,    desc: "15% off for new customers" },
    "FREESHIP": { type: "shipping", value: 0, minOrder: 0,    desc: "Free delivery on this order" }
  },
  deliveryFee: 79,
  freeDeliveryThreshold: 499,
  taxRate: 0.05
};
