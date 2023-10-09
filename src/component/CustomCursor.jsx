// import React, { useState, useEffect } from "react";
// import "./CustomCursor.css";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isClicked, setIsClicked] = useState(false);

//   const onMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   const onMouseDown = () => {
//     setIsClicked(true);
//   };

//   const onMouseUp = () => {
//     setIsClicked(false);
//   };

//   useEffect(() => {
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mousedown", onMouseDown);
//     document.addEventListener("mouseup", onMouseUp);

//     return () => {
//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mousedown", onMouseDown);
//       document.removeEventListener("mouseup", onMouseUp);
//     };
//   }, []);

//   const cursorClassName = isClicked ? "custom-cursor clicked" : "custom-cursor";

//   return (
//     <div
//       className={cursorClassName}
//       style={{ left: position.x, top: position.y }}
//     ></div>
//   );
// };

// export default CustomCursor;

import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setIsClicked(true);
  };

  const onMouseUp = () => {
    setIsClicked(false);
  };

  const onTouchMove = (e) => {
    if (isMobile) {
      const touch = e.touches[0];
      setPosition({ x: touch.clientX, y: touch.clientY });
    }
  };

  const onTouchStart = () => {
    setIsClicked(true);
    setIsMobile(true);
  };

  const onTouchEnd = () => {
    setIsClicked(false);
    setIsMobile(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchend", onTouchEnd);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const cursorClassName = isClicked ? "custom-cursor clicked" : "custom-cursor";

  return (
    <div
      className={cursorClassName}
      style={{ left: position.x, top: position.y }}
    ></div>
  );
};

export default CustomCursor;
