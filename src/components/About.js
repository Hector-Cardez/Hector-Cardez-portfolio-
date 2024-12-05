import React from "react";
import "../styles/homePage.css";
import styled from "styled-components";
import profilePic from "../img/profile_picture.png";

const About = () => {
  return (
    <div id="about" className="about sectionHP container">
      <div className="emptySpace"></div>
      <br />
      <h2>About</h2>
      <br />

      <StyledImage
        src={profilePic}
        alt="Profile Picture"
        className="profilePic"
      />
      <Text>
        Hi, I’m Hector Carvajal Hernandez, the founder of CARDEZ. I specialize
        in creating clean, efficient, and visually captivating web and software
        solutions tailored to meet your business needs.
      </Text>
      <Text>
        Whether it’s a dynamic website, a custom software tool, or an e-commerce
        platform, my goal is to help you stand out and succeed in today’s
        digital world.
      </Text>
      <Text>
        At CARDEZ, I focus on delivering user-friendly and high-performing
        solutions by staying ahead of the latest technologies and industry
        trends. I combine technical expertise with a passion for understanding
        your unique goals, ensuring every project not only looks great but also
        delivers results.
      </Text>
      <Text>
        Outside of development, I draw creativity from exploring new
        destinations, and even experimenting with culinary adventures. These
        experiences inspire fresh ideas that I bring to my work. Let’s
        collaborate to bring your vision to life and take your business to the
        next level!
      </Text>
    </div>
  );
};

const StyledImage = styled.img`
  height: 30vw;
  width: 30vw;
  border-radius: 50%;
  float: left;
  margin-right: 1rem;
  shape-outside: circle();
  clip-path: circle();
  object-fit: cover;
`;
const Text = styled.p`
  margin: 0px;
  text-align: justify;
`;

export default About;
