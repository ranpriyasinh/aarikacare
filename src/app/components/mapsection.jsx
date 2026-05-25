// components/MapSection.jsx


export default function MapSection() {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.451803090947!2d73.1237829699718!3d22.29874659808456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc952f2ceef7b%3A0xdb45f1673bb33089!2sUrban%20Two!5e0!3m2!1sen!2sin!4v1779452015309!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl"
      ></iframe>

    </div>
  );
}