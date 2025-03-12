import React from "react";

const FeaturesSection = () => {
    const features = [
        {
            title: "Créativité",
            description:
                "Nous nous engageons dans une démarche de créativité afin de vous proposer des chartes graphiques innovantes.",
            image:
                "./src/assets/images/idea.png",
            alt: "Illustration of a brain representing creativity",
        },
        {
            title: "Réactivité",
            description:
                "Reconnus par notre savoir-faire et notre réactivité, nous assurons l’ensemble de la production web et print dans notre local.",
            image:
                "./src/assets/images/reactiv.png",
            alt: "Illustration of a handshake representing reactivity",
        },
        {
            title: "Engagement",
            description:
                "Qu’il s’agisse d’impression, de stratégie digitale ou de contenus visuels, nous sommes présents pour vous : de la création jusqu’à la livraison et même après ...",
            image:
                "./src/assets/images/emplo.png",
            alt: "Illustration of a puzzle piece representing engagement",
        },
    ];

    return (
        <section className="bg-bg  text-center py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={feature.image}
                                alt={feature.alt}
                                className="w-24 h-24 mb-4"
                            />
                            <h2 className="text-2xl font-semibold bg-gradient-to-r text-gray-800  bg-clip-text mb-2">
                                {feature.title}
                            </h2>


                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
