import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import Img3 from "../../images/pic1.jpg";
import Img2 from "../../images/pic4.jpg";
import Img4 from "../../images/pic3.jpg";
import { FaArrowRight } from "react-icons/fa6";

const slides = [
  {
    img: Img3,
    title: "STRATÉGIE MARKETING & COMMUNICATION",
    desc: "Nous analysons votre audience, définissons des objectifs clairs et élaborons des plans d’action efficaces pour vous démarquer de la concurrence.\n\n Pourquoi nous choisir ?\nAnalyse approfondie de votre audience\nÉlaboration d’une stratégie personnalisée\nActions mesurables et optimisées pour le ROI"
  },
  {
    img: Img2,
    title: "E-MAIL MARKETING & AUTOMATION",
    desc: "Nous créons des séquences automatisées performantes pour engager votre audience et optimiser votre taux de conversion.\n\n Nos solutions incluent :\n Conception d’e-mails percutants et optimisés\n Automatisation des campagnes marketing\n Suivi et analyse des performances\n\n "
  },
  {
    img: Img4,
    title: "CRÉATION DE CONTENU VISUEL & GRAPHIQUE",
    desc: "Nous réalisons des supports graphiques uniques et engageants pour renforcer votre image de marque et captiver votre audience.\n\n Nos services incluent :\nConception de logos et d’identités visuelles\nCréation de bannières, flyers et supports publicitaires\nProduction de vidéos et photos professionnelles"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Speed up the interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] overflow-hidden flex items-center justify-center">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={slides[currentIndex].img}
            alt={slides[currentIndex].title}
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-8">
            <div className="text-white max-w-2xl">
              <Typography variant="h1" className="text-xl md:text-4xl lg:text-5xl mb-4">
                {slides[currentIndex].title}
              </Typography>
              <Typography variant="lead" className="text-sm md:text-xl mb-8 opacity-80 whitespace-pre-line">
                {slides[currentIndex].desc}
              </Typography>
              <div className="flex justify-center gap-2">
                <a href="/devis">
                  <Button className="flex items-center gap-3" color="white" size="lg">
                    CONTACTEZ-NOUS
                    <FaArrowRight />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`block h-2 w-2 rounded-full cursor-pointer transition-all ${currentIndex === index ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

