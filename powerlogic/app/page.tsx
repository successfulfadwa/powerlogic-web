import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import BrandStory from '@/components/home/BrandStory';
import CategoryBento from '@/components/home/CategoryBento';
import ProductSpotlight from '@/components/home/ProductSpotlight';
import Testimonials from '@/components/home/Testimonials';
import ClosingCTA from '@/components/home/ClosingCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BrandStory />
      <CategoryBento />
      <ProductSpotlight />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}
