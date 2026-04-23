import React from 'react';
import profilePhoto from '../assets/abhinay-profile.jpeg';
import './Home.css';

const skills = ['N8N Automation', 'Python', 'Framer', 'React', 'Web Development'];
const expertise = [
  {
    title: 'Workflow Automation',
    description: 'Designing automation flows that reduce manual work and improve accuracy across real business tasks.',
  },
  {
    title: 'Frontend Development',
    description: 'Building clean, responsive interfaces in React with a focus on usability, layout, and polished presentation.',
  },
  {
    title: 'Python and NLP',
    description: 'Exploring AI-powered applications, text processing, and practical Python solutions for data and language tasks.',
  },
  {
    title: 'Rapid Project Execution',
    description: 'Turning ideas into working prototypes quickly, from product concepts to deployable portfolio-ready builds.',
  },
];

export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-tag">Portfolio | 2025</div>
        <h1 className="hero-name">
          Boreddy
          <br />
          <span>Abhinay Reddy</span>
        </h1>
        <p className="hero-sub">Automation Engineer | Web Developer | Builder</p>
        <div className="hero-line" />
      </section>

      <section className="section about-section">
        <div className="section-label">About Me</div>
        <div className="about-grid">
          <div className="about-photo-box">
            <div className="about-photo-frame">
              <img className="about-photo" src={profilePhoto} alt="Abhinay Reddy" />
            </div>
          </div>
          <div className="about-text">
            <h2>Hi, I'm Abhinay</h2>
            <p>I am a student at Mahindra University who enjoys building smart systems, practical automations, and modern digital experiences.</p>
            <p style={{ marginTop: '16px' }}>
              My work sits at the intersection of creativity and problem-solving, whether I am creating a polished website, experimenting with NLP ideas, or building workflow tools that save time.
            </p>
            <p style={{ marginTop: '16px' }}>
              I like projects that are useful in the real world and visually well presented, and I am always looking to grow through hands-on development across web, automation, and AI-focused projects.
            </p>
            <div className="research-box">
              <div className="research-title">Research Interests</div>
              <p>Workflow Automation, No-Code/Low-Code Tools, Web Technologies, AI-powered applications</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="section-label">Area of Expertise</div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section">
        <div className="section-label">Skills</div>
        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section contact-section">
        <div className="section-label">Personal Details</div>
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-label">Phone</div>
            <div className="contact-value">+91 8106950950</div>
          </div>
          <div className="contact-item">
            <div className="contact-label">Personal Email</div>
            <div className="contact-value">abhinayreddy1105@gmail.com</div>
          </div>
          <div className="contact-item">
            <div className="contact-label">College Email</div>
            <div className="contact-value">se23umcs009@mahindrauniversity.edu.in</div>
          </div>
          <div className="contact-item">
            <div className="contact-label">GitHub</div>
            <div className="contact-value">
              <a href="https://github.com/ABHINAY-ReDdY1107" target="_blank" rel="noreferrer">
                github.com/ABHINAY-ReDdY1107
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
