import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Column 1: Logo & Contact Info */}
          <div className="space-y-4">

            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo.png"
                alt="Aarikacare Logo"
                className="w-10 h-10 object-contain flex-shrink-0"
              />

              <div>
                <h3 className="text-xl font-bold italic">
                  AARIKACARE
                </h3>

                <p className="text-xs text-gray-400">
                  Dental & Cosmetic Care
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <p className="text-sm text-gray-300 leading-relaxed">
                FF-02, Urban-2, opposite Akshar Pavallion,
                <br />
                Vasna Bhayli Main Rd, near Priya Cinema,
                <br />
                Vadodara, Gujarat 391410
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>

              <a
                href="tel:7359900990"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                +91 73599 00990
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <a
                href="mailto:support@aarikacare.com"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                support@aarikacare.com
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">
              Links
            </h4>

            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Dental Services', href: '/services/dental' },
                { name: 'Cosmetic Services', href: '/services/cosmetic' },
                { name: 'Dr. Mansi Patel', href: '/team/dentists' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-base font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-2">
              {[
                {
                  name: 'Cosmetic Services',
                  href: '/services/cosmetic',
                },
                {
                  name: 'Dental Services',
                  href: '/services/dental',
                },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Account */}
          <div>
            <h4 className="text-base font-semibold mb-4">
              Account
            </h4>

            <ul className="space-y-2">
              {[
                { name: 'Contact Us', href: '/contact' },
                { name: 'Book Appointment', href: '/contact' },
                { name: 'FAQs', href: '/faq' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <a href="https://www.facebook.com/" className="text-gray-400 hover:text-blue-600 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
</a>
            <a
              href="https://www.instagram.com/aarika_dental_cosmetic_care?igsh=Y242ZDJ0NXRnaGUz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                />

                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

                <line
                  x1="17.5"
                  y1="6.5"
                  x2="17.51"
                  y2="6.5"
                />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 mb-2">
            © 2026 Clinical. All rights reserved.
          </div>

          {/* Crafted By */}
          <div className="text-center text-sm text-gray-400">
            © 2026 Crafted with{' '}
            <span className="text-red-500">❤</span> By Reyna Solutions
          </div>

        </div>
      </div>
    </footer>
  );
}