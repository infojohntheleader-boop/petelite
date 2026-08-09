'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-warm-bg">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&h=900&fit=crop&q=80"
          alt="Happy golden retriever in a bright home environment"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-bg/95 via-warm-bg/70 to-warm-bg/30 lg:from-warm-bg/90 lg:via-warm-bg/60 lg:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-charcoal leading-[1.08] tracking-tight"
          >
            Better Essentials for{' '}
            <span className="text-brand">Happier Pets</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="mt-5 sm:mt-6 text-base sm:text-lg text-warm-gray leading-relaxed max-w-lg"
          >
            Thoughtfully selected pet products designed to make everyday life more comfortable, convenient, and fun for you and your furry companion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a href="#best-sellers" className="btn-premium text-center">
              SHOP BEST SELLERS
            </a>
            <a href="#categories" className="btn-outline-premium text-center">
              EXPLORE PRODUCTS
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-warm-gray"
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Secure Checkout
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Free Shipping $50+
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Pet-Focused Products
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
