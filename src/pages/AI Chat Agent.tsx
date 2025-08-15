import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import chatbotIcon from '../assets/images/Chatbot-Icon.png';
import { 
  ChatBubbleLeftRightIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  DevicePhoneMobileIcon,
  ChatBubbleOvalLeftIcon,
  PlayIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  LifebuoyIcon,
  ClockIcon as HourglassIcon,
  PhoneXMarkIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const AICustomerExperienceAssistant = () => {
  const [activeDemo, setActiveDemo] = useState<'lead' | 'booking' | 'faq' | null>(null);
  const [chatMessages, setChatMessages] = useState<Array<{type: 'bot' | 'user', message: string}>>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [autoAdvanceTimeout, setAutoAdvanceTimeout] = useState<NodeJS.Timeout | null>(null);

  const painPoints = [
    {
      icon: <LifebuoyIcon className="w-12 h-12" />,
      title: "Overwhelmed support teams",
      description: "Staff waste time answering repetitive questions instead of focusing on complex issues"
    },
    {
      icon: <HourglassIcon className="w-12 h-12" />,
      title: "Missed leads outside business hours",
      description: "Potential customers leave when they can't get immediate answers"
    },
    {
      icon: <PhoneXMarkIcon className="w-12 h-12" />,
      title: "Repetitive FAQs drain resources",
      description: "Same questions answered over and over, reducing team efficiency"
    }
  ];

  const benefits = [
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "Instant answers 24/7",
      description: "AI responds to FAQs immediately, day and night"
    },
    {
      icon: <CalendarDaysIcon className="w-8 h-8" />,
      title: "Appointment booking",
      description: "Books calls and meetings automatically with calendar integration"
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Lead data capture",
      description: "Collects contact information and pushes qualified leads to your CRM"
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      title: "Multi-channel support",
      description: "Works across Website, WhatsApp, Messenger, and Telegram"
    }
  ];

  const integrations = [
    { name: "Website", icon: "🌐", color: "from-blue-400 to-violet-400" },
    { name: "WhatsApp", icon: "💬", color: "from-green-400 to-blue-400" },
    { name: "Instagram", icon: "📷", color: "from-pink-400 to-purple-500" },
    { name: "Telegram", icon: "✈️", color: "from-blue-400 to-cyan-400" }
  ];

  const generateCalendarDates = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const dates = [];
    
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      if (date >= today) {
        dates.push({
          day: i,
          date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
        });
      }
    }
    return dates.slice(0, 14);
  };

  const calendarDates = generateCalendarDates();

  const startDemo = (type: 'lead' | 'booking' | 'faq') => {
    setActiveDemo(type);
    setCurrentStep(0);
    setChatMessages([]);
    setSelectedDate(null);
    if (autoAdvanceTimeout) {
      clearTimeout(autoAdvanceTimeout);
    }
    
    setTimeout(() => {
      if (type === 'lead') {
        setChatMessages([{type: 'bot', message: "Hi! I'm here to help you learn more about our services. What's your name?"}]);
        const timeout = setTimeout(() => {
          continueDemo("John Smith", "Great! What's your email address, John?");
        }, 3000);
        setAutoAdvanceTimeout(timeout);
      } else if (type === 'booking') {
        setChatMessages([{type: 'bot', message: "Hello! I'd be happy to help you schedule a consultation. What's the best way to reach you?"}]);
        const timeout = setTimeout(() => {
          continueDemo("sarah@business.com", "Thanks! I can schedule a 30-minute consultation. Please select a date below:");
        }, 3000);
        setAutoAdvanceTimeout(timeout);
      } else if (type === 'faq') {
        setChatMessages([{type: 'bot', message: "Hi! I can answer questions about our services. What would you like to know?"}]);
        const timeout = setTimeout(() => {
          continueDemo("What are your pricing plans?", "We offer flexible pricing based on your needs. Our basic plan starts at $299/month and includes up to 1,000 conversations. Would you like me to schedule a call to discuss the best option for your business?");
        }, 3000);
        setAutoAdvanceTimeout(timeout);
      }
    }, 500);
  };

  const continueDemo = (userMessage: string, botResponse: string) => {
    if (autoAdvanceTimeout) {
      clearTimeout(autoAdvanceTimeout);
      setAutoAdvanceTimeout(null);
    }
    
    setChatMessages(prev => [...prev, 
      {type: 'user', message: userMessage},
      {type: 'bot', message: botResponse}
    ]);
    setCurrentStep(prev => prev + 1);
  };

  const handleDateSelection = (date: string) => {
    setSelectedDate(date);
    if (autoAdvanceTimeout) {
      clearTimeout(autoAdvanceTimeout);
      setAutoAdvanceTimeout(null);
    }
    
    setChatMessages(prev => [...prev, 
      {type: 'user', message: `I'd like to book for ${date}`},
      {type: 'bot', message: `✅ Perfect! Your appointment is confirmed for ${date}. We'll send you a reminder email 24 hours before the meeting.`}
    ]);
    setCurrentStep(prev => prev + 1);
  };

  const resetDemo = () => {
    setActiveDemo(null);
    setChatMessages([]);
    setCurrentStep(0);
    setSelectedDate(null);
    if (autoAdvanceTimeout) {
      clearTimeout(autoAdvanceTimeout);
      setAutoAdvanceTimeout(null);
    }
  };

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-purple-50/30 to-fuchsia-50/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-fuchsia-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-fuchsia-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                <span className="text-purple-700 font-semibold text-sm">AI-Powered Customer Support</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
                  Deliver 24/7 customer support and lead capture
                </span>{' '}
                – without extra staff.
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg text-slate-700 mb-12 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Our AI Customer Experience Assistant™ delivers instant support and lead capture without adding pressure to your team – 
                across all your communication channels.
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
                  <button 
                    onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-md border border-purple-200/50 text-purple-600 font-semibold rounded-2xl hover:bg-white/90 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    <PlayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Try Interactive Demo
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
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-64 h-64 relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
                        <ChatBubbleLeftRightIcon className="w-16 h-16 text-white animate-pulse" />
                      </div>
                      
                      {[
                        { icon: UserGroupIcon, delay: 0, radius: 120, color: 'from-blue-400 to-violet-400' },
                        { icon: CalendarDaysIcon, delay: 1, radius: 120, color: 'from-green-400 to-blue-400' },
                        { icon: EnvelopeIcon, delay: 2, radius: 120, color: 'from-violet-400 to-pink-400' },
                        { icon: ClockIcon, delay: 3, radius: 120, color: 'from-pink-400 to-red-400' }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className={`absolute w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg`}
                          style={{
                            left: '50%',
                            top: '50%',
                            marginLeft: '-24px',
                            marginTop: '-24px',
                          }}
                          animate={{
                            x: [
                              Math.cos((index * Math.PI) / 2) * item.radius,
                              Math.cos((index * Math.PI) / 2 + Math.PI) * item.radius,
                              Math.cos((index * Math.PI) / 2) * item.radius,
                            ],
                            y: [
                              Math.sin((index * Math.PI) / 2) * item.radius,
                              Math.sin((index * Math.PI) / 2 + Math.PI) * item.radius,
                              Math.sin((index * Math.PI) / 2) * item.radius,
                            ],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            delay: item.delay,
                            ease: "linear"
                          }}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </motion.div>
                      ))}
                    </motion.div>
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
              <LifebuoyIcon className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-semibold text-sm">Common Challenges</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Do these customer service challenges sound{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">familiar?</span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              These problems are costing you customers and revenue every single day
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
              Our AI Customer Experience Assistant™ solves these problems instantly!
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Our AI Assistant –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
                intelligent automation
              </span>{' '}
              that delights customers and scales your team
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Advanced AI that handles complex conversations while capturing valuable leads
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all duration-300">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo-section" className="py-24 bg-gradient-to-br from-purple-50/50 via-white to-fuchsia-50/30 relative">
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
              <PlayIcon className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-semibold text-sm">Interactive Experience</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
                Try Interactive Demo
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Experience how our AI assistant handles real conversations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => startDemo('lead')}
              className="group relative text-center"
            >
              <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-purple-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg"
                >
                  <UserGroupIcon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all duration-300">Lead Capture Demo</h3>
                <p className="text-slate-600 text-sm leading-relaxed">See how the AI collects contact information</p>
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => startDemo('booking')}
              className="group relative text-center"
            >
              <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-purple-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg"
                >
                  <CalendarDaysIcon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all duration-300">Appointment Booking</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Watch the AI schedule meetings automatically</p>
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => startDemo('faq')}
              className="group relative text-center"
            >
              <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-purple-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg"
                >
                  <ChatBubbleLeftRightIcon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all duration-300">FAQ Answering</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Experience instant answers to common questions</p>
              </div>
            </motion.button>
          </div>

          {/* Interactive Chatbot Widget */}
          {activeDemo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl shadow-purple-500/20 overflow-hidden border border-purple-200/50"
            >
              <div className="bg-gradient-to-r from-purple-500 to-fuchsia-500 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <span className="font-semibold">AI Assistant</span>
                  </div>
                  <button
                    onClick={resetDemo}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
              
              <div className="px-6 py-3 bg-purple-50/50 border-b border-purple-100">
                <p className="text-sm text-purple-700 flex items-center">
                  <span className="mr-2">👉</span>
                  <span className="font-medium">Interact with the AI!</span>
                  <span className="ml-1">Click highlighted messages or buttons to continue the conversation.</span>
                </p>
              </div>
              
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 }}
                    className={`flex ${msg.type === 'user' ? 'flex-row-reverse items-start gap-3' : 'items-start gap-3'}`}
                  >
                    {/* Avatar */}
                    <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                      {msg.type === 'user' ? (
                        <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          U
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                          <img 
                            src={chatbotIcon} 
                            alt="Chatbot" 
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                    
                    {/* Message Content */}
                    <div className={`max-w-[75%] px-4 py-2 rounded-xl ${
                      msg.type === 'user' 
                        ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      {msg.message}
                    </div>
                  </motion.div>
                ))}
                
                {/* Calendar for booking demo */}
                {activeDemo === 'booking' && currentStep === 1 && !selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4"
                  >
                    <div className="bg-gray-50 p-4 rounded-2xl">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Select a date for your meeting:</h4>
                      <div className="grid grid-cols-7 gap-2">
                        {calendarDates.map((dateObj, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.1, backgroundColor: '#8B5CF6' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleDateSelection(dateObj.date)}
                            className="p-2 text-xs bg-white border border-gray-200 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200 hover:shadow-lg"
                          >
                            <div className="font-medium">{dateObj.day}</div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Demo interaction buttons */}
                {activeDemo === 'lead' && currentStep === 0 && (
                  <div className="flex justify-end space-x-2 mt-4 mr-11">
                    <motion.button
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(139, 92, 246, 0.4)",
                          "0 0 0 8px rgba(139, 92, 246, 0)",
                          "0 0 0 0 rgba(139, 92, 246, 0.4)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      onClick={() => continueDemo("John Smith", "Great! What's your email address, John?")}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-fuchsia-100 text-purple-700 rounded-full hover:from-purple-200 hover:to-fuchsia-200 transition-all duration-300 font-medium border border-purple-200"
                    >
                      John Smith
                    </motion.button>
                  </div>
                )}
                
                {activeDemo === 'lead' && currentStep === 1 && (
                  <div className="flex justify-end space-x-2 mt-4 mr-11">
                    <motion.button
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(139, 92, 246, 0.4)",
                          "0 0 0 8px rgba(139, 92, 246, 0)",
                          "0 0 0 0 rgba(139, 92, 246, 0.4)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      onClick={() => continueDemo("john@company.com", "Perfect! And your phone number? I'll make sure our team reaches out to you soon.")}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-fuchsia-100 text-purple-700 rounded-full hover:from-purple-200 hover:to-fuchsia-200 transition-all duration-300 font-medium border border-purple-200"
                    >
                      john@company.com
                    </motion.button>
                  </div>
                )}
                
                {activeDemo === 'booking' && currentStep === 0 && (
                  <div className="flex justify-end space-x-2 mt-4 mr-11">
                    <motion.button
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(139, 92, 246, 0.4)",
                          "0 0 0 8px rgba(139, 92, 246, 0)",
                          "0 0 0 0 rgba(139, 92, 246, 0.4)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      onClick={() => continueDemo("sarah@business.com", "Thanks! I can schedule a 30-minute consultation. Are you available this week?")}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-fuchsia-100 text-purple-700 rounded-full hover:from-purple-200 hover:to-fuchsia-200 transition-all duration-300 font-medium border border-purple-200"
                    >
                      sarah@business.com
                    </motion.button>
                  </div>
                )}
                
                {activeDemo === 'faq' && currentStep === 0 && (
                  <div className="flex justify-end space-x-2 mt-4 mr-11">
                    <motion.button
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(139, 92, 246, 0.4)",
                          "0 0 0 8px rgba(139, 92, 246, 0)",
                          "0 0 0 0 rgba(139, 92, 246, 0.4)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      onClick={() => continueDemo("What are your pricing plans?", "We offer flexible pricing based on your needs. Our basic plan starts at $299/month and includes up to 1,000 conversations. Would you like me to schedule a call to discuss the best option for your business?")}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-fuchsia-100 text-purple-700 rounded-full hover:from-purple-200 hover:to-fuchsia-200 transition-all duration-300 font-medium border border-purple-200 text-sm"
                    >
                      What are your pricing plans?
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Multi-Channel Integration Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-purple-200/50 shadow-lg mb-8">
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-semibold text-sm">Multi-Platform Integration</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Works across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
                all your channels
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              One AI assistant, multiple platforms – seamless integration everywhere
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
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
                  <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300`}>
                    {integration.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all duration-300">{integration.name}</h3>
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
              Ready for 24/7 customer support that scales?
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

export default AICustomerExperienceAssistant;