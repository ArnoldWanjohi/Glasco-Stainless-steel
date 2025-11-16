// src/app/services/[id]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Service Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The service you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <Link 
            href="/services" 
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
}