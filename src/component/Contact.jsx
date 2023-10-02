import React from "react";
import "./Contact.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const emailAddress = "yuri.choi.dev@gmail.com";

  const handleEmailClick = () => {
    const tempInput = document.createElement("input");
    tempInput.value = emailAddress;

    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    toast.dark("Email address copied to clipboard " + emailAddress);
  };

  return (
    <div className="contact-container contact-font">
      <ToastContainer position="top-center" transition={Zoom} />
      <div className="email" onClick={handleEmailClick}>
        Email
      </div>
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
