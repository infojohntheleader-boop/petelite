'use client';

import { create } from 'zustand';
import type { Product } from './data';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getItemCount: () => number;
  getFreeShippingProgress: () => { remaining: number; qualified: boolean };
}

const FREE_SHIPPING_THRESHOLD = 50;

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  addItem: (product, quantity = 1) => {
    set((state) => {
      const existing = state.items.find((item) => item.product.id === product.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return { items: [...state.items, { product, quantity }] };
    });
    set({ isOpen: true });
  },
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    }));
  },
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    }));
  },
  clearCart: () => set({ items: [] }),
  getSubtotal: () => {
    return get().items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  },
  getItemCount: () => {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },
  getFreeShippingProgress: () => {
    const subtotal = get().getSubtotal();
    const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    return {
      remaining: Math.round(remaining * 100) / 100,
      qualified: subtotal >= FREE_SHIPPING_THRESHOLD,
    };
  },
}));
