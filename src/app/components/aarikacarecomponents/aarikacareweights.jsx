"use client";

import { useEffect, useState } from "react";

export default function ScrollFloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* LEFT - Call Button */}
      <a
        href="tel:+91 73599 00990"
        className="fixed bottom-6 left-6 z-50 flex flex-col items-center"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#b27652] text-white shadow-lg">
          {/* ripple effect */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b27652] opacity-40"></span>

          {/* icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>

        <span className="mt-2 text-xs font-medium text-[#b27652]">
          Call Us
        </span>
      </a>

      {/* RIGHT - Book Button */}
      <a
        href="#booking"
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#b27652] text-white shadow-lg">
          {/* ripple effect */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b27652] opacity-40"></span>

          <span className="text-xs font-bold text-center leading-tight">
            Book<br />Now
          </span>
        </div>

        <span className="mt-2 text-xs font-medium text-[#b27652]">
          Appointment
        </span>
      </a>
    </>
  );
}