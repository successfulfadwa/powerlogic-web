'use client';

import { useRef, ReactNode, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number;
  'data-cursor'?: string;
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  'data-cursor': dataCursor,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 400, damping: 30 });
  const y = useSpring(rawY, { stiffness: 400, damping: 30 });

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rawX.set((e.clientX - cx) * strength);
    rawY.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: 'inline-flex' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      data-cursor={dataCursor}
    >
      {children}
    </motion.div>
  );
}
