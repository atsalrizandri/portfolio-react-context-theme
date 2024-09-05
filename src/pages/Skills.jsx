import React from 'react';
import "../assets/style.css";
import { FaJava, FaAndroid, FaPhp, FaGithub, FaReact, FaProjectDiagram } from 'react-icons/fa';
import { SiKotlin, SiDart, SiFlutter, SiTypescript, SiSqlite } from 'react-icons/si';
import { MdOutlineDesignServices } from 'react-icons/md';

function Skills() {
  const skills = [
    { icon: <SiKotlin />, label: 'Kotlin' },
    { icon: <SiDart />, label: 'Dart' },
    { icon: <FaJava />, label: 'Java' },
    { icon: <FaAndroid />, label: 'Android' },
    { icon: <SiFlutter />, label: 'Flutter' },
    { icon: <FaReact />, label: 'React' },
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <FaPhp />, label: 'PHP' },
    { icon: <FaGithub />, label: 'Github' },
    { icon: <SiSqlite />, label: 'SQL' },
    { icon: <FaProjectDiagram />, label: 'Agile' },
    { icon: <MdOutlineDesignServices />, label: 'UX Researcher' }
  ];

  return (
    <div className="skills-container">
      <div className="skills-title-container">
        <h2 className="skills-title">EXPERIENCE WITH</h2>
        <div className="skills-title-line"></div>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-label">{skill.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;