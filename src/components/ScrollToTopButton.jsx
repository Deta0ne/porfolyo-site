import React, { useState, useEffect } from "react";
import "../styles/ScrollToTopButton.css";
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button className="scroll-button" onClick={scrollToTop}>
          &uarr;
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
