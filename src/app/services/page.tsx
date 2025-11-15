import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export const metadata = {
  title: 'Our Services | Glasco Stainless & Aluminum',
  description: 'Discover our comprehensive range of stainless steel and glass solutions including railings, balconies, windows, and custom metal works.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-100 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Premium stainless steel and glass solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white text-xl font-semibold bg-gradient-to-t from-black/80 to-transparent">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Learn more <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Glasco?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                '18+ Years of Experience',
                'Skilled Craftsmen',
                'Quality Materials',
                'Custom Solutions',
                'Timely Delivery',
                'Competitive Pricing'
              ].map((item) => (
                <div key={item} className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link 
                href="/contact" 
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
