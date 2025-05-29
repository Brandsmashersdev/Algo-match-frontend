import React from 'react';

const AlgoMatchBenefits = () => {
  const primaryColor = "#e63852";
  const secondaryColor = "#000000";
  
  const benefits = [
    {
      id: 1,
      icon: "📘",
      title: "A Curriculum That Matches Industry Demands",
      description: "Gain access to a carefully crafted learning roadmap tailored specifically to your technology stack and aligned with real-world job requirements—so you learn exactly what top companies are looking for."
    },
    {
      id: 2,
      icon: "💬",
      title: "Master Communication & Personal Branding",
      description: "Develop strong interpersonal and professional communication skills, build confidence, and learn how to express your ideas clearly—key traits that help you stand out in any interview or workplace."
    },
    {
      id: 3,
      icon: "🧑‍🏫",
      title: "Dedicated One-on-One Mentorship",
      description: "Work closely with experienced mentors who provide personalized guidance, help you overcome challenges, and support you throughout your journey—from learning to landing a job."
    },
    {
      id: 4,
      icon: "🎯",
      title: "Real Interview Experience with Clients",
      description: "Get a chance to interview with real hiring partners and companies, giving you hands-on experience and exposure to what actual recruitment processes look like."
    },
    {
      id: 5,
      icon: "📄",
      title: "Resume & LinkedIn Profile That Gets Noticed",
      description: "Receive expert support to craft a compelling resume and optimize your LinkedIn profile, increasing your visibility and chances of getting shortlisted by recruiters."
    },
    {
      id: 6,
      icon: "🛡️",
      title: "Placement Assurance (Pay Only After You're Hired)",
      description: "Join risk-free with our \"Pay After Placement\" model. You only pay if you receive a job offer—no upfront costs, no hidden fees."
    },
    {
      id: 7,
      icon: "🧠",
      title: "Career Roadmap & Direction",
      description: "Gain clarity about your career path with expert advice tailored to your strengths, interests, and goals—ensuring you're not just employed, but headed in the right direction."
    },
    {
      id: 8,
      icon: "💼",
      title: "Lifetime Access to Our Talent Network",
      description: "Become part of an exclusive talent pool where we regularly share job openings, freelance gigs, and industry updates—ensuring ongoing opportunities even after you've landed your first role."
    }
  ];

  return (
    <section id="benefits" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 w-20 h-20 rounded-full opacity-5" style={{ backgroundColor: primaryColor }}></div>
        <div className="absolute top-32 right-8 w-16 h-16 rounded-full opacity-5" style={{ backgroundColor: primaryColor }}></div>
        <div className="absolute bottom-20 left-12 w-12 h-12 rounded-full opacity-5" style={{ backgroundColor: primaryColor }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight" 
            style={{ color: secondaryColor }}
          >
            Still Confused? Here's What You Get
          </h2>
          <p className="text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
            When you join <span style={{ color: primaryColor }} className="font-semibold">Algo Match</span>, you're not just signing up for a program—you're investing in your future. Here's everything you walk away with:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.id} 
                className="group bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-md hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-l-4 sm:border-l-6"
                style={{ borderLeftColor: primaryColor }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
                  {/* Icon */}
                  <div 
                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-lg sm:text-xl md:text-2xl shadow-md group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    {benefit.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 group-hover:text-opacity-90 transition-colors duration-300 leading-tight"
                      style={{ color: secondaryColor }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative accent */}
                <div 
                  className="mt-4 sm:mt-6 h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: primaryColor }}
                ></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AlgoMatchBenefits;