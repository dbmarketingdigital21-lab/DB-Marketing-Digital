
import React from 'react';

const processSteps = [
    { title: 'Discover', description: 'We dive deep into your business, goals, and audience. This phase is all about research, analysis, and strategy to lay a solid foundation.' },
    { title: 'Design', description: 'Our team creates intuitive UI/UX designs and a stunning visual identity. We focus on user experience to ensure your platform is engaging and easy to use.' },
    { title: 'Build', description: 'Our developers bring the designs to life with clean, efficient code. We build scalable and high-performance websites and applications.' },
    { title: 'Automate', description: 'We identify opportunities to integrate AI, automating repetitive tasks, streamlining workflows, and unlocking new levels of efficiency for your business.' },
    { title: 'Launch', description: 'After rigorous testing, we deploy your project. But our partnership doesn\'t end here; we provide ongoing support to ensure continued success.' }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="bg-brand-light py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-16">Our Process</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-start">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-300" style={{ transform: 'translateY(-50%)', zIndex: 1 }}></div>
          
          {processSteps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center w-full md:w-1/5 mb-8 md:mb-0 px-2">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-gold text-brand-dark font-bold text-xl rounded-full mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
