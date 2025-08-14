import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  SparklesIcon,
  StarIcon
} from '@heroicons/react/24/outline';

import beratImage from "../assets/images/Berat_Foto_Website.JPG";
import youssefImage from "../assets/images/FOTO LEBENSLAUF.jpg";
import dashboardImage from "../assets/images/Dashboard-Instanly-Syro.png";

const About = () => {
  const values = [
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Innovation",
      description: "We rely on cutting-edge AI technologies and continuously develop new solution approaches for our customers."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Trust",
      description: "Data protection and legal security are our top priorities. All solutions are GDPR compliant."
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Results",
      description: "Measurable success is our driving force. We continuously optimize for maximum ROI for our customers."
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Partnership",
      description: "We see ourselves as long-term partners of our customers and accompany them on their growth path."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "TechFlow Solutions",
      role: "CEO",
      quote: "Syro-AI transformed our lead generation completely. We went from 20 leads per month to over 200 qualified prospects. The ROI has been incredible.",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Weber",
      company: "Digital Marketing Pro",
      role: "Marketing Director",
      quote: "The AI Customer Experience Assistant handles 80% of our customer inquiries automatically. Our team can now focus on high-value tasks while customer satisfaction increased by 40%.",
      avatar: "👨‍💻"
    },
    {
      name: "Jennifer Chen",
      company: "Growth Ventures",
      role: "Founder",
      quote: "Their Social Growth Booster helped us scale our social media presence across 6 platforms. We're now generating 3x more leads from social channels.",
      avatar: "👩‍🚀"
    },
    {
      name: "David Rodriguez",
      company: "SalesForce Elite",
      role: "Sales Manager",
      quote: "The AI Voice Agent Pro books more meetings in a week than our entire sales team used to book in a month. It's like having 10 additional sales reps working 24/7.",
      avatar: "👨‍💼"
    },
    {
      name: "Lisa Thompson",
      company: "E-commerce Plus",
      role: "Operations Manager",
      quote: "Implementation was seamless and results came immediately. Within 30 days, we saw a 150% increase in qualified leads and our conversion rate doubled.",
      avatar: "👩‍💻"
    },
    {
      name: "Robert Kim",
      company: "Consulting Partners",
      role: "Managing Partner",
      quote: "Syro-AI doesn't just provide tools, they provide a complete growth strategy. Our revenue increased by 250% in the first quarter after implementation.",
      avatar: "👨‍🎯"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-violet-50/80 via-white to-purple-50/80 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-8">
              <SparklesIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">About Our Company</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              About 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600">
                {' '}Syro-AI
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe that intelligent automation not only increases revenue, 
              but also relieves teams and makes companies future-ready.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl"></div>
              <div className="relative p-8">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
At Syro-AI, we’re on a mission to become the global leader in business automation – turning repetitive tasks into effortless, intelligent processes. We believe business should be exciting and growth-driven, not slowed down by manual work.

We help companies of all sizes simplify operations, boost revenue, and free their teams to focus on what truly matters: innovation, strategy, and customers.
                
By combining advanced AI technology with real business know-how, we deliver measurable results and make running a business as seamless – and enjoyable – as it should be.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="w-full h-80 rounded-3xl overflow-hidden border border-violet-100 shadow-2xl shadow-violet-500/30 hover:shadow-3xl hover:shadow-violet-500/40 transition-all duration-500">
                <img 
                  src={dashboardImage} 
                  alt="Syro AI Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-gradient-to-br from-white via-violet-50/30 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-8">
              <UserGroupIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">Leadership Team</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600">
                Founders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passion for technology and business success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="text-center group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/5 to-pink-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-10">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-600 rounded-full blur-lg opacity-30 scale-110 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-3xl group-hover:shadow-violet-500/30 transition-all duration-500">
                  <img 
                    src={youssefImage} 
                    alt="Youssef Tayachi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-2">Youssef Tayachi</h3>
              <p className="text-violet-600 font-medium mb-4">Co-Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed">
                Expert in AI strategies and business development. Youssef brings over 5 years 
                of experience in automating business processes and has already 
                accompanied dozens of companies in their digital transformation.
              </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="text-center group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/5 to-pink-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-10">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-600 rounded-full blur-lg opacity-30 scale-110 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-3xl group-hover:shadow-violet-500/30 transition-all duration-500">
                  <img 
                    src={beratImage} 
                    alt="Berat Günes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-2">Berat Günes</h3>
              <p className="text-violet-600 font-medium mb-4">Co-Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed">
                Technical leader with focus on AI development and system integration. 
                Berat is responsible for the technical implementation of our AI solutions and ensures 
                the highest quality and security in all projects.
              </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              <LightBulbIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">Core Values</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide us in everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/5 to-pink-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl group-hover:shadow-violet-500/30 transition-all duration-300"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-4 group-hover:from-violet-500 group-hover:to-pink-600 transition-all duration-300">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-white via-violet-50/30 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-8">
              <StarIcon className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-700 font-semibold text-sm">Client Testimonials</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real results from real businesses that trusted us with their growth
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/5 to-pink-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-violet-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  
                  <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic font-medium">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-violet-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
                </div>
              </motion.div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-violet-500 scale-125' 
                      : 'bg-gray-300 hover:bg-violet-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Want to achieve similar results? Let's talk!
            </h2>
            <p className="text-xl lg:text-2xl text-violet-100 mb-12 leading-relaxed">
              Let's find out together how AI can take your business 
              to the next level.
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

export default About;