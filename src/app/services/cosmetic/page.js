
import Footer from '../../components/Footer';
import AppointmentSection from '../../components/Inquiry';
import ServiceAboutPageHeader from '../../components/service/CosmeticServiceAboutPageHeader';
import CosmeticDepartment from '../../components/service/CosmeticDepartment';
import CosmeticServices from '../../components/service/CosmeticComprehensiveServices'
import DentalSpecialFeatures from '../../components/service/DentalSpecialFeatures';
import FAQSection from '../../components/service/CosmeticFAQ';


export default function Home() {
  return (
    <div className="min-h-screen">
      <ServiceAboutPageHeader/>
      <CosmeticDepartment/>
      <CosmeticServices/>
      <DentalSpecialFeatures/>
      <FAQSection/>
      <AppointmentSection/>
      <Footer/>   
      </div>
  );
}