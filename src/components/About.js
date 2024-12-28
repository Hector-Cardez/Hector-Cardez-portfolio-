import React from "react";
import "../styles/homePage.css";
import styled from "styled-components";
import profilePic from "../img/profile_picture.png";

const StyledImage = styled.img`
  height: 25%;
  width: 25%;
  border-radius: 50%;
  float: left;
  margin: 1rem;
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
            Hi, I’m Hector Carvajal Hernandez, the founder of CARDEZ. I
            specialize in creating clean, efficient, and visually captivating
            web and software solutions tailored to meet your business needs.
          </Text>
          <Text>
            Whether it’s a dynamic website, a custom software tool, or an
            e-commerce platform, my goal is to help you stand out and succeed in
            today’s digital world.
          </Text>
          <Text>
            At CARDEZ, I focus on delivering user-friendly and high-performing
            solutions by staying ahead of the latest technologies and industry
            trends. I combine technical expertise with a passion for
            understanding your unique goals, ensuring every project not only
            looks great but also delivers results.
          </Text>
          <Text>
            Outside of development, I draw creativity from exploring new
            destinations, and even experimenting with culinary adventures. These
            experiences inspire fresh ideas that I bring to my work. Let’s
            collaborate to bring your vision to life and take your business to
            the next level!
          </Text>
        </Style>
      </div>
    </div>
  );
};

export default About;
