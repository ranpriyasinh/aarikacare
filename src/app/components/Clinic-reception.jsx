'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-10 md:py-12 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Image with Floating Card */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/clinic-reception.jpg"
                alt="AARIKACARE Dental & Cosmetic Clinic"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-md p-4 max-w-[220px]">
              <h3 className="text-base font-bold text-gray-900 mb-1.5 leading-snug">
                Book Your Smile Consultation Today
              </h3>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Expert dental and cosmetic treatments designed to enhance your smile with precision and care.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a
                  href="tel:+917359900990"
                  className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  +91 73599 00990
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="md:pl-3 lg:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Your Trusted Dental & Cosmetic Smile Studio
            </h2>
            
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p className="text-sm md:text-base">
                At <span className="font-bold italic">AarikaCare Dental & Cosmetic Care</span>, we specialize in creating healthy, confident, and beautiful smiles. Our clinic offers advanced dental and cosmetic treatments including general dentistry, smile makeovers, teeth whitening, veneers, dental implants, and orthodontic care using modern, minimally invasive techniques.
              </p>
              
              <p className="text-sm md:text-base">
                We are committed to delivering painless, precise, and personalized care in a comfortable and welcoming environment. Whether you want to enhance your smile or maintain long-term oral health, AarikaCare focuses on combining aesthetics with dental excellence to help you look and feel your best.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}