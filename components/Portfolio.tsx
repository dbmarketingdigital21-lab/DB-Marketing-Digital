
import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';

type Category = 'All' | 'Web Design' | 'App Development' | 'AI Automations' | 'Brand Design';

const categories: Category[] = ['All', 'Web Design', 'App Development', 'AI Automations', 'Brand Design'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('Web Design');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(PROJECTS_DATA);
    } else {
      setFilteredProjects(PROJECTS_DATA.filter(p => p.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section id="portfolio" className="bg-brand-light py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-12">Featured Projects</h2>
        
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${activeFilter === category ? 'bg-brand-gold text-brand-dark' : 'bg-gray-200 text-brand-navy hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <p className="text-brand-gold text-sm font-semibold mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href="#" className="font-semibold text-brand-navy hover:text-brand-gold transition-colors">
                  Get Similar Result &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
