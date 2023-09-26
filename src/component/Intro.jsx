import React, { useState, useEffect } from "react";
import "./Intro.css";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     setIsVisible(false);
    //   }, 500);

    //   return () => {
    //     clearTimeout(timeout);
    //   };

    setIsVisible(false);
  }, []);

  return (
    <section className="intro-container">
      <h1 className={`intro-font title ${isVisible ? "animate" : ""}`}>
        Yuri choi, Frontend Developer
      </h1>
      <h2 className={`intro-small ${isVisible ? "animate" : ""}`}>
        As an aspiring junior frontend engineer, I am devoted to continuous
        growth and am passionate about crafting elegant and efficient web
        solutions in the field of modern web development.
      </h2>
    </section>
  );
};

export default Intro;
