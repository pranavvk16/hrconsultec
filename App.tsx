import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import EmployeeNest from './components/EmployeeNest';
import Services from './components/Services';
import About from './components/About';
import Differentiators from './components/Differentiators';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <EmployeeNest />
        <Services />
        <About />
        <Differentiators />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;