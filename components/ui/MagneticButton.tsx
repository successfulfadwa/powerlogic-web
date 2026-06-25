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

  const handleMove = (_e: MouseEvent) => {
    // Magnetic movement disabled — buttons no longer jump
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
