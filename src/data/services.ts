// src/data/services.ts
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string[];
  features: string[];
  image: string;
  // Add other properties as needed
}

export const services: Service[] = [
  {
    id: 'stainless-steel-railings',
    title: 'Stainless Steel Railings',
    shortDescription: 'High-quality stainless steel railings',
    description: ['Detailed description here...'],
    features: ['Feature 1', 'Feature 2'],
    image: '/images/railings.jpg'
  },
  // Add more services as needed
];