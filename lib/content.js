// All the text on the site lives here.
// To change a word, change it here. The components only decide how it looks.

// The site's address. Used for Google (canonical link, sitemap, social previews).
export const siteUrl = "https://www.danishmunawar.com";

export const person = {
  name: "Danish Munawar",
  role: "Full stack developer with a design background",
  location: "Espoo, Finland",
  email: "dmunawar39@gmail.com",
  github: "https://github.com/DanishMun",
  linkedin: "https://www.linkedin.com/in/danish-munawar-80105b250",
  resume: "/Danish_Munawar_Resume.pdf",
  status: "Looking for a permanent developer role in Finland: full stack, frontend or AI",
};

// The short intro under the name.
export const intro =
  "I build web apps with React, Next.js and TypeScript. Before I wrote code, I designed for small businesses around the world, so I build apps that are clear and easy to use.";

// The projects. Order = order on the page.
export const projects = [
  {
    id: "commute",
    title: "Work Site Commute Check",
    oneLine: "Where should a work crew stay? Click the site, see real drive times from every nearby town.",
    problem:
      "Housing companies show apartments in a circle around a work site. But a circle hides lakes and slow roads: 20 km can take 40 minutes.",
    image: "/work/commute.webp",
    imageSize: "1168 × 652",
    stack: ["Next.js", "React", "Leaflet", "OSRM routing API", "Vitest"],
    decisions: [
      "All drive times come from one request to the routing service, not one per town.",
      "If the routing service is down, the app falls back to a rough estimate and marks it, so it never breaks.",
    ],
    next: "Let a manager save a site and share the result with a link.",
    live: "https://commute-check-swart.vercel.app",
    code: "https://github.com/DanishMun/commute-check",
    tests: 11,
  },
  {
    id: "silhouette",
    title: "Silhouette",
    oneLine: "A premium Shopify theme for fashion brands: editorial on the outside, easy to buy from on a phone.",
    problem:
      "Fashion brands want their store to feel like a magazine. But shoppers on phones still need to find their size and buy in a few taps, and the store owner must be able to change it all without code.",
    image: "/work/silhouette.webp",
    imageSize: "1440 × 900",
    stack: ["Shopify", "Liquid", "CSS", "JavaScript", "Theme Check"],
    decisions: [
      "Built on Dawn, but with 23 own sections (header, cinematic hero, product page, collection grid and more), all editable in the theme editor.",
      "One design-token system with 3 style presets. Every colour scheme checked against WCAG AA contrast.",
      "Colour swatches work with no Shopify setup: one shared resolver maps colour names, and the merchant can override it.",
      "Product page answers fit questions next to Add to cart, and on phones the Add to cart bar stays visible.",
      "Code checked with Theme Check (Shopify's code checker) and my own validation script, which catches every rule that broke once.",
    ],
    next: "Finish the content and packaging, and test it with real store owners.",
    live: "https://silhouette-dev.myshopify.com",
    note: "Demo store with sample products · password: 123",
  },
  {
    id: "product-data",
    title: "Product Data Checker",
    oneLine: "Upload a product list. See which products are missing a name, description, image or price.",
    problem:
      "Bad product data costs online stores sales, and finding the gaps by hand in a spreadsheet takes hours.",
    image: "/work/product-data.webp",
    imageSize: "1100 × 900",
    stack: ["Next.js", "React", "PapaParse", "Vitest"],
    decisions: [
      "The file never leaves the browser, so a store can check private data safely.",
      "It reads Shopify exports too, by mapping different column names to the same field.",
    ],
    next: "An AI step that suggests a fix for each gap, for a person to approve.",
    live: "https://product-data-checker.vercel.app",
    code: "https://github.com/DanishMun/product-data-checker",
    tests: 13,
  },
  {
    id: "pallet",
    title: "Pallet Checker",
    oneLine: "Enter the size, weight and destination of your goods. Get the right pallet and delivery days.",
    problem:
      "A freight site listed pallet sizes and delivery times in two long tables. Visitors had to work out the answer themselves.",
    image: "/work/pallet.webp",
    imageSize: "700 × 1000",
    fit: "contain", // a narrow app: show it whole, centred in the frame
    stack: ["Next.js", "React", "Chakra UI", "Vitest"],
    decisions: [
      "Goods can be turned 90°, so the checker tries both ways before picking a bigger pallet.",
      "All data comes from the company's own public pages. No made-up prices.",
    ],
    next: "Show a rough price range once real price data is available.",
    live: "https://kuormat-pallet-checker.vercel.app",
    code: "https://github.com/DanishMun/kuormat-pallet-checker",
    tests: 13,
  },
];

// Work in progress, shown smaller.
export const inProgress = {
  title: "ShelfLint",
  text: "A Shopify app that finds problems in store product listings, with AI-powered fixes. React Router, TypeScript, Prisma, Shopify GraphQL API.",
};

// A full brand project, shown big above the logo grid.
// To add images: put them in /public/logos and list the file names in `images`.
export const featuredBrand = {
  title: "Moderna",
  kind: "Clothing brand identity",
  text: "A complete look for a clothing brand: logo, colours, type and how it all works on labels and products.",
  images: [], // e.g. ["moderna-logo.png", "moderna-mockup.jpg"]
  link: "https://www.behance.net/gallery/151128695/Moderna-clothing-brand-design",
};

// Design work for the grid. Put the image files in /public/logos and list them here,
// e.g. { file: "cafe-packaging.jpg", caption: "Packaging · Café" }
export const logos = [];

// What I design, shown as a short list in the Design section.
export const designTypes = [
  "Logos",
  "Brand identities",
  "Websites & UI",
  "Brand guidelines",
  "Packaging",
  "Business cards & print",
];

export const designStats = [
  { value: "4.9", label: "average rating" },
  { value: "2015", label: "first client" },
];

// The timeline ("ruler"). One line per step.
export const path = [
  { year: 2013, text: "Starts a BSc in Computer Science." },
  { year: 2015, text: "Starts designing for clients on Fiverr: logos, brands, packaging." },
  { year: 2020, text: "Learns Shopify: Liquid, CSS and JavaScript. Turns designs into stores." },
  { year: 2022, text: "Moves to Finland. MSc in Computer Science, University of Eastern Finland." },
  { year: 2023, text: "Builds WordPress sites and does SEO for an Espoo agency." },
  { year: 2026, text: "Full stack: React, Next.js, TypeScript, Node.js, PostgreSQL." },
];

export const skills = [
  { group: "Build", items: "React, Next.js, TypeScript, JavaScript, Node.js, HTML, CSS, Figma to code" },
  { group: "Data", items: "PostgreSQL, Supabase, Prisma, REST and GraphQL APIs" },
  { group: "Ship", items: "Git, Vercel, Vitest, SEO, page speed" },
  { group: "Design", items: "Illustrator, Photoshop, web & UI design, brand identity, packaging, print" },
];

// What I can build. Written in plain words people actually search for,
// e.g. "Shopify developer Espoo" or "WordPress website Finland".
export const services = [
  {
    title: "Website development",
    text: "Fast, modern websites built with Next.js and React. Quick on phones, easy to update and ready for Google.",
  },
  {
    title: "Shopify stores",
    text: "Shopify store setup and custom themes in Liquid: product pages, collections and speed fixes.",
  },
  {
    title: "WordPress websites",
    text: "WordPress sites with Elementor, built from your design, with the basic SEO set up.",
  },
  {
    title: "Software & web apps",
    text: "Small custom web apps and tools, like calculators, maps and data checkers, built and tested in JavaScript and TypeScript.",
  },
  {
    title: "Design",
    text: "Logos, brand identities, brand guidelines, packaging, business cards and website design.",
  },
];
