// components/WhyChooseUs.jsx
export default function WhyChooseUs() {
  return (
    <section className="bg-[#F9F5F0] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            
            {/* Item 1 */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-16 h-16 bg-[#EDE5D8] rounded-full flex items-center justify-center text-[#8B6F4E]">
                {/* icon unchanged */}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Preventive Dental Care
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Regular dental check-ups help us detect concerns early, prevent complications, and maintain long-term oral health and a confident smile.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-16 h-16 bg-[#EDE5D8] rounded-full flex items-center justify-center text-[#8B6F4E]">
                {/* icon unchanged */}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Compassionate, Patient-Focused Care
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  At Aarikacare, every cosmetic and dental treatment is delivered with empathy, comfort, and individualized attention to ensure a stress-free experience.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-16 h-16 bg-[#EDE5D8] rounded-full flex items-center justify-center text-[#8B6F4E]">
                {/* icon unchanged */}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Prompt Dental Support & Emergency Care
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Our team is always prepared to assist with urgent dental concerns while ensuring continuous care for long-term oral health and comfort.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Aarikacare
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Aarikacare offers comprehensive dental and cosmetic solutions designed to enhance both oral health and smile aesthetics. From advanced smile makeovers, veneers, and dental implants to modern orthodontic treatments, we provide complete care under one roof. With state-of-the-art technology and a patient-first philosophy, we ensure precise, comfortable, and result-oriented treatments that help you smile with confidence.
            </p>

            {/* Image */}
            <div className="mt-4 rounded-lg overflow-hidden shadow-md w-full max-w-[580px] h-[385px]">
              <img 
                src="/Aboutimages/whycu.jpg" 
                alt="Dental Treatment at Aarikacare"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}