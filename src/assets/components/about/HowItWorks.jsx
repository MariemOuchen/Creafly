import React from 'react';
import {
     Timeline,
     TimelineItem,
     TimelineConnector,
     TimelineHeader,
     TimelineIcon,
     TimelineBody,
     Typography,
} from "@material-tailwind/react";
import { TbHexagonNumber1Filled } from "react-icons/tb";
import { TbHexagonNumber2Filled } from "react-icons/tb";
import { TbHexagonNumber3Filled } from "react-icons/tb";
import { TbHexagonNumber4Filled } from "react-icons/tb";
import { TbHexagonNumber5Filled } from "react-icons/tb";
import { TbHexagonNumber6Filled } from "react-icons/tb";




const HowItWorks = () => {
     return (
          <div className='bg-bg dark:bg-darkBg'>
               <section className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-20 overflow-hidden">
                    <div className="container">
                         <div className="text-center">
                              <h2 className="text-3xl font-extrabold md:text-5xl text-mainHeading dark:text-darkMainHeading mb-14">Notre processus
                              </h2>
                         </div>
                         <Timeline>
                              <TimelineItem>
                                   <TimelineConnector />
                                   <TimelineHeader className="h-3">
                                        <TimelineIcon>
                                             <TbHexagonNumber1Filled className='text-accent' />
                                        </TimelineIcon>
                                        <Typography className="text-base font-bold md:text-xl text-mainHeading dark:text-darkMainHeading">
                                             Présentation et Évaluation des Besoins
                                        </Typography>
                                   </TimelineHeader>
                                   <TimelineBody className="pb-8">
                                        <Typography className=" text-md font-normal text-dark dark:text-darkPara text-para md:text-base">
                                             Commencez par établir un premier contact avec le client potentiel. Comprenez ses besoins en matière de services électriques et d'automatisation. Cette étape implique la première interaction, que ce soit par e-mail, téléphone ou en personne.
                                        </Typography>
                                   </TimelineBody>
                              </TimelineItem>
                              <TimelineItem>
                                   <TimelineConnector />
                                   <TimelineHeader className="h-3">
                                        <TimelineIcon>
                                             <TbHexagonNumber2Filled className='text-accent' />
                                        </TimelineIcon>
                                        <Typography className="text-base font-bold md:text-xl text-mainHeading dark:text-darkMainHeading">
                                             Des Solutions Personnalisées pour Vous
                                        </Typography>
                                   </TimelineHeader>
                                   <TimelineBody className="pb-8">
                                        <Typography className=" text-md font-normal text-dark dark:text-darkPara text-para md:text-base">
                                             Présentez vos services et solutions qui correspondent aux besoins spécifiques du client. Mettez en avant votre expertise en matière de distribution électrique, d'automatisation du bâtiment et de services énergétiques. Insistez sur l'approche individualisée pour répondre à leurs besoins.
                                        </Typography>
                                   </TimelineBody>
                              </TimelineItem>
                              <TimelineItem>
                                   <TimelineConnector />
                                   <TimelineHeader className="h-3">
                                        <TimelineIcon>
                                             <TbHexagonNumber3Filled className='text-accent' />
                                        </TimelineIcon>
                                        <Typography className="text-base font-bold md:text-xl text-mainHeading dark:text-darkMainHeading">
                                             Évaluation sur Place
                                        </Typography>
                                   </TimelineHeader>
                                   <TimelineBody className="pb-8">
                                        <Typography className=" text-md font-normal text-dark dark:text-darkPara text-para md:text-base">
                                             Si nécessaire, planifiez une visite sur site pour évaluer les locaux du client. Évaluez en détail les besoins en matière d'électricité et d'automatisation, notamment dans les environnements industriels ou agricoles. Cette étape permet de fournir des recommandations plus précises.
                                        </Typography>
                                   </TimelineBody>
                              </TimelineItem>
                              <TimelineItem>
                                   <TimelineConnector />
                                   <TimelineHeader className="h-3">
                                        <TimelineIcon>
                                             <TbHexagonNumber4Filled className='text-accent' />
                                        </TimelineIcon>
                                        <Typography className="text-base font-bold md:text-xl text-mainHeading dark:text-darkMainHeading">
                                             Proposition de Projet Personnalisée
                                        </Typography>
                                   </TimelineHeader>
                                   <TimelineBody className="pb-8">
                                        <Typography className=" text-md font-normal text-dark dark:text-darkPara text-para md:text-base">
                                             Élaborez une proposition complète et un devis en fonction des besoins du client et de l'évaluation sur site. Incluez des détails sur les installations électriques, les systèmes d'automatisation et les améliorations de l'efficacité énergétique. Fournissez un détail des coûts et des délais.
                                        </Typography>
                                   </TimelineBody>
                              </TimelineItem>
                              <TimelineItem>
                                   <TimelineConnector />
                                   <TimelineHeader className="h-3">
                                        <TimelineIcon>
                                             <TbHexagonNumber5Filled className='text-accent' />
                                        </TimelineIcon>
                                        <Typography className="text-base font-bold md:text-xl text-mainHeading dark:text-darkMainHeading">
                                             Conclusion du Partenariat
                                        </Typography>
                                   </TimelineHeader>
                                   <TimelineBody className="pb-8">
                                        <Typography className=" text-md font-normal text-dark dark:text-darkPara text-para md:text-base">
                                             Une fois que le client a examiné la proposition, facilitez le processus d'accord. Adressez toutes les questions ou préoccupations que le client pourrait avoir. Une fois que les deux parties sont satisfaites, confirmez le projet et établissez les termes et conditions du contrat de service.
                                        </Typography>
                                   </TimelineBody>
                              </TimelineItem>
                              <TimelineItem>
                                   <TimelineConnector />
                                   <TimelineHeader className="h-3">
                                        <TimelineIcon>
                                             <TbHexagonNumber6Filled className='text-accent' />
                                        </TimelineIcon>
                                        <Typography className="text-base font-bold md:text-xl text-mainHeading dark:text-darkMainHeading">
                                             Donner Vie à Votre Vision
                                        </Typography>
                                   </TimelineHeader>
                                   <TimelineBody className="pb-8">
                                        <Typography className=" text-md font-normal text-dark dark:text-darkPara text-para md:text-base">
                                             Démarrez la mise en œuvre effective du projet. Cela implique la distribution électrique, l'installation et la configuration du système d'automatisation, en fonction des besoins du client et de l'envergure du projet. Assurez-vous que le projet est exécuté de manière efficace et selon les normes de qualité et de sécurité les plus élevées.
                                        </Typography>
                                   </TimelineBody>
                              </TimelineItem>
                         </Timeline>
                    </div>
               </section>

          </div>

     );
}

export default HowItWorks;
