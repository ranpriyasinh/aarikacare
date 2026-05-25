import KayaLandingPage from '../components/kayacomponents/hero';
import KayaSolutions from '../components/kayacomponents/kayaserrvice';
import KayaTestimonials from '../components/kayacomponents/kayatestimonials'
import WhyChooseKaya from '../components/kayacomponents/whykaya'
import FrequentlyAskedQuestions from '../components/kayacomponents/kayaFrequentlyAskedQuestions'
import VisibleResults from '../components/kayacomponents/kayaresult'
import TreatmentTags from '../components/kayacomponents/kayatreatment'

export default function Home() {
  return (
    <div className="min-h-screen">
      <KayaLandingPage />
      <KayaSolutions/>
      <KayaTestimonials/>
      <WhyChooseKaya/>
      <FrequentlyAskedQuestions/>
      <VisibleResults/>
      <TreatmentTags/>
        </div>
  );
}