import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Youssef El Amrani",
    role: "Entrepreneur en e-commerce",
    rating: 5.0,
    review:
      "Grâce à Creafly, j'ai pu optimiser mes campagnes publicitaires et améliorer l'expérience utilisateur de mon site. Une équipe compétente et à l'écoute !",
  },
  {
    name: "Salma Benhaddou",
    role: "Responsable marketing",
    rating: 4.9,
    review:
      "Creafly nous a apporté des solutions digitales innovantes qui ont considérablement augmenté notre visibilité en ligne. Je recommande vivement !",
  },
  {
    name: "Omar Idrissi",
    role: "Gérant d’une boutique en ligne",
    rating: 5.0,
    review:
      "J'ai confié la refonte de mon site web à Creafly, et le résultat est au-delà de mes attentes. Une collaboration fluide et des résultats impressionnants.",
  },
  {
    name: "Amina Raji",
    role: "Consultante en communication",
    rating: 4.8,
    review:
      "L’équipe Creafly nous a aidés à structurer notre stratégie digitale avec des outils performants et des recommandations adaptées à nos besoins.",
  },
  {
    name: "Mohamed Lahmidi",
    role: "Fondateur d'une startup",
    rating: 5.0,
    review:
      "Une approche professionnelle et personnalisée ! Creafly a joué un rôle clé dans le lancement de notre plateforme SaaS. Merci pour votre engagement !",
  },
  {
    name: "Nadia El Othmani",
    role: "Gérante d’un centre de formation",
    rating: 4.9,
    review:
      "Nous avions besoin d'une stratégie digitale efficace pour attirer plus d'étudiants. Creafly a su nous proposer des solutions adaptées et performantes.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-bg mx-auto py-12 px-20">
      <div className="bg-bg text-center">
        <div className="relative w-fit">
          <h2 className="text-base text-left text-indigo-600 font-semibold tracking-wide uppercase">
            Témoignages
          </h2>
          <div className="absolute left-0 bottom-[-4px] w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-lg"></div>
        </div>

        <p className="mt-6 text-2xl leading-8 font-extrabold text-subHeading tracking-tight sm:text-4xl">
          Ce que disent nos clients
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-yellow-500 ${
                      i < Math.round(testimonial.rating) ? "" : "opacity-50"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">{testimonial.rating}</span>
            </div>
            <p className="text-gray-700 mb-4">{testimonial.review}</p>
            <p className="text-teal-600 font-semibold">
              {testimonial.name}, {testimonial.role}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
