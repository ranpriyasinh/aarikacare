// // components/CosmeticServices.jsx
// export default function CosmeticServices() {

//   // Data array for the grid
//   const services = [
//     {
//       title: "Smile Makeover",
//       desc: "Comprehensive cosmetic treatments designed to transform and enhance your smile.",
//       img: "/Cosmeticserviceimages/service-smile-makeover.jpg"
//     },
//     {
//       title: "Teeth Whitening",
//       desc: "Professional whitening treatments to brighten your teeth safely and effectively.",
//       img: "/Cosmeticserviceimages/service-whitening.jpg"
//     },
//     {
//       title: "Dental Veneers",
//       desc: "Custom-made veneers that improve shape, color, and alignment for a perfect smile.",
//       img: "/Cosmeticserviceimages/service-veneers.jpg"
//     },
//     {
//       title: "Cosmetic Bonding",
//       desc: "Quick and effective repair for chipped, cracked, or discolored teeth.",
//       img: "/Cosmeticserviceimages/service-bonding.jpg"
//     },
//     {
//       title: "Gum Contouring",
//       desc: "Reshaping of gum line to create a balanced and aesthetically pleasing smile.",
//       img: "/Cosmeticserviceimages/service-gum-contouring.jpg"
//     },
//     {
//       title: "Dental Contouring",
//       desc: "Subtle reshaping of teeth to improve symmetry and overall appearance.",
//       img: "/Cosmeticserviceimages/service-contouring.jpg"
//     },
//     {
//       title: "Tooth Jewelry",
//       desc: "Stylish dental accessories to add a unique sparkle to your smile.",
//       img: "/Cosmeticserviceimages/service-tooth-jewelry.jpg"
//     },
//     {
//       title: "Lip & Smile Design",
//       desc: "Harmonizing lips and teeth for a naturally enhanced facial aesthetic.",
//       img: "/Cosmeticserviceimages/service-lip-smile.jpg"
//     },
//     {
//       title: "Digital Smile Design",
//       desc: "Advanced digital planning to preview and achieve your ideal smile outcome.",
//       img: "/Cosmeticserviceimages/service-dsd.jpg"
//     }
//   ];

//   return (
//     <section className="bg-[#F3EFE8] py-16 md:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//           Cosmetic Dental Services
//         </h2>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="
//                 bg-white rounded-lg overflow-hidden shadow-sm
//                 hover:shadow-md hover:scale-[1.02]
//                 transition-all duration-300
//                 border border-transparent hover:border-[#8B6F4E]
//               "
//             >
//               {/* Image */}
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={service.img}
//                   alt={service.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6 text-center">
//                 <h3 className="text-lg font-bold text-gray-800 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {service.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// components/CosmeticServices.jsx
export default function CosmeticServices() {

  // Data array for the grid
  const services = [
    {
      title: "Glow Facial Treatment",
      desc: "Deep cleansing facial designed to refresh and brighten your skin.",
      img: "/Cosmeticserviceimages/service-facial.jpg"
    },
    {
      title: "Skin Whitening Therapy",
      desc: "Safe and effective treatment to improve skin tone and radiance.",
      img: "/Cosmeticserviceimages/service-whitening.jpg"
    },
    {
      title: "Anti-Aging Treatment",
      desc: "Advanced care to reduce fine lines and restore youthful skin.",
      img: "/Cosmeticserviceimages/service-antiaging.jpg"
    },
    {
      title: "Skin Rejuvenation",
      desc: "Revitalizing treatment to repair dull and damaged skin.",
      img: "/Cosmeticserviceimages/service-rejuvenation.jpg"
    },
    {
      title: "Face Contouring",
      desc: "Non-surgical contouring to enhance facial structure and symmetry.",
      img: "/Cosmeticserviceimages/service-contouring.jpg"
    },
    {
      title: "Body Polishing",
      desc: "Exfoliation treatment for smooth, soft, and glowing skin.",
      img: "/Cosmeticserviceimages/service-body-polishing.jpg"
    },
    {
      title: "Makeup Styling",
      desc: "Professional makeup services for events, weddings, and special occasions.",
      img: "/Cosmeticserviceimages/service-makeup.jpg"
    },
    {
      title: "Lip Enhancement Care",
      desc: "Hydration and enhancement treatments for naturally fuller lips.",
      img: "/Cosmeticserviceimages/service-lip-care.jpg"
    },
    {
      title: "Digital Beauty Analysis",
      desc: "Advanced analysis to design your personalized beauty plan.",
      img: "/Cosmeticserviceimages/service-analysis.jpg"
    }
  ];

  return (
    <section className="bg-[#F3EFE8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Cosmetic Services
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