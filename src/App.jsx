import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import FeatureSection from './Components/FeatureSection';
import Workflow from './Components/Workflow';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';



const App = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
      </div>
      <FeatureSection/>
      <Workflow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
      
    </>
  )
}

export default App
