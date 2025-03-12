import React from 'react';
import PaymentCard from './PaymentCard';
import { Button } from '@material-tailwind/react';
import { HiCheckCircle } from "react-icons/hi";


const PlanSection = () => {
     const card1Info = [
          "Éclairage",
          "Génie Électrique, Domotique",
          "Automatisation Des Bâtiments Industriels",
          "Tubage Et Cablage Batiment",
          "Systèmes D'alarme",
          "Efficacité Énergétique Pour Bâtiments",
     ]
     const card2Info = [
          "Automatisation Industrielle",
          "Automatisation Des Processus",
          "Équipement Et Installation Électrique",
          "Technologie Des Capteurs",
          "Électromécanique / Périphériques De Système",
          "Technologie Sans Fil",
     ]
     const card3Info = [
          "Energies Renouvelables",
          "Economie D’énergie",
          "Energie Solaire, Protection Solaire",
          "Pompage, Irrigation Automatique",
          "Automatization Des Serres Agricoles",
     ]
     return (
          <section className=" bg-bg dark:bg-darkBg mx-auto px-5 py-16 md:px-10 md:py-20 overflow-hidden">
               {/* Pricing */}
               {/* Container */}
               <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                    {/* Component */}
                    <div className="flex flex-col items-center justify-start max-[767px]:text-center">
                         <h2 className="text-3xl font-extrabold md:text-5xl text-mainHeading dark:text-darkMainHeading mb-6">Les Solutions Qui Vous Conviennent Parfaitement
                         </h2>
                         <div className="mx-auto mb-8 mt-4 max-w-[800px] md:mb-12 lg:mb-16">
                              <p className="mx-auto font-medium text-base mb-8 mt-4  max-w-[800px] text-subHeading dark:text-darkSubHeading md:mb-6">Votre partenaire de confiance pour l'excellence en distribution et installation électrique, automatisation industrielle, et services énergétiques de pointe.
                              </p>
                         </div>
                         {/* Pricing Cards */}
                         <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
                              <div className="flex w-full max-w-[416px] flex-col items-start rounded-2xl border border-solid border-[#9b9b9b] bg-bg px-8 pb-12 pt-8">
                                   <div className="mb-4 rounded-lg bg-mainHeading px-5 py-2">
                                        <p className="text-sm font-bold text-darkMainHeading">Construction</p>
                                   </div>
                                   <p className="mb-6 font-medium text-base text-subHeading ">Services D'Électricité Du Bâtiment</p>
                                   <div className='mb-10'>
                                        {
                                             card1Info.map(line => {
                                                  return <Line details={line} />
                                             })
                                        }
                                   </div>
                                   <a href="/devis">
                                   <Button className='mx-auto inline-block rounded-xl  px-7 py-4 text-center font-bold bg-amber-700 text-white '>Demander Un Devis</Button>
                                   </a>
                              </div>
                              <div className="bg-darkBg flex w-full max-w-[416px] flex-col items-start rounded-2xl border border-solid border-[#9b9b9b] px-8 pb-12 pt-8">
                                   <div className="mb-4 rounded-lg bg-darkMainHeading px-5 py-2">
                                        <p className="text-sm font-bold text-mainHeading">Industrie                                        </p>
                                   </div>
                                   <p className="mb-6 font-medium text-base text-darkSubHeading">Solutions D'Ingénierie Électrique Industrielle                                   </p>
                                   <div className='mb-10'>
                                        {
                                             card2Info.map(line => {
                                                  return <Line details={line}  dark/>
                                             })
                                        }
                                   </div>
                                   <a href="/devis">

                                   <Button className='mx-auto inline-block rounded-xl  px-7 py-4 text-center font-bold bg-amber-700 text-white '>Demander Un Devis</Button>
                                   </a>
                              </div>
                              <div className="flex w-full max-w-[416px] flex-col items-start rounded-2xl border border-solid border-[#9b9b9b] bg-bg px-8 pb-12 pt-8">
                                   <div className="mb-4 rounded-lg bg-mainHeading px-5 py-2">
                                        <p className="text-sm font-bold text-darkMainHeading">Agriculture</p>
                                   </div>
                                   <p className="mb-6 font-medium text-base text-subHeading ">Solutions Génie Électrique : Agriculture & Énergies Renouvelables</p>
                                   <div className='mb-10'>
                                        {
                                             card3Info.map(line => {
                                                  return <Line details={line} />
                                             })
                                        }
                                   </div>
                                   <a href="/devis">
                                   <Button className='mx-auto inline-block rounded-xl  px-7 py-4 text-center font-bold bg-amber-700 text-white '>Demander Un Devis</Button>
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
               <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg" alt="" className="absolute bottom-auto left-auto right-0 top-0 -z-10 inline-block max-[479px]:hidden" />

          </section>
     );
}

export default PlanSection;

const Line = ({ details , dark}) => {
     return (
          <div className="mt-2 flex flex-row items-center text-left">
               <HiCheckCircle className="mr-2 inline-block w-5 text-accent" />
               <p className={`text-md font-normal text-dark ${dark ? "text-darkPara" : "text-para"} md:text-base`}>{details}</p>
          </div>
     );
}