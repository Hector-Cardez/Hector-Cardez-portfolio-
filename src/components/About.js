import React from "react";
import "../styles/homePage.css";
import styled from "styled-components";

const About = () => {
  return (
    <div id="about" className="about sectionHP">
      <div className="emptySpace"></div>
      <br />
      <h2>About</h2>
      <br />

      <p>
        I'm passionate about creating clean, efficient, and visually compelling
        web solutions. I focus on using technology to streamline projects and
        consistently deliver high-quality code and seamless user experiences.
        I'm committed to continuous learning, keeping up with the latest
        industry trends and technologies. Outside of work, I love surfing,
        traveling, discovering new places, exploring aviation, diving into
        coding projects, and enjoying culinary adventures.
      </p>
    </div>
  );
};

const ImgAbout = styled.img`
  max-width: 20em;
  animation: animateImg 5s linear infinite;

  @keyframes animateImg {
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export default About;
