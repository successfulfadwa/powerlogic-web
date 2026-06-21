export interface Category {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  available: boolean;
  accent: string;
  gridSpan?: 'wide' | 'tall' | 'normal';
}

export const categories: Category[] = [
  {
    slug: 'scooter',
    name: 'E-Scooters',
    description: 'Dual-motor urban mobility, engineered for range',
    heroImage: '/products/scooter/hero.png',
    available: true,
    accent: '#3F87FE',
    gridSpan: 'wide',
  },
  {
    slug: 'speaker',
    name: 'Speakers',
    description: 'RGB-ring acoustic design. Immersive sound, anywhere',
    heroImage: '/products/speaker/hero.png',
    available: true,
    accent: '#7B5CFF',
    gridSpan: 'tall',
  },
  {
    slug: 'power-station',
    name: 'Power Stations',
    description: 'Portable power for the off-grid generation',
    heroImage: '/products/power-station/hero.png',
    available: true,
    accent: '#3FE0FE',
    gridSpan: 'normal',
  },
  {
    slug: 'power-adapter',
    name: 'Adapters',
    description: '140W max. GaN. One brick to rule them all',
    heroImage: '/products/power-adapter/hero.png',
    available: true,
    accent: '#3F87FE',
    gridSpan: 'normal',
  },
  {
    slug: 'power-bank',
    name: 'Power Banks',
    description: 'From 20,000mAh slim to 25,000mAh built-in cables',
    heroImage: '/products/power-bank/hero.png',
    available: true,
    accent: '#3FE0FE',
    gridSpan: 'wide',
  },
  {
    slug: 'earbuds',
    name: 'Earbuds',
    description: 'ANC earphones built for the commute',
    heroImage: '/products/earbuds/hero.png',
    available: true,
    accent: '#7B5CFF',
    gridSpan: 'normal',
  },
  {
    slug: 'cables',
    name: 'Cables',
    description: '100W fast charging. 3-in-1. Smart display. Your pick',
    heroImage: '/products/cables/hero.png',
    available: true,
    accent: '#3F87FE',
    gridSpan: 'normal',
  },
  {
    slug: 'cleaning',
    name: 'Cleaning',
    description: 'Robot cleaners that actually do the work',
    heroImage: '/products/cleaning/hero.png',
    available: true,
    accent: '#3FE0FE',
    gridSpan: 'normal',
  },
  {
    slug: 'car-accessories',
    name: 'Car Accessories',
    description: 'AI Box, auto covers, jump starters — your car, smarter',
    heroImage: '/products/car-accessories/hero.png',
    available: true,
    accent: '#7B5CFF',
    gridSpan: 'wide',
  },
];
