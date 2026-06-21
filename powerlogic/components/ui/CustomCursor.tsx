'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [label, setLabel] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 500, damping: 40, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 500, damping: 40, mass: 0.5 });

  const dotX = useSpring(rawX, { stiffness: 800, damping: 50, mass: 0.3 });
  const dotY = useSpring(rawY, { stiffness: 800, damping: 50, mass: 0.3 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const enter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const hoverEl = el.closest('[data-cursor]') as HTMLElement | null;
      if (hoverEl) {
        setIsHovering(true);
        setLabel(hoverEl.dataset.cursor || '');
      }
    };

    const leave = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('[data-cursor]')) {
        setIsHovering(false);
        setLabel('');
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
    };
  }, [rawX, rawY]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: isHovering ? 52 : 32,
          height: isHovering ? 52 : 32,
          opacity: 1,
        }}
        initial={{ width: 32, height: 32, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div
          className="rounded-full border flex items-center justify-center"
          style={{
            width: '100%',
            height: '100%',
            borderColor: isHovering ? 'rgba(63,135,254,0.8)' : 'rgba(63,135,254,0.4)',
            boxShadow: isHovering
              ? '0 0 20px rgba(63,135,254,0.5), inset 0 0 10px rgba(63,135,254,0.1)'
              : '0 0 12px rgba(63,135,254,0.3)',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
        >
          {label && (
            <span
              className="text-[10px] font-semibold tracking-wider uppercase"
              style={{ color: '#3F87FE', fontSize: '9px' }}
            >
              {label}
            </span>
          )}
        </div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          background: '#3F87FE',
          boxShadow: '0 0 8px rgba(63,135,254,0.8)',
        }}
      />
    </>
  );
}
