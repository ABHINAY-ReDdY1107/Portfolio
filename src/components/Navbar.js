import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNav = (sectionId) => {
    closeMenu();

    if (sectionId === 'top') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'nav-active' : ''}`}>
      <button
        type="button"
        className="brand"
        onClick={() => handleNav('top')}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
        aria-label="Return to top"
      >
        AR
      </button>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span />
        <span />
      </button>

      <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
        <button
          type="button"
          className="nav-link-btn"
          onClick={() => handleNav('top')}
        >
          Home
        </button>
        <button
          type="button"
          className="nav-link-btn"
          onClick={() => handleNav('about')}
        >
          About
        </button>
        <button
          type="button"
          className="nav-link-btn"
          onClick={() => handleNav('capabilities')}
        >
          Focus
        </button>
        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>
        <button
          type="button"
          className="nav-link-btn"
          onClick={() => handleNav('journey')}
        >
          Journey
        </button>
        <button
          type="button"
          className="nav-link-btn"
          onClick={() => handleNav('faq')}
        >
          FAQ
        </button>
        <button
          type="button"
          className="nav-cta"
          onClick={() => handleNav('contact')}
          style={{ border: 'none', cursor: 'pointer' }}
        >
          Get in Touch
        </button>
      </nav>
    </header>
  );
}
