import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 'hira-fragrances',
    title: 'Hira Fragrances',
    description: 'Designed and developed a premium e-commerce interface for a luxury perfume brand, focusing on minimal aesthetics, smooth user interactions, and clean navigation.',
    details: 'Features a catalog search, product detail grids, responsive layouts for mobile and desktop, and a streamlined check-out interface.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Vercel'],
    category: 'Web',
    github: '',
    live: 'https://hirafragrances.com/'
  },
  {
    id: 'sosync',
    title: 'SOSync / Emergency Alert System',
    description: 'A critical emergency alert and coordinate system designed to broadcast localized SOS notifications in urgent situations.',
    details: 'Configures emergency contacts and utilizes geolocation APIs to transmit coordinates immediately, prioritizing fast execution and low latency.',
    tags: ['TypeScript', 'Node.js', 'APIs', 'Web Development'],
    category: 'Software',
    github: 'https://github.com/ABHINAY-ReDdY1107/SOSYNC',
    live: ''
  },
  {
    id: 'genz-translator',
    title: 'GenZ Translator',
    description: 'An NLP-focused experimentation project exploring translation of contemporary Gen Z slang into standard English phrases.',
    details: 'Leverages text tokenization, dictionary mappings, and NLP fundamentals to translate informal youth slang into grammatically clear standard English.',
    tags: ['Python', 'NLP', 'Language Processing', 'Jupyter Notebook'],
    category: 'AI',
    github: 'https://github.com/ABHINAY-ReDdY1107/genz-to-standard-english-translator',
    live: ''
  },
  {
    id: 'quick-bots',
    title: 'Quick Bot / Commerce Assistant',
    description: 'A scraping assistant that aggregates and compares real-time pricing data across quick-commerce apps like Blinkit, Zepto, and Instamart.',
    details: 'Automates searches and parses web elements to yield quick cost comparisons, assisting in finding the best deals across delivery networks.',
    tags: ['Python', 'Web Scraping', 'Automation', 'Data Processing'],
    category: 'Automation',
    github: 'https://github.com/ABHINAY-ReDdY1107/quick-bots',
    live: ''
  },
  {
    id: 'payment-automation',
    title: 'Payment Automation',
    description: 'An automated workflow system designed to streamline receipt processing and payment notifications for small operations.',
    details: 'Configures workflow triggers to match invoice dates and generate automated ledger entries, cutting manual verification time down significantly.',
    tags: ['N8N', 'Python', 'Automation', 'REST APIs'],
    category: 'Automation',
    github: '',
    live: ''
  },
  {
    id: 'lost-found',
    title: 'Lost & Found',
    description: 'A lightweight community platform concept designed for students to report lost items and claim found belongings.',
    details: 'Provides listing cards, search filters, and an email reference system for students to directly contact the finders of lost articles.',
    tags: ['React', 'Node.js', 'Databases', 'Web Development'],
    category: 'Web',
    github: '',
    live: ''
  },
  {
    id: 'vave-salon',
    title: 'Vave Salon',
    description: 'A modern, clean booking and service showcase interface customized for a styling salon business.',
    details: 'Showcases interactive service tables, stylist bios, and a responsive reservation enquiry form.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'Web',
    github: '',
    live: ''
  },
  {
    id: 'bill-generator',
    title: 'Bill Generator',
    description: 'A lightweight software utility built to fast-track small business billing and receipt generation.',
    details: 'Accepts tabular items input, computes tax percentages, and yields clean, printable PDF receipts instantly.',
    tags: ['Python', 'HTML', 'CSS', 'JavaScript'],
    category: 'Software',
    github: '',
    live: ''
  }
];

const categories = ['All', 'Web', 'AI', 'Automation', 'Software'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div className="page projects-page">
      <section className="projects-hero">
        <span className="section-label">Selected Work</span>
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          A collection of web applications, automations, and software projects I have built while exploring computer science and artificial intelligence.
        </p>

        {/* Filter Bar */}
        <div className="filter-bar">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="projects-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card-header">
              <span className="project-category">{project.category}</span>
              <h2 className="project-card-title">{project.title}</h2>
            </div>
            
            <div className="project-card-body">
              <p className="project-desc">{project.description}</p>
              <p className="project-details">{project.details}</p>
              
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="project-card-actions">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link btn-secondary">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="project-link btn-primary">
                  Live Demo
                </a>
              )}
              {!project.github && !project.live && (
                <span className="no-links-label">Private Repository</span>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
