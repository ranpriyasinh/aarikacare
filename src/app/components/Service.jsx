'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ServicesSection() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const services = [
    {
      title: 'Orthodontic Treatment',
      image: '/services/orthodontic.jpg',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <rect x="16" y="20" width="32" height="10" rx="2" />
          <rect x="16" y="34" width="32" height="10" rx="2" />
          <path d="M20 24h4M28 24h8M40 24h4M20 38h4M28 38h8M40 38h4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Aligners',
      image: '/services/aligners.jpg',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <path d="M18 28c0-6 6-10 14-10s14 4 14 10v8c0 6-6 10-14 10s-14-4-14-10v-8z" />
          <path d="M22 32h20M24 36h16" strokeLinecap="round" />
          <path d="M26 26l2 2M36 26l-2 2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Implants',
      image: '/services/implants.jpg',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <rect x="24" y="10" width="16" height="6" rx="1" />
          <path d="M28 16v6M36 16v6M32 22v18M26 40h12" strokeLinecap="round" />
          <path d="M20 44h24" strokeLinecap="round" />
          <circle cx="32" cy="13" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Root Canal Treatment',
      image: '/services/root-canal.jpg',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <path d="M32 12c-6 0-10 5-10 14 0 7 3 14 10 24 7-10 10-17 10-24 0-9-4-14-10-14z" />
          <path d="M28 26h8M28 32h8" strokeLinecap="round" />
          <path d="M32 20v4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Veneers',
      image: '/services/veneers.jpg',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <path d="M16 26c0-6 7-10 16-10s16 4 16 10v10c0 6-7 10-16 10s-16-4-16-10V26z" />
          <path d="M24 24v14M40 24v14M28 24v14M36 24v14" strokeLinecap="round" />
          <circle cx="44" cy="30" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Sports Injuries',
      image: '/services/sports-injuries.jpg',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <circle cx="32" cy="22" r="8" />
          <path d="M20 36h24M24 40v12M40 40v12M28 52h8" strokeLinecap="round" />
          <path d="M16 28l-4 8M48 28l4 8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Pre & Post Surgical Rehabilitation',
      image: '/services/surgical-rehab.jpg',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <rect x="14" y="18" width="36" height="28" rx="3" />
          <path d="M32 18v28M18 32h28" strokeLinecap="round" />
          <circle cx="32" cy="32" r="6" />
          <path d="M26 46h12" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Neurological Conditions',
      image: '/services/neurological.jpg',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <path d="M32 12c-8 0-14 7-14 16 0 5 2 10 6 13M32 12c8 0 14 7 14 16 0 5-2 10-6 13" />
          <path d="M26 41c-3 3-3 8 0 11M38 41c3 3 3 8 0 11" strokeLinecap="round" />
          <circle cx="32" cy="28" r="4" />
          <path d="M32 20v4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Musculoskeletal Conditions',
      image: '/services/musculoskeletal.jpg',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <path d="M32 14v10M26 20c0-4 3-6 6-6s6 2 6 6M22 30h20" strokeLinecap="round" />
          <path d="M26 38c0-6 3-10 6-10s6 4 6 10v14M30 52v8M34 52v8" strokeLinecap="round" />
          <circle cx="32" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Physical Therapy for Women's Health",
      image: '/services/womens-health.jpg',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <circle cx="32" cy="18" r="7" />
          <path d="M24 30h16M28 34v14M36 34v14M22 48h20" strokeLinecap="round" />
          <path d="M18 36l-4 8M46 36l4 8" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const isFlipped = flippedIndex === index;
            return (
              <div
                key={index}
                className="group h-[220px] cursor-pointer [perspective:1000px]"
                onClick={() => handleCardClick(index)}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <div 
                  className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] 
                    ${isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'}`}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow p-6 flex flex-col items-center justify-center [backface-visibility:hidden]">
                    <div className="text-gray-800 mb-4 transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 text-center leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-white rounded-xl shadow-md overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="relative w-full h-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority={index < 5}
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23F3F4F6" width="400" height="400"/%3E%3Ctext fill="%239CA3AF" font-family="Arial" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-4 px-3">
                        <h3 className="text-white text-sm font-medium text-center leading-tight">
                          {service.title}
                        </h3>
                      </div>
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