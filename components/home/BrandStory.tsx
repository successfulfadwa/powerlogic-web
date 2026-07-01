'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Award, Globe } from 'lucide-react';
import SplitText from '@/components/ui/SplitText';

export default function BrandStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'var(--bg-void)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: 'var(--brand-blue)' }}
            >
              Our Philosophy
            </motion.div>

            <h2
              className="font-black mb-8 leading-tight"
              style={{ fontSize: 'var(--h2)', fontWeight: 900 }}
            >
              <SplitText by="words" delay={0.1} stagger={0.08}>
                Driven by Design.
              </SplitText>
              <br />
              <SplitText by="words" delay={0.35} stagger={0.08}>
                Defined by Quality.
              </SplitText>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p
                className="leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)', fontSize: 'var(--body-lg)' }}
              >
                Powerlogic creates smart accessories that blend modern design with
                everyday reliability. Every product is engineered to feel intuitive,
                perform consistently, and fit seamlessly into your life.
              </p>
              <p
                className="leading-relaxed mb-10"
                style={{ color: 'var(--text-muted)' }}
              >
                From our London base, we obsess over details most brands overlook:
                the precision of a hinge, the tolerance of a charge port, the weight
                of a power bank in your hand. This is why our customers come back.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { Icon: Zap, label: 'Performance-First', desc: 'Specs that matter in real use' },
                  { Icon: Award, label: 'Built to Last', desc: 'Tested to outlast the competition' },
                  { Icon: Globe, label: 'UK Heritage', desc: 'Designed in London since 2021' },
                ].map(({ Icon, label, desc }) => (
                  <div
                    key={label}
                    className="p-4 rounded-2xl text-center"
                    style={{ background: 'var(--glass-fill)', border: '1px solid var(--glass-border)' }}
                  >
                    <Icon size={20} style={{ color: 'var(--brand-blue)', margin: '0 auto 8px' }} />
                    <div className="text-xs font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {label}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {desc}
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-ghost inline-flex">
                More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right — image with parallax tilt */}
          <motion.div
            className="relative"
            style={{ y: imageY, rotate: imageRotate }}
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: 'var(--glass-fill)',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
              }}
            >
              <Image
                src="/brand/hero-bg-2.png"
                alt="Powerlogic Speaker detail"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                style={{ display: 'block' }}
              />

              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(63,135,254,0.08) 0%, transparent 60%)',
                }}
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl"
              style={{
                background: 'rgba(10,11,15,0.9)',
                border: '1px solid rgba(63,135,254,0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 30px rgba(63,135,254,0.2)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-2xl font-black" style={{ color: 'var(--brand-blue)' }}>4.8 ★</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Average customer rating</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
