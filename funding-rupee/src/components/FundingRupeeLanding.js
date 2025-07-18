import React, { useState } from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from "../components/footer.jsx";
import WildfireAlert from "../components/alert.jsx"
import Features from "../components/features.jsx"
import Hero from "../components/hero.jsx"
import CTA from "../components/cta.jsx"
import FeaturedCampaigns from "../components/campaigns.jsx"
import { campaigns } from '../components/campaigns.jsx';


const FundingRupeeLanding = () => {
  const [activeCard, setActiveCard] = useState(null);
  return (
    
     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navbar /> 
      {/* Hero Section */}
      <Hero />
      
      {/* WildfireAlert */}
      <WildfireAlert />
      
      {/* Features Section */}
      <Features />
     
      {/* Featured Campaigns */}
      {/* <FeaturedCampaigns /> */}
      <FeaturedCampaigns 
        campaigns={campaigns} 
        setActiveCard={setActiveCard} 
         activeCard={activeCard} 
/>

      {/* CTA Section */}
      <CTA />
     
      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default FundingRupeeLanding;