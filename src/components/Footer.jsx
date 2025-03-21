import React, { useState } from 'react';
import "./Footer.css";

export function Footer(){
 
    return (
   <footer className="footer">
        <div className='footer-icons'>
        <a href="#" aria-label="Instagram" className="icon-link">
          <img src="src\components\icons\instagram-logo.svg" alt="Instagram" />
        </a>
        <a href="#" aria-label="GitHub" className="icon-link">
          <img src="src\components\icons\github-logo.svg" alt="GitHub" />
        </a>
        <a href="#" aria-label="Linkedin" className="icon-link">
          <img src="src\components\icons\linkedln-logo.svg" alt="Linkedin" />
        </a>
        </div>

        <p className='footer-text'>
        © 2025 Fullmoon, All rights reserved. 
        </p>
        
    </footer>
    );

}