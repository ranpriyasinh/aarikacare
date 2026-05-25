
import Footer from '../components/Footer';
import AppointmentSection from '../components/Inquiry';
import AboutPageHeader from '../components/AboutusPageHeader';
import AboutSection from '../components/AboutSection'
import CoreValues from '../components/CoreValues'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutPageHeader/>
      <AboutSection/>
      <CoreValues/>
      <WhyChooseUs/>
      <Testimonials/>
      <AppointmentSection/>
      
      
      <Footer/>   
      </div>
  );
}