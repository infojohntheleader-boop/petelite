'use client';

import { motion } from 'framer-motion';
import { Heart, Home, Search, Smile } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'THOUGHTFULLY SELECTED',
    description: 'Practical products chosen with everyday pet life in mind.',
  },
  {
    icon: Home,
    title: 'MADE FOR REAL LIFE',
    description: 'Essentials designed to fit naturally into your daily routine.',
  },
  {
    icon: Search,
    title: 'VALUE WITHOUT THE GUESSWORK',
    description: 'Find useful products without endless searching.',
  },
  {
    icon: Smile,
    title: 'PET HAPPINESS COMES FIRST',
    description: 'Because happier pets make happier homes.',
  },
];

export function WhyPetelite() {
  return (
    <section id="why-petelite" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            More Than Just Pet Products
          </h2>
          <p className="mt-3 text-warm-gray text-base sm:text-lg leading-relaxed">
            We believe the best pet products make life better for both pets and the people who love them.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-5">
                <b.icon className="w-6 h-6 text-brand" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold tracking-wide uppercase text-charcoal">
                {b.title}
              </h3>
              <p className="mt-2.5 text-sm text-warm-gray leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
