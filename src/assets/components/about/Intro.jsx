import React from 'react';

const Intro = () => {
     return (
          <div className='bg-bg dark:bg-darkBg'>
               <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20 overflow-hidden">
                    <div className="container">
                         <div className="text-center">
                              <h2 className="text-3xl font-extrabold md:text-5xl text-mainHeading dark:text-darkMainHeading">Qui Sommes-nous?
                              </h2>

                         </div>
                         <div className="flex flex-wrap justify-center px-4 mt-8">
                              <div className="w-full ">
                                   <div className="mb-12 lg:mb-0">
                                        <p className="mb-4 text-md font-normal text-dark text-para md:text-xl leading-relaxed x²">
                                             Chez CREAFLY, nous sommes une agence spécialisée en marketing digital et développement web, passionnée par l’innovation numérique. Nous accompagnons les entreprises dans leur transformation digitale, en leur proposant des solutions sur mesure qui allient performance, visibilité et créativité.

                                        </p>
                                        <p className="mb-4 text-md font-normal text-dark text-para md:text-xl leading-relaxed x²">
                                             Grâce à notre expertise en stratégie digitale, nous aidons nos clients à optimiser leur présence en ligne avec des campagnes publicitaires efficaces, du référencement SEO avancé, ainsi que des sites web performants et ergonomiques.

                                        </p>
                                        <div className="text-md font-normal text-dark text-para md:text-xl leading-relaxed ">
                                             <h1>Notre approche repose sur :</h1> <br />
                                             <h1 className="ml-8">➥ Une écoute active des besoins de chaque entreprise</h1> <br />
                                             <h1 className="ml-8">➥ Une stratégie personnalisée pour maximiser la conversion</h1> <br />
                                             <h1 className="ml-8">➥ Une innovation constante pour rester à la pointe des tendances digitales</h1> <br />


                                        </div>
                                        <p className="mb-4 text-md font-normal text-dark text-para md:text-xl leading-relaxed x²">
                                             Faites confiance à CREAFLY pour booster votre visibilité en ligne et accélérer votre croissance digitale !

                                        </p>
                                   </div>
                              </div>
                         </div>

                    </div>
               </section>

          </div>
     );
}

export default Intro;
