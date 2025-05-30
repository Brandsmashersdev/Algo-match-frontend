import React from 'react';
import { Linkedin, Twitter, Youtube, Instagram, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Decorative background elements - Responsive */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 border border-white rounded-full"></div>
        <div className="absolute top-16 sm:top-32 right-10 sm:right-20 w-6 h-6 sm:w-10 sm:h-10 lg:w-16 lg:h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-4 h-4 sm:w-8 sm:h-8 lg:w-12 lg:h-12 border border-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border border-white rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
            
            {/* Left Section - Newsletter */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
                Most training programs give you content. <span style={{ color: '#e63852' }}>We give you a career.</span>
              </h2>
              
              {/* Social Media - Responsive Layout */}
              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/algo-match/", label: "LinkedIn" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#e63852';
                      e.currentTarget.style.color = '#e63852';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.color = '';
                    }}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section - Menu & Contact */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                
                {/* Quick Links */}
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-white">Quick Links</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      { name: 'Home', href: '#home' },
                      { name: 'Pathway', href: '#successpage' },
                      { name: 'Services', href: '#placement' },
                      { name: 'What we offer', href: '#courses' },
                      { name: 'How it works', href: '#Howitworks' }
                    ].map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base focus:outline-none focus:text-white relative group"
                        >
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-white">
                    SUPPORT
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      { name: 'What you get', href: '#benefits' },
                      { name: 'Privacy policy', href: '/privacy-policy' },
                      { name: 'Faqs', href: '#faqs' },
                      { name: 'Contact US', href: '#contactus' },
                      { name: 'Terms & conditions', href: '/terms' }
                    ].map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base focus:outline-none focus:text-white relative group"
                        >
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Info */}
                <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
                    Algo<span style={{ color: '#e63852' }}>Match</span>
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base px-2 sm:px-0">
                    Empowering careers through specialized training and placement services in the technology industry.
                  </p>
                  
                  {/* Contact Info - Responsive Layout */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: '#e63852' }} />
                      <span className="text-gray-300 text-xs sm:text-sm break-all">info@algomatch.in</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: '#e63852' }} />
                      <span className="text-gray-300 text-xs sm:text-sm">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: '#e63852' }} />
                      <span className="text-gray-300 text-xs sm:text-sm">Bhopal, Madhya Pradesh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
              <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                @2025 AlgoMatch. All rights reserved
              </div>
              
              <div className="flex flex-col xs:flex-row flex-wrap justify-center md:justify-end space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
                  <a 
                    key={policy}
                    href="#" 
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300 relative group focus:outline-none focus:text-white"
                  >
                    {policy}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#e63852' }}></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Device-specific CSS optimizations */}
      <style jsx>{`
        /* Extra small devices (iPhone SE) */
        @media (max-width: 375px) {
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }
          
          .grid {
            gap: 1.5rem;
          }
        }

        /* Custom breakpoint for small phones */
        @media (min-width: 475px) {
          .xs\\:text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          .xs\\:flex-row {
            flex-direction: row;
          }
          .xs\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 0;
          }
          .xs\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 1rem;
          }
        }

        /* iPad Mini Portrait */
        @media (min-width: 768px) and (max-width: 820px) and (orientation: portrait) {
          .grid {
            gap: 2.5rem;
          }
          .py-8 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }

        /* iPad Air/Pro Portrait */
        @media (min-width: 820px) and (max-width: 1024px) and (orientation: portrait) {
          .grid {
            gap: 3rem;
          }
          .py-8 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
        }

        /* iPad Landscape modes */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .lg\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .lg\\:text-left {
            text-align: left;
          }
          .lg\\:justify-start {
            justify-content: flex-start;
          }
        }

        /* Nest Hub */
        @media (min-width: 1024px) and (max-width: 1024px) and (orientation: landscape) {
          .py-16 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .text-4xl {
            font-size: 2rem;
            line-height: 2.5rem;
          }
        }

        /* Nest Hub Max */
        @media (min-width: 1280px) and (max-width: 1280px) and (orientation: landscape) {
          .container {
            max-width: 1200px;
          }
          .py-16 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
        }

        /* Touch-friendly hover states for tablets */
        @media (hover: none) and (pointer: coarse) {
          .hover\\:scale-110:hover {
            transform: none;
          }
          .transition-all {
            transition: none;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .border {
            border-width: 0.5px;
          }
        }

        /* Focus states for accessibility */
        @media (prefers-reduced-motion: no-preference) {
          .transition-all {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
          }
        }

        /* Reduced motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          .animate-pulse {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;