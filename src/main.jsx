import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CapabilityTicker from './components/CapabilityTicker';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState('');

  // Scroll reveal observer for subtle stagger effects
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.service-card, .project-card, .stat-card, .why-card, .process-card, .industry-row-item, .tech-grid-card, .triad-card, .internship-perk-card'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el, index) => {
      el.classList.add('reveal-item');
      el.style.setProperty('--reveal-delay', `${(index % 4) * 80}ms`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="site-root">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services onSelectService={(service) => setSelectedService(service)} />
        <CapabilityTicker />
        <Internship onApply={(service) => setSelectedService(service)} />
        <Projects />
        <Industries />
        <WhyChooseUs />
        <Process />
        <TechStack />
        <Contact prefilledService={selectedService} />
      </main>

      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
