// src/app/services/[id]/loading.tsx
export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-1/2 mb-8"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="h-96 bg-gray-200 rounded-lg mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}