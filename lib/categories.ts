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
    heroImage: '/categories/sco-wide.png',
    available: true,
    accent: '#3F87FE',
    gridSpan: 'wide',
  },
  {
    slug: 'speaker',
    name: 'Speakers',
    description: 'RGB-ring acoustic design. Immersive sound, anywhere',
    heroImage: '/categories/spe.png',
    available: true,
    accent: '#7B5CFF',
    gridSpan: 'tall',
  },
  {
    slug: 'power-station',
    name: 'Power Stations',
    description: 'Portable power for the off-grid generation',
    heroImage: '/categories/ps.png',
    available: true,
    accent: '#3FE0FE',
    gridSpan: 'normal',
  },
  {
    slug: 'power-adapter',
    name: 'Adapters',
    description: '140W max. GaN. One brick to rule them all',
    heroImage: '/categories/pa.png',
    available: true,
    accent: '#3F87FE',
    gridSpan: 'normal',
  },
  {
    slug: 'power-bank',
    name: 'Power Banks',
    description: 'From 20,000mAh slim to 25,000mAh built-in cables',
    heroImage: '/categories/pb.png',
    available: true,
    accent: '#3FE0FE',
    gridSpan: 'wide',
  },
  {
    slug: 'earbuds',
    name: 'Earbuds',
    description: 'ANC earphones built for the commute',
    heroImage: '/categories/eb.png',
    available: true,
    accent: '#7B5CFF',
    gridSpan: 'normal',
  },
  {
    slug: 'cables',
    name: 'Cables',
    description: '100W fast charging. 3-in-1. Smart display. Your pick',
    heroImage: '/categories/cab.png',
    available: true,
    accent: '#3F87FE',
    gridSpan: 'normal',
  },
  {
    slug: 'cleaning',
    name: 'Cleaning',
    description: 'Robot cleaners that actually do the work',
    heroImage: '/categories/cl.png',
    available: true,
    accent: '#3FE0FE',
    gridSpan: 'normal',
  },
  {
    slug: 'car-accessories',
    name: 'Car Accessories',
    description: 'AI Box, auto covers, jump starters — your car, smarter',
    heroImage: '/categories/ca.png',
    available: true,
    accent: '#7B5CFF',
    gridSpan: 'wide',
  },
];
