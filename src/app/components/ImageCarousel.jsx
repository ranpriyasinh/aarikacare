'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

const galleryImages = [
  '/gallery/clinic1.jpg',
  '/gallery/clinic2.jpg',
  '/gallery/clinic3.jpg',
  '/gallery/clinic4.jpg',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(galleryImages.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  const trackRef = useRef(null);
  const autoScrollRef = useRef(null);

  const TRANSITION_DURATION = 600;
  const AUTO_SCROLL_DELAY = 1000;

  const extendedImages = [
    ...galleryImages,
    ...galleryImages,
    ...galleryImages,
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const moveToIndex = useCallback((targetIndex, animate = true) => {
    if (!trackRef.current) return;

    const track = trackRef.current;

    if (animate) {
      setIsTransitioning(true);
      track.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
    } else {
      track.style.transition = 'none';
    }

    const firstItem = track.children[0];

    if (firstItem) {
      const itemWidth = firstItem.getBoundingClientRect().width;
      const gap = 16;
      const totalOffset = targetIndex * (itemWidth + gap);

      track.style.transform = `translateX(-${totalOffset}px)`;
    }

    if (animate) {
      setTimeout(() => {
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    }
  }, []);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;

    const newIndex = currentIndex + 1;

    setCurrentIndex(newIndex);
    moveToIndex(newIndex, true);

    if (newIndex >= galleryImages.length * 2) {
      setTimeout(() => {
        const resetIndex = newIndex - galleryImages.length;

        setCurrentIndex(resetIndex);
        moveToIndex(resetIndex, false);
      }, TRANSITION_DURATION);
    }
  }, [currentIndex, isTransitioning, moveToIndex]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;

    const newIndex = currentIndex - 1;

    setCurrentIndex(newIndex);
    moveToIndex(newIndex, true);

    if (newIndex < galleryImages.length) {
      setTimeout(() => {
        const resetIndex = newIndex + galleryImages.length;

        setCurrentIndex(resetIndex);
        moveToIndex(resetIndex, false);
      }, TRANSITION_DURATION);
    }
  }, [currentIndex, isTransitioning, moveToIndex]);

  useEffect(() => {
    if (!mounted) return;

    autoScrollRef.current = setInterval(() => {
      handleNext();
    }, AUTO_SCROLL_DELAY);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [handleNext, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const init = setTimeout(() => {
      moveToIndex(currentIndex, false);
    }, 100);

    const handleResize = () => {
      moveToIndex(currentIndex, false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(init);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex, moveToIndex, mounted]);

  if (!mounted) return null;

  return (
    <section className="relative w-full py-10 md:py-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/services.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all backdrop-blur-sm hover:scale-110"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all backdrop-blur-sm hover:scale-110"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="overflow-hidden rounded-2xl">
          <div
            ref={trackRef}
            className="flex gap-4"
            style={{ transform: 'translateX(0)' }}
          >
            {extendedImages.map((src, index) => (
              <div
                key={`${index}-${src}`}
                className="flex-shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-800 group">
                  <Image
                    src={src}
                    alt={`Gallery ${index}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={
                      index >= galleryImages.length &&
                      index < galleryImages.length + 4
                    }
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}