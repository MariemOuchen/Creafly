import React from "react";
import { motion } from "framer-motion";

const featuresData = [
  {
    img: "./src/assets/images/social.png",
    title: "Stratégie marketing et planification",
    description:
      "Nous développons des stratégies marketing adaptées aux besoins spécifiques de chaque marque. Grâce à une analyse approfondie du marché et du public cible, nous concevons des plans de communication efficaces qui maximisent l’impact et la notoriété.",
  },
  {
    img: "./src/assets/images/content.png",
    title: "Création de contenu visuel et graphique",
    description:
      "Nous réalisons des designs uniques et professionnels, allant des logos aux identités visuelles complètes. Nous proposons également des services de photographie et de production vidéo pour des contenus percutants qui captivent l’attention et valorisent l’image de marque.",
  },
  {
    img: "./src/assets/images/social-media.png",
    title: "Création et gestion des réseaux sociaux",
    description:
      "Nous gérons vos pages Facebook, Instagram, TikTok, LinkedIn et autres plateformes. Nous créons du contenu engageant et planifions des publications stratégiques pour renforcer votre présence en ligne et fidéliser votre audience.",
  },
  {
    img: "./src/assets/images/laptop.png",
    title: "Création de Sites Web Professionnels",
    description:
      "Nous concevons des sites web sur mesure adaptés à vos besoins et à votre identité de marque. Que ce soit pour une vitrine, une boutique en ligne, ou un blog, nous créons des sites modernes, responsives et optimisés pour le SEO. Chaque projet est accompagné d'une interface intuitive et d'une expérience utilisateur fluide, tout en garantissant des performances élevées et une sécurité optimale",
  },
  {
    img: "./src/assets/images/app.png",
    title: "Développement d'Applications Web",
    description:
      "Nous concevons des applications web performantes et sur mesure pour répondre aux besoins spécifiques de votre entreprise. Que ce soit pour la gestion de données, l'automatisation des processus ou la création d'outils interactifs, nous développons des solutions personnalisées qui optimisent l'efficacité et l'expérience utilisateur. Nos applications sont sécurisées, scalables, et accessibles sur tous types de dispositifs, garantissant une performance optimale.",
  },
  {
    img: "./src/assets/images/seo.png",
    title: "Référencement Naturel (SEO)",
    description:
      "Nous aidons les entreprises à améliorer leur visibilité sur les moteurs de recherche grâce à des stratégies SEO efficaces. l’optimisation technique des sites, la création de contenu optimisé et la gestion des backlinks. Nous mettons en place des solutions sur mesure pour booster votre classement sur Google et attirer un trafic qualifié, augmentant ainsi vos opportunités de conversion.",
  },
];

const Features = () => {
  return (
    <div className="bg-bg min-h-screen p-8">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Nos Expertises
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md border border-gray-300 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.10 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Ligne décorative en haut */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg"></div>

              <img
                alt={feature.title}
                className="mx-auto mb-4"
                height="100"
                src={feature.img}
                width="100"
              />
              <h2 className="text-xl font-semibold text-center mb-2 text-gray-900">
                {feature.title}
              </h2>
              <p className="text-center text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
