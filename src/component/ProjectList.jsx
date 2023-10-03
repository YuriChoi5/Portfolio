import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectList.css";

const ProjectList = () => {
  const [visibleStates, setVisibleStates] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const projectElements = document.querySelectorAll(".project");
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const newVisibleStates = Array.from(projectElements).map((projectElement, index) => {

        if (index === 0) {
          return true;
        }

        const rect = projectElement.getBoundingClientRect();
        return rect.top <= windowHeight * 0.75;

      });

      setVisibleStates(newVisibleStates);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  const projects = [
    { id: 1, title: "Project 1", description: "Description 1" },
    { id: 2, title: "Project 2", description: "Description 2" },
    { id: 3, title: "Project 3", description: "Description 3" },
    { id: 4, title: "Project 4", description: "Description 4" },
  ];

  return (
    <section className="project-list-wrapper project-font">
      {projects.map((project, index) => (
        <div key={project.id} className={`project ${visibleStates[index] ? "visible" : ""}`}>
          <Link to={`/project/p ${project.id}`} className="project-link">
          <div className="image-container">
            <img src={`./img/pepe.png`} alt="" className="zoom-image" />
          </div>
          <h2 className='project-title'>{project.title}</h2>
          </Link>
          <p className='project-description'>{project.description}</p>
        </div>
      ))}
      
      
    </section>
  );
};

export default ProjectList;
