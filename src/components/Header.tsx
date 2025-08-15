import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import syroLogo from '../assets/images/Syro-King-Logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Syro Acquisition System™', path: '/syro-acquisition-system' },
    { name: 'AI Customer Experience Assistant™', path: '/ai-customer-experience-assistant' },
    { name: 'AI Voice Agent Pro™', path: '/ai-voice-agent-pro' },
    { name: 'Social Growth Booster™', path: '/social-growth-booster' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'About', path: '/ueber-uns' },
    { name: 'Contact', path: '/kontakt' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setShowBookingPopup(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-violet-100' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <motion.div whileHover={{ scale: 1.05 }} onClick={scrollToTop}>
                <div className="flex items-center space-x-1">
                  <img 
                    src={syroLogo} 
                    alt="Syro-AI Logo" 
                    className="w-8 h-8"
                  />
                  <span className="text-2xl font-bold text-gray-900">Syro AI</span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={scrollToTop}
                  className={`group relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-500 hover:scale-105 overflow-hidden backdrop-blur-md border ${
                    location.pathname === item.path 
                      ? 'bg-gradient-to-r from-violet-500/20 to-purple-600/20 text-violet-700 shadow-lg shadow-violet-500/25 border-violet-300/50 backdrop-blur-xl' 
                      : 'bg-white/10 text-gray-700 hover:bg-gradient-to-r hover:from-violet-500/10 hover:to-purple-600/10 hover:text-violet-600 border-white/20 hover:border-violet-300/30 hover:shadow-lg hover:shadow-violet-500/20'
                  }`}
                >
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Luminous glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400/0 via-violet-400/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl"></div>
                  
                  {/* Text content */}
                  <span className="relative z-10 tracking-wide font-medium">
                  {item.name}
                  </span>
                </Link>
              ))}
              
              {/* CTA Button */}
              <motion.button
                onClick={() => setShowBookingPopup(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded-2xl overflow-hidden backdrop-blur-md border border-violet-400/30 font-semibold text-sm tracking-wide transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/40"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Luminous glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-300/50 via-purple-400/50 to-violet-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Glassmorphism shine */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl"></div>
                
                {/* Content */}
                <span className="relative z-10 flex items-center space-x-2">
                <CalendarDaysIcon className="w-4 h-4" />
                <span>Book Strategy Call</span>
                </span>
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-900 p-2"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-violet-100 shadow-lg"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    scrollToTop();
                    setIsOpen(false);
                  }}
                  className={`group relative block px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-500 backdrop-blur-md border overflow-hidden ${
                    location.pathname === item.path 
                      ? 'bg-gradient-to-r from-violet-500/20 to-purple-600/20 text-violet-700 shadow-lg shadow-violet-500/25 border-violet-300/50' 
                      : 'bg-white/10 text-gray-700 hover:bg-gradient-to-r hover:from-violet-500/10 hover:to-purple-600/10 hover:text-violet-600 border-white/20 hover:border-violet-300/30 hover:shadow-lg hover:shadow-violet-500/20'
                  }`}
                >
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Luminous glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400/0 via-violet-400/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl"></div>
                  
                  {/* Text content */}
                  <span className="relative z-10 tracking-wide font-medium">
                  {item.name}
                  </span>
                </Link>
              ))}
              
              <button
                onClick={() => {
                  setShowBookingPopup(true);
                  setIsOpen(false);
                }}
                className="group relative w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-sm tracking-wide overflow-hidden backdrop-blur-md border border-violet-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/40"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Luminous glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-300/50 via-purple-400/50 to-violet-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Glassmorphism shine */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl"></div>
                
                {/* Content */}
                <span className="relative z-10 flex items-center space-x-2">
                <CalendarDaysIcon className="w-4 h-4" />
                <span>Book Strategy Call</span>
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Booking Popup */}
      {showBookingPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowBookingPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowBookingPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Book Your Free Strategy Call
                  </h2>
                  <p className="text-gray-600">
                    Fill in your details and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                      placeholder="+49 123 456 789"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message / Business Needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your business needs and goals..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span>Your information is 100% confidential and will never be shared.</span>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 font-semibold text-lg"
                  >
                    Submit & Schedule
                  </motion.button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 text-green-500">✓</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                <p className="text-gray-600">
                  We'll contact you shortly to confirm your strategy call.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Header;