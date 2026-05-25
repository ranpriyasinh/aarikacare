'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    // ✨ COSMETIC DENTISTRY ONLY
    {
      question: 'What is cosmetic dentistry?',
      answer:
        'Cosmetic dentistry focuses on improving the appearance of your teeth and smile using treatments like teeth whitening, veneers, bonding, and smile makeovers.',
    },
    {
      question: 'What treatments are included in cosmetic dentistry?',
      answer:
        'Cosmetic dentistry includes teeth whitening, dental veneers, dental bonding, gum contouring, and full smile makeover procedures.',
    },
    {
      question: 'Is teeth whitening safe for my teeth?',
      answer:
        'Yes, professional teeth whitening is safe when performed under dental supervision. It effectively removes stains without damaging enamel.',
    },
    {
      question: 'How long does teeth whitening last?',
      answer:
        'The results of teeth whitening can last from several months to a few years depending on oral hygiene, diet, and lifestyle habits.',
    },
    {
      question: 'What are dental veneers and why are they used?',
      answer:
        'Dental veneers are thin custom-made shells placed on the front of teeth to improve appearance by correcting discoloration, chips, gaps, or uneven teeth.',
    },
    {
      question: 'Am I a good candidate for cosmetic dentistry?',
      answer:
        'You may be a good candidate if you have stained, chipped, crooked, or uneven teeth and want to improve your smile appearance.',
    },
    {
      question: 'How long do cosmetic dental treatments last?',
      answer:
        'The durability depends on the treatment. Veneers can last 10–15 years, while whitening may need periodic maintenance.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FAF7F2] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Cosmetic Dentistry FAQs
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Everything you need to know about smile enhancement and cosmetic dental treatments.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium text-gray-800 leading-relaxed">
                    {faq.question}
                  </span>

                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-[#8B7355] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}