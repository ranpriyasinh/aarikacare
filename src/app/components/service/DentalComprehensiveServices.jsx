// components/DentalComprehensiveServices.jsx
export default function DentalComprehensiveServices() {
  
  // Data array for the 3x3 grid
  const services = [
    {
      title: "Aligners Treatment",
      desc: "Specialized treatment to address complex dental needs with effective and advanced methods.",
      img: "/Dentalserviceimages/service-aligners.jpg"
    },
    {
      title: "Dental Implants",
      desc: "Permanent, natural-looking solution for replacing missing teeth with advanced implants.",
      img: "/Dentalserviceimages/service-implants.jpg"
    },
    {
      title: "Root Canal Treatment",
      desc: "Save your natural tooth by removing infection and restoring health with precise root canal therapy.",
      img: "/Dentalserviceimages/service-rootcanal.jpg"
    },
    {
      title: "Veneers",
      desc: "Enhance your smile with thin, custom-made veneers that cover imperfections for a flawless look.",
      img: "/Dentalserviceimages/service-veneers.jpg"
    },
    {
      title: "Tooth Extraction",
      desc: "Safe and effective removal of damaged or problematic teeth to improve overall oral health.",
      img: "/Dentalserviceimages/service-extraction.jpg"
    },
    {
      title: "Complete Denture",
      desc: "Restorative dentures that replace missing teeth, providing comfort and functionality.",
      img: "/Dentalserviceimages/service-denture.jpg"
    },
    {
      title: "Flap Surgery",
      desc: "Surgical procedure to treat gum disease and restore health to the underlying bone and tissue.",
      img: "/Dentalserviceimages/service-flap.jpg"
    },
    {
      title: "Smile Design",
      desc: "Customized treatments that improve the overall appearance of your smile.",
      img: "/Dentalserviceimages/service-smile.jpg"
    },
    {
      title: "Teeth Bleaching",
      desc: "Safe, effective whitening treatment to brighten your smile and boost confidence.",
      img: "/Dentalserviceimages/service-bleaching.jpg"
    }
  ];

  return (
    <section className="bg-[#F3EFE8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Comprehensive Dental Services
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white rounded-lg overflow-hidden shadow-sm
                hover:shadow-md hover:scale-[1.02]
                transition-all duration-300
                border border-transparent hover:border-[#8B6F4E]
              "
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}