'use client';

import { X, Minus, Plus, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/data';
import { products } from '@/lib/data';

export function CartDrawer({ onProductClick }: { onProductClick?: (slug: string) => void }) {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getSubtotal, getFreeShippingProgress } =
    useCartStore();
  const shipping = getFreeShippingProgress();
  const subtotal = getSubtotal();

  const recommended = products.filter((p) => !items.find((i) => i.product.id === p.id)).slice(0, 2);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-black/40"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[80] w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-warm-border">
              <h2 className="text-base font-semibold text-charcoal">Your Cart ({items.length})</h2>
              <button
                onClick={closeCart}
                className="p-1.5 -mr-1.5 text-warm-gray hover:text-charcoal transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free shipping progress */}
            <div className="px-5 py-3 bg-warm-bg border-b border-warm-border">
              {shipping.qualified ? (
                <p className="text-sm font-medium text-emerald-700">
                  🎉 You&apos;ve unlocked FREE SHIPPING!
                </p>
              ) : (
                <div>
                  <p className="text-xs text-warm-gray mb-2">
                    You&apos;re <span className="font-semibold text-charcoal">${formatPrice(shipping.remaining)}</span> away from FREE SHIPPING
                  </p>
                  <div className="w-full h-1.5 bg-warm-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (subtotal / 50) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-warm-gray text-base">Your cart is empty</p>
                  <button
                    onClick={closeCart}
                    className="mt-4 text-sm font-semibold text-black hover:underline transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-sm font-medium text-charcoal leading-snug line-clamp-2 cursor-pointer hover:underline transition-colors"
                          onClick={() => { closeCart(); onProductClick?.(item.product.slug); }}
                        >
                          {item.product.name}
                        </h3>
                        <p className="text-sm font-semibold text-charcoal mt-1">
                          ${formatPrice(item.product.price)}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-warm-border rounded">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1.5 text-warm-gray hover:text-charcoal transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2.5 text-sm font-medium text-charcoal min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1.5 text-warm-gray hover:text-charcoal transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-xs text-warm-gray hover:text-red-500 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Recommended */}
                  {recommended.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-warm-border">
                      <p className="text-xs font-semibold tracking-wide uppercase text-warm-gray mb-3">
                        Complete Their Routine
                      </p>
                      <div className="space-y-3">
                        {recommended.map((p) => (
                          <div
                            key={p.id}
                            className="flex items-center gap-3 cursor-pointer group"
                            onClick={() => { closeCart(); onProductClick?.(p.slug); }}
                          >
                            <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
                              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-charcoal line-clamp-1 group-hover:underline transition-colors">
                                {p.name}
                              </p>
                              <p className="text-sm font-semibold text-charcoal">${formatPrice(p.price)}</p>
                            </div>
                            <span className="text-xs font-semibold text-black">+ Add</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-warm-border px-5 py-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-warm-gray">Subtotal</span>
                  <span className="text-lg font-bold text-charcoal">${formatPrice(subtotal)}</span>
                </div>
                <button className="btn-premium w-full">CHECKOUT</button>
                <div className="flex flex-wrap justify-center gap-3 text-[11px] text-warm-gray">
                  <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5" /> Free Shipping $50+</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Secure Checkout</span>
                  <span className="flex items-center gap-1"><RotateCcw className="w-3.5 h-3.5" /> Easy Returns</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}