'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { ugImages } from '@/lib/data';

export function UGCGallery() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand">Community</span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-black">
            Life With Petelite
          </h2>
          <p className="mt-2 text-black/50 text-base sm:text-lg">
            Real pets. Real moments. Real Petelite.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
          {ugImages.map((img, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <img
                src={img}
                alt="Pet lifestyle photo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/20 transition-colors duration-300" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 sm:mt-10"
        >
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-brand hover:text-brand-dark transition-colors"
          >
            <Instagram className="w-5 h-5" />
            FOLLOW @PETELITE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
