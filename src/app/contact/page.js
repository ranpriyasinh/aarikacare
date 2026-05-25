
import Footer from '../components/Footer';
import ContactAboutPageHeader from '../components/service/ContactAboutPageHeader'
import ContactUs from '../components/contactcontent';
import MapSection from '../components/mapsection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ContactAboutPageHeader/>
      <ContactUs/>
      <MapSection/>
      
      
      <Footer/>   
      </div>
  );
}