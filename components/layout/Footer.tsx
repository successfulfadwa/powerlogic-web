'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Share2, Globe, ExternalLink } from 'lucide-react';

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
        background: 'var(--bg-panel)',
        borderTop: '1px solid var(--glass-border)',
      }}
    >
      {/* Glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(63,135,254,0.5), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <Image src="/brand/logo-main.png" alt="Powerlogic" width={140} height={42} className="h-9 w-auto object-contain" />
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

          {/* Products */}
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

          {/* Company */}
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

          {/* Social + Since */}
          <div>
            <h4 className="text-sm font-semibold mb-5 tracking-wider uppercase" style={{ color: 'var(--text-primary)' }}>
              Follow Us
            </h4>
            <div className="flex gap-3 mb-8">
              {[
                { Icon: Share2, href: '#', label: 'Instagram' },
                { Icon: Globe, href: '#', label: 'TikTok' },
                { Icon: ExternalLink, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{ background: 'var(--glass-fill)', border: '1px solid var(--glass-border)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(63,135,254,0.5)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(63,135,254,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <Icon size={16} style={{ color: 'var(--text-secondary)' }} />
                </a>
              ))}
            </div>
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

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}
        >
          <span>© 2021–2026 Powerlogic. All Rights Reserved.</span>
          <div className="flex gap-6">
            <Link href="#" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
            <Link href="#" style={{ color: 'var(--text-muted)' }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
