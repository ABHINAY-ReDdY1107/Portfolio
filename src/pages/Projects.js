import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from './Home';
import ProjectModal from '../components/ProjectModal';

const categories = ['All', 'Web', 'AI', 'Automation', 'Software'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="portfolio-wrap">
      {/* Project Details Modal */}
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />

      {/* Catalog Hero */}
      <section className="catalog-hero">
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p className="eyebrow">Comprehensive Directory</p>
          <h1 className="section-title" style={{ color: 'var(--white)', fontSize: 'clamp(2.75rem, 6vw, 4.8rem)' }}>
            Selected Projects
          </h1>
          <p className="section-copy" style={{ color: 'rgba(253, 251, 248, 0.7)', margin: '1rem auto 0' }}>
            A curated portfolio of software products, intelligent automations, and web applications
            engineered for utility and performance. Click any card to inspect full specifications.
          </p>

          {/* Controls: Search + Category Filters */}
          <div className="catalog-controls">
            <div className="catalog-search-wrapper">
              <svg className="catalog-search-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="catalog-search-input"
                placeholder="Search projects by name, technology, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search projects"
              />
            </div>

            <div className="catalog-filters" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`filter-pill ${activeCategory === cat ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section className="section" style={{ background: 'var(--light)', minHeight: '60vh' }}>
        <div style={{ width: 'min(1180px, 100%)', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--mid)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
            </span>

            <Link to="/" style={{ color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              &larr; Return to Home
            </Link>
          </div>

          {filteredProjects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 1rem', background: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--line-soft)' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--dark)', margin: 0 }}>
                No projects matched your search.
              </p>
              <p style={{ color: 'var(--mid)', marginTop: '0.5rem' }}>
                Try adjusting your search query or switching categories.
              </p>
              <button
                type="button"
                className="catalog-btn catalog-btn-primary"
                style={{ marginTop: '1.5rem' }}
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="catalog-grid">
              {filteredProjects.map((project) => (
                <article
                  className="catalog-card reveal"
                  key={project.id}
                  onClick={() => setModalProject(project)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="catalog-card-header">
                    <span className="catalog-card-category">{project.category}</span>
                    <div className="catalog-card-icon">✦</div>
                  </div>

                  <h3 className="catalog-card-title">{project.title}</h3>
                  <span style={{ color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.8rem', display: 'block' }}>
                    {project.subtitle}
                  </span>

                  <p className="catalog-card-desc">{project.description}</p>

                  <div className="catalog-card-tags">
                    {project.tags.map((tag) => (
                      <span className="catalog-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="catalog-card-actions" onClick={(e) => e.stopPropagation()}>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="catalog-btn catalog-btn-primary"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="catalog-btn catalog-btn-outline"
                      >
                        GitHub Repo ↗
                      </a>
                    )}

                    <button
                      type="button"
                      className="catalog-btn catalog-btn-outline"
                      onClick={() => setModalProject(project)}
                      style={{ color: 'var(--gold)', borderColor: 'rgba(139, 115, 64, 0.3)' }}
                    >
                      Details &rarr;
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
