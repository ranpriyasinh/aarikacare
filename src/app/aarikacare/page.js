import AarikacareLandingPage from '../components/aarikacarecomponents/hero';
import AarikacareSolutions from '../components/aarikacarecomponents/aarikacareserrvice';
import AarikacareTestimonials from '../components/aarikacarecomponents/aarikacaretestimonials';
import WhyChooseAarikacare from '../components/aarikacarecomponents/whyaarikacare';
import FrequentlyAskedQuestions from '../components/aarikacarecomponents/aarikacareFrequentlyAskedQuestions';
import VisibleResults from '../components/aarikacarecomponents/aarikacareresult';
import TreatmentTags from '../components/aarikacarecomponents/aarikacaretreatment';
import Navbar  from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <AarikacareLandingPage />
      <AarikacareSolutions />
      <AarikacareTestimonials />
      <WhyChooseAarikacare />
      <FrequentlyAskedQuestions />
      <VisibleResults />
      <TreatmentTags />
      <Footer/>
    </div>
  );
}