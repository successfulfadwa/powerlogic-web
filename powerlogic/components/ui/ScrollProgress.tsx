'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(progress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? scrolled / max : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    spring.set(progress);
  }, [progress, spring]);

  return (
    <>
      {/* Top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[9998] h-[3px]"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX: spring,
            background: 'linear-gradient(90deg, #3F87FE, #7B5CFF, #3FE0FE)',
            boxShadow: '0 0 16px rgba(63,135,254,1), 0 0 40px rgba(63,135,254,0.5)',
          }}
        />
        {/* Trailing glow dot */}
        <motion.div
          className="absolute top-0 w-3 h-3 rounded-full -translate-y-[4px] -translate-x-1/2"
          style={{
            left: spring.get() * 100 + '%',
            background: '#fff',
            boxShadow: '0 0 12px #3F87FE, 0 0 30px rgba(63,135,254,0.8)',
            x: spring,
          }}
        />
      </div>

      {/* Right-side vertical indicator */}
      <div
        className="fixed right-4 top-1/2 -translate-y-1/2 z-[9998] h-32 w-[2px] rounded-full hidden lg:block"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <motion.div
          className="w-full rounded-full origin-top"
          style={{
            scaleY: spring,
            background: 'linear-gradient(to bottom, #3F87FE, #7B5CFF)',
            boxShadow: '0 0 8px rgba(63,135,254,0.6)',
            height: '100%',
          }}
        />
      </div>
    </>
  );
}
