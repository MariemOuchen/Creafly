import React from 'react';
import Hero from '../assets/components/home/Hero';
import Features from '../assets/components/home/Features';
import CTASection from '../assets/components/home/CTASection';
import ServicesPreview from '../assets/components/home/ServicesPreview';
import FeaturesSection from '../assets/components/home/FeaturesSection';


const Home = () => {
     return (
               <>
                    <Hero />
                    <FeaturesSection/>
                    <Features />
                    <CTASection />
                    <ServicesPreview />
               </>
     );
}

export default Home;
