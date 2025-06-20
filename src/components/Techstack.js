import React, { useState } from "react";
import "../styles/techstack.css";
import "../styles/homePage.css";

const techs = [
  {
    name: "HTML",
    description:
      "The backbone of all web pages, providing structure and meaning to your content.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
  },
  {
    name: "CSS",
    description:
      "Styling web pages with layouts, colors, fonts, and responsiveness for better visual presentation and user experience.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
  },
  {
    name: "JavaScript",
    description:
      "Adding interactivity and enhancing user experience with modern features.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    description:
      "Building reusable components and managing state efficiently for seamless web applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Node.js",
    description: "Developing robust server-side applications and APIs.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "MongoDB",
    description:
      "Managing data storage with a flexible and efficient NoSQL database.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  },
];

const Techstack = () => {
  // State for hover highlight
  const [hoveredTech, setHoveredTech] = useState(null);
  // State for clicked active card
  const [clickedTech, setClickedTech] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredTech(index);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  const handleClick = (index) => {
    setClickedTech(index);
  };

  return (
    <div id="techstack" className="content-wrapper wrapper">
      <div className="background-blur bg-techstack"></div>

      <div className="wrapper-inner">
        <h2 className="section-header">Techstack</h2>
        <div className="tech-container">
          {techs.map((tech, index) => {
            // Active if hovered or clicked
            const isActive = hoveredTech === index || clickedTech === index;

            return (
              <div
                key={index}
                className={`tech-card ${isActive ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index)}
              >
                <div className="tech-card-wrapper">
                  <img
                    className="img-tech"
                    src={tech.icon}
                    alt={`${tech.name} Icon`}
                  />
                  <h3>{tech.name}</h3>
                  <p className={`tech-description ${isActive ? "show" : ""}`}>
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
