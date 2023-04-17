// src/components/Footer.js
import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a
          href="https://www.instagram.com/your_username"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="social-icon" />
        </a>
        <a
          href="https://twitter.com/ConstMert"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/mert-y%C4%B1ld%C4%B1z-60b519227/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
