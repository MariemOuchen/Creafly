import React from 'react'
import SecretCard from '../assets/components/secrets/SecretCard';
import SecretCard2 from '../assets/components/secrets/SecretCard2';
import SecretCard3 from '../assets/components/secrets/SecretCard3';
import SecretCard4 from '../assets/components/secrets/SecretCard4';
import SecretCard5 from '../assets/components/secrets/SecretCard5';
import CTASection from '../assets/components/home/CTASection';

export default function Secrets() {
  return (
    <div>
      <SecretCard />
      <SecretCard2 />
      <SecretCard3 />
      <SecretCard4 />
      <SecretCard5 />
      <CTASection />
    </div>
  )
}
