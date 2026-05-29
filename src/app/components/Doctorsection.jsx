'use client';

import Image from 'next/image';

export default function DoctorsSection() {
  const doctor = {
    name: 'Dr. Mansi Patel',
    role: 'Dental surgeon and Cosmetologist ',
    image: '/doctors/d.jpg',
    description:
      'Dedicated to designing healthy, confident smiles through advanced orthodontic and cosmetic dental care. With a focus on precision, aesthetics, and patient comfort, every treatment is carefully planned to achieve natural-looking, long-lasting results tailored to individual facial harmony.',
  };

  return (
    <section className="py-20 md:py-28 bg-[#F5EFE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Specialist
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Expert In general dentistry  and cosmetic care focused on precision, aesthetics, and patient comfort.
          </p>
        </div>

        {/* Doctor Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[520px]">

          {/* Image Side */}
          <div className="md:w-2/5 relative min-h-[360px] md:min-h-full">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Content Side */}
          <div className="md:w-3/5 p-10 md:p-14 flex flex-col justify-center">
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {doctor.name}
            </h3>

            <p className="text-[#B8860B] font-semibold text-lg mb-6">
              {doctor.role}
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              {doctor.description}
            </p>

            {/* Social */}
            <div className="flex items-center gap-5">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              <a href="#" className="text-gray-400 hover:text-pink-600 transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                </svg>
              </a>
            </div>

            <a
              href="#"
              className="mt-6 inline-block text-[#8B7355] font-semibold text-lg hover:underline"
            >
              View Full Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}