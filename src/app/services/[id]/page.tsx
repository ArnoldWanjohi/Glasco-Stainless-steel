// src/app/services/[id]/page.tsx
'use client';

import { notFound } from 'next/navigation';
import { services } from '@/data/services';

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  console.log('Requested service ID:', params.id); // Debug log
  const decodedId = decodeURIComponent(params.id);
  const service = services.find(s => s.id === decodedId);
  
  if (!service) {
    console.log('Service not found for ID:', decodedId); // Debug log
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{service.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose max-w-none">
            {service.description.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}