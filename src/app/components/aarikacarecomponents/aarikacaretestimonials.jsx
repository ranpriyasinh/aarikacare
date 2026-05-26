"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";

// --- Icons ---
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="#f5c518">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// --- Data ---
const testimonials = [
  { id: 1, name: "Ankit J.", category: "Acne & Pigmentation", text: "Flawless service and real improvement in my skin texture.", verified: true },
  { id: 2, name: "Fatima K.", category: "Anti-Ageing", text: "Clear process, expert team, and skin that glows!", verified: true },
  { id: 3, name: "Tanvi R.", category: "Hair Care", text: "Noticed less hair fall and better volume in just weeks.", verified: true },
  { id: 4, name: "Riya M.", category: "Pigmentation", text: "Visible glow and reduced pigmentation after just two sessions!", verified: true },
  { id: 5, name: "Pooja S.", category: "Laser Hair Reduction", text: "Loved the care and results. So glad I trusted Aarikacare!", verified: true },
];

// How many cards to show based on screen width
function getCardsVisible(width) {
  if (width < 540) return 1;
  if (width < 900) return 2;
  return 3;
}

export default function AarikacareTestimonials() {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [cardWidth, setCardWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(3);

  const TRANSITION_DURATION = 500;
  const AUTO_SCROLL_DELAY = 3000;
  const GAP = 20;

  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const updateLayout = useCallback(() => {
    if (!wrapperRef.current || !trackRef.current || !trackRef.current.firstElementChild) return;
    const ww = wrapperRef.current.getBoundingClientRect().width;
    const cv = getCardsVisible(ww);
    setCardsVisible(cv);
    const item = trackRef.current.firstElementChild;
    setCardWidth(item.getBoundingClientRect().width + GAP);
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(updateLayout);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    updateLayout();
    return () => ro.disconnect();
  }, [updateLayout]);

  const moveToIndex = useCallback((targetIndex, animate = true) => {
    if (!trackRef.current || cardWidth === 0) return;
    const track = trackRef.current;
    if (animate) {
      setIsTransitioning(true);
      track.style.transition = `transform ${TRANSITION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`;
    } else {
      track.style.transition = "none";
    }
    track.style.transform = `translateX(-${targetIndex * cardWidth}px)`;
    if (animate) setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
  }, [cardWidth]);

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

  useEffect(() => {
    if (isPaused || cardWidth === 0) return;
    const interval = setInterval(handleNext, AUTO_SCROLL_DELAY);
    return () => clearInterval(interval);
  }, [handleNext, isPaused, cardWidth]);

  // Re-snap position when cardWidth updates (resize)
  useEffect(() => {
    if (cardWidth > 0) moveToIndex(currentIndex, false);
  }, [cardWidth]);

  const activeIndex = currentIndex % testimonials.length;

  // card width style based on cardsVisible
  const cardStyle = {
    flexShrink: 0,
    width: cardsVisible === 1
      ? `calc(100% - ${GAP}px)`
      : cardsVisible === 2
        ? `calc(50% - ${GAP * 0.75}px)`
        : `calc(33.333% - ${GAP * 0.75}px)`,
  };

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
        background: "linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 50%, #e8f4fd 100%)",
        padding: "56px 16px 48px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Inject style for quote badge text */}
      <style>{`
        .quote-badge {
          position: absolute;
          top: -16px;
          left: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #b87350;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 8px rgba(184,115,80,0.35);
          font-size: 22px;
          font-weight: 900;
          color: white;
          line-height: 1;
          font-family: Georgia, 'Times New Roman', serif;
          letter-spacing: -2px;
          padding-bottom: 4px;
          user-select: none;
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h2 style={{ fontSize: "clamp(22px, 5vw, 28px)", fontWeight: 700, color: "#1a1a1a", margin: 0 }}>
          What Our <span style={{ color: "#c4855a" }}>Clients Say</span>
        </h2>
      </div>

      {/* Carousel wrapper */}
      <div
        ref={wrapperRef}
        style={{ position: "relative", padding: "0 44px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          style={{
            position: "absolute", left: 0, top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "white", border: "none", borderRadius: "50%",
            width: 36, height: 36,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            cursor: "pointer", color: "#555",
          }}
        >
          <ChevronLeftIcon />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next"
          style={{
            position: "absolute", right: 0, top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "white", border: "none", borderRadius: "50%",
            width: 36, height: 36,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            cursor: "pointer", color: "#555",
          }}
        >
          <ChevronRightIcon />
        </button>

        {/* Clip */}
        <div style={{ overflow: "hidden", padding: "20px 0 4px" }}>
          {/* Track */}
          <div
            ref={trackRef}
            style={{ display: "flex", gap: GAP, willChange: "transform", alignItems: "stretch" }}
          >
            {extendedTestimonials.map((item, index) => (
              <div key={`${item.id}-${index}`} style={cardStyle}>
                {/* Card */}
                <div
                  style={{
                    position: "relative",
                    background: "#fff0f3",
                    border: "1px solid #f8d7da",
                    borderRadius: 16,
                    padding: "32px 20px 20px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Quote badge — Georgia double-quote character */}
                  <div className="quote-badge">
                    &#8220;
                  </div>

                  {/* Stars */}
                  <div style={{ display: "flex", justifyContent: "center", gap: 3, marginBottom: 12 }}>
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>

                  {/* Text */}
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "clamp(12px, 2.5vw, 13.5px)",
                      fontStyle: "italic",
                      color: "#2a2a2a",
                      lineHeight: 1.65,
                      minHeight: 52,
                      margin: 0,
                    }}
                  >
                    "{item.text}"
                  </p>

                  {/* Footer */}
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 12,
                      borderTop: "1px solid #e8e8e8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                    }}
                  >
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: 11.5, fontWeight: 600, color: "#c4855a", marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {item.category}
                      </div>
                    </div>

                    {item.verified && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          background: "#d4edda",
                          borderRadius: 20,
                          padding: "4px 9px",
                          flexShrink: 0,
                        }}
                      >
                        <CheckIcon />
                        <span style={{ fontSize: 11, fontWeight: 600, color: "#1a1a1a" }}>Verified</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const target = testimonials.length + index;
              setCurrentIndex(target);
              moveToIndex(target, true);
            }}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              height: 10,
              width: activeIndex === index ? 24 : 10,
              borderRadius: 10,
              background: activeIndex === index ? "#c4855a" : "#ccc",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}