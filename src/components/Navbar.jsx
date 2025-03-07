import React, { useState } from 'react';
import {NavLink, Link} from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
    //const [state, setState] = useState(intialValue);
    const [menuOpen, setMenuOpen] = useState(false);


    return (
      <nav> 
        <Link to="/" className="title">Website</Link>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen? "open" : ""}> 
            <li><NavLink to="/lists">Lists</NavLink></li>
            <li><NavLink to="/downloads">Downloads</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>  
        </ul>
      </nav>
    );
  }

