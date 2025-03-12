import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <div className='bg-bg'>
            <footer className="bg-bg rounded-lg shadow-sm dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="./src/assets/images/LOGO.png" className="h-8" alt="Logo" />
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/about" className="hover:underline me-4 md:me-6">À propos</Link>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <Link to="/devis" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Social Media Icons with Official Colors */}
                    <div className="flex justify-center mt-4 space-x-6">
                        <a href="https://www.facebook.com/share/1YdYYt9P3g/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:opacity-80">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/creafly_agency?igsh=bWd0cWJld2huMG9h" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:opacity-80">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://vm.tiktok.com/ZMBFn88yM/" target="_blank" rel="noopener noreferrer" className="text-black text-2xl hover:opacity-80">
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:opacity-80">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/creaflyagency/" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:opacity-80">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2025 <Link to="/" className="hover:underline">Creafly</Link>. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
