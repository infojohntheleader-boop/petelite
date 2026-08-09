'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&h=900&fit=crop&q=60"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
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
              className="bg-warm-bg rounded-xl p-6 sm:p-8 relative"
            >
              <Quote className="w-8 h-8 text-brand/20 mb-4" />
              
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 star-filled fill-current" />
                ))}
              </div>

              <p className="text-charcoal leading-relaxed text-sm sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 pt-4 border-t border-warm-border">
                <p className="font-semibold text-sm text-charcoal">{t.name}</p>
                <p className="text-xs text-warm-gray mt-0.5">Verified Customer</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
