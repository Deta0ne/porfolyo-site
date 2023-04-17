import React from "react";

const experienceData = [
  {
    year: "2020",
    title: "Intern",
    company: "ABC Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2021",
    title: "Frontend Developer",
    company: "ABC Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2021",
    title: "Web Developer",
    company: "DEF Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "XYZ Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-arrow"></div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
