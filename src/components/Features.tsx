'use client';

import { motion } from 'framer-motion';
import { FiAward, FiTruck, FiShield, FiTool } from 'react-icons/fi';

const features = [
  {
    icon: <FiAward className="w-10 h-10 text-primary-600" />,
    title: 'Quality Materials',
    description: 'We use premium 304/316 stainless steel and tempered glass for durability and longevity.',
  },
  {
    icon: <FiTool className="w-10 h-10 text-primary-600" />,
    title: 'Custom Designs',
    description: 'Tailored solutions to match your unique style and architectural requirements.',
  },
  {
    icon: <FiTruck className="w-10 h-10 text-primary-600" />,
    title: 'Fast Installation',
    description: 'Efficient service with prompt delivery and professional installation across Nairobi.',
  },
  {
    icon: <FiShield className="w-10 h-10 text-primary-600" />,
    title: 'Warranty & Support',
    description: 'Backed by our comprehensive warranty and dedicated customer support.',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Glasco?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Excellence in every detail, from design to installation. Our commitment to quality ensures your complete satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary-50 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
