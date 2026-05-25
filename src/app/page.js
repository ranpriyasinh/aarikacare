import Hero from './components/Hero';
import ServicesMarquee from './components/ServicesMarquee';
import ImageCarousel from './components/ImageCarousel';
import Clinicreception from './components/Clinic-reception';
import ServicesSection from './components/Service';
import StatsSection from './components/StatsSection';
import DoctorsSection from './components/Doctorsection';
import FAQSection from './components/FAQ';
import BlogSection from './components/blogsection';
import AppointmentSection from './components/Inquiry'
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      <ServicesMarquee />
      <ImageCarousel />
      <Clinicreception />
      <ServicesSection />
      <StatsSection />
      <DoctorsSection />
      <FAQSection/>
      <BlogSection/>
      <AppointmentSection/>
      <Footer/>   </div>
  );
}