import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header-container">
      <nav className="navbar">
        <Link
          to="/"
          className={`nav-item${location.pathname === "/" ? " active" : ""}`}
        >
          Anasayfa
        </Link>
        <Link
          to="/about"
          className={`nav-item${
            location.pathname === "/about" ? " active" : ""
          }`}
        >
          Hakkımda
        </Link>
        <Link
          to="/projects"
          className={`nav-item${
            location.pathname === "/projects" ? " active" : ""
          }`}
        >
          Projeler
        </Link>
        <Link
          to="/skills"
          className={`nav-item${
            location.pathname === "/skills" ? " active" : ""
          }`}
        >
          Yetenekler
        </Link>
        <Link
          to="/experience"
          className={`nav-item${
            location.pathname === "/experience" ? " active" : ""
          }`}
        >
          Deneyimler
        </Link>
        <Link
          to="/contact"
          className={`nav-item${
            location.pathname === "/contact" ? " active" : ""
          }`}
        >
          İletişim
        </Link>
      </nav>
    </header>
  );
};

export default Header;
