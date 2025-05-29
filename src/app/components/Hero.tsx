import React, { useState } from 'react'

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="/AlgoLogo.png"
                alt="Algo Match Logo"
                className="h-8 w-16 sm:h-10 sm:w-20 md:h-12 md:w-24 lg:h-15 lg:w-30 object-cover"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-6 2xl:space-x-8">
            <a href="#home" className="text-gray-600 hover:text-red-500 transition-all duration-300 font-medium relative group text-sm lg:text-base">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#placement" className="text-gray-600 hover:text-red-500 transition-all duration-300 font-medium relative group text-sm lg:text-base">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#successpage" className="text-gray-600 hover:text-red-500 transition-all duration-300 font-medium relative group text-sm lg:text-base">
              Pathway
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#courses" className="text-gray-600 hover:text-red-500 transition-all duration-300 font-medium relative group text-sm lg:text-base">
              What we offer
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#Howitworks" className="text-gray-600 hover:text-red-500 transition-all duration-300 font-medium relative group text-sm lg:text-base">
              How it works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a href="#contactus">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-2.5 rounded-full shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 font-medium whitespace-nowrap text-xs sm:text-sm lg:text-base hidden sm:block">
                Enroll Now
              </button>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden text-gray-600 hover:text-red-500 transition-colors p-1"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <div className={`xl:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t border-gray-100`}>
          <nav className="px-3 sm:px-4 lg:px-6 py-4 space-y-3 sm:space-y-4">
            <a href="#home" className="block text-gray-600 hover:text-red-500 transition-colors py-2 font-medium text-sm sm:text-base">Home</a>
            <a href="#placement" className="block text-gray-600 hover:text-red-500 transition-colors py-2 font-medium text-sm sm:text-base">Services</a>
            <a href="#successpage" className="block text-gray-600 hover:text-red-500 transition-colors py-2 font-medium text-sm sm:text-base">Pathway</a>
            <a href="#courses" className="block text-gray-600 hover:text-red-500 transition-colors py-2 font-medium text-sm sm:text-base">What we offer</a>
            <a href="#Howitworks" className="block text-gray-600 hover:text-red-500 transition-colors py-2 font-medium text-sm sm:text-base">How it works</a>
            <a href="#contactus">
              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium mt-4 text-sm sm:text-base">
                Enroll Now
              </button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 sm:pt-20 lg:pt-24 relative overflow-hidden bg-white">
        {/* Subtle Background Elements - Responsive */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-3 sm:opacity-5">
            <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse"></div>
            <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-red-400 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-40 w-36 h-36 sm:w-72 sm:h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Elegant Grid Pattern - Responsive */}
        <div className="absolute inset-0 z-10 opacity-30 sm:opacity-50">
  <div
    className="w-full h-full sm:bg-[length:40px_40px]"
    style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)`,
      backgroundSize: '20px 20px'
    }}
  ></div>
</div>


        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-20 flex items-center min-h-screen py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center w-full">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
              <div className="space-y-6 sm:space-y-8">
                {/* Badge - Responsive */}
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-red-50 border border-red-100 rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  <span className="text-red-600 text-xs sm:text-sm font-semibold tracking-wide">PAY ONLY AFTER PLACEMENT</span>
                </div>

                {/* Main Heading - Highly Responsive */}
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight">
                  Welcome to
                  <span className="block bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mt-1 sm:mt-2">
                    Algo Match
                  </span>
                  <span className="block text-gray-700 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light mt-1 sm:mt-2">
                    Your Guaranteed Path to an IT Job
                  </span>
                </h1>

                {/* Description - Responsive */}
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed max-w-full lg:max-w-2xl font-light px-2 sm:px-0">
                  We're fixing what's broken in the traditional hiring process. No more uncertainty. No more layoff loops. Just pure opportunity. With Algo Match, you only pay <span className="font-semibold text-red-600">after</span> you're placed. Simple, fair, and built for your success.
                </p>
              </div>

              {/* CTA Button - Responsive */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 justify-center lg:justify-start">
                <a href="#contactus"> 
                  <button className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 font-semibold whitespace-nowrap relative overflow-hidden text-sm sm:text-base w-full sm:w-auto">
                    <span className="relative z-10 tracking-wide">Contact Us</span>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </button>
                </a>
              </div>
            </div>

            {/* Visual Element - Adaptive Display */}
            <div className="relative mt-8 sm:mt-12 lg:mt-0 block">
              <div className="relative">
                {/* Main Card - Responsive Sizing */}
                <div className="w-full h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 overflow-hidden relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
                  <div className="p-6 sm:p-8 lg:p-12 h-full flex items-center justify-center relative z-10">
                    <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6">
                      {/* Icon - Responsive */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                      </div>
                      {/* Text - Responsive */}
                      <div className="space-y-1 sm:space-y-2">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Start Risk-Free</h3>
                        <p className="text-sm sm:text-base text-gray-600 font-light">Pay only after you get placed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Elements - Responsive */}
                <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-red-100 rounded-xl sm:rounded-2xl rotate-12 shadow-lg"></div>
                <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-red-50 rounded-full shadow-lg"></div>
                <div className="absolute top-1/2 -right-2 sm:-right-4 lg:-right-8 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-1 sm:-left-2 lg:-left-4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-red-400 rounded-full shadow-lg animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Device-specific optimizations with CSS */}
        <style jsx>{`
          /* iPhone SE and small devices */
          @media (max-width: 375px) {
            .container {
              padding-left: 12px;
              padding-right: 12px;
            }
          }
          
          /* iPad Mini specific */
          @media (min-width: 768px) and (max-width: 820px) and (orientation: portrait) {
            .grid {
              gap: 3rem;
            }
          }
          
          /* iPad Air/Pro Portrait */
          @media (min-width: 820px) and (max-width: 1024px) and (orientation: portrait) {
            .grid {
              gap: 4rem;
            }
          }
          
          /* Nest Hub */
          @media (min-width: 1024px) and (max-width: 1024px) and (orientation: landscape) {
            .min-h-screen {
              min-height: 600px;
            }
          }
          
          /* Nest Hub Max */
          @media (min-width: 1280px) and (max-width: 1280px) and (orientation: landscape) {
            .min-h-screen {
              min-height: 800px;
            }
          }
          
          /* Custom responsive utilities */
          @media (min-width: 475px) {
            .xs\\:text-3xl {
              font-size: 1.875rem;
              line-height: 2.25rem;
            }
            .xs\\:text-2xl {
              font-size: 1.5rem;
              line-height: 2rem;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default Hero