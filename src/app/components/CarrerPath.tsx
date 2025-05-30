import React from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
  position: 'left' | 'right';
}

interface CareerPathProps {
  // Add any props here if needed in the future
}

const CareerPath: React.FC<CareerPathProps> = () => {
  const primaryColor: string = "#e63852";
  const secondaryColor: string = "#000000";

  const steps: Step[] = [
    {
      id: 1,
      title: "Enrollment & Assessment",
      description: "Complete your profile and take our skill assessment to create your personalized learning path.",
      position: "left"
    },
    {
      id: 2,
      title: "Technical Training",
      description: "Intensive hands-on training in your chosen technology stack with industry experts.",
      position: "right"
    },
    {
      id: 3,
      title: "Interview Preparation",
      description: "Mock interviews, resume building, and personalized feedback to prepare you for the hiring process.",
      position: "left"
    },
    {
      id: 4,
      title: "Placement & Onboarding",
      description: "Interview scheduling with partner companies and support through the hiring and onboarding process.",
      position: "right"
    },
    {
      id: 5,
      title: "🎤 Mock Interviews & Career Guidance",
      description: "Build confidence & polish your pitch through practice sessions and personalized career coaching.",
      position: "left"
    },
    {
      id: 6,
      title: "🤝 Get Interviewed by Top Companies",
      description: "We schedule your interviews and help you prepare for meetings with our partner companies.",
      position: "right"
    },
    {
      id: 7,
      title: "🏆 Get Placed",
      description: "Once you're selected, you start your new job with full support during your transition!",
      position: "left"
    },
    {
      id: 8,
      title: "💳 Pay Only After You're Placed",
      description: "No upfront fees, no surprises. You only pay after you've successfully landed your dream job.",
      position: "right"
    }
  ];

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{ color: secondaryColor }}>
              Your Journey to <span style={{ color: primaryColor }}>Success</span>
            </h2>
            <p className="text-gray-600 max-w-2xl lg:max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-2">
              Follow our proven pathway from enrollment to placement at top tech companies.
            </p>
          </div>

          {/* Desktop and Tablet Timeline (iPad Air, iPad Pro, Nest Hub Max) */}
          <div className="hidden md:block max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 opacity-30"
                style={{ backgroundColor: primaryColor }}
              ></div>

              {steps.map((step: Step, index: number) => (
                <div key={step.id} className={`relative ${index < steps.length - 1 ? 'mb-12 lg:mb-16 xl:mb-20' : ''}`}>
                  <div className="flex items-center">
                    {step.position === 'left' ? (
                      <>
                        <div className="w-1/2 pr-6 lg:pr-12 text-right">
                          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            style={{ borderColor: primaryColor }}>
                            <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mb-2 lg:mb-3 leading-tight" style={{ color: secondaryColor }}>
                              {step.title}
                            </h3>
                            <p className="text-gray-600 mb-3 lg:mb-4 leading-relaxed text-sm lg:text-base">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full text-white flex items-center justify-center z-10 shadow-lg border-4 border-white transition-transform duration-300 hover:scale-110"
                          style={{ backgroundColor: primaryColor }}
                        >
                          <span className="font-bold text-sm lg:text-lg xl:text-xl">{step.id}</span>
                        </div>
                        <div className="w-1/2 pl-6 lg:pl-12"></div>
                      </>
                    ) : (
                      <>
                        <div className="w-1/2 pr-6 lg:pr-12"></div>
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full text-white flex items-center justify-center z-10 shadow-lg border-4 border-white transition-transform duration-300 hover:scale-110"
                          style={{ backgroundColor: primaryColor }}
                        >
                          <span className="font-bold text-sm lg:text-lg xl:text-xl">{step.id}</span>
                        </div>
                        <div className="w-1/2 pl-6 lg:pl-12">
                          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg border-r-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            style={{ borderColor: primaryColor }}>
                            <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mb-2 lg:mb-3 leading-tight" style={{ color: secondaryColor }}>
                              {step.title}
                            </h3>
                            <p className="text-gray-600 mb-3 lg:mb-4 leading-relaxed text-sm lg:text-base">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile and Small Tablet Version (iPhone, iPad Mini, Nest Hub) */}
          <div className="md:hidden">
            <div className="relative max-w-lg mx-auto">
              {/* Mobile Timeline Line */}
              <div
                className="absolute left-6 top-0 bottom-0 w-0.5 opacity-30"
                style={{ backgroundColor: primaryColor }}
              ></div>

              <div className="space-y-6 sm:space-y-8">
                {steps.map((step: Step, index: number) => (
                  <div key={step.id} className="relative flex items-start">
                    <div
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white flex items-center justify-center shadow-lg z-10 border-4 border-white transition-transform duration-300 hover:scale-105"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <span className="font-bold text-sm sm:text-base">{step.id}</span>
                    </div>
                    <div className="flex-1 ml-4 sm:ml-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      style={{ borderColor: primaryColor }}>
                      <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 leading-tight" style={{ color: secondaryColor }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 sm:p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6" style={{ color: secondaryColor }}>
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Join thousands of successful graduates who have transformed their careers with our proven pathway.
              </p>
              <button
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base lg:text-lg"
                style={{ backgroundColor: primaryColor }}
              >
                Start Your Journey Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPath;