'use client';

import { useRef, useState, ReactNode } from 'react';

interface Props {
  children: ReactNode[];
  speed?: number;
  gap?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function MarqueeStrip({
  children,
  speed = 30,
  gap = 48,
  direction = 'left',
  className = '',
}: Props) {
  const [paused, setPaused] = useState(false);
  const items = [...children, ...children];

  const duration = `${(items.length * 4) / (speed / 10)}s`;
  const animName = direction === 'left' ? 'marquee' : 'marquee-right';

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
      <div
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          animation: `${animName} ${duration} linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
          willChange: 'transform',
        }}
      >
        {items.map((child, i) => (
          <div key={i} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
