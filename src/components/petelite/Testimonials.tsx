'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-light/30 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand">
            Customer Love
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-black">
            Loved by Pet Parents
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 sm:p-8 relative border border-warm-border/50"
            >
              <Quote className="w-8 h-8 text-brand/15 mb-4" />
              <div className="flex items-center gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 star-filled fill-current" />
                ))}
              </div>
              <p className="text-black/80 leading-relaxed text-sm sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-warm-border">
                <p className="font-semibold text-sm text-black">{t.name}</p>
                <p className="text-xs text-black/40 mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  Verified Customer
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
