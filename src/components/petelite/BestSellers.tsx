'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getBestSellers } from '@/lib/data';
import { ProductCard } from './ProductCard';

export function BestSellers({ onProductClick }: { onProductClick: (slug: string) => void }) {
  const products = getBestSellers();

  return (
    <section id="best-sellers" className="py-16 sm:py-20 lg:py-24 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-brand">Most Loved</span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-black">
              Pet Parents&rsquo; Favorites
            </h2>
            <p className="mt-2 text-black/50 text-base sm:text-lg">
              Discover some of the products our customers love most.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-brand hover:text-brand-dark transition-colors group"
          >
            VIEW ALL PRODUCTS
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Products */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
