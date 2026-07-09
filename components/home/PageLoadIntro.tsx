'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoadIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-center justify-center"
          style={{ background: 'var(--bg-void)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ scale: 0.72, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Subtle background accents behind the logo */}
            <motion.div
              className="absolute -inset-10 rounded-full blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(63,135,254,0.22) 0%, rgba(63,135,254,0.08) 35%, transparent 72%)',
              }}
              animate={{ opacity: [0.45, 0.8, 0.45], scale: [0.98, 1.04, 0.98] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="absolute -inset-2 rounded-full border"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.02, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Logo mark */}
            <motion.div
              className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden"
              style={{ background: '#3F87FE' }}
              animate={{
                boxShadow: [
                  '0 0 0 rgba(63,135,254,0)',
                  '0 0 36px rgba(63,135,254,0.55)',
                  '0 0 18px rgba(63,135,254,0.28)',
                ],
              }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Bigger white X behind */}
              <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
              >
                <path
                  d="M18 18 L42 18 L50 34 L58 18 L82 18 L60 50 L82 82 L58 82 L50 66 L42 82 L18 82 L40 50 Z"
                  fill="white"
                  opacity="1"
                />
              </motion.svg>

              {/* Blue X in front */}
              <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
              >
                <path
                  d="M30 30 L45 30 L50 39 L55 30 L70 30 L56 50 L70 70 L55 70 L50 61 L45 70 L30 70 L44 50 Z"
                  fill="#3F87FE"
                />
              </motion.svg>

              {/* Small inner shine */}
              <div
                className="absolute inset-[14px] rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 35%, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.06) 28%, transparent 62%)',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Brand name below */}
          <motion.span
            className="absolute mt-28 text-base font-bold tracking-[0.3em] uppercase"
            style={{ color: 'rgba(245,246,248,0.4)', letterSpacing: '0.3em' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            Powerlogic
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
