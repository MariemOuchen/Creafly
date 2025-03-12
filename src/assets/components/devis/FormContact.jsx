import React, { useState } from 'react';
import LOGO from "../../images/LOGO.png";
import photo9 from "../../images/photo9.png";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { IoIosSend } from "react-icons/io";
import emailjs from 'emailjs-com';


const FormContact = () => {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          subject: '',
          message: ''
     });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
               ...formData,
               [name]: value
          });
     };

     const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm('service_oqb534j', 'template_8x4g7qn', e.target, 'A-awfED5hu1_jZAKi')
               .then((result) => {
                    console.log(result.text);
                    alert('Message Sent Successfully!');
               }, (error) => {
                    console.log(error.text);
                    alert('An error occurred, please try again');
               });

          setFormData({
               name: '',
               email: '',
               subject: '',
               message: ''
          });
     };


     return (
          <div className='bg-bg dark:bg-darkBg'>
               <section className="mx-auto max-w-7xl px-5 py-18 md:px-10 md:py-20 overflow-hidden">
                    <div className="container">
                         <div className="-mx-4 flex flex-wrap lg:justify-between">
                              <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                                   <div className="mb-12 max-w-[570px] lg:mb-0">
                                        <span className="mb-4 block text-base font-semibold text-primary">
                                             <img src={LOGO} alt="logo" className=' w-24 dark:hidden block' />
                                             <img src={photo9} alt="dfddf" className=' w-24 dark:block hidden' />
                                        </span>
                                        <h2 className="mb-4 text-md font-bold uppercase text-dark dark:text-darkMainHeading text-mainHeading md:text-xl">
                                             Contactez GROUP D'INNOVATIONS & MAINTENENCES pour l'Avenir Énergétique
                                        </h2>
                                        <p className="mb-9 text-base leading-relaxed text-para dark:text-darkPara">
                                             Contactez GROUP D'INNOVATIONS & MAINTENENCES pour des Solutions Énergétiques Innovantes. Transformez Votre Vision en Réalité avec Rapidité, Efficacité et Économies.
                                        </p>
                                        <div className="mb-8 flex w-full max-w-[370px]">
                                             <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                                  <MdOutlineHome size={40} color='#ffd803' />

                                             </div>
                                             <div className="w-full">
                                                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-darkMainHeading text-mainHeading">
                                                       ADRESSE
                                                  </h4>
                                                  <p className="text-base  dark:text-darkPara text-para">
                                                       332, Bd Roudani, Etage 5, App 21, Résidence Rayhane, Quartier Maarif, Casablanca
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="mb-8 flex w-full max-w-[370px]">
                                             <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                                  <MdOutlinePhone size={40} color='#ffd803' />

                                             </div>
                                             <div className="w-full">
                                                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-darkMainHeading text-mainHeading">
                                                       TÉLÉPHONE
                                                  </h4>
                                                  <p className="text-base dark:text-darkPara text-para">
                                                       (+212) 660 440 006
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="mb-8 flex w-full max-w-[370px]">
                                             <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                                  <MdOutlineMarkEmailRead size={40} color='#ffd803' />
                                             </div>
                                             <div className="w-full">
                                                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-darkMainHeading text-mainHeading">
                                                       EMAIL
                                                  </h4>
                                                  <p className="text-base dark:text-darkPara text-para">
                                                       contact@migroup.ma
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="rounded-md w-full px-4 lg:w-1/2 xl:w-5/12 bg-bg dark:bg-[#1a1828]">
                                   <div className="relative rounded-lg  p-8 dark:bg-dark-2 sm:p-12">
                                        <p className='mb-4 text-md font-bold uppercase dark:text-darkMainHeading text-mainHeading md:text-xl'>
                                        Demander un devis
                                        </p>
                                        <form onSubmit={sendEmail}>
                                             <div className="mb-6">
                                                  <input
                                                       defaultValue={formData.name}
                                                       type="text"
                                                       placeholder="Nom ou Prenom"
                                                       name="name"
                                                       value={formData.name} onChange={handleChange}
                                                       className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-[#222034] dark:bg-dark dark:text-dark-6 text-para dark:bg-[#222034]"
                                                  />
                                             </div>
                                             <div className="mb-6">
                                                  <input
                                                       defaultValue={formData.email}
                                                       type="email"
                                                       placeholder="Vorte Email"
                                                       name="email"
                                                       value={formData.email} onChange={handleChange}
                                                       className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-[#222034] dark:bg-dark dark:text-dark-6 text-para dark:bg-[#222034]"
                                                  />
                                             </div>
                                             <div className="mb-6">
                                                  <input
                                                       defaultValue={formData.subject}
                                                       type="text"
                                                       placeholder="Sujet"
                                                       name="subject"
                                                       value={formData.subject} onChange={handleChange}
                                                       className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-[#222034] dark:bg-dark dark:text-dark-6 text-para dark:bg-[#222034]"
                                                  />
                                             </div>
                                             <div className="mb-6">
                                                  <textarea
                                                       defaultValue={formData.message}
                                                       rows={6}
                                                       placeholder="Votre Message"
                                                       name="message"
                                                       value={formData.message} onChange={handleChange}
                                                       className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-[#222034] dark:border-dark-3 dark:bg-dark dark:text-dark-6 text-para dark:bg-[#222034]"
                                                  />
                                             </div>
                                             <div>
                                                  <Button type='submit' className=" mx-auto mt-12 flex items-center gap-3 bg-accent text-para justify-center" size='lg' fullWidth>
                                                  DEMANDER UN DEVIS

                                             <IoIosSend size={20} />
                                                  </Button>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

          </div>
     );
}

export default FormContact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
     return (
          <>
               <div className="mb-6">
                    <textarea
                         rows={row}
                         placeholder={placeholder}
                         name={name}
                         className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-[#222034] dark:border-dark-3 dark:bg-dark dark:text-dark-6 text-para dark:bg-[#222034]"
                         defaultValue={defaultValue}
                    />
               </div>
          </>
     );
};

const ContactInputBox = ({ type, placeholder, name }) => {
     return (
          <>
               <div className="mb-6">
                    <input
                         type={type}
                         placeholder={placeholder}
                         name={name}
                         className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-[#222034] dark:bg-dark dark:text-dark-6 text-para dark:bg-[#222034]"
                    />
               </div>
          </>
     );
};