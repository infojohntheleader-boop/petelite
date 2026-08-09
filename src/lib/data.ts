export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  badge?: 'BEST SELLER' | 'SALE' | 'POPULAR' | 'NEW';
  shortDescription: string;
  description: string;
  benefits: string[];
  specifications: Record<string, string>;
  included: string[];
  howItWorks?: string[];
  faqs?: { q: string; a: string }[];
  relatedProducts?: string[];
}

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  verified: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    slug: '1-gallon-stainless-steel-pet-water-fountain',
    name: '1 Gallon Stainless Steel Pet Water Fountain',
    price: 47.89,
    originalPrice: 81.70,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583337130417-13219ce0e7a8?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&h=800&fit=crop&q=80',
    ],
    category: 'hydration',
    rating: 4.7,
    reviewCount: 124,
    badge: 'BEST SELLER',
    shortDescription: 'Large-capacity stainless steel water fountain that keeps your pet\'s water fresh and flowing all day.',
    description: 'Keep your pet hydrated with the 1 Gallon Stainless Steel Pet Water Fountain. Designed for both cats and dogs, this fountain features a large-capacity tank that reduces the need for constant refilling. The stainless steel construction is durable, easy to clean, and helps maintain water freshness throughout the day.',
    benefits: [
      'Large 1-gallon capacity reduces daily refills',
      'Stainless steel construction for durability and hygiene',
      'Ultra-quiet pump for peaceful operation',
      'Multi-stage filtration keeps water fresh',
      'Suitable for both cats and dogs',
    ],
    specifications: {
      Capacity: '1 Gallon (3.8L)',
      Material: 'Stainless Steel',
      'Filter Type': 'Multi-stage carbon filter',
      'Pump Noise': 'Ultra-quiet (< 35dB)',
      'Power': 'USB powered, 5V/1A',
      'Suitable For': 'Cats, Small to Medium Dogs',
    },
    included: [
      '1x Water Fountain Base',
      '1x Stainless Steel Bowl',
      '1x Water Pump',
      '1x Carbon Filter',
      '1x USB Power Cable',
      '1x User Manual',
    ],
    howItWorks: [
      'Fill the reservoir with fresh water',
      'Connect the USB power cable',
      'The pump circulates water through the filter',
      'Fresh, flowing water available for your pet 24/7',
    ],
    faqs: [
      { q: 'How often should I change the filter?', a: 'We recommend replacing the filter every 2-4 weeks depending on usage and the number of pets using the fountain.' },
      { q: 'Is it dishwasher safe?', a: 'The stainless steel bowl is dishwasher safe. The pump and base should be hand washed with mild soap.' },
      { q: 'How loud is the pump?', a: 'The fountain uses an ultra-quiet pump rated at under 35dB, making it suitable for any room in your home.' },
      { q: 'Can large dogs use this fountain?', a: 'This fountain is best suited for cats and small to medium dogs. For larger breeds, we recommend checking the water level more frequently.' },
    ],
    relatedProducts: ['4', '5'],
  },
  {
    id: '2',
    slug: '16-ft-retractable-dog-leash',
    name: '16 Ft Retractable Dog Leash',
    price: 45.09,
    originalPrice: 50.35,
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop&q=80',
    ],
    category: 'dogs',
    rating: 4.5,
    reviewCount: 89,
    badge: 'POPULAR',
    shortDescription: '16-foot retractable leash with ergonomic handle, designed for large dogs up to 110 lbs.',
    description: 'Give your dog the freedom to explore with the 16 Ft Retractable Dog Leash. Built for large dogs up to 110 lbs, this leash features a durable nylon tape that extends up to 16 feet, an ergonomic anti-slip handle, and a smooth one-button retraction system. Perfect for daily walks, park visits, and outdoor adventures.',
    benefits: [
      '16-foot retractable range for freedom and control',
      'Supports large dogs up to 110 lbs',
      'Ergonomic anti-slip handle for comfortable grip',
      'One-button brake and lock system',
      'Durable nylon tape construction',
    ],
    specifications: {
      'Tape Length': '16 Ft (5m)',
      'Max Weight': '110 lbs (50 kg)',
      Material: 'Nylon Tape + ABS Handle',
      'Tape Width': '0.6 inches (16mm)',
      Color: 'Black',
    },
    included: [
      '1x Retractable Leash',
      '1x User Guide',
    ],
    faqs: [
      { q: 'Is this suitable for small dogs?', a: 'While this leash is rated for large dogs, it can be used with smaller dogs. The one-button brake provides reliable control at any size.' },
      { q: 'How do I maintain the leash?', a: 'Wipe the tape with a damp cloth if dirty. Avoid submerging in water. Store in a dry place when not in use.' },
    ],
    relatedProducts: ['6'],
  },
  {
    id: '3',
    slug: 'portable-dog-water-bottle',
    name: 'Portable Dog Water Bottle',
    price: 35.50,
    originalPrice: 51.48,
    image: 'https://images.unsplash.com/photo-1601758124096-1fd661873b48?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1601758124096-1fd661873b48?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop&q=80',
    ],
    category: 'hydration',
    rating: 4.6,
    reviewCount: 67,
    badge: 'SALE',
    shortDescription: 'Leak-proof portable water bottle with built-in bowl for on-the-go hydration.',
    description: 'Keep your dog hydrated on every adventure with the Portable Dog Water Bottle. This all-in-one bottle features an integrated drinking bowl, leak-proof design, and one-hand operation. Simply press the button to release water into the attached bowl, and press again to retract any unused water back into the bottle.',
    benefits: [
      'All-in-one bottle and bowl design',
      'Leak-proof one-hand operation',
      'BPA-free, food-grade materials',
      'Easy to clean and dishwasher safe',
      'Lightweight and portable for walks and travel',
    ],
    specifications: {
      Capacity: '19 oz (550ml)',
      Material: 'BPA-Free Tritan + Silicone',
      'Bowl Type': 'Fold-out integrated',
      Weight: '8.5 oz (240g)',
      Colors: 'Blue, Grey, Green',
    },
    included: [
      '1x Portable Water Bottle',
      '1x Carabiner Clip',
      '1x Cleaning Brush',
    ],
    faqs: [
      { q: 'Is it really leak-proof?', a: 'Yes, the bottle uses a silicone seal and lock mechanism to prevent leaks. The one-way valve ensures water only flows when you press the button.' },
      { q: 'How do I clean it?', a: 'The bottle can be disassembled for thorough cleaning. The included brush helps clean the drinking trough. All parts except the cap are dishwasher safe.' },
    ],
    relatedProducts: ['1', '2'],
  },
  {
    id: '4',
    slug: 'calming-dog-bed',
    name: 'Calming Donut Dog Bed',
    price: 39.99,
    originalPrice: 57.39,
    image: 'https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&h=800&fit=crop&q=80',
    ],
    category: 'comfort',
    rating: 4.8,
    reviewCount: 203,
    badge: 'BEST SELLER',
    shortDescription: 'Deep crevice donut design that provides a sense of security and calming comfort for anxious pets.',
    description: 'Give your pet the gift of better sleep with the Calming Donut Dog Bed. The deep crevice design creates a sense of security and warmth, while the ultra-soft faux fur exterior provides a cozy, self-soothing surface. The non-slip bottom keeps the bed in place on any floor surface.',
    benefits: [
      'Deep donut crevice for a sense of security',
      'Ultra-soft faux fur for self-soothing comfort',
      'Non-slip bottom for stability',
      'Machine washable for easy care',
      'Available in multiple sizes',
    ],
    specifications: {
      'Available Sizes': 'S (20"), M (26"), L (32"), XL (40")',
      'Fill Material': 'Premium PP Cotton',
      'Cover Material': 'Ultra-Soft Faux Fur',
      'Bottom': 'Non-slip dot pattern',
      'Care': 'Machine Washable',
    },
    included: [
      '1x Calming Dog Bed',
    ],
    faqs: [
      { q: 'What size should I get for my dog?', a: 'Measure your pet while sleeping and add 4-6 inches. Small (up to 20 lbs), Medium (20-45 lbs), Large (45-70 lbs), XL (70+ lbs).' },
      { q: 'Is the cover removable?', a: 'The entire bed is machine washable. We recommend using a gentle cycle with cold water and air drying for best results.' },
    ],
    relatedProducts: ['5'],
  },
  {
    id: '5',
    slug: 'self-cleaning-cat-litter-box',
    name: 'Self-Cleaning Cat Litter Box',
    price: 85.53,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=800&fit=crop&q=80',
    ],
    category: 'cats',
    rating: 4.4,
    reviewCount: 56,
    badge: 'NEW',
    shortDescription: 'Automatic self-cleaning litter box with odor control for a fresher, cleaner home.',
    description: 'Simplify your cat care routine with the Self-Cleaning Cat Litter Box. This automatic litter box features smart sensor technology that detects when your cat has finished and automatically sifts and separates waste into a covered compartment. The built-in odor control system keeps your home smelling fresh.',
    benefits: [
      'Automatic cleaning cycle after each use',
      'Smart sensor detects cat entry and exit',
      'Built-in odor control system',
      'Quiet motor operation',
      'Easy waste compartment removal',
    ],
    specifications: {
      Dimensions: '22" x 18" x 20"',
      'Suitable For': 'Cats up to 15 lbs',
      'Litter Type': 'Clumping litter recommended',
      'Power': 'AC Adapter included',
      'Noise Level': '< 40dB',
    },
    included: [
      '1x Self-Cleaning Litter Box',
      '1x AC Power Adapter',
      '1x Waste Liner Pack (10 count)',
      '1x User Manual',
    ],
    faqs: [
      { q: 'How often do I need to empty the waste compartment?', a: 'For a single cat, the waste compartment typically needs to be emptied every 3-5 days. For multiple cats, it may need emptying every 1-2 days.' },
      { q: 'Will my cat be scared of it?', a: 'Most cats adapt within a few days. We recommend leaving it off initially so your cat can explore it, then turning it on after they are comfortable.' },
    ],
    relatedProducts: ['4', '1'],
  },
  {
    id: '6',
    slug: 'interactive-treat-dispenser-ball',
    name: 'Interactive Treat Dispenser Ball',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=800&h=800&fit=crop&q=80',
    ],
    category: 'play',
    rating: 4.3,
    reviewCount: 91,
    badge: 'POPULAR',
    shortDescription: 'Mental stimulation toy that dispenses treats as your dog plays, reducing boredom and anxiety.',
    description: 'Keep your dog engaged and mentally stimulated with the Interactive Treat Dispenser Ball. Simply fill with your dog\'s favorite treats, adjust the difficulty level, and watch them work to get their rewards. This toy helps reduce boredom, anxiety, and destructive behavior by providing healthy mental exercise.',
    benefits: [
      'Adjustable difficulty levels',
      'Reduces boredom and destructive behavior',
      'Made from durable, non-toxic materials',
      'Easy to fill and clean',
      'Works with most treat sizes',
    ],
    specifications: {
      Size: '3.5 inch diameter',
      Material: 'Food-Grade ABS + TPR',
      'Difficulty Levels': '3 adjustable',
      Color: 'Green',
      'Suitable For': 'All dog breeds',
    },
    included: [
      '1x Treat Dispenser Ball',
      '1x User Guide',
    ],
    faqs: [
      { q: 'What treats can I use?', a: 'Most dry treats and kibble work well. We recommend treats that are small enough to fit through the dispensing holes.' },
    ],
    relatedProducts: ['2', '3'],
  },
];

export const categories: Category[] = [
  {
    id: 'dogs',
    name: 'Dogs',
    subtitle: 'Walking • Comfort • Play',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop&q=80',
    href: '/collections/dogs',
  },
  {
    id: 'cats',
    name: 'Cats',
    subtitle: 'Comfort • Play • Enrichment',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&q=80',
    href: '/collections/cats',
  },
  {
    id: 'hydration',
    name: 'Hydration',
    subtitle: 'Water Fountains • Bowls • Bottles',
    image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&h=400&fit=crop&q=80',
    href: '/collections/hydration',
  },
  {
    id: 'comfort',
    name: 'Comfort',
    subtitle: 'Beds • Cushions • Relaxation',
    image: 'https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?w=600&h=400&fit=crop&q=80',
    href: '/collections/comfort',
  },
  {
    id: 'play',
    name: 'Play',
    subtitle: 'Toys • Interactive • Enrichment',
    image: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=600&h=400&fit=crop&q=80',
    href: '/collections/play',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Our golden retriever absolutely loves the water fountain. He drinks so much more water now, and the fountain is incredibly quiet. Best purchase we\'ve made for him this year.',
    name: 'Sarah M.',
    verified: true,
  },
  {
    id: '2',
    quote: 'The retractable leash is a game changer for our daily walks. Solid build quality, smooth retraction, and the handle is so comfortable. Highly recommend for any large dog owner.',
    name: 'James K.',
    verified: true,
  },
  {
    id: '3',
    quote: 'I was skeptical about another pet water bottle, but this one actually works. No leaks, the built-in bowl is genius, and my dog took to it immediately. Great quality.',
    name: 'Emily R.',
    verified: true,
  },
];

export const shopByNeedItems = [
  {
    id: 'walk',
    name: 'Walk',
    subtitle: 'Leashes • Outdoor Essentials',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&h=500&fit=crop&q=80',
    category: 'dogs',
  },
  {
    id: 'sleep',
    name: 'Sleep',
    subtitle: 'Beds • Comfort',
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&h=500&fit=crop&q=80',
    category: 'comfort',
  },
  {
    id: 'drink',
    name: 'Drink',
    subtitle: 'Fountains • Hydration',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=500&fit=crop&q=80',
    category: 'hydration',
  },
  {
    id: 'play',
    name: 'Play',
    subtitle: 'Toys • Enrichment',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&h=500&fit=crop&q=80',
    category: 'play',
  },
  {
    id: 'relax',
    name: 'Relax',
    subtitle: 'Comfort • Calming',
    image: 'https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?w=500&h=500&fit=crop&q=80',
    category: 'comfort',
  },
];

export const ugImages = [
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop&q=80',
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.badge === 'BEST SELLER' || p.rating >= 4.5);
}

export function getRelatedProducts(productId: string): Product[] {
  const product = products.find((p) => p.id === productId);
  if (!product?.relatedProducts) return [];
  return product.relatedProducts
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as Product[];
}

export function formatPrice(price: number): string {
  return price.toFixed(2);
}

export function calculateSavings(price: number, originalPrice: number): number {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
