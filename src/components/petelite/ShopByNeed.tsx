'use client';

import { motion } from 'framer-motion';
import { shopByNeedItems } from '@/lib/data';
import { PawPrint } from 'lucide-react';

export function ShopByNeed() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand">Solution Finder</span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-black">
            What Does Your Pet Need Today?
          </h2>
          <p className="mt-3 text-black/50 text-base sm:text-lg">
            Shop by the problem you are solving — we have got the essentials covered.
          </p>
        </motion.div>

        {/* Need cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {shopByNeedItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={`#${item.category}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src={item.image}
                alt={`${item.name} - ${item.subtitle}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark/50 group-hover:bg-brand-dark/65 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <PawPrint className="w-6 h-6 text-white/40 mb-2 group-hover:text-white/60 transition-colors" strokeWidth={1.5} />
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wider uppercase">
                  {item.name}
                </h3>
                <p className="text-white/70 text-xs mt-1.5 tracking-wide">
                  {item.subtitle}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
