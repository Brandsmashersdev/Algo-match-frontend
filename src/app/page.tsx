// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
"use client"

import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';

import SuccessPage from './components/SuccessPage';
import CarrerPath from './components/CarrerPath';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Placement  from './components/Placement';
import Whatmakes from './components/Whatmakes';
import FAQ from './components/FAQ';
import Hired from './components/Hired';
import Confused from './components/Confused';
import Howitworks from './components/Howitworks';








const App: React.FC = () => {

  // Animated counter effect

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      <Hero />
      <Placement />
      <SuccessPage />
      <CarrerPath />
      <Hired />
      <Whatmakes />
      <Confused />
      <Howitworks />
      <ContactSection />
      <FAQ />
      <Footer />

    </div>
  );
}

export default App;
