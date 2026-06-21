import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import PageLoadIntro from '@/components/home/PageLoadIntro';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Powerlogic — Power, Reimagined.',
  description:
    'Smart accessories engineered for how you actually live — on the road, at your desk, off the grid. E-scooters, speakers, power stations, adapters, and more.',
  keywords: ['powerlogic', 'e-scooter', 'bluetooth speaker', 'power bank', 'GaN adapter', 'car accessories'],
  openGraph: {
    title: 'Powerlogic — Power, Reimagined.',
    description: 'Smart accessories engineered for how you actually live.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ background: 'var(--bg-void)' }}>
        <PageLoadIntro />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
