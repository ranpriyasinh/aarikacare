'use client';

import { useState, useEffect } from 'react';

const heroImages = [
  '/bg_1.jpg',
  '/bg_2.jpg',
  '/bg_3.jpg',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Images with Transition */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Heading - Decreased sizes */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            A BALANCED LIFE WITH HOLISTIC WELL-BEING
          </h1>
          
          {/* Description - Decreased sizes */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
            Professional Dental and Cosmetic Care Designed to Improve Your Daily Life and Revitalise Your Health.
          </p>
          
          {/* Button - Decreased sizes */}
          <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm sm:text-base shadow-lg">
            Book Now
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator - Slightly smaller */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-5 h-5 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}