'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail } from 'lucide-react';

const productLinks = [
  { label: 'E-Scooters', href: '/products/scooter' },
  { label: 'Speakers', href: '/products/speaker' },
  { label: 'Power Stations', href: '/products/power-station' },
  { label: 'Power Banks', href: '/products/power-bank' },
  { label: 'Adapters', href: '/products/power-adapter' },
  { label: 'Cables', href: '/products/cables' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'All Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'rgba(8,9,14,0.85)',
        backdropFilter: 'blur(40px) saturate(150%)',
        WebkitBackdropFilter: 'blur(40px) saturate(150%)',
        borderTop: '1px solid rgba(63,135,254,0.12)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(63,135,254,0.5), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <Image
                src="/brand/logo-main.png"
                alt="Powerlogic"
                width={140}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Smart accessories engineered for how you actually live — on the road, at your desk, off the grid.
            </p>
            <div className="flex items-center gap-2 text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <MapPin size={14} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
              <span>46 Wickham Rd, London SE4 1NZ, UK</span>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <Mail size={14} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
              <a href="mailto:example@powerlogic.com" style={{ color: 'var(--text-muted)' }}>
                example@powerlogic.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 tracking-wider uppercase" style={{ color: 'var(--text-primary)' }}>
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 tracking-wider uppercase" style={{ color: 'var(--text-primary)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="text-xs px-3 py-2 rounded-xl inline-block"
              style={{
                background: 'var(--glass-fill)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-muted)',
              }}
            >
              Est. Since 2021 · London, UK
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(63,135,254,0.08)', color: 'var(--text-muted)' }}
        >
          <span>© 2021–2026 Powerlogic. All Rights Reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" style={{ color: 'var(--text-muted)' }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" style={{ color: 'var(--text-muted)' }}>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
