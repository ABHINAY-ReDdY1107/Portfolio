import React from 'react';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'Hira Fragrances',
    description:
      'Designed and developed a full e-commerce website for Hira Fragrances, a premium perfume brand, with a focus on elegant UI and a smooth user experience.',
    tags: ['Web Design', 'E-Commerce', 'Frontend'],
    link: 'https://hirafragrances.com/',
    github: 'https://github.com/ABHINAY-ReDdY1107',
    live: true,
  },
  {
    number: '02',
    title: 'Payment Automation System',
    description:
      'Built an end-to-end payment automation workflow for a company using N8N. Streamlined invoice processing and reduced manual work significantly.',
    tags: ['N8N', 'Automation', 'Python'],
    link: '#',
    github: 'https://github.com/ABHINAY-ReDdY1107',
    live: false,
    comingSoon: true,
  },
  {
    number: '03',
    title: 'Genzy Slang Translation Project',
    description:
      'An NLP-focused project exploring the translation of Gen Z style slang into clearer language, combining language processing ideas with practical experimentation.',
    tags: ['NLP', 'Python', 'Language Processing'],
    github: 'https://github.com/ABHINAY-ReDdY1107/genz-slang-nlp-project',
    live: false,
  },
  {
    number: '04',
    title: 'Quick Bot',
    description:
      'A quick-commerce assistant project that uses Python scraping logic to collect real-time product pricing insights across platforms such as Blinkit, Zepto, and Instamart.',
    tags: ['Python', 'Scraping', 'Automation'],
    github: 'https://github.com/ABHINAY-ReDdY1107',
    live: false,
  },
];

export default function Projects() {
  return (
    <div className="page projects">
      <section className="projects-hero">
        <div className="section-label">Selected Work</div>
        <h1 className="projects-title">Projects</h1>
      </section>
      <section className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-content">
              <div className="project-header">
                <h2 className="project-title">{project.title}</h2>
                {project.comingSoon && <span className="badge">Link Coming Soon</span>}
                {project.live && <span className="badge live">Live</span>}
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.live && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="proj-link">
                    Visit Site ->
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="proj-link ghost">
                    GitHub ->
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
