// src/app/about/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Glasco</h1>
            <p className="text-xl text-blue-100">
              Your trusted partner for premium metal and glass solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Glasco has been a leader in the metal and glass industry for over 15 years, 
              providing high-quality solutions for both residential and commercial clients.
            </p>
            <p className="text-gray-600">
              Our team of skilled craftsmen combines traditional techniques with modern technology 
              to deliver exceptional results on every project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}