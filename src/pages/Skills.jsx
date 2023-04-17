// src/pages/Skills.js
import React from "react";

const skillsData = [
  {
    name: "Python",
    logo: "/Images/python-logo.png",
    level: "İleri",
    percentage: "40%",
    color: "#e74c3c", // Kırmızı renk
  },
  {
    name: "JavaScript",
    logo: "/Images/javascript-logo.png",
    level: "Başlangıç",
    percentage: "50%",
    color: "#f1c40f", // Sarı renk
  },
  {
    name: "HTML",
    logo: "/Images/html-logo.png",
    level: "İleri",
    percentage: "90%",
    color: "#2ecc71", // Yeşil renk
  },
  {
    name: "CSS",
    logo: "/Images/css-logo.png",
    level: "İleri",
    percentage: "80%",
    color: "#2ecc71", // Yeşil renk
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      {skillsData.map((skill, index) => (
        <div className="skill-item" key={index}>
          <img src={skill.logo} alt={skill.name} />
          <div className="skill-details">
            <h3>{skill.name}</h3>
            <div className="skill-level">
              <div
                className="skill-level-bar"
                style={{
                  width: skill.percentage,
                  backgroundColor: skill.color,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
