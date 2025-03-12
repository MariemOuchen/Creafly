import React, { useEffect, useState } from 'react';
import Banner from '../assets/components/shared components/Banner';
import { Outlet, useLocation } from 'react-router-dom';


const SubLayout = () => {
     let location  = useLocation();
     const [title, setTitle] = useState("")

     useEffect(() => {
          switch(location.pathname) {
               case "/about":
                    setTitle("À PROPOS DE NOUS");
                    break
               case "/devis":
                    setTitle("Voici comment vous pouvez nous contacter :");
                    break
               case "/services":
                    setTitle("SERVICES");
                    break
               default:
                    setTitle("")

          }
          

     }, [location.pathname])

     return (
          <div>
               <Banner title={title} />
               <Outlet />
          </div>
     );
}

export default SubLayout;
