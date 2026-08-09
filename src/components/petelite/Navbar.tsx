'use client';

import { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/lib/store';

const navLinks = [
  { label: 'Shop', href: '#' },
  { label: 'Dogs', href: '#' },
  { label: 'Cats', href: '#' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'About', href: '#why-petelite' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const itemCount = useCartStore((s) => s.getItemCount());
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
            : 'bg-white'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 -ml-2 text-charcoal hover:text-brand transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <span className="text-xl lg:text-2xl font-bold tracking-[0.15em] uppercase text-charcoal">
                PETELITE
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-medium tracking-wide uppercase text-warm-gray hover:text-charcoal transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                className="p-2 text-charcoal hover:text-brand transition-colors"
                aria-label="Search"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="w-[20px] h-[20px]" />
              </button>
              <button
                className="hidden sm:flex p-2 text-charcoal hover:text-brand transition-colors"
                aria-label="Account"
              >
                <User className="w-[20px] h-[20px]" />
              </button>
              <button
                className="p-2 text-charcoal hover:text-brand transition-colors relative"
                aria-label={`Cart with ${itemCount} items`}
                onClick={openCart}
              >
                <ShoppingBag className="w-[20px] h-[20px]" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-charcoal text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-4 animate-fade-in">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-gray" />
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 bg-warm-bg border border-warm-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                  autoFocus
                />
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-full max-w-xs bg-white shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between p-4 border-b border-warm-border">
              <span className="text-lg font-bold tracking-[0.15em] uppercase">PETELITE</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 -mr-2 text-charcoal hover:text-brand"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3 text-base font-medium tracking-wide uppercase text-charcoal hover:text-brand hover:bg-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-warm-border">
              <a
                href="#"
                className="flex items-center gap-3 py-2 text-sm text-warm-gray hover:text-charcoal transition-colors"
              >
                <User className="w-5 h-5" />
                Account
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
