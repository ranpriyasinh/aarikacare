// components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section className="bg-[#F9F5F0] py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-5 md:mb-6 leading-snug">
              Your Trusted Partner for Dental & Cosmetic Excellence
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm sm:text-base">
              At Aakiracare, we focus on delivering personalized, high-quality dental and cosmetic treatments tailored to each individual. 
              From smile makeovers and veneers to whitening, implants, and orthodontic care, our experienced team uses advanced techniques 
              to create natural, confident smiles. We are dedicated to enhancing both oral health and overall appearance through gentle, 
              modern care.
            </p>

            {/* Specialties */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                Our Specialties
              </h3>

              <ul className="space-y-3">
                {[
                  "Cosmetic Dentistry & Smile Design",
                  "Dental Implants & Veneers",
                  "Teeth Whitening & Bonding",
                  "Orthodontics & Invisalign"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                    <svg
                      className="w-5 h-5 mt-0.5 text-amber-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/bg_2.jpg"
                alt="Aakiracare Dental Team"
                className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}