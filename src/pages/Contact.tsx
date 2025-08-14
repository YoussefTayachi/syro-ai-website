import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  PhoneIcon,
  CheckCircleIcon,
  SparklesIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "Email",
      content: "office@syro-ai.com",
      description: "Response within 24 hours"
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone",
      content: "+43 676 9004865",
      description: "Mon-Fri 9:00-18:00"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-violet-50/80 via-white to-purple-50/80 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-8">
              <SparklesIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Let's transform your business with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600">
                {' '}AI together
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Book your free strategy call and discover 
              how AI automation can take your business to the next level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-gradient-to-br from-white via-violet-50/30 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative group"
            >
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl flex items-center justify-center z-10 shadow-2xl"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <CheckCircleIcon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-4">Message sent!</h3>
                    <p className="text-green-600 text-lg">Thanks! We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/5 to-pink-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="p-10">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-8 text-center">Get In Touch</h2>
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white hover:border-violet-300"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white hover:border-violet-300"
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white hover:border-violet-300"
                        placeholder="+43 123 456 789"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 resize-none bg-white hover:border-violet-300"
                        placeholder="Tell us about your business needs and goals..."
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 font-bold text-lg relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative">Send Message</span>
                    </motion.button>
                    
                    <p className="text-sm text-gray-500 text-center">
                      * Required fields. We'll respond within 24 hours.
                    </p>
                  </form>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl"></div>
              <div className="relative p-10">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-8">Contact Information</h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-100 group-hover:border-violet-200 group-hover:shadow-lg group-hover:shadow-violet-500/20 transition-all duration-300"></div>
                    
                    <div className="relative flex items-start space-x-4 p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:shadow-violet-500/30 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-lg text-violet-600 font-medium">{info.content}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-100 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">What to expect:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-violet-500 mr-3 flex-shrink-0" />
                    Free initial consultation (30-45 minutes)
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-violet-500 mr-3 flex-shrink-0" />
                    Analysis of your current processes
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-violet-500 mr-3 flex-shrink-0" />
                    Concrete solution proposals
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-violet-500 mr-3 flex-shrink-0" />
                    ROI calculation for your project
                  </li>
                </ul>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-violet-50/50 via-white to-purple-50/50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-8">
              <StarIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">FAQ</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Answers to the most important questions about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does the implementation of an AI solution take?",
                answer: "Depending on complexity, between 2-8 weeks. Simple chatbots often within a week, more complex automations can take up to 2 months."
              },
              {
                question: "Are the solutions GDPR compliant?",
                answer: "Yes, all our AI solutions are developed according to German data protection regulations and are fully GDPR compliant."
              },
              {
                question: "What costs will I incur?",
                answer: "Costs vary depending on scope and complexity. In the free consultation, we create an individual offer based on your requirements."
              },
              {
                question: "Do you also offer support after implementation?",
                answer: "Of course. We offer continuous support, optimization and maintenance of all implemented systems."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/5 to-pink-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                  <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-4 text-lg group-hover:from-violet-500 group-hover:to-pink-600 transition-all duration-300">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;