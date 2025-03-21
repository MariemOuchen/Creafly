import { useState } from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <input
                className="w-1/2 p-2 border border-gray-300 rounded"
                type="text"
                name="name"
                placeholder="Nom & Prénom*"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="w-1/2 p-2 border border-gray-300 rounded"
                type="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="phone"
              placeholder="Téléphonie mobile*"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="subject"
              placeholder="Sujet*"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              className="w-full p-2 border border-gray-300 rounded h-32"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full" type="submit">
              ENVOYER UN MESSAGE
            </button>
          </form>
        </div>
        <div>
          <img
            src="https://placehold.co/600x400"
            alt="Map showing the location of HBM COMMUNICATION in Agadir, Morocco"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;