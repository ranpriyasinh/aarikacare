// components/PageHeader.jsx
import Link from 'next/link';

export default function DoctorsSection({ title, image }) {
  // Default background image if none is provided
  const bgImage = image || "/Aboutimages/banner.jpg"; 

  return (
    <div className="relative w-full h-[350px] md:h-[450px] flex items-center">
      
      {/* Background Image */}
      <img 
        src={bgImage} 
        alt="Page Header Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm md:text-base text-white">
          
          <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
           Home 
          </Link>
          <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">
            Dr Mansi Patel
          </Link>

          {/* Arrow Icon */}
          

          <span className="font-medium">{title}</span>
        </nav>
      </div>
    </div>
  );
}