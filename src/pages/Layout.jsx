import React from 'react';
import Header from '../assets/components/shared components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../assets/components/shared components/Footer';

const Layout = () => {
     return (
          <>
               <Header />
               <Outlet />
               <Footer />
          </>
     );
}

export default Layout;
