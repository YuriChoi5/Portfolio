// import React, { useState, useEffect } from "react";
// import "./ProjectList.css";

// const ProjectList = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const projectElements = document.querySelectorAll(".project");
//       const windowHeight =
//         window.innerHeight || document.documentElement.clientHeight;

//       projectElements.forEach((projectElement) => {
//         const rect = projectElement.getBoundingClientRect();

//         if (rect.top <= windowHeight * 0.75) {
//           setVisible(true);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Check visibility when the component mounts

//     return () => {
//       window.removeEventListener("scroll", handleScroll); // Clean up the event listener
//     };
//   }, []);

//   return (
//     <section className="project-list-wrapper project-font">
//       <div className="project-row">
//         <div className={`project ${visible ? "visible" : ""}`}>
//           <div class="image-container">
//             <img src="/img/pepe.png" alt="" class="zoom-image"></img>
//           </div>
//           <h2>Project 1</h2>
//           <p>hfktfkydkh</p>
//         </div>
//         <div className={`project ${visible ? "visible" : ""}`}>
//           <div class="image-container">
//             <img src="/img/pepe.png" alt="" class="zoom-image"></img>
//           </div>
//           <h2>Project 2</h2>
//           <p>hfktfkydkh</p>
//         </div>
//       </div>
//       <div className="project-row">
//         <div className={`project ${visible ? "visible" : ""}`}>
//           <div class="image-container">
//             <img src="/img/pepe.png" alt="" class="zoom-image"></img>
//           </div>
//           <h2>Project 3</h2>
//           <p>hfktfkydkh</p>
//         </div>
//         <div className={`project ${visible ? "visible" : ""}`}>
//           <div class="image-container">
//             <img src="/img/pepe.png" alt="" class="zoom-image"></img>
//           </div>
//           <h2>Project 4</h2>
//           <p>hfktfkydkh</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectList;

import React, { useState, useEffect } from "react";
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
          // Always keep Project 1 visible
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
          <div className="image-container">
            <img src={`/img/pepe.png`} alt="" className="zoom-image" />
          </div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
      
      
    </section>
  );
};

export default ProjectList;
