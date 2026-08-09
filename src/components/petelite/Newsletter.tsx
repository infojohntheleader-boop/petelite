'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            Join the Petelite Family
          </h2>
          <p className="mt-3 text-warm-gray text-base sm:text-lg">
            Get exclusive offers, new product drops, and helpful pet tips delivered to your inbox.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-brand font-semibold text-lg"
            >
              Welcome to the family! Check your inbox for your offer.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <p className="text-sm font-semibold tracking-wide uppercase text-charcoal mb-4">
                GET 10% OFF YOUR FIRST ORDER
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3.5 bg-warm-bg border border-warm-border rounded-lg text-sm text-charcoal placeholder:text-warm-gray/60 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="btn-premium whitespace-nowrap"
                >
                  GET MY OFFER
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}