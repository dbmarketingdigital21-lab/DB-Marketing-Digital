
import React, { useState } from 'react';

// Icons
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const WhatsAppIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.457l-6.354 1.654zm6.487-3.999a.498.498 0 00.297-.082c1.442-.873 2.585-1.942 3.48-3.197.894-1.255 1.34-2.733 1.339-4.226.002-4.99-4.06-9.05-9.052-9.05-4.99 0-9.05 4.06-9.05 9.05 0 2.05.674 3.998 1.884 5.612.164.224.258.497.242.775l-.215 1.631 1.7-1.021a.498.498 0 00.34-.112z" /></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.399c0-2.022.404-4.254 3.254-4.254 2.85 0 2.746 2.493 2.746 4.385v8.268h4.98v-8.583c0-4.72-2.5-8.417-6.85-8.417-3.243 0-5.127 1.807-5.977 3.324z"/></svg>;
const LanguageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4 13l4-16M11 21V5m0 0H7.5M5.5 5.5A.5.5 0 016 6v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM15 21v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10-10V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0h2m-2-2h-2m-2-2H9.5m2.5 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>;

interface FormData {
    name: string;
    email: string;
    company: string;
    projectType: string;
    message: string;
    consent: boolean;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '', email: '', company: '', projectType: 'Web Design', message: '', consent: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!formData.consent) {
            alert('You must agree to the terms.');
            return;
        }
        const subject = `New Project Request from ${formData.name}`;
        const body = `
            Name: ${formData.name}
            Email: ${formData.email}
            Company: ${formData.company || 'N/A'}
            Project Type: ${formData.projectType}
            
            Message:
            ${formData.message}
        `;
        window.location.href = `mailto:contact@dbmarketing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="bg-brand-light py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-12">Let's build something great</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-brand-dark text-white p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center"><EmailIcon /> contact@dbmarketing.com</li>
                            <li className="flex items-center"><WhatsAppIcon /> +55 11 91234 5678</li>
                            <li className="flex items-center"><GithubIcon /> github.com/dbmarketing</li>
                            <li className="flex items-center"><LinkedinIcon /> linkedin.com/company/dbmarketing</li>
                            <li className="flex items-center"><LanguageIcon /> English & Portuguese</li>
                        </ul>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-brand-navy font-semibold mb-1">Full Name *</label>
                            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:outline-none"/>
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-brand-navy font-semibold mb-1">Work Email *</label>
                            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:outline-none"/>
                        </div>
                         <div>
                            <label htmlFor="company" className="block text-brand-navy font-semibold mb-1">Company</label>
                            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:outline-none"/>
                        </div>
                         <div>
                            <label htmlFor="projectType" className="block text-brand-navy font-semibold mb-1">Project Type</label>
                            <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:outline-none bg-white">
                                <option>Web Design</option>
                                <option>App Development</option>
                                <option>AI Automations</option>
                                <option>Brand Design</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-brand-navy font-semibold mb-1">Message *</label>
                            <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:outline-none"></textarea>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="consent" name="consent" required checked={formData.consent} onChange={handleChange} className="h-4 w-4 text-brand-gold focus:ring-brand-gold border-gray-300 rounded"/>
                            <label htmlFor="consent" className="ml-2 block text-sm text-brand-navy">I agree to the terms and conditions. *</label>
                        </div>
                        <button type="submit" className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-md hover:bg-brand-gold-hover transition-colors">Send Request</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
