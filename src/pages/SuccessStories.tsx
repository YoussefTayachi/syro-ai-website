import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  EnvelopeIcon,
  UserIcon,
  PhoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import chatbotIcon from '../assets/images/Chatbot-Icon.png';

const SuccessStories = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailFormData, setEmailFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: 'I want to replicate the automated email marketing playbook'
  });
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [emailCount, setEmailCount] = useState(0);
  const [openRate, setOpenRate] = useState(0);
  const [replyRate, setReplyRate] = useState(0);
  const [meetings, setMeetings] = useState(0);
  const [currentReply, setCurrentReply] = useState(0);
  const [currentPersonalization, setCurrentPersonalization] = useState(0);
  const [interested, setInterested] = useState(0);
  const [currentPersonalizationIndex, setCurrentPersonalizationIndex] = useState(0);
  const [emailMetrics, setEmailMetrics] = useState({
    delivered: 0,
    openRate: 0,
    replyRate: 0,
    interested: 0,
    meetings: 0
  });
  const personalizations = [
    "Hi Sarah, noticed TechFlow just raised Series A - congrats! Quick question about your customer acquisition strategy...",
    "David, saw your recent post about scaling NorthPeak's marketing team. We helped a similar SaaS company 3x their qualified leads...",
    "Marie, love what Glow Cosmetics is doing with sustainable beauty. We've helped beauty brands automate their customer journey..."
  ];

  const personalizationExamples = [
    "Hi Sarah, noticed TechFlow just raised Series A - congrats! Quick question about your customer acquisition strategy...",
    "David, saw your recent post about scaling NorthPeak's marketing team. We helped a similar SaaS company 3x their qualified leads...",
    "Marie, love what Glow Cosmetics is doing with sustainable beauty. We've helped beauty brands automate their customer journey..."
  ];

  const emailReplies = [
    { message: "This is timely—can we talk next week?", author: "Marie", company: "Glow Cosmetics", tag: "Interested", color: "bg-green-100 text-green-700" },
    { message: "Nice personalization. Please share a case study.", author: "David", company: "NorthPeak", tag: "Interested", color: "bg-green-100 text-green-700" },
    { message: "Let's book a 20-min call.", author: "Amir", company: "NovaLabs", tag: "Book a call", color: "bg-violet-100 text-violet-700" },
    { message: "Send me pricing details please.", author: "Sarah", company: "TechFlow", tag: "Send pricing", color: "bg-blue-100 text-blue-700" },
    { message: "Interested in learning more about your services.", author: "Mike", company: "GrowthCo", tag: "Interested", color: "bg-green-100 text-green-700" },
    { message: "Can we schedule a demo?", author: "Lisa", company: "ScaleUp", tag: "Book a call", color: "bg-violet-100 text-violet-700" }
  ];

  const chatMessages = [
    {
      type: 'bot',
      message: "Hi! Welcome to Bella Beauty Clinic. How can I help you today?",
      delay: 1000
    },
    {
      type: 'user',
      message: "Hi! I'm interested in your facial treatments. What do you offer?",
      delay: 2000
    },
    {
      type: 'bot',
      message: "We offer several facial treatments: HydraFacial ($120), Anti-Aging Facial ($95), and Deep Cleansing Facial ($80). All include consultation and aftercare advice. Which interests you most?",
      delay: 3000
    },
    {
      type: 'user',
      message: "The HydraFacial sounds great! How long does it take?",
      delay: 4000
    },
    {
      type: 'bot',
      message: "Perfect choice! The HydraFacial takes about 60 minutes and gives immediate results. Would you like to book an appointment? I can check our availability right now.",
      delay: 5000
    },
    {
      type: 'user',
      message: "Yes, I'd love to book for this week if possible.",
      delay: 6000
    },
    {
      type: 'bot',
      message: "Excellent! Let me show you our available slots this week:",
      delay: 7000,
      showBooking: true
    }
  ];

  // Email marketing animation counters
  useEffect(() => {
    const emailTimer = setInterval(() => {
      setEmailCount(prev => prev < 48200 ? prev + Math.floor(Math.random() * 50) + 20 : 48200);
      setOpenRate(prev => prev < 61 ? prev + 0.1 : 61);
      setReplyRate(prev => prev < 12.4 ? prev + 0.05 : 12.4);
      setMeetings(prev => prev < 137 ? prev + 1 : 137);
      setInterested(prev => prev < 89 ? prev + 1 : 89);
    }, 100);

    const replyTimer = setInterval(() => {
      setCurrentReply(prev => (prev + 1) % emailReplies.length);
    }, 3000);

    const personalizationTimer = setInterval(() => {
      setCurrentPersonalization(prev => (prev + 1) % personalizations.length);
    }, 4000);

    return () => {
      clearInterval(emailTimer);
      clearInterval(replyTimer);
      clearInterval(personalizationTimer);
    };
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email form submitted:', emailFormData);
    setIsEmailSubmitted(true);
    setTimeout(() => {
      setShowEmailModal(false);
      setIsEmailSubmitted(false);
      setEmailFormData({ name: '', email: '', company: '', message: 'I want to replicate the automated email marketing playbook' });
    }, 3000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailFormData({
      ...emailFormData,
      [e.target.name]: e.target.value
    });
  };

  const successMetrics = [
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      metric: "300%",
      label: "Increase in Online Bookings",
      description: "From 20 to 80 appointments per month"
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      metric: "75%",
      label: "Reduction in Admin Time",
      description: "Staff focus on treatments, not scheduling"
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      metric: "24/7",
      label: "Customer Support",
      description: "Never miss a potential client again"
    },
    {
      icon: <PhoneIcon className="w-8 h-8" />,
      metric: "90%",
      label: "Customer Satisfaction",
      description: "Clients love the instant responses"
    }
  ];

  const otherSuccessStories = [
    {
      industry: "Dental Practice",
      company: "SmileCare Dental",
      result: "250% increase in appointment bookings",
      description: "Our AI assistant handles appointment scheduling, insurance questions, and treatment information 24/7. Reduced no-shows by 40% with automated reminders.",
      metrics: {
        bookings: "+250%",
        satisfaction: "95%",
        efficiency: "+180%"
      },
      testimonial: "The AI chatbot transformed our practice. We went from manually scheduling 50 appointments per week to 175 automated bookings. Our staff can now focus entirely on patient care.",
      author: "Dr. Sarah Mitchell",
      role: "Practice Owner"
    },
    {
      industry: "Wellness Spa",
      company: "Zen Wellness Retreat",
      result: "400% ROI within 3 months",
      description: "AI-powered customer service handles service inquiries, package recommendations, and membership sign-ups. Increased average booking value by 60%.",
      metrics: {
        revenue: "+400%",
        bookings: "+320%",
        retention: "+85%"
      },
      testimonial: "Our AI assistant doesn't just book appointments - it upsells packages and memberships naturally. Revenue increased by 400% while our team stress decreased significantly.",
      author: "Maria Rodriguez",
      role: "Spa Director"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentMessage < chatMessages.length - 1) {
        setCurrentMessage(prev => prev + 1);
      } else if (chatMessages[currentMessage]?.showBooking && !showBookingForm) {
        setShowBookingForm(true);
      }
    }, chatMessages[currentMessage]?.delay || 2000);

    return () => clearTimeout(timer);
  }, [currentMessage, showBookingForm]);

  const handleBookingComplete = () => {
    setIsCompleted(true);
    setTimeout(() => {
      setCurrentMessage(0);
      setShowBookingForm(false);
      setIsCompleted(false);
    }, 3000);
  };

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-300/10 to-purple-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20 relative z-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 drop-shadow-lg">
                Success Stories
              </span>
              {/* Animated Underline */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                className="mx-auto mt-4 h-1 w-32 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full origin-center"
              >
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 10px rgba(139, 92, 246, 0.5)",
                      "0 0 20px rgba(139, 92, 246, 0.8)",
                      "0 0 10px rgba(139, 92, 246, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"
                />
              </motion.div>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium"
              style={{ lineHeight: '1.7' }}
            >
              Real businesses, real results. See how our AI automation solutions 
              have transformed customer engagement and revenue growth across industries.
            </motion.p>
            
            {/* Glassmorphism Accent Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="mt-12 inline-block"
            >
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-8 py-4 shadow-2xl shadow-violet-500/20">
                <p className="text-violet-700 font-semibold text-lg">
                  🚀 Proven results across 50+ businesses
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study - Beauty Clinic */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Case Study:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                Bella Beauty Clinic
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How AI automation transformed a beauty clinic's booking process and tripled their revenue
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Interactive Chat Demo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-6 shadow-2xl shadow-violet-500/20 border border-violet-100">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-2xl text-white mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <span className="font-semibold">Bella Beauty Clinic AI Assistant</span>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto space-y-4 mb-6">
                  {chatMessages.slice(0, currentMessage + 1).map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className={`flex ${msg.type === 'user' ? 'flex-row-reverse items-start gap-3' : 'items-start gap-3'}`}
                    >
                      {/* Avatar */}
                      <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                        {msg.type === 'user' ? (
                          <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            U
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                            <img 
                              src={chatbotIcon} 
                              alt="Chatbot" 
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                      
                      {/* Message Content */}
                      <div className={`max-w-[75%] px-4 py-3 rounded-xl backdrop-blur-md border ${
                        msg.type === 'user' 
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-300/50' 
                          : 'bg-white/80 text-gray-900 border-white/50 shadow-lg'
                      }`}>
                        {msg.message}
                      </div>
                    </motion.div>
                  ))}

                  {/* Booking Calendar */}
                  {showBookingForm && !isCompleted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg"
                    >
                      <h4 className="font-semibold text-gray-900 mb-3">Available This Week:</h4>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {['Wed 2PM', 'Thu 10AM', 'Thu 3PM', 'Fri 11AM'].map((slot, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleBookingComplete}
                            className="p-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-lg hover:from-pink-200 hover:to-purple-200 transition-all duration-300 font-medium text-sm border border-pink-200"
                          >
                            {slot}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Completion Message */}
                  {isCompleted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 p-4 rounded-2xl border border-green-200 text-center"
                    >
                      <CheckCircleIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="text-green-800 font-medium">
                        ✅ Appointment booked for Thursday 10AM! 
                        <br />Confirmation sent to your email.
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Chat Input (Disabled) */}
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded-xl">
                  <input 
                    type="text" 
                    placeholder="This is a demo - watch the conversation above"
                    disabled
                    className="flex-1 bg-transparent text-gray-500 text-sm"
                  />
                  <button disabled className="text-gray-400">
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Results & Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The Results</h3>
                <div className="grid grid-cols-2 gap-6">
                  {successMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-100 hover:border-violet-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        {metric.icon}
                      </div>
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600 mb-2">
                        {metric.metric}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{metric.label}</h4>
                      <p className="text-gray-600 text-sm">{metric.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-3xl border border-violet-100 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "The AI chatbot completely transformed our business. We went from manually handling 20 bookings per month to 80 automated appointments. Our staff can now focus on what they do best - making our clients beautiful. The ROI was incredible - we saw results within the first week!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    B
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Bella Martinez</h4>
                    <p className="text-violet-600">Owner, Bella Beauty Clinic</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Email Marketing Case Study */}
      <section className="py-20 bg-gradient-to-br from-violet-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Case Study: Elevate Digital —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                From Cold Outreach Struggles to a Consistent Client Pipeline (Live Demo)
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How AI-powered personalization and automated sequences transformed outreach performance
            </p>
          </motion.div>

          {/* Intro + Live Sending Demo */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left: Intro Text Block */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 group"
                >
                  From Manual Outreach to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-fuchsia-500 transition-all duration-300 relative">
                    Predictable Meetings
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 group-hover:w-full transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-lg shadow-purple-500/50"></span>
                  </span>
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  className="text-base md:text-lg leading-relaxed text-slate-700 mb-6 max-w-[62ch] py-4 md:py-6"
                >
                  Stop hand-typing cold emails and chasing follow-ups. Our AI-powered outreach runs at scale with high deliverability, human-sounding first-line personalization, and auto-follow-ups. Replies are instantly labeled and routed to your calendar—so your team talks to buyers, not inboxes.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.3 }}
                  className="space-y-2"
                >
                  {[
                    "AI-written first lines that feel personal",
                    "Sequences that follow up automatically", 
                    "Smart triage → Interested · Pricing · Book a Call",
                    "One-click booking into your calendar"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Live Sending Demo Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl p-6 border border-violet-200 shadow-2xl shadow-violet-500/20 overflow-hidden">
                {/* AI Personalization Toggle */}
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-2xl border border-violet-100 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-semibold text-gray-900">AI Personalization (OpenAI) — ON</span>
                    </div>
                    <SparklesIcon className="w-5 h-5 text-violet-500" />
                  </div>
                  <motion.p
                    key={currentPersonalization}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gray-700 italic text-sm leading-relaxed"
                  >
                    "{personalizations[currentPersonalization]}"
                  </motion.p>
                </div>

                <div className="relative h-64 flex items-center justify-center mb-6">
                  {/* Central Mailbox */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 20px rgba(139, 92, 246, 0.3)",
                        "0 0 40px rgba(139, 92, 246, 0.6)",
                        "0 0 20px rgba(139, 92, 246, 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl relative z-10"
                  >
                    <EnvelopeIcon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Email Particles */}
                  {[...Array(10)].map((_, index) => {
                    const angle = (index * 30) * (Math.PI / 180);
                    const radius = 100;
                    const endX = Math.cos(angle) * radius;
                    const endY = Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={index}
                        className="absolute w-4 h-4 bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-violet-400"
                        style={{
                          left: '50%',
                          top: '50%',
                          marginLeft: '-8px',
                          marginTop: '-8px',
                        }}
                        animate={{
                          x: [0, endX * 0.3, endX],
                          y: [0, endY * 0.3, endY],
                          opacity: [0, 1, 1, 0.8],
                          scale: [0.5, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <EnvelopeIcon className="w-2 h-2 text-violet-600" />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Real-time Counters */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-4 gap-4 text-center"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{emailCount.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">Sent</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{openRate.toFixed(1)}%</div>
                    <div className="text-xs text-gray-600">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{replyRate.toFixed(1)}%</div>
                    <div className="text-xs text-gray-600">Reply Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">{interested}+</div>
                    <div className="text-xs text-gray-600">Interested</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">{meetings}</div>
                    <div className="text-xs text-gray-600">Meetings</div>
                  </div>
                </motion.div>

                <p className="text-xs text-gray-500 text-center mt-4 italic">
                  *All data is simulated for demo purposes.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Real-time Reply Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-violet-100 shadow-lg p-6">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-2 group"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-fuchsia-500 transition-all duration-300 relative">
                  Replies You Actually Want
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 group-hover:w-full transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-lg shadow-purple-500/50"></span>
                </span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="text-sm md:text-base text-slate-500 tracking-wide"
              >
                See how qualified responses roll in, get auto-tagged, and turn into meetings. Example data for demo purposes.
              </motion.p>

              <div className="space-y-3 max-h-64 overflow-hidden">
                {emailReplies.map((reply, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: index === currentReply ? 1 : 0.3,
                      x: index === currentReply ? 0 : -20,
                      scale: index === currentReply ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-100"
                  >
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium mb-1 text-sm">
                        "{reply.message}"
                      </p>
                      <p className="text-sm text-gray-600">
                        — {reply.author}, {reply.company}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${reply.color}`}>
                      {reply.tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-2 group"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-fuchsia-500 transition-all duration-300 relative">
                Performance at a Glance
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 group-hover:w-full transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-lg shadow-purple-500/50"></span>
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed text-slate-700 max-w-[62ch] mx-auto py-4 md:py-6"
            >
              Track every step of the funnel—Sent, Delivered, Opens, Replies, Interested, Meetings—and know exactly what drives pipeline.
            </motion.p>
            
            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {[
                { label: 'Delivered', value: (emailCount * 0.97).toFixed(0).toLocaleString(), color: 'from-green-500 to-emerald-600' },
                { label: 'Open Rate', value: `${openRate.toFixed(1)}%`, color: 'from-blue-500 to-cyan-600' },
                { label: 'Reply Rate', value: `${replyRate.toFixed(1)}%`, color: 'from-purple-500 to-violet-600' },
                { label: 'Positive Replies', value: interested.toString(), color: 'from-orange-500 to-red-600' },
                { label: 'Meetings Booked', value: meetings.toString(), color: 'from-pink-500 to-rose-600' },
                { label: 'Pipeline Value', value: '$420k', color: 'from-yellow-500 to-amber-600' }
              ].map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-r ${kpi.color} text-white p-4 rounded-2xl shadow-lg text-center`}
                >
                  <div className="text-xl font-bold mb-1">{kpi.value}</div>
                  <div className="text-xs opacity-90">{kpi.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Automation Journey Visualization */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Journey Steps */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 group"
                  >
                    Turn Prospects into{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-fuchsia-500 transition-all duration-300 relative">
                      Meetings — Automatically
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 group-hover:w-full transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-lg shadow-purple-500/50"></span>
                    </span>
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                    className="text-base md:text-lg leading-relaxed text-slate-700 mb-6 max-w-[62ch] py-4 md:py-6"
                  >
                    From identifying your ICP to booking time on your calendar, our system handles the heavy lifting. AI personalization boosts replies, sequences keep the conversation going, and auto-labeling routes intent to the right next step.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.3 }}
                    className="space-y-3"
                  >
                    {[
                      "1) Prospect identified",
                      "2) AI personalization", 
                      "3) Send",
                      "4) Auto follow-ups",
                      "5) Reply detected",
                      "6) Auto-label",
                      "7) Meeting booked"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-slate-700 font-medium">{step.substring(3)}</span>
                        {index < 6 && <ArrowRightIcon className="w-4 h-4 text-slate-400" />}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Right: Interactive Journey Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="relative h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl backdrop-blur-sm border border-violet-200 shadow-2xl shadow-violet-500/20 overflow-hidden">
                    {/* Vertical Journey Timeline */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full max-w-md h-full flex flex-col justify-center py-8">
                        {/* Timeline Steps */}
                        {[
                          { 
                            icon: UserGroupIcon, 
                            title: "Prospect Identified", 
                            color: "from-blue-400 to-blue-600",
                            delay: 0 
                          },
                          { 
                            icon: SparklesIcon, 
                            title: "AI Personalization", 
                            color: "from-violet-400 to-purple-600",
                            delay: 0.5,
                            showPreview: true
                          },
                          { 
                            icon: EnvelopeIcon, 
                            title: "Send Email", 
                            color: "from-green-400 to-green-600",
                            delay: 1.0 
                          },
                          { 
                            icon: ClockIcon, 
                            title: "Wait & Auto Follow-Up", 
                            color: "from-orange-400 to-orange-600",
                            delay: 1.5 
                          },
                          { 
                            icon: ChatBubbleLeftRightIcon, 
                            title: "Reply Detected", 
                            color: "from-teal-400 to-teal-600",
                            delay: 2.0 
                          },
                          { 
                            icon: CheckCircleIcon, 
                            title: "Auto-Label", 
                            color: "from-indigo-400 to-indigo-600",
                            delay: 2.5 
                          },
                          { 
                            icon: CalendarDaysIcon, 
                            title: "Meeting Booked", 
                            color: "from-purple-400 to-purple-600",
                            delay: 3.0 
                          }
                        ].map((step, index) => (
                          <div key={index} className="relative flex items-center mb-6 last:mb-0">
                            {/* Connector Line */}
                            {index < 6 && (
                              <motion.div
                                className="absolute left-6 top-12 w-0.5 h-6 bg-gradient-to-b from-violet-300 to-purple-400"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ delay: step.delay + 0.3, duration: 0.5 }}
                              />
                            )}
                            
                            {/* Step Node */}
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: step.delay, duration: 0.5, ease: "easeOut" }}
                              className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg z-10 relative`}
                            >
                              <motion.div
                                animate={{ 
                                  boxShadow: [
                                    "0 0 0 0 rgba(139, 92, 246, 0.4)",
                                    "0 0 0 8px rgba(139, 92, 246, 0)",
                                    "0 0 0 0 rgba(139, 92, 246, 0.4)"
                                  ]
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity, 
                                  delay: step.delay + 1 
                                }}
                                className="w-full h-full rounded-2xl flex items-center justify-center"
                              >
                                <step.icon className="w-6 h-6 text-white" />
                              </motion.div>
                            </motion.div>
                            
                            {/* Step Content */}
                            <div className="ml-4 flex-1">
                              <motion.h4
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: step.delay + 0.2, duration: 0.5 }}
                                className="font-semibold text-violet-700 text-sm"
                              >
                                {step.title}
                              </motion.h4>
                              
                              {/* AI Personalization Preview */}
                              {step.showPreview && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: step.delay + 0.4, duration: 0.5 }}
                                  className="mt-1"
                                >
                                  <motion.p
                                    key={currentPersonalizationIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-xs text-violet-600 italic max-w-xs"
                                  >
                                    "{personalizationExamples[currentPersonalizationIndex]}"
                                  </motion.p>
                                </motion.div>
                              )}
                              
                              {/* Auto-Label Chips */}
                              {step.title === "Auto-Label" && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: step.delay + 0.4, duration: 0.5 }}
                                  className="flex space-x-1 mt-1"
                                >
                                  {['Interested', 'Pricing', 'Book a call'].map((label, i) => (
                                    <motion.span
                                      key={label}
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: step.delay + 0.6 + (i * 0.1), duration: 0.3 }}
                                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                        label === 'Interested' ? 'bg-blue-100 text-blue-700' :
                                        label === 'Pricing' ? 'bg-green-100 text-green-700' :
                                        'bg-purple-100 text-purple-700'
                                      }`}
                                    >
                                      {label}
                                    </motion.span>
                                  ))}
                                </motion.div>
                              )}
                            </div>
                            
                            {/* Email Particles for Send Email step */}
                            {step.title === "Send Email" && (
                              <>
                                {[...Array(3)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute w-4 h-3 bg-white rounded-sm flex items-center justify-center shadow-sm border border-violet-200"
                                    style={{
                                      left: '60px',
                                      top: '6px',
                                    }}
                                    animate={{
                                      x: [0, 100, 200],
                                      y: [0, -10 + (i * 5), -5 + (i * 3)],
                                      opacity: [0, 1, 0],
                                      scale: [0.8, 1, 0.9],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: step.delay + 1 + (i * 0.2),
                                      ease: "easeInOut"
                                    }}
                                  >
                                    <EnvelopeIcon className="w-2 h-2 text-violet-600" />
                                  </motion.div>
                                ))}
                              </>
                            )}
                            
                            {/* Reply Bubble for Reply Detected step */}
                            {step.title === "Reply Detected" && (
                              <motion.div
                                className="absolute w-6 h-6 bg-green-100 rounded-full flex items-center justify-center border border-green-300 shadow-sm"
                                style={{
                                  right: '20px',
                                  top: '3px',
                                }}
                                animate={{
                                  x: [100, 0],
                                  opacity: [0, 1],
                                  scale: [0.6, 1],
                                }}
                                transition={{
                                  duration: 0.8,
                                  repeat: Infinity,
                                  delay: step.delay + 1,
                                  repeatDelay: 2,
                                  ease: "easeOut"
                                }}
                              >
                                <ChatBubbleLeftRightIcon className="w-3 h-3 text-green-600" />
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* KPI Strip */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/20 backdrop-blur-md border border-violet-200/50 rounded-2xl p-4 shadow-lg">
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-violet-700">
                              <motion.span
                                key={emailMetrics.sent}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                              >
                                {emailMetrics.sent?.toLocaleString() || '0'}+
                              </motion.span>
                            </div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-violet-700">
                              <motion.span
                                key={emailMetrics.delivered}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                              >
                                {emailMetrics.delivered?.toLocaleString() || '0'}+
                              </motion.span>
                            </div>
                            <div className="text-xs text-violet-600">Delivered</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-violet-700">
                              <motion.span
                                key={emailMetrics.openRate}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                              >
                                {emailMetrics.openRate}%
                              </motion.span>
                            </div>
                            <div className="text-xs text-violet-600">Open Rate</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-violet-700">
                              <motion.span
                                key={emailMetrics.replyRate}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                              >
                                {emailMetrics.replyRate}%
                              </motion.span>
                            </div>
                            <div className="text-xs text-violet-600">Reply Rate</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-violet-700">
                              <motion.span
                                key={emailMetrics.interested}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                              >
                                {emailMetrics.interested}+
                              </motion.span>
                            </div>
                            <div className="text-xs text-violet-600">Interested</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-violet-700">
                              <motion.span
                                key={emailMetrics.meetings}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                              >
                                {emailMetrics.meetings}
                              </motion.span>
                            </div>
                            <div className="text-xs text-violet-600">Meetings</div>
                          </div>
                        </div>
                        <p className="text-xs text-violet-500 text-center mt-3 italic">
                          All data is simulated for demo purposes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-violet-500 to-purple-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Ready to write your own success story?
            </h2>
            <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with our AI solutions. 
              Your success story could be next.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
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
                className="inline-flex items-center px-12 py-6 bg-white text-violet-600 font-bold text-xl rounded-full hover:shadow-2xl hover:bg-gray-50 transition-all duration-300"
              >
                Start Your Success Story
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

      {/* Email Marketing Modal */}
      {showEmailModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowEmailModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {!isEmailSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Get the Email Marketing Playbook
                  </h2>
                  <p className="text-gray-600">
                    Learn how to replicate this automated outreach system
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={emailFormData.name}
                      onChange={handleEmailChange}
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
                      value={emailFormData.email}
                      onChange={handleEmailChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={emailFormData.company}
                      onChange={handleEmailChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={emailFormData.message}
                      onChange={handleEmailChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 font-semibold text-lg"
                  >
                    Get Playbook Access
                  </motion.button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                <p className="text-gray-600">
                  We'll send you the email marketing playbook shortly.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SuccessStories;