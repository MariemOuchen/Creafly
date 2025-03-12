import {
     Card,
     CardBody,
     Typography,
 } from "@material-tailwind/react";
 
 function TeamCard({ img, name, title }) {
     return (
         <Card className="rounded-lg bg-bg dark:bg-darkBg" shadow={false}>
             <CardBody className="text-center p-4 space-y-2">
                 <img
                     src={img}
                     alt={name}
                     className="mx-auto w-36 h-36 object-cover rounded-md transform transition-transform duration-200 hover:scale-105"
                 />
                 <Typography variant="h5" className="!font-medium text-lg text-mainHeading dark:text-darkSubHeading">
                     {name}
                 </Typography>
                 <Typography className="!text-base !font-semibold text-subHeading dark:text-darkSubHeading">
                     {title}
                 </Typography>
             </CardBody>
         </Card>
     );
 }
 
 const members = [
     {
         img: "./src/assets/images/oussama-bouarfa.jpg",
         name: "Oussama Bouarfa",
         title: "PDG-Fondateur",
     },
     
     {
         img: "./src/assets/images/mohamed.jpg",
         name: "Mohamed Kesstaou",
         title: "Ads manager",
     },
     {
         img: "./src/assets/images/mariem-ouchen.jpg",
         name: "Mariem Ouchen",
         title: "Développeuse Full Stack",
     },
     {
          img: "./src/assets/images/salma.jpg",
          name: "Salma Samiri",
          title: "Responsable des Ventes",
      },
     {
         img: "./src/assets/images/oumaima.jpg",
         name: "Oumaima El-Kebda",
         title: "Créatrice de Contenu",
     },
     {
         img: "./src/assets/images/islamkestaou.jpg",
         name: "Islam Kesstaou",
         title: "Assistant marketing",
     },
     {
         img: "./src/assets/images/med rida.jpg",
         name: "Mohamed Reda le Bsir",
         title: "Assistant marketing",
     }
 ];
 
 export function Team() {
     return (
         <section className="py-18 px-8 bg-bg dark:bg-darkBg">
             <div className="container mx-auto">
                 <div className="text-center">
                     <Typography variant="h1" className="text-3xl font-extrabold md:text-5xl text-mainHeading dark:text-darkMainHeading">
                         Notre Équipe Principale
                     </Typography>
                     <Typography variant="lead" className="mx-auto mb-8 mt-4 max-w-[800px] text-para dark:text-darkPara md:mb-12">
                         Notre équipe incroyablement compétente est toujours prête à vous aider en cas de besoin.
                     </Typography>
                 </div>
 
                 {/* First row: Oussama alone */}
                 <div className="grid grid-cols-1 mb-6">
                     <TeamCard {...members[0]} />
                 </div>
 
                 {/* Remaining members in a 3x3 grid */}
                 <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                     {members.slice(1).map((props, key) => (
                         <TeamCard key={key} {...props} />
                     ))}
                 </div>
             </div>
         </section>
     );
 }
 
 export default Team;
 