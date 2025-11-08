
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AnimateOnScroll from './components/AnimateOnScroll';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark font-sans text-brand-navy">
      <Header />
      <main>
        <Hero />
        <AnimateOnScroll>
          <Services />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Portfolio />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Process />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Contact />
        </AnimateOnScroll>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
