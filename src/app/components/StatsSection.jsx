'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Hook to animate numbers when they scroll into view
function useCountUp(target, duration = 1500, startCounting) {
  const [count, setCount] = useState(0);
  const targetRef = useRef(target);

  useEffect(() => {
    targetRef.current = target;
  }, [target]);

  useEffect(() => {
    if (!startCounting) {
      setCount(0);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * targetRef.current));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [startCounting, duration]);

  return count;
}

function StatItem({ value, label, suffix = '', startCounting }) {
  const baseNumber = parseInt(value.replace(/\D/g, ''), 10);
  const count = useCountUp(baseNumber, 1500, startCounting);

  return (
    <div className="text-center lg:text-right mb-4 lg:mb-6">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs md:text-sm text-white/80 font-medium">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-10 md:py-14 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services.jpg"
          alt="Dental Clinic Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div className="space-y-4 text-white">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Crafting Beautiful, Confident Smiles with Precision Care
            </h2>

            <div className="space-y-3 text-white/90 leading-relaxed text-xs md:text-sm">
              <p>
                At AARIKACARE Dental & CosmeticCare, we are dedicated to enhancing oral health and smile aesthetics through advanced dental solutions including cosmetic dentistry, implants, orthodontics, and preventive care.
              </p>

              <p>
                Led by Dr. Mansi Patel and a skilled team, we combine modern technology with refined clinical expertise to deliver comfortable, precise, and result-oriented treatments tailored to each patient’s needs.
              </p>

              <p>
                From smile makeovers to orthodontic correction and restorative care, every treatment plan is designed to improve both function and appearance, helping patients achieve long-lasting confidence and better quality of life.
              </p>
            </div>

            <button className="mt-4 px-6 py-2.5 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-xs md:text-sm shadow-lg">
              Explore Our Services
            </button>
          </div>

          {/* Right Stats */}
          <div className="flex flex-col justify-center">
            <StatItem value="6370" label="Smiles Transformed" suffix="+" startCounting={startCounting} />
            <StatItem value="12" label="Years of Clinical Experience" suffix="+" startCounting={startCounting} />
            <StatItem value="7600" label="Patients Treated Annually" suffix="+" startCounting={startCounting} />
          </div>

        </div>
      </div>
    </section>
  );
}