import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export function Team() {
  const items = [
    {
      icon: "./src/assets/images/phone.png",
      title: "Téléphone",
      text: "Notre équipe est disponible par téléphone & WhatsApp.",
      link: "tel:+212700223744",
      linkText: "+212 7 00 22 37 44",
    },
    {
      icon: "./src/assets/images/message.png",
      title: "Email",
      text: "Nous répondrons à votre demande dans les plus brefs délais.",
      link: "mailto:creaflyagecy@gmail.com",
      linkText: "creaflyagecy@gmail.com",
    },
    {
      icon: "./src/assets/images/local.png",
      title: "Adresse",
      text: "APP. 07 ETAGE 3 IMM 48 Bd. MESSAOUD EL WAFKAOUI CITE SALAM AGADIR",
      link: "https://maps.app.goo.gl/bEUvCHpvfYwScmg57",
      linkText: "Afficher sur Maps",
    },
    {
      icon: "./src/assets/images/wait.png",
      title: "Heures de travail",
      text: "Lundi à Vendredi : 9am à 5pm\nSamedi : 9am à 1pm\nDimanche : Fermé",
    },
  ];

  return (
    <div className="bg-bg min-h-screen p-8">
      <div className="px-4 md:px-0 mt-4 ml-6 mr-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={variants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
                <h3 className="text-xl font-semibold ml-3">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 whitespace-pre-line">
                {item.text}
              </p>
              {item.link && (
                <a href={item.link} className="text-blue-500 hover:underline font-medium">
                  {item.linkText}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
