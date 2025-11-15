'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './ui/Button';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  {
    title: 'Stainless Steel Railings',
    description: 'Elegant and durable railings for balconies, staircases, and terraces, custom-designed to enhance your space.',
    image: '/images/stainless-steel-railing-deck.webp',
  },
  {
    title: 'Glass Balconies',
    description: 'Sleek frameless glass balconies that provide unobstructed views while ensuring safety and security.',
    image: '/images/glass-balconies.webp',
  },
  {
    title: 'Aluminum Windows & Doors',
    description: 'Energy-efficient and low-maintenance aluminum windows and doors in modern designs.',
    image: '/images/aluminium-doors-and-windows.webp',
  },
  {
    title: 'Staircase Solutions',
    description: 'Custom-designed staircases that combine functionality with aesthetic appeal.',
    image: '/images/staircase-solutions.webp',
  },
  {
    title: 'Glass Partitions',
    description: 'Create open, light-filled spaces with our frameless glass partitions and room dividers.',
    image: '/images/aluminium-glass-partition.jpg',
  },
  {
    title: 'Custom Metal Works',
    description: 'Bespoke metal fabrication for both residential and commercial applications.',
    image: '/images/custom-metal-works.webp',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">What We Offer</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Premium stainless steel and glass solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-700 hover:border-blue-500"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <Link href="/about" className="inline-block">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-400 hover:bg-blue-500 px-0"
                    icon={<FiArrowRight />}
                    iconPosition="right"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <Link href="/services" className="group">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg group-hover:scale-105 transition-transform duration-300">
              View All Services <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
