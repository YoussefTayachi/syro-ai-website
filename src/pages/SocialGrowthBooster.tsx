import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShareIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
  PlayIcon,
  SparklesIcon,
  CogIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CheckCircleIcon,
  XMarkIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';

const SocialGrowthBooster = () => {
  const painPoints = [
    {
      icon: <ChatBubbleLeftRightIcon className="w-12 h-12" />,
      title: "Missed DMs from potential customers",
      description: "Important leads slip through the cracks when you can't respond to every message instantly"
    },
    {
      icon: <ClockIcon className="w-12 h-12" />,
      title: "Inconsistent follow-ups",
      description: "Manual outreach is time-consuming and inconsistent, leading to lost opportunities"
    },
    {
      icon: <Bars3Icon className="w-12 h-12" />,
      title: "Difficult to manage multiple channels",
      description: "Juggling WhatsApp, Instagram, LinkedIn, and other platforms becomes overwhelming"
    }
  ];

  const benefits = [
    {
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      title: "Bots initiate outreach",
      description: "AI starts conversations with prospects automatically and intelligently"
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "Reply to customers 24/7",
      description: "Never miss a message with automated responses and engagement"
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Manage all platforms in one place",
      description: "Unified dashboard for all your social media channels"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Integrate with CRM",
      description: "Automatically sync leads and conversations to your existing systems"
    }
  ];

  const platforms = [
    { name: "WhatsApp", icon: "💬", color: "from-green-400 to-green-600" },
    { name: "Instagram", icon: "📷", color: "from-pink-400 to-pink-600" },
    { name: "LinkedIn", icon: "💼", color: "from-blue-600 to-blue-800" },
    { name: "Facebook", icon: "📘", color: "from-blue-500 to-blue-700" },
    { name: "Telegram", icon: "✈️", color: "from-blue-400 to-blue-600" },
    { name: "Twitter", icon: "🐦", color: "from-sky-400 to-sky-600" }
  ];

  const strategies = [
    {
      title: "Outbound Messaging",
      description: "Reach out to leads automatically with personalized messages",
      icon: "📤"
    },
    {
      title: "Lead Nurturing",
      description: "Build relationships through consistent, value-driven messaging",
      icon: "🌱"
    },
    {
      title: "Content Distribution",
      description: "Schedule and distribute posts intelligently across all channels",
      icon: "📡"
    },
    {
      title: "Conversion Optimization",
      description: "Bots guide prospects toward purchases with smart conversations",
      icon: "🎯"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-purple-50/30 via-white to-fuchsia-50/30">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-fuchsia-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-fuchsia-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
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
                className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-purple-200/50 shadow-lg mb-8"
              >
                <SparklesIcon className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-purple-700 font-semibold text-sm">AI-Powered Social Media Automation</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
                  Engage customers and generate leads across every social channel
                </span>{' '}
                – automatically.
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg text-slate-700 mb-12 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Our Social Growth Booster™ delivers 24/7 support and proactive outreach on WhatsApp, 
                Instagram, LinkedIn and more – so you never miss an opportunity.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/kontakt"
                    className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center">
                      Book Free Strategy Call
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="group inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-md border border-purple-200/50 text-purple-600 font-semibold rounded-2xl hover:bg-white/90 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                    <ShareIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    View Supported Platforms
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-3xl border border-purple-200/50 shadow-2xl shadow-purple-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Central AI Engine */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 30px rgba(139, 92, 246, 0.4)",
                          "0 0 60px rgba(139, 92, 246, 0.8)",
                          "0 0 30px rgba(139, 92, 246, 0.4)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-32 h-32 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 relative z-10"
                    >
                      <SparklesIcon className="w-16 h-16 text-white" />
                    </motion.div>
                  
                    {/* Social Platform Animation */}
                    {platforms.map((platform, index) => {
                      const angle = (index * 60) * (Math.PI / 180);
                      const radius = 150;
                      const endX = Math.cos(angle) * radius;
                      const endY = Math.sin(angle) * radius;
                      
                      return (
                        <div key={index}>
                          {/* Message Bubbles */}
                          <motion.div
                            className="absolute w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-purple-400"
                            style={{
                              left: '50%',
                              top: '50%',
                              marginLeft: '-16px',
                              marginTop: '-16px',
                            }}
                            animate={{
                              x: [0, endX * 0.3, endX * 0.7],
                              y: [0, endY * 0.3, endY * 0.7],
                              opacity: [0, 1, 1, 0.8],
                              scale: [0.5, 1, 0.9],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: index * 0.3 + 1,
                              ease: "easeOut"
                            }}
                          >
                            <ChatBubbleLeftRightIcon className="w-4 h-4 text-purple-600" />
                          </motion.div>
                          
                          {/* Platform Icons */}
                          <motion.div
                            className={`absolute w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center shadow-lg border-2 border-white`}
                            style={{
                              left: '50%',
                              top: '50%',
                              marginLeft: '-32px',
                              marginTop: '-32px',
                              transform: `translate(${endX}px, ${endY}px)`,
                            }}
                            animate={{
                              scale: [1, 1.3, 1],
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: index * 0.3 + 3,
                              repeatDelay: 2,
                            }}
                          >
                            <span className="text-2xl">{platform.icon}</span>
                            
                            {/* Customer Response Icons */}
                            <motion.div
                              className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-green-400"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ 
                                scale: [0, 1.2, 1],
                                opacity: [0, 1, 1]
                              }}
                              transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                delay: index * 0.3 + 3.5,
                                repeatDelay: 3,
                              }}
                            >
                              <UserGroupIcon className="w-4 h-4 text-green-600" />
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
      <section className="py-24 bg-gradient-to-br from-purple-50/50 via-white to-fuchsia-50/30 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-fuchsia-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-purple-200/50 shadow-lg mb-8">
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-semibold text-sm">Common Challenges</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Are you facing these{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">social media challenges?</span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              These problems are costing you leads and revenue every single day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-purple-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all duration-300">{point.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500 mb-4">
              Our Social Growth Booster™ solves these problems intelligently!
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-purple-200/50 shadow-lg mb-8">
              <ShareIcon className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-semibold text-sm">Multi-Platform Integration</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Supported <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">Platforms</span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Reach your customers wherever they are with unified automation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative text-center"
              >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-purple-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300`}>
                    {platform.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all duration-300">{platform.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Solution Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50/50 via-white to-fuchsia-50/30 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-fuchsia-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-purple-200/50 shadow-lg mb-8">
              <SparklesIcon className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-semibold text-sm">Our Solution</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Our automation solution turns{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
                social media into a revenue channel
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Intelligent automation that engages prospects and converts them into customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-purple-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all duration-300">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Strategies Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-purple-200/50 shadow-lg mb-8">
              <CogIcon className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-semibold text-sm">Smart Strategies</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Smart strategies for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
                maximum impact
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Proven automation approaches that drive engagement and conversions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative text-center"
              >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-purple-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-6">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                    className="text-4xl mb-4"
                  >
                    {strategy.icon}
                  </motion.div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all duration-300">{strategy.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{strategy.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automated Workflow Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50/50 via-white to-fuchsia-50/30 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-fuchsia-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-purple-200/50 shadow-lg mb-8">
              <RocketLaunchIcon className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-semibold text-sm">How It Works</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Automated workflow for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
                social media success
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              From audience analysis to lead conversion in 4 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Target Analysis",
                description: "Define audience and identify the best prospects on each platform",
                icon: <MagnifyingGlassIcon className="w-16 h-16" />
              },
              {
                step: "2",
                title: "AI Engagement",
                description: "Bots start conversations with personalized, relevant messages",
                icon: <ChatBubbleLeftRightIcon className="w-16 h-16" />
              },
              {
                step: "3",
                title: "Proactive Follow-ups",
                description: "Keep leads warm with intelligent nurturing sequences",
                icon: <ClockIcon className="w-16 h-16" />
              },
              {
                step: "4",
                title: "Lead Conversion",
                description: "Send qualified leads to your team for closing",
                icon: <FunnelIcon className="w-16 h-16" />
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative text-center group"
              >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-purple-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative p-8">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-2xl shadow-purple-500/50 group-hover:shadow-3xl group-hover:shadow-purple-500/60 transition-all duration-300"
                  >
                    {process.icon}
                  </motion.div>
                  
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {process.step}
                  </div>
                </div>
                
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all duration-300">{process.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{process.description}</p>
                
                  {index < 3 && (
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="hidden md:block absolute top-12 -right-4 text-purple-400"
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
      <section className="py-24 bg-gradient-to-br from-purple-500 to-fuchsia-500 relative overflow-hidden">
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
              Ready to turn social media into a growth engine?
            </h2>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.3)",
                  "0 0 40px rgba(255, 255, 255, 0.6)",
                  "0 0 20px rgba(255, 255, 255, 0.3)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            >
              <Link
                to="/kontakt"
                className="inline-flex items-center px-12 py-6 bg-white text-purple-600 font-bold text-xl rounded-2xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300"
              >
                Book Free Strategy Call
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
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

export default SocialGrowthBooster;