
import React, { useState } from 'react';

// Icons
const EmailIcon = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const WhatsAppIcon = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.457l-6.354 1.654zm6.487-3.999a.498.498 0 00.297-.082c1.442-.873 2.585-1.942 3.48-3.197.894-1.255 1.34-2.733 1.339-4.226.002-4.99-4.06-9.05-9.052-9.05-4.99 0-9.05 4.06-9.05 9.05 0 2.05.674 3.998 1.884 5.612.164.224.258.497.242.775l-.215 1.631 1.7-1.021a.498.498 0 00.34-.112z" /></svg>;

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
                    <div className="bg-brand-dark text-white p-8 rounded-lg flex flex-col items-center justify-center text-center h-full">
                        <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                        <div className="space-y-10">
                            <a href="mailto:contact@dbmarketing.com" className="inline-block text-gray-300 hover:text-brand-gold transition-colors group">
                                <EmailIcon className="h-12 w-12 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                                <span className="text-lg">contact@dbmarketing.com</span>
                            </a>
                            <a href="https://wa.me/5511912345678" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-300 hover:text-brand-gold transition-colors group">
                                <WhatsAppIcon className="h-12 w-12 mb-2 mx-auto group-hover:scale-110 transition-transform"/>
                                <span className="text-lg">+55 11 91234 5678</span>
                            </a>
                        </div>
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
