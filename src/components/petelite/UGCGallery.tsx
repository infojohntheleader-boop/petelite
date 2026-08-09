'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { ugImages } from '@/lib/data';

export function UGCGallery() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            Life With Petelite
          </h2>
          <p className="mt-2 text-warm-gray text-base sm:text-lg">
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
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
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
          <div className="inline-flex items-center gap-2">
            <Instagram className="w-5 h-5 text-charcoal" />
            <span className="text-sm font-semibold tracking-wider uppercase text-charcoal">
              @PETELITE
            </span>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-semibold tracking-wide uppercase text-charcoal hover:text-brand transition-colors"
          >
            FOLLOW US →
          </a>
        </motion.div>
      </div>
    </section>
  );
}