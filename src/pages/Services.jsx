import React from 'react';
import IntroSer from '../assets/components/services/introSer';
import Service from '../assets/components/services/Service';
import PaymentCard from '../assets/components/services/PaymentCard';
import PlanSection from '../assets/components/services/PlanSection';
import CTASection from '../assets/components/home/CTASection';

const Services = () => {
    return (
        <div>
            <IntroSer />
            {/* <Service /> */}
            <PlanSection />
            <CTASection />


        </div>
    );
}

export default Services;
