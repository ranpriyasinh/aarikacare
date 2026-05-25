const TreatmentTags = () => {
  const treatments = [
    "Laser Hair Reduction Clinic Near Me",
    "Best Acne Treatment for Indian Skin",
    "Anti Ageing Treatment Clinic",
    "Hydrafacial Near Me",
    "Hair Fall Treatment for Men and Women",
    "Permanent Hair Reduction Solutions",
    "Pigmentation Reduction Treatment",
    "Wrinkle Reduction Dermatologist",
    "Face Glow Facial Treatment",
    "Hair Regrowth Laser Therapy",
    "Laser Hair Reduction for Women",
    "Advanced Skin and Hair Clinic India",
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Flex container for tags */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {treatments.map((treatment, index) => (
            <button
              key={index}
              className="bg-[#B88A74] hover:bg-[#A67B5B] text-white text-sm sm:text-base font-medium py-2.5 px-5 sm:py-3 sm:px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              {treatment}
            </button>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TreatmentTags;