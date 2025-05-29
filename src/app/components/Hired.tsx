import React from 'react'

const AlgoMatchSection = () => {
  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            From Stuck to Hired—in Just{' '}
            <span style={{color: '#e63852'}}>One Month</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Whether you're unemployed, underpaid, or stuck in the wrong job—Algo Match is your way out. 
            Our 4-week curated program is designed to sharpen your strengths and plug your gaps. 
            You'll be interview-ready from day one.
          </p>
        </div>

        {/* Program Coverage */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12 px-2">
            What we cover in{' '}
            <span style={{color: '#e63852'}}>1 Month</span>
          </h3>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Communication Skills */}
            <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-0 sm:mr-3">💬</span>
                <h4 className="text-lg sm:text-xl font-bold leading-tight" style={{color: '#e63852'}}>
                  Communication Skills Training
                </h4>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Speak with confidence in interviews
              </p>
            </div>

            {/* Technical Enhancement */}
            <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-0 sm:mr-3">🧠</span>
                <h4 className="text-lg sm:text-xl font-bold leading-tight" style={{color: '#e63852'}}>
                  Technical Enhancement
                </h4>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Revise core subjects and key concepts
              </p>
            </div>

            {/* Mock Interviews */}
            <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-0 sm:mr-3">📄</span>
                <h4 className="text-lg sm:text-xl font-bold leading-tight" style={{color: '#e63852'}}>
                  Mock Interviews
                </h4>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Prepare with real-time practice rounds
              </p>
            </div>

            {/* Client Interview Support */}
            <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-0 sm:mr-3">💼</span>
                <h4 className="text-lg sm:text-xl font-bold leading-tight" style={{color: '#e63852'}}>
                  Client Interview Support
                </h4>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                We schedule and assist with real client interviews
              </p>
            </div>

            {/* Career Mapping */}
            <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-0 sm:mr-3">🎯</span>
                <h4 className="text-lg sm:text-xl font-bold leading-tight" style={{color: '#e63852'}}>
                  Career Mapping
                </h4>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                We help match you with roles aligned with your skills
              </p>
            </div>

            {/* Resume & Portfolio Building */}
            <div className="bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-0 sm:mr-3">📝</span>
                <h4 className="text-lg sm:text-xl font-bold leading-tight" style={{color: '#e63852'}}>
                  Resume & Portfolio Building
                </h4>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Craft a standout resume and professional portfolio tailored to your career goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlgoMatchSection