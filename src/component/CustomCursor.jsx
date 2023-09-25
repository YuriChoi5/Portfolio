import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    // return () => {
    //   document.removeEventListener('mousemove', onMouseMove);
    // };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
    ></div>
  );
};

export default CustomCursor;
