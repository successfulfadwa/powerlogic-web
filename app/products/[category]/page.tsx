'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import AuroraBackground from '@/components/home/AuroraBackground';
import SplitText from '@/components/ui/SplitText';
import { categories } from '@/lib/categories';
import { getCategoryProducts } from '@/lib/products';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const products = getCategoryProducts(category);

  return (
    <div style={{ background: 'var(--bg-void)', minHeight: '100vh' }}>
      <section className="relative overflow-hidden pt-28 pb-20">
        <AuroraBackground />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 60% 40%, ${cat.accent}18 0%, transparent 60%)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
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
              <ArrowLeft size={14} /> All Categories
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
              {cat.name}
            </span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: cat.accent }}
            >
              Powerlogic Catalog
            </motion.p>

            <h1
              className="font-black leading-tight mb-6"
              style={{ fontSize: 'var(--h1)', fontWeight: 900 }}
            >
              <SplitText by="words" delay={0.3} stagger={0.08}>
                {cat.name}
              </SplitText>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="leading-relaxed mb-8"
              style={{ fontSize: 'var(--body-lg)', color: 'var(--text-secondary)' }}
            >
              Explore the products in this category, then open any product page for deeper details, visuals, and specs.
            </motion.p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div
                className="p-4 rounded-2xl"
                style={{
                  background: 'var(--glass-fill)',
                  border: `1px solid ${cat.accent}25`,
                }}
              >
                <div className="text-xs mb-1 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Products
                </div>
                <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                  {products.length}
                </div>
              </div>
              <div
                className="p-4 rounded-2xl"
                style={{
                  background: 'var(--glass-fill)',
                  border: `1px solid ${cat.accent}25`,
                }}
              >
                <div className="text-xs mb-1 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Category
                </div>
                <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                  {cat.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12" style={{ background: 'var(--bg-panel)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: cat.accent }}>
                Products in this category
              </p>
              <h2 className="font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
                Browse the full range
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={`/products/${category}/${product.slug}`} data-cursor="Open">
                  <div
                    className="glass-card relative overflow-hidden group cursor-none h-full"
                    style={{ minHeight: '330px' }}
                  >
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <Image
                        src={product.heroImage}
                        alt={product.name}
                        fill
                        className="object-cover opacity-55 group-hover:opacity-75 transition-opacity duration-500"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>

                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.26) 60%, transparent 100%)' }}
                    />

                    {i === 0 && (
                      <span
                        className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-semibold z-10"
                        style={{
                          background: `${cat.accent}20`,
                          border: `1px solid ${cat.accent}40`,
                          color: cat.accent,
                        }}
                      >
                        Featured
                      </span>
                    )}

                    <div className="relative p-5 h-full flex flex-col justify-end" style={{ minHeight: '330px' }}>
                      <div
                        className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
                        style={{ background: cat.accent, boxShadow: `0 0 20px ${cat.accent}60` }}
                      >
                        <ArrowUpRight size={14} color="#fff" />
                      </div>
                      <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                        {product.name}
                      </h3>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                        {product.tagline}
                      </p>
                      <div className="text-xs font-medium uppercase tracking-wider" style={{ color: cat.accent }}>
                        View details
                      </div>
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
