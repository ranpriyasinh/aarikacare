'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dental: false,
    physio: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Please fill out this field.';
    if (!formData.email) newErrors.email = 'Please fill out this field.';
    if (!formData.mobile) newErrors.mobile = 'Please fill out this field.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Appointment request submitted!');
      setFormData({ name: '', email: '', mobile: '', dental: false, physio: false });
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services.jpg" // Replace with your clinic background
          alt="Clinic Interior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Make an Appointment
            </h2>

            <div className="space-y-4 text-white/90 text-base md:text-lg leading-relaxed">
              <p>
                At AARIKACARE Dental & CosmeticCare, we make scheduling your appointment easy and convenient. Whether you're looking for a dental check-up, orthodontic consultation, or physiotherapy session, our team is here to help. Simply fill out the form or contact us directly, and we'll find a time that works best for you.
              </p>
              <p>
                Our clinic is dedicated to providing exceptional care in a welcoming environment. We look forward to serving you and ensuring you receive the highest level of care.
              </p>
            </div>

            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg">
              Contact Us
            </button>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-md w-full mx-auto lg:ml-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Mobile Number Field */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-900 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.mobile ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
              </div>

              {/* Services Checkboxes */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Services
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="dental"
                      checked={formData.dental}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Dental</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="physio"
                      checked={formData.physio}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Physio</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#8B7355] text-white font-semibold rounded-md hover:bg-[#6B5540] transition-colors shadow-md"
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}