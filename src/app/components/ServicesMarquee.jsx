'use client';

export default function ServicesMarquee() {
  const services = [
    'Veneers',
    'Root Canal Treatment',
    'Teeth Whitening',
    'Dental Implants',
    'Cosmetic Bonding',
    'Orthodontics',
    'Dental Crowns',
    'Smile Makeover',
    'Porcelain Veneers',
    'Gum Contouring',
    'Invisalign',
    'Teeth Cleaning',
    'Wisdom Teeth Removal',
    'Dental Bridges',
    'Cosmetic Dentistry',
    'Full Mouth Reconstruction',
  ];

  return (
    <div className="relative w-full bg-[#F5EFE6] overflow-hidden py-4 border-y border-[#E0D5C5]">
      {/* Gradient Fade Effects - Left */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#F5EFE6] to-transparent z-10 pointer-events-none" />
      
      {/* Gradient Fade Effects - Right */}
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#F5EFE6] to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling Container with CSS Animation */}
      <div 
        className="flex animate-[marquee_15s_linear_infinite] hover:[animation-play-state:paused]"
        style={{ willChange: 'transform' }}
      >
        {/* First Set of Services */}
        <div className="flex items-center gap-8 md:gap-12 px-4 flex-shrink-0">
          {services.map((service, index) => (
            <div key={`first-${index}`} className="flex items-center whitespace-nowrap">
              <span className="text-[#8B7355] font-medium text-base md:text-lg px-4 md:px-6">
                {service}
              </span>
              
            </div>
          ))}
        </div>
        
        {/* Second Set (Duplicate for seamless infinite loop) */}
        <div className="flex items-center gap-8 md:gap-12 px-4 flex-shrink-0">
          {services.map((service, index) => (
            <div key={`second-${index}`} className="flex items-center whitespace-nowrap">
              <span className="text-[#8B7355] font-medium text-base md:text-lg px-4 md:px-6">
                {service}
              </span>
              <span className="text-[#C4B5A0] text-xl md:text-2xl hidden sm:inline">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Keyframes for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}