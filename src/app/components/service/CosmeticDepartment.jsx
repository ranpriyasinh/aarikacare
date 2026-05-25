// components/CosmeticDepartment.jsx
export default function CosmeticDepartment() {
  return (
    <section className="bg-[#F9F5F0] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
          Cosmetic Dentistry & Smile Aesthetics
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              The Cosmetic Dentistry Department at <span className="font-semibold text-gray-800">Aarikacare</span> is dedicated to creating beautifully balanced smiles through advanced aesthetic dentistry and precision-driven treatments. Our specialists focus on enhancing smile appearance, symmetry, and overall facial harmony.
            </p>

            <p>
              By combining modern dental technology with artistic expertise, we deliver customized smile transformations tailored to each patient’s facial structure and personal goals. From subtle refinements to complete smile makeovers, every treatment is designed to achieve natural-looking and long-lasting results.
            </p>

            <p>
              At <span className="font-semibold text-gray-800">Aarikacare</span>, we believe that an attractive smile builds confidence and transforms personality. Our cosmetic procedures prioritize comfort, precision, and aesthetics, ensuring a seamless and satisfying treatment experience.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-[#8B6F4E] flex-shrink-0 mt-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

// Services list
const services = [
  "Digital Smile Design",
  "Professional Teeth Whitening",
  "Porcelain & Composite Veneers",
  "Gum Contouring & Reshaping",
  "Cosmetic Dental Bonding",
  "Clear Aligners (Invisible Braces)",
  "Ceramic & Aesthetic Braces",
  "Comprehensive Smile Makeover",
  "Aesthetic Crowns & Restorations",
  "Smile Line & Lip Harmony Enhancement"
];