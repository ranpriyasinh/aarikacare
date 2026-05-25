// components/Testimonials.jsx
"use client";

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Architect",
    image: "/images/testimonial-1.jpg",
    text: "I got my dental implants done at Aarikacare, and the entire experience was seamless. The team ensured complete comfort throughout the procedure, and the final result looks completely natural. My smile feels stronger and more confident than ever."
  },
  {
    id: 2,
    name: "Priya Shah",
    role: "Teacher",
    image: "/images/testimonial-2.jpg",
    text: "I went for a complete smile makeover including veneers and cosmetic contouring. The results were beyond my expectations. My smile now looks brighter, balanced, and naturally beautiful."
  },
  {
    id: 3,
    name: "Rahul Patel",
    role: "Business Owner",
    image: "/images/testimonial-3.jpg",
    text: "Aarikacare provided excellent care for my root canal and crown treatment. The procedure was completely painless, and the cosmetic finish of the crown blends perfectly with my natural teeth."
  },
  {
    id: 4,
    name: "Sneha Joshi",
    role: "Fashion Designer",
    image: "/images/testimonial-4.jpg",
    text: "I underwent teeth whitening and clear aligner treatment, and the transformation is incredible. My smile looks cleaner, whiter, and more aligned—exactly the aesthetic result I wanted."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(testimonials.length / 2) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(testimonials.length / 2) - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const firstItemIndex = currentIndex * 2;
    const secondItemIndex = firstItemIndex + 1;

    return [
      testimonials[firstItemIndex],
      secondItemIndex < testimonials.length ? testimonials[secondItemIndex] : null
    ].filter(Boolean);
  };

  const visibleItems = getVisibleTestimonials();

  return (
    <section className="bg-[#F3EFE8] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Patient Experiences
          </h2>
          <p className="text-gray-600">
            Real stories from patients who transformed their smiles with our dental and cosmetic treatments
          </p>
        </div>

        {/* Slider */}
        <div className="flex items-center justify-center relative">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors text-gray-600 hover:text-[#8B6F4E]"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Testimonials */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-12 md:px-20">
            {visibleItems.map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center p-4">

                {/* Image */}
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#8B6F4E]/20">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base italic">
                  "{item.text}"
                </p>

                {/* Name */}
                <h4 className="text-lg font-bold text-gray-800">
                  {item.name}
                </h4>

                <span className="text-sm text-[#8B6F4E]">
                  {item.role}
                </span>

              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors text-gray-600 hover:text-[#8B6F4E]"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}