import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechnologySection from './components/TechnologySection';
import FeasibilitySection from './components/FeasibilitySection';
import ImpactSection from './components/ImpactSection';
import EconomicsSection from './components/EconomicsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'EcoEnergy Tunisia | Textile Wastewater to Energy Project';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TechnologySection />
        <FeasibilitySection />
        <ImpactSection />
        <EconomicsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;