import { useEffect } from 'react'; // Import useEffect
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './assets/components/shared components/Header';
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import Devis from './pages/Devis';
import Services from './pages/Services';
import SubLayout from './pages/SubLayout';
import Secrets from './pages/Secrets';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/swiper-bundle.css';

function App() {
  const location = useLocation(); // Get the current location

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Trigger effect on route change

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<SubLayout />}>
          <Route path="about" element={<About />} />
          <Route path="devis" element={<Devis />} />
          <Route path="services" element={<Services />} />
          <Route path="secrets" element={<Secrets />} />
        </Route>
      </Route>
    </Routes>
  );
}

// Wrap App with BrowserRouter
function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;