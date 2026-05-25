'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    // 🦷 GENERAL DENTAL ONLY

    {
      question: 'What dental services do you offer?',
      answer:
        'We provide complete dental care including general dentistry, root canal treatment, dental implants, fillings, gum treatment, and preventive dental care.',
    },
    {
      question: 'How often should I visit a dentist?',
      answer:
        'It is recommended to visit a dentist every 6 months for regular checkups, cleaning, and early detection of dental problems.',
    },
    {
      question: 'What is a root canal treatment?',
      answer:
        'A root canal treatment is a procedure used to remove infected or damaged pulp inside a tooth, clean it, and seal it to save the natural tooth.',
    },
    {
      question: 'Do dental treatments hurt?',
      answer:
        'Modern dental treatments are usually painless due to advanced techniques, anesthesia, and patient-friendly procedures.',
    },
    {
      question: 'What are dental implants?',
      answer:
        'Dental implants are artificial tooth roots placed into the jawbone to support replacement teeth, offering a long-lasting solution for missing teeth.',
    },
    {
      question: 'How can I prevent tooth decay?',
      answer:
        'You can prevent tooth decay by brushing twice daily, flossing, reducing sugar intake, and visiting your dentist regularly for cleaning.',
    },
    {
      question: 'What should I do in a dental emergency?',
      answer:
        'In case of a dental emergency like severe pain, broken tooth, or swelling, you should contact your dentist immediately for urgent care.',
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
            Dental Care FAQs
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Everything you need to know about general dentistry and oral health care.
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