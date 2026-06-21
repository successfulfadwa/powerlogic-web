'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Award, Globe, Users, MapPin, Calendar } from 'lucide-react';
import AuroraBackground from '@/components/home/AuroraBackground';
import SplitText from '@/components/ui/SplitText';

const milestones = [
  { year: '2021', event: 'Powerlogic founded in London, UK with a focus on car accessories.' },
  { year: '2022', event: 'Expanded into personal mobility — launching the first dual-motor e-scooter line.' },
  { year: '2023', event: 'Audio and power products launched. RGB speaker becomes fastest-selling SKU.' },
  { year: '2024', event: '10,000+ units shipped. GaN adapter line introduced.' },
  { year: '2025', event: 'Full product ecosystem live: 9 categories, 18+ SKUs.' },
  { year: '2026', event: 'New website. Same obsession with quality.' },
];

const values = [
  {
    Icon: Zap,
    title: 'Performance-First',
    desc: 'We spec products for real-world use, not spec sheets. If it doesn\'t perform for our own team, it doesn\'t ship.',
  },
  {
    Icon: Award,
    title: 'Built to Last',
    desc: 'Every product is tested beyond its rated lifecycle. We\'d rather build one thing that lasts than ten things that don\'t.',
  },
  {
    Icon: Globe,
    title: 'London Heritage',
    desc: 'Based in SE London since 2021. Our city\'s pragmatism shapes how we think about product — no fluff, all function.',
  },
  {
    Icon: Users,
    title: 'Customer-Obsessed',
    desc: 'A 4.8-star average isn\'t an accident. We read every review and iterate on every batch.',
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg-void)' }}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-28">
        <AuroraBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: 'var(--brand-blue)' }}
          >
            Our Story
          </motion.p>
          <h1
            className="font-black leading-tight mb-8"
            style={{ fontSize: 'var(--h1)', fontWeight: 900 }}
          >
            <SplitText by="words" delay={0.3} stagger={0.08}>
              Five years of making
            </SplitText>
            <br />
            <span style={{ color: 'var(--brand-blue)' }}>
              <SplitText by="words" delay={0.7} stagger={0.08}>
                power, personal.
              </SplitText>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'var(--body-lg)', color: 'var(--text-secondary)' }}
          >
            Powerlogic was built on a simple frustration: great design and real performance
            shouldn't be mutually exclusive. We've spent five years proving they don't have to be.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--bg-panel)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black" style={{ fontSize: 'var(--h2)', fontWeight: 900 }}>
              <SplitText by="words" delay={0.1} stagger={0.08}>What We Stand For</SplitText>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card p-8"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(63,135,254,0.1)', border: '1px solid rgba(63,135,254,0.2)' }}
                >
                  <Icon size={22} style={{ color: 'var(--brand-blue)' }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text-primary)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--bg-void)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black" style={{ fontSize: 'var(--h2)', fontWeight: 900 }}>
              <SplitText by="words" delay={0.1} stagger={0.08}>The Journey</SplitText>
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(to bottom, var(--brand-blue), var(--accent-violet), transparent)' }}
            />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`flex items-start gap-8 mb-12 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}
              >
                <div className="glass-card p-6 flex-1">
                  <div
                    className="text-2xl font-black mb-2"
                    style={{ color: 'var(--brand-blue)' }}
                  >
                    {m.year}
                  </div>
                  <p style={{ color: 'var(--text-secondary)' }}>{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Address card */}
      <section className="py-16" style={{ background: 'var(--bg-panel)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="flex-1">
              <h3 className="font-bold text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Find Us</h3>
              <div className="flex items-start gap-3 mb-3">
                <MapPin size={18} style={{ color: 'var(--brand-blue)', marginTop: 2, flexShrink: 0 }} />
                <div style={{ color: 'var(--text-secondary)' }}>
                  46 Wickham Rd, London SE4 1NZ, United Kingdom
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={18} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
                <div style={{ color: 'var(--text-secondary)' }}>Est. 2021 · Operating since inception</div>
              </div>
            </div>
            <div
              className="w-px h-20 hidden md:block"
              style={{ background: 'var(--glass-border)' }}
            />
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Founded', value: '2021' },
                  { label: 'Location', value: 'London, UK' },
                  { label: 'Products', value: '18+ SKUs' },
                  { label: 'Categories', value: '9 Lines' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>{label}</div>
                    <div className="font-bold" style={{ color: 'var(--text-primary)' }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
