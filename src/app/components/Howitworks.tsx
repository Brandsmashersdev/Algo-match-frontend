// import React, { useState } from 'react';

// const PayAfterPlacement: React.FC = () => {
//   const primaryColor: string = "#e63852";
//   const secondaryColor: string = "#000000";
//   const [activeStep, setActiveStep] = useState<number>(1);

//   const steps = [
//     {
//       id: 1,
//       title: "Enrollment",
//       icon: "📋",
//       items: [
//         {
//           title: "Eligibility Check",
//           description: "We assess your background to ensure you meet our basic criteria—whether you're targeting technical or non-technical roles."
//         },
//         {
//           title: "Application",
//           description: "Submit your application along with your resume and proof of graduation (for candidates who graduated in 2020 or earlier)."
//         },
//         {
//           title: "Agreement",
//           description: "Sign the Pay After Placement Agreement with Algo Match, which outlines your payment obligations only after successful job placement."
//         }
//       ]
//     },
//     {
//       id: 2,
//       title: "Job Placement and Payment",
//       icon: "💼",
//       items: [
//         {
//           title: "Job Search Support",
//           description: "Receive 1-on-1 support from our expert placement team to find a role that suits your skill set and career goals."
//         },
//         {
//           title: "Offer Letter",
//           description: "Once you receive an offer, the payment plan activates based on your salary package"
//         },
//         {
//           title: "Payment",
//           description: "Pay only after you start your new job—no upfront charges, no hidden fees"
//         }
//       ]
//     }
//   ];

//   const salaryTiers = [
//     {
//       category: "A",
//       range: "< 5 LPA",
//       fee: "No amount needs to be paid.",
      
//     },
//     {
//       category: "B",
//       range: "> 5 LPA", 
//       fee: "Pay 1 month of Salary",
      
//     }
//   ];

//   return (
//     <section id="Howitworks" className="py-12 sm:py-16 lg:py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{ color: secondaryColor }}>
//             How it <span style={{ color: primaryColor }}>Works?</span>
//           </h2>
//           <div className="max-w-4xl mx-auto">
//             <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 px-2">
//               Our Pay After Placement program at Algo Match is designed to make career building hassle-free. We offer a transparent, supportive process in three simple steps—enrollment, training & mentorship, and job placement. You only pay after you land a job, removing financial pressure from your career journey.
//             </p>
//           </div>
//         </div>

//         {/* Interactive Steps */}
//         <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
//           <div className="flex justify-center mb-8 sm:mb-12">
//             <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
//               {steps.map((step) => (
//                 <button
//                   key={step.id}
//                   onClick={() => setActiveStep(step.id)}
//                   className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto ${
//                     activeStep === step.id 
//                       ? 'text-white shadow-lg' 
//                       : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
//                   }`}
//                   style={{ 
//                     backgroundColor: activeStep === step.id ? primaryColor : undefined 
//                   }}
//                 >
//                   <span className="block sm:inline">{step.icon}</span>
//                   <span className="block sm:inline sm:ml-2">Step {step.id}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Step Content */}
//           <div className="relative">
//             {steps.map((step) => (
//               <div
//                 key={step.id}
//                 className={`transition-all duration-500 ${
//                   activeStep === step.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 absolute inset-0 pointer-events-none'
//                 }`}
//               >
//                 <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 lg:p-12 border-2 sm:border-4" style={{ borderColor: `${primaryColor}20` }}>
//                   <div className="text-center mb-8 sm:mb-12">
//                     <div 
//                       className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full text-2xl sm:text-4xl mb-4 sm:mb-6 shadow-lg"
//                       style={{ backgroundColor: `${primaryColor}15` }}
//                     >
//                       {step.icon}
//                     </div>
//                     <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: secondaryColor }}>
//                       {step.title}
//                     </h3>
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//                     {step.items.map((item, index) => (
//                       <div 
//                         key={index}
//                         className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-opacity-50 transition-all duration-300 hover:shadow-lg"
//                         style={{ '--hover-border-color': primaryColor } as React.CSSProperties}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.borderColor = primaryColor;
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.borderColor = '#f3f4f6';
//                         }}
//                       >
//                         <div 
//                           className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white font-bold mb-3 sm:mb-4 text-xs sm:text-sm"
//                           style={{ backgroundColor: primaryColor }}
//                         >
//                           {index + 1}
//                         </div>
//                         <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: secondaryColor }}>
//                           {item.title}
//                         </h4>
//                         <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                           {item.description}
//                         </p>
//                       </div>
//                     ))}
//                   </div>

//                   {step.id === 2 && (
//                     <div className="mt-8 sm:mt-12 text-center">
//                       <a href="#contactus">
//                         <button 
//                           className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
//                           style={{ backgroundColor: primaryColor }}
//                         >
//                           Get Placed Now
//                         </button>
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Salary Tiers */}
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-8 sm:mb-12">
//             <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2" style={{ color: secondaryColor }}>
//               Your CTC Based on <span style={{ color: primaryColor }}>Salary Tier</span>
//             </h3>
//             <p className="text-gray-600 text-base sm:text-lg px-2">
//               Our payment structure is designed to be fair and proportional to your earning potential.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//             {salaryTiers.map((tier, index) => (
//               <div 
//                 key={tier.category}
//                 className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 sm:border-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 bg-white`}
//                 style={{ borderColor: primaryColor }}
//               >
//                 <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4">
//                   <div 
//                     className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg"
//                     style={{ backgroundColor: primaryColor }}
//                   >
//                     {tier.category}
//                   </div>
//                 </div>
                
//                 <div className="text-center pt-6 sm:pt-4">
//                   <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: secondaryColor }}>
//                     Category {tier.category}
//                   </h4>
//                   <div className="mb-4 sm:mb-6">
//                     <span className="text-base sm:text-lg text-gray-600">Salary Range (CTC)</span>
//                     <div className="text-2xl sm:text-3xl font-bold mt-2" style={{ color: primaryColor }}>
//                       {tier.range}
//                     </div>
//                   </div>
//                   <div 
//                     className="p-3 sm:p-4 rounded-xl sm:rounded-2xl text-white font-semibold text-base sm:text-lg"
//                     style={{ backgroundColor: primaryColor }}
//                   >
//                     {tier.fee}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PayAfterPlacement;

import React, { useState } from 'react';

const PayAfterPlacement: React.FC = () => {
  const primaryColor: string = "#e63852";
  const secondaryColor: string = "#000000";
  const [activeStep, setActiveStep] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const steps = [
    {
      id: 1,
      title: "Enrollment",
      icon: "📋",
      items: [
        {
          title: "Eligibility Check",
          description: "We assess your background to ensure you meet our basic criteria—whether you're targeting technical or non-technical roles."
        },
        {
          title: "Application",
          description: "Submit your application along with your resume and proof of graduation (for candidates who graduated in 2020 or earlier)."
        },
        {
          title: "Agreement",
          description: "Sign the Pay After Placement Agreement with Algo Match, which outlines your payment obligations only after successful job placement."
        }
      ]
    },
    {
      id: 2,
      title: "Job Placement and Payment",
      icon: "💼",
      items: [
        {
          title: "Job Search Support",
          description: "Receive 1-on-1 support from our expert placement team to find a role that suits your skill set and career goals."
        },
        {
          title: "Offer Letter",
          description: "Once you receive an offer, the payment plan activates based on your salary package"
        },
        {
          title: "Payment",
          description: "Pay only after you start your new job—no upfront charges, no hidden fees"
        }
      ]
    }
  ];

  const salaryTiers = [
    {
      category: "A",
      range: "< 5 LPA",
      fee: "No amount needs to be paid.",
      
    },
    {
      category: "B",
      range: "> 5 LPA", 
      fee: "Pay 1 month of Salary",
      
    }
  ];

  const staffAugmentationSteps = [
    {
      id: 1,
      title: "Discovery & Requirement Mapping",
      icon: "🔍",
      description: "We start by understanding your project needs, tech stack, timelines, and ideal developer profile. Our team collaborates closely with your stakeholders to map out the exact requirements."
    },
    {
      id: 2,
      title: "Candidate Sourcing & Shortlisting",
      icon: "👥",
      description: "Our internal talent network, hiring partners, and outreach campaigns deliver top matches within 48–72 hours. You receive a curated list of pre-screened profiles aligned with your role and expectations."
    },
    {
      id: 3,
      title: "Technical Evaluation & Interview",
      icon: "💻",
      description: "We conduct deep technical screenings, live coding tests, and behavioral checks before presenting candidates. You're invited to conduct final interviews to assess cultural and team fit."
    },
    {
      id: 4,
      title: "Offer, Onboarding & Compliance",
      icon: "📋",
      description: "Once you select your candidate(s), we handle all the paperwork — offers, NDAs, contracts, and onboarding steps. Our compliance-ready process ensures everything is secure and aligned with your internal policies."
    },
    {
      id: 5,
      title: "Seamless Integration & Support",
      icon: "🤝",
      description: "We don't just place talent and walk away. We offer continuous support to ensure smooth integration, team alignment, and long-term success."
    }
  ];

  const renderPayAfterPlacementPage = () => (
    <div className="min-h-screen">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{ color: secondaryColor }}>
          How it <span style={{ color: primaryColor }}>Works?</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 px-2">
            Our Pay After Placement program at Algo Match is designed to make career building hassle-free. We offer a transparent, supportive process in three simple steps—enrollment, training & mentorship, and job placement. You only pay after you land a job, removing financial pressure from your career journey.
          </p>
        </div>
      </div>

      {/* Interactive Steps */}
      <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto ${
                  activeStep === step.id 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                }`}
                style={{ 
                  backgroundColor: activeStep === step.id ? primaryColor : undefined 
                }}
              >
                <span className="block sm:inline">{step.icon}</span>
                <span className="block sm:inline sm:ml-2">Step {step.id}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="relative">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`transition-all duration-500 ${
                activeStep === step.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 lg:p-12 border-2 sm:border-4" style={{ borderColor: `${primaryColor}20` }}>
                <div className="text-center mb-8 sm:mb-12">
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full text-2xl sm:text-4xl mb-4 sm:mb-6 shadow-lg"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: secondaryColor }}>
                    {step.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {step.items.map((item, index) => (
                    <div 
                      key={index}
                      className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-opacity-50 transition-all duration-300 hover:shadow-lg"
                      style={{ '--hover-border-color': primaryColor } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = primaryColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#f3f4f6';
                      }}
                    >
                      <div 
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white font-bold mb-3 sm:mb-4 text-xs sm:text-sm"
                        style={{ backgroundColor: primaryColor }}
                      >
                        {index + 1}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: secondaryColor }}>
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {step.id === 2 && (
                  <div className="mt-8 sm:mt-12 text-center">
                    <a href="#contactus">
                      <button 
                        className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
                        style={{ backgroundColor: primaryColor }}
                      >
                        Get Placed Now
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Salary Tiers */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2" style={{ color: secondaryColor }}>
            Your CTC Based on <span style={{ color: primaryColor }}>Salary Tier</span>
          </h3>
          <p className="text-gray-600 text-base sm:text-lg px-2">
            Our payment structure is designed to be fair and proportional to your earning potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {salaryTiers.map((tier, index) => (
            <div 
              key={tier.category}
              className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 sm:border-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 bg-white`}
              style={{ borderColor: primaryColor }}
            >
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg"
                  style={{ backgroundColor: primaryColor }}
                >
                  {tier.category}
                </div>
              </div>
              
              <div className="text-center pt-6 sm:pt-4">
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: secondaryColor }}>
                  Category {tier.category}
                </h4>
                <div className="mb-4 sm:mb-6">
                  <span className="text-base sm:text-lg text-gray-600">Salary Range (CTC)</span>
                  <div className="text-2xl sm:text-3xl font-bold mt-2" style={{ color: primaryColor }}>
                    {tier.range}
                  </div>
                </div>
                <div 
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl text-white font-semibold text-base sm:text-lg"
                  style={{ backgroundColor: primaryColor }}
                >
                  {tier.fee}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStaffAugmentationPage = () => (
    <div className="min-h-screen">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{ color: secondaryColor }}>
          How it <span style={{ color: primaryColor }}>Works</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 px-2">
            <span className="font-semibold" style={{ color: secondaryColor }}>Scale your engineering team with pre-vetted talent — fast.</span> At AlgoMatch, we simplify team expansion through a 5-step staff augmentation process designed to help you find the <em>right tech talent, faster.</em>
          </p>
        </div>
      </div>

      {/* Staff Augmentation Steps */}
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {staffAugmentationSteps.map((step, index) => (
            <div 
              key={step.id}
              className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
              style={{ 
                borderColor: index % 2 === 0 ? primaryColor : '#f3f4f6',
                backgroundColor: index % 2 === 0 ? `${primaryColor}05` : 'white'
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div 
                  className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg"
                  style={{ backgroundColor: primaryColor, color: 'white' }}
                >
                  <span className="font-bold">{step.id}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: secondaryColor }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
                
                <div 
                  className="hidden sm:block flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <button 
            className="px-8 sm:px-12 py-4 sm:py-5 rounded-full text-white font-semibold text-lg sm:text-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            style={{ backgroundColor: primaryColor }}
          >
            Scale Your Team Now
          </button>
        </div>

        {/* Link back to placement page */}
        <div className="mt-8 sm:mt-12 text-center">
          <button 
            onClick={() => setCurrentPage(1)}
            className="text-gray-600 hover:text-gray-800 font-medium text-base sm:text-lg underline transition-colors duration-300"
          >
            ← Back to Pay After Placement
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="Howitworks" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex space-x-2 sm:space-x-4 bg-gray-100 rounded-full p-1 sm:p-2">
            <button
              onClick={() => setCurrentPage(1)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                currentPage === 1 
                  ? 'text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              style={{ 
                backgroundColor: currentPage === 1 ? primaryColor : 'transparent' 
              }}
            >
              Pay After Placement
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                currentPage === 2 
                  ? 'text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              style={{ 
                backgroundColor: currentPage === 2 ? primaryColor : 'transparent' 
              }}
            >
              Staff Augmentation
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}
          >
            <div className="w-full flex-shrink-0">
              {renderPayAfterPlacementPage()}
            </div>
            <div className="w-full flex-shrink-0 px-4 sm:px-0">
              {renderStaffAugmentationPage()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayAfterPlacement;