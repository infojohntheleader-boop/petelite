'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Minus, Plus, Truck, ShieldCheck, RotateCcw, ChevronRight, Check } from 'lucide-react';
import { getProductBySlug, formatPrice, calculateSavings, getRelatedProducts, products } from '@/lib/data';
import { useCartStore } from '@/lib/store';
import { ProductCard } from './ProductCard';

type Tab = 'benefits' | 'details' | 'included' | 'howItWorks';

export function ProductPage({
  slug,
  onClose,
  onNavigate,
}: {
  slug: string;
  onClose: () => void;
  onNavigate: (slug: string) => void;
}) {
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>('benefits');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const addItem = useCartStore((s) => s.addItem);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!product) return null;

  const savings = product.originalPrice ? calculateSavings(product.price, product.originalPrice) : 0;
  const related = getRelatedProducts(product.id);

  const tabs: { key: Tab; label: string }[] = [
    { key: 'benefits', label: 'Why You\'ll Love It' },
    { key: 'details', label: 'Product Details' },
    { key: 'included', label: "What's Included" },
    ...(product.howItWorks ? [{ key: 'howItWorks' as Tab, label: 'How It Works' }] : []),
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[90] bg-black/50"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="absolute inset-x-0 top-0 bottom-0 sm:inset-4 sm:top-4 lg:inset-8 lg:top-6 bg-white sm:rounded-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-shadow text-charcoal"
            aria-label="Close product page"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto">
            {/* Breadcrumbs */}
            <div className="hidden sm:flex items-center gap-1.5 px-6 lg:px-10 pt-5 text-xs text-warm-gray">
              <a href="#" className="hover:text-charcoal transition-colors" onClick={onClose}>Home</a>
              <ChevronRight className="w-3 h-3" />
              <span className="capitalize">{product.category}</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-charcoal truncate max-w-[200px]">{product.name}</span>
            </div>

            {/* Product top section */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-14 px-5 sm:px-6 lg:px-10 py-6 sm:py-8">
              {/* Image gallery */}
              <div>
                <div className="aspect-square rounded-xl overflow-hidden bg-secondary">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {product.images.length > 1 && (
                  <div className="flex gap-2 mt-3">
                    {product.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImage(i)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === i ? 'border-charcoal' : 'border-transparent'
                        }`}
                      >
                        <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product info */}
              <div>
                {/* Badge */}
                {product.badge && (
                  <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded bg-charcoal text-white mb-3">
                    {product.badge}
                  </span>
                )}

                <h1 className="text-2xl sm:text-3xl font-bold text-charcoal leading-tight">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${s <= Math.round(product.rating) ? 'star-filled fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-warm-gray">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                {/* Short description */}
                <p className="mt-4 text-warm-gray leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mt-6">
                  <span className="text-3xl font-bold text-charcoal">${formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-lg text-warm-gray line-through">
                        ${formatPrice(product.originalPrice)}
                      </span>
                      <span className="text-sm font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                        Save {savings}%
                      </span>
                    </>
                  )}
                </div>

                {/* Quantity + Add to Cart */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-warm-border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-sm font-medium text-charcoal min-w-[2.5rem] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => addItem(product, quantity)}
                    className="btn-premium w-full text-center"
                  >
                    ADD TO CART
                  </button>

                  <button
                    onClick={() => addItem(product, quantity)}
                    className="w-full py-3.5 text-sm font-semibold tracking-wide uppercase bg-brand text-white rounded-lg hover:bg-brand-dark transition-all duration-300 hover:-translate-y-px"
                  >
                    BUY IT NOW
                  </button>
                </div>

                {/* Trust signals */}
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-warm-gray">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand" strokeWidth={2} /> Secure Checkout
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-brand" strokeWidth={2} /> Free Shipping on Orders $50+
                  </span>
                  <span className="flex items-center gap-1.5">
                    <RotateCcw className="w-4 h-4 text-brand" strokeWidth={2} /> Easy Returns
                  </span>
                </div>
              </div>
            </div>

            {/* Tabs section */}
            <div className="border-t border-warm-border px-5 sm:px-6 lg:px-10 py-8 sm:py-10">
              <div className="flex gap-6 sm:gap-8 border-b border-warm-border overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`pb-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                      activeTab === tab.key
                        ? 'text-charcoal border-charcoal'
                        : 'text-warm-gray border-transparent hover:text-charcoal'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
                {product.faqs && product.faqs.length > 0 && (
                  <button
                    onClick={() => setActiveTab('benefits')}
                    className="pb-3 text-sm font-medium whitespace-nowrap text-warm-gray border-b-2 border-transparent hover:text-charcoal transition-colors -mb-px"
                    style={{ display: 'none' }}
                  >
                    FAQ
                  </button>
                )}
              </div>

              <div className="mt-6">
                {activeTab === 'benefits' && (
                  <ul className="space-y-3">
                    {product.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-sm sm:text-base text-charcoal leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 'details' && (
                  <div className="space-y-0">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-3 border-b border-warm-border last:border-0"
                      >
                        <span className="text-sm font-medium text-warm-gray">{key}</span>
                        <span className="text-sm text-charcoal">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'included' && (
                  <ul className="space-y-2">
                    {product.included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-sm text-charcoal">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 'howItWorks' && product.howItWorks && (
                  <ol className="space-y-4">
                    {product.howItWorks.map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-charcoal">
                          {i + 1}
                        </span>
                        <span className="text-sm text-charcoal leading-relaxed pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>

            {/* FAQ */}
            {product.faqs && product.faqs.length > 0 && (
              <div className="border-t border-warm-border px-5 sm:px-6 lg:px-10 py-8 sm:py-10">
                <h2 className="text-xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
                <div className="space-y-0">
                  {product.faqs.map((faq, i) => (
                    <div key={i} className="border-b border-warm-border">
                      <button
                        onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                        className="flex items-center justify-between w-full py-4 text-left"
                      >
                        <span className="text-sm font-medium text-charcoal pr-4">{faq.q}</span>
                        <ChevronRight
                          className={`w-4 h-4 text-warm-gray flex-shrink-0 transition-transform ${faqOpen === i ? 'rotate-90' : ''}`}
                        />
                      </button>
                      {faqOpen === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="pb-4"
                        >
                          <p className="text-sm text-warm-gray leading-relaxed">{faq.a}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Customer Reviews placeholder */}
            <div className="border-t border-warm-border px-5 sm:px-6 lg:px-10 py-8 sm:py-10">
              <h2 className="text-xl font-bold text-charcoal mb-2">Customer Reviews</h2>
              <div className="flex items-center gap-2 mt-2 mb-6">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`w-5 h-5 ${s <= Math.round(product.rating) ? 'star-filled fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-warm-gray">
                  Based on {product.reviewCount} reviews
                </span>
              </div>
              <p className="text-sm text-warm-gray bg-warm-bg rounded-lg p-6 text-center">
                Customer reviews are loaded from our review system. This is a preview placeholder.
              </p>
            </div>

            {/* Related Products */}
            {related.length > 0 && (
              <div className="border-t border-warm-border px-5 sm:px-6 lg:px-10 py-8 sm:py-10">
                <h2 className="text-xl font-bold text-charcoal mb-6">You May Also Like</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                  {related.map((p, i) => (
                    <ProductCard key={p.id} product={p} onProductClick={onNavigate} index={i} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
