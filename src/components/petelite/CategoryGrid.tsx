'use client';

import { motion } from 'framer-motion';
import { categories } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export function CategoryGrid() {
  return (
    <section id="categories" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand">Browse by Category</span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-black">
            Find What Your Pet Needs
          </h2>
          <p className="mt-3 text-black/50 text-base sm:text-lg">
            From everyday essentials to little luxuries, discover products designed around your pet&rsquo;s routine.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href={cat.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer ${i >= 4 ? 'hidden md:block' : ''}`}
            >
              <img
                src={cat.image}
                alt={`${cat.name} pet products`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
                <h3 className="text-white text-base sm:text-lg font-bold tracking-wide">
                  {cat.name.toUpperCase()}
                </h3>
                <p className="text-white/75 text-[11px] sm:text-xs mt-1 tracking-wide">
                  {cat.subtitle}
                </p>
                <div className="mt-2 flex items-center gap-1 text-brand-light group-hover:text-white transition-colors">
                  <span className="text-[11px] font-semibold tracking-wider uppercase">Shop</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
