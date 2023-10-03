import React from "react";
import Contact from "../component/Contact";
import ProjectList from "../component/ProjectList";
import Intro from "../component/Intro";

const Main = () => {
  return (
    <>
      <Intro />
      <main>
        <Contact />
        <ProjectList />
      </main>
    </>
  );
};

export default Main;
