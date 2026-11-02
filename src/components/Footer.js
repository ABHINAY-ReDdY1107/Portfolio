import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Link to="/" className="brand">
        Abhinay Reddy
      </Link>
      <p>
        Computer Science Engineering Student · Learning, building, and exploring what&apos;s next.
      </p>

      <div className="footer-social">
        <a
          href="https://github.com/ABHINAY-ReDdY1107"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/abhinay-reddy"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="4" cy="4" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </a>

        <a
          href="mailto:abhinayreddy1105@gmail.com"
          aria-label="Send Email"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="22,6 12,13 2,6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} Abhinay Reddy. All rights reserved.</span>
        <span>Crafted with Gold &amp; Obsidian aesthetics</span>
      </div>
    </footer>
  );
}
