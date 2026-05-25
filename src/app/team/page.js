
import Footer from '../components/Footer';
import ContactAboutPageHeader from '../components/service/DoctorContactAboutPageHeader'
import DoctorsSection from '../components/Doctorsection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ContactAboutPageHeader/>
      <DoctorsSection/>
      
      
      <Footer/>   
      </div>
  );
}