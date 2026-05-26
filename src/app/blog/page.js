
import Footer from '../components/Footer';
import BlogSection from '../components/blogsection';

import AboutPageHeader from '../components/BlogAboutusPageHeader';


export default function Home() {
  return (
    <div className="min-h-screen">
      <AboutPageHeader/>
      <BlogSection/>
      
      <Footer/>   
      </div>
  );
}