
import React from 'react';

const WhatsAppIcon = () => <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.457l-6.354 1.654zm6.487-3.999a.498.498 0 00.297-.082c1.442-.873 2.585-1.942 3.48-3.197.894-1.255 1.34-2.733 1.339-4.226.002-4.99-4.06-9.05-9.052-9.05-4.99 0-9.05 4.06-9.05 9.05 0 2.05.674 3.998 1.884 5.612.164.224.258.497.242.775l-.215 1.631 1.7-1.021a.498.498 0 00.34-.112z" /></svg>;

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511912345678"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transform transition-all duration-300 z-40"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default WhatsAppButton;
