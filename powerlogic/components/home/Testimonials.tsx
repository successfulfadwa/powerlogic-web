'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SplitText from '@/components/ui/SplitText';

const testimonials = [
  {
    name: 'Oliver M.',
    role: 'Verified Buyer',
    text: 'Everything I\'ve tried from Powerlogic has been reliable and well made. You get the feeling they actually care about quality, not just selling another product.',
    rating: 5,
    product: 'RGB Speaker',
  },
  {
    name: 'Charlotte B.',
    role: 'Verified Buyer',
    text: 'What I like most about Powerlogic is the consistency. Good performance, thoughtful design, and no unnecessary complications. It\'s become my go-to brand.',
    rating: 5,
    product: 'GaN Adapter',
  },
  {
    name: 'Thomas K.',
    role: 'Verified Buyer',
    text: 'Powerlogic strikes a great balance between quality and value. The products look great, work exactly as expected, and feel built to last.',
    rating: 5,
    product: 'E-Scooter',
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ background: 'var(--bg-panel)' }}
    >
      {/* Aurora accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(123,92,255,0.1) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: 'var(--brand-blue)' }}
          >
            Satisfied Customers
          </motion.p>
          <h2 className="font-black" style={{ fontSize: 'var(--h2)', fontWeight: 900 }}>
            <SplitText by="words" delay={0.1} stagger={0.08}>
              Real people.
            </SplitText>
            <br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 400, fontSize: '0.7em' }}>
              <SplitText by="words" delay={0.35} stagger={0.06}>
                Real results.
              </SplitText>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card p-8 relative group"
              whileHover={{ y: -6 }}
            >
              {/* Quote mark */}
              <div
                className="text-6xl font-black leading-none mb-4 select-none"
                style={{ color: 'rgba(63,135,254,0.15)', fontFamily: 'Georgia, serif' }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    fill="#3F87FE"
                    style={{ color: '#3F87FE' }}
                  />
                ))}
              </div>

              <p className="leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                {t.text}
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #3F87FE, #7B5CFF)',
                    color: '#fff',
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {t.role} · {t.product}
                  </div>
                </div>
              </div>

              {/* Glow corner accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-br-none rounded-tl-none rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(63,135,254,0.15), transparent 70%)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
