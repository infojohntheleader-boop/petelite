'use client';

import { Truck } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="bg-brand text-white text-center py-3 px-4 text-xs sm:text-sm tracking-wide font-medium flex items-center justify-center gap-2">
      <Truck className="w-4 h-4" strokeWidth={2} />
      <span className="hidden sm:inline">
        FREE SHIPPING ON ORDERS $50+ · EASY 30-DAY RETURNS
      </span>
      <span className="sm:hidden">
        FREE SHIPPING $50+
      </span>
    </div>
  );
}
