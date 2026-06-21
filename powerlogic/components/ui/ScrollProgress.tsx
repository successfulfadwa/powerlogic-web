'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SECTIONS = [
  { label: 'Home' },
  { label: 'Trust' },
  { label: 'Story' },
  { label: 'Products' },
  { label: 'Spotlight' },
  { label: 'Reviews' },
  { label: 'Contact' },
];

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? scrolled / max : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const activeIndex = Math.min(
    Math.floor(progress * SECTIONS.length),
    SECTIONS.length - 1
  );

  const trackHeight = 240;
  const dotSpacing = trackHeight / (SECTIONS.length - 1);

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-[9998] hidden lg:flex flex-col items-center"
      style={{ height: `${trackHeight}px` }}
    >
      {/* Background track line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      />

      {/* Filled progress line */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-px origin-top rounded-full"
        style={{
          height: `${trackHeight}px`,
          background: 'linear-gradient(to bottom, #3F87FE, #7B5CFF, #3FE0FE)',
          boxShadow: '0 0 8px rgba(63,135,254,0.8)',
          scaleY: progress,
        }}
      />

      {/* Section dots */}
      {SECTIONS.map((section, i) => {
        const isPassed = i / (SECTIONS.length - 1) <= progress + 0.01;
        const isActive = i === activeIndex;

        return (
          <div
            key={section.label}
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3"
            style={{ top: `${i * dotSpacing}px` }}
          >
            {/* Dot */}
            <motion.div
              className="rounded-full flex-shrink-0"
              animate={{
                width: isActive ? 10 : 6,
                height: isActive ? 10 : 6,
                backgroundColor: isPassed ? '#3F87FE' : 'rgba(255,255,255,0.15)',
                boxShadow: isActive
                  ? '0 0 0 3px rgba(63,135,254,0.25), 0 0 16px rgba(63,135,254,0.8)'
                  : isPassed
                  ? '0 0 8px rgba(63,135,254,0.5)'
                  : 'none',
              }}
              transition={{ duration: 0.3 }}
              style={{ translateX: '-50%' }}
            />

            {/* Label — only visible when active */}
            <motion.span
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -4 }}
              transition={{ duration: 0.25 }}
              className="text-[10px] font-semibold tracking-widest uppercase whitespace-nowrap pointer-events-none select-none"
              style={{
                color: '#3F87FE',
                marginLeft: '12px',
                position: 'absolute',
                left: '100%',
              }}
            >
              {section.label}
            </motion.span>
          </div>
        );
      })}
    </div>
  );
}
