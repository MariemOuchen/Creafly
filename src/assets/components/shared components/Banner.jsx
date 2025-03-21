import React from 'react';

const Banner = ({ title }) => {
    return (
        <div
            className="w-full h-[20vh] bg-cover bg-center"
            style={{ backgroundImage: "url('./src/assets/images/outil-marketing-digital.webp')" }}
        >
            {/* Overlay container to center the title */}
            <div className="bg-black w-full h-full bg-opacity-65 flex justify-center  text-center items-center text-darkMainHeading font-extrabold md:text-4xl text-lg">
                <h2 className="mt-6">{title}</h2>
            </div>
        </div>
    );
};

export default Banner;
