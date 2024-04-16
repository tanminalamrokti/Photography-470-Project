import React from 'react';
//import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

//import routes route & useLocation hook
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


const AnimRoutes = () => {
  const location = useLocation ();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} Location={location}>
        <Route path='/' elemeny={<Home />} />
        <Route path='/about' elemeny={<About />} />
        <Route path='/portfolio' elemeny={<Portfolio />} />
        <Route path='/contact' elemeny={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;