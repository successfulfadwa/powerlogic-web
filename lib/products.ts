export interface Spec {
  label: string;
  value: string;
}

export interface SpotlightProduct {
  id: string;
  name: string;
  tagline: string;
  transparentImage: string;
  heroImage: string;
  accentColor: string;
  specs: Spec[];
  ctaLink: string;
}

export interface CatalogProduct {
  slug: string;
  categorySlug: string;
  name: string;
  tagline: string;
  description: string;
  transparentImage: string;
  heroImage: string;
  gallery: string[];
  accentColor: string;
  specs: Spec[];
  features: string[];
}

export const catalogProducts: CatalogProduct[] = [
  {
    slug: 'dual-motor-e-scooter',
    categorySlug: 'scooter',
    name: 'Dual Motor E-Scooter',
    tagline: 'Built for roads that push back.',
    description: 'A high-torque urban ride with long-range confidence, designed for daily movement and tougher streets.',
    transparentImage: '/products/transparent/p2.png',
    heroImage: '/products/scooter/hero-p2.png',
    gallery: [
        '/products/scooter/hero-p2.png',
        '/products/scooter/alternate-p2.png',
        '/products/scooter/detail-p2.png',
        '/products/scooter/lifestyle-p2.png',
    ],
    accentColor: '#3F87FE',
    specs: [
      { label: 'Drive System', value: 'Dual Motor' },
      { label: 'Range Per Charge', value: '80-100KM' },
      { label: 'Max Load', value: '120 kg' },
      { label: 'Battery Capacity', value: '23ah' },
    ],
    features: [
      'Stable daily commuting geometry',
      'Responsive acceleration and braking',
      'Foldable frame for easier storage',
      'Made for city use and rougher routes',
    ],
  },
  {
    slug: 'rgb-speaker',
    categorySlug: 'speaker',
    name: 'RGB Speaker',
    tagline: 'Sound that moves. Light that breathes.',
    description: 'A portable speaker with bold lighting, immersive sound, and a party-ready look.',
    transparentImage: '/products/transparent/p3.png',
    heroImage: '/products/speaker/hero-p3.png',
    gallery: [
      '/products/speaker/hero-p3.png',
      '/products/speaker/alternate-p3.png',
      '/products/speaker/detail-p3.png',
      '/products/speaker/lifestyle-p3.png',
    ],
    accentColor: '#7B5CFF',
    specs: [
      { label: 'Sound Stage', value: '360° Surround' },
      { label: 'RGB Ring', value: '16M Colour' },
      { label: 'Battery', value: '24-Hour Playback' },
      { label: 'Connectivity', value: 'Bluetooth 5.3' },
    ],
    features: [
      'Made for music, events, and casual listening',
      'Bold RGB styling with a premium look',
      'Portable body for easy movement',
      'Strong hero visuals for product pages',
    ],
  },
  {
    slug: 'portable-power-station',
    categorySlug: 'power-station',
    name: 'Portable Power Station',
    tagline: 'The grid, untethered.',
    description: 'Compact backup power for travel, work, and outages, with a strong focus on reliability.',
    transparentImage: '/products/transparent/p8.png',
    heroImage: '/products/power-station/hero-p8.png',
    gallery: [
        '/products/power-station/hero-p8.png',
        '/products/power-station/alternate-p8.png',
        '/products/power-station/detail-p8.png',
        '/products/power-station/lifestyle-p8.png',
    ],
    accentColor: '#3FE0FE',
    specs: [
      { label: 'Capacity', value: '2048 Wh' },
      { label: 'AC Output', value: '2400W Peak' },
      { label: 'Ports', value: '13 Outputs' },
      { label: 'System Voltage', value: '51.2 V' },
    ],
    features: [
      'Useful for backup and travel',
      'Strong feature set for off-grid power',
      'Good hero product for broader campaigns',
      'Clean, technical presentation',
    ],
  },
  {
    slug: '140w-gan-adapter',
    categorySlug: 'power-adapter',
    name: '140W GaN Adapter',
    tagline: 'Maximum watts. Minimum footprint.',
    description: 'A compact GaN charger for fast, efficient charging across laptop and mobile devices.',
    transparentImage: '/products/transparent/p9.png',
    heroImage: '/products/power-adapter/hero-p9.png',
    gallery: [
        '/products/power-adapter/hero-p9.png',
        '/products/power-adapter/alternate-p9.png',
        '/products/power-adapter/detail-p9.png',
        '/products/power-adapter/lifestyle-p9.png',
    ],
    accentColor: '#3F87FE',
    specs: [
      { label: 'Max Output Power', value: '140W' },
      { label: 'Max Output', value: '5V/3A' },
      { label: 'Ports', value: '3 USB-C + 1 USB-A' },
      { label: 'Input', value: '100-240V/0.3A' },
    ],
    features: [
      'Made for powerful everyday charging',
      'Small body with a premium look',
      'Useful for laptop and phone users',
      'Strong page hero for accessories',
    ],
  },
  {
    slug: '20000mah-power-bank',
    categorySlug: 'power-bank',
    name: '20000mAh Power Bank',
    tagline: 'Reliable all-day backup.',
    description: 'A dependable high-capacity power bank for long days, travel, and backup charging.',
    transparentImage: '/products/transparent/p4.png',
    heroImage: '/products/power-bank/pb4/hero-p4.png',
    gallery: [
        '/products/power-bank/pb4/hero-p4.png',
        '/products/power-bank/pb4/alternate-p4.png',
        '/products/power-bank/pb4/detail-p4.png',
        '/products/power-bank/pb4/lifestyle-p4.png',
    ],
    accentColor: '#3FE0FE',
    specs: [
      { label: 'Capacity', value: '20,000mAh' },
      { label: 'Charging', value: 'Fast Charge' },
      { label: 'Battery Type', value: 'Li-Polymer Battery' },
      { label: 'Output Power', value: '65 W' },
    ],
    features: [
      'Great balance of capacity and portability',
      'Strong choice for travel and daily carry',
      'Clean hero presentation for ecommerce',
      'Works across consumer and B2B pages',
    ],
  },
  {
    slug: '20000mah-slim-power-bank',
    categorySlug: 'power-bank',
    name: '20000mAh Slim Power Bank',
    tagline: 'Big capacity, slimmer profile.',
    description: 'A thinner form factor for users who want power without a bulky feel.',
    transparentImage: '/products/transparent/p5.png',
    heroImage: '/products/power-bank/pb3/hero-p5.png',
    gallery: [
        '/products/power-bank/pb3/hero-p5.png',
        '/products/power-bank/pb3/alternate-p5.png',
        '/products/power-bank/pb3/detail-p5.png',
        '/products/power-bank/pb3/lifestyle-p5.png',
    ],
    accentColor: '#3FE0FE',
    specs: [
      { label: 'Capacity', value: '20,000mAh' },
      { label: 'Charging', value: 'Fast Charge' },
      { label: 'Battery Type', value: 'Li-Polymer Battery' },
      { label: 'Output Power', value: '100 W' },
    ],
    features: [
      'Slim shape for easier carrying',
      'Great for users who value portability',
      'Good companion product for bundles',
      'Visual fit for modern ecommerce layouts',
    ],
  },
  {
    slug: '25000mah-built-in-cables',
    categorySlug: 'power-bank',
    name: '25000mAh Power Bank with Built-In Cables',
    tagline: 'Carry fewer cables. Charge more devices.',
    description: 'An all-in-one power bank built for convenience, with integrated cables for fast access.',
    transparentImage: '/products/transparent/p6.png',
    heroImage: '/products/power-bank/pb2/hero-p6.png',
    gallery: [
        '/products/power-bank/pb2/hero-p6.png',
        '/products/power-bank/pb2/alternate-p6.png',
        '/products/power-bank/pb2/detail-p6.png',
        '/products/power-bank/pb2/lifestyle-p6.png',
    ],
    accentColor: '#3FE0FE',
    specs: [
      { label: 'Capacity', value: '25,000mAh' },
      { label: 'Charging', value: 'Fast Charge' },
      { label: 'Battery Type', value: 'Li-Polymer Battery' },
      { label: 'Output Power', value: '165 W' },
    ],
    features: [
      'Simplifies carry and cable management',
      'Ideal for travel and emergency use',
      'Great for convenience-led marketing',
      'Practical product story for conversion',
    ],
  },
  {
    slug: '24000mah-fast-charge-power-bank',
    categorySlug: 'power-bank',
    name: '24000mAh Fast Charge Power Bank',
    tagline: 'High capacity for longer trips.',
    description: 'A high-output power bank focused on endurance, speed, and staying powered for longer.',
    transparentImage: '/products/transparent/p7.png',
    heroImage: '/products/power-bank/pb1/hero-p7.png',
    gallery: [
        '/products/power-bank/pb1/hero-p7.png',
        '/products/power-bank/pb1/alternate-p7.png',
        '/products/power-bank/pb1/detail-p7.png',
        '/products/power-bank/pb1/lifestyle-p7.png',
    ],
    accentColor: '#3FE0FE',
    specs: [
      { label: 'Capacity', value: '24,000mAh' },
      { label: 'Charging', value: 'Fast Charge' },
      { label: 'Battery Type', value: 'Li-Polymer Battery' },
      { label: 'Output Power', value: '280 W' },
    ],
    features: [
      'Good for users with heavier charging needs',
      'Designed around high-capacity use',
      'Useful as a premium power bank option',
      'Works well in spec-led product layouts',
    ],
  },
  {
    slug: 'anc-earbuds',
    categorySlug: 'earbuds',
    name: 'ANC Earbuds',
    tagline: 'Focused listening for everyday life.',
    description: 'Noise-aware earbuds designed for commutes, calls, and everyday music use.',
    transparentImage: '/products/transparent/p1.png',
    heroImage: '/products/earbuds/hero-p1.png',
    gallery: [
        '/products/earbuds/hero-p1.png',
        '/products/earbuds/alternate-p1.png',
        '/products/earbuds/detail-p1.png',
        '/products/earbuds/lifestyle-p1.png',
    ],
    accentColor: '#7B5CFF',
    specs: [
      { label: 'Audio Mode', value: 'ANC' },
      { label: 'Connectivity', value: 'Wireless' },
      { label: 'Waterproof Standard', value: 'IPX-4' },
      { label: 'Battery Indicator', value: 'LED' },
    ],
    features: [
      'Good for work, travel, and daily use',
      'Compact styling that feels premium',
      'Fits a wide range of lifestyles',
      'Strong hero images for landing pages',
    ],
  },
  {
    slug: '100w-fast-charging-cable',
    categorySlug: 'cables',
    name: '100W Fast Charging Cable',
    tagline: 'Fast, simple, and dependable.',
    description: 'A clean everyday cable built for high-speed charging and broad compatibility.',
    transparentImage: '/products/transparent/p11.png',
    heroImage: '/products/cables/c2/hero-p11.png',
    gallery: [
        '/products/cables/c2/hero-p11.png',
        '/products/cables/c2/alternate-p11.png',
        '/products/cables/c2/detail-p11.png',
        '/products/cables/c2/lifestyle-p11.png',
    ],
    accentColor: '#3F87FE',
    specs: [
      { label: 'Power', value: '100W' },
      { label: 'Use', value: 'Fast Charging' },
      { label: 'Type', value: 'USB-C' },
      { label: 'Length', value: '2M' },
    ],
    features: [
      'Simple product story for accessories pages',
      'Reliable charging-focused design',
      'Works well as a hero cable listing',
      'Good for bundle and upsell sections',
    ],
  },
  {
    slug: '3-in-1-cable',
    categorySlug: 'cables',
    name: '3-in-1 Cable',
    tagline: 'One cable, multiple devices.',
    description: 'A versatile cable solution for mixed-device users and multi-device charging setups.',
    transparentImage: '/products/transparent/p10.png',
    heroImage: '/products/cables/c3/hero-p10.png',
    gallery: [
        '/products/cables/c3/hero-p10.png',
        '/products/cables/c3/alternate-p10.png',
        '/products/cables/c3/detail-p10.png',
        '/products/cables/c3/lifestyle-p10.png',
    ],
    accentColor: '#3F87FE',
    specs: [
      { label: 'Power', value: '100W' },
      { label: 'Use', value: 'Multi-device' },
      { label: 'Type', value: 'All-in-one(type-c, micro usb, lightening)' },
      { label: 'Length', value: '1.2M' },
    ],
    features: [
      'Ideal for users with mixed devices',
      'Helpful for travel and daily carry',
      'Easy to understand in product grids',
      'Strong accessory-line storytelling',
    ],
  },
  {
    slug: 'type-c-smart-display',
    categorySlug: 'cables',
    name: 'Type-C Smart Display Cable',
    tagline: 'Charging status at a glance.',
    description: 'A cable with a smart display for users who want more feedback and a more premium feel.',
    transparentImage: '/products/transparent/p12.png',
    heroImage: '/products/cables/c1/hero-p12.png',
    gallery: [
        '/products/cables/c1/hero-p12.png',
        '/products/cables/c1/alternate-p12.png',
        '/products/cables/c1/detail-p12.png',
    ],
    accentColor: '#3F87FE',
    specs: [
      { label: 'Power', value: '100W' },
      { label: 'Use', value: 'Charging Feedback' },
      { label: 'Type', value: 'USB-C' },
      { label: 'Length', value: '2M' },
    ],
    features: [
      'Premium feel for accessory pages',
      'Clear visual differentiation from basic cables',
      'Great for specs-heavy comparisons',
      'Useful for technical audiences',
    ],
  },
  {
    slug: 'mop-vacuum-robot',
    categorySlug: 'cleaning',
    name: 'Mop & Vacuum Robot',
    tagline: 'Let the floor do itself.',
    description: 'An automated cleaning solution for daily dust, spills, and routine floor maintenance.',
    transparentImage: '/products/transparent/p14.png',
    heroImage: '/products/cleaning/mop-robot/hero-p14.png',
    gallery: [
        '/products/cleaning/mop-robot/hero-p14.png',
        '/products/cleaning/mop-robot/alternate-p14.png',
        '/products/cleaning/mop-robot/detail-p14.png',
        '/products/cleaning/mop-robot/lifestyle-p14.png',
    ],
    accentColor: '#3FE0FE',
    specs: [
      { label: 'Function', value: 'Mop + Vacuum' },
      { label: 'Dust Box Capacity', value: '1L' },
      { label: 'Use', value: 'Floor Care' },
      { label: 'Max Runtime', value: '60 Min' },
    ],
    features: [
      'Strong for smart home product pages',
      'Makes home care look effortless',
      'Good hero product for cleaning category',
      'Simple messaging for customers',
    ],
  },
  {
    slug: 'glass-cleaner-robot',
    categorySlug: 'cleaning',
    name: 'Glass Cleaner Robot',
    tagline: 'For windows and hard-to-reach glass.',
    description: 'A specialized cleaning robot designed to tackle glass surfaces more safely and efficiently.',
    transparentImage: '/products/transparent/p13.png',
    heroImage: '/products/cleaning/window-robot/hero-p13.png',
    gallery: [
        '/products/cleaning/window-robot/hero-p13.png',
        '/products/cleaning/window-robot/alternate-p13.png',
        '/products/cleaning/window-robot/detail-p13.png',
        '/products/cleaning/window-robot/lifestyle-p13.png',
    ],
    accentColor: '#3FE0FE',
    specs: [
      { label: 'Function', value: 'Spray Glass Whipe' },
      { label: 'Battery Capacity', value: '650mAH' },
      { label: 'Use', value: 'Windows' },
      { label: 'Max Runtime', value: '60 Min' },
    ],
    features: [
      'Great for specialty cleaning use cases',
      'Helps explain a specific job to customers',
      'Good fit for product comparison pages',
      'Adds variety inside the category',
    ],
  },
  {
    slug: 'mop-vacuum-classic',
    categorySlug: 'cleaning',
    name: 'Mop & Vacuum Classic',
    tagline: 'A straightforward cleaning companion.',
    description: 'A classic floor-cleaning configuration for customers who want simple and dependable performance.',
    transparentImage: '/products/transparent/p15.png',
    heroImage: '/products/cleaning/mop/hero-p15.png',
    gallery: [
        '/products/cleaning/mop/hero-p15.png',
        '/products/cleaning/mop/alternate-p15.png',
        '/products/cleaning/mop/detail-p15.png',
        '/products/cleaning/mop/lifestyle-p15.png',
    ],
    accentColor: '#3FE0FE',
    specs: [
      { label: 'Function', value: 'Mop + Vacuum' },
      { label: 'Water Tank Capacity', value: '600mL' },
      { label: 'Use', value: 'Floor Care' },
      { label: 'Max Runtime', value: '60 Min' },
    ],
    features: [
      'Easy to understand for shoppers',
      'Good baseline product in the range',
      'Supports a clean and simple story',
      'Works well in category grids',
    ],
  },
  {
    slug: 'android-ai-box',
    categorySlug: 'car-accessories',
    name: 'Android AI Box',
    tagline: 'Upgrade your infotainment system.',
    description: 'A smart car accessory that adds more flexibility, apps, and usability to your dashboard.',
    transparentImage: '/products/transparent/p17.png',
    heroImage: '/products/car-accessories/ai-box/hero-p17.png',
    gallery: [
        '/products/car-accessories/ai-box/hero-p17.png',
        '/products/car-accessories/ai-box/alternate-p17.png',
        '/products/car-accessories/ai-box/detail-p17.png',
        '/products/car-accessories/ai-box/lifestyle-p17.png',
    ],
    accentColor: '#7B5CFF',
    specs: [
      { label: 'Connection', value: 'USB-C, HDMI' },
      { label: 'Use', value: 'Car Infotainment' },
      { label: 'RAM', value: '4 GB' },
      { label: 'Storage', value: '64 GB' },
    ],
    features: [
      'Good for smarter in-car experiences',
      'Helps modernize the dashboard feel',
      'Strong hero image for the category',
      'Fits tech-focused automotive pages',
    ],
  },
  {
    slug: 'automatic-car-cover',
    categorySlug: 'car-accessories',
    name: 'Automatic Car Cover',
    tagline: 'Protection with less hassle.',
    description: 'An easy-to-present car cover solution that emphasizes convenience and vehicle protection.',
    transparentImage: '/products/transparent/p16.png',
    heroImage: '/products/car-accessories/car-cover/hero-p16.png',
    gallery: [
        '/products/car-accessories/car-cover/hero-p16.png',
        '/products/car-accessories/car-cover/alternate-p16.png',
        '/products/car-accessories/car-cover/detail-p16.png',
        '/products/car-accessories/car-cover/lifestyle-p16.png',
    ],
    accentColor: '#7B5CFF',
    specs: [
      { label: 'Type', value: 'Automatic' },
      { label: 'Function', value: 'UV Protection' },
      { label: 'UV Block', value: '90%' },
      { label: 'IR Block', value: '60%' },
    ],
    features: [
      'Useful for premium protection messaging',
      'Good for practical automotive marketing',
      'Easy to understand and visualize',
      'Adds more depth to the catalog',
    ],
  },
  {
    slug: 'jump-starter-tyre-inflator',
    categorySlug: 'car-accessories',
    name: 'Jump Starter & Tyre Inflator',
    tagline: 'Emergency support for the road.',
    description: 'A compact roadside-support accessory for jump starting and tyre inflation on the move.',
    transparentImage: '/products/transparent/p18.png',
    heroImage: '/products/car-accessories/jump-starter/hero-p18.png',
    gallery: [
        '/products/car-accessories/jump-starter/hero-p18.png',
        '/products/car-accessories/jump-starter/alternate-p18.png',
        '/products/car-accessories/jump-starter/lifestyle-p18-2.png',
        '/products/car-accessories/jump-starter/lifestyle-p18.png',
    ],
    accentColor: '#7B5CFF',
    specs: [
      { label: 'Function', value: 'Jump Start + Inflate' },
      { label: 'Battery Capacity', value: '14800mAH' },
      { label: 'Peak Current', value: '2000A' },
      { label: 'Total Output', value: '15W' },
    ],
    features: [
      'Strong emergency-use product story',
      'Very practical for road safety pages',
      'Great for trust-building catalog copy',
      'Useful as a utility-focused hero item',
    ],
  },
];

export const spotlightProducts: SpotlightProduct[] = [
  {
    id: 'scooter',
    name: 'Dual Motor E-Scooter',
    tagline: 'Built for roads that push back.',
    transparentImage: '/products/transparent/p2.png',
    heroImage: '/products/scooter/hero-p2.png',
    accentColor: '#3F87FE',
    specs: [
      { label: 'Drive System', value: 'Dual Motor' },
      { label: 'Terrain', value: 'Off-Road Tires' },
      { label: 'Frame', value: 'Foldable Alloy' },
      { label: 'Range', value: 'Up to 65 km' },
    ],
    ctaLink: '/products/scooter/dual-motor-e-scooter',
  },
  {
    id: 'speaker',
    name: 'RGB Speaker',
    tagline: 'Sound that moves. Light that breathes.',
    transparentImage: '/products/transparent/p3.png',
    heroImage: '/products/speaker/hero-p3.png',
    accentColor: '#7B5CFF',
    specs: [
      { label: 'Sound Stage', value: '360° Surround' },
      { label: 'RGB Ring', value: '16M Colour' },
      { label: 'Battery', value: '24-Hour Playback' },
      { label: 'Connectivity', value: 'Bluetooth 5.3' },
    ],
    ctaLink: '/products/speaker/rgb-speaker',
  },
  {
    id: 'power-station',
    name: 'Portable Power Station',
    tagline: 'The grid, untethered.',
    transparentImage: '/products/transparent/p8.png',
    heroImage: '/products/power-station/hero-p8.png',
    accentColor: '#3FE0FE',
    specs: [
      { label: 'Capacity', value: '2048 Wh' },
      { label: 'AC Output', value: '2200W Peak' },
      { label: 'Ports', value: '13 Outputs' },
      { label: 'Charge Time', value: '1.8h Full Charge' },
    ],
    ctaLink: '/products/power-station/portable-power-station',
  },
  {
    id: 'power-adapter',
    name: '140W GaN Adapter',
    tagline: 'Maximum watts. Minimum footprint.',
    transparentImage: '/products/transparent/p9.png',
    heroImage: '/products/power-adapter/hero-p9.png',
    accentColor: '#3F87FE',
    specs: [
      { label: 'Max Output', value: '140W' },
      { label: 'Technology', value: 'GaN III' },
      { label: 'Ports', value: '3 USB-C + 1 USB-A' },
      { label: 'Protocol', value: 'PD 3.1 / PPS' },
    ],
    ctaLink: '/products/power-adapter/140w-gan-adapter',
  },
];

export function getCategoryProducts(categorySlug: string): CatalogProduct[] {
  return catalogProducts.filter((product) => product.categorySlug === categorySlug);
}

export function getProduct(categorySlug: string, productSlug: string): CatalogProduct | undefined {
  return catalogProducts.find(
    (product) => product.categorySlug === categorySlug && product.slug === productSlug
  );
}
