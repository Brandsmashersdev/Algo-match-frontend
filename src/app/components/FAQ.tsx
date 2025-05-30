import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AlgoMatchFAQ = () => {
  

  const faqs = [
    {
      question: "Who can apply for Algo Match?",
      answer: "Candidates who are based in Bhopal and graduated in 2020 or earlier. You should have a basic technical understanding in your domain."
    },
    {
      question: "Is there any registration fee or upfront cost?",
      answer: "No. Algo Match is a Pay After Placement model. You only pay once you receive and accept a job offer."
    },
    {
      question: "What kind of jobs can I expect after training?",
      answer: "We focus on IT & software roles like developers (frontend/backend), testers, QA engineers, and more—depending on your skills."
    },
    {
      question: "What happens if I don't get placed after training?",
      answer: "There is no financial obligation if you don't get selected by a client after the training. You walk away with enhanced skills and experience—no cost to you."
    },
    {
      question: "Who will provide the training and mentorship?",
      answer: "Experienced professionals from leading companies will mentor and guide you throughout the journey. You'll be trained by experts with hands-on experience in IT services, product development, fintech, healthcare and logistics."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <div id="faqs" className="bg-white py-8 sm:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold text-black mb-3 sm:mb-4 lg:mb-6 px-2 leading-tight">
            FAQs – Frequently Asked Questions
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 xl:w-28 h-1 mx-auto" style={{ backgroundColor: '#e63852' }}></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4 lg:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 xl:py-7 text-left flex justify-between items-start sm:items-center hover:bg-gray-50 transition-colors duration-200 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold text-black pr-3 sm:pr-4 lg:pr-6 leading-tight sm:leading-normal flex-1">
                  <span className="text-red-600 mr-2">{index + 1}.</span>
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-2 mt-1 sm:mt-0">
                  {openFAQ === index ? (
                    <ChevronUp 
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-all duration-200 transform hover:scale-110" 
                      style={{ color: '#e63852' }}
                    />
                  ) : (
                    <ChevronDown 
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-500 transition-all duration-200 hover:text-black transform hover:scale-110" 
                    />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === index ? 'max-h-96 sm:max-h-80 lg:max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6 xl:pb-7">
                  <div className="h-px bg-gradient-to-r from-gray-200 via-red-200 to-gray-200 mb-3 sm:mb-4 lg:mb-5"></div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                    {faq.answer.split('**').map((part, partIndex) => {
                      if (partIndex % 2 === 1) {
                        return (
                          <span key={partIndex} className="font-semibold text-black">
                            {part}
                          </span>
                        );
                      }
                      return part;
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom spacing for better scroll experience */}
        <div className="mt-8 sm:mt-12 lg:mt-16"></div>
      </div>
    </div>
  );
};

export default AlgoMatchFAQ;