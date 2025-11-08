
import React, { useState, useEffect } from 'react';

const images = [
  'https://picsum.photos/seed/hero1/1920/1080',
  'https://picsum.photos/seed/hero2/1920/1080',
  'https://picsum.photos/seed/hero3/1920/1080',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-6 text-white z-10">
        <div className="max-w-3xl">
          <p className="text-brand-gold font-semibold tracking-widest animate-slide-up" style={{ animationDelay: '0.2s' }}>FROM BRAZIL, BUILDING FOR THE U.S.</p>
          <h1 className="text-4xl md:text-6xl font-extrabold my-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Web Design & AI Automations that move your business forward
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            We help U.S. companies thrive by building high-performance websites and implementing intelligent AI automations that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="bg-brand-gold text-brand-dark font-bold px-8 py-3 rounded-md hover:bg-brand-gold-hover transition-transform transform hover:scale-105 text-center">
              Start a Project
            </a>
            <a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')} className="border-2 border-white text-white font-bold px-8 py-3 rounded-md hover:bg-white hover:text-brand-dark transition-all transform hover:scale-105 text-center">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
