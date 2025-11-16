// src/app/services/page.tsx
'use client';

import { services } from '@/data/services';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function ServicesPage() {
  console.log('Services:', services); // Debug log

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          console.log(`Service ${service.id} link: /services/${service.id}`); // Debug log
          return (
            <div key={service.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                <Link
                  href={`/services/${encodeURIComponent(service.id)}`}
                  className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
                >
                  Learn more <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}