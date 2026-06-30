'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

const productLinks = [
  { label: 'E-Scooters', href: '/products/scooter' },
  { label: 'Speakers', href: '/products/speaker' },
  { label: 'Power Stations', href: '/products/power-station' },
  { label: 'Power Banks', href: '/products/power-bank' },
  { label: 'Adapters', href: '/products/power-adapter' },
  { label: 'Earbuds', href: '/products/earbuds' },
  { label: 'Cables', href: '/products/cables' },
  { label: 'Cleaning', href: '/products/cleaning' },
  { label: 'Car Accessories', href: '/products/car-accessories' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[500] px-4 lg:px-8"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          className="flex items-center justify-between px-5 lg:px-8"
          style={{
            height: scrolled ? '62px' : '76px',
            background: scrolled
              ? 'rgba(5,6,10,0.75)'
              : 'rgba(5,6,10,0.35)',
            backdropFilter: 'blur(24px) saturate(160%)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            borderBottom: scrolled
              ? '1px solid rgba(63,135,254,0.15)'
              : '1px solid rgba(255,255,255,0.06)',
            borderRadius: '0 0 28px 28px',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)'
              : '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)',
            transition: 'all 0.5s ease',
          }}
        >
          {/* Logo */}
          <MagneticButton data-cursor="Home">
            <Link href="/" className="flex items-center">
              <Image
                src="/brand/logo-main.png"
                alt="Powerlogic"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </MagneticButton>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {(['Home', 'About', 'Contact'] as const).map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="nav-link text-sm font-medium tracking-wide"
              >
                {item}
              </Link>
            ))}

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="nav-link flex items-center gap-1 text-sm font-medium tracking-wide"
                style={{ background: 'none', border: 'none' }}
              >
                Products <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    style={{ width: '260px' }}
                  >
                    <div className="glass-card p-3">
                      {productLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center px-3 py-2.5 rounded-xl text-sm transition-all"
                          style={{ color: 'var(--text-secondary)' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--text-primary)';
                            e.currentTarget.style.background = 'var(--glass-fill-hover)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <MagneticButton data-cursor="Shop">
              <Link href="/products" className="btn-glow text-sm py-2.5 px-5">
                Our Products
              </Link>
            </MagneticButton>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-xl"
            style={{ background: 'var(--glass-fill)', border: '1px solid var(--glass-border)', cursor: 'pointer' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} color="var(--text-primary)" /> : <Menu size={20} color="var(--text-primary)" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[499] flex justify-end lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              className="h-full w-80 p-8 pt-24 flex flex-col gap-4 overflow-y-auto"
              style={{
                background: 'rgba(10,11,15,0.98)',
                backdropFilter: 'blur(40px)',
                borderLeft: '1px solid var(--glass-border)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'All Products', href: '/products' },
                { label: 'Contact', href: '/contact' },
                ...productLinks,
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 border-b text-base font-medium"
                  style={{ color: 'var(--text-secondary)', borderColor: 'var(--glass-border)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
