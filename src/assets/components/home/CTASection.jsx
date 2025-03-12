import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";



const CTASection = () => {
     return (
          <div>
               <section className="py-18 bg-bg dark:bg-darkBg">
                    <div className="container mx-auto">
                         <div className="relative z-10 overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]">
                              <div className="flex flex-wrap items-center -mx-4">
                                   <div className="w-full px-4 lg:w-1/2">
                                        <span className="block mb-4 text-3xl font-bold text-subHeading dark:text-darkSubHeading">
                                             Pour Plus De Détails
                                        </span>
                                        <h2 className="mb-6 text-md text-para dark:text-darkPara sm:mb-8  lg:mb-0">
                                             <span className="xs:block"> Si vous avez des questions ou avez besoin de clarifications, n'hésitez pas à nous contacter chez CREAFLY. Nous sommes là pour vous aider.
                                             </span>
                                        </h2>
                                   </div>
                                   <div className="w-full px-4 lg:w-1/2">
                                        <div className="flex flex-wrap lg:justify-end">
                                        <a href="/devis">
                                             <Button className="flex items-center gap-3 bg-cyan-200 text-black"  size='lg'>
                                                  CONTACTEZ-NOUS
                                                  <FaArrowRight />
                                             </Button>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
}

export default CTASection;