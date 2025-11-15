'use client';

'use client';

import { useState } from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { motion, Variants } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const services = [
  'Stainless Steel Works',
  'Aluminum Windows & Doors',
  'Glass Installations',
  'Custom Metal Fabrication',
  'Other Inquiry'
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your form submission logic
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch {
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/70 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/contact-hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We&apos;d love to hear from you. Reach out to us for inquiries, quotes, or to discuss your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+254712345678"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
              >
                <FaPhone className="text-blue-400" />
                +254 712 345 678
              </a>
              <a 
                href="mailto:info@glassco.com"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
              >
                <FaEnvelope />
                info@glassco.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-8">
                <div className="w-12 h-1 bg-blue-600 mb-4"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              
              {submitStatus && (
                <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+254 7XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                      Service Interested In
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-white" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl shadow-lg h-full">
                <div className="mb-8">
                  <div className="w-12 h-1 bg-blue-600 mb-4"></div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Information</h2>
                  <p className="text-gray-600">We&apos;re here to help and answer any questions you might have.</p>
                </div>

                <div className="space-y-8">
                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-start group hover:bg-white/50 p-4 rounded-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition-all duration-300">
                      <FaMapMarkerAlt className="h-6 w-6 text-blue-600 group-hover:text-white transition-all duration-300" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
                      <p className="mt-1 text-gray-600">
                        Industrial Area, Nairobi, Kenya
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-start group hover:bg-white/50 p-4 rounded-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition-all duration-300">
                      <FaPhone className="h-6 w-6 text-blue-600 group-hover:text-white transition-all duration-300" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="mt-1">
                        <a 
                          href="tel:+254712345678" 
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                          +254 712 345 678
                        </a>
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-start group hover:bg-white/50 p-4 rounded-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition-all duration-300">
                      <FaEnvelope className="h-6 w-6 text-blue-600 group-hover:text-white transition-all duration-300" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="mt-1">
                        <a 
                          href="mailto:info@glassco.com" 
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-300 break-all"
                        >
                          info@glassco.com
                        </a>
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-start group hover:bg-white/50 p-4 rounded-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition-all duration-300">
                      <FaClock className="h-6 w-6 text-blue-600 group-hover:text-white transition-all duration-300" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
                      <div className="mt-1 text-gray-600 space-y-1">
                        <p className="flex justify-between">
                          <span className="font-medium">Mon - Fri:</span>
                          <span>8:00 AM - 5:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="font-medium">Saturday:</span>
                          <span>9:00 AM - 2:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="font-medium">Sunday:</span>
                          <span>Closed</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={fadeInUp}
                    className="pt-4 border-t border-gray-100"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://wa.me/254712345678" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300"
                        aria-label="WhatsApp"
                      >
                        <FaWhatsapp className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://facebook.com/glassco" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                        aria-label="Facebook"
                      >
                        <FaFacebook className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://instagram.com/glassco" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="h-6 w-6" />
                      </a>
                    </div>
                  </motion.div>

                </div>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.719632218243!2d36.83130251475399!3d-1.3051532990576203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11a1d9e5d2a5%3A0x9e5d7e1b4a7e3b0d!2sGlassco%20Stainless%20Steel!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Glassco Stainless Steel Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Workshop</h3>
                <p className="text-gray-600 mb-4">Visit our workshop in the Industrial Area to discuss your project in person.</p>
                <a 
                  href="https://maps.app.goo.gl/m9q1t8aoD4unx48a7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Get Directions <FiArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to start your project?
              </h2>
              <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+254712345678"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:shadow-lg"
                >
                  <FaPhone className="mr-2" /> Call Now
                </a>
                <a
                  href="mailto:info@glassco.com"
                  className="flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                >
                  <FaEnvelope className="mr-2" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
