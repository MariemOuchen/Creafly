import React from 'react';
import Intro from '../assets/components/about/Intro';
import Team from '../assets/components/about/Team';
import Vision from '../assets/components/about/Vision';
import HowItWorks from '../assets/components/about/HowItWorks';
import CTASection from '../assets/components/home/CTASection';

const About = () => {
     return (
          <div>
               <Intro />
               <Vision />
               <Team />
               {/* <HowItWorks /> */}
               <CTASection />
          </div>
     );
}

export default About;
