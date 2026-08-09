'use client';

import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Sparkles, ShoppingBag } from 'lucide-react';

const benefits = [
  {
    icon: Truck,
    title: 'FREE SHIPPING',
    subtitle: 'On orders $50+',
  },
  {
    icon: ShieldCheck,
    title: 'SECURE CHECKOUT',
    subtitle: 'Shop with confidence',
  },
  {
    icon: Sparkles,
    title: 'THOUGHTFULLY SELECTED',
    subtitle: 'Products for everyday pet life',
  },
  {
    icon: ShoppingBag,
    title: 'EASY SHOPPING',
    subtitle: 'Simple, convenient ordering',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TrustBar() {
  return (
    <section className="border-y border-warm-border bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={item}
              className="flex flex-col items-center text-center gap-2"
            >
              <b.icon className="w-6 h-6 text-brand" strokeWidth={1.5} />
              <h3 className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-charcoal">
                {b.title}
              </h3>
              <p className="text-xs sm:text-sm text-warm-gray">{b.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
