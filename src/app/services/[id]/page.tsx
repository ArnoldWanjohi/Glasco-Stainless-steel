// src/app/services/[id]/page.tsx
'use server';

import { services } from '@/data/services';
import ServiceDetailPage from './ServiceDetailPage';

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  return <ServiceDetailPage params={params} />;
}