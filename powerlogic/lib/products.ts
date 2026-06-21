export interface Spec {
  label: string;
  value: string;
}

export interface SpotlightProduct {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  accentColor: string;
  specs: Spec[];
  ctaLink: string;
}

export const spotlightProducts: SpotlightProduct[] = [
  {
    id: 'scooter',
    name: 'Dual Motor E-Scooter',
    tagline: 'Built for roads that push back.',
    heroImage: '/products/scooter/hero.png',
    accentColor: '#3F87FE',
    specs: [
      { label: 'Drive System', value: 'Dual Motor' },
      { label: 'Terrain', value: 'Off-Road Tires' },
      { label: 'Frame', value: 'Foldable Alloy' },
      { label: 'Range', value: 'Up to 65 km' },
    ],
    ctaLink: '/products/scooter',
  },
  {
    id: 'speaker',
    name: 'RGB Speaker',
    tagline: 'Sound that moves. Light that breathes.',
    heroImage: '/products/speaker/hero.png',
    accentColor: '#7B5CFF',
    specs: [
      { label: 'Sound Stage', value: '360° Surround' },
      { label: 'RGB Ring', value: '16M Colour' },
      { label: 'Battery', value: '24-Hour Playback' },
      { label: 'Connectivity', value: 'Bluetooth 5.3' },
    ],
    ctaLink: '/products/speaker',
  },
  {
    id: 'power-station',
    name: 'Portable Power Station',
    tagline: 'The grid, untethered.',
    heroImage: '/products/power-station/hero.png',
    accentColor: '#3FE0FE',
    specs: [
      { label: 'Capacity', value: '2048 Wh' },
      { label: 'AC Output', value: '2200W Peak' },
      { label: 'Ports', value: '13 Outputs' },
      { label: 'Charge Time', value: '1.8h Full Charge' },
    ],
    ctaLink: '/products/power-station',
  },
  {
    id: 'power-adapter',
    name: '140W GaN Adapter',
    tagline: 'Maximum watts. Minimum footprint.',
    heroImage: '/products/power-adapter/hero.png',
    accentColor: '#3F87FE',
    specs: [
      { label: 'Max Output', value: '140W' },
      { label: 'Technology', value: 'GaN III' },
      { label: 'Ports', value: '3 USB-C + 1 USB-A' },
      { label: 'Protocol', value: 'PD 3.1 / PPS' },
    ],
    ctaLink: '/products/power-adapter',
  },
];
