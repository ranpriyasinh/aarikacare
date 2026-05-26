'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Our Team',
    href: '/team',
    dropdown: [
      { name: 'Dr Mansi Patel', href: '/team' },
      
    ],
  },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Dental Care', href: '/services/dental' },
      { name: 'Cosmetic Care', href: '/aarikacare' },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === '/aarikacare') {
    return null;
  }
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setIsMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 🖱️ Hover handlers for desktop dropdowns
  const handleMouseEnter = (name) => {
    // Clear any pending close timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow cursor to move to dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms grace period for smooth hover experience
    setHoverTimeout(timeout);
  };

  // 🎨 Dynamic styles based on scroll state
  const navBg = isScrolled ? 'bg-white' : 'bg-transparent';
  const textColor = isScrolled ? 'text-gray-900' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-400';
  const shadowClass = isScrolled ? 'shadow-lg' : '';
  
  // Mobile menu styles (always dark for contrast)
  const mobileBg = 'bg-black/95';
  const mobileText = 'text-white';
  const mobileHover = 'hover:text-blue-400 hover:bg-gray-800/50';

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${shadowClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="AARIKACARE"
              width={70}
              height={70}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                // 🖱️ Apply hover handlers only to items with dropdowns
                onMouseEnter={link.dropdown ? () => handleMouseEnter(link.name) : undefined}
                onMouseLeave={link.dropdown ? handleMouseLeave : undefined}
              >
                {link.dropdown ? (
                  <>
                    <button
                      // ✅ Keep onClick for accessibility (keyboard users)
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium ${textColor} ${hoverColor} transition-colors cursor-pointer`}
                      aria-expanded={activeDropdown === link.name}
                      aria-haspopup="true"
                    >
                      {link.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {/* 🎯 Dropdown Menu - also gets hover handlers via parent div */}
                    {activeDropdown === link.name && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-2 animate-fade-in z-50"
                        // 🖱️ Prevent dropdown from closing when cursor is over it
                        onMouseEnter={() => {
                          if (hoverTimeout) {
                            clearTimeout(hoverTimeout);
                            setHoverTimeout(null);
                          }
                        }}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              if (hoverTimeout) clearTimeout(hoverTimeout);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium ${textColor} ${hoverColor} transition-colors relative group`}
                  >
                    {link.name}
                    <span className={`absolute bottom-1 left-1/2 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-3/4 group-hover:-translate-x-1/2 ${isScrolled ? 'bg-blue-600' : 'bg-blue-400'}`} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Contact Icons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+911234567890"
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                isScrolled 
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-900' 
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
              aria-label="Call Us"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                isScrolled 
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-900' 
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 ${textColor} ${hoverColor} transition-colors`}
            aria-label="Toggle navigation"
          >
            {isMobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - kept dark for readability (click-based, unchanged) */}
      {isMobileOpen && (
        <div className={`lg:hidden ${mobileBg} backdrop-blur-md border-t border-gray-800`}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className={`flex items-center justify-between w-full px-3 py-3 ${mobileText} ${mobileHover} transition-colors`}
                    >
                      <span>{link.name}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`block px-3 py-2 text-sm ${mobileText} ${mobileHover} rounded-lg transition-colors`}
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMobileOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-3 py-3 ${mobileText} ${mobileHover} rounded-lg transition-colors`}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Contact Buttons */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <a
                href="tel:+911234567890"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span className="text-sm font-medium">Call Us</span>
              </a>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}