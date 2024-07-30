import React, { useState, useEffect } from "react";
import "../styles/homePage.css";
import LogoCardez from "../img/cadezCode-navBar.png";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Techstack from "./Techstack";

const HomePage = () => {
  const [displayHP, setDisplayHP] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.title = "CARDEZ Code";
  }, []);

  useEffect(() => {
    const displayTimer = setTimeout(() => {
      setDisplayHP(true);
    }, 3300);
    return () => clearTimeout(displayTimer);
  }, []);

  const toggleNav = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={`container-homePage ${displayHP ? "appear" : ""}`}>
      <div className={`navContainer ${sidebarOpen ? "open" : ""}`}>
        <div className="navLinks">
          <a className="navLink" href="#about" onClick={closeNav}>
            About
          </a>
          <a className="navLink" href="#portfolio" onClick={closeNav}>
            Portfolio
          </a>
          <a className="navLink" href="#techstack" onClick={closeNav}>
            Techstack
          </a>
          <a className="navLink" href="#contact" onClick={closeNav}>
            Contact
          </a>
        </div>
        <img className="logo" src={LogoCardez} alt="Logo Cardez" />
        <button className="sidebarToggle" onClick={toggleNav}>
          ☰
        </button>
      </div>
      <div className="emptySpace"></div>
      <About />
      <Portfolio />
      <Techstack />
      <Contact />

      <div className="emptySpace"></div>
      <div className="emptySpace"></div>
    </div>
  );
};

export default HomePage;
