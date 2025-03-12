import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../images/LOGO.png';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { IconButton } from "@material-tailwind/react";
import photo9 from '../../images/photo9.png';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                isSticky ? 'fixed top-0 left-0 w-full shadow-lg' : ''
            } dark:bg-darkBg h-[8vh] bg-bg z-20 flex w-full items-center md:px-20 px-8 transition-all`}
        >
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <Link to="/" className="block w-full">
                            <img
                                src={LOGO}
                                alt="logo"
                                className="w-24.5 md:w-30"
                            />
                        </Link>
                    </div>
                    <div className="flex w-full items-center justify-around px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={`${
                                    open && 'dark:bg-darkBg z-40 navbarTogglerActive'
                                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="z-40 relative my-[6px] block h-[2px] w-[30px] bg-blue-gray-900 dark:bg-white"></span>
                                <span className="z-40 relative my-[6px] block h-[2px] w-[30px] bg-blue-gray-900 dark:bg-white"></span>
                                <span className="z-40 relative my-[6px] block h-[2px] w-[30px] bg-blue-gray-900 dark:bg-white"></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`z-40 absolute right-4 top-full w-full max-w-[250px] rounded-lg dark:bg-darkBg bg-bg px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                                    !open && 'hidden'
                                } `}
                            >
                                <ul className="block lg:flex items-center justify-center">
                                    <ListItem NavLink="/">ACCUEIL</ListItem>
                                    <ListItem NavLink="/about">A PROPOS</ListItem>
                                    <ListItem NavLink="/services">SERVICES</ListItem>
                                    {/* Change the NavLink for SECRETS */}
                                    <ListItem NavLink="/secrets">SECRETS</ListItem>

                                    <li className="lg:ml-4 mt-2 lg:mt-0">
                                        <Link to="/devis">
                                            <button
                                                type="button"
                                                className="text-white transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-gradient-to-br from-pink-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center lg:ml-10"
                                            >
                                                CONTACTEZ-NOUS
                                            </button>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

const ListItem = ({ children, NavLink }) => {
    return (
        <li>
            <Link
                to={NavLink}
                className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-darkPara lg:ml-10 lg:inline-flex"
            >
                {children}
            </Link>
        </li>
    );
};

export default Header;
