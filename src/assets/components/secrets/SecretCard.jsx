import React from 'react';

const GradientBar = () => (
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg"></div>
);

export default function SecretCard() {
    const questions = [
        {
            title: "Pourquoi est-ce important ?",
            description:
                "Mieux connaître les attentes et besoins de vos clients, Adapter votre communication pour un meilleur engagement, Optimiser votre retour sur investissement publicitaire.",
        },
        {
            title: "Comment identifier votre audience ?",
            description:
                "Google Analytics : Analysez le comportement de vos visiteurs, Meta Business Suite : Étudiez vos abonnés sur Facebook et Instagram, Enquêtes & sondages : Obtenez des retours directs de vos clients.",
        },
    ];

    return (
        <div>
            <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 overflow-hidden">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold md:text-5xl text-mainHeading dark:text-darkMainHeading">
                        Introduction
                    </h2>
                    <p className="mx-auto mb-10 mt-4 max-w-[800px] text-para dark:text-darkPara md:mb-12">
                        Dans un monde où la concurrence en ligne est de plus en plus forte, maîtriser le marketing digital est essentiel pour développer son activité. Une présence optimisée sur le web permet non seulement d’attirer des clients, mais aussi d’augmenter sa visibilité et d’améliorer son taux de conversion.
                    </p>
                    <p className="text-xl font-extrabold md:text-2xl text-mainHeading dark:text-darkMainHeading">
                        Comprendre et Analyser son Audience Cible
                    </p>
                </div>
            </section>

            <section className="bg-bg text-center py-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {questions.map((question) => (
                            <div
                                key={question.title}
                                className="relative flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300"
                            >
                                <GradientBar />
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{question.title}</h3>
                                <p className="text-gray-600 text-center">{question.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mx-auto mt-6 max-w-[800px] text-para">
                        <span className="font-bold text-para">Astuce SEO :</span> Intégrez des mots-clés de longue traîne comme “comment améliorer sa stratégie digitale” ou “meilleures pratiques marketing en ligne”.
                    </p>

                </div>
            </section>
        </div>
    );
}
