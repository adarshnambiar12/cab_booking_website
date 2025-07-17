import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ChevronRight, Phone, Check, ChevronDown } from 'lucide-react';
import Button from '../components/Button';

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-white"
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to streamline your corporate travel?
            </motion.h2>
            <motion.p
              className="text-white text-lg mb-8 max-w-xl drop-shadow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Schedule a personalized demo with our team to see how our platform can simplify airport transfers for your entire organization.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                "Dedicated account manager",
                "Custom pricing packages",
                "No implementation fees",
                "30-day free trial"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-lg shadow-primary/20">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative group"
              >
                <button className="relative bg-gradient-to-r from-white to-white/90 hover:from-white hover:to-white text-primary py-3 px-6 rounded-lg shadow-xl shadow-primary/20 font-semibold flex items-center gap-2 transition-all duration-300 cursor-pointer">
                  <Calendar size={18} />
                  Schedule Your Demo
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </button>
              </motion.div>

              <div className="flex items-center gap-2 text-white font-medium bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20 shadow-lg shadow-primary/5">
                <Phone size={20} className="text-white" />
                <span>+1 (555) 123-4567</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-5/12 bg-white rounded-2xl p-8 shadow-2xl border border-white/80 relative overflow-hidden"
          >
            <form id='cta-form' className="space-y-6 relative">
              <h3 className="text-primary text-2xl font-semibold mb-6">Request Your Demo</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor='firstName'>First Name</label>
                  <input
                    type="text"
                    name='firstName'
                    id='firstName'
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor='lastName'>Last Name</label>
                  <input
                    type="text"
                    name='lastName'
                    id='lastName'
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor='email'>Company Email</label>
                <input
                  type="email"
                  name='email'
                  id='email'
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300"
                  placeholder="name@company.com"
                  autoComplete='email'
                />
              </div>

              <div>
                <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor='company'>Company</label>
                <input
                  type="text"
                  name='company'
                  id='company'
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300"
                  placeholder="Your company name"
                  autoComplete='organization'
                />
              </div>

              <div>
                <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor='teamSize'>Team Size</label>
                <div className="relative">
                  <select
                    defaultValue=""
                    name='teamSize'
                    id='teamSize'
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select team size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201+">201+ employees</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10">
                      <ChevronDown size={16} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative mt-8"
              >
                <Button
                  variant="primary"
                  className="relative w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 font-semibold"
                >
                  Submit Request
                  <ChevronRight size={18} />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;