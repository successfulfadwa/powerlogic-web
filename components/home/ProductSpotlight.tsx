'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SplitText from '@/components/ui/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';
import { spotlightProducts, type SpotlightProduct } from '@/lib/products';

function SpotlightModule({ product, index }: { product: SpotlightProduct; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: '-20% 0px' });

  const isEven = index % 2 === 0;

  useEffect(() => {
    let gsap: typeof import('gsap').default | null = null;
    let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger | null = null;
    let ctx: { revert: () => void } | null = null;

    const initGsap = async () => {
      if (window.innerWidth < 768) return;

      const gsapModule = await import('gsap');
      const STModule = await import('gsap/ScrollTrigger');
      gsap = gsapModule.default;
      ScrollTrigger = STModule.ScrollTrigger || STModule.default;
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current || !imgRef.current) return;

      ctx = gsap.context(() => {
        if (!sectionRef.current || !imgRef.current || !gsap || !ScrollTrigger) return;

        gsap.fromTo(
          imgRef.current,
          { scale: 0.92, rotate: isEven ? -3 : 3 },
          {
            scale: 1,
            rotate: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'center 40%',
              scrub: 1.2,
            },
          }
        );
      }, sectionRef);
    };

    initGsap();
    return () => { if (ctx) ctx.revert(); };
  }, [isEven]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 md:py-28 overflow-hidden"
      style={{
        background: index % 2 === 0 ? 'var(--bg-void)' : 'var(--bg-panel)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at ${isEven ? '60%' : '40%'} 50%, ${product.accentColor}12 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:[&>:first-child]:order-2'}`}>
          {/* Image */}
          <div
            ref={imgRef}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glow behind */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${product.accentColor}30 0%, transparent 70%)`,
                  filter: 'blur(60px)',
                  transform: 'scale(1.2)',
                }}
              />
              <Image
                src={product.transparentImage}
                alt={product.name}
                width={500}
                height={500}
                className="relative w-full h-auto object-contain"
                style={{
                  filter: `drop-shadow(0 40px 80px ${product.accentColor}40)`,
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div ref={specsRef}>
            {/* Number */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-7xl font-black mb-4 select-none"
              style={{
                color: `${product.accentColor}15`,
                fontWeight: 900,
                lineHeight: 1,
              }}
            >
              0{index + 1}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: product.accentColor }}
            >
              Spotlight
            </motion.p>

            <h2
              className="font-black leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900 }}
            >
              <SplitText by="words" delay={0.1} stagger={0.08}>
                {product.name}
              </SplitText>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg mb-10"
              style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}
            >
              "{product.tagline}"
            </motion.p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {product.specs.map((spec, si) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + si * 0.1 }}
                  className="p-4 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${product.accentColor}30`,
                    backdropFilter: 'blur(20px) saturate(140%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(140%)',
                    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.07), 0 4px 20px rgba(0,0,0,0.3), 0 0 20px ${product.accentColor}08`,
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

            <MagneticButton data-cursor="View">
              <Link
                href={product.ctaLink}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm"
                style={{
                  background: `${product.accentColor}15`,
                  border: `1px solid ${product.accentColor}40`,
                  color: product.accentColor,
                  boxShadow: `0 0 30px ${product.accentColor}20`,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${product.accentColor}25`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${product.accentColor}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${product.accentColor}15`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${product.accentColor}20`;
                }}
              >
                View Full Specs <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductSpotlight() {
  return (
    <section>
      {/* Section header */}
      <div
        className="py-20 text-center relative"
        style={{ background: 'var(--bg-void)' }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--brand-blue))' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          style={{ color: 'var(--brand-blue)' }}
        >
          Signature Products
        </motion.p>
        <h2
          className="font-black"
          style={{ fontSize: 'var(--h2)', fontWeight: 900 }}
        >
          <SplitText by="words" delay={0.1} stagger={0.08}>
            Built Different.
          </SplitText>
        </h2>
      </div>

      {spotlightProducts.map((product, i) => (
        <SpotlightModule key={product.id} product={product} index={i} />
      ))}
    </section>
  );
}
