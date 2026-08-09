'use client';

import { useState, useCallback } from 'react';
import { AnnouncementBar } from '@/components/petelite/AnnouncementBar';
import { Navbar } from '@/components/petelite/Navbar';
import { Hero } from '@/components/petelite/Hero';
import { TrustBar } from '@/components/petelite/TrustBar';
import { CategoryGrid } from '@/components/petelite/CategoryGrid';
import { BestSellers } from '@/components/petelite/BestSellers';
import { FeaturedProduct } from '@/components/petelite/FeaturedProduct';
import { WhyPetelite } from '@/components/petelite/WhyPetelite';
import { ShopByNeed } from '@/components/petelite/ShopByNeed';
import { Testimonials } from '@/components/petelite/Testimonials';
import { UGCGallery } from '@/components/petelite/UGCGallery';
import { PromoBanner } from '@/components/petelite/PromoBanner';
import { Newsletter } from '@/components/petelite/Newsletter';
import { Footer } from '@/components/petelite/Footer';
import { CartDrawer } from '@/components/petelite/CartDrawer';
import { ProductPage } from '@/components/petelite/ProductPage';

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  const handleProductClick = useCallback((slug: string) => {
    setActiveProduct(slug);
    window.history.pushState({ productSlug: slug }, '', `#${slug}`);
  }, []);

  const handleCloseProduct = useCallback(() => {
    setActiveProduct(null);
    window.history.back();
  }, []);

  const handleNavigate = useCallback((slug: string) => {
    setActiveProduct(slug);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-warm-bg">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <CategoryGrid />
        <BestSellers onProductClick={handleProductClick} />
        <FeaturedProduct onProductClick={handleProductClick} />
        <WhyPetelite />
        <ShopByNeed />\n        <Testimonials />
        <UGCGallery />
        <PromoBanner />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer onProductClick={handleProductClick} />
      {activeProduct && (
        <ProductPage
          slug={activeProduct}
          onClose={handleCloseProduct}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}
