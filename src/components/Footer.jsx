import React from 'react';
import './Footer.css';

import instagramLogo from './icons/instagram-logo.svg';
import githubLogo from './icons/github-logo.svg';
import linkedinLogo from './icons/linkedln-logo.svg';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        {/*<a href="#" aria-label="Instagram" className="icon-link">
          <img src={instagramLogo} alt="Instagram" />
        </a>*/}
        <a href="https://github.com/poornima20" aria-label="GitHub" className="icon-link">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a href="www.linkedin.com/in/poornima-suresh-37a927214" aria-label="LinkedIn" className="icon-link">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
      <p className="footer-text">
        © 2025 Fullmoon, All rights reserved.
      </p>
    </footer>
  );
}
