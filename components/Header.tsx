
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = NAV_LINKS.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = 'home';
      for (const section of sections) {
        if (section && section.offsetTop <= window.scrollY + 100) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-xl font-bold text-white">
          DB Marketing Digital
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-white hover:text-brand-gold transition-colors ${activeSection === link.href.substring(1) ? 'text-brand-gold font-semibold' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="bg-brand-gold text-brand-dark font-semibold px-4 py-2 rounded-md hover:bg-brand-gold-hover transition-colors">
            Start a Project
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-brand-dark`}>
        <nav className="flex flex-col items-center space-y-4 py-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-lg text-white hover:text-brand-gold transition-colors ${activeSection === link.href.substring(1) ? 'text-brand-gold font-semibold' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="bg-brand-gold text-brand-dark font-semibold px-6 py-3 rounded-md hover:bg-brand-gold-hover transition-colors mt-4">
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
