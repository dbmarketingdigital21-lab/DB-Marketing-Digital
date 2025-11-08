
import React from 'react';
import { NAV_LINKS } from '../constants';

const GithubIcon = () => <svg aria-label="GitHub" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>;
const LinkedinIcon = () => <svg aria-label="LinkedIn" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.399c0-2.022.404-4.254 3.254-4.254 2.85 0 2.746 2.493 2.746 4.385v8.268h4.98v-8.583c0-4.72-2.5-8.417-6.85-8.417-3.243 0-5.127 1.807-5.977 3.324z"/></svg>;


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Social */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">DB Marketing Digital</h3>
            <p className="text-gray-400 max-w-sm mb-4">
              Building high-performance websites and AI automations from Brazil to empower U.S. businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><GithubIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkedinIcon /></a>
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}><a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </div>
          {/* Column 3: Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@dbmarketing.com</li>
              <li>+55 11 91234 5678</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {currentYear} DB Marketing Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
