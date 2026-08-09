'use client';

export function AnnouncementBar() {
  return (
    <div className="bg-charcoal text-white/90 text-center py-2.5 px-4 text-xs sm:text-sm tracking-wide">
      <span className="hidden sm:inline">
        FREE SHIPPING ON ORDERS $50+&nbsp;&nbsp;|&nbsp;&nbsp;Secure Checkout&nbsp;&nbsp;|&nbsp;&nbsp;Pet-Focused Products
      </span>
      <span className="sm:hidden">
        FREE SHIPPING $50+&nbsp;&nbsp;|&nbsp;&nbsp;Secure Checkout
      </span>
    </div>
  );
}
