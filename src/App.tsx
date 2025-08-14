import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SyroAcquisitionSystem from './pages/SyroAcquisitionSystem';
import AICustomerExperienceAssistant from './pages/AICustomerExperienceAssistant';
import AIVoiceAgentPro from './pages/AIVoiceAgentPro';
import SocialGrowthBooster from './pages/SocialGrowthBooster';
import About from './pages/About';
import Contact from './pages/Contact';
import SuccessStories from './pages/SuccessStories';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/syro-acquisition-system" element={<SyroAcquisitionSystem />} />
          <Route path="/ai-customer-experience-assistant" element={<AICustomerExperienceAssistant />} />
          <Route path="/ai-voice-agent-pro" element={<AIVoiceAgentPro />} />
          <Route path="/social-growth-booster" element={<SocialGrowthBooster />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;