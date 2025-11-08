
import React from 'react';

const steps = ['Discover', 'Design', 'Build', 'Automate', 'Launch'];

const Process: React.FC = () => {
  return (
    <section id="process" className="bg-brand-light py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-16">Our Process</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-center">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300" style={{ transform: 'translateY(-50%)', zIndex: 1 }}></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center w-full md:w-1/5 mb-8 md:mb-0">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-gold text-brand-dark font-bold text-xl rounded-full mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-brand-navy">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
