import React from "react";
import "../styles/homePage.css";
import styled from "styled-components";
import profilePic from "../img/profile_picture.png";

const StyledImage = styled.img`
  height: 25%;
  width: 25%;
  border-radius: 50%;
  float: left;
  margin: 1.5rem;
  shape-outside: circle();
  clip-path: circle();
  object-fit: cover;
  position: relative; /* Ensure the container is positioned relative */
  z-index: 1;
`;

const Text = styled.p`
  margin: 0px;
  text-align: justify;
  width: 95%;
`;

const Style = styled.div`
  @media (max-height: 750px) {
    transform: scale(0.9, 0.9);
    font-size: 15px;
    font-weight: 400;
    position: relative;
    top: -40px;
  }

  @media (max-width: 500px) {
    transform: scale(0.95, 1);
    font-size: 16px;
    font-weight: 400;
    position: relative;
    top: -30px;
  }
  @media (max-width: 500px) {
    transform: scale(0.95, 1);
    font-size: 16px;
    font-weight: 600;
    position: relative;
    top: -30px;
  }

  @media (max-height: 500px) {
    transform: scale(0.9, 0.9);
    font-size: 14px;
    font-weight: 600;
    position: relative;
    top: -55px;
  }

  @media (max-width: 380px) {
    transform: scale(0.9, 0.9);
    font-size: 14px;
    font-weight: 400;
    position: relative;
    top: -40px;
  }
  @media (max-height: 380px) {
    transform: scale(1, 0.65);
    font-size: 0.83rem;
    font-weight: 400;
    position: relative;
    top: -75px;
  }
`;
const About = () => {
  return (
    <div id="about" className="content-wrapper">
      <div className="background-blur bg-about"></div>
      {/* Content */}
      <div className="wrapper-inner">
        <h2 className="section-header">About</h2>

        <Style className="container">
          <div className="wrapper-inner"></div>

          <StyledImage
            src={profilePic}
            alt="Profile Picture"
            className="profilePic"
          />
          <Text>
            Hi, I’m Hector Carvajal Hernandez, a web developer with a strong
            interest in creating clean and reliable web applications. I go by
            CARDEZ, a name based on my last name that I use to represent my work
            as a developer.
          </Text>
          <Text>
            My journey started at Langara College in Vancouver, where I studied
            web development and learned the core principles of HTML, CSS, and
            responsive design. Later, I completed a full-stack web development
            bootcamp at Concordia University in Montreal, where I expanded my
            skills in JavaScript, React, Node.js, and databases.
          </Text>
          <Text>
            I enjoy building user-friendly projects that focus on performance
            and clarity. Whether it’s for business tools or personal projects, I
            care about writing solid, maintainable code and solving real-world
            problems through development.
          </Text>
          <Text>
            Outside of coding, I draw inspiration from traveling and trying new
            food—these experiences help me see things from new angles and bring
            fresh ideas into my work. I'm now looking to grow as a developer and
            contribute to a team that values learning, quality, and
            collaboration.
          </Text>
        </Style>
      </div>
    </div>
  );
};

export default About;
