import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const solutions = [
    {
      title: "Syro Acquisition System™",
      description: "AI-powered email marketing that wins you more clients – fully automated.",
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      path: "/syro-acquisition-system",
      gradient: "from-violet-500 to-purple-600",
      features: ["2,000+ decision-makers weekly", "GDPR-compliant", "Real-time insights"]
    },
    {
      title: "AI Customer Experience Assistant™",
      description: "Deliver 24/7 customer support and lead capture – without extra staff.",
      icon: <UserGroupIcon className="w-8 h-8" />,
      path: "/ai-customer-experience-assistant",
      gradient: "from-purple-500 to-pink-600",
      features: ["Instant answers 24/7", "Multi-channel support", "Lead data capture"]
    },
    {
      title: "AI Voice Agent Pro™",
      description: "AI that calls prospects and books meetings automatically.",
      icon: <ChartBarIcon className="w-8 h-8" />,
      path: "/ai-voice-agent-pro",
      gradient: "from-pink-500 to-rose-600",
      features: ["Natural conversations", "Meeting booking", "CRM integration"]
    },
    {
      title: "Social Growth Booster™",
      description: "Engage customers across every social channel – automatically.",
      icon: <SparklesIcon className="w-8 h-8" />,
      path: "/social-growth-booster",
      gradient: "from-rose-500 to-orange-600",
      features: ["Multi-platform support", "24/7 engagement", "Lead nurturing"]
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Transformed", icon: "🏢" },
    { number: "2M+", label: "Leads Generated", icon: "🎯" },
    { number: "300%", label: "Average ROI Increase", icon: "📈" },
    { number: "24/7", label: "AI Support Available", icon: "🤖" }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "TechFlow Solutions",
      role: "CEO",
      quote: "Syro-AI transformed our lead generation completely. We went from 20 leads per month to over 200 qualified prospects.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Marcus Weber",
      company: "Digital Marketing Pro",
      role: "Marketing Director",
      quote: "The AI handles 80% of our customer inquiries automatically. Customer satisfaction increased by 40%.",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      name: "Jennifer Chen",
      company: "Growth Ventures",
      role: "Founder",
      quote: "We're now generating 3x more leads from social channels. The ROI has been incredible.",
      avatar: "👩‍🚀",
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 via-white to-purple-50/80"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-8">
                <SparklesIcon className="w-5 h-5 text-violet-600 mr-2" />
                <span className="text-violet-700 font-semibold text-sm">AI-Powered Business Automation</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Scale Your Business With{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600 animate-gradient">
                  AI Automation
                </span>
                <br />
                 More Customers, More Time.
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                We help businesses automate their customer acquisition, support, and growth processes 
                with intelligent AI solutions that work 24/7.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/kontakt"
                  className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center">
                    Book Free Strategy Call
                    <ArrowRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/success-stories"
                  className="group inline-flex items-center px-10 py-5 border-2 border-violet-500 text-violet-600 font-bold text-lg rounded-full hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20"
                >
                  <StarIcon className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  View Success Stories
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-violet-100 shadow-lg hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gradient-to-br from-white via-violet-50/30 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-8">
              <RocketLaunchIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">Our AI Solutions</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Intelligent automation for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600">
                every business need
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From lead generation to customer support – our AI solutions work together 
              to create a complete growth ecosystem for your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/5 to-pink-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-violet-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={solution.path}
                    className={`group/btn inline-flex items-center px-8 py-4 bg-gradient-to-r ${solution.gradient} text-white font-semibold rounded-full hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-violet-50/50 via-white to-purple-50/50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-8">
              <StarIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">Client Success</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              What our clients{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600">
                are saying
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real results from real businesses that trusted us with their growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/5 to-pink-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-400 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-violet-600 font-medium">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed italic text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-violet-500 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to transform your business with AI?
            </h2>
            
            <p className="text-xl lg:text-2xl text-violet-100 mb-12 leading-relaxed">
              Let's discover together how AI can automate and scale your business operations.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(255, 255, 255, 0.3)",
                  "0 0 60px rgba(255, 255, 255, 0.5)",
                  "0 0 30px rgba(255, 255, 255, 0.3)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 3, repeat: Infinity }
              }}
            >
              <Link
                to="/kontakt"
                className="inline-flex items-center px-12 py-6 bg-white text-violet-600 font-bold text-xl rounded-full hover:shadow-2xl hover:bg-gray-50 transition-all duration-300"
              >
                Book Your Free Strategy Call
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRightIcon className="w-6 h-6 ml-3" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;