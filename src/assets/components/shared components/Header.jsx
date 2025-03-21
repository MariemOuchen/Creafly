import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../images/LOGO.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(currentScrollPos < prevScrollPos || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <header
    className={`fixed top-0 left-0 w-full h-[5vh] z-50 flex items-center md:px-20 px-8 backdrop-blur-lg bg-black bg-opacity-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
>
    <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="w-20">
            <Link to="/">
                <img src={LOGO} alt="logo" className="w-20 md:w-20" />
            </Link>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex w-full justify-center space-x-24 text-xs">
            <Link to="/" className="text-white hover:text-gray-300">ACCUEIL</Link>
            <Link to="/about" className="text-white hover:text-gray-300">A PROPOS</Link>
            <Link to="/services" className="text-white hover:text-gray-300">SERVICES</Link>
            <Link to="/secrets" className="text-white hover:text-gray-300">SECRETS</Link>
        </nav>

        {/* Contact Button (Desktop) */}
        {/* <div className="hidden lg:block">
            <Link to="/devis">
                <button size="sm" className="text-white bg-gradient-to-br from-pink-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-xs px-3 py-2">
                    CONTACTEZ-NOUS
                </button>
            </Link>
        </div> */}

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white text-2xl">
            {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Sidebar Menu */}
        <div
            className={`fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-90 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col p-6 space-y-6`}
        >
            <button onClick={() => setOpen(false)} className="self-end text-white text-xs">
                <FaTimes />
            </button>
            <Link to="/" className="text-white text-xs" onClick={() => setOpen(false)}>ACCUEIL</Link>
            <Link to="/about" className="text-white text-xs" onClick={() => setOpen(false)}>A PROPOS</Link>
            <Link to="/services" className="text-white text-xs" onClick={() => setOpen(false)}>SERVICES</Link>
            <Link to="/secrets" className="text-white text-xs" onClick={() => setOpen(false)}>SECRETS</Link>
            <Link to="/devis" onClick={() => setOpen(false)}>
                <button className="text-white bg-gradient-to-br from-pink-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-4 py-2 w-full">
                    CONTACTEZ-NOUS
                </button>
            </Link>
        </div>

        {/* Backdrop for mobile menu */}
        {open && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
                onClick={() => setOpen(false)}
            ></div>
        )}
    </div>
</header>

    );
};

export default Header;
