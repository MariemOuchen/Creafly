import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdSettingsPower } from "react-icons/md";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { PiSolarPanelBold } from "react-icons/pi";
import { MdOutlineWindPower } from "react-icons/md";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { LuFan } from "react-icons/lu";
import { GiHistogram } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa6";
import { MdOutlineFactory } from "react-icons/md";
import { FaScrewdriver } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { MdElectricalServices } from "react-icons/md";
import { PiWrenchFill } from "react-icons/pi";
import { LiaWarehouseSolid } from "react-icons/lia";
import { IoFingerPrintOutline } from "react-icons/io5";
import { SiSocketdotio } from "react-icons/si";




const Service = () => {
  return (
    <section className=" bg-bg dark:bg-darkBg mx-auto px-5 py-16 md:px-10 md:py-20 overflow-hidden">
               <div className="container mx-auto max-w-7xl ">
                    <div className="-mx-4 flex flex-wrap">
                         <div className="w-full px-4">
                              <div className="mx-auto mb-12 max-w-[800px] text-center lg:mb-20">
                                   <h2 className="text-xl font-bold md:text-2xl dark:text-darkMainHeading text-mainHeading">
                                   Solutions D'Ingénierie Électrique Pour L'Agriculture Et Les Énergies Renouvelables
                                    </h2>
                                   
                              </div>
                         </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                         <ServiceCard
                              title="ÉNERGIE SOLAIRE"
                              details="Concevons et installons des systèmes d'énergie solaire pour vos exploitations agricoles, réduisant les coûts et l'empreinte carbone."
                              icon={<PiSolarPanelBold size={40} color='#ffd803' />}
                         />
                         <ServiceCard
                              title="ÉOLIENNES AGRICOLES"
                              details="Optimisez votre énergie avec nos éoliennes spéciales pour les fermes, assurant un approvisionnement continu en énergie propre."
                              icon={<MdOutlineWindPower size={40} color='#ffd803' />}
                         />
                         <ServiceCard
                              title="STOCKAGE D'ÉNERGIE"
                              details="Intégrez des systèmes de stockage, comme des batteries au lithium, pour une énergie stable en toutes conditions."
                              icon={<MdOutlineEnergySavingsLeaf size={40} color='#ffd803' />}
                         />
                         <ServiceCard
                              title="ÉLECTRIFICATION AGRICOLE"
                              details="Électrifiez équipements agricoles, réduisant les coûts et favorisant la durabilité."
                              icon={<LuFan  size={40} color='#ffd803' />}

                         />
                         <ServiceCard
                              title="GESTION ÉNERGIE"
                              details="Contrôlez la consommation d'énergie pour optimiser, réduire le gaspillage et améliorer l'efficacité de votre exploitation."
                              icon={<GiHistogram size={40} color='#ffd803' />}
                         />
                         
                    </div>
                    <div className="-mx-4 flex flex-wrap">
                         <div className="w-full px-4">
                              <div className="mx-auto mb-12 max-w-[800px] text-center lg:mb-20">
                                   <h2 className="text-xl font-bold md:text-2xl dark:text-darkMainHeading text-mainHeading">
                                   Solutions D'Ingénierie Électrique Industrielle
                                    </h2>
                                   
                              </div>
                         </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                         <ServiceCard
                              title="SYSTÈMES ÉLECTRIQUES"
                              details="Systèmes Industriels - Nous concevons et installons des systèmes électriques industriels avancés, garantissant un fonctionnement optimal."
                              icon={<FaLightbulb size={40} color='#ffd803' />}
                         />
                         <ServiceCard
                              title="AUTOMATISATION INDUSTRIELLE"
                              details="Automatisation Avancée - Optimisez vos opérations avec nos solutions d'automatisation industrielle avancées, réduisant les coûts et les erreurs."
                              icon={<MdOutlineFactory size={40} color='#ffd803' />}
                         />
                         <ServiceCard
                              title="DISTRIBUTION D'ÉNERGIE"
                              details="Énergie Fiable - Nous concevons des systèmes de distribution d'énergie fiables et efficaces, promouvant la durabilité avec l'intégration d'énergies renouvelables.                              "
                              icon={<FaScrewdriver size={40} color='#ffd803' />}
                         />
                         <ServiceCard
                              title="SÉCURITÉ ET SURVEILLANCE"
                              details="Protection du Site - Assurez la sécurité du site industriel avec nos solutions de sécurité électrique et de surveillance, protégeant les installations et le personnel.                              "
                              icon={<MdOutlineSecurity size={40} color='#ffd803' />}
                         />
                         <ServiceCard
                              title="SERVICES DE MAINTENANCE"
                              details="Maintenance Préventive - Notre équipe expérimentée assure une maintenance préventive régulière pour minimiser les temps d'arrêt.                              "
                              icon={<GrServices size={40} color='#ffd803' />}
                         />
                    
                    </div>
                    <div className="-mx-4 flex flex-wrap">
                         <div className="w-full px-4">
                              <div className="mx-auto mb-12 max-w-[800px] text-center lg:mb-20">
                                   <h2 className="text-xl font-bold md:text-2xl dark:text-darkMainHeading text-mainHeading">
                                   Services D'Électricité Du Bâtiment
                                    </h2>
                                   
                              </div>
                         </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                         <ServiceCard
                              title="INSTALLATION ÉLECTRIQUE"
                              details="Installations électriques complètes et conformes, adaptées à vos besoins pour les nouvelles constructions ou rénovations."
                              icon={<MdElectricalServices size={40} color='#ffd803' />}
                         />
                         <ServiceCard
                              title="ENTRETIEN & RÉPARATIONS"
                              details="Entretien régulier et réparations électriques rapides pour minimiser les interruptions et garantir la continuité de vos activités."
                              icon={<PiWrenchFill size={40} color='#ffd803' />}
                         />
                         <ServiceCard
                              title="ÉCLAIRAGE INTÉRIEUR/EXTÉRIEUR"
                              details="Solutions d'éclairage innovantes pour une illumination fonctionnelle et esthétique, intérieure et extérieure."
                              icon={<LiaWarehouseSolid  size={40} color='#ffd803' />}
                         />
                         <ServiceCard
                              title="SYSTÈMES DE SÉCURITÉ"
                              details="Systèmes de sécurité électriques avancés : caméras de surveillance, alarmes, détecteurs de mouvement pour la tranquillité d'esprit."
                              icon={<IoFingerPrintOutline size={40} color='#ffd803' />}
                         />
                         <ServiceCard
                              title="ÉCONOMIES D'ÉNERGIE"
                              details="Améliorez l'efficacité énergétique avec des appareils éco-énergétiques, réduisant l'empreinte carbone et les coûts énergétiques."
                              icon={<SiSocketdotio size={40} color='#ffd803' />}
                         />
                         
                    </div>
               </div>
          </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
    return (
         <>
              <div className="grid gap-8 p-8 md:p-10">
                   {icon}
                   <h4 className="text-xl font-semibold dark:text-darkSubHeading text-subHeading">
                        {title}
                   </h4>
                   <p className="text-sm dark:text-darkPara text-para">{details}</p>
              </div>
         </>
    );
};
