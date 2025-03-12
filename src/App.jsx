import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/components/shared components/Header'
import Home from './pages/Home'
import Layout from './pages/Layout'
import About from './pages/About'
import Devis from './pages/Devis'
import Services from './pages/Services'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SubLayout from './pages/SubLayout'
import './App.css';
import Secrets from './pages/Secrets'
function App() {

     return (
          <BrowserRouter>
               <Routes>
                    <Route path='/' element={<Layout />} >
                         <Route index element={<Home />} />
                         <Route element={<SubLayout />}>
                              <Route path="about" element={<About />} />
                              <Route path="devis" element={<Devis />} />
                              <Route path="services" element={<Services />} />
                              <Route path="secrets" element={<Secrets />} />
                         </Route>
                    </Route>
               </Routes>
          </BrowserRouter>
     );
}

export default App;
