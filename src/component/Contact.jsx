import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container contact-font">
      <a
        href="https://github.com/YuriChoi5"
        target="_blank"
        rel="noopener noreferrer"
        className="contact"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="contact"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default Contact;
