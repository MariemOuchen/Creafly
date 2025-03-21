import React from 'react';

const GradientBar = () => (
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg"></div>
);

export default function SecretCard3() {
    const questions = [
        {
            description:
                "Recherche de mots-clés avec Google Keyword Planner",
        },
        {
            description:
                "Optimisation des balises titres et méta-descriptions",
        },
        {
            description:
                "Liens internes et backlinks de qualité",
        },
        {
            description:
                "Amélioration de la vitesse de chargement du site",
        },
    ];

    return (
        <div>
            <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 overflow-hidden">
                <div className="text-center">
                    <p className="text-xl font-extrabold md:text-2xl text-mainHeading">
                        Améliorer son Référencement Naturel (SEO) pour Être en Première Page
                    </p>
                    <p className="mx-auto mt-4 max-w-[800px] text-para">
                        Le référencement est la clé pour gagner en visibilité sur Google sans payer de publicité.
                        Techniques SEO essentielles :
                    </p>
                </div>
            </section>

            <section className="bg-bg text-center py-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:px-6 md:px-12 lg:px-6 sm:py-0 md:py-2 lg:py-2">
                        {questions.map((question, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300 sm:px-4 md:px-6 lg:px-8"
                            >
                                <GradientBar />
                                <p className="text-gray-600 text-center">{question.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mx-auto mt-6 max-w-[800px] text-para">
                        <span className="font-bold text-para">Astuce SEO :</span> Intégrez des termes comme “optimisation SEO site web”, “stratégie de référencement naturel” pour renforcer votre positionnement.
                    </p>
                </div>
            </section>
        </div>
    );
}
