import React, { useState, useEffect } from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Img3 from "../../images/pic1.jpg";
import Img2 from "../../images/pic2.jpeg";
import Img4 from "../../images/pic3.jpg";
import { FaArrowRight } from "react-icons/fa6";

const slides = [
  { 
    img: Img3, 
    title: "STRATÉGIE MARKETING & COMMUNICATION", 
    desc: "Nous analysons votre audience, définissons des objectifs clairs et élaborons des plans d’action efficaces pour vous démarquer de la concurrence. Acquérez plus de visibilité et maximisez votre impact avec des campagnes ciblées et performantes.\n\n Pourquoi nous choisir ?\nAnalyse approfondie de votre audience\nÉlaboration d’une stratégie personnalisée\nActions mesurables et optimisées pour le ROI" 
  },
  { 
    img: Img2, 
    title: " E-MAIL MARKETING & AUTOMATION", 
    desc: "Nous créons des séquences automatisées performantes pour engager votre audience et optimiser votre taux de conversion.\n\n Nos solutions incluent :\n Conception d’e-mails percutants et optimisés\n Automatisation des campagnes marketing\n Suivi et analyse des performances\n\n " 
  },
  { 
    img: Img4, 
    title: "CRÉATION DE CONTENU VISUEL & GRAPHIQUE", 
    desc: "Nous réalisons des supports graphiques uniques et engageants pour renforcer votre image de marque et captiver votre audience.\n\n Nos services incluent :\nConception de logos et d’identités visuelles\nCréation de bannières, flyers et supports publicitaires\nProduction de vidéos et photos professionnelles" 
  }
];

const slideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel className="h-[90vh]" index={currentSlide}>
      {slides.map((slide, index) => (
        <div key={index} className="relative h-full w-full">
          <img src={slide.img} alt={`image ${index + 1}`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <motion.div 
              className="w-3/4 text-center md:w-2/4"
              initial="hidden"
              animate="visible"
              variants={slideVariants}
            >
              <Typography variant="h1" color="white" className="mb-4 text-xl md:text-4xl lg:text-5xl">
                {slide.title}
              </Typography>
              <Typography variant="lead" color="white" className="text-sm md:text-xl mb-12 opacity-80 whitespace-pre-line">
                {slide.desc}
              </Typography>
              <div className="flex justify-center gap-2">
                <a href="/devis">
                  <Button className="flex items-center gap-3" color='white' size='lg'>
                    CONTACTEZ-NOUS
                    <FaArrowRight />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Hero;
