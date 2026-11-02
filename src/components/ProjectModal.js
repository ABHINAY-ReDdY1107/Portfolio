import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          ✕
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
          <span
            style={{
              color: 'var(--gold-light)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid rgba(196, 169, 109, 0.3)',
              background: 'rgba(196, 169, 109, 0.1)'
            }}
          >
            {project.category}
          </span>
          <span style={{ color: 'rgba(253, 251, 248, 0.5)', fontSize: '0.8rem' }}>•</span>
          <span style={{ color: 'rgba(253, 251, 248, 0.75)', fontSize: '0.8rem', fontWeight: 500 }}>
            {project.stats?.status || 'Active Project'}
          </span>
        </div>

        <h2
          id="modal-project-title"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: 'var(--white)',
            margin: '0 0 0.4rem',
            lineHeight: 1.15
          }}
        >
          {project.title}
        </h2>

        <p
          style={{
            color: 'var(--gold-light)',
            fontSize: '0.88rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 600,
            margin: '0 0 1.5rem'
          }}
        >
          {project.subtitle}
        </p>

        <div style={{ margin: '0 0 1.5rem', borderTop: '1px solid rgba(196, 169, 109, 0.2)', paddingTop: '1.2rem' }}>
          <h4 style={{ color: 'var(--gold-light)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 0.5rem' }}>
            Overview
          </h4>
          <p style={{ color: 'rgba(253, 251, 248, 0.85)', fontSize: '1rem', lineHeight: 1.7, margin: '0 0 1rem', fontWeight: 300 }}>
            {project.description}
          </p>

          <h4 style={{ color: 'var(--gold-light)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 0.5rem' }}>
            Architectural Details
          </h4>
          <p style={{ color: 'rgba(253, 251, 248, 0.75)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
            {project.details}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div style={{ margin: '0 0 1.8rem' }}>
          <h4 style={{ color: 'var(--gold-light)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 0.6rem' }}>
            Technologies Used
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {project.tags.map((t) => (
              <span
                key={t}
                style={{
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid rgba(196, 169, 109, 0.25)',
                  background: 'rgba(253, 251, 248, 0.05)',
                  color: 'var(--gold-light)',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.4rem', borderTop: '1px solid rgba(196, 169, 109, 0.2)' }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
              style={{ padding: '0.75rem 1.4rem', fontSize: '0.78rem' }}
            >
              Launch Live Demo ↗
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="button button-ghost"
              style={{ padding: '0.75rem 1.4rem', fontSize: '0.78rem' }}
            >
              View GitHub Repo ↗
            </a>
          )}

          <button
            type="button"
            className="button button-ghost"
            onClick={onClose}
            style={{ marginLeft: 'auto', padding: '0.75rem 1.2rem', fontSize: '0.74rem', opacity: 0.8 }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
