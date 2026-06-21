'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import AuroraBackground from '@/components/home/AuroraBackground';
import SplitText from '@/components/ui/SplitText';
import { categories } from '@/lib/categories';

const filters = ['All', 'Mobility', 'Audio', 'Power', 'Accessories'];

const categoryFilters: Record<string, string> = {
  scooter: 'Mobility',
  speaker: 'Audio',
  earbuds: 'Audio',
  'power-station': 'Power',
  'power-bank': 'Power',
  'power-adapter': 'Power',
  cables: 'Accessories',
  cleaning: 'Accessories',
  'car-accessories': 'Accessories',
};

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = categories.filter(
    (c) => activeFilter === 'All' || categoryFilters[c.slug] === activeFilter
  );

  return (
    <div style={{ background: 'var(--bg-void)', minHeight: '100vh' }}>
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <AuroraBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: 'var(--brand-blue)' }}
          >
            Full Catalogue
          </motion.p>
          <h1
            className="font-black leading-tight mb-6"
            style={{ fontSize: 'var(--h1)', fontWeight: 900 }}
          >
            <SplitText by="words" delay={0.2} stagger={0.08}>All Products</SplitText>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)', fontSize: 'var(--body-lg)' }}
          >
            Nine categories. Every one engineered with the same obsession.
          </motion.p>
        </div>
      </section>

      {/* Filter pills */}
      <div
        className="sticky top-20 z-40 py-4 px-6 lg:px-12"
        style={{
          background: 'rgba(5,6,10,0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--glass-border)',
        }}
      >
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto pb-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: activeFilter === f ? 'var(--brand-blue)' : 'var(--glass-fill)',
                color: activeFilter === f ? '#fff' : 'var(--text-secondary)',
                border: activeFilter === f ? 'none' : '1px solid var(--glass-border)',
                boxShadow: activeFilter === f ? '0 0 20px rgba(63,135,254,0.4)' : 'none',
                cursor: 'pointer',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cat, i) => (
              <motion.div
                key={cat.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <Link href={`/products/${cat.slug}`} data-cursor="View">
                  <div
                    className="glass-card relative overflow-hidden group cursor-none"
                    style={{ minHeight: '320px' }}
                  >
                    {/* Image */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <Image
                        src={cat.heroImage}
                        alt={cat.name}
                        fill
                        className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Gradient */}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }}
                    />

                    {/* Content */}
                    <div className="relative p-6 h-full flex flex-col justify-end" style={{ minHeight: '320px' }}>
                      <div
                        className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ background: cat.accent, boxShadow: `0 0 20px ${cat.accent}60` }}
                      >
                        <ArrowUpRight size={15} color="#fff" />
                      </div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                        {cat.name}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
