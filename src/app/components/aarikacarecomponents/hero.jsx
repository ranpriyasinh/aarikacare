"use client";

import React, { useState, useEffect } from "react";
import {
  Gift,
  Award,
  Clock,
  Sparkles,
  CheckSquare,
  Square,
} from "lucide-react";

export default function aarikacareLandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 23,
    minutes: 56,
    seconds: 54,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-[#edf4fa] text-slate-800 overflow-hidden">
      
      {/* Top Banner */}
      <div className="pt-4 flex justify-center">
        <div className="animate-pulse rounded-full bg-[#c7a28f] px-10 py-3 shadow-sm">
          <div className="flex items-center justify-center gap-2 text-white">
            <Gift size={16} />
            <span className="font-semibold text-sm">
              Upto 50% Off On All Aarikacare Services
            </span>
          </div>
        </div>
      </div>

      {/* Main Wrapper */}
      <div className="mx-auto max-w-6xl px-6 pt-6 pb-12 flex flex-col md:flex-row items-center justify-between gap-14">
        
        {/* Left Section */}
        <div className="w-full md:w-[48%]">

          {/* Logo */}
          <div className="mb-6 flex justify-center md:justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-black tracking-tighter leading-none">
                Aarikacare
              </h2>
              <p className="text-[9px] tracking-[4px] uppercase">
                Clinic | Skin | Hair | Body
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-[54px] leading-[58px] font-light tracking-tight text-[#2f3c56]">
            Dermatologist-Designed <br />
            <span className="font-semibold text-[#b27652]">
              Skin, Hair & Anti-Ageing
            </span>{" "}
            Solutions
          </h1>

          {/* Subheading */}
          <h3 className="mb-3 text-[32px] font-medium text-[#2f3c56]">
            Safe. Proven. Expert Care.
          </h3>

          {/* Paragraph */}
          <p className="mb-8 max-w-lg text-[17px] leading-8 text-[#546274]">
            From acne & pigmentation to laser hair reduction and hair
            regrowth—Aarikacare's 22+ years of expertise ensures visible,
            lasting results.
          </p>

          {/* Feature Cards */}
          <div className="mb-8 flex gap-5">
            
            <div className="flex items-center gap-4 rounded-2xl bg-white px-7 py-5 shadow-md">
              <div className="rounded-full bg-[#fae5dc] p-3 text-[#b27652]">
                <Award size={20} />
              </div>

              <div>
                <h4 className="text-sm font-bold">22+ Years</h4>
                <p className="text-xs text-slate-500">
                  Trusted Expertise
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white px-7 py-5 shadow-md">
              <div className="rounded-full bg-[#fae5dc] p-3 text-[#b27652]">
                <Clock size={20} />
              </div>

              <div>
                <h4 className="text-sm font-bold">Visible Results</h4>
                <p className="text-xs text-slate-500">
                  From 1st Session
                </p>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="rounded-2xl bg-white py-8 shadow-md">
            <div className="mb-5 flex items-center justify-center gap-2">
              <Sparkles size={16} className="text-[#b27652]" />
              <span className="text-sm font-bold">
                Offer Ends In:
              </span>
              <Sparkles size={16} className="text-[#b27652]" />
            </div>

            <div className="flex justify-center gap-4">
              <TimeBox value={timeLeft.days} label="Days" />
              <TimeBox value={timeLeft.hours} label="Hours" />
              <TimeBox value={timeLeft.minutes} label="Minutes" />
              <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-[44%] rounded-3xl bg-white p-10 shadow-lg">
          
          <h3 className="mb-8 text-[38px] font-semibold text-[#b27652]">
            Talk to experts
          </h3>

          <form className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Name"
              className="rounded-xl border border-slate-300 px-4 py-4 text-sm focus:border-[#b27652] focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Mobile"
              className="rounded-xl border border-slate-300 px-4 py-4 text-sm focus:border-[#b27652] focus:outline-none"
            />

            <div className="relative">
              <select className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-500 focus:border-[#b27652] focus:outline-none">
                <option>Select or search city</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 pt-1">
              <button
                type="button"
                onClick={() => setAgreed(!agreed)}
                className="mt-0.5 text-slate-400 hover:text-[#b27652]"
              >
                {agreed ? (
                  <CheckSquare size={16} />
                ) : (
                  <Square size={16} />
                )}
              </button>

              <label className="cursor-pointer text-xs text-slate-500 select-none">
                I agree to T&C
              </label>
            </div>

            {/* Button */}
            <button className="mt-4 w-full rounded-xl bg-[#b27652] py-4 text-base font-semibold text-white hover:bg-[#9c6648] transition">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function TimeBox({ value, label }) {
  const formattedValue = value < 10 ? `0${value}` : value;

  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-14 items-center justify-center rounded-xl bg-[#b27652] text-xl font-bold text-white">
        {formattedValue}
      </div>

      <span className="mt-2 text-xs font-medium text-slate-500">
        {label}
      </span>
    </div>
  );
}