import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-name">Abhinay</div>
        <div className="footer-tagline">Learning, building, and figuring things out.</div>
        <div className="footer-links">
          <a href="https://github.com/ABHINAY-ReDdY1107" target="_blank" rel="noreferrer" aria-label="GitHub">
            <img src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub" className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/abhinay-reddy" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src="https://cdn.simpleicons.org/linkedin/ffffff" alt="LinkedIn" className="footer-icon" />
          </a>
          <a href="mailto:abhinayreddy1105@gmail.com" aria-label="Email">
            <img src="https://cdn.simpleicons.org/gmail/ffffff" alt="Email" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
