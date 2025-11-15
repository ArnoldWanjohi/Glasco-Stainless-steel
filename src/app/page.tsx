'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

// Dynamically import components with no SSR to avoid hydration issues
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Features = dynamic(() => import('@/components/Features'), { ssr: false });
const Services = dynamic(() => import('@/components/Services'), { ssr: false });

// Loading component for Suspense fallback
const Loading = () => <div className="h-screen flex items-center justify-center">Loading...</div>;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Loading />}>
        <main className="flex-grow">
          <Hero />
          <div className="bg-gradient-to-b from-gray-900 to-gray-800">
            <Features />
            <Services />
          </div>
          
          {/* About Section */}
          <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Glasco Stainless & Aluminum</h2>
                <p className="text-lg text-gray-600 mb-8">
                  With years of experience in the industry, Glasco Stainless & Aluminum has established itself as a trusted name in Nairobi for high-quality stainless steel and glass solutions. 
                  Our commitment to excellence and customer satisfaction sets us apart.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaMapMarkerAlt className="text-primary-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-600">Eastern Bypass, Nairobi, Kenya</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaPhone className="text-primary-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+254722149502" className="hover:text-primary-600 transition-colors">
                        +254 722 149 502
                      </a>
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaEnvelope className="text-primary-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@glascostainless.com" className="hover:text-primary-600 transition-colors">
                        info@glascostainless.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary-700 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://wa.me/254722149502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  <FaWhatsapp className="mr-2" />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+254722149502"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Glasco</h3>
                <p className="text-gray-400">
                  Premium stainless steel and glass solutions in Nairobi, Kenya. Quality craftsmanship and professional service.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                  <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
                  <li><a href="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                <ul className="space-y-2">
                  <li><a href="/services#railings" className="text-gray-400 hover:text-white transition-colors">Railings</a></li>
                  <li><a href="/services#balconies" className="text-gray-400 hover:text-white transition-colors">Glass Balconies</a></li>
                  <li><a href="/services#windows" className="text-gray-400 hover:text-white transition-colors">Windows & Doors</a></li>
                  <li><a href="/services#staircases" className="text-gray-400 hover:text-white transition-colors">Staircases</a></li>
                  <li><a href="/services#custom" className="text-gray-400 hover:text-white transition-colors">Custom Works</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <address className="not-italic text-gray-400 space-y-2">
                  <p>Eastern Bypass</p>
                  <p>Nairobi, Kenya</p>
                  <p>Phone: <a href="tel:+254722149502" className="hover:text-white transition-colors">+254 722 149 502</a></p>
                  <p>Email: <a href="mailto:info@glascostainless.com" className="hover:text-white transition-colors">info@glascostainless.com</a></p>
                </address>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Glasco Stainless & Aluminum. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </Suspense>
    </div>
  );
}
