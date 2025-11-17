import { services } from '@/data/services';

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

// This is a server component that will be used to wrap the client component
export default function ServicePageWrapper({ params }: { params: { id: string } }) {
  return <ServiceDetailPageClient params={params} />;
}
// This is a client component that will be rendered on the client
import { notFound } from 'next/navigation';

function ServiceDetailPageClient({ params }: { params: { id: string } }) {
  const decodedId = decodeURIComponent(params.id);
  const service = services.find(s => s.id === decodedId);
  
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
