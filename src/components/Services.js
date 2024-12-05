import React from "react";

import designDev from "../img/phone.gif";
import softwareDev from "../img/software_dev.gif";

const Services = () => {
  return (
    <div id="services" className="services sectionHP">
      <div className="emptySpace"></div>
      <br />
      <h2>Services</h2>
      <p>
        Delivering customized web and software development solutions that
        transform your ideas into practical and impactful results.
      </p>

      <div className="container">
        {/* Left Section */}
        <div className="left">
          <div>
            <h3>Web Development</h3>
            <ul>
              <li>Responsive Web Design</li>
              <li>E-Commerce Solutions</li>
              <li>Web Applications</li>
              <li>CMS Development</li>
            </ul>
          </div>
          <img
            src={designDev}
            alt="Design and Development"
            className="img-left"
          />
        </div>

        {/* Right Section */}
        <div className="right">
          <img
            src={softwareDev}
            alt="Software Development"
            className="img-right"
          />

          <div>
            <h3>Software Development</h3>
            <ul>
              <li>Custom Software Solutions</li>
              <li>API Integration</li>
              <li>Mobile Applications</li>
              <li>Automation Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
