"use client";

import Image from "next/image";

const solutions = [
  {
    id: 1,
    title: "Laser Hair Reduction",
    image: "/images/laser.jpg",
    description:
      "Achieve smooth, hair-free skin with our safe, US FDA-approved laser treatment for all skin types.",
  },
  {
    id: 2,
    title: "Acne & Pigmentation",
    image: "/images/acne.jpg",
    description:
      "Minimise acne scars and pigmentation quickly with targeted treatments for clearer skin.",
  },
  {
    id: 3,
    title: "Anti-Ageing",
    image: "/images/antiaging.jpg",
    description:
      "Reduce signs of ageing with Aarikacare’s advanced fillers, anti-ageing skin systems, and youthful glow.",
  },
  {
    id: 4,
    title: "Beauty Facials",
    image: "/images/facial.jpg",
    description:
      "Enjoy personalised facial designed to cater to your unique skin needs and boost radiance.",
  },
  {
    id: 5,
    title: "Hair Care",
    image: "/images/haircare.jpg",
    description:
      "Advance hair health with Aarikacare’s Hair Regrowth solutions, repairing damage & hair fall.",
  },
];

export default function aarikacareSolutions() {
  return (
    <section className="w-full bg-[#f6f6f6] py-10">
      <div className="mx-auto max-w-5xl px-4">
        
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#1f2937]">
            Our Solutions
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Discover dermatologist-designed solutions for skin, hair,
            and ageing concerns.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              
              {/* Number Badge */}
              <div className="absolute left-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#b27652] text-xs font-bold text-white">
                {item.id}
              </div>

              {/* Image */}
              <div className="relative h-44 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="mb-2 text-sm font-bold text-[#1f2937]">
                  {item.title}
                </h3>

                <p className="text-xs leading-5 text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-white p-6 text-center shadow-md">
          <h3 className="text-lg font-bold text-[#1f2937]">
            Need Expert Help for Your Skin or Hair?
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Book a consult with our dermatologists and discover which
            treatment solution is right for you.
          </p>

          <button className="mt-5 rounded-xl bg-[#b27652] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#9e6546]">
            Book An Appointment
          </button>
        </div>
      </div>
    </section>
  );
}