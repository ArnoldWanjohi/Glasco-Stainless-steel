'use client';

import { notFound } from 'next/navigation';
import { services, Service } from '@/data/services';

interface ServiceDetailPageProps {
  params: { id: string };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const decodedId = decodeURIComponent(params.id);
  const service = services.find((s: Service) => s.id === decodedId);
  
  if (!service) {
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
            {service.description.map((paragraph: string, index: number) => (
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
