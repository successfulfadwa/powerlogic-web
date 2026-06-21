'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  by?: 'words' | 'chars';
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export default function SplitText({
  children,
  className = '',
  delay = 0,
  stagger = 0.06,
  by = 'words',
  as: Tag = 'h1',
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const tokens = by === 'words'
    ? children.split(' ').map((w) => ({ text: w, key: w + Math.random() }))
    : children.split('').map((c) => ({ text: c, key: c + Math.random() }));

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  } as const;

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`inline overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {tokens.map(({ text, key }, i) => (
        <motion.span
          key={key + i}
          variants={item}
          className="inline-block"
          style={{ marginRight: by === 'words' ? '0.25em' : '0' }}
        >
          {text === ' ' ? '\u00A0' : text}
        </motion.span>
      ))}
    </motion.div>
  );
}
