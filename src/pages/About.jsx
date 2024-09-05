import React from "react";
import "../assets/style.css";
import profileImage from "../assets/profile.jpg"; 

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img
            src={profileImage} 
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="about-text">
          <h1>👋 Hey there</h1>
          <p>
            I have achieved some experience in Mobile Application Development
            through an Independent Study program and an internship in
            professional industries. In addition, I also have more than two
            years of experience in Front End Development through learning in
            university classes and internship in professional industries.
            Currently interested in Mobile Application and Front-End Development.
          </p>
          <p>
            📬 I have successfully completed various projects by applying my
            knowledge, showcasing my ability to translate theoretical concepts
            into practical solutions. Let's build something together! ✨
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
