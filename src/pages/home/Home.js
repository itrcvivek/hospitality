import Personfor from '../../pages/personfor/Personfor';
import AnArrey from '../../pages/anarrey/AnArrey';
import Testimonial from '../../pages/testimonial/Testimonial';
import Subscribe from '../../pages/Subscribe/Subscribe';
import HeroSection from '../../pages/hero/Hero';
import Watch from '../watch/Watch';
import Security from '../Security/Security';
// import InroomOrder from '../inroomorder/InroomOrder';

function Home() {
  return (
    <>
      <HeroSection />
      <Security />
      <Personfor />
      <AnArrey />
      <Testimonial />
      <Watch />
      <Subscribe />
      {/* <InroomOrder /> */}
      
    </>
  );
}

export default Home;
