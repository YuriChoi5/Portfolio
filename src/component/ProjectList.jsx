import React from "react";
import "./ProjectList.css";

const ProjectList = () => {
  return (
    <section className="project-container project-font">
      <div className='project-row'>
        <div className=''>
          <div class="image-container">
            <img src="/img/pepe.png" alt="" class="zoom-image"></img>
          </div>
          <h2>Project 1</h2>
          <p>hfktfkydkh</p>
        </div>
        <div>
          <div class="image-container">
            <img src="/img/pepe.png" alt="" class="zoom-image"></img>
          </div>
          <h2>Project 2</h2>
          <p>hfktfkydkh</p>
        </div>
      </div>
      <div className='project-row'>
        <div>
          <div class="image-container">
            <img src="/img/pepe.png" alt="" class="zoom-image"></img>
          </div>
          <h2>Project 3</h2>
          <p>hfktfkydkh</p>
        </div>
        <div>
          <div class="image-container">
            <img src="/img/pepe.png" alt="" class="zoom-image"></img>
          </div>
          <h2>Project 4</h2>
          <p>hfktfkydkh</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
