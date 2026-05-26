'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

/* ---------------- COUNTUP HOOK ---------------- */

function useCountUp(target, duration = 1500, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

/* ---------------- STAT ITEM ---------------- */

function StatItem({ value, label, suffix = '', startCounting }) {
  const number = parseInt(value.replace(/\D/g, ''), 10);

  const count = useCountUp(number, 1500, startCounting);

  return (
    <div className="text-center lg:text-right">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        {count.toLocaleString()}
        {suffix}
      </h3>

      <p className="mt-1 text-sm sm:text-base text-white/80">
        {label}
      </p>
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function StatsSection() {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-14 sm:py-16 lg:py-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/services.jpg"
          alt="Dental Clinic"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT SIDE */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Crafting Beautiful, Confident Smiles with Precision Care
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-white/90">
              <p>
                At AARIKACARE Dental & CosmeticCare, we are dedicated to
                enhancing oral health and smile aesthetics through advanced
                dental solutions including cosmetic dentistry, implants,
                orthodontics, and preventive care.
              </p>

              <p>
                Led by Dr. Mansi Patel and a skilled team, we combine modern
                technology with refined clinical expertise to deliver
                comfortable, precise, and result-oriented treatments tailored
                to each patient’s needs.
              </p>

              <p>
                From smile makeovers to orthodontic correction and restorative
                care, every treatment plan is designed to improve both function
                and appearance.
              </p>
            </div>

            <button className="mt-8 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
              Explore Our Services
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-1">
            <StatItem
              value="6370"
              label="Smiles Transformed"
              suffix="+"
              startCounting={startCounting}
            />

            <StatItem
              value="12"
              label="Years of Clinical Experience"
              suffix="+"
              startCounting={startCounting}
            />

            <StatItem
              value="7600"
              label="Patients Treated Annually"
              suffix="+"
              startCounting={startCounting}
            />
          </div>
        </div>
      </div>
    </section>
  );
}