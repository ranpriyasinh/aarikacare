// components/DentalDepartment.jsx
export default function DentalDepartment() {
  return (
    <section className="bg-[#F9F5F0] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
          Comprehensive Dental Care Department
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              The Dental Department at <span className="font-semibold text-gray-800">Aarikacare</span> provides complete oral healthcare solutions focused on prevention, diagnosis, and advanced dental treatment. Our experienced dental professionals are committed to maintaining optimal oral health and restoring confident smiles.
            </p>

            <p>
              We follow a patient-centered approach, combining modern dental technology with evidence-based clinical practices to deliver accurate, comfortable, and effective treatments. From routine dental care to advanced restorative and surgical procedures, every treatment plan is carefully customized to individual patient needs.
            </p>

            <p>
              Our services include preventive dentistry, restorative treatments, orthodontics, oral surgery, and cosmetic dental procedures. At <span className="font-semibold text-gray-800">Aarikacare</span>, we prioritize long-term oral health, hygiene, and functional rehabilitation to ensure strong and healthy smiles for life.
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

// Services list (more dental-technical + professional)
const services = [
  "Orthodontic Treatment (Braces & Aligners)",
  "Clear Aligners Therapy",
  "Dental Implant Surgery",
  "Root Canal Therapy (Endodontic Treatment)",
  "Dental Veneers & Smile Enhancement",
  "Tooth Extraction & Surgical Removal",
  "Complete & Partial Dentures",
  "Periodontal Flap Surgery",
  "Digital Smile Design",
  "Professional Teeth Whitening"
];