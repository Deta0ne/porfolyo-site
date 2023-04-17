// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <Link to="/" className="nav-item">
          Anasayfa
        </Link>
        <Link to="/about" className="nav-item">
          Hakkımda
        </Link>
        <Link to="/projects" className="nav-item">
          Projeler
        </Link>
        <Link to="/skills" className="nav-item">
          Yetenekler
        </Link>
        <Link to="/experience" className="nav-item">
          Deneyimler
        </Link>
        <Link to="/contact" className="nav-item">
          İletişim
        </Link>
      </nav>
    </header>
  );
};

export default Header;
