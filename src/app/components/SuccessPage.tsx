import React, {useEffect, useState} from 'react'

const SuccessPage = () => {
  const [counts, setCounts] = useState({
    placements: 0,
    salaryHike: 0,
    partners: 0,
    completion: 0
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts => {
        const newCounts = { ...prevCounts };
        if (newCounts.placements < 5000) newCounts.placements += 50;
        if (newCounts.salaryHike < 85) newCounts.salaryHike += 1;
        if (newCounts.partners < 200) newCounts.partners += 2;
        if (newCounts.completion < 95) newCounts.completion += 1;
        
        if (newCounts.placements >= 5000 && newCounts.salaryHike >= 85 &&
            newCounts.partners >= 200 && newCounts.completion >= 95) {
          clearInterval(interval);
        }
        
        return newCounts;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <section id="successpage" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-black text-white relative overflow-hidden min-h-screen flex items-center">
        {/* Background Pattern - Responsive positioning */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 sm:top-8 md:top-10 left-4 sm:left-8 md:left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-red-500"></div>
          <div className="absolute top-16 sm:top-24 md:top-32 right-8 sm:right-12 md:right-20 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border-2 border-red-500"></div>
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-1/4 w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-red-500"></div>
          <div className="absolute bottom-16 sm:bottom-24 right-1/3 w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full border-2 border-red-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-6 relative z-10 w-full">
          {/* Main Banner Content */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center mb-3 sm:mb-4 md:mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2">
                Get Trained and Placed
              </h1>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8 px-2 leading-relaxed" style={{color: '#e63852'}}>
              Pay Only After You Land The Job!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
              <a href="#contactus" className="w-full sm:w-auto">
                <button 
                  className="w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold border-2 rounded-lg hover:text-black transition-all duration-300 min-h-[50px] sm:min-h-[60px]"
                  style={{
                    borderColor: '#e63852', 
                    color: '#e63852',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#e63852';
                    target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#e63852';
                  }}
                  
                >
                  📌 Register Now
                </button>
              </a>
            </div>
          </div>
          
          {/* Stats Grid - Fully responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center mb-8 sm:mb-10 md:mb-12">
            <div className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-colors duration-300 bg-gray-900/20">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4" style={{color: '#e63852'}}>
                {counts.placements.toLocaleString()}+
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">Successful Placements</p>
            </div>
            <div className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-colors duration-300 bg-gray-900/20">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4" style={{color: '#e63852'}}>
                {counts.salaryHike}%
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">Average Salary Hike</p>
            </div>
            <div className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-colors duration-300 bg-gray-900/20">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4" style={{color: '#e63852'}}>
                {counts.partners}+
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">Partner Companies</p>
            </div>
            <div className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-colors duration-300 bg-gray-900/20">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4" style={{color: '#e63852'}}>
                {counts.completion}%
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">Course Completion Rate</p>
            </div>
          </div>
          
          {/* Additional Trust Indicators - Mobile optimized */}
          <div className="text-center px-2">
            <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed">
              Join thousands of successful professionals who transformed their careers with us
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              <div className="flex items-center text-gray-300 text-sm sm:text-base md:text-lg">
                <span className="text-green-500 mr-2 text-base sm:text-lg">✓</span>
                100% Job Guarantee
              </div>
              <div className="flex items-center text-gray-300 text-sm sm:text-base md:text-lg">
                <span className="text-green-500 mr-2 text-base sm:text-lg">✓</span>
                Expert Mentorship
              </div>
              <div className="flex items-center text-gray-300 text-sm sm:text-base md:text-lg">
                <span className="text-green-500 mr-2 text-base sm:text-lg">✓</span>
                Industry Recognized Certification
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SuccessPage