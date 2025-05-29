import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AlgoMatchFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  const features = [
    {
      icon: "🎯",
      title: "Zero Upfront Cost",
      description: "Join without spending anything",
      color: "#8b5cf6"
    },
    {
      icon: "🛠️", 
      title: "1-Month Targeted Training",
      description: "No fluff, just job-ready learning",
      color: "#f59e0b"
    },
    {
      icon: "🔄",
      title: "Real Industry Alignment", 
      description: "Study material based on current demand",
      color: "#e63852"
    },
    {
      icon: "🧑‍🏫",
      title: "Mentor Support",
      description: "Real people guiding you through real interviews",
      color: "#06b6d4"
    },
    {
      icon: "💼",
      title: "Job-Centric Curriculum",
      description: "Not generalized content. It's designed for placement",
      color: "#8b5cf6"
    },
    {
      icon: "🔐",
      title: "Risk-Free",
      description: "If you don't get placed, you don't pay. Simple.",
      color: "#10b981"
    }
  ];

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      // iPhone (all sizes): 1 item
      if (width < 480) return 1;
      // iPad Mini, larger phones in landscape: 2 items
      if (width < 768) return 2;
      // iPad Air, iPad Pro (portrait): 2 items
      if (width < 1024) return 2;
      // iPad Pro (landscape), Nest Hub: 3 items
      if (width < 1280) return 3;
      // Nest Hub Max and larger screens: 4 items
      return 4;
    }
    return 4;
  };

  useEffect(() => {
    const updateItemsPerView = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      // Reset to first slide if current index is out of bounds
      const maxIndex = Math.ceil(features.length / newItemsPerView) - 1;
      if (currentIndex > maxIndex) {
        setCurrentIndex(0);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [currentIndex, features.length]);

  const maxSlides = Math.ceil(features.length / itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + maxSlides) % maxSlides);
  };

  const getCurrentFeatures = () => {
    const startIndex = currentIndex * itemsPerView;
    return features.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 sm:mb-12">
          <div className="flex-1 mb-6 sm:mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-3 sm:mb-4 leading-tight">
              What Makes Algo Match Different?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
              <strong>Description: </strong>We have reimagined the outdated hire-train-fire cycle with a simple, fair, and guaranteed model that puts the <span className="font-semibold text-black">candidate first</span>.
            </p>
          </div>
          
          {/* Navigation Buttons - Only show if there are multiple slides */}
          {maxSlides > 1 && (
            <div className="flex space-x-3 sm:space-x-4 self-start lg:self-auto">
              <button 
                onClick={prevSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-[#e63852] flex items-center justify-center text-[#e63852] hover:bg-[#e63852] hover:text-white transition-colors duration-300 touch-manipulation"
                aria-label="Previous features"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#e63852] text-white flex items-center justify-center hover:bg-red-600 transition-colors duration-300 touch-manipulation"
                aria-label="Next features"
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Subtitle */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
            Why Algo Match stands out:
          </h3>
        </div>

        {/* Features Cards */}
        <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
          itemsPerView === 1 ? 'grid-cols-1' :
          itemsPerView === 2 ? 'grid-cols-2' :
          itemsPerView === 3 ? 'grid-cols-3' :
          'grid-cols-4'
        }`}>
          {getCurrentFeatures().map((feature, index) => (
            <div 
              key={currentIndex * itemsPerView + index}
              className="transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <div className="text-center p-3 sm:p-4 md:p-6 h-full flex flex-col">
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: feature.color }}
                >
                  <div className="text-lg sm:text-2xl md:text-3xl">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-sm sm:text-lg md:text-xl font-semibold text-black mb-2 sm:mb-3 leading-tight flex-grow-0">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots - Only show if there are multiple slides */}
        {maxSlides > 1 && (
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: maxSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentIndex 
                    ? 'bg-[#e63852] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlgoMatchFeatures;