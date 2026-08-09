'use client';

import { useState } from 'react';
import { Star, Plus, PawPrint } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/data';
import { formatPrice, calculateSavings } from '@/lib/data';
import { useCartStore } from '@/lib/store';

interface ProductCardProps {
  product: Product;
  onProductClick?: (slug: string) => void;
  index?: number;
}

export function ProductCard({ product, onProductClick, index = 0 }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const savings = product.originalPrice
    ? calculateSavings(product.price, product.originalPrice)
    : 0;

  const badgeColor = {
    'BEST SELLER': 'bg-brand text-white',
    'SALE': 'bg-red-600 text-white',
    'POPULAR': 'bg-brand-dark text-white',
    'NEW': 'bg-brand text-white',
  }[product.badge || ''] || 'bg-brand text-white';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group product-card-hover rounded-xl bg-white border border-warm-border/60 overflow-hidden"
    >
      {/* Image */}
      <div
        className="relative aspect-square overflow-hidden cursor-pointer bg-secondary"
        onClick={() => onProductClick?.(product.slug)}
      >
        {!imageLoaded && (
          <div className="absolute inset-0 bg-secondary animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover img-zoom transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded ${badgeColor}`}
          >
            {product.badge}
          </span>
        )}

        {/* Savings badge */}
        {savings > 0 && !product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded bg-red-600 text-white">
            SAVE {savings}%
          </span>
        )}

        {/* Quick add button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product);
            }}
            className="w-full bg-brand/95 backdrop-blur-sm text-white text-xs font-semibold tracking-wider uppercase py-3 rounded-lg hover:bg-brand-dark transition-colors flex items-center justify-center gap-2"
            aria-label={`Quick add ${product.name} to cart`}
          >
            <Plus className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3
          className="text-sm font-medium text-black leading-snug line-clamp-2 cursor-pointer hover:text-brand transition-colors"
          onClick={() => onProductClick?.(product.slug)}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3.5 h-3.5 ${
                  star <= Math.round(product.rating)
                    ? 'star-filled fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-black/40">
            {product.reviewCount > 0 ? `(${product.reviewCount})` : ''}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2.5">
          <span className="text-base font-semibold text-black">
            ${formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-black/40 line-through">
                ${formatPrice(product.originalPrice)}
              </span>
              <span className="text-xs font-semibold text-red-600">
                -{savings}%
              </span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
