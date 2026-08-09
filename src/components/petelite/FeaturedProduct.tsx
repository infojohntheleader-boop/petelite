'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { products, formatPrice, calculateSavings } from '@/lib/data';
import { useCartStore } from '@/lib/store';

export function FeaturedProduct({ onProductClick }: { onProductClick: (slug: string) => void }) {
  const product = products[0]; // 1 Gallon Water Fountain
  const addItem = useCartStore((s) => s.addItem);
  const savings = product.originalPrice ? calculateSavings(product.price, product.originalPrice) : 0;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-secondary"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {savings > 0 && (
              <span className="absolute top-4 left-4 px-3 py-1.5 bg-red-600 text-white text-xs font-bold tracking-wider uppercase rounded">
                SAVE {savings}%
              </span>
            )}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-brand">Featured Product</span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-black leading-tight">
              Keep Their Water Fresh
            </h2>
            <p className="mt-2 text-black/60 font-semibold tracking-wide uppercase text-sm">
              Make Hydration Part of Their Everyday Routine
            </p>
            <p className="mt-5 text-black/60 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Benefits */}
            <ul className="mt-6 space-y-3">
              {product.benefits.slice(0, 4).map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-brand" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-black">{b}</span>
                </li>
              ))}
            </ul>

            {/* Price & CTA */}
            <div className="mt-8">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-black">${formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-black/40 line-through">
                    ${formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onProductClick(product.slug)}
                  className="btn-premium flex items-center justify-center gap-2"
                >
                  SHOP THIS PRODUCT
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="mt-4 text-xs text-black/40 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                Free shipping on orders $50+
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
