import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-4"
          >
            Ready to transform your business with AI?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Let's discover together how AI can automate and scale your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/kontakt"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 font-medium"
            >
              Book Strategy Call Now
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-white">Syro AI</span>
            </div>
            <p className="text-gray-300 text-sm">
              We scale your business with AI – more customers, less effort.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/syro-acquisition-system" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-violet-400 transition-colors">Syro Acquisition System™</Link></li>
              <li><Link to="/ai-customer-experience-assistant" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-violet-400 transition-colors">AI Customer Experience Assistant™</Link></li>
              <li><Link to="/ai-voice-agent-pro" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-violet-400 transition-colors">AI Voice Agent Pro™</Link></li>
              <li><Link to="/social-growth-booster" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-violet-400 transition-colors">Social Growth Booster™</Link></li>
              <li><Link to="/success-stories" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-violet-400 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/ueber-uns" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-violet-400 transition-colors">About Us</Link></li>
              <li><Link to="/kontakt" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-violet-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Email: office@syro-ai.com</p>
              <p>Phone: +43 676 9004865</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Syro-AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;