'use client';

import { use, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import AuroraBackground from '@/components/home/AuroraBackground';
import SplitText from '@/components/ui/SplitText';
import { categories } from '@/lib/categories';
import { getProduct } from '@/lib/products';

export default function ProductPage({ params }: { params: Promise<{ category: string; product: string }> }) {
  const { category, product } = use(params);
  const cat = categories.find((c) => c.slug === category);
  const item = getProduct(category, product);

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  if (!cat || !item) notFound();

  const gallery = item.gallery;

  const closeLightbox = () => setActiveImageIndex(null);
  const goPrev = () => {
    if (activeImageIndex === null || gallery.length === 0) return;
    setActiveImageIndex((activeImageIndex - 1 + gallery.length) % gallery.length);
  };
  const goNext = () => {
    if (activeImageIndex === null || gallery.length === 0) return;
    setActiveImageIndex((activeImageIndex + 1) % gallery.length);
  };

  useEffect(() => {
    if (activeImageIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImageIndex, gallery.length]);

  return (
    <div style={{ background: 'var(--bg-void)', minHeight: '100vh' }}>
      <section className="relative overflow-hidden pt-28 pb-20">
        <AuroraBackground />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 55% 40%, ${item.accentColor}18 0%, transparent 60%)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-10"
          >
            <Link
              href={`/products/${category}`}
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              <ArrowLeft size={14} /> {cat.name}
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
              {item.name}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: item.accentColor }}
              >
                {cat.name}
              </motion.p>
              <h1 className="font-black leading-tight mb-6" style={{ fontSize: 'var(--h1)', fontWeight: 900 }}>
                <SplitText by="words" delay={0.3} stagger={0.08}>
                  {item.name}
                </SplitText>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="leading-relaxed mb-8"
                style={{ fontSize: 'var(--body-lg)', color: 'var(--text-secondary)' }}
              >
                {item.description}
              </motion.p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {item.specs.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.08 }}
                    className="p-4 rounded-2xl"
                    style={{
                      background: 'var(--glass-fill)',
                      border: `1px solid ${item.accentColor}25`,
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
            </div>

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
                    background: `radial-gradient(circle, ${item.accentColor}25 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    transform: 'scale(1.2)',
                  }}
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image
                    src={item.transparentImage}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain relative"
                    style={{ filter: `drop-shadow(0 40px 80px ${item.accentColor}40)` }}
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12" style={{ background: 'var(--bg-panel)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: item.accentColor }}>
                Gallery
              </p>
              <div className="grid grid-cols-2 gap-4">
                {gallery.map((src, index) => (
                  <motion.button
                    key={`${src}-${index}`}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card relative overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      minHeight: index === 0 ? '320px' : '220px',
                      borderColor: `${item.accentColor}25`,
                      outlineColor: item.accentColor,
                    }}
                    aria-label={`Open gallery image ${index + 1} for ${item.name}`}
                  >
                    <Image src={src} alt={`${item.name} ${index + 1}`} fill className="object-cover" />
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.32), transparent 55%)' }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: item.accentColor }}>
                Features
              </p>
              <div className="space-y-3">
                {item.features.map((feature) => (
                  <div
                    key={feature}
                    className="p-4 rounded-2xl"
                    style={{
                      background: 'var(--glass-fill)',
                      border: `1px solid ${item.accentColor}25`,
                    }}
                  >
                    <p style={{ color: 'var(--text-secondary)' }}>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeImageIndex !== null && gallery[activeImageIndex] && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-8"
            style={{ background: 'rgba(0,0,0,0.86)' }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${item.name} gallery viewer`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 z-20 rounded-full p-3 bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close gallery"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((current) =>
                  current === null ? current : (current - 1 + gallery.length) % gallery.length
                );
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous image"
            >
              <ArrowLeft size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((current) => (current === null ? current : (current + 1) % gallery.length));
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next image"
            >
              <ArrowRight size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 8 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-6xl h-[70vh] sm:h-[78vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[activeImageIndex]}
                alt={`${item.name} gallery image ${activeImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 rounded-full px-4 py-2 bg-white/10 text-white text-sm backdrop-blur">
              {activeImageIndex + 1} / {gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
