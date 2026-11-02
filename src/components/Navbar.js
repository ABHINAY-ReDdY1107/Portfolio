import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'nav-active' : ''}`}>
      <Link to="/" className="brand" onClick={closeMenu}>
        AR
      </Link>

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
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#capabilities" onClick={closeMenu}>
          Focus
        </a>
        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>
        <a href="#journey" onClick={closeMenu}>
          Journey
        </a>
        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>
          Get in Touch
        </a>
      </nav>
    </header>
  );
}
