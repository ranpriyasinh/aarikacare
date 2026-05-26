const VisibleResults = () => {
  return (
    <section className="bg-[#FFF9F5] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#F5E6DC]">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-semibold text-[#A67B5B] mb-3">
          Visible Results
        </h2>
        
        {/* Main Text */}
        <p className="text-gray-800 text-sm sm:text-base md:text-lg font-medium mb-3 px-2">
          Up to noticeable improvement in skin clarity, texture, and hair or scalp health within 3-6 sessions*
        </p>
        
        {/* Disclaimer */}
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto px-2">
          *Disclaimer: Results may vary based on individual skin or hair type, treatment area, and consistency. 
          A personalized consultation with a certified Aarikacare dermatologist is essential before starting any procedure.
        </p>
        
      </div>
    </section>
  );
};

export default VisibleResults;