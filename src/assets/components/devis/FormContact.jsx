import React, { useState, useRef } from 'react';
import { Button } from "@material-tailwind/react";
import { IoIosSend } from "react-icons/io";
import emailjs from 'emailjs-com';

const FormContact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!formRef.current) return;
  
    emailjs.sendForm(
      'service_oqb534j', // Your Service ID
      'template_8x4g7qn', // Your Template ID
      formRef.current,    // Reference to the form
      '6nOXoJxKkVekGvGtV' // Your Public Key
    )
    .then((result) => {
      console.log("✅ Email Sent Successfully:", result.text);
      alert('Message Sent Successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error("❌ EmailJS Error:", error);
      alert(`An error occurred: ${error.text || 'Check console for details'}`);
    });
  };

  return (
    <div className='bg-bg'>
      <section className="mx-auto max-w-7xl mt-20 mb-20 overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap lg:justify-between">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4 mb-12 max-w-[570px] lg:mb-0">
              <h2 className="mb-4 text-md font-bold uppercase text-para md:text-xl">
                Contactez CREAFLY dès maintenant et boostez votre business !
              </h2>
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Nom ou Prenom"
                    name="name"
                    value={formData.name} onChange={handleChange}
                    required
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Votre Email"
                    name="email"
                    value={formData.email} onChange={handleChange}
                    required
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Pack Choisi:"
                    name="subject"
                    value={formData.subject} onChange={handleChange}
                    required
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows={6}
                    placeholder="Votre Message"
                    name="message"
                    value={formData.message} onChange={handleChange}
                    required
                    className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <Button type='submit' className="mx-auto mt-12 flex items-center gap-3 bg-cyan-200 text-para justify-center" size='lg' fullWidth>
                    ENVOYER UN MESSAGE
                    <IoIosSend size={20} />
                  </Button>
                </div>
              </form>
            </div>

            {/* Right Empty Space (Optional) */}
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4 bg-bg">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.247883151448!2d-9.55188342378898!3d30.400708201602015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7007dd29441%3A0xf807f131d3cb16e6!2sCreafly!5e0!3m2!1sfr!2sma!4v1742220291712!5m2!1sfr!2sma"
                  width="650"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormContact;
