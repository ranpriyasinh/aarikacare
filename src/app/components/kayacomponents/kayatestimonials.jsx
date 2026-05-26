"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";

// --- Icons ---
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#f5c518]"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white"
  >
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#2d6a4f]"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// --- Data ---
const testimonials = [
  {
    id: 1,
    name: "Fatima K.",
    category: "Anti-Ageing",
    text: "Clear process, expert team, and skin that glows!",
    verified: true,
  },
  {
    id: 2,
    name: "Tanvi R.",
    category: "Hair Care",
    text: "Noticed less hair fall and better volume in just weeks.",
    verified: true,
  },
  {
    id: 3,
    name: "Riya M.",
    category: "Pigmentation",
    text: "Visible glow and reduced pigmentation after just two sessions!",
    verified: true,
  },
  {
    id: 4,
    name: "Pooja S.",
    category: "Laser Hair Reduction",
    text: "Loved the care and results. So glad I trusted Aarikacare!",
    verified: true,
  },
];

export default function KayaTestimonials() {
  const trackRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [cardWidth, setCardWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const TRANSITION_DURATION = 600;
  const AUTO_SCROLL_DELAY = 3000;

  // Triple array for infinite loop
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // Measure card width
  const updateCardWidth = useCallback(() => {
    if (!trackRef.current || !trackRef.current.firstElementChild) return;

    const item = trackRef.current.firstElementChild;
    const gap = 24;

    setCardWidth(item.getBoundingClientRect().width + gap);
  }, []);

  useEffect(() => {
    updateCardWidth();

    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, [updateCardWidth]);

  // Move carousel
  const moveToIndex = useCallback(
    (targetIndex, animate = true) => {
      if (!trackRef.current || cardWidth === 0) return;

      const track = trackRef.current;

      if (animate) {
        setIsTransitioning(true);
        track.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
      } else {
        track.style.transition = "none";
      }

      const offset = targetIndex * cardWidth;

      track.style.transform = `translateX(-${offset}px)`;

      if (animate) {
        setTimeout(() => {
          setIsTransitioning(false);
        }, TRANSITION_DURATION);
      }
    },
    [cardWidth]
  );

  // NEXT
  const handleNext = useCallback(() => {
    if (isTransitioning) return;

    const newIndex = currentIndex + 1;

    setCurrentIndex(newIndex);
    moveToIndex(newIndex, true);

    if (newIndex >= testimonials.length * 2) {
      setTimeout(() => {
        const reset = newIndex - testimonials.length;

        setCurrentIndex(reset);
        moveToIndex(reset, false);
      }, TRANSITION_DURATION);
    }
  }, [currentIndex, isTransitioning, moveToIndex]);

  // PREV
  const handlePrev = useCallback(() => {
    if (isTransitioning) return;

    const newIndex = currentIndex - 1;

    setCurrentIndex(newIndex);
    moveToIndex(newIndex, true);

    if (newIndex < testimonials.length) {
      setTimeout(() => {
        const reset = newIndex + testimonials.length;

        setCurrentIndex(reset);
        moveToIndex(reset, false);
      }, TRANSITION_DURATION);
    }
  }, [currentIndex, isTransitioning, moveToIndex]);

  // AUTO SCROLL
  useEffect(() => {
    if (isPaused || cardWidth === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_SCROLL_DELAY);

    return () => clearInterval(interval);
  }, [handleNext, isPaused, cardWidth]);

  // INITIAL POSITION
  useEffect(() => {
    const timeout = setTimeout(() => {
      moveToIndex(currentIndex, false);
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, moveToIndex]);

  return (
    <div className="w-full overflow-hidden bg-[#f0f6fb] py-14 px-4">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-black">
          What Our <span className="text-[#a87b5e]">Clients Say</span>
        </h2>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:bg-gray-100 text-black"
        >
          <ChevronLeftIcon />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:bg-gray-100 text-black"
        >
          <ChevronRightIcon />
        </button>

        {/* Track */}
        <div ref={trackRef} className="flex gap-6">
          {extendedTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[calc(33.333%-16px)]"
            >
              <div className="relative h-full rounded-2xl border border-pink-100 bg-[#fff0f3] p-6 pt-10 shadow-sm text-black">
                {/* Quote Icon */}
                <div className="absolute left-4 -top-3 rounded-full bg-[#a87b5e] p-2 shadow">
                  <QuoteIcon />
                </div>

                {/* Stars */}
                <div className="mb-3 flex justify-center gap-1">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>

                {/* Testimonial Text */}
                <p className="min-h-[60px] text-center text-[14px] italic leading-relaxed text-black">
                  {item.text}
                </p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">
                  <div>
                    <h4 className="text-sm font-bold text-black">
                      {item.name}
                    </h4>

                    <p className="text-[12px] font-medium text-[#a87b5e]">
                      {item.category}
                    </p>
                  </div>

                  {item.verified && (
                    <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                      <CheckIcon />

                      <span className="text-[11px] font-medium text-black">
                        Verified
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, index) => {
          const activeIndex = currentIndex % testimonials.length;

          return (
            <button
              key={index}
              onClick={() => {
                const target = testimonials.length + index;

                setCurrentIndex(target);
                moveToIndex(target, true);
              }}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#a87b5e] w-6"
                  : "bg-gray-300"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}