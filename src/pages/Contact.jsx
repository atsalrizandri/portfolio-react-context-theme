import React from "react";
import "../assets/style.css";
import profileImage from "../assets/profile.jpg";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <div className="profile-container">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="text-container">
        <h1>LET'S WORK TOGETHER?</h1>
        <h3>And discuss on something cool together</h3>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:atsalrizandrii@gmail.com" target="_blank" rel="noopener noreferrer">atsalrizandrii@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/atsalrizandri" target="_blank" rel="noopener noreferrer">
            @atsalrizandri
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;