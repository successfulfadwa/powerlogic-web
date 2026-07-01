'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import Image from 'next/image';
import AuroraBackground from '@/components/home/AuroraBackground';
import SplitText from '@/components/ui/SplitText';

export default function ContactPage() {
  return (
    <div style={{ background: 'var(--bg-void)', minHeight: '100vh' }}>
      {/* Header */}
      <section className="relative overflow-hidden pt-28 pb-16">
        <AuroraBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: 'var(--brand-blue)' }}
          >
            Get in Touch
          </motion.p>
          <h1 className="font-black leading-tight mb-6" style={{ fontSize: 'var(--h1)', fontWeight: 900 }}>
            <SplitText by="words" delay={0.3} stagger={0.08}>Let's Talk.</SplitText>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ color: 'var(--text-secondary)', fontSize: 'var(--body-lg)' }}
          >
            Questions, wholesale enquiries, or just want to say hello — we're here.
          </motion.p>
        </div>
      </section>

      {/* Info + image */}
      <section className="py-16 px-6 lg:px-12 pb-28">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(63,135,254,0.1)', border: '1px solid rgba(63,135,254,0.2)' }}
                >
                  <MapPin size={18} style={{ color: 'var(--brand-blue)' }} />
                </div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Address</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    46 Wickham Rd<br />London SE4 1NZ, UK
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(63,135,254,0.1)', border: '1px solid rgba(63,135,254,0.2)' }}
                >
                  <Mail size={18} style={{ color: 'var(--brand-blue)' }} />
                </div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Email</div>
                  <a href="mailto:example@powerlogic.com" className="text-sm" style={{ color: 'var(--brand-blue)' }}>
                    example@powerlogic.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6"
            >
              <div className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Response Time
              </div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                We aim to respond within 24 hours on business days (Mon–Fri, GMT).
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="glass-card p-4 lg:p-5 overflow-hidden">
              <div className="relative w-full min-h-[420px] lg:min-h-[560px] rounded-[20px] overflow-hidden">
                <Image
                  src="/brand/hero-bg-2.png"
                  alt="Powerlogic contact background"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(8,9,14,0.08) 0%, rgba(8,9,14,0.28) 100%)',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
