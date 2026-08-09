'use client';

const shopLinks = [
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'Dogs', href: '#' },
  { label: 'Cats', href: '#' },
  { label: 'Comfort', href: '#' },
  { label: 'Toys', href: '#' },
  { label: 'Hydration', href: '#' },
  { label: 'All Products', href: '#' },
];

const helpLinks = [
  { label: 'Contact Us', href: '#' },
  { label: 'Shipping', href: '#' },
  { label: 'Returns', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'Order Tracking', href: '#' },
];

const aboutLinks = [
  { label: 'Our Story', href: '#why-petelite' },
  { label: 'Why Petelite', href: '#why-petelite' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'Facebook', href: 'https://facebook.com/' },
  { label: 'TikTok', href: 'https://tiktok.com/' },
];

const bottomLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Shipping Policy', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-[#F0EDE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand / Logo Section — spans 2 cols */}
          <div className="col-span-2">
            <a href="#" className="inline-block">
              <span className="font-serif text-2xl tracking-wide text-black">
                Petelite
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-black max-w-xs">
              Premium pet essentials crafted with care.
              Designed for comfort, built for joy — because
              your pet deserves the very best.
            </p>
            {/* Social icons row under brand text */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium tracking-wide uppercase text-black hover:text-brand transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-black mb-4">
              SHOP
            </h3>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-black hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-black mb-4">
              HELP
            </h3>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-black hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-black mb-4">
              ABOUT
            </h3>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-black hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div className="hidden md:block">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-black mb-4">
              FOLLOW
            </h3>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-black">
            © {new Date().getFullYear()} Petelite
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-black hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
