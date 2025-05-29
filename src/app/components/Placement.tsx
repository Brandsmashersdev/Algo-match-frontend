
import { Shield } from "lucide-react";


import React, { useState } from 'react';

interface Feature {
  title: string;
  icon: React.ReactElement;
  description: string;
}


interface AlgoMatchPlacementSectionProps {
  // Add any props here if needed in the future
}

const AlgoMatchPlacementSection: React.FC<AlgoMatchPlacementSectionProps> = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  
  // Custom color theme
  const primaryColor: string = "#e63852";
  const secondaryColor: string = "#000000";
  
  const features: Feature[] = [
    {
      title: "No Upfront Payment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
          <path d="M12 1v6m0 10v6m8-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8 12h8"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      description: "You don't pay anything unless you're placed. Zero financial risk on your part."
    },
    {
      title: "Real-Time Client Alignment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
          <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
          <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
        </svg>
      ),
      description: "We align your training with real-time client needs, ensuring you learn exactly what employers want."
    },
    {
      title: "Complete Skill Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      description: "You get soft skills + technical coaching + live interview support - everything you need to succeed."
    },
    {
      title: "Risk-Free Guarantee",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      ),
      description: "If you're not hired, you walk away without any financial obligation. We believe in our results."
    },
    {
      title: "Bhopal-Focused Program",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      description: "100% focus on Bhopal-based candidates, batch of 2020 or earlier. Local opportunities, local success."
    },
  ];

  const handleFeatureClick = (index: number): void => {
    setActiveFeature(index);
  };

  const handleFeatureHover = (index: number): void => {
    setActiveFeature(index);
  };

  return (
    <div id="placement" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Modern geometric background elements - Responsive */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-5">
        <div className="w-full h-full bg-black transform rotate-45 rounded-xl sm:rounded-2xl md:rounded-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 opacity-5">
        <div className="w-full h-full transform rotate-12 rounded-full" style={{ backgroundColor: primaryColor }}></div>
      </div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 transform rotate-45 opacity-20" style={{ backgroundColor: primaryColor }}></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full opacity-15" style={{ backgroundColor: '#000000' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Fully Responsive */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
            <span className="text-black">Not Another </span>
            <span style={{ color: primaryColor }}>Coaching Program.</span>
            <br />
            <span className="text-black">This is a </span>
            <span style={{ color: primaryColor }}>Placement.</span>
          </h1>
          
          <div className="max-w-4xl mx-auto px-2">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed font-medium">
              Most training programs give you content. <strong style={{ color: primaryColor }}>We give you a career.</strong>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Algo Match is not another upskilling course. It's a <strong>one-month, results-driven program</strong> designed to land you a job—without charging you a single rupee upfront.
            </p>
          </div>
        </div>
        
        {/* Difference Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 md:mb-12 px-2">
            Here's how we're <span style={{ color: primaryColor }}>different:</span>
          </h2>
        </div>
        
        {/* Mobile & Small Tablet Feature Display */}
        <div className="lg:hidden mb-8 sm:mb-12 md:mb-16">
          {/* Feature Navigation Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 pb-2 overflow-x-auto">
            {features.map((_, index: number) => (
              <button
                key={index}
                onClick={() => handleFeatureClick(index)}
                className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all font-bold text-xs sm:text-sm md:text-base ${
                  activeFeature === index 
                    ? 'text-white shadow-lg transform scale-105' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
                style={activeFeature === index ? { backgroundColor: primaryColor } : {}}
                type="button"
                aria-label={`Feature ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          {/* Active Feature Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border-l-4 sm:border-l-6 md:border-l-8 mx-2" style={{ borderColor: primaryColor }}>
            <div className="flex items-start mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 text-white flex-shrink-0" style={{ backgroundColor: primaryColor }}>
                {features[activeFeature].icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2 leading-tight">{features[activeFeature].title}</h4>
                <div className="w-8 sm:w-10 md:w-12 h-1 mb-2 sm:mb-3" style={{ backgroundColor: primaryColor }}></div>
              </div>
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{features[activeFeature].description}</p>
          </div>
        </div>
        
        {/* Desktop Feature Display */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 lg:gap-6">
            {features.map((feature: Feature, index: number) => (
              <div 
                key={index}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105`}
                onMouseEnter={() => handleFeatureHover(index)}
                onClick={() => handleFeatureClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleFeatureClick(index);
                  }
                }}
                aria-label={feature.title}
              >
                <div className={`relative bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl transition-all duration-500 h-full shadow-lg border-2 ${
                  activeFeature === index 
                    ? 'shadow-2xl transform -translate-y-4 border-opacity-100' 
                    : 'hover:shadow-xl border-gray-100 hover:border-gray-200'
                }`}
                style={activeFeature === index ? { borderColor: primaryColor } : {}}>
                  
                  {/* Feature number badge */}
                  <div className={`absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-bold text-xs lg:text-sm transition-all ${
                    activeFeature === index ? 'text-white scale-110' : 'bg-gray-900 text-white'
                  }`}
                  style={activeFeature === index ? { backgroundColor: primaryColor } : {}}>
                    {index + 1}
                  </div>
                  
                  <div className="mb-4 lg:mb-6">
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center transition-all ${
                      activeFeature === index 
                        ? 'text-white transform scale-110' 
                        : 'bg-gray-50 text-gray-600 group-hover:bg-gray-100'
                    }`}
                    style={activeFeature === index ? { backgroundColor: primaryColor } : {}}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h4 className={`text-base lg:text-lg font-bold mb-2 lg:mb-3 transition-colors leading-tight ${
                    activeFeature === index ? '' : 'text-black group-hover:text-gray-900'
                  }`}
                  style={activeFeature === index ? { color: primaryColor } : {}}>
                    {feature.title}
                  </h4>
                  
                  <div className={`w-8 lg:w-12 h-1 mb-3 lg:mb-4 transition-all ${
                    activeFeature === index ? '' : 'bg-gray-200'
                  }`}
                  style={activeFeature === index ? { backgroundColor: primaryColor } : {}}></div>
                  
                  <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  // At the end of Placement.tsx
  
}
export default AlgoMatchPlacementSection;