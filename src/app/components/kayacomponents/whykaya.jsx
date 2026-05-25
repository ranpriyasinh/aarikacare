import React from 'react';
import { 
  ShieldCheck, 
  Heart, 
  Zap, 
  Award, 
  Users, 
  Clock 
} from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Advanced Dermat-Approved Technology",
    description: "USFDA-approved lasers, anti-ageing tech, facials, and hair regrowth treatments—all backed by science and results.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Comfortable, Expert-Guided Sessions",
    description: "All treatments are performed by certified dermatologists using skin- and hair-safe protocols for maximum comfort.",
    icon: Heart,
  },
  {
    id: 3,
    title: "Visible Results from First Few Sessions",
    description: "Whether it's hair reduction, pigmentation, or skin glow—you'll notice real change in just a few visits.",
    icon: Zap,
  },
  {
    id: 4,
    title: "Safe for All Skin & Hair Types",
    description: "Our customized solutions are designed for Indian skin tones and hair textures—sensitive, oily, dry, or combination.",
    icon: Award,
  },
  {
    id: 5,
    title: "30L+ Happy Clients",
    description: "Trusted by lakhs across India for results that are real, safe, and long-lasting.",
    icon: Users,
  },
  {
    id: 6,
    title: "22+ Years of Excellence",
    description: "With two decades of medical expertise and innovation, Kaya continues to redefine skincare and haircare in India.",
    icon: Clock,
  },
];

const WhyChooseKaya = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#A67B5B]">Kaya Clinic?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            India's most trusted skin and hair clinic offering advanced dermatological solutions for every concern—from laser hair reduction and acne to anti-ageing and hair care.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-[#C49A85] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#A67B5B] transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseKaya;