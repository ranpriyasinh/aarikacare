
import Footer from '../../components/Footer';
import AppointmentSection from '../../components/Inquiry';
import ServiceAboutPageHeader from '../../components/service/ServiceAboutPageHeader';
import DentalDepartment from '../../components/service/DentalDepartment'
import DentalComprehensiveServices from '../../components/service/DentalComprehensiveServices'
import FAQSection from '../../components/service/DentalFAQ';
import DentalSpecialFeatures from '../../components/service/DentalSpecialFeatures'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceAboutPageHeader/>
      <DentalDepartment/>
      
      <DentalComprehensiveServices/>
      <DentalSpecialFeatures/>
      
      <FAQSection/>
      <AppointmentSection/>
      <Footer/>   
      </div>
  );
}