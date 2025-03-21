import React from "react";

const Vision = () => {
    const features = [
        {
            title: "Notre Vision",
            description:
                "Nous aspirons à devenir une référence incontournable en marketing digital et développement web, en offrant des services créatifs et efficaces qui s’adaptent aux besoins évolutifs des entreprises. Notre ambition est de proposer des solutions digitales complètes et innovantes, permettant à nos clients d’optimiser leur visibilité et d’accélérer leur croissance dans un monde numérique en constante évolution.",
            image:
                "./src/assets/images/vision.png",
            alt: "Illustration of a brain representing creativity",
        },
        {
            title: "Notre Mission",
            description:
                "Chez CREAFLY, nous accompagnons les entreprises dans leur transformation digitale en proposant des solutions innovantes et performantes. Grâce à des stratégies marketing sur mesure, un développement web optimisé et des campagnes de communication impactantes, nous aidons nos clients à renforcer leur présence en ligne et à atteindre leurs objectifs de croissance.",
            image:
                "./src/assets/images/mission.png",
            alt: "Illustration of a handshake representing reactivity",
        },
        {
            title: "Notre Valeurs",
            description:
                "Chez CREAFLY, nous plaçons l'innovation, la créativité et l'excellence au cœur de notre approche. Nous croyons en une collaboration transparente et de confiance avec nos clients, en mettant leur succès au centre de nos actions. L'engagement, la réactivité et la recherche constante de performance guident notre travail, afin d'offrir des solutions digitales sur mesure, adaptées aux défis d’un monde en perpétuelle évolution.",
            image:
                "./src/assets/images/value.png",
            alt: "Illustration of a puzzle piece representing engagement",
        },
    ];

    return (
        <section className="bg-bg text-center py-2 mb-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 shadow-lg rounded-2xl bg-white transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl motion-safe:animate-fadeIn"
                        >
                            <div className="flex flex-col items-center">
                                <img
                                    src={feature.image}
                                    alt={feature.alt}
                                    className="w-24 h-24 mb-4"
                                />
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    {feature.title}
                                </h2>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Vision;
