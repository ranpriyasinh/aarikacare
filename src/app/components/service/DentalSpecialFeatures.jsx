// components/SpecialFeatures.jsx
export default function DentalSpecialFeatures() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Aboutimages/banner.jpg" 
          alt="Clinic Interior" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Our Special Features
        </h2>

        {/* Grid: 1 col mobile -> 2 col tablet -> 4 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Feature Card 1 */}
          <div className="bg-white rounded-xl p-8 text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-3 cursor-pointer">
            <div className="w-16 h-16 bg-[#F3EFE8] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#8B6F4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"/>
                <path d="M9 21h6"/>
                <path d="M10 17v4"/>
                <path d="M14 17v4"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Free Checkup</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get a complimentary consultation to assess your dental health and discuss your treatment options.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-xl p-8 text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-3 cursor-pointer">
            <div className="w-16 h-16 bg-[#F3EFE8] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#8B6F4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Available 24/7</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We're available for your dental needs, offering flexible hours to accommodate your schedule.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-xl p-8 text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-3 cursor-pointer">
            <div className="w-16 h-16 bg-[#F3EFE8] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#8B6F4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m11 17 2 2a1 1 0 1 0 3-3"/>
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
                <path d="m21 3 1 11h-2"/>
                <path d="M3 3 2 14l6.5 6.5a1 1 0 0 0 1-1"/>
                <path d="M3 4h8"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Care with a Smile</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our team is dedicated to providing care with warmth, making your experience as comfortable as possible.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white rounded-xl p-8 text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-3 cursor-pointer">
            <div className="w-16 h-16 bg-[#F3EFE8] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#8B6F4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12.55a11 11 0 0 1 14.08 0"/>
                <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                <line x1="12" y1="20" x2="12.01" y2="20"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Heartfelt Service</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Akiracare, we genuinely care about your health and well-being, offering personalized, heartfelt service.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}