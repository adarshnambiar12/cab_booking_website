import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, MapPin } from 'lucide-react';
import Button from '../components/Button';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      const elements = containerRef.current.querySelectorAll('.parallax-element');
      elements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed') || 1);
        const rotateX = y * 10 * speed;
        const rotateY = -x * 10 * speed;
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center mb-6">
              <motion.div
                className="px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Trusted by 500+ Corporate Clients
              </motion.div>
            </div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-text mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-primary">Effortless</span> Airport Transfers for Your Business Teams
            </motion.h1>

            <motion.p
              className="text-lg text-text/80 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Streamline corporate travel with our dedicated fleet, simplified billing, and real-time tracking platform. From airport to hotel and beyond - we handle the logistics so you don't have to.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button size="lg" className="px-8 flex items-center gap-2 shadow-xl shadow-primary/20 w-full md:w-auto">
                Get a Corporate Quote
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </Button>
              <Button variant="outline" size="md" className="px-8 flex items-center gap-2 w-full md:w-auto">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: <Shield size={20} />, text: "Duty of Care" },
                { icon: <Clock size={20} />, text: "24/7 Service" },
                { icon: <MapPin size={20} />, text: "Global Coverage" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-text/70">
                  <div className="p-1.5 bg-primary/10 rounded-full text-primary">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            ref={containerRef}
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                className="parallax-element rounded-2xl overflow-hidden shadow-2xl shadow-primary/20"
                data-speed="0.5"
              >
                <img
                  src="/images/hero.jpg"
                  alt="Premium Airport Transfer Service for Corporate Clients"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Floating card element 1 */}
              <motion.div
                className="parallax-element absolute -top-8 -left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 max-w-[200px]"
                data-speed="1.2"
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-text/60">Average Wait Time</p>
                  <p className="font-bold text-text">{'<'} 8 minutes</p>
                </div>
              </motion.div>

              {/* Floating card element 2 */}
              <motion.div
                className="parallax-element absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl max-w-[220px]"
                data-speed="1"
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Shield size={16} />
                  </div>
                  <p className="font-bold text-text">Safety First</p>
                </div>
                <p className="text-xs text-text/60">All drivers background-checked and vehicles regularly inspected</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;