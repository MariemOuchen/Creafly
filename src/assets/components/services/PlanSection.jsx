import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { HiCheckCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Card info for each PACK
const planInfo = [
  // Marketing Digital
  {
    category: "Marketing Digital",
    plans: [
      {
        title: "PACK BOOSTER",
        details: [
          "Audit marketing complet",
          "Plan d'action détaillé sur 3 mois",
          "Conseil en branding et positionnement",
          "1 mois de planification du contenu",
        ],
      },
      {
        title: "PACK DÉCOLLAGE",
        details: [
          "Audit marketing complet",
          "Plan d'action détaillé sur 6 mois",
          "Conseil en branding et positionnement",
          "1 mois de planification du contenu",
        ],
      },
      {
        title: "PACK ACCÉLÉRATION",
        details: [
          "Audit marketing complet",
          "Plan d'action détaillé sur 6 mois",
          "Conseil en branding et positionnement",
          "2 mois de planification du contenu",
        ],
      },
    ],
  },
  // Community Management
  {
    category: "Community Management",
    plans: [
      {
        title: "PACK ESSENTIEL",
        details: [
          "Gestion des réseaux sociaux (Facebook & Instagram) 1 mois",
          "Création et publication de 8 posts par mois",
          "Réponse aux commentaires et messages privés",
          "Rapport mensuel sur l'engagement et la croissance de la communauté",
          "+300 Dhs pour chaque plateforme supplémentaire",
        ],
      },
      {
        title: "PACK INTERMÉDIAIRE",
        details: [
          "Gestion des réseaux sociaux (Facebook, Instagram, TikTok) 1 mois",
          "Création et publication de 12 posts par mois",
          "Gestion des interactions et modération des commentaires",
          "Stratégie de contenu mensuelle et planification",
          "Analyse des performances et ajustements stratégiques",
          "+300 Dhs pour chaque plateforme supplémentaire",
        ],
      },
      {
        title: "PACK PREMIUM",
        details: [
          "Gestion des réseaux sociaux (Facebook, Instagram, TikTok, LinkedIn) 1 mois",
          "Création et publication de 20 posts par mois, incluant des visuels et vidéos",
          "Gestion des interactions, modération et engagement communautaire",
          "Stratégie de contenu approfondie et planification",
          "Rapports détaillés sur les performances et recommandations",
          "+300 Dhs pour chaque plateforme supplémentaire",
        ],
      },
    ],
  },
  // Web Development
  {
    category: "Création des Sites Web",
    plans: [
      {
        title: "PACK LANDING PAGE",
        details: [
          "Nom de domaine",
          "Hébergement",
          "Version adaptée au mobile et tablettes",
          "Bannières dynamiques et Calls to Action",
          "Développement du menu, rubriques et sous-rubriques",
          "Liens vers les réseaux sociaux",
          "Statistiques de visite en temps réel",
          "Sécurité (Https, Re-captcha)",
        ],
      },
      {
        title: "PACK VITRINE",
        details: [
          "Nom de domaine",
          "Hébergement",
          "Version adaptée au mobile et tablettes",
          "Bannières dynamiques et Calls to Action",
          "Développement du menu, rubriques et sous-rubriques",
          "Liens vers les réseaux sociaux",
          "Statistiques de visite en temps réel",
          "Sécurité (Https, Re-captcha)",
          "Formulaires de contact",
          "Création des pages et sous-pages",
        ],
      },
      {
        title: "PACK E-COMMERCE",
        details: [
          "Nom de domaine",
          "Hébergement",
          "Version adaptée au mobile et tablettes",
          "Bannières dynamiques et Calls to Action",
          "Développement du menu, rubriques et sous-rubriques",
          "Liens vers les réseaux sociaux",
          "Statistiques de visite en temps réel",
          "Sécurité (Https, Re-captcha)",
          "Formulaires de contact",
          "Création des pages et sous-pages",
          "Insertion des produits",
          "Live Chat",
          "Newsletter",
        ],
      },
    ],
  },
  // Publicité ADS
  {
    category: "Compagne Publicitaire ADS",
    plans: [
      {
        title: "PACK Visibilité Locale",
        details: [
          "Gestion des publicités sur Facebook & Instagram – 1 mois",
          "Création de visuels et textes adaptés au marché local",
          "Ciblage géographique pour atteindre les clients potentiels dans votre région",
          "Rapport de performance mensuel",
        ],
      },
      {
        title: "PACK Croissance Digitale",
        details: [
          "Gestion publicitaire multi-plateformes (Facebook, Instagram, Google) – 1 mois",
          "Création de contenus visuels et textes engageants",
          "Suivi et optimisation des campagnes pour un meilleur retour sur investissement",
          "Analyse des tendances du marché marocain et ajustements stratégiques",
        ],
      },
      {
        title: "PACK Campagne Vidéo",
        details: [
          "Gestion des campagnes publicitaires sur TikTok et YouTube – 1 mois",
          "Création de vidéos publicitaires captivantes",
          "Suivi et optimisation pour maximiser l'engagement et la portée",
          "Analyse des performances et recommandations pour les futures campagnes",
        ],
      },
    ],
  },
  // Photo & Vidéographie
  {
    category: "Photo & Vidéographie",
    plans: [
      {
        title: "PACK EXPRESS",
        details: [
          "30 photos retouchées",
          "Vidéo courte (30 sec - 1 min)",
          "Montage simple avec musique",
          "Format optimisé pour les réseaux sociaux",
          "Livraison en 3 jours",
        ],
      },
      {
        title: "PACK STANDARD",
        details: [
          "60 photos retouchées",
          "Vidéo de 1 à 2 minutes",
          "Captation sur site avec différentes mises en scène",
          "Montage dynamique (effets et transitions)",
          "Livraison en 4 jours",
        ],
      },
      {
        title: "PACK PREMIUM",
        details: [
          "120 photos retouchées",
          "Vidéo de 3 à 5 minutes multi-caméras",
          "Prises de vue professionnelles avec scénarisation",
          "Retouches avancées et étalonnage",
          "Livraison en 5 à 7 jours",
        ],
      },
      {
        title: "PACK ÉVÉNEMENTIEL",
        details: [
          "Captation complète en photo et vidéo ",
          "Interviews et témoignages",
          "Highlights vidéo + version longue",
          "Options de diffusion en direct",
        ],
      },
    ],
  },
  // Photographie
  {
    category: "Photographie",
    plans: [
      {
        title: "PACK BASIQUE",
        details: [
          "30 photos retouchées",
          "Retouches avancées & optimisation des couleurs",
          "Shooting sur site (bureau, boutique, restaurant…)",
          "Livraison en 3 jours",
          "Format web & HD",
        ],
      },
      {
        title: "PACK INTERMÉDIAIRE",
        details: [
          "50 photos retouchées",
          "Retouches avancées & optimisation des couleurs",
          "Différents angles et mises en scène",
          "Possibilité de changement de tenues",
          "Livraison en 3 jours",
          "Format web & HD",
        ],
      },
      {
        title: "PACK PREMIUM",
        details: [
          "100 photos retouchées",
          "Retouches avancées & optimisation des couleurs",
          "Shooting multi-emplacements",
          "Livraison en 4 jours",
          "Format web & HD",
        ],
      },
    ],
  },
  // Vidéographie
  {
    category: "Vidéographie",
    plans: [
      {
        title: "PACK BASIQUE",
        details: [
          "Vidéo courte (30 sec à 1 min)",
          "Captation sur site",
          "Montage simple avec musique & texte",
          "Format optimisé pour les réseaux sociaux",
          "Livraison en 3 jours",
        ],
      },
      {
        title: "PACK INTERMÉDIAIRE",
        details: [
          "Vidéo (1 min à 3 min)",
          "Prises de vue variées",
          "Montage dynamique avec effets et transitions",
          "Format optimisé pour les réseaux sociaux",
          "Livraison en 4 jours",
        ],
      },
      {
        title: "PACK PREMIUM",
        details: [
          "Vidéo (3 min à 5 min)",
          "Captation multi-caméras",
          "Scénarisation & storytelling",
          "Retouches pro, étalonnage, sound design",
          "Livraison en 5 à 7 jours",
        ],
      },
    ],
  },
];

const PlanCard = ({ title, details, setFormData }) => {
  const isEvenementiel = title === "PACK ÉVÉNEMENTIEL"; // Check if the title is "PACK ÉVÉNEMENTIEL"
  const [showAllDetails, setShowAllDetails] = useState(false);

  const toggleDetails = () => {
    setShowAllDetails(!showAllDetails);
  };

  // Show all details on desktop by default, show only the first two details on mobile unless "Voir plus" is clicked
  const detailsToShow = showAllDetails || window.innerWidth >= 768 ? details : details.slice(0, 3);

  // Handle selecting a pack
  const handleSelectPack = () => {
    onSelectPack(title);
  };

  return (
    <motion.div
      className="flex w-full max-w-[416px] flex-col items-center justify-between rounded-2xl bg-white px-8 py-8 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="mb-4 w-full flex justify-center rounded-lg bg-mainHeading px-5 py-2">
        <p className="text-sm font-bold text-darkMainHeading text-center">{title}</p>
      </div>
      <div className="flex-grow mb-10 w-full">
        {detailsToShow.map((line, index) => (
          <Line key={line + index} details={line} />
        ))}
      </div>

      {/* Conditionally render Mariage, Conférence, Séminaire text and Sur devis for PACK ÉVÉNEMENTIEL */}
      {isEvenementiel && (
        <>
          <div className="mt-4 text-center text-md font-bold text-mainHeading">
            (Mariage, Conférence, Séminaire)
          </div>
          <div className="mt-2 text-center text-md font-bold text-red-500">
            Sur devis
          </div>
        </>
      )}

      {/* Show "Voir plus" only on mobile and hide on larger screens */}
      {details.length > 2 && !showAllDetails && (
        <a
          className="w-full mt-4 mx-auto md:hidden text-cyan-200 bg-transparent border-none cursor-pointer hover:underline"
          onClick={toggleDetails}
        >
          Voir plus
        </a>
      )}

      {/* Show "Voir moins" only on mobile */}
      {showAllDetails && (
        <a
          className="w-full mt-4 mx-auto md:hidden text-cyan-200 bg-transparent border-none cursor-pointer hover:underline"
          onClick={toggleDetails}
        >
          Voir moins
        </a>
      )}

      {/* The regular message button, always visible */}
      <Link to={{ pathname: '/devis', state: { selectedPack: title } }} className="w-full mt-4">
        <Button className="mx-auto inline-block rounded-xl px-7 py-4 text-center font-bold bg-cyan-200 text-white w-full hover:scale-105" onClick={handleSelectPack}>
          ENVOYER UN MESSAGE
        </Button>
      </Link>
    </motion.div>
  );
};

const Line = ({ details }) => (
  <div className="mt-2 flex flex-row items-center text-left">
    <div className="w-6 h-6 flex justify-center items-center mr-2">
      <HiCheckCircle className="text-cyan-200" />
    </div>
    <p className="text-md font-normal text-para md:text-base">{details}</p>
  </div>
);

const PlanSection = () => {
  const [selectedPack, setSelectedPack] = useState('');

  const handleSelectPack = (packName) => {
    setSelectedPack(packName);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-bg mx-auto px-5 md:px-10 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10 text-center">
        {planInfo.map((category) => (
          <div key={category.category} className="flex flex-col items-center justify-start mt-24">
            <motion.h2
              className="text-3xl font-extrabold md:text-2xl text-mainHeading mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {category.category}
            </motion.h2>

            <div className="hidden md:grid w-full gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {category.plans.map((plan, index) => (
                <PlanCard key={plan.title + index} title={plan.title} details={plan.details} onSelectPack={handleSelectPack} />
              ))}
            </div>

            <div className="md:hidden w-full">
              <Slider {...settings}>
                {category.plans.map((plan, index) => (
                  <div key={plan.title + index} className="p-4">
                    <PlanCard title={plan.title} details={plan.details} onSelectPack={handleSelectPack} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlanSection;