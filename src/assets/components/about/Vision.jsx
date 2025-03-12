import React from 'react';
import { motion } from 'framer-motion';
import Img7 from "../../images/photo7.png";
import Img8 from "../../images/photo8.png";

// Variants for reusable animations
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
};

const Vision = () => {
  return (
    <div>
      <section className="bg-bg dark:bg-darkBg">
        {/* Vision Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="mx-auto max-w-7xl px-10 py-16"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Content Div */}
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} className="max-w-[720px]">
              <h3 className="text-3xl font-extrabold md:text-5xl text-mainHeading dark:text-darkMainHeading">
                Notre Vision
              </h3>
              <p className="max-w-[600px] text-md font-normal text-dark mt-6 dark:text-darkPara text-para md:text-base">
              Nous aspirons à devenir une référence incontournable en marketing digital et développement web, en offrant des services créatifs et efficaces qui s’adaptent aux besoins évolutifs des entreprises. Notre ambition est de proposer des solutions digitales complètes et innovantes, permettant à nos clients d’optimiser leur visibilité et d’accélérer leur croissance dans un monde numérique en constante évolution.

              </p>
            </motion.div>
            {/* Image Div */}
            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
              <img src={Img7} className="rounded-md" alt="Vision" />
            </motion.div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="mx-auto max-w-7xl px-10 py-16"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Image Div */}
            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
              <img src={Img8} className="rounded-md" alt="Mission" />
            </motion.div>
            {/* Content Div */}
            <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} className="max-w-[720px]">
              <h3 className="text-3xl font-extrabold md:text-5xl text-mainHeading dark:text-darkMainHeading">
                Notre Mission
              </h3>
              <p className="max-w-[600px] mb-4 text-md font-normal mt-6 text-dark dark:text-darkPara text-para md:text-base">
              Chez CREAFLY, nous accompagnons les entreprises dans leur transformation digitale en proposant des solutions innovantes et performantes. Grâce à des stratégies marketing sur mesure, un développement web optimisé et des campagnes de communication impactantes, nous aidons nos clients à renforcer leur présence en ligne et à atteindre leurs objectifs de croissance.

              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Vision;
