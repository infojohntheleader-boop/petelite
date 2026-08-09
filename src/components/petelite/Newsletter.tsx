'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PawPrint } from 'lucide-react';

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
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 mb-5">
            <PawPrint className="w-6 h-6 text-brand" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black">
            Join the Petelite Family
          </h2>
          <p className="mt-3 text-black/50 text-base sm:text-lg">
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
              <p className="text-sm font-semibold tracking-wide uppercase text-brand mb-4">
                GET 10% OFF YOUR FIRST ORDER
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3.5 bg-white border border-warm-border rounded-lg text-sm text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
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
