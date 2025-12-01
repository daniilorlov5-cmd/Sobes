import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemsSolution } from './components/ProblemsSolution';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { Team } from './components/Team';
import { Blog } from './components/Blog';
import { ContactSection } from './components/ContactSection';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-brand-dark selection:bg-brand-red selection:text-white">
      <Header onCtaClick={openModal} />
      
      <main>
        <Hero onCtaClick={openModal} />
        <ProblemsSolution />
        <HowItWorks />
        <Features />
        <Comparison />
        <Pricing onCtaClick={openModal} />
        <Team />
        <Blog />
        <ContactSection onDemoClick={openModal} />
      </main>

      <Footer />
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
