import { useState, useEffect } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: 2,
    title: "Throne of Glass Series",
    author: "Sarah J. Maas",
    tagline: "Starting at $800",
    coverImage: "https://i.imgur.com/3IoqhBD.jpeg",
    badge: "Available",
    versions: [
      { id: "v1", label: "Forest Green — Terrasen's Version", price: "Starting at $800" },
      { id: "v2", label: "Deep Maroon — Fireheart's Version", price: "Starting at $800" },
      { id: "v4", label: "Midnight Navy — Dorian's Version", price: "Starting at $800" },
      { id: "v3", label: "Onyx Black — Manon's Version", price: "Starting at $800" },
      { id: "v7", label: "Muted Rose — Lysandra's Version", price: "Starting at $800" },
      { id: "v6", label: "Smoked Plum — Maeve's Version", price: "Starting at $800" },
      { id: "v5", label: "Dusty Lilac — Yrene's Version", price: "Starting at $800" },
    ],
    versionImageMap: { v2: 3, v4: 4, v3: 5, v7: 6, v6: 7, v5: 8 },
    description:
      "A breathtaking collector's set of the complete Throne of Glass series, available in a range of stunning colour schemes. Each volume is designed by myself and individually rebound by hand.\n\nThese feature a chameleon HTV background — a colour-shifting material that transforms in different lighting to reveal and illuminate a hidden scene from that book's story. Catch it in the right light and the artwork comes alive, telling its own tale beneath the surface.\n\nOpen the cover and the magic continues — each book comes with fully custom end pages featuring artwork that depicts a special scene from that story.\n\nEach book also comes with a velvet bookmark with a TOG themed charm, as well as a detached bookmark handcrafted from the original book's cover.\n\nWhile I've created a range of versions to choose from, you can always message me for different colour themes, changes in quotes, or whatever you can dream of — I love bringing custom ideas to life.\n\nChanges to book cloth colour, font colour, and quotes are not subject to additional charges.\n\nPlease understand that these are all handmade and are subject to slight variations and small imperfections.",
    details: [
      "All 8 books in my recommended reading order rebound by hand",
      "Chameleon HTV background — colour-shifting artwork",
      "Fully custom end pages with scene artwork",
      "Available in 7 colour schemes",
      "Velvet bookmark with TOG themed charm with additional detached bookmark made from the original book's cover",
    ],
    images: [
      "https://i.imgur.com/3IoqhBD.jpeg",
      "https://i.imgur.com/8aOD4yY.jpeg",
      "https://i.imgur.com/PTLjqDy.jpeg",
      "https://i.imgur.com/2vCA5cL.jpeg",
      "https://i.imgur.com/5l5kdPJ.jpeg",
      "https://i.imgur.com/Jv56zxJ.jpeg",
      "https://i.imgur.com/jVniExQ.jpeg",
      "https://i.imgur.com/G2y9UQ8.jpeg",
      "https://i.imgur.com/8Q3eAPI.jpeg",
    ],
    videoUrls: [
      { url: "/videos/throne-of-glass-cover-pages.mp4", vertical: false, native: true },
      { url: "/videos/throne-of-glass-chameleon-htv.mp4", vertical: true, native: true },
    ],
  },
  {
    id: 1,
    title: "ACOTAR Series",
    author: "Sarah J. Maas",
    tagline: "Starting at $400",
    coverImage: "https://i.imgur.com/jGEfig3.jpeg",
    badge: "Available",
    versions: [
      { id: "v1", label: "Night Court's Version", price: "Starting at $400" },
      { id: "v2", label: "Feyre's Version", price: "Starting at $400" },
    ],
    versionImageMap: { v1: 0, v2: 2 },
    description:
      "A showstopping collector's set of the complete ACOTAR series. Each book is individually rebound by hand and finished with chameleon HTV — a colour-shifting material that transforms and shimmers in different lighting, making the covers come alive depending on where you view them.\n\nThere are two book spine designs to choose from. Opt for a sweeping scene of the City of Velaris spread across the spines or choose individually designed spines, each featuring a classic symbol iconic to that book.\n\nEvery book features end pages designed to complement and match the theme of that book's cover, tying the whole look together beautifully from the outside in. And keep an eye out — custom end pages depicting iconic scenes from each book are currently in the works and will be coming very soon.\n\nEach book also comes with a velvet bookmark with an ACOTAR themed charm, as well as a detached bookmark handcrafted from the original book's cover.\n\nOnly two colourways are shown here, but you can always message me for different colour themes, changes in quotes, or whatever you can dream of — I love bringing custom ideas to life.\n\nChanges to book cloth colour, font colour, and quotes are not subject to additional charges.\n\nPlease understand that these are all handmade and are subject to slight variations and small imperfections.",
    details: [
      "All 5 books in the series rebound by hand",
      "Chameleon HTV background — colour-shifting artwork",
      "Themed end pages",
      "Velvet bookmark with ACOTAR themed charm with additional detached bookmark made from the original book's cover",
    ],
    images: [
      "https://i.imgur.com/jGEfig3.jpeg",
      "https://i.imgur.com/Erpnu2Z.jpeg",
      "https://i.imgur.com/AN9DRzu.jpeg",
      "https://i.imgur.com/A6PLhEB.jpeg",
      "https://i.imgur.com/pD7E6bJ.jpeg",
      "https://i.imgur.com/aYEfTHd.jpeg",
      "https://i.imgur.com/HXSBPbE.jpeg",
      "https://i.imgur.com/1izSRCP.jpeg",
    ],
    videoUrls: [],
  },
  {
    id: 8,
    title: "Harry Potter Series",
    author: "J.K. Rowling",
    tagline: "Starting at $560",
    coverImage: "https://i.imgur.com/fzSHvXB.jpeg",
    badge: "Available",
    versions: [
      { id: "v1", label: "Custom — contact to discuss", price: "Starting at $560" },
    ],
    description:
      "For the fans who have been waiting by the letterbox since they were eleven. Each book is individually rebound by hand and finished with chameleon HTV — a colour-shifting material that transforms and shimmers in different lighting, no spell required.\n\nEvery book features custom Harry Potter themed end pages, a ribboned bookmark with a wizarding world themed charm, as well as a detached bookmark handcrafted from the original book's cover.\n\nAs always, you can always message me for different colour themes, changes in quotes, or whatever your heart desires — I love bringing custom ideas to life. Gryffindor red and gold? Slytherin green and silver? Ravenclaw blue? Hufflepuff yellow? Your house, your rules.\n\nChanges to book cloth colour, font colour, and quotes are not subject to additional charges.\n\nPlease understand that these are all handmade and are subject to slight variations and small imperfections. Even Ollivander wasn't perfect on the first try.",
    details: [
      "All 7 books in the series rebound by hand",
      "Chameleon HTV background — colour-shifting artwork",
      "Harry Potter themed end pages",
      "Ribboned bookmark with HP themed charm with additional detached bookmark made from the original book's cover",
    ],
    images: [
      "https://i.imgur.com/fzSHvXB.jpeg",
      "https://i.imgur.com/JUk9uUn.jpeg",
      "https://i.imgur.com/kZnJWce.jpeg",
      "https://i.imgur.com/KJ2guOb.jpeg",
      "https://i.imgur.com/Xjz99ic.jpeg",
      "https://i.imgur.com/jiR4UBz.jpeg",
      "https://i.imgur.com/9L8wU67.jpeg",
      "https://i.imgur.com/QRupoii.jpeg",
      "https://i.imgur.com/EvVfT9z.jpeg",
    ],
    videoUrls: [],
  },
  {
    id: 3,
    title: "The Empyrean Series",
    author: "Rebecca Yarros",
    tagline: "Starting at $240",
    coverImage: "https://i.imgur.com/e6FQzJV.jpeg",
    badge: "Available",
    versions: [
      { id: "v1", label: "Custom — contact to discuss", price: "Starting at $240" },
    ],
    description:
      "Each book is individually rebound by hand and finished with chameleon HTV — a colour-shifting material that transforms and shimmers in different lighting - think of it as the Andarna effect.\n\nEvery book features end pages designed to complement and match the theme of that book's cover, tying the whole look together beautifully from the outside in. And keep an eye out — custom end pages depicting iconic scenes from each book are currently in the works and will be coming very soon. Good things come to those who survive the Gauntlet.\n\nEach book also comes with a velvet bookmark with a dragon charm, as well as a detached bookmark handcrafted from the original book's cover.\n\nAlthough only Violet's version is shown here, you can always message me for different colour themes, changes in quotes, or whatever you can dream of — I love bringing custom ideas to life.\n\nChanges to book cloth colour, font colour, and quotes are not subject to additional charges.\n\nPlease understand that these are all handmade and are subject to slight variations and small imperfections. Even the most skilled rider falls off their dragon once or twice.",
    details: [
      "All 3 books in the series rebound by hand",
      "Chameleon HTV background — colour-shifting artwork",
      "Velvet bookmark with dragon charm with additional detached bookmark made from the original book's cover",
    ],
    images: [
      "https://i.imgur.com/e6FQzJV.jpeg",
      "https://i.imgur.com/mCBCVUn.jpeg",
      "https://i.imgur.com/lrDhlDS.jpeg",
    ],
    videoUrls: [],
  },
  {
    id: 4,
    title: "The Lord of the Rings Series",
    author: "J.R.R. Tolkien",
    tagline: "Starting at $210",
    coverImage: "https://i.imgur.com/PdhEVCM.jpeg",
    badge: "Available",
    versions: [
      { id: "v1", label: "Three Book Set: Fellowship of the Ring, Two Towers, Return of the King", price: "Starting at $210" },
      { id: "v2", label: "Four Book Set: The Hobbit, Fellowship of the Ring, Two Towers, Return of the King", price: "Starting at $280" },
    ],
    description:
      "One set to rule them all. Each book is individually rebound by hand and finished with chameleon HTV — a colour-shifting material that transforms and shimmers in different lighting, making the covers come alive depending on where you view them. Even Gandalf couldn't have seen that coming.\n\nEach book also comes with a velvet bookmark with an LOTR themed charm, as well as a detached bookmark handcrafted from the original book's cover.\n\nAlthough only one colourway is shown here, you can always message me for different colour themes, changes in quotes, or whatever you can dream of — I love bringing custom ideas to life.\n\nChanges to book cloth colour, font colour, and quotes are not subject to additional charges.\n\nPlease understand that these are all handmade and are subject to slight variations and small imperfections.",
    details: [
      "3 or 4 book sets rebound by hand",
      "Chameleon HTV background — colour-shifting artwork",
      "Velvet bookmark with LOTR themed charm with additional detached bookmark made from the original book's cover",
    ],
    images: [
      "https://i.imgur.com/PdhEVCM.jpeg",
      "https://i.imgur.com/dQtEsie.jpeg",
      "https://i.imgur.com/Z1fq5q7.jpeg",
    ],
    videoUrls: [],
  },
  {
    id: 9,
    title: "Off The Shelf",
    author: "",
    tagline: "Starting at $70",
    coverImage: "https://i.imgur.com/HduipCn.jpeg",
    badge: "Available",
    versions: [
      { id: "v1", label: "Barbarian Days by William Finnegan", price: "$70" },
      { id: "v2", label: "Project Hail Mary by Andy Weir", price: "$70" },
    ],
    versionImageMap: { v1: 0, v2: 2 },
    description:
      "Discover the collection of pre-designed books that have already been thoughtfully commissioned. Whether you're looking for a gift or a special edition to your own bookshelf, these hand crafted creations are available now.\n\nIf you'd like to make one of these designs uniquely yours, please reach out to me for customizations.\n\nChanges to book cloth colour, font colour, and quotes are not subject to additional charges.\n\nPlease understand that these are all handmade and are subject to slight variations and small imperfections.",
    hasContactLink: true,
    details: [
      "Book of choice",
      "Attached bookmark with appropriately themed charm with additional detached bookmark made from the original book's cover",
    ],
    images: [
      "https://i.imgur.com/HduipCn.jpeg",
      "https://i.imgur.com/wMBMjNZ.jpeg",
      "https://i.imgur.com/4gMLV6X.jpeg",
    ],
    videoUrls: [],
  },
  {
    id: 5,
    title: "Custom Commission Piece",
    author: "",
    tagline: "Starting at $100",
    coverImage: "https://i.imgur.com/jyjvmDh.png",
    badge: "Available",
    versions: [
      { id: "v1", label: "Custom — contact to discuss", price: "Starting at $100" },
    ],
    description:
      "Custom book rebind commissions are available for any book, any series, any genre — starting at $100 per book, with pricing depending on the level and complexity of customization involved.\n\nEvery commission is a fully collaborative process. We'll work closely together from start to finish — from the initial concept all the way through to the final product landing in your hands.\n\nNot sure exactly what you want yet? That's completely fine. Part of the process is the fun of figuring it out together, and brainstorming is always on the table. Whether you come to me with a fully formed vision or just a vague feeling, we'll get there.",
    details: [],
    images: [
      "https://i.imgur.com/jyjvmDh.png",
    ],
    videoUrls: [],
  },
  {
    id: 6,
    title: "Crescent City Series",
    author: "Sarah J. Maas",
    tagline: "",
    coverImage: "https://i.imgur.com/9RMq3qh.png",
    badge: "Coming Soon",
    versions: [
      { id: "v1", label: "To be announced", price: "TBA" },
    ],
    description:
      "A stunning rebind of the Crescent City series — coming soon. Get in touch to register your interest.",
    details: [
      "Details coming soon",
      "Contact us to register interest",
    ],
    images: [
      "https://i.imgur.com/9RMq3qh.png",
    ],
    videoUrls: [],
  },
  {
    id: 7,
    title: "Fae & Alchemy Series",
    author: "Callie Hart",
    tagline: "",
    coverImage: "https://i.imgur.com/GUDJF3A.png",
    badge: "Coming Soon",
    versions: [
      { id: "v1", label: "To be announced", price: "TBA" },
    ],
    description:
      "A beautiful rebind of Callie Hart's Fae & Alchemy series — coming soon. Get in touch to register your interest.",
    details: [
      "Details coming soon",
      "Contact us to register interest",
    ],
    images: [
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80",
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=800&q=80",
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=800&q=80",
    ],
    videoUrls: [],
  },
];

const FAQS = [
  {
    q: "How do I order a commission?",
    a: "All commissions begin with a conversation. Since each book has a variety of customizations, I want to make sure every detail is exactly right before any work begins. Visit the Contact page to get in touch.\n\nAlternatively, you can email me at custombooksbyapple@gmail.com or reach me via IG.",
    hasContactLink: true,
    hasEmailLink: true,
  },
  {
    q: "How long does a commission take?",
    a: "Currently, the lead time is 2-4 weeks. I'll give you a specific estimate when we discuss your project.",
  },
  {
    q: "How much does a custom rebind cost?",
    a: "Starting prices are noted on the works page.\n\nChanges to book colour, font/design colour, and quotes are at no cost.\n\nFor more customized changes such as complete design changes or fully customized commission pieces, pricing is determined on a project-by-project basis — just reach out and we'll discuss the details and agree on a price before any work begins.",
    hasWorksLink: true,
  },
  {
    q: "What payment methods do you accept?",
    a: "I accept PayPal, Venmo, Zelle, and Revolut.",
  },
  {
    q: "Do I need to send you my own copy of the book?",
    a: "For commission projects, no, I will supply all materials.\n\nFor book repairs or restorations, I will rebind your existing copy, preserving the original text block wherever possible. See Repairs/Restorations FAQ for more details.",
  },
  {
    q: "Can I choose my own colours and materials?",
    a: "Absolutely. The versions shown on each product page are my suggested starting points, but I can source materials to match almost any vision. If you have a swatch, a photo, or just a feeling — send it my way.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. I ship worldwide via tracked courier. Postage is charged at cost and varies by destination. Books are packaged carefully to prevent damage in the shipping process.",
  },
  {
    q: "Can you match a set I already have?",
    a: "Yes — matching an existing set is one of my favourite challenges. Send photos of the books you want matched and I'll work to replicate the materials, colours, and details as closely as possible.",
  },
  {
    q: "Do you repair or work with damaged books?",
    a: "I know books can have sentimental value. I can work with books that have loose pages, detached spines, or water damage. I'll assess what's salvageable during our initial consultation and be honest about what's possible.",
  },
];

// ─── Styles (injected as a <style> tag) ─────────────────────────────────────

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    img { max-width: 100%; height: auto; }

    :root {
      --navy:   #2d1f2e;
      --parch:  #f0e4ed;
      --gold:   #b07a9e;
      --ivory:  #faf4f8;
      --sage:   #9e6b8a;
      --dark:   #1a0f1c;
      --mid:    #8b6880;
      --light:  #e4cedd;
    }

    html { scroll-behavior: smooth; overflow-x: hidden; }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--ivory);
      color: var(--navy);
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* NAV */
    nav {
      position: sticky; top: 0; z-index: 100;
      background: var(--navy);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 2.5rem;
      height: 64px;
      border-bottom: 1px solid rgba(201,169,110,0.25);
    }
    .nav-social {
      display: flex; align-items: center; gap: 1.2rem;
    }
    .nav-social a {
      color: rgba(240,230,208,0.7); transition: color 0.2s;
      display: flex; align-items: center;
    }
    .nav-social a:hover { color: var(--gold); }
    .nav-logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem; font-weight: 700;
      color: var(--gold);
      letter-spacing: 0.02em;
      cursor: pointer;
      display: flex; align-items: center; gap: 0.6rem;
    }
    .nav-logo-spine {
      display: flex; gap: 3px; align-items: center;
    }
    .nav-logo-spine span {
      display: block; width: 3px; background: var(--gold);
      border-radius: 1px;
    }
    .nav-links {
      display: flex; gap: 2rem; list-style: none;
    }
    .nav-links button {
      background: none; border: none; cursor: pointer;
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem; font-weight: 500;
      color: var(--parch); letter-spacing: 0.08em; text-transform: uppercase;
      opacity: 0.75; transition: opacity 0.2s, color 0.2s;
    }
    .nav-links button:hover, .nav-links button.active { opacity: 1; color: var(--gold); }

    /* HERO */
    .hero {
      background: var(--navy);
      padding: 2rem 2.5rem;
      display: flex;
      align-items: center; justify-content: center;
    }
    .hero-text { max-width: 520px; text-align: center; }
    .hero-eyebrow {
      font-size: 0.75rem; font-weight: 600;
      letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--gold); margin-bottom: 1.2rem;
    }
    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.4rem, 4vw, 3.6rem);
      font-weight: 700; line-height: 1.1;
      color: var(--ivory);
      margin-bottom: 1.2rem;
    }
    .hero-title em { color: var(--gold); font-style: italic; }
    .hero-sub {
      font-size: 1rem; line-height: 1.7;
      color: rgba(240,230,208,0.7);
      max-width: 400px;
    }
    .hero-spines {
      display: flex; gap: 10px; justify-content: center; align-items: flex-end;
      height: 280px;
    }
    .hero-spine {
      border-radius: 3px 3px 2px 2px;
      display: flex; align-items: flex-end; justify-content: center;
      padding-bottom: 12px;
      cursor: pointer; transition: transform 0.25s;
      position: relative; overflow: hidden;
    }
    .hero-spine:hover { transform: translateY(-12px); }
    .hero-spine-title {
      writing-mode: vertical-rl; text-orientation: mixed;
      transform: rotate(180deg);
      font-family: 'Playfair Display', serif;
      font-size: 0.7rem; font-weight: 600;
      color: rgba(255,255,255,0.85);
      letter-spacing: 0.05em;
    }

    /* PRODUCTS GRID */
    .section { padding: 4rem 2.5rem; }
    .section-header {
      display: flex; align-items: baseline; justify-content: space-between;
      margin-bottom: 2.5rem;
      border-bottom: 1px solid var(--light);
      padding-bottom: 1rem;
    }
    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.9rem; font-weight: 600;
    }
    .section-count {
      font-size: 0.8rem; font-weight: 500;
      color: var(--mid); letter-spacing: 0.1em; text-transform: uppercase;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }
    .product-card {
      background: #fff; border-radius: 6px;
      overflow: hidden; cursor: pointer;
      border: 1px solid var(--light);
      transition: box-shadow 0.25s, transform 0.25s;
      position: relative; min-width: 0;
    }
    .product-card:hover {
      box-shadow: 0 12px 36px rgba(26,31,46,0.14);
      transform: translateY(-4px);
    }
    .product-card[style*="default"]:hover {
      box-shadow: none;
      transform: none;
    }
    .product-card-img {
      width: 100%; aspect-ratio: 280 / 220; object-fit: cover;
      display: block;
    }
    .product-card-body { padding: 1.2rem 1.4rem 1.4rem; }
    .product-card-author {
      font-size: 0.72rem; font-weight: 600;
      letter-spacing: 0.12em; text-transform: uppercase;
      color: var(--sage); margin-bottom: 0.3rem;
    }
    .product-card-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem; font-weight: 600;
      margin-bottom: 0.4rem; line-height: 1.25;
    }
    .product-card-tagline {
      font-size: 0.82rem; color: var(--mid); line-height: 1.5;
    }
    .product-badge {
      position: absolute; top: 12px; right: 12px;
      font-size: 0.68rem; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase;
      padding: 3px 8px; border-radius: 2px;
    }
    .badge-available { background: var(--gold); color: var(--navy); }
    .badge-sold { background: var(--mid); color: #fff; }
    .badge-commission { background: var(--sage); color: #fff; }
    .badge-coming-soon { background: #3d1f3d; color: #d4a8c4; }

    /* PRODUCT DETAIL */
    .detail-back {
      background: none; border: none; cursor: pointer;
      font-size: 0.82rem; font-weight: 500;
      letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--gold); display: flex; align-items: center; gap: 6px;
      padding: 1.8rem 2.5rem; transition: opacity 0.2s;
    }
    .detail-back:hover { opacity: 0.7; }

    .detail-layout {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 4rem; padding: 0 2.5rem 4rem; align-items: start;
    }
    .detail-gallery { position: sticky; top: 80px; min-width: 0; }
    .detail-main-img-wrap {
      position: relative; margin-bottom: 0.8rem;
    }
    .detail-main-img {
      width: 100%; border-radius: 6px; object-fit: contain;
      height: auto; display: block;
      border: 1px solid var(--light); background: #fff;
    }
    .detail-nav-btn {
      position: absolute; top: 50%; transform: translateY(-50%);
      width: 40px; height: 40px; border-radius: 50%;
      background: rgba(255,255,255,0.85); border: 1px solid var(--light);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem; color: var(--ink); cursor: pointer;
      opacity: 0; transition: opacity 0.2s, background 0.2s;
      z-index: 2;
    }
    .detail-main-img-wrap:hover .detail-nav-btn { opacity: 1; }
    .detail-nav-btn:hover { background: #fff; }
    .detail-nav-btn.prev { left: 12px; }
    .detail-nav-btn.next { right: 12px; }
    .detail-thumbs {
      display: flex; gap: 8px; overflow-x: auto; max-width: 100%;
    }
    .detail-thumb {
      width: 80px; height: 60px; object-fit: cover; flex-shrink: 0;
      border-radius: 4px; cursor: pointer;
      border: 2px solid transparent; transition: border-color 0.2s;
      background: #fff;
    }
    .detail-thumb.active { border-color: var(--gold); }

    .detail-info { min-width: 0; }
    .detail-eyebrow {
      font-size: 0.72rem; font-weight: 600;
      letter-spacing: 0.14em; text-transform: uppercase;
      color: var(--sage); margin-bottom: 0.4rem;
    }
    .detail-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.8rem, 3vw, 2.6rem);
      font-weight: 700; line-height: 1.1;
      margin-bottom: 0.25rem;
    }
    .detail-tagline {
      font-size: 0.95rem; color: var(--mid);
      font-style: italic; margin-bottom: 1.6rem;
      font-family: 'Playfair Display', serif;
    }
    .detail-description {
      font-size: 0.95rem; line-height: 1.8;
      color: #3a4055; margin-bottom: 2rem;
    }

    /* Version selector */
    .version-label {
      font-size: 0.75rem; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--navy); margin-bottom: 0.5rem; display: block;
    }
    .version-select {
      width: 100%; padding: 0.7rem 1rem;
      font-family: 'Inter', sans-serif; font-size: 0.9rem;
      border: 1.5px solid var(--light); border-radius: 4px;
      background: #fff; color: var(--navy);
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c9a96e' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat; background-position: right 12px center;
      cursor: pointer; margin-bottom: 0.5rem;
      transition: border-color 0.2s;
    }
    .version-select:focus { outline: none; border-color: var(--gold); }

    .version-price {
      font-family: 'Playfair Display', serif;
      font-size: 1.6rem; font-weight: 600;
      color: var(--navy); margin: 0.8rem 0 1.5rem;
    }

    .enquire-btn {
      width: 100%; padding: 0.85rem;
      background: var(--navy); color: var(--gold);
      border: none; border-radius: 4px; cursor: pointer;
      font-family: 'Inter', sans-serif; font-size: 0.85rem;
      font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
      transition: background 0.2s, color 0.2s;
      margin-bottom: 0.6rem;
    }
    .enquire-btn:hover { background: var(--gold); color: var(--navy); }
    .enquire-note {
      font-size: 0.75rem; color: var(--mid); text-align: center;
      line-height: 1.5;
    }

    .detail-features { margin-top: 2rem; }
    .detail-features-title {
      font-size: 0.72rem; font-weight: 600;
      letter-spacing: 0.12em; text-transform: uppercase;
      color: var(--mid); margin-bottom: 0.8rem;
    }
    .detail-features ul {
      list-style: none;
      display: flex; flex-direction: column; gap: 0.4rem;
    }
    .detail-features li {
      font-size: 0.88rem; display: flex; align-items: flex-start; gap: 0.6rem;
      color: #3a4055;
    }
    .detail-features li::before {
      content: '—'; color: var(--gold); flex-shrink: 0;
    }

    .divider { width: 40px; height: 2px; background: var(--gold); margin: 1.5rem 0; }

    /* VIDEO PLACEHOLDER */
    .video-section { margin-top: 2.5rem; }
    .video-label {
      font-size: 0.72rem; font-weight: 600;
      letter-spacing: 0.12em; text-transform: uppercase;
      color: var(--mid); margin-bottom: 0.7rem;
    }
    .video-placeholder {
      width: 100%; height: 180px; background: var(--navy);
      border-radius: 6px; display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 0.6rem;
      border: 1px solid rgba(201,169,110,0.2); cursor: pointer;
      transition: border-color 0.2s;
    }
    .video-placeholder:hover { border-color: var(--gold); }
    .video-play {
      width: 44px; height: 44px; border-radius: 50%;
      background: var(--gold); display: flex; align-items: center; justify-content: center;
    }
    .video-play-icon { width: 0; height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 14px solid var(--navy);
      margin-left: 3px;
    }
    .video-label-inner {
      font-size: 0.78rem; color: rgba(240,230,208,0.6);
      letter-spacing: 0.06em;
    }
    .video-embed-wrap {
      position: relative; width: 100%; padding-top: 56.25%;
      border-radius: 6px; overflow: hidden; background: var(--navy);
      border: 1px solid rgba(201,169,110,0.2);
      margin-bottom: 0.8rem;
    }
    .video-embed-wrap.vertical {
      width: auto; max-width: 320px; max-height: 420px;
      aspect-ratio: 9 / 16; padding-top: 0;
      margin-left: auto; margin-right: auto;
    }
    .video-embed-wrap:last-child { margin-bottom: 0; }
    .video-embed {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;
    }
    video.video-embed { object-fit: contain; background: var(--navy); }

    /* FAQ */
    .faq-grid {
      max-width: 780px; margin: 0 auto;
      display: flex; flex-direction: column; gap: 0;
    }
    .faq-item {
      border-bottom: 1px solid var(--light);
    }
    .faq-question {
      width: 100%; background: none; border: none; cursor: pointer;
      text-align: left; padding: 1.3rem 0;
      font-family: 'Playfair Display', serif;
      font-size: 1.05rem; font-weight: 600;
      color: var(--navy);
      display: flex; justify-content: space-between; align-items: center;
      gap: 1rem;
    }
    .faq-chevron {
      flex-shrink: 0; width: 18px; height: 18px;
      transition: transform 0.2s;
      color: var(--gold);
    }
    .faq-chevron.open { transform: rotate(180deg); }
    .faq-answer {
      font-size: 0.92rem; line-height: 1.8;
      color: #3a4055; padding-bottom: 1.3rem;
      max-width: 680px;
    }

    /* CONTACT */
    .contact-layout {
      max-width: 620px; margin: 0 auto;
    }
    .contact-intro {
      font-size: 0.95rem; line-height: 1.8;
      color: #3a4055; margin-bottom: 2.5rem;
    }
    .field-group { margin-bottom: 1.2rem; }
    .field-label {
      display: block; font-size: 0.72rem; font-weight: 600;
      letter-spacing: 0.12em; text-transform: uppercase;
      color: var(--mid); margin-bottom: 0.4rem;
    }
    .field-input, .field-textarea, .field-select {
      width: 100%; padding: 0.75rem 1rem;
      font-family: 'Inter', sans-serif; font-size: 0.9rem;
      border: 1.5px solid var(--light); border-radius: 4px;
      background: #fff; color: var(--navy);
      transition: border-color 0.2s;
    }
    .field-input:focus, .field-textarea:focus, .field-select:focus {
      outline: none; border-color: var(--gold);
    }
    .field-textarea { resize: vertical; min-height: 140px; }
    .submit-btn {
      padding: 0.85rem 2.4rem;
      background: var(--navy); color: var(--gold);
      border: none; border-radius: 4px; cursor: pointer;
      font-family: 'Inter', sans-serif; font-size: 0.85rem;
      font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
      transition: background 0.2s, color 0.2s;
    }
    .submit-btn:hover { background: var(--gold); color: var(--navy); }
    .submit-success {
      padding: 1rem 1.4rem; background: #f0f7f0;
      border-left: 3px solid var(--sage); border-radius: 4px;
      font-size: 0.9rem; color: var(--sage); margin-top: 1rem;
    }

    .contact-aside {
      margin-top: 2.5rem; padding-top: 2rem;
      border-top: 1px solid var(--light);
      display: flex; gap: 2.5rem; flex-wrap: wrap;
    }
    .aside-item-label {
      font-size: 0.68rem; font-weight: 600;
      letter-spacing: 0.14em; text-transform: uppercase;
      color: var(--mid); margin-bottom: 0.3rem;
    }
    .aside-item-val {
      font-size: 0.9rem; color: var(--navy); font-weight: 500;
    }

    /* PAGE HEADER (for FAQ / Contact) */
    .page-header {
      background: var(--navy); padding: 3.5rem 2.5rem 2.5rem;
    }
    .page-header-eyebrow {
      font-size: 0.72rem; font-weight: 600;
      letter-spacing: 0.18em; text-transform: uppercase;
      color: var(--gold); margin-bottom: 0.6rem;
    }
    .page-header-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700; color: var(--ivory);
    }

    /* FOOTER */
    footer {
      background: var(--dark);
      padding: 2.5rem;
      display: flex; justify-content: space-between; align-items: center;
      flex-wrap: wrap; gap: 1rem;
      border-top: 1px solid rgba(201,169,110,0.15);
    }
    .footer-logo {
      font-family: 'Playfair Display', serif;
      font-size: 1rem; font-weight: 700;
      color: var(--gold);
    }
    .footer-note {
      font-size: 0.75rem; color: rgba(240,230,208,0.4);
    }

    @media (max-width: 768px) {
      .hero { grid-template-columns: 1fr; padding: 3rem 1.5rem 2.5rem; }
      .hero-spines { display: none; }
      .detail-layout { grid-template-columns: 1fr; gap: 2rem; padding: 0 1.5rem 3rem; }
      .detail-gallery { position: static; }
      .detail-main-img {
        width: auto; max-width: 100%; height: auto; max-height: 65vh;
        margin: 0 auto;
      }
      .detail-main-img-wrap { display: flex; justify-content: center; }
      .section { padding: 2rem 1rem; }
      nav {
        padding: 0 1rem;
        height: auto;
        flex-wrap: wrap;
        gap: 0;
      }
      .nav-logo {
        font-size: 0.95rem;
        padding: 0.75rem 0;
        width: 100%;
        justify-content: center;
        border-bottom: 1px solid rgba(176,122,158,0.15);
      }
      .nav-social {
        order: 3;
        justify-content: center;
        width: 100%;
        padding: 0.5rem 0;
        gap: 1.5rem;
      }
      .nav-links {
        order: 2;
        width: 100%;
        justify-content: center;
        gap: 0;
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(176,122,158,0.15);
      }
      .nav-links button {
        padding: 0.4rem 0.8rem;
        font-size: 0.72rem;
      }
      .products-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    }

    @media (max-width: 480px) {
      .products-grid { grid-template-columns: 1fr; }
    }
  `}</style>
);

// ─── Components ──────────────────────────────────────────────────────────────

const SpineDecor = () => {
  const spines = [
    { h: 200, w: 32, bg: "#2d1f2e" },
    { h: 240, w: 26, bg: "#4a2b47" },
    { h: 180, w: 38, bg: "#7a4a70" },
    { h: 260, w: 28, bg: "#b07a9e" },
    { h: 220, w: 34, bg: "#d4a8c4" },
    { h: 190, w: 30, bg: "#f0e4ed" },
  ];
  const titles = ["Gatsby", "Dune", "Frankenstein", "Austen", "Brontë", "Orwell"];
  return (
    <div className="hero-spines">
      {spines.map((s, i) => (
        <div
          key={i}
          className="hero-spine"
          style={{ width: s.w, height: s.h, background: s.bg,
            boxShadow: "inset -4px 0 8px rgba(0,0,0,0.35), 2px 4px 16px rgba(0,0,0,0.5)" }}
        >
          <span className="hero-spine-title">{titles[i]}</span>
        </div>
      ))}
    </div>
  );
};

function Chevron({ className }) {
  return (
    <svg className={`faq-chevron ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─── Pages ───────────────────────────────────────────────────────────────────

function HomePage({ onProduct }) {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">HAND CRAFTED WITH LOVE</p>

        </div>

      </section>

      {/* Products */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Current Commissions</h2>
        </div>
        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="product-card"
              onClick={() => p.badge !== "Coming Soon" && onProduct(p)}
              style={{ cursor: p.badge === "Coming Soon" ? "default" : "pointer" }}
            >
              <img src={p.coverImage} alt={p.title} className="product-card-img" />
              <span className={`product-badge badge-${p.badge.toLowerCase().replace(' ', '-').replace(' ', '-')}`}>{p.badge}</span>
              <div className="product-card-body">
                <p className="product-card-author">{p.author}</p>
                <h3 className="product-card-title">{p.title}</h3>
                <p className="product-card-tagline">{p.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ProductPage({ product, onBack, onContact }) {
  const [activeImg, setActiveImg] = useState(0);
  const [selectedVersion, setSelectedVersion] = useState(product.versions[0].id);
  const version = product.versions.find((v) => v.id === selectedVersion);

  useEffect(() => {
    if (product.versionImageMap && product.versionImageMap[selectedVersion] !== undefined) {
      setActiveImg(product.versionImageMap[selectedVersion]);
    }
  }, [selectedVersion, product]);

  return (
    <>
      <button className="detail-back" onClick={onBack}>
        ← Back to all works
      </button>
      <div className="detail-layout">
        {/* Gallery */}
        <div className="detail-gallery">
          <div className="detail-main-img-wrap">
            <img src={product.images[activeImg]} alt={product.title} className="detail-main-img" />
            {product.images.length > 1 && (
              <>
                <button
                  type="button"
                  className="detail-nav-btn prev"
                  aria-label="Previous photo"
                  onClick={() => setActiveImg((activeImg - 1 + product.images.length) % product.images.length)}
                >‹</button>
                <button
                  type="button"
                  className="detail-nav-btn next"
                  aria-label="Next photo"
                  onClick={() => setActiveImg((activeImg + 1) % product.images.length)}
                >›</button>
              </>
            )}
          </div>
          <div className="detail-thumbs">
            {product.images.map((img, i) => (
              <img
                key={i} src={img} alt="" className={`detail-thumb ${i === activeImg ? "active" : ""}`}
                onClick={() => setActiveImg(i)}
              />
            ))}
          </div>
          {product.videoUrls && product.videoUrls.length > 0 && (
            <div className="video-section">
              <p className="video-label">SEE MORE</p>
              {product.videoUrls.map((v, i) =>
                v.native ? (
                  <div
                    className={`video-embed-wrap native ${v.vertical ? "vertical" : ""}`}
                    key={i}
                  >
                    <video
                      src={v.url}
                      controls
                      playsInline
                      preload="metadata"
                      className="video-embed"
                    />
                  </div>
                ) : (
                  <div
                    className={`video-embed-wrap ${v.vertical ? "vertical" : ""}`}
                    key={i}
                  >
                    <iframe
                      src={v.url}
                      title={`${product.title} video ${i + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="video-embed"
                    />
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="detail-info">
          <p className="detail-eyebrow">{product.author}</p>
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-tagline">{product.tagline}</p>
          <div className="divider" />
          <div className="detail-description">
            {product.description.split('\n\n').map((para, i) => {
              if (product.hasContactLink && para.includes('reach out to me')) {
                const [before, after] = para.split('reach out to me');
                return (
                  <p key={i} style={{ marginBottom: '0.9rem' }}>
                    {before}
                    <span onClick={onContact} style={{ color: 'var(--gold)', textDecoration: 'underline', cursor: 'pointer' }}>reach out to me</span>
                    {after}
                  </p>
                );
              }
              return <p key={i} style={{ marginBottom: '0.9rem' }}>{para}</p>;
            })}
          </div>

          {/* Version selector */}
          {product.versions.length > 1 && (
            <>
              <label className="version-label">Select version</label>
              <select
                className="version-select"
                value={selectedVersion}
                onChange={(e) => setSelectedVersion(e.target.value)}
              >
                {product.versions.map((v) => (
                  <option key={v.id} value={v.id}>{v.label}</option>
                ))}
              </select>
            </>
          )}
          <div className="version-price">{version.price}</div>

          <button className="enquire-btn" onClick={onContact}>
            Enquire about this piece
          </button>
          <p className="enquire-note">Each piece is made to order. I'll reply within 24 hours.</p>

          {product.details.length > 0 && (
            <div className="detail-features">
              <p className="detail-features-title">What's included</p>
              <ul>
                {product.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function FAQPage({ onHome, onContact }) {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  const renderAnswer = (f) => {
    const paragraphs = f.a.split('\n\n');
    return paragraphs.map((para, j) => {
      if (f.hasContactLink && para.includes('Contact page')) {
        return (
          <p key={j} style={{ marginBottom: j < paragraphs.length - 1 ? '0.8rem' : 0 }}>
            All commissions begin with a conversation. Since each book is custom-made, I want to make sure every detail is exactly right before any work begins. Visit the{' '}
            <span onClick={onContact} style={{ color: 'var(--gold)', textDecoration: 'underline', cursor: 'pointer' }}>Contact page</span>
            {' '}to get in touch.
          </p>
        );
      }
      if (f.hasEmailLink && para.includes('custombooksbyapple@gmail.com')) {
        return (
          <p key={j} style={{ marginBottom: j < paragraphs.length - 1 ? '0.8rem' : 0 }}>
            Alternatively, you can email me at{' '}
            <a href="mailto:custombooksbyapple@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>custombooksbyapple@gmail.com</a>
            {' '}or reach me via{' '}
            <a href="https://www.instagram.com/custombooksbyapps" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>IG</a>.
          </p>
        );
      }
      if (f.hasWorksLink && para.includes('works page')) {
        return (
          <p key={j} style={{ marginBottom: j < paragraphs.length - 1 ? '0.8rem' : 0 }}>
            Starting prices are noted on the{' '}
            <span onClick={onHome} style={{ color: 'var(--gold)', textDecoration: 'underline', cursor: 'pointer' }}>works page</span>.
          </p>
        );
      }
      return (
        <p key={j} style={{ marginBottom: j < paragraphs.length - 1 ? '0.8rem' : 0 }}>{para}</p>
      );
    });
  };

  return (
    <>
      <div className="page-header">
        <p className="page-header-eyebrow">Questions & Answers</p>
        <h1 className="page-header-title">Frequently Asked</h1>
      </div>
      <section className="section">
        <div className="faq-grid">
          {FAQS.map((f, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question" onClick={() => toggle(i)}>
                {f.q}
                <Chevron className={open === i ? "open" : ""} />
              </button>
              {open === i && (
                <div className="faq-answer">{renderAnswer(f)}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", book: "", message: "", type: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    if (form.name && form.email) setSubmitted(true);
  };

  return (
    <>
      <div className="page-header">
        <p className="page-header-eyebrow">Get in Touch</p>
        <h1 className="page-header-title">Commission a Rebind</h1>
      </div>
      <section className="section">
        <div className="contact-layout">
          <p className="contact-intro">
            I'm so excited to work with you!<br /><br />
            Every commission starts with a conversation. Tell me about the book/series you'd like rebound, what you have in mind, and any deadline or budget to bear in mind. Take a look at my current commissions for some inspiration.<br /><br />
            I'll get back to you within 24 hours.
          </p>

          {submitted ? (
            <div className="submit-success">
              ✓ Thank you — I'll be in touch within 24 hours.
            </div>
          ) : (
            <>
              <div className="field-group">
                <label className="field-label">Your name</label>
                <input className="field-input" placeholder="Jane Smith" value={form.name} onChange={handle("name")} />
              </div>
              <div className="field-group">
                <label className="field-label">Email address</label>
                <input className="field-input" type="email" placeholder="jane@example.com" value={form.email} onChange={handle("email")} />
              </div>
              <div className="field-group">
                <label className="field-label">Book/Series</label>
                <input className="field-input" placeholder="e.g., ACOTAR series" value={form.book} onChange={handle("book")} />
              </div>

              <div className="field-group">
                <label className="field-label">Tell me more</label>
                <textarea
                  className="field-textarea"
                  placeholder="Describe what you're imagining - book fabric colours, design colours, quotes, any ideas! The more details - the better."
                  value={form.message} onChange={handle("message")}
                />
              </div>
              <button className="submit-btn" onClick={submit}>Send enquiry</button>
            </>
          )}


        </div>
      </section>
    </>
  );
}

// ─── App Shell ───────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");
  const [product, setProduct] = useState(null);

  const nav = (p) => {
    setPage(p);
    setProduct(null);
    window.scrollTo(0, 0);
    window.history.pushState({ page: p, product: null }, "");
  };

  const openProduct = (p) => {
    setProduct(p);
    setPage("product");
    window.scrollTo(0, 0);
    window.history.pushState({ page: "product", product: p }, "");
  };

  const openContact = () => {
    setPage("contact");
    setProduct(null);
    window.scrollTo(0, 0);
    window.history.pushState({ page: "contact", product: null }, "");
  };

  useEffect(() => {
    window.history.replaceState({ page: "home", product: null }, "");
    const handlePop = (e) => {
      if (e.state) {
        setPage(e.state.page || "home");
        setProduct(e.state.product || null);
        window.scrollTo(0, 0);
      } else {
        setPage("home");
        setProduct(null);
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  return (
    <>
      <GlobalStyles />

      <nav>
        <div className="nav-logo" onClick={() => nav("home")}>
          Apple's Custom Books
        </div>
        <div className="nav-social">
          {/* Instagram */}
          <a href="https://www.instagram.com/custombooksbyapps" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          {/* TikTok */}
          <a href="https://www.tiktok.com/@custombooksbyapps" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com/@custombooksbyapps" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.2c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.2.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.5 21.8 12 21.8 12 21.8s4.6 0 6.8-.3c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.3v-2C23.3 9.2 23 7 23 7zM9.7 15.5V8.3l8.1 3.6-8.1 3.6z"/>
            </svg>
          </a>
        </div>
        <ul className="nav-links">
          <li><button className={page === "home" || page === "product" ? "active" : ""} onClick={() => nav("home")}>Works</button></li>
          <li><button className={page === "faq" ? "active" : ""} onClick={() => nav("faq")}>FAQ</button></li>
          <li><button className={page === "contact" ? "active" : ""} onClick={() => nav("contact")}>Contact</button></li>
        </ul>
      </nav>

      <main>
        {page === "home" && <HomePage onProduct={openProduct} />}
        {page === "product" && product && (
          <ProductPage product={product} onBack={() => nav("home")} onContact={openContact} />
        )}
        {page === "faq" && <FAQPage onHome={() => nav("home")} onContact={() => nav("contact")} />}
        {page === "contact" && <ContactPage />}
      </main>


    </>
  );
}
