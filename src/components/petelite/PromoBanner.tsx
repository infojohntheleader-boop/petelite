'use client';

import { motion } from 'framer-motion';

export function PromoBanner() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=1600&h=700&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-charcoal/65" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Something Special for Your Best Friend
          </h2>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-lg mx-auto">
            Find their next favorite essential and enjoy free shipping when you spend $50+.
          </p>
          <a
            href="#best-sellers"
            className="inline-block mt-8 bg-white text-charcoal px-8 py-3.5 text-sm font-semibold tracking-wide uppercase rounded hover:bg-white/90 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            SHOP BEST SELLERS
          </a>
        </motion.div>
      </div>
    </section>
  );
}