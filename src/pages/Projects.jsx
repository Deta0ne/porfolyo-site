// src/pages/Projects.js
import React, { useState } from "react";

const projectsData = [
  {
    title: "Proje 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/Images/3.jpg",
  },
  {
    title: "Proje 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/Images/4.jpg",
  },
  {
    title: "Proje 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/Images/5.jpg",
  },
  {
    title: "Proje 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/Images/1.jpg",
  },
  {
    title: "Proje 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/Images/2.jpg",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(index === selectedProject ? null : index);
  };

  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div
          className={`project-item${
            index === selectedProject ? " expanded" : ""
          }`}
          key={index}
          onClick={() => handleProjectClick(index)}
        >
          <img src={project.imageUrl} alt={project.title} />
          <div className="project-details">
            <h2>{project.title}</h2>
            <p>
              {selectedProject === index
                ? project.description + project.description
                : project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
