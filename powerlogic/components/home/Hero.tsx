'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import AuroraBackground from './AuroraBackground';
import SplitText from '@/components/ui/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-void)' }}
    >
      <AuroraBackground />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20"
        style={{ y: contentY }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'var(--glass-fill)',
                border: '1px solid rgba(63,135,254,0.3)',
                color: 'var(--brand-blue)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--brand-blue)', boxShadow: '0 0 8px var(--brand-blue)' }}
              />
              Est. 2021 · London, UK
            </motion.div>

            {/* Headline */}
            <h1
              className="leading-[0.95] font-black mb-6"
              style={{ fontSize: 'var(--h1)', fontWeight: 900 }}
            >
              <SplitText delay={1.4} stagger={0.07} by="words">
                Power,
              </SplitText>
              <br />
              <span style={{ color: 'var(--brand-blue)' }}>
                <SplitText delay={1.55} stagger={0.07} by="words">
                  Reimagined.
                </SplitText>
              </span>
            </h1>

            {/* Subhead */}
            <motion.p
              className="mb-10 max-w-md leading-relaxed"
              style={{ fontSize: 'var(--body-lg)', color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              Smart accessories engineered for how you actually live — on the road,
              at your desk, off the grid.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
            >
              <MagneticButton data-cursor="Shop">
                <Link href="/products" className="btn-glow">
                  Shop Powerlogic
                  <ArrowRight size={16} />
                </Link>
              </MagneticButton>

              <MagneticButton data-cursor="Story">
                <Link href="/about" className="btn-ghost">
                  <Play size={14} />
                  Our Story
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-10 mt-14 pt-10"
              style={{ borderTop: '1px solid var(--glass-border)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              {[
                { value: '10K+', label: 'Happy Riders' },
                { value: '4.8★', label: 'Avg. Rating' },
                { value: '9', label: 'Product Lines' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — product image */}
          <div className="relative flex items-center justify-center">
            {/* Glow behind image */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(63,135,254,0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            <motion.div
              className="relative w-full max-w-lg"
              style={{ y: imageY, scale: imageScale }}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/products/power-adapter/hero.png"
                  alt="Powerlogic 140W GaN Adapter"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 40px 80px rgba(63,135,254,0.3))' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-void))' }}
      />

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, var(--brand-blue), transparent)' }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
