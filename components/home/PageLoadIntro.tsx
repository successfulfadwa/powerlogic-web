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
          {/* Logo X badge SVG animation */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
              style={{
                background: 'transparent',
                boxShadow: '0 0 60px rgba(63,135,254,0.7), 0 0 120px rgba(63,135,254,0.3)',
                borderRadius: '50%',
              }}
            />

            {/* Badge */}
            <motion.div
              className="w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden"
              style={{ background: '#3F87FE' }}
              animate={{
                boxShadow: [
                  '0 0 0px rgba(63,135,254,0)',
                  '0 0 60px rgba(63,135,254,0.8)',
                  '0 0 20px rgba(63,135,254,0.4)',
                ],
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Thicker white X behind */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute">
                <motion.line
                  x1="8"
                  y1="8"
                  x2="32"
                  y2="32"
                  stroke="white"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                />
                <motion.line
                  x1="32"
                  y1="8"
                  x2="8"
                  y2="32"
                  stroke="white"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, delay: 0.45 }}
                />
              </svg>

              {/* Front X in blue, same animation */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute">
                <motion.line
                  x1="8"
                  y1="8"
                  x2="32"
                  y2="32"
                  stroke="#3F87FE"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                />
                <motion.line
                  x1="32"
                  y1="8"
                  x2="8"
                  y2="32"
                  stroke="#3F87FE"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, delay: 0.45 }}
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Brand name fade in */}
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
