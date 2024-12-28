import React from "react";
import designDev from "../img/phone.gif";
import softwareDev from "../img/software_dev.gif";
import styled from "styled-components";

const ServicesStyle = styled.div`
  @media (max-height: 1025px) {
    transform: scale(0.9, 0.9);
    font-size: 1.5rem;

    .container {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 850px) {
    transform: scale(0.9, 0.9);
    font-size: 1.3rem;
    position: relative;
    top: -50px;
  }

  @media (max-height: 750px) {
    transform: scale(0.9, 0.9);
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    transform: scale(0.8, 0.8);
    font-size: 1.25rem;
    position: relative;
    top: -85px;
  }

  @media (max-height: 450px) {
    transform: scale(0.6, 0.6);
    font-size: 1.25rem;
    position: relative;
    top: -80px;

    .container img {
      display: none;
    }
  }

  @media (max-width: 380px) {
    transform: scale(0.8, 0.8);
    font-size: 1.25rem;
    position: relative;
    top: -80px;
    .container img {
      display: none;
    }
  }
`;

const Services = () => {
  return (
    <div id="services" className="content-wrapper">
      <div className="background-blur bg-services"></div>

      {/* Content */}
      <div className="wrapper-inner wrapper-services">
        <h2 className="section-header">Services</h2>
        <ServicesStyle>
          <p>
            Delivering customized web and software development solutions that
            transform your ideas into practical and impactful results.
          </p>

          <div className="container">
            {/* Left Section */}
            <div>
              <div>
                <ul style={{ listStyle: "none" }}>
                  <h3>Web Development</h3>
                  <li>Responsive Web Design</li>
                  <li>E-Commerce Solutions</li>
                  <li>Web Applications</li>
                  <li>CMS Development</li>
                </ul>

                <img
                  src={designDev}
                  alt="Design and Development"
                  className="img-left"
                  style={{ width: "12rem", height: "9rem" }}
                />
              </div>
            </div>

            {/* Right Section */}
            <div>
              <img
                src={softwareDev}
                alt="Software Development"
                className="img-right"
                style={{ width: "12rem", height: "9rem" }}
              />

              <div>
                <ul style={{ listStyle: "none" }}>
                  <h3>Software Development</h3>
                  <li>Custom Software Solutions</li>
                  <li>API Integration</li>
                  <li>Mobile Applications</li>
                  <li>Automation Tools</li>
                </ul>
              </div>
            </div>
          </div>
        </ServicesStyle>
      </div>
    </div>
  );
};

export default Services;
