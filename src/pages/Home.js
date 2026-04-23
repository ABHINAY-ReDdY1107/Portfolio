import React from 'react';
import './Home.css';

const skills = ['N8N Automation', 'Python', 'Framer', 'React', 'Web Development'];

export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-tag">Portfolio · 2025</div>
        <h1 className="hero-name">Boreddy<br /><span>Abhinay Reddy</span></h1>
        <p className="hero-sub">Automation Engineer · Web Developer · Builder</p>
        <div className="hero-line" />
      </section>

      <section className="section about-section">
        <div className="section-label">About Me</div>
        <div className="about-grid">
          <div className="about-photo-box">
            <div className="photo-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
          <div className="about-text">
            <h2>Hi, I'm Abhinay</h2>
            <p>I'm a student at Mahindra University passionate about building smart systems and elegant digital experiences.</p>
            <p style={{ marginTop: '16px' }}>From automating payment workflows to crafting clean websites, I enjoy working at the intersection of technology and creativity.</p>
            <div className="research-box">
              <div className="research-title">Research Interests</div>
              <p>Workflow Automation, No-Code/Low-Code Tools, Web Technologies, AI-powered applications</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="section-label">Skills</div>
        <div className="skills-list">
          {skills.map((skill, i) => (
            <span key={i} className="skill-pill">{skill}</span>
          ))}
        </div>
      </section>

      <section className="section contact-section">
        <div className="section-label">Personal Details</div>
        <div className="contact-grid">
          <div className="contact-item"><div className="contact-label">Phone</div><div className="contact-value">+91 8106950950</div></div>
          <div className="contact-item"><div className="contact-label">Personal Email</div><div className="contact-value">abhinayreddy1105@gmail.com</div></div>
          <div className="contact-item"><div className="contact-label">College Email</div><div className="contact-value">se23umcs009@mahindrauniversity.edu.in</div></div>
          <div className="contact-item"><div className="contact-label">GitHub</div><div className="contact-value"><a href="https://github.com/ABHINAY-ReDdY1107" target="_blank" rel="noreferrer">github.com/ABHINAY-ReDdY1107</a></div></div>
        </div>
      </section>
    </div>
  );
}