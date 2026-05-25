// components/CoreValues.jsx
export default function CoreValues() {
  return (
    <section className="bg-[#F3EFE8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Value 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-6 text-[#8B6F4E] group-hover:text-[#6B5436] transition-colors duration-300">
              {/* icon unchanged */}
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Innovation in Care
            </h3>
            
            <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
              At Aakiracare, we integrate advanced technology and modern techniques to deliver precise, efficient, and result-driven dental and cosmetic treatments.
            </p>
          </div>

          {/* Value 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-6 text-[#8B6F4E] group-hover:text-[#6B5436] transition-colors duration-300">
              {/* icon unchanged */}
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Patient-Centered Care
            </h3>
            
            <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
              Your comfort, needs, and confidence guide every treatment we provide, ensuring a personalized experience that enhances your smile and well-being.
            </p>
          </div>

          {/* Value 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-6 text-[#8B6F4E] group-hover:text-[#6B5436] transition-colors duration-300">
              {/* icon unchanged */}
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Trust & Integrity
            </h3>
            
            <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
              We are committed to honest communication, ethical practices, and transparent care—building long-term trust with every patient we serve.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}