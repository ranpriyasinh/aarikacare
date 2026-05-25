// components/ContactUs.jsx
export default function ContactUs() {
  return (
    <section className="bg-[#F9F5F0] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h2>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Location */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-[#F3EFE8] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#8B6F4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              FF-02, Urban-2, opposite Akshar Pavallion,<br />
              Vasna Bhayli Main Rd, near Priya Cinema,<br />
              Vadodara, Gujarat 391410
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-[#F3EFE8] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#8B6F4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600 text-sm">+91 73599 00990</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-[#F3EFE8] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#8B6F4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">support@aarikacare.com</p>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-[#F3EFE8] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#8B6F4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Working Hours</h3>
            <p className="text-gray-600 text-sm">
              Mon - Sat: 9:00 AM - 8:00 PM<br />
              Sunday: 10:00 AM - 2:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <form className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-[#8B6F4E] focus:border-transparent 
                bg-white placeholder-[#8B6F4E]/60"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-[#8B6F4E] focus:border-transparent 
                bg-white placeholder-[#8B6F4E]/60"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-[#8B6F4E] focus:border-transparent 
                bg-white placeholder-[#8B6F4E]/60"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-[#8B6F4E] focus:border-transparent 
                bg-white placeholder-[#8B6F4E]/60"
              />
            </div>

            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-[#8B6F4E] focus:border-transparent 
              bg-white resize-none placeholder-[#8B6F4E]/60"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#8B6F4E] text-white font-semibold py-3 px-6 rounded-md 
              hover:bg-[#6B5436] transition-colors duration-300"
            >
              Submit Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}