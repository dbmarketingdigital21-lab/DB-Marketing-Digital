
import { Project } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS_DATA: Project[] = [
  // Web Design
  {
    id: 1,
    category: 'Web Design',
    image: 'https://picsum.photos/seed/project1/600/400',
    title: 'Corporate Website for FinTech',
    description: 'A secure and professional website for a US financial technology company to build trust.',
  },
  {
    id: 2,
    category: 'Web Design',
    image: 'https://picsum.photos/seed/project2/600/400',
    title: 'Booking Platform for Travel',
    description: 'An intuitive travel booking site with complex filtering and payment integrations.',
  },
  {
    id: 3,
    category: 'Web Design',
    image: 'https://picsum.photos/seed/project3/600/400',
    title: 'Online Portfolio for Architect',
    description: 'A visually stunning, minimalist portfolio to showcase high-end architectural projects.',
  },
  // App Development
  {
    id: 4,
    category: 'App Development',
    image: 'https://picsum.photos/seed/project4/600/400',
    title: 'Meditation & Mindfulness App',
    description: 'A calming mobile app for iOS and Android to guide users through meditation sessions.',
  },
  {
    id: 5,
    category: 'App Development',
    image: 'https://picsum.photos/seed/project5/600/400',
    title: 'E-learning Mobile Platform',
    description: 'A cross-platform app for an education startup, offering video courses and quizzes.',
  },
  {
    id: 6,
    category: 'App Development',
    image: 'https://picsum.photos/seed/project6/600/400',
    title: 'Internal Logistics Management',
    description: 'An enterprise app to track inventory and manage supply chains for a US distributor.',
  },
  // AI Automations
  {
    id: 7,
    category: 'AI Automations',
    image: 'https://picsum.photos/seed/project7/600/400',
    title: 'Social Media Content Scheduler',
    description: 'An AI tool that automatically generates and schedules engaging social media posts.',
  },
  {
    id: 8,
    category: 'AI Automations',
    image: 'https://picsum.photos/seed/project8/600/400',
    title: 'AI-driven Sales Funnel',
    description: 'Optimized sales funnel that uses AI to personalize the customer journey and increase conversions.',
  },
  {
    id: 9,
    category: 'AI Automations',
    image: 'https://picsum.photos/seed/project9/600/400',
    title: 'Personalized Email Marketing',
    description: 'An automated system that sends highly personalized emails to leads based on their behavior.',
  },
  // Brand Design
  {
    id: 10,
    category: 'Brand Design',
    image: 'https://picsum.photos/seed/project10/600/400',
    title: 'Visual Identity for Coffee Brand',
    description: 'Complete branding package, including logo, packaging, and digital assets for a new coffee roaster.',
  },
  {
    id: 11,
    category: 'Brand Design',
    image: 'https://picsum.photos/seed/project11/600/400',
    title: 'UI/UX Redesign for SaaS',
    description: 'A complete user interface and experience overhaul for a project management SaaS platform.',
  },
  {
    id: 12,
    category: 'Brand Design',
    image: 'https://picsum.photos/seed/project12/600/400',
    title: 'Marketing Collateral for Startup',
    description: 'Designing pitch decks, brochures, and social media templates for a tech startup.',
  },
];
