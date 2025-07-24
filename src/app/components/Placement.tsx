// import React, { useState } from 'react';

// interface Feature {
//   title: string;
//   icon: React.ReactElement;
//   description: string;
// }

// interface ExpertiseItem {
//   roleType: string;
//   technologies: string;
// }

// interface AlgoMatchPlacementSectionProps {
//   // Add any props here if needed in the future
// }

// const AlgoMatchPlacementSection: React.FC<AlgoMatchPlacementSectionProps> = () => {
//   const [activeFeature, setActiveFeature] = useState<number>(0);
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
  
//   // Custom color theme
//   const primaryColor: string = "#e63852";
//   const secondaryColor: string = "#000000";
  
//   const features: Feature[] = [
//     {
//       title: "No Upfront Payment",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
//           <path d="M12 1v6m0 10v6m8-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8 12h8"></path>
//           <circle cx="12" cy="12" r="3"></circle>
//         </svg>
//       ),
//       description: "You don't pay anything unless you're placed. Zero financial risk on your part."
//     },
//     {
//       title: "Real-Time Client Alignment",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
//           <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
//           <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
//           <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
//           <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
//         </svg>
//       ),
//       description: "We align your training with real-time client needs, ensuring you learn exactly what employers want."
//     },
//     {
//       title: "Complete Skill Development",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
//           <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//         </svg>
//       ),
//       description: "You get soft skills + technical coaching + live interview support - everything you need to succeed."
//     },
//     {
//       title: "Risk-Free Guarantee",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
//           <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//           <path d="M9 12l2 2 4-4"></path>
//         </svg>
//       ),
//       description: "If you're not hired, you walk away without any financial obligation. We believe in our results."
//     },
//     {
//       title: "Bhopal-Focused Program",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
//           <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//           <circle cx="12" cy="10" r="3"></circle>
//         </svg>
//       ),
//       description: "100% focus on Bhopal-based candidates, batch of 2020 or earlier. Local opportunities, local success."
//     },
//   ];

//   const expertiseData: ExpertiseItem[] = [
//     { roleType: "Frontend", technologies: "React, Angular, Vue.js, UI/UX" },
//     { roleType: "Backend/Full-Stack", technologies: "Node.js, Python, Java, .NET, GraphQL" },
//     { roleType: "Mobile", technologies: "Native iOS/Android, React Native, Flutter" },
//     { roleType: "DevOps & Cloud", technologies: "AWS, Azure, GCP, Kubernetes, Docker, Terraform" },
//     { roleType: "Data & AI", technologies: "Data Engineering, ML/AI, Big Data" },
//     { roleType: "QA & Automation", technologies: "Manual & Automated Testing" }
//   ];

//   const handleFeatureClick = (index: number): void => {
//     setActiveFeature(index);
//   };

//   const handleFeatureHover = (index: number): void => {
//     setActiveFeature(index);
//   };

//   const handleSlideChange = (slideIndex: number): void => {
//     setCurrentSlide(slideIndex);
//   };

//   const renderPlacementPage = () => (
//     <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8">
//       {/* Modern geometric background elements - Responsive */}
//       <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-5">
//         <div className="w-full h-full bg-black transform rotate-45 rounded-xl sm:rounded-2xl md:rounded-3xl"></div>
//       </div>
//       <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 opacity-5">
//         <div className="w-full h-full transform rotate-12 rounded-full" style={{ backgroundColor: primaryColor }}></div>
//       </div>
//       <div className="absolute top-1/2 left-1/4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 transform rotate-45 opacity-20" style={{ backgroundColor: primaryColor }}></div>
//       <div className="absolute top-1/3 right-1/3 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full opacity-15" style={{ backgroundColor: '#000000' }}></div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section - Fully Responsive */}
//         <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
//             <span className="text-black">Not Another </span>
//             <span style={{ color: primaryColor }}>Coaching Program.</span>
//             <br />
//             <span className="text-black">This is a </span>
//             <span style={{ color: primaryColor }}>Placement.</span>
//           </h1>
          
//           <div className="max-w-4xl mx-auto px-2">
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed font-medium">
//               Most training programs give you content. <strong style={{ color: primaryColor }}>We give you a career.</strong>
//             </p>
//             <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
//               Algo Match is not another upskilling course. It's a <strong>one-month, results-driven program</strong> designed to land you a job—without charging you a single rupee upfront.
//             </p>
//           </div>
//         </div>
        
//         {/* Difference Section Header */}
//         <div className="text-center mb-8 sm:mb-12 md:mb-16">
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 md:mb-12 px-2">
//             Here's how we're <span style={{ color: primaryColor }}>different:</span>
//           </h2>
//         </div>
        
//         // [No changes in imports or state logic]

// // Inside the main return, replace the mobile view block:

// {/* Mobile Feature Display */}
// <div className="lg:hidden">
//   {/* Feature Navigation Dots */}
//   <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 pb-2 overflow-x-auto">
//     {features.map((_, index) => (
//       <button
//         key={index}
//         onClick={() => handleFeatureClick(index)}
//         className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all font-bold text-xs sm:text-sm md:text-base ${
//           activeFeature === index
//             ? "text-white shadow-lg transform scale-105"
//             : "bg-gray-100 text-gray-500 hover:bg-gray-200"
//         }`}
//         style={activeFeature === index ? { backgroundColor: primaryColor } : {}}
//         type="button"
//       >
//         {index + 1}
//       </button>
//     ))}
//   </div>

//   {/* Active Feature Card */}
//   <div
//     className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border-l-4 sm:border-l-6 md:border-l-8 mx-2"
//     style={{ borderColor: primaryColor }}
//   >
//     <div className="flex items-start mb-4 sm:mb-6">
//       <div
//         className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 text-white flex-shrink-0"
//         style={{ backgroundColor: primaryColor }}
//       >
//         {features[activeFeature].icon}
//       </div>
//       <div className="flex-1 min-w-0">
//         <h4 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2 leading-tight">
//           {features[activeFeature].title}
//         </h4>
//         <div
//           className="w-8 sm:w-10 md:w-12 h-1 mb-2 sm:mb-3"
//           style={{ backgroundColor: primaryColor }}
//         ></div>
//       </div>
//     </div>
//     <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
//       {features[activeFeature].description}
//     </p>
//   </div>
// </div>

// {/* Desktop Feature Display */}
// <div className="hidden lg:block">
//   <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 lg:gap-6">
//     {features.map((feature, index) => (
//       <div
//         key={index}
//         className="group cursor-pointer transition-all duration-500 transform hover:scale-105"
//         onMouseEnter={() => handleFeatureHover(index)}
//         onClick={() => handleFeatureClick(index)}
//         role="button"
//         tabIndex={0}
//         onKeyDown={(e) => {
//           if (e.key === "Enter" || e.key === " ") {
//             handleFeatureClick(index);
//           }
//         }}
//       >
//         <div
//           className={`relative bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl transition-all duration-500 h-full shadow-lg border-2 ${
//             activeFeature === index
//               ? "shadow-2xl transform -translate-y-4 border-opacity-100"
//               : "hover:shadow-xl border-gray-100 hover:border-gray-200"
//           }`}
//           style={activeFeature === index ? { borderColor: primaryColor } : {}}
//         >
//           <div
//             className={`absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-bold text-xs lg:text-sm transition-all ${
//               activeFeature === index
//                 ? "text-white scale-110"
//                 : "bg-gray-900 text-white"
//             }`}
//             style={activeFeature === index ? { backgroundColor: primaryColor } : {}}
//           >
//             {index + 1}
//           </div>

//           <div className="mb-4 lg:mb-6">
//             <div
//               className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center transition-all ${
//                 activeFeature === index
//                   ? "text-white transform scale-110"
//                   : "bg-gray-50 text-gray-600 group-hover:bg-gray-100"
//               }`}
//               style={activeFeature === index ? { backgroundColor: primaryColor } : {}}
//             >
//               {feature.icon}
//             </div>
//           </div>

//           <h4
//             className={`text-base lg:text-lg font-bold mb-2 lg:mb-3 transition-colors leading-tight ${
//               activeFeature === index ? "" : "text-black group-hover:text-gray-900"
//             }`}
//             style={activeFeature === index ? { color: primaryColor } : {}}
//           >
//             {feature.title}
//           </h4>

//           <div
//             className={`w-8 lg:w-12 h-1 mb-3 lg:mb-4 transition-all ${
//               activeFeature === index ? "" : "bg-gray-200"
//             }`}
//             style={activeFeature === index ? { backgroundColor: primaryColor } : {}}
//           ></div>

//           <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
//             {feature.description}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//       </div>
//     </div>
//   );

//   const renderStaffAugmentationPage = () => (
//     <div className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-5">
//         <div className="w-full h-full bg-black transform -rotate-45 rounded-xl sm:rounded-2xl md:rounded-3xl"></div>
//       </div>
//       <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 opacity-5">
//         <div className="w-full h-full transform -rotate-12 rounded-full" style={{ backgroundColor: primaryColor }}></div>
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
//             <span className="text-black">What Is </span>
//             <span style={{ color: primaryColor }}>Staff Augmentation?</span>
//           </h1>
          
//           <div className="max-w-4xl mx-auto px-2">
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed font-medium">
//               Staff augmentation lets you temporarily expand your team with external talent—without the overhead of full-time hiring.
//             </p>
//             <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
//               With Algo Match, you gain <strong style={{ color: primaryColor }}>rapid access to specialists</strong> across every tech stack, aligned perfectly with your project goals.
//             </p>
//           </div>
//         </div>
        
//         {/* Our Expertise Section */}
//         <div className="text-center mb-8 sm:mb-12 md:mb-16">
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 md:mb-12 px-2">
//             Our <span style={{ color: primaryColor }}>Expertise</span> Includes
//           </h2>
//         </div>
        
//         {/* Expertise Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20">
//           {expertiseData.map((item: ExpertiseItem, index: number) => (
//             <div 
//               key={index}
//               className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-opacity-100"
//               style={{ '--hover-border-color': primaryColor } as React.CSSProperties}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.borderColor = primaryColor;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.borderColor = '#f3f4f6';
//               }}
//             >
//               <div className="mb-4 lg:mb-6">
//                 <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-4" style={{ backgroundColor: primaryColor }}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:w-8 lg:h-8">
//                     <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
//                   </svg>
//                 </div>
//                 <h3 className="text-lg lg:text-xl font-bold text-black mb-2" style={{ color: primaryColor }}>
//                   {item.roleType}
//                 </h3>
//                 <div className="w-12 lg:w-16 h-1 mb-4" style={{ backgroundColor: primaryColor }}></div>
//               </div>
              
//               <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
//                 {item.technologies}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Our Staffing Process Section */}
//         <div className="text-center mb-8 sm:mb-12 md:mb-16">
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 md:mb-12 px-2">
//             Our <span style={{ color: primaryColor }}>Staffing Process</span>
//           </h2>
//         </div>

//         {/* Process Steps */}
//         <div className="max-w-4xl mx-auto">
//           <div className="space-y-8 lg:space-y-12">
//             {[
//               "Discovery & Requirement Mapping",
//               "Candidate Sourcing & Shortlisting", 
//               "Technical Screening & Interviews",
//               "Offer, Onboarding & Contracting"
//             ].map((step, index) => (
//               <div key={index} className="flex items-center group">
//                 <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-xl mr-6 lg:mr-8 transform group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: primaryColor }}>
//                   {index + 1}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg lg:text-xl font-bold text-black group-hover:text-gray-900 transition-colors">
//                     {step}
//                   </h3>
//                   <div className="w-24 lg:w-32 h-1 mt-2" style={{ backgroundColor: primaryColor }}></div>
//                 </div>
//               </div>
//             ))}
            
//             {/* Continuous Integration Step */}
//             <div className="flex items-center group bg-white rounded-2xl p-6 lg:p-8 shadow-lg border-2 border-gray-100">
//               <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-xl mr-6 lg:mr-8 transform group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: primaryColor }}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:w-8 lg:h-8">
//                   <path d="M12 2v6m6 2a8 8 0 1 1-12 0"></path>
//                   <path d="M8 22h8"></path>
//                 </svg>
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-lg lg:text-xl font-bold group-hover:text-gray-900 transition-colors" style={{ color: primaryColor }}>
//                   Continuous Integration & Team Support
//                 </h3>
//                 <div className="w-32 lg:w-40 h-1 mt-2" style={{ backgroundColor: primaryColor }}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Page Navigation Button (Only visible on staff augmentation page) */}
//         <div className="fixed bottom-8 right-8 z-40">
//           <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-gray-200">
//             <button
//               onClick={() => handleSlideChange(0)}
//               className="w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
//               style={{ backgroundColor: primaryColor }}
//               type="button"
//               aria-label="Go to Placement page"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
//                 <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
//                 <path d="M9 14l2 2 4-4"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div id="placement" className="relative">
//       {/* Slide Container */}
//       <div className="relative overflow-hidden">
//         <div 
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {/* Slide 1: Placement Page */}
//           <div className="w-full flex-shrink-0">
//             {renderPlacementPage()}
//           </div>
          
//           {/* Slide 2: Staff Augmentation Page */}
//           <div className="w-full flex-shrink-0">
//             {renderStaffAugmentationPage()}
//           </div>
//         </div>
//       </div>
      
//       {/* Circular Navigation */}
//       <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
//         <div className="flex gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-4 shadow-2xl border border-gray-200">
//           {/* Slide 1 Button */}
//           <button
//             onClick={() => handleSlideChange(0)}
//             className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
//               currentSlide === 0 
//                 ? 'text-white shadow-lg scale-110' 
//                 : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//             }`}
//             style={currentSlide === 0 ? { backgroundColor: primaryColor } : {}}
//             type="button"
//             aria-label="Go to Placement page"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
//               <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
//               <path d="M9 14l2 2 4-4"></path>
//             </svg>
//           </button>
          
//           {/* Slide 2 Button */}
//           <button
//             onClick={() => handleSlideChange(1)}
//             className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
//               currentSlide === 1 
//                 ? 'text-white shadow-lg scale-110' 
//                 : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//             }`}
//             style={currentSlide === 1 ? { backgroundColor: primaryColor } : {}}
//             type="button"
//             aria-label="Go to Staff Augmentation page"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//               <circle cx="9" cy="7" r="4"></circle>
//               <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//               <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
      
//       {/* Page Indicator */}
//       <div className="fixed top-8 right-8 z-50">
//         <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
//           <span className="text-sm font-semibold text-gray-700">
//             {currentSlide + 1} / 2
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlgoMatchPlacementSection;


import { Shield } from "lucide-react";
import React, { useState } from 'react';

interface Feature {
  title: string;
  icon: React.ReactElement;
  description: string;
}

interface TechStack {
  role: string;
  technologies: string;
}

interface AlgoMatchPlacementSectionProps {
  // Add any props here if needed in the future
}

const AlgoMatchPlacementSection: React.FC<AlgoMatchPlacementSectionProps> = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
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

  const techStacks: TechStack[] = [
    { role: "Frontend", technologies: "React, Angular, Vue.js, UI/UX" },
    { role: "Backend/Full-Stack", technologies: "Node.js, Python, Java, .NET, GraphQL" },
    { role: "Mobile", technologies: "Native iOS/Android, React Native, Flutter" },
    { role: "DevOps & Cloud", technologies: "AWS, Azure, GCP, Kubernetes, Docker, Terraform" },
    { role: "Data & AI", technologies: "Data Engineering, ML/AI, Big Data" },
    { role: "QA & Automation", technologies: "Manual & Automated Testing" }
  ];

  const staffingProcess = [
    "Discovery & Requirement Mapping",
    "Candidate Sourcing & Shortlisting", 
    "Technical Screening & Interviews",
    "Offer, Onboarding & Contracting",
    "Continuous Integration & Team Support"
  ];

  const handleFeatureClick = (index: number): void => {
    setActiveFeature(index);
  };

  const handleFeatureHover = (index: number): void => {
    setActiveFeature(index);
  };

  const renderPlacementPage = () => (
    <div className="min-h-screen">
      {/* Modern geometric background elements - Responsive */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-5">
        <div className="w-full h-full bg-black transform rotate-45 rounded-xl sm:rounded-2xl md:rounded-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 opacity-5">
        <div className="w-full h-full transform rotate-12 rounded-full" style={{ backgroundColor: primaryColor }}></div>
      </div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 transform rotate-45 opacity-20" style={{ backgroundColor: primaryColor }}></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full opacity-15" style={{ backgroundColor: '#000000' }}></div>
      
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
  );

  const renderStaffAugmentationPage = () => (
    <div className="min-h-screen">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
          <span className="text-black">What Is </span>
          <span style={{ color: primaryColor }}>Staff Augmentation?</span>
        </h1>
        
        <div className="max-w-4xl mx-auto px-2">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed font-medium">
            Staff augmentation lets you <strong style={{ color: primaryColor }}>temporarily expand your team</strong> with external talent—without the overhead of full-time hiring.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            With Algo Match, you gain rapid access to specialists across every tech stack, aligned perfectly with your project goals.
          </p>
        </div>
      </div>

      {/* Our Expertise Section */}
      <div className="mb-12 sm:mb-16 md:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 px-2">
            Our <span style={{ color: primaryColor }}>Expertise</span> Includes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {techStacks.map((stack, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ 
                borderLeftColor: index % 2 === 0 ? primaryColor : '#000000',
                borderLeftWidth: '4px'
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base"
                  style={{ backgroundColor: index % 2 === 0 ? primaryColor : '#000000' }}
                >
                  {index + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black">{stack.role}</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{stack.technologies}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Staffing Process Section */}
      <div className="mb-12 sm:mb-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 px-2">
            Our <span style={{ color: primaryColor }}>Staffing Process</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {staffingProcess.map((step, index) => (
              <div 
                key={index}
                className="flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
                style={{ borderColor: primaryColor }}
              >
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-bold mr-4 sm:mr-6 flex-shrink-0 text-lg sm:text-xl"
                  style={{ backgroundColor: primaryColor }}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-black leading-tight">{step}</h3>
                </div>
              </div>
            ))}
          </div>
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
            ← Back to Placement Program
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div id="placement" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
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
              Placement Program
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
              {renderPlacementPage()}
            </div>
            <div className="w-full flex-shrink-0 px-4 sm:px-0">
              {renderStaffAugmentationPage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgoMatchPlacementSection;