'use client';

import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What makes Kaya Clinic different from others?",
    answer: "Kaya Clinic is powered by the medical expertise of world-renowned dermatologists. We offer scientifically backed treatments customized for Indian skin and hair types, ensuring safety and visible results.",
  },
  {
    id: 2,
    question: "Which treatments are available at Kaya?",
    answer: "We offer a wide range of treatments including Laser Hair Removal, Acne & Scar treatment, Anti-Ageing therapies, Pigmentation correction, and Hair Fall treatments.",
  },
  {
    id: 3,
    question: "Are Kaya treatments safe for Indian skin and hair types?",
    answer: "Absolutely. Our protocols and advanced technology are specifically designed and tested for Indian skin tones and hair textures, minimizing side effects.",
  },
  {
    id: 4,
    question: "How soon can I see visible results?",
    answer: "While results vary per individual and treatment, many clients notice visible improvements in skin glow and texture after just a few sessions.",
  },
  {
    id: 5,
    question: "Do I need a consultation before starting?",
    answer: "Yes, we highly recommend a consultation. Our dermatologists analyze your skin/hair concerns to create a personalized treatment plan for the best results.",
  },
];

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked <span className="text-[#A67B5B]">Questions</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Get answers to the most common questions about Kaya Clinic's treatments and services
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-12">
          {faqData.map((item, index) => (
            <div 
              key={item.id}
              className={`border rounded-lg transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-white border-gray-200 shadow-md' 
                  : 'bg-gray-50 border-gray-100 hover:bg-white hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className={`font-medium text-base ${activeIndex === index ? 'text-[#A67B5B]' : 'text-gray-800'}`}>
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180 text-[#A67B5B]' : 'text-gray-400'
                  }`} 
                />
              </button>
              
              {/* Collapsible Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-[#FFF1F4] border border-[#FAD1DD] rounded-xl p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base max-w-lg mx-auto">
            Our expert dermatologists are here to help you make the right decision for your skin and hair.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#C49A85] hover:bg-[#A67B5B] text-white font-medium py-3 px-6 rounded-full transition-colors w-full sm:w-auto">
              Book An Appointment
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-[#C49A85] text-[#C49A85] hover:bg-[#C49A85] hover:text-white font-medium py-3 px-6 rounded-full transition-colors w-full sm:w-auto">
              <Phone className="w-4 h-4" />
              <span>Call +91 22 6180 9650</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;