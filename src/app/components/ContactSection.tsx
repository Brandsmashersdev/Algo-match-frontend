import React, { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    phone: '',
    graduationYear: '',
    specialization: '',
    totalExperienceYears: '',
    resume: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const {
    name,
    email,
    dob,
    phone,
    graduationYear,
    specialization,
    totalExperienceYears,
    resume,
  } = formData;

  // Basic validation
  if (!name || !email || !dob || !phone || !graduationYear || !specialization || !totalExperienceYears || !resume) {
    alert('Please fill in all required fields, including your resume link.');
    return;
  }

  // Optional: Basic resume link format check
  const isValidURL = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  if (!isValidURL(resume)) {
    alert('Please enter a valid URL for your resume.');
    return;
  }

  try {
    const response = await fetch('https://algo-backend-vqqj.onrender.com/api/leads/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        dob,
        phone,
        graduationYear,
        specialization,
        totalExperienceYears,
        resume,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Server error:', responseData);
      alert(`Failed to save lead: ${responseData.message || 'Unknown error'}`);
      return;
    }

    alert('Lead saved successfully!');
    setFormData({
      name: '',
      email: '',
      dob: '',
      phone: '',
      graduationYear: '',
      specialization: '',
      totalExperienceYears: '',
      resume: '',
    });
  } catch (error) {
    console.error('Submit error:', error);
    alert('An unexpected error occurred while saving the lead.');
  }
};



  return (
    <section id="contactus" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Pattern - Responsive positioning */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 rounded-full border-2" style={{ borderColor: '#e63852' }}></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 rounded-full border-2" style={{ borderColor: '#e63852' }}></div>
        <div className="absolute bottom-20 sm:bottom-32 left-1/4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 rounded-full border-2" style={{ borderColor: '#e63852' }}></div>
        <div className="absolute bottom-10 sm:bottom-20 right-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 rounded-full border-2" style={{ borderColor: '#e63852' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-gray-100 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                Have questions about our programs or placement services? Our dedicated team is here to guide you through your tech career transformation.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start group">
                  <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full flex items-center justify-center mr-3 sm:mr-4 md:mr-6 flex-shrink-0 transition-all duration-300"
                    style={{ backgroundColor: '#e63852' }}>
                    <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-black text-base sm:text-lg mb-1">Office Location</h4>
                    <p className="text-gray-600 text-sm sm:text-base">2nd Floor, JAP Tower, Raisen Rd, Ward 44<br className="hidden sm:block" />
                      <span className="sm:hidden"> </span>Govindpura, Bhopal, Madhya Pradesh 462023</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full flex items-center justify-center mr-3 sm:mr-4 md:mr-6 flex-shrink-0 transition-all duration-300"
                    style={{ backgroundColor: '#e63852' }}>
                    <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-black text-base sm:text-lg mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm sm:text-base">+91 7987270078</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full flex items-center justify-center mr-3 sm:mr-4 md:mr-6 flex-shrink-0 transition-all duration-300"
                    style={{ backgroundColor: '#e63852' }}>
                    <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-black text-base sm:text-lg mb-1">Email</h4>
                    <p className="text-gray-600 text-sm sm:text-base break-all sm:break-normal">Info@algomatch.in</p>
                  </div>
                </div>


              </div>

              {/* Social Media */}
              <div className="mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
                <h4 className="font-bold text-black text-base sm:text-lg mb-3 sm:mb-4">Follow Us</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  <a href="" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    style={{ backgroundColor: '#e63852' }}>
                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    style={{ backgroundColor: '#e63852' }}>
                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    style={{ backgroundColor: '#e63852' }}>
                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    style={{ backgroundColor: '#e63852' }}>
                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2.05C7.91 2.05 7.66 2.06 6.86 2.1c-.81.04-1.36.18-1.84.39-.5.19-.92.45-1.34.87-.42.42-.68.84-.87 1.34-.21.48-.35 1.03-.39 1.84-.04.8-.05 1.05-.05 3.14s.01 2.34.05 3.14c.04.81.18 1.36.39 1.84.19.5.45.92.87 1.34.42.42.84.68 1.34.87.48.21 1.03.35 1.84.39.8.04 1.05.05 3.14.05s2.34-.01 3.14-.05c.81-.04 1.36-.18 1.84-.39.5-.19.92-.45 1.34-.87.42-.42.68-.84.87-1.34.21-.48.35-1.03.39-1.84.04-.8.05-1.05.05-3.14s-.01-2.34-.05-3.14c-.04-.81-.18-1.36-.39-1.84-.19-.5-.45-.92-.87-1.34-.42-.42-.84-.68-1.34-.87-.48-.21-1.03-.35-1.84-.39-.8-.04-1.05-.05-3.14-.05zm0 1.35c2.07 0 2.31.01 3.13.05.75.03 1.16.16 1.43.27.36.14.62.31.89.58.27.27.44.53.58.89.11.27.24.68.27 1.43.04.82.05 1.06.05 3.13s-.01 2.31-.05 3.13c-.03.75-.16 1.16-.27 1.43-.14.36-.31.62-.58.89-.27.27-.53.44-.89.58-.27.11-.68.24-1.43.27-.82.04-1.06.05-3.13.05s-2.31-.01-3.13-.05c-.75-.03-1.16-.16-1.43-.27-.36-.14-.62-.31-.89-.58-.27-.27-.44-.53-.58-.89-.11-.27-.24-.68-.27-1.43-.04-.82-.05-1.06-.05-3.13s.01-2.31.05-3.13c.03-.75.16-1.16.27-1.43.14-.36.31-.62.58-.89.27-.27.53-.44.89-.58.27-.11.68-.24 1.43-.27.82-.04 1.06-.05 3.13-.05zm0 2.3a4.65 4.65 0 100 9.3 4.65 4.65 0 000-9.3zm0 1.35a3.3 3.3 0 110 6.6 3.3 3.3 0 010-6.6zm5.25-2.85a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-xl border-2 border-gray-200 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#e63852] mb-2">Ready to Start?</h3>
              <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg">
                Send us a message and let's discuss your career goals.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-800 font-medium mb-2 text-sm sm:text-base">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e63852] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-800 font-medium mb-2 text-sm sm:text-base">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e63852] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* DOB */}
                  <div>
                    <label htmlFor="dob" className="block text-gray-800 font-medium mb-2 text-sm sm:text-base">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e63852] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-800 font-medium mb-2 text-sm sm:text-base">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e63852] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Graduation Year */}
                <div>
                  <label htmlFor="graduationYear" className="block text-gray-800 font-medium mb-2 text-sm sm:text-base">
                    Graduation Year
                  </label>
                  <input
                    type="number"
                    id="graduationYear"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e63852] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your graduation year"
                    required
                    min={1900}
                    max={new Date().getFullYear()}
                  />
                </div>

                {/* Specialization */}
                <div>
                  <label htmlFor="specialization" className="block text-gray-800 font-medium mb-2 text-sm sm:text-base">
                    Specialization
                  </label>
                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e63852] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your specialization"
                    required
                  />
                </div>

                {/* Total Experience Years */}
                <div>
                  <label htmlFor="totalExperienceYears" className="block text-gray-800 font-medium mb-2 text-sm sm:text-base">
                    Total Experience (Years)
                  </label>
                  <input
                    type="number"
                    id="totalExperienceYears"
                    name="totalExperienceYears"
                    value={formData.totalExperienceYears}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e63852] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your total experience in years"
                    required
                    min={0}
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className="block text-gray-800 font-medium mb-2 text-sm sm:text-base">
                    Paste Resume Link (Google Drive, Dropbox, etc.)
                  </label>
                  <input
                    type="url"
                    id="resume"
                    name="resume"
                    placeholder="https://drive.google.com/your-resume-link"
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e63852] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>


                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 px-4 sm:px-6 text-white font-bold text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 bg-[#e63852] hover:bg-[#d12847]"
                >
                  Send Message & Start Journey
                </button>
              </form>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2 text-lg">✓</span>
                    <span className="text-sm sm:text-base">Quick Response</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2 text-lg">✓</span>
                    <span className="text-sm sm:text-base">Free Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection