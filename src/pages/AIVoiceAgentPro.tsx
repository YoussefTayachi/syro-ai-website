import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowRightIcon,
  SparklesIcon,
  CogIcon,
  RocketLaunchIcon,
  PlayIcon,
  SpeakerWaveIcon,
  MicrophoneIcon,
  PhoneXMarkIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
  SpeakerXMarkIcon,
  PauseIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const AIVoiceAgentPro = () => {
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isCallActive, setIsCallActive] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);

  const demoScript = [
    { 
      speaker: 'ai', 
      message: "Hello, this is Anna from Syro AI. I'm calling to see if we can book a quick meeting to discuss how we can help your business get more clients. Would you be open to that?", 
      delay: 1000, 
      duration: 10000,
      voice: 'female'
    },
    { 
      speaker: 'prospect', 
      message: "Sure.", 
      delay: 1500, 
      duration: 2000,
      voice: 'male'
    },
    { 
      speaker: 'ai', 
      message: "Great — I have Wednesday at 10 AM or Thursday at 2 PM available. Which works better for you?", 
      delay: 1500, 
      duration: 7000,
      voice: 'female'
    },
    { 
      speaker: 'prospect', 
      message: "Thursday at 2 PM.", 
      delay: 1500, 
      duration: 2500,
      voice: 'male'
    },
    { 
      speaker: 'ai', 
      message: "Perfect. You're booked for Thursday at 2 PM. You'll receive a confirmation email shortly. Have a great day!", 
      delay: 1500, 
      duration: 8000,
      voice: 'female'
    },
    { 
      speaker: 'prospect', 
      message: "Thanks, you too.", 
      delay: 1500, 
      duration: 2500,
      voice: 'male'
    }
  ];

  // Text-to-Speech functionality
  const speakMessage = (message: string, voice: 'male' | 'female') => {
    if (!audioEnabled || !('speechSynthesis' in window)) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(message);
    
    // Configure voice settings
    const voices = window.speechSynthesis.getVoices();
    
    // Try to find appropriate voices
    let selectedVoice = null;
    if (voice === 'female') {
      selectedVoice = voices.find(v => 
        v.name.toLowerCase().includes('female') || 
        v.name.toLowerCase().includes('samantha') ||
        v.name.toLowerCase().includes('karen') ||
        v.name.toLowerCase().includes('susan') ||
        (v.name.toLowerCase().includes('google') && v.name.toLowerCase().includes('us'))
      );
    } else {
      selectedVoice = voices.find(v => 
        v.name.toLowerCase().includes('male') || 
        v.name.toLowerCase().includes('daniel') ||
        v.name.toLowerCase().includes('alex') ||
        v.name.toLowerCase().includes('fred')
      );
    }

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // Configure speech parameters
    utterance.rate = voice === 'ai' ? 0.9 : 0.95; // Slightly slower for AI, natural for prospect
    utterance.pitch = voice === 'female' ? 1.1 : 0.9;
    utterance.volume = 0.8;

    // Event handlers
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    speechSynthRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };
  const startDemo = () => {
    setShowDemoPopup(true);
    setCurrentMessageIndex(0);
    setIsCallActive(true);
    setShowCTA(false);
    setIsPlaying(true);
    setIsPaused(false);
    
    // Clear any existing timeouts
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    timeoutRefs.current = [];
    
    // Stop any ongoing speech
    stopSpeech();
    
    // Start the conversation
    setTimeout(() => {
      playNextMessage(0);
    }, 500);
  };

  const playNextMessage = (index: number) => {
    if (index < demoScript.length && !isPaused) {
      setCurrentMessageIndex(index + 1);
      
      // Speak the message if audio is enabled
      if (audioEnabled) {
        // Wait for the delay before speaking
        const speakTimeout = setTimeout(() => {
          speakMessage(demoScript[index].message, demoScript[index].voice);
        }, demoScript[index].delay);
        timeoutRefs.current.push(speakTimeout);
      }
      
      // Schedule next message with proper timing
      const timeout = setTimeout(() => {
        playNextMessage(index + 1);
      }, demoScript[index].duration + demoScript[index].delay);
      
      timeoutRefs.current.push(timeout);
    } else if (index >= demoScript.length) {
      // Call ended
      setIsCallActive(false);
      setIsPlaying(false);
      stopSpeech();
      setTimeout(() => {
        setShowCTA(true);
      }, 1000);
    }
  };

  const pauseDemo = () => {
    setIsPaused(true);
    setIsPlaying(false);
    stopSpeech();
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    timeoutRefs.current = [];
  };

  const resumeDemo = () => {
    if (currentMessageIndex < demoScript.length) {
      setIsPaused(false);
      setIsPlaying(true);
      playNextMessage(currentMessageIndex);
    }
  };

  const replayDemo = () => {
    setCurrentMessageIndex(0);
    setIsCallActive(true);
    setShowCTA(false);
    setIsPlaying(true);
    setIsPaused(false);
    
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    timeoutRefs.current = [];
    stopSpeech();
    
    setTimeout(() => {
      playNextMessage(0);
    }, 500);
  };

  const closeDemo = () => {
    setShowDemoPopup(false);
    setCurrentMessageIndex(0);
    setIsCallActive(false);
    setShowCTA(false);
    setIsPlaying(false);
    setIsPaused(false);
    stopSpeech();
    
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    timeoutRefs.current = [];
  };

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    if (audioEnabled) {
      stopSpeech();
    }
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
      stopSpeech();
    };
  }, []);

  // Load voices when component mounts
  useEffect(() => {
    if ('speechSynthesis' in window) {
      // Load voices
      const loadVoices = () => {
        window.speechSynthesis.getVoices();
      };
      
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }, []);
  const painPoints = [
    {
      icon: <PhoneXMarkIcon className="w-12 h-12" />,
      title: "Cold calling is time-consuming and ineffective",
      description: "Your sales team spends hours on calls with low conversion rates"
    },
    {
      icon: <ClockIcon className="w-12 h-12" />,
      title: "Limited calling hours restrict outreach",
      description: "Human agents can only work business hours, missing global opportunities"
    },
    {
      icon: <ExclamationTriangleIcon className="w-12 h-12" />,
      title: "Inconsistent messaging hurts conversion",
      description: "Different sales reps deliver different pitches, reducing effectiveness"
    }
  ];

  const benefits = [
    {
      icon: <PhoneIcon className="w-8 h-8" />,
      title: "Natural voice conversations",
      description: "AI speaks naturally and handles objections like a human sales rep"
    },
    {
      icon: <CalendarDaysIcon className="w-8 h-8" />,
      title: "Automatic meeting booking",
      description: "Books qualified meetings directly into your calendar system"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "CRM integration",
      description: "Automatically logs calls, notes, and lead data into your existing CRM"
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "24/7 calling capability",
      description: "Makes calls around the clock across different time zones"
    }
  ];

  const callScenarios = [
    {
      title: "Lead Qualification",
      description: "AI identifies decision-makers and qualifies prospects",
      icon: "🎯",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      title: "Appointment Setting",
      description: "Books meetings with qualified prospects automatically",
      icon: "📅",
      gradient: "from-purple-500 to-fuchsia-600"
    },
    {
      title: "Follow-up Calls",
      description: "Nurtures leads with personalized follow-up sequences",
      icon: "🔄",
      gradient: "from-fuchsia-500 to-pink-600"
    },
    {
      title: "Survey & Feedback",
      description: "Collects customer feedback and market research data",
      icon: "📊",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-violet-50/50 via-white to-purple-50/50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-fuchsia-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-fuchsia-400/10 to-violet-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
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
                className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-violet-200/50 shadow-lg mb-8"
              >
                <SparklesIcon className="w-5 h-5 text-violet-600 mr-2" />
                <span className="text-violet-700 font-semibold text-sm">AI-Powered Voice Calling</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  AI that calls prospects and books meetings
                </span>{' '}
                automatically.
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg text-slate-700 mb-12 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Our AI Voice Agent Pro™ makes natural phone calls, qualifies prospects, handles objections, 
                and books meetings – scaling your sales team 24/7 without human intervention.
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
                    className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    onClick={startDemo}
                    className="group inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-md border border-violet-200/50 text-violet-600 font-semibold rounded-2xl hover:bg-white/90 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
                  >
                    <PlayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Listen to Demo Call
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
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-3xl border border-violet-200/50 shadow-2xl shadow-violet-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Central Phone Icon */}
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
                      className="w-32 h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50 relative z-10"
                    >
                      <PhoneIcon className="w-16 h-16 text-white" />
                    </motion.div>
                    
                    {/* Animated Voice Waves */}
                    {[...Array(6)].map((_, index) => {
                      const angle = (index * 60) * (Math.PI / 180);
                      const radius = 150;
                      const endX = Math.cos(angle) * radius;
                      const endY = Math.sin(angle) * radius;
                      
                      return (
                        <div key={index}>
                          {/* Voice Wave Animation */}
                          <motion.div
                            className="absolute w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-violet-400"
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
                            <SpeakerWaveIcon className="w-4 h-4 text-violet-600" />
                          </motion.div>
                          
                          {/* Prospect Icons */}
                          <motion.div
                            className="absolute w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg border-2 border-gray-300"
                            style={{
                              left: '50%',
                              top: '50%',
                              marginLeft: '-32px',
                              marginTop: '-32px',
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
                              delay: index * 0.3 + 3.5,
                              repeatDelay: 2,
                            }}
                          >
                            <UserGroupIcon className="w-7 h-7 text-gray-600" />
                            
                            {/* Meeting Booked Icon */}
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
                                delay: index * 0.3 + 4,
                                repeatDelay: 3,
                              }}
                            >
                              <CalendarDaysIcon className="w-4 h-4 text-white" />
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
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-violet-200/50 shadow-lg mb-8">
              <PhoneXMarkIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">Common Challenges</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Are you struggling with these{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">sales challenges?</span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              These problems are limiting your sales potential and costing you deals
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
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-violet-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-violet-500/20 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-300">{point.title}</h3>
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
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-4">
              Our AI Voice Agent Pro™ solves these problems with intelligent automation!
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
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-violet-200/50 shadow-lg mb-8">
              <SparklesIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">Our Solution</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Our AI Voice Agent –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                intelligent calling
              </span>{' '}
              that converts prospects into meetings
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Advanced AI that handles complex sales conversations and books qualified meetings
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
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-violet-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-violet-500/20 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    className="w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-300">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Scenarios Section */}
      <section className="py-24 bg-gradient-to-br from-violet-50/50 via-white to-purple-50/50 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-violet-200/50 shadow-lg mb-8">
              <MicrophoneIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">Call Scenarios</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Smart calling strategies for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                maximum conversion
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Proven conversation flows that drive engagement and book meetings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {callScenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative text-center"
              >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-violet-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-violet-500/20 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-6">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                    className="text-4xl mb-4"
                  >
                    {scenario.icon}
                  </motion.div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-300">{scenario.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{scenario.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-violet-200/50 shadow-lg mb-8">
              <CogIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">How It Works</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Automated calling workflow –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                4 steps to booked meetings
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              From prospect identification to meeting confirmation – our proven process delivers results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Prospect Research",
                description: "AI analyzes your ideal customer profile and identifies qualified prospects",
                icon: <MagnifyingGlassIcon className="w-16 h-16" />
              },
              {
                step: "2",
                title: "Natural Conversation",
                description: "AI makes calls with natural speech, handles objections, and qualifies leads",
                icon: <PhoneIcon className="w-16 h-16" />
              },
              {
                step: "3",
                title: "Meeting Scheduling",
                description: "Books qualified meetings directly into your calendar system",
                icon: <CalendarDaysIcon className="w-16 h-16" />
              },
              {
                step: "4",
                title: "CRM Integration",
                description: "Logs all call data, notes, and lead information automatically",
                icon: <ChartBarIcon className="w-16 h-16" />
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
                <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-violet-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-violet-500/20 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative p-8">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-24 h-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-2xl shadow-violet-500/50 group-hover:shadow-3xl group-hover:shadow-violet-500/60 transition-all duration-300"
                    >
                      {process.icon}
                    </motion.div>
                    
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-fuchsia-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {process.step}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-300">{process.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{process.description}</p>
                  
                  {index < 3 && (
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
      <section className="py-24 bg-gradient-to-br from-violet-500 to-fuchsia-500 relative overflow-hidden">
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
              Ready to scale your sales with AI calling?
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
                className="inline-flex items-center px-12 py-6 bg-white text-violet-600 font-bold text-xl rounded-2xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300"
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

      {/* Demo Call Popup */}
      <AnimatePresence>
        {showDemoPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeDemo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl shadow-violet-500/30 max-w-2xl w-full max-h-[80vh] overflow-hidden border border-violet-200/50 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Subtle Gold Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
              
              {/* Header */}
              <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-6 text-white relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={isCallActive ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-4 h-4 bg-white rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold">AI Voice Agent Demo</h3>
                      <p className="text-violet-100 text-sm">
                        {isCallActive ? 'Call in progress...' : showCTA ? 'Call completed' : 'Connecting...'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* Audio Controls */}
                    <div className="flex items-center space-x-2">
                      {isPlaying ? (
                        <button
                          onClick={pauseDemo}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <PauseIcon className="w-5 h-5" />
                        </button>
                      ) : (
                        <button
                          onClick={resumeDemo}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <PlayIcon className="w-5 h-5" />
                        </button>
                      )}
                      <button
                        onClick={replayDemo}
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ArrowPathIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={toggleAudio}
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        {audioEnabled ? (
                          <SpeakerWaveIcon className="w-5 h-5" />
                        ) : (
                          <SpeakerXMarkIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <button
                      onClick={closeDemo}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Audio Status Indicator */}
                {audioEnabled && (
                  <div className="px-6 py-2 bg-violet-50/50 border-b border-violet-100">
                    <div className="flex items-center justify-center space-x-2">
                      <motion.div
                        animate={isSpeaking ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="w-2 h-2 bg-violet-500 rounded-full"
                      />
                      <span className="text-sm text-violet-700 font-medium">
                        {isSpeaking ? 'AI Speaking...' : 'Audio Enabled'}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Interface */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {demoScript.slice(0, currentMessageIndex).map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`flex ${msg.speaker === 'prospect' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      msg.speaker === 'ai' 
                        ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <motion.div 
                          animate={isSpeaking && index === currentMessageIndex - 1 ? { scale: [1, 1.3, 1] } : {}}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="w-2 h-2 bg-current rounded-full opacity-60"
                        />
                        <span className="text-xs opacity-75 font-medium">
                          {msg.speaker === 'ai' ? 'Anna (AI Agent)' : 'Prospect'}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">{msg.message}</p>
                    </div>
                  </motion.div>
                ))}
                
                {isCallActive && (
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex justify-center"
                  >
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* CTA Section */}
              {showCTA && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-gradient-to-r from-violet-50 to-fuchsia-50 border-t border-violet-100"
                >
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      See how easy this is?
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Get your own AI Voice Agent today and start booking meetings automatically.
                    </p>
                    <Link
                      to="/kontakt"
                      onClick={closeDemo}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
                    >
                      Book Free Strategy Call
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIVoiceAgentPro;