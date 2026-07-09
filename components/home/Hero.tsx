'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Full-bleed background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: bgScale, y: bgY }}
      >
        <Image
          src="/brand/hero-bg-3.png"
          alt="Powerlogic"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dim overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(5,6,10,0.38) 0%, rgba(5,6,10,0.46) 42%, rgba(5,6,10,0.9) 100%)',
        }}
      />

      {/* Top hero text */}
      <div className="relative z-10 w-full flex-1 flex items-start">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 lg:pt-36 w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold tracking-[0.28em] uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.72)' }}
            >
              Smart accessories for modern life
            </p>
            <h1
              className="font-black leading-[0.95] mb-5"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                color: 'white',
                textShadow: '0 10px 40px rgba(0,0,0,0.35)',
              }}
            >
              Designed to keep up.
            </h1>
            <p
              className="max-w-xl text-base lg:text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.76)' }}
            >
              Premium power, audio, and mobility essentials built for clean setups, long days, and life on the move.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom content — glass panel + buttons */}
      <div className="relative z-10 w-full pb-16">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Link href="/products" className="btn-glow">
                Our Products
                <ArrowRight size={16} />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link href="/about" className="btn-ghost">
                <Play size={14} />
                Our Story
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-void))' }}
      />

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 right-8 lg:right-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, #3F87FE, transparent)' }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
