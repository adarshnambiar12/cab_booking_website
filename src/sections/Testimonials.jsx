import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "AirportCabPro has revolutionized how we manage airport transfers for our executives. The dashboard is intuitive, and the service is consistently reliable, even for last-minute bookings. We've seen a 30% reduction in our ground transportation costs since switching.",
      name: "Sarah Johnson",
      title: "Travel Manager",
      company: "GlobalTech Inc.",
      rating: 5,
      image: "/images/testimonial1.jpg"
    },
    {
      quote: "The consolidated billing feature alone has saved our accounting department countless hours. Our employees appreciate the professional drivers and the peace of mind that comes with the tracking feature. Best corporate travel decision we've made in years.",
      name: "Michael Chen",
      title: "Operations Director",
      company: "InnovateCorp",
      rating: 5,
      image: "/images/testimonial2.jpg"
    },
    {
      quote: "What sets AirportCabPro apart is their exceptional customer service. Whenever we've had last-minute changes or special requests for our executives, their team has gone above and beyond to accommodate us. The reporting features are also fantastic for our finance team.",
      name: "Rebecca Taylor",
      title: "Executive Assistant",
      company: "Acme Solutions",
      rating: 5,
      image: "/images/testimonial3.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-background relative">

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            className="px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Client Stories
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text mt-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            What Our <span className="text-primary">Clients</span> Say
          </motion.h2>
          <motion.p
            className="text-lg text-text/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Trusted by corporate travel managers and administrators worldwide.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                      {/* Image size suggestion: 100x100 for testimonial avatar */}
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white"
                      initial={{ rotate: 45 }}
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Quote size={18} />
                    </motion.div>
                  </div>

                  <div className="text-center mt-6">
                    <h4 className="font-bold text-lg text-text">{testimonials[currentIndex].name}</h4>
                    <p className="text-text/70 text-sm">{testimonials[currentIndex].title}</p>
                    <p className="text-primary font-medium text-sm">{testimonials[currentIndex].company}</p>

                    <div className="flex justify-center mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < testimonials[currentIndex].rating ? "#6b48be" : "none"}
                          color={i < testimonials[currentIndex].rating ? "#6b48be" : "#ccc"}
                          className="mx-0.5"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <Quote size={40} className="text-primary/20 mb-4" />
                  <p className="text-text/80 italic text-lg leading-relaxed mb-6">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-10 gap-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16 hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-16 hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary/5 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;