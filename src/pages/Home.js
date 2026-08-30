import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/abhinay-profile.jpeg';
import './Home.css';

const techCategories = [
  {
    title: 'Languages',
    items: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Web',
    items: ['React', 'Vite', 'Node.js', 'REST APIs']
  },
  {
    title: 'AI / Data',
    items: ['Generative AI', 'LLMs', 'AI APIs', 'Machine Learning fundamentals', 'Data Processing']
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'SQL']
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'Twilio', 'Stripe']
  }
];

const exploringAreas = [
  { title: 'Generative AI', desc: 'Experimenting with prompt engineering, model tuning, and custom LLM inference.' },
  { title: 'LLMs & AI Agents', desc: 'Building autonomous agents that use tools and chain processes for complex tasks.' },
  { title: 'Modern APIs', desc: 'Designing and connecting secure, highly performant APIs across tech stacks.' },
  { title: 'Automation Workflows', desc: 'Streamlining processes using Python scripts, web scrapers, and automation tools.' },
  { title: 'Software Engineering', desc: 'Learning design patterns, algorithms, and clean system design principles.' }
];

const journeySteps = [
  { phase: 'Computer Science', label: 'Mahindra University CS Student' },
  { phase: 'Learning', label: 'Languages, Web Stacks & Core Theory' },
  { phase: 'Building Projects', label: 'E-commerce, Automations & Web Tools' },
  { phase: 'Exploring AI', label: 'GenAI, LLM APIs & Intelligent Workflows' },
  { phase: 'Growing', label: 'Solving real-world problems & expanding skills' }
];

export default function Home() {
  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Computer Science Student</span>
          <h1 className="hero-name">Abhinay</h1>
          <h2 className="hero-headline">Learning. Building. Exploring what's next.</h2>
          <p className="hero-description">
            Computer Science Engineering student focused on building practical web experiences, workflow automations, and exploring the future of artificial intelligence.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <a href="https://github.com/ABHINAY-ReDdY1107" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub</a>
            <a href="#contact" className="btn btn-ghost">Contact</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <span className="section-label">01 / About Me</span>
        <div className="about-grid">
          <div className="about-photo-wrapper">
            <div className="about-photo-frame">
              <img className="about-photo" src={profilePhoto} alt="Abhinay" />
            </div>
          </div>
          <div className="about-text-wrapper">
            <h3 className="about-title">CSE Student & Passionate Builder</h3>
            <p>
              I am a Computer Science Engineering student who loves taking ideas and turning them into working products. I actively learn new technologies, experiment with code, and build practical projects that bridge software and web experiences.
            </p>
            <p>
              I prefer creating things that solve real problems, whether that is automating a mundane task, developing a smooth e-commerce interface, or writing scrapers to collect data.
            </p>
            <p>
              My goal is to stay curious, continually learn, and explore modern systems like AI agents, generative APIs, and responsive full-stack applications.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section tech-section">
        <span className="section-label">02 / Tech Stack</span>
        <h3 className="section-title">Technologies I'm Working With</h3>
        <div className="tech-categories-grid">
          {techCategories.map((category) => (
            <div className="tech-category-card" key={category.title}>
              <h4 className="category-title">{category.title}</h4>
              <ul className="tech-list">
                {category.items.map((item) => (
                  <li className="tech-item" key={item}>
                    <span className="tech-dot"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Currently Exploring Section */}
      <section className="section exploring-section">
        <span className="section-label">03 / Focus Areas</span>
        <h3 className="section-title">Currently Exploring</h3>
        <div className="exploring-grid">
          {exploringAreas.map((area) => (
            <div className="exploring-card" key={area.title}>
              <h4 className="exploring-card-title">{area.title}</h4>
              <p className="exploring-card-desc">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* My Journey Section */}
      <section className="section journey-section">
        <span className="section-label">04 / Growth Timeline</span>
        <h3 className="section-title">My Journey</h3>
        <div className="journey-timeline">
          {journeySteps.map((step, idx) => (
            <div className="journey-step" key={step.phase}>
              <div className="journey-index">0{idx + 1}</div>
              <div className="journey-content">
                <h4 className="journey-phase">{step.phase}</h4>
                <p className="journey-text">{step.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <span className="section-label">05 / Get In Touch</span>
        <h3 className="section-title">Let's Connect</h3>
        <p className="contact-subtitle">
          If you want to talk about projects, technology, or opportunities, feel free to reach out.
        </p>
        <div className="contact-links-grid">
          <div className="contact-card">
            <span className="contact-card-label">Email</span>
            <a href="mailto:abhinayreddy1105@gmail.com" className="contact-card-value">abhinayreddy1105@gmail.com</a>
          </div>
          <div className="contact-card">
            <span className="contact-card-label">GitHub</span>
            <a href="https://github.com/ABHINAY-ReDdY1107" target="_blank" rel="noreferrer" className="contact-card-value">ABHINAY-ReDdY1107</a>
          </div>
          <div className="contact-card">
            <span className="contact-card-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/abhinay-reddy" target="_blank" rel="noreferrer" className="contact-card-value">abhinay-reddy</a>
          </div>
        </div>
      </section>
    </div>
  );
}
