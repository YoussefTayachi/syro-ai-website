import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowRightIcon,
  SparklesIcon,
  CogIcon,
  RocketLaunchIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const SyroAcquisitionSystem = () => {
  const painPoints = [
    {
      icon: <MagnifyingGlassIcon className="w-12 h-12" />,
      title: "No access to decision-makers",
      description: "Your outreach gets lost in spam folders or blocked by gatekeepers"
    },
    {
      icon: <ChartBarIcon className="w-12 h-12" />,
      title: "Low reply rates kill your pipeline",
      description: "Generic messages and poor targeting result in minimal responses"
    },
    {
      icon: <ClockIcon className="w-12 h-12" />,
      title: "Manual outreach wastes valuable time",
      description: "Hours spent on repetitive tasks instead of closing deals"
    }
  ];

  const benefits = [
    {
      icon: <EnvelopeIcon className="w-8 h-8" />,
      title: "Direct access to 2,000+ decision-makers weekly",
      description: "Sent automatically with hyper-personalization powered by OpenAI"
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "GDPR-compliant & legally secure",
      description: "Built-in safeguards and consent management for complete legal protection"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Real-time performance insights",
      description: "Monitor opens, replies, booked calls, and revenue as it happens"
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "Push-button automation",
      description: "AI works 24/7 while you focus on closing deals and scaling"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Targeting",
      description: "AI identifies and researches your ideal decision-makers",
      icon: <MagnifyingGlassIcon className="w-16 h-16" />
    },
    {
      number: "2",
      title: "Automated Outreach",
      description: "Hyper-personalized emails sent at scale with perfect timing",
      icon: <RocketLaunchIcon className="w-16 h-16" />
    },
    {
      number: "3",
      title: "Replies & Meetings",
      description: "Decision-makers respond and book meetings automatically",
      icon: <CheckCircleIcon className="w-16 h-16" />
    },
    {
      number: "4",
      title: "Deals Closed",
      description: "Your sales team focuses on closing qualified opportunities",
      icon: <ChartBarIcon className="w-16 h-16" />
    }
  ];

  return (
    <div className="pt-20 overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-8"
              >
                <RocketLaunchIcon className="w-5 h-5 text-violet-600 mr-2" />
                <span className="text-violet-700 font-semibold text-sm">AI-Powered Email Marketing</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600 animate-gradient">
                 AI-Powered Email Marketing That Wins You More Clients
                </span>{' '}
                – fully automated.
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Our GDPR-compliant, AI-powered system identifies decision-makers, sends hyper-personalized 
                outreach at scale, and fills your pipeline – all at the push of a button.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
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
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl backdrop-blur-sm border border-violet-200 shadow-2xl shadow-violet-500/30 hover:shadow-3xl hover:shadow-violet-500/40 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Central AI Button */}
                    <motion.button
                      animate={{ 
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          "0 0 20px rgba(139, 92, 246, 0.3)",
                          "0 0 40px rgba(139, 92, 246, 0.6)",
                          "0 0 20px rgba(139, 92, 246, 0.3)"
                        ]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-32 h-32 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50 relative z-10"
                    >
                      <SparklesIcon className="w-16 h-16 text-white" />
                    </motion.button>
                    
                    {/* Enhanced Email Shooting Animation */}
                    {[...Array(12)].map((_, index) => {
                      const angle = (index * 30) * (Math.PI / 180);
                      const radius = 200;
                      const endX = Math.cos(angle) * radius;
                      const endY = Math.sin(angle) * radius;
                      
                      return (
                        <div key={index}>
                          <motion.div
                            className="absolute w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-violet-400"
                            style={{
                              left: '50%',
                              top: '50%',
                              marginLeft: '-24px',
                              marginTop: '-24px',
                            }}
                            animate={{
                              x: [0, endX * 0.3, endX],
                              y: [0, endY * 0.3, endY],
                              opacity: [0, 1, 1, 0.8],
                              scale: [0.5, 1, 0.9],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: index * 0.15 + 1,
                              ease: "easeOut"
                            }}
                          >
                            <EnvelopeIcon className="w-6 h-6 text-violet-600" />
                          </motion.div>
                          
                          {/* Decision-Maker Icons */}
                          <motion.div
                            className="absolute w-14 h-14 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-lg border-2 border-gray-300"
                            style={{
                              left: '50%',
                              top: '50%',
                              marginLeft: '-28px',
                              marginTop: '-28px',
                              transform: `translate(${endX}px, ${endY}px)`,
                            }}
                            animate={{
                              scale: [1, 1.3, 1],
                              borderColor: [
                                "rgb(209, 213, 219)",
                                "rgb(139, 92, 246)",
                                "rgb(34, 197, 94)",
                                "rgb(209, 213, 219)"
                              ],
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: index * 0.15 + 3.5,
                              repeatDelay: 2,
                            }}
                          >
                            <UserGroupIcon className="w-7 h-7 text-gray-600" />
                            
                            <motion.div
                              className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ 
                                scale: [0, 1.2, 1],
                                opacity: [0, 1, 1]
                              }}
                              transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                delay: index * 0.15 + 4,
                                repeatDelay: 3,
                              }}
                            >
                              <CheckCircleIcon className="w-4 h-4 text-white" />
                            </motion.div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-gradient-to-br from-violet-50/50 via-white to-purple-50/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-8">
              <MagnifyingGlassIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">Common Challenges</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              These outreach challenges are{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600">costing you deals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every day without proper outreach automation means missed opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/5 to-pink-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {point.icon}
                </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-300">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600 mb-4">
              Syro Acquisition System™ eliminates these problems with intelligent automation!
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-gradient-to-br from-white via-violet-50/30 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-8">
              <SparklesIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">Our Solution</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Our system turns outreach into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600">
                predictable revenue
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Intelligent automation that delivers consistent, high-quality leads
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/5 to-pink-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {benefit.icon}
                </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-300">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-violet-50/50 via-white to-purple-50/50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-8">
              <CogIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">How It Works</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              How it works –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600">
                4 simple steps to revenue
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From targeting to closed deals – our proven process delivers results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative text-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative p-8">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-2xl shadow-violet-500/50 group-hover:shadow-3xl group-hover:shadow-violet-500/60 transition-all duration-300"
                  >
                    {step.icon}
                  </motion.div>
                  
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-300">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden md:block absolute top-12 -right-4 text-violet-400"
                  >
                    <ArrowRightIcon className="w-8 h-8" />
                  </motion.div>
                )}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Ready for predictable revenue growth?
            </h2>
            
            <p className="text-xl lg:text-2xl text-violet-100 mb-12 leading-relaxed">
              Let's discover together how AI can automate your outreach and scale your business.
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
                Book Free Strategy Call
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

export default SyroAcquisitionSystem;