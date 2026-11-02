import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/abhinay-profile.jpeg';

export const projectsData = [
  {
    id: 'hira-fragrances',
    title: 'Hira Fragrances',
    subtitle: 'Luxury E-Commerce Interface',
    description:
      'Designed and developed a premium e-commerce interface for a luxury perfume brand, focusing on minimal aesthetics, smooth user interactions, and clean navigation.',
    details:
      'Features a catalog search, product detail grids, responsive layouts for mobile and desktop, and a streamlined check-out interface built for high conversion.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Vercel'],
    category: 'Web',
    github: 'https://github.com/ABHINAY-ReDdY1107',
    live: 'https://hirafragrances.com/',
    cardClass: 'card-one',
    stats: { role: 'Lead Developer', stack: 'React · Vercel', status: 'Live In Production' }
  },
  {
    id: 'sosync',
    title: 'SOSync / Emergency System',
    subtitle: 'Real-Time Alert & Geolocation',
    description:
      'A critical emergency alert and coordinate broadcast system designed to push localized SOS notifications in urgent situations.',
    details:
      'Configures emergency contacts and utilizes geolocation APIs to transmit coordinates immediately, prioritizing fast execution and ultra-low latency.',
    tags: ['TypeScript', 'Node.js', 'APIs', 'Web Development'],
    category: 'Software',
    github: 'https://github.com/ABHINAY-ReDdY1107/SOSYNC',
    live: '',
    cardClass: 'card-two',
    stats: { role: 'System Architect', stack: 'TypeScript · Node.js', status: 'Open Source' }
  },
  {
    id: 'genz-translator',
    title: 'GenZ Translator',
    subtitle: 'NLP Slang to Standard English',
    description:
      'An NLP-focused experimentation project exploring translation of contemporary youth slang into standard formal English phrases.',
    details:
      'Leverages text tokenization, dictionary mappings, and NLP fundamentals to translate informal youth slang into grammatically clear standard English.',
    tags: ['Python', 'NLP', 'Language Processing', 'Jupyter'],
    category: 'AI',
    github: 'https://github.com/ABHINAY-ReDdY1107/genz-to-standard-english-translator',
    live: '',
    cardClass: 'card-three',
    stats: { role: 'AI Researcher', stack: 'Python · NLP', status: 'Experimental' }
  },
  {
    id: 'quick-bots',
    title: 'Quick Commerce Bot',
    subtitle: 'Automated Pricing & Deal Scraper',
    description:
      'A scraping assistant that aggregates and compares real-time pricing data across quick-commerce delivery apps like Blinkit, Zepto, and Instamart.',
    details:
      'Automates product searches and parses web elements to yield rapid cost comparisons, finding the optimal deals across instant delivery networks.',
    tags: ['Python', 'Web Scraping', 'Automation', 'Data Processing'],
    category: 'Automation',
    github: 'https://github.com/ABHINAY-ReDdY1107/quick-bots',
    live: '',
    cardClass: 'card-four',
    stats: { role: 'Automation Eng', stack: 'Python · Scraping', status: 'Working Tool' }
  },
  {
    id: 'payment-automation',
    title: 'Payment Automation',
    subtitle: 'Receipt & Ledger Automation',
    description:
      'An automated workflow pipeline designed to streamline receipt processing, invoice matching, and payment notifications for small operations.',
    details:
      'Configures workflow triggers to match invoice dates and generate automated ledger entries, cutting manual verification time down significantly.',
    tags: ['N8N', 'Python', 'Automation', 'REST APIs'],
    category: 'Automation',
    github: 'https://github.com/ABHINAY-ReDdY1107',
    live: '',
    cardClass: 'card-five',
    stats: { role: 'Workflow Eng', stack: 'N8N · Python', status: 'Automated' }
  },
  {
    id: 'lost-found',
    title: 'Campus Lost & Found',
    subtitle: 'Community Reporting Platform',
    description:
      'A lightweight community platform concept designed for students to report lost items and safely claim found belongings across campus.',
    details:
      'Provides listing cards, search filters, and an email reference system for students to directly contact the finders of lost articles.',
    tags: ['React', 'Node.js', 'Databases', 'Web Development'],
    category: 'Web',
    github: 'https://github.com/ABHINAY-ReDdY1107',
    live: '',
    cardClass: 'card-six',
    stats: { role: 'Full Stack', stack: 'React · Node.js', status: 'Community Platform' }
  },
  {
    id: 'vave-salon',
    title: 'Vave Salon',
    subtitle: 'Styling & Booking Showcase',
    description:
      'A modern, clean booking and service showcase interface customized for a styling salon business.',
    details:
      'Showcases interactive service tables, stylist bios, and a responsive reservation enquiry form with smooth interactions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'Web',
    github: 'https://github.com/ABHINAY-ReDdY1107',
    live: '',
    cardClass: 'card-seven',
    stats: { role: 'UI Developer', stack: 'JavaScript · CSS3', status: 'Showcase' }
  },
  {
    id: 'bill-generator',
    title: 'Bill & Invoice Generator',
    subtitle: 'Fast Utility Software',
    description:
      'A lightweight software utility built to fast-track small business billing, tax calculation, and receipt generation.',
    details:
      'Accepts tabular item input, computes tax percentages dynamically, and yields clean, printable PDF receipts instantly.',
    tags: ['Python', 'HTML', 'CSS', 'JavaScript'],
    category: 'Software',
    github: 'https://github.com/ABHINAY-ReDdY1107',
    live: '',
    cardClass: 'card-eight',
    stats: { role: 'Software Builder', stack: 'Python · HTML/JS', status: 'Utility App' }
  }
];

const capabilities = [
  {
    number: '01',
    title: 'Web Engineering',
    desc: 'Crafting responsive, high-performance web applications with React, modern component architectures, and fluid animations.',
    skills: ['React', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'REST APIs', 'Vite / Vercel'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'AI & Generative Workflows',
    desc: 'Building intelligent workflows powered by LLMs, custom inference scripts, prompt engineering, and autonomous agents.',
    skills: ['Generative AI', 'LLM Prompting', 'AI Agent Workflows', 'Python Inference', 'NLP Tools'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Automation & Scraping',
    desc: 'Automating repetitive digital tasks, data aggregation across quick-commerce apps, and multi-step pipeline orchestration.',
    skills: ['Web Scraping', 'Python Automations', 'N8N Pipelines', 'Data Extraction', 'Twilio / Stripe'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Core Software & Theory',
    desc: 'Solid grasp of data structures, algorithms, object-oriented concepts, and clean system design principles.',
    skills: ['Python', 'C++', 'Data Structures', 'Algorithms', 'SQL & Databases'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  }
];

const tools = [
  { name: 'Python', role: 'Automation & AI', icon: '🐍' },
  { name: 'C++', role: 'DSA & Systems', icon: '⚡' },
  { name: 'JavaScript', role: 'Full Stack Web', icon: '🌐' },
  { name: 'React', role: 'Frontend UI', icon: '⚛️' },
  { name: 'Node.js', role: 'Backend Services', icon: '🟢' },
  { name: 'Git & GitHub', role: 'Version Control', icon: '🐙' },
  { name: 'SQL & MongoDB', role: 'Data Stores', icon: '🗄️' },
  { name: 'Vercel & Render', role: 'Cloud Deployment', icon: '▲' }
];

const journeySteps = [
  {
    number: '01',
    title: 'Mahindra University CS Student',
    role: 'Academic Foundation',
    desc: 'Immersing in core Computer Science Engineering principles, algorithms, data structures, and computer organization.'
  },
  {
    number: '02',
    title: 'Languages, Stacks & Systems',
    role: 'Technical Growth',
    desc: 'Mastering Python, C++, JavaScript, React, and server-side development through continuous hands-on experimentation.'
  },
  {
    number: '03',
    title: 'Building Real-World Projects',
    role: 'Applied Execution',
    desc: 'Developing consumer web platforms like Hira Fragrances, emergency broadcast systems (SOSync), and utility tools.'
  },
  {
    number: '04',
    title: 'Exploring Generative AI & Agents',
    role: 'Frontier Exploration',
    desc: 'Building intelligent workflows, NLP translation tools, prompt frameworks, and autonomous multi-tool agent processes.'
  },
  {
    number: '05',
    title: 'Expanding Horizons & Impact',
    role: 'Future Trajectory',
    desc: 'Focused on solving impactful problems, collaborating on high-leverage software, and scaling production applications.'
  }
];

const faqs = [
  {
    q: 'What kind of projects do you enjoy building most?',
    a: 'I love projects that solve genuine everyday friction — whether that is engineering sleek e-commerce platforms like Hira Fragrances, rapid emergency notification coordinate networks (SOSync), or automated scraping tools that compare live delivery prices across apps.'
  },
  {
    q: 'What are your primary areas of technical specialization?',
    a: 'My core focus spans Full-Stack Web Development (React, Node.js, JavaScript, modern APIs), Workflow Automation (Python, Scraping, N8N), and Generative AI (LLMs, custom prompting, and autonomous agents).'
  },
  {
    q: 'Are you available for internships or software engineering roles?',
    a: 'Yes, I am actively interested in software engineering internships, research fellowships, and collaborative builder opportunities where I can deliver high value and learn rapidly from experienced teams.'
  },
  {
    q: 'Where can I find your code and live deployments?',
    a: 'All my public repositories are on GitHub at github.com/ABHINAY-ReDdY1107, and featured live web projects like Hira Fragrances can be visited directly at hirafragrances.com.'
  }
];

export default function Home() {
  const [isWalletOpen, setIsWalletOpen] = useState(true);
  const [activeProjectId, setActiveProjectId] = useState(projectsData[0].id);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Collaboration', message: '' });

  const activeProject = projectsData.find((p) => p.id === activeProjectId) || projectsData[0];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Collaboration', message: '' });
    }, 5000);
  };

  return (
    <div className="portfolio-wrap">
      {/* ═══════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════ */}
      <section id="hero" className="hero section-dark">
        <div className="hero-grain" />
        <div className="orbital-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="hero-shell">
          <div className="badge-gold">
            <span className="badge-gold-dot" />
            Computer Science Engineering · Mahindra University
          </div>

          <p className="eyebrow">Portfolio &amp; Selected Works</p>
          <h1 className="hero-title">
            <span className="title-line">Abhinay Reddy</span>
          </h1>

          <p className="hero-copy">
            Computer Science Engineering student focused on building practical web experiences,
            workflow automations, and exploring the future of artificial intelligence.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View Projects
            </a>
            <a
              href="https://github.com/ABHINAY-ReDdY1107"
              target="_blank"
              rel="noreferrer"
              className="button button-ghost"
            >
              GitHub Repository
            </a>
            <a href="#contact" className="button button-ghost">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Floating Studio Card */}
        <div className="hero-studio-card" aria-label="Quick Highlights">
          <div className="studio-card-top">
            <span>Status</span>
            <strong>Active Builder</strong>
          </div>
          <div className="studio-rings" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <ul>
            <li>Mahindra University · CSE Scholar</li>
            <li>Full-Stack Web &amp; Modern APIs</li>
            <li>Generative AI &amp; Intelligent Workflows</li>
            <li>Automation &amp; Data Scraping</li>
          </ul>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span />
          Scroll to explore
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MARQUEE TICKER
          ═══════════════════════════════════════════════════ */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Full-Stack Development</span>
          <i />
          <span>Generative AI &amp; LLMs</span>
          <i />
          <span>Workflow Automation</span>
          <i />
          <span>React &amp; Modern Web</span>
          <i />
          <span>Python &amp; Machine Learning</span>
          <i />
          <span>REST APIs &amp; Cloud</span>
          <i />
          <span>Data Structures &amp; Algorithms</span>
          <i />
          <span>Emergency Broadcast Systems</span>
          <i />
          <span>Luxury E-Commerce</span>
          <i />
          <span>Full-Stack Development</span>
          <i />
          <span>Generative AI &amp; LLMs</span>
          <i />
          <span>Workflow Automation</span>
          <i />
          <span>React &amp; Modern Web</span>
          <i />
          <span>Python &amp; Machine Learning</span>
          <i />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          01. CAPABILITIES / CORE FOCUS
          ═══════════════════════════════════════════════════ */}
      <section id="capabilities" className="section">
        <div className="section-heading reveal">
          <p className="eyebrow">01 / Capabilities</p>
          <h2 className="section-title">Core Focus &amp; Engineering</h2>
          <p className="section-copy">
            A fusion of foundational computer science principles, modern web architectures, and frontier AI workflows.
          </p>
        </div>

        <div className="service-grid">
          {capabilities.map((item) => (
            <div className="service-card reveal" key={item.number}>
              <div className="service-icon">{item.icon}</div>
              <span>{item.number} / Focus</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="skill-cloud" style={{ marginTop: '1.2rem' }}>
                {item.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATS BAR
          ═══════════════════════════════════════════════════ */}
      <section className="stats">
        <div className="stats-grid reveal">
          <div className="stat-item">
            <span className="stat-number">08</span>
            <span className="stat-suffix">+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-divider" />

          <div className="stat-item">
            <span className="stat-number">05</span>
            <span className="stat-suffix">+</span>
            <span className="stat-label">Tech Stacks Explored</span>
          </div>
          <div className="stat-divider" />

          <div className="stat-item">
            <span className="stat-number">100</span>
            <span className="stat-suffix">%</span>
            <span className="stat-label">Practical Problem Focus</span>
          </div>
          <div className="stat-divider" />

          <div className="stat-item">
            <span className="stat-number">CS</span>
            <span className="stat-suffix">E</span>
            <span className="stat-label">Engineering Scholar</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          02. PROJECTS — 3D WALLET SHOWCASE
          ═══════════════════════════════════════════════════ */}
      <section id="projects" className="section section-dark projects">
        <div className="section-heading reveal">
          <p className="eyebrow">02 / Selected Works</p>
          <h2 className="section-title">Portfolio Wallet</h2>
          <p className="section-copy">
            Click the wallet to unpack featured projects. Choose any card to view detailed architectural specifications.
          </p>
        </div>

        <div className={`project-showcase ${isWalletOpen ? 'is-open' : ''}`}>
          <div className="wallet-copy reveal">
            <h3>The Builder&apos;s Pocket</h3>
            <p>
              Interactive showcase featuring production web apps, emergency broadcast pipelines,
              and automated scrapers. Click the leather wallet to fan out cards.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="button button-primary"
                onClick={() => setIsWalletOpen((prev) => !prev)}
              >
                {isWalletOpen ? 'Close Wallet' : 'Open Wallet'}
              </button>
              <Link to="/projects" className="button button-ghost">
                Full Catalog &rarr;
              </Link>
            </div>
          </div>

          <div className="wallet-desk">
            <div className="wallet-scene">
              <div className="wallet-shadow" />
              <button
                type="button"
                className="wallet"
                onClick={() => setIsWalletOpen((prev) => !prev)}
                aria-label="Toggle project cards fan out"
              >
                <div className="wallet-label">Abhinay&apos;s Portfolio</div>
                <div className="wallet-slot" />
                <div className="wallet-flap" />
                <div className="wallet-stitch top" />
                <div className="wallet-stitch bottom" />
                <div className="wallet-metal" />
                <div className="wallet-hint">
                  {isWalletOpen ? 'Tap to Fold' : 'Tap to Unpack'}
                </div>
              </button>
            </div>

            {/* Fan-Out Project Cards */}
            <div className="project-card-grid">
              {projectsData.slice(0, 8).map((proj) => {
                const isActive = proj.id === activeProjectId;
                return (
                  <div
                    key={proj.id}
                    className={`wallet-card ${proj.cardClass} ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveProjectId(proj.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') setActiveProjectId(proj.id);
                    }}
                  >
                    <div
                      style={{
                        height: '140px',
                        background:
                          'linear-gradient(135deg, rgba(196, 169, 109, 0.25) 0%, rgba(26, 24, 20, 0.85) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '1rem',
                        borderBottom: '1px solid rgba(196, 169, 109, 0.2)'
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--gold-light)',
                          fontSize: '0.66rem',
                          fontWeight: 700,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {proj.category}
                      </span>
                      <strong
                        style={{
                          color: '#fff',
                          fontFamily: 'var(--serif)',
                          fontSize: '1.25rem',
                          lineHeight: 1.1
                        }}
                      >
                        {proj.title}
                      </strong>
                    </div>

                    <div className="project-card-body">
                      <span>{proj.subtitle}</span>
                      <p>{proj.description.slice(0, 95)}...</p>
                      <button
                        type="button"
                        className="project-card-link"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveProjectId(proj.id);
                        }}
                      >
                        Inspect &rarr;
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Glassmorphic Project Detail Panel */}
            {activeProject && (
              <div className="project-detail-panel reveal">
                <div className="case-media">
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        border: '2px solid var(--gold-light)',
                        display: 'grid',
                        placeItems: 'center',
                        color: 'var(--gold-light)',
                        fontSize: '1.8rem',
                        background: 'rgba(196, 169, 109, 0.12)'
                      }}
                    >
                      ★
                    </div>
                    <div>
                      <h4
                        style={{
                          fontFamily: 'var(--serif)',
                          fontSize: '2rem',
                          color: '#fff',
                          margin: 0
                        }}
                      >
                        {activeProject.title}
                      </h4>
                      <p
                        style={{
                          color: 'var(--gold-light)',
                          fontSize: '0.75rem',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          margin: '0.4rem 0 0'
                        }}
                      >
                        {activeProject.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="case-content">
                  <span className="case-number">{activeProject.category} Project Details</span>
                  <h3>{activeProject.title}</h3>
                  <p>{activeProject.description}</p>
                  <p style={{ marginTop: '0.75rem' }}>{activeProject.details}</p>

                  <dl>
                    <div>
                      <dt>Role / Scope</dt>
                      <dd>{activeProject.stats?.role || 'Core Contributor'}</dd>
                    </div>
                    <div>
                      <dt>Tech Stack</dt>
                      <dd>{activeProject.tags.join(' · ')}</dd>
                    </div>
                    <div>
                      <dt>Status</dt>
                      <dd>{activeProject.stats?.status || 'Active'}</dd>
                    </div>
                    <div>
                      <dt>Links</dt>
                      <dd style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                        {activeProject.live && (
                          <a
                            href={activeProject.live}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: 'var(--gold-light)', fontWeight: 600, textDecoration: 'underline' }}
                          >
                            Live Demo ↗
                          </a>
                        )}
                        {activeProject.github && (
                          <a
                            href={activeProject.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: 'var(--gold-light)', fontWeight: 600, textDecoration: 'underline' }}
                          >
                            GitHub ↗
                          </a>
                        )}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          03. ABOUT SECTION
          ═══════════════════════════════════════════════════ */}
      <section id="about" className="section about">
        <div className="section-heading reveal">
          <p className="eyebrow">03 / Profile &amp; Background</p>
          <h2 className="section-title">About Abhinay</h2>
        </div>

        <div className="about-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 0.8fr) 1.2fr', gap: '3.5rem', alignItems: 'center' }}>
          <div className="about-photo-wrapper reveal">
            <div className="about-photo-frame">
              <img src={profilePhoto} alt="Abhinay Reddy" className="about-photo" />
            </div>
          </div>

          <div className="about-text-wrapper reveal">
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', lineHeight: 1.1, margin: '0 0 1.2rem', color: 'var(--dark)' }}>
              Computer Science Student &amp; Passionate Builder
            </h3>
            <p style={{ color: 'var(--mid)', fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.75, margin: '0 0 1rem' }}>
              I am a Computer Science Engineering student who loves taking ideas and turning them into
              working, tangible products. I actively study software architecture, experiment with modern web frameworks,
              and develop tools that streamline everyday digital workflows.
            </p>
            <p style={{ color: 'var(--mid)', fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.75, margin: '0 0 1.5rem' }}>
              From engineering luxury e-commerce interfaces to architecting emergency coordinate systems
              and training natural language slang translators, I prioritize speed, practical utility, and clean craftsmanship.
            </p>

            <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--dark)', margin: '1.5rem 0 0.8rem' }}>
              Core Technologies
            </h4>
            <div className="skill-cloud">
              {['Python', 'C++', 'JavaScript', 'React', 'Node.js', 'REST APIs', 'Generative AI', 'LLMs', 'Prompt Engineering', 'MongoDB', 'SQL', 'Git', 'Vercel', 'N8N'].map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Developer Tool Gallery */}
        <div className="tool-gallery reveal">
          {tools.map((tool) => (
            <div className="tool-card" key={tool.name}>
              <div className="tool-icon">
                <span style={{ fontSize: '1.5rem' }}>{tool.icon}</span>
              </div>
              <strong>{tool.name}</strong>
              <span>{tool.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          04. GROWTH TIMELINE
          ═══════════════════════════════════════════════════ */}
      <section id="journey" className="section process">
        <div className="section-heading reveal">
          <p className="eyebrow">04 / Growth Timeline</p>
          <h2 className="section-title">My Journey</h2>
          <p className="section-copy">
            A continuous progression of technical learning, creative exploration, and aggressive project execution.
          </p>
        </div>

        <div className="timeline reveal">
          <div className="timeline-progress" style={{ height: '100%' }} />
          {journeySteps.map((step) => (
            <div className="timeline-item" key={step.number}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '1.7rem', color: 'var(--gold)', fontWeight: 600 }}>
                {step.number}
              </span>
              <div>
                <span style={{ color: 'var(--gold)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>
                  {step.role}
                </span>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', margin: '0.3rem 0 0.5rem', color: 'var(--dark)' }}>
                  {step.title}
                </h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          05. FAQ SECTION
          ═══════════════════════════════════════════════════ */}
      <section id="faq" className="section faq">
        <div className="section-heading centered reveal">
          <p className="eyebrow">05 / Inquiries</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-copy">
            Quick answers about my technical expertise, project interests, and collaborative availability.
          </p>
        </div>

        <div className="faq-list reveal">
          {faqs.map((faq, idx) => (
            <details className="faq-item" key={idx}>
              <summary>
                <h3>{faq.q}</h3>
                <div className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          06. CONTACT SECTION
          ═══════════════════════════════════════════════════ */}
      <section id="contact" className="section section-dark contact">
        <div className="section-heading reveal">
          <p className="eyebrow">06 / Connect</p>
          <h2 className="section-title">Let&apos;s Build Together</h2>
          <p className="section-copy">
            Have an exciting problem to solve, an internship opportunity, or want to discuss emerging AI workflows? Reach out directly.
          </p>
        </div>

        <div className="contact-layout reveal">
          <div className="contact-panel">
            <span>Direct Email</span>
            <a href="mailto:abhinayreddy1105@gmail.com">abhinayreddy1105@gmail.com</a>

            <span style={{ marginTop: '1rem' }}>GitHub</span>
            <a href="https://github.com/ABHINAY-ReDdY1107" target="_blank" rel="noreferrer">
              github.com/ABHINAY-ReDdY1107
            </a>

            <span style={{ marginTop: '1rem' }}>LinkedIn</span>
            <a href="https://www.linkedin.com/in/abhinay-reddy" target="_blank" rel="noreferrer">
              linkedin.com/in/abhinay-reddy
            </a>

            <span style={{ marginTop: '1rem' }}>Location &amp; University</span>
            <strong>Hyderabad, India · Mahindra University</strong>
          </div>

          <form className="contact-form" onSubmit={handleFormSubmit}>
            <label>
              <span>Your Name</span>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>

            <label>
              <span>Your Email</span>
              <input
                type="email"
                required
                placeholder="e.g. john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>

            <label>
              <span>Topic / Scope</span>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              >
                <option value="Collaboration">Collaboration / Project</option>
                <option value="Internship">Internship Opportunity</option>
                <option value="Freelance">Freelance Inquiry</option>
                <option value="General">General Networking</option>
              </select>
            </label>

            <label>
              <span>Your Message</span>
              <textarea
                required
                placeholder="Tell me about your idea or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </label>

            <button type="submit" className="button button-primary">
              Send Message
            </button>

            {formSubmitted && (
              <p className="form-note">
                ✓ Thank you! Your message has been received. I will get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
