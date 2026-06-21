'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SplitText from '@/components/ui/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function ClosingCTA() {
  return (
    <section
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{ background: 'var(--bg-void)' }}
    >
      {/* Full-width gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(63,135,254,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 50%, rgba(123,92,255,0.12) 0%, transparent 50%)
          `,
        }}
      />

      {/* Top line accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(63,135,254,0.5) 30%, rgba(123,92,255,0.5) 70%, transparent 100%)',
        }}
      />

      {/* Bottom line accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(63,135,254,0.3) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Stats row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-16 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { to: 10000, suffix: '+', label: 'Products Shipped' },
            { to: 48, suffix: '/10', label: 'Average Rating', prefix: '' },
            { to: 9, suffix: '', label: 'Product Lines' },
            { to: 5, suffix: ' yrs', label: 'London-Based' },
          ].map(({ to, suffix, label, prefix }) => (
            <div key={label} className="text-center">
              <div
                className="text-4xl lg:text-5xl font-black mb-2"
                style={{ color: 'var(--text-primary)', fontWeight: 900 }}
              >
                <AnimatedCounter to={to} suffix={suffix} prefix={prefix} />
              </div>
              <div className="text-sm tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Headline */}
        <h2
          className="font-black leading-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 900 }}
        >
          <SplitText by="words" delay={0.1} stagger={0.08}>
            Designed to Stand Out.
          </SplitText>
          <br />
          <span style={{ color: 'var(--brand-blue)' }}>
            <SplitText by="words" delay={0.5} stagger={0.08}>
              Built to Perform.
            </SplitText>
          </span>
        </h2>

        <motion.p
          className="mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ fontSize: 'var(--body-lg)', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Nine product lines. One design language. Engineered in London
          for people who won't settle for ordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <MagneticButton data-cursor="Shop" strength={0.2}>
            <Link href="/products" className="btn-glow text-base px-10 py-4">
              View All Products
              <ArrowRight size={18} />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
