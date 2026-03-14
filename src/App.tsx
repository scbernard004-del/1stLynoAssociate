import React, { useEffect } from 'react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Services from './Services';
import Partners from './Partners';
import Sectors from './Sectors';
import Contact from './Contact';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-800">
        <Navbar />
        {/* Add padding-top (pt-20) equal to Navbar height to prevent content occlusion */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MemoryRouter>
  );
};

export default App;
