import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, CarTaxiFront } from 'lucide-react';
import Button from '../components/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-background/95 backdrop-blur-md shadow-lg shadow-primary/5' : 'py-5 bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mr-10"
            >
              <a href="#" className="flex items-center">
                <div className="relative">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <CarTaxiFront size={20} className="text-white" />
                  </div>
                </div>
                <span className="ml-2 text-2xl font-extrabold text-primary">AirportCab<span className="text-secondary">Pro</span></span>
              </a>
            </motion.div>

            <div className="hidden lg:flex space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 relative ${activeLink === link.id ? 'text-primary' : 'text-text hover:text-primary'}`}
                >
                  {link.name}
                  {activeLink === link.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-primary rounded-full w-full"
                      layoutId="activeNavIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <Button
              className="flex items-center gap-2"
              variant="primary"
            >
              Request a Demo
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
              >
                <ChevronRight size={18} className="transform" />
              </motion.div>
            </Button>
          </div>

          <motion.div
            className="lg:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-primary/10 text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden mt-4 bg-white rounded-xl shadow-xl overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-3">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className={`block px-6 py-3 transition-colors duration-200 ${activeLink === link.id ? 'bg-primary/10 text-primary font-medium' : 'text-text'}`}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveLink(link.id);
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="px-5 pt-3 pb-4 border-t border-gray-100 mt-3">
                  <Button className="w-full">Request a Demo</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;