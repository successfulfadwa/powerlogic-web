'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import AuroraBackground from '@/components/home/AuroraBackground';
import SplitText from '@/components/ui/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';
import { categories } from '@/lib/categories';
import { spotlightProducts } from '@/lib/products';

interface CategoryProduct {
  name: string;
  image: string;
  tag?: string;
}

const categoryProducts: Record<string, CategoryProduct[]> = {
  scooter: [
    { name: 'Dual Motor E-Scooter', image: '/products/scooter/hero.png', tag: 'Best Seller' },
    { name: 'City Ride — Alternate', image: '/products/scooter/alternate.png' },
    { name: 'Detail View', image: '/products/scooter/detail.png' },
    { name: 'Lifestyle', image: '/products/scooter/lifestyle.png' },
  ],
  speaker: [
    { name: 'RGB Speaker', image: '/products/speaker/hero.png', tag: 'Top Rated' },
    { name: 'Alternate Angle', image: '/products/speaker/alternate.png' },
    { name: 'Detail Close-up', image: '/products/speaker/detail.png' },
    { name: 'In Use', image: '/products/speaker/lifestyle.png' },
  ],
  'power-station': [
    { name: 'Portable Power Station', image: '/products/power-station/hero.png', tag: 'New' },
    { name: 'Alternate Angle', image: '/products/power-station/alternate.png' },
    { name: 'Detail View', image: '/products/power-station/detail.png' },
    { name: 'In the Field', image: '/products/power-station/lifestyle.png' },
  ],
  'power-adapter': [
    { name: '140W GaN Adapter', image: '/products/power-adapter/hero.png', tag: 'Best Seller' },
    { name: 'Alternate Shot', image: '/products/power-adapter/alternate.png' },
    { name: 'Close-up Detail', image: '/products/power-adapter/detail.png' },
    { name: 'Daily Carry', image: '/products/power-adapter/lifestyle.png' },
  ],
  'power-bank': [
    { name: '20000mAh Power Bank', image: '/products/power-bank/hero.png', tag: 'Popular' },
    { name: '20000mAh Slim', image: '/products/power-bank/slim-hero.png' },
    { name: '25000mAh Built-In Cables', image: '/products/power-bank/builtin-hero.png' },
    { name: '24000mAh Fast Charge', image: '/products/power-bank/fast-hero.png' },
    { name: 'Lifestyle', image: '/products/power-bank/lifestyle.png' },
  ],
  earbuds: [
    { name: 'ANC Earbuds', image: '/products/earbuds/hero.png', tag: 'New' },
    { name: 'Alternate Angle', image: '/products/earbuds/alternate.png' },
    { name: 'Close-up Detail', image: '/products/earbuds/detail.png' },
    { name: 'Everyday Carry', image: '/products/earbuds/lifestyle.png' },
  ],
  cables: [
    { name: '100W Fast Charging Cable', image: '/products/cables/hero.png', tag: 'Most Versatile' },
    { name: '3-in-1 Cable', image: '/products/cables/3in1-hero.png' },
    { name: 'Type-C Smart Display', image: '/products/cables/typec-hero.png' },
    { name: 'In Use', image: '/products/cables/lifestyle.png' },
  ],
  cleaning: [
    { name: 'Mop & Vacuum Robot', image: '/products/cleaning/hero.png', tag: 'Best Seller' },
    { name: 'Glass Cleaner Robot', image: '/products/cleaning/glass-hero.png' },
    { name: 'Mop & Vacuum (Classic)', image: '/products/cleaning/mop-hero.png' },
    { name: 'In Action', image: '/products/cleaning/lifestyle.png' },
  ],
  'car-accessories': [
    { name: 'Android AI Box', image: '/products/car-accessories/hero.png', tag: 'Featured' },
    { name: 'Automatic Car Cover', image: '/products/car-accessories/cover-hero.png' },
    { name: 'Jump Starter & Tyre Inflator', image: '/products/car-accessories/jumpstart-hero.png' },
    { name: 'In Your Car', image: '/products/car-accessories/lifestyle.png' },
  ],
};

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const products = categoryProducts[category] || [];
  const spotlight = spotlightProducts.find((p) => p.id === category);

  return (
    <div style={{ background: 'var(--bg-void)', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20">
        <AuroraBackground />

        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 60% 40%, ${cat.accent}18 0%, transparent 60%)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-10"
          >
            <Link
              href="/products"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              <ArrowLeft size={14} /> All Products
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{cat.name}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: cat.accent }}
              >
                Powerlogic
              </motion.p>
              <h1
                className="font-black leading-tight mb-6"
                style={{ fontSize: 'var(--h1)', fontWeight: 900 }}
              >
                <SplitText by="words" delay={0.3} stagger={0.08}>{cat.name}</SplitText>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="leading-relaxed mb-8"
                style={{ fontSize: 'var(--body-lg)', color: 'var(--text-secondary)' }}
              >
                {cat.description}
              </motion.p>

              {spotlight && (
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {spotlight.specs.map((spec, i) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.08 }}
                      className="p-4 rounded-2xl"
                      style={{
                        background: 'var(--glass-fill)',
                        border: `1px solid ${cat.accent}25`,
                      }}
                    >
                      <div className="text-xs mb-1 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                        {spec.label}
                      </div>
                      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                        {spec.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              <MagneticButton data-cursor="Shop">
                <Link href="/contact" className="btn-glow">
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </MagneticButton>
            </div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle, ${cat.accent}25 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    transform: 'scale(1.2)',
                  }}
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image
                    src={products[0]?.image || cat.heroImage}
                    alt={cat.name}
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain relative"
                    style={{ filter: `drop-shadow(0 40px 80px ${cat.accent}40)` }}
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product gallery */}
      {products.length > 1 && (
        <section className="py-20 px-6 lg:px-12" style={{ background: 'var(--bg-panel)' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-bold text-2xl mb-10" style={{ color: 'var(--text-primary)' }}>
              Full Range
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card relative overflow-hidden group cursor-none p-4"
                  data-cursor="View"
                >
                  {p.tag && (
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold z-10"
                      style={{
                        background: `${cat.accent}20`,
                        border: `1px solid ${cat.accent}40`,
                        color: cat.accent,
                      }}
                    >
                      {p.tag}
                    </span>
                  )}
                  <div className="aspect-square relative mb-3">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    {p.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 text-center" style={{ background: 'var(--bg-void)' }}>
        <div className="max-w-2xl mx-auto">
          <h3 className="font-black text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Interested in {cat.name}?
          </h3>
          <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
            Get in touch and our team will help you find the right product for your needs.
          </p>
          <MagneticButton data-cursor="Contact">
            <Link href="/contact" className="btn-glow">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
