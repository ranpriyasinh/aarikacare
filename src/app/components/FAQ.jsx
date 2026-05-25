'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    // 🦷 DENTAL
    {
      question: 'What dental services do you offer at AARIKACARE?',
      answer:
        'We offer complete dental care including general dentistry, root canal treatment, dental implants, orthodontics, preventive care, and pediatric dentistry.',
    },
    {
      question: 'How often should I visit a dentist?',
      answer:
        'It is recommended to visit a dentist every 6 months for routine checkups and professional cleaning to maintain good oral health.',
    },
    {
      question: 'Are dental implants a good long-term solution?',
      answer:
        'Yes, dental implants are a durable and natural-looking solution for replacing missing teeth and can last many years with proper care.',
    },

    // ✨ COSMETIC DENTISTRY
    {
      question: 'What is cosmetic dentistry?',
      answer:
        'Cosmetic dentistry focuses on improving the appearance of your teeth and smile using treatments like teeth whitening, veneers, bonding, and smile makeovers.',
    },
    {
      question: 'Is teeth whitening safe?',
      answer:
        'Yes, professional teeth whitening performed under dental supervision is safe and effective without damaging the enamel.',
    },
    {
      question: 'What are dental veneers used for?',
      answer:
        'Veneers are thin shells placed on teeth to improve their appearance by fixing discoloration, chips, gaps, or minor misalignment.',
    },

    // 🏃 PHYSIOTHERAPY
    {
      question: 'How can physiotherapy help in recovery?',
      answer:
        'Physiotherapy helps restore movement, reduce pain, and improve strength using guided exercises and rehabilitation techniques.',
    },
    {
      question: 'Do I need physiotherapy after surgery?',
      answer:
        'Yes, post-surgical physiotherapy is often recommended to speed up healing, restore mobility, and prevent complications.',
    },
    {
      question: 'What conditions can physiotherapy treat?',
      answer:
        'Physiotherapy can treat back pain, joint injuries, sports injuries, post-surgical recovery, and mobility issues.',
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
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Everything you need to know about AARIKACARE services.
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