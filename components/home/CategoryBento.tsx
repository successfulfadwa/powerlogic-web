'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef, useState, MouseEvent } from 'react';
import SplitText from '@/components/ui/SplitText';
import { categories } from '@/lib/categories';

function CategoryCard({
  slug,
  name,
  description,
  heroImage,
  accent,
  index,
}: {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  accent: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: MouseEvent) => {
    if (!cardRef.current || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -6, y: dx * 6 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/products/${slug}`} data-cursor="View">
        <motion.div
          className="glass-card relative overflow-hidden group cursor-none h-full"
          style={{ minHeight: '260px', perspective: 1000 }}
          animate={{
            rotateX: hovered ? tilt.x : 0,
            rotateY: hovered ? tilt.y : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onMouseMove={handleMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
        >
          {/* Product image */}
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
            <Image
              src={heroImage}
              alt={name}
              fill
              className="object-cover opacity-65 group-hover:opacity-80 transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.18) 100%)`,
            }}
          />

          {/* Accent glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 70% 70%, ${accent}25 0%, transparent 60%)`,
            }}
          />

          {/* Content */}
          <div className="relative p-6 h-full flex flex-col justify-end" style={{ minHeight: '260px' }}>
            <div
              className="inline-flex w-fit px-2.5 py-1 rounded-full text-xs font-semibold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-1 group-hover:translate-y-0"
              style={{
                background: `${accent}20`,
                border: `1px solid ${accent}40`,
                color: accent,
                transition: 'all 0.3s ease',
              }}
            >
              Explore
            </div>
            <h3 className="text-xl font-bold mb-1.5" style={{ color: 'var(--text-primary)' }}>
              {name}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {description}
            </p>

            {/* Arrow */}
            <div
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
              style={{ background: accent, boxShadow: `0 0 20px ${accent}60` }}
            >
              <ArrowUpRight size={14} color="#fff" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function CategoryBento() {
  return (
    <section className="py-28 lg:py-36" style={{ background: 'var(--bg-void)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: 'var(--brand-blue)' }}
          >
            Product Lines
          </motion.p>
          <h2
            className="font-black leading-tight"
            style={{ fontSize: 'var(--h2)', fontWeight: 900 }}
          >
            <SplitText by="words" delay={0.1} stagger={0.08}>
              Everything You Need.
            </SplitText>
            <br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 400, fontSize: '0.7em' }}>
              <SplitText by="words" delay={0.4} stagger={0.06}>
                Nine lines. One brand. Zero compromise.
              </SplitText>
            </span>
          </h2>
        </div>

        {/* Bento grid — asymmetric layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Row 1: wide + normal */}
          <div className="lg:col-span-2">
            <CategoryCard {...categories[0]} index={0} />
          </div>
          <div>
            <CategoryCard {...categories[1]} index={1} />
          </div>

          {/* Row 2: 3 normal */}
          <div>
            <CategoryCard {...categories[2]} index={2} />
          </div>
          <div>
            <CategoryCard {...categories[3]} index={3} />
          </div>
          <div>
            <CategoryCard {...categories[5]} index={4} />
          </div>

          {/* Row 3: wide + normal */}
          <div className="lg:col-span-2">
            <CategoryCard {...categories[4]} index={5} />
          </div>
          <div>
            <CategoryCard {...categories[6]} index={6} />
          </div>

          {/* Row 4: normal + wide */}
          <div>
            <CategoryCard {...categories[7]} index={7} />
          </div>
          <div className="lg:col-span-2">
            <CategoryCard {...categories[8]} index={8} />
          </div>
        </div>
      </div>
    </section>
  );
}
