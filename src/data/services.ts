// src/data/services.ts
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string[];
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 'stainless-steel-railings',
    title: 'Stainless Steel Railings',
    shortDescription: 'Premium quality stainless steel railings for modern spaces',
    description: [
      'Custom-designed stainless steel railings that combine durability with elegant aesthetics.',
      'Perfect for balconies, staircases, and terraces in both residential and commercial properties.'
    ],
    features: [
      'Made from 304/316 grade stainless steel',
      'Resistant to rust and corrosion',
      'Custom designs available',
      'Professional installation'
    ],
    image: '/images/stainless-steel-railings.webp'
  },
  {
    id: 'glass-balconies',
    title: 'Glass Balconies',
    shortDescription: 'Sleek and modern glass balconies with stainless steel frames',
    description: [
      'Frameless glass balconies that provide unobstructed views while ensuring safety.',
      'Ideal for modern apartments and homes with a view.'
    ],
    features: [
      'Tempered safety glass',
      'Stainless steel or aluminum frames',
      'Customizable designs',
      'Weather-resistant'
    ],
    image: '/images/glass-balconies.webp'
  },
  {
    id: 'aluminium-windows-doors',
    title: 'Aluminium Windows & Doors',
    shortDescription: 'Energy-efficient aluminum windows and doors',
    description: [
      'High-quality aluminum windows and doors that combine style, security, and energy efficiency.',
      'Available in various designs to match your architectural style.'
    ],
    features: [
      'Thermally broken frames',
      'Double glazing options',
      'Custom sizes and colors',
      'Low maintenance'
    ],
    image: '/images/aluminium-doors-and-windows.webp'
  },
  {
    id: 'staircase-solutions',
    title: 'Staircase Solutions',
    shortDescription: 'Modern staircase designs in glass and metal',
    description: [
      'Custom-designed staircases that are as beautiful as they are functional.',
      'From floating staircases to spiral designs, we create the perfect centerpiece for your space.'
    ],
    features: [
      'Glass and stainless steel combinations',
      'Custom designs',
      'Safety-compliant',
      'Space-saving solutions'
    ],
    image: '/images/staircase-solutions.webp'
  },
  {
    id: 'glass-partitions',
    title: 'Glass Partitions',
    shortDescription: 'Elegant glass room dividers and office partitions',
    description: [
      'Create open, light-filled spaces with our frameless glass partitions.',
      'Ideal for offices, retail spaces, and modern homes.'
    ],
    features: [
      'Frameless designs',
      'Soundproofing options',
      'Frosted or clear glass',
      'Easy to install and maintain'
    ],
    image: '/images/aluminium-glass-partition.jpg'
  },
  {
    id: 'custom-metal-works',
    title: 'Custom Metal Works',
    shortDescription: 'Bespoke metal fabrication services',
    description: [
      'Custom metal fabrication for both functional and decorative purposes.',
      'From handrails to artistic installations, we bring your metalwork visions to life.'
    ],
    features: [
      'Custom designs',
      'Various metal options',
      'Precision fabrication',
      'Professional finishing'
    ],
    image: '/images/custom-metal-works.webp'
  }
];