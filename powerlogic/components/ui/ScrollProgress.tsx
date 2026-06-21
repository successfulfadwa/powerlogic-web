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
    <div
      className="fixed top-0 left-0 right-0 z-[9998] h-[2px]"
      style={{ background: 'rgba(255,255,255,0.04)' }}
    >
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: spring,
          background: 'linear-gradient(90deg, #3F87FE, #7B5CFF, #3FE0FE)',
          boxShadow: '0 0 10px rgba(63,135,254,0.8)',
        }}
      />
    </div>
  );
}
