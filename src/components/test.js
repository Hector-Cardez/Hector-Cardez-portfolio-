import React, { useState, useEffect, useRef } from "react";
import "../styles/homePage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoCardez from "../img/cadezCode-navBar.png";

import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Techstack from "./Techstack";

const HomePage = () => {
  const [displayHP, setDisplayHP] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sectionRefs = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Attach animations to each section
    sectionRefs.current.forEach((section, index) => {
      const isLast = index === sectionRefs.current.length - 1;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            scrub: 1,
          },
        })

        .to(section, {
          ease: "none",
          filter: isLast ? "none" : "brightness(100%) blur(0px)",
          scale: 0.9,
          borderRadius: 40,

          duration: 1,
        });
    });
  }, []);

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
          <a className="navLink" href="#services" onClick={closeNav}>
            Services
          </a>
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

        <img className="logo" src={LogoCardez} alt="Logo" />
      </div>
      <section id="about" ref={(el) => (sectionRefs.current[0] = el)}>
        <About />
      </section>
      <section id="services" ref={(el) => (sectionRefs.current[1] = el)}>
        <Services />
      </section>
      <section id="portfolio" ref={(el) => (sectionRefs.current[2] = el)}>
        <Portfolio />
      </section>
      <section id="techstack" ref={(el) => (sectionRefs.current[3] = el)}>
        <Techstack />
      </section>
      <section id="contact" ref={(el) => (sectionRefs.current[4] = el)}>
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
//////////////////////////////
import React, { useState, useEffect } from "react";
import "../styles/homePage.css";
import LogoCardez from "../img/cadezCode-navBar.png";

import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Techstack from "./Techstack";

const HomePage = () => {
  const [displayHP, setDisplayHP] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sections = document.querySelectorAll("section");
  let currentSectionIndex = 0;
  let isScrolling = false;

  const scrollToSection = (index) => {
    const targetSection = sections[index];
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return; // Prevent rapid scrolling

      isScrolling = true;
      setTimeout(() => (isScrolling = false), 1300); // Lock scrolling for 800ms

      if (e.deltaY > 0) {
        // Scroll down
        if (currentSectionIndex < sections.length - 1) {
          currentSectionIndex++;
          scrollToSection(currentSectionIndex);
        }
      } else {
        // Scroll up
        if (currentSectionIndex > 0) {
          currentSectionIndex--;
          scrollToSection(currentSectionIndex);
        }
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [sections]);

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
          <a className="navLink" href="#services" onClick={closeNav}>
            Services
          </a>
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

      {/* <div className="emptySpace"></div> */}

      <section className="first">
        <div className="outer">
          <div className="inner">
            <div className="bg one">
              <Services />
            </div>
          </div>
        </div>
      </section>

      <section className="second">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <About />
            </div>
          </div>
        </div>
      </section>

      <section className="third">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <Portfolio />
            </div>
          </div>
        </div>
      </section>

      <section className="fourth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <Techstack />
            </div>
          </div>
        </div>
      </section>

      <section className="fifth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
///////////////////////////////////
import { createGlobalStyle } from "styled-components";
import animateBg from "../img/BGimg.png";

const GlobalStyles = createGlobalStyle`

html {
    margin: 0;
    padding: 0; /* Reset default margins and padding on html */
    scroll-behavior: smooth;
   
}

body {
    color: #a9a9a9;
    font-family: "Nunito", sans-serif;
    margin: 0;
    height: 100vh;
    width: 100%; /* Changed from 100vw to avoid including scrollbar width */
    background-color: black;
    position: relative; /* Ensure pseudo-elements are positioned relative to the body */
    overflow-x: hidden; /* Prevent horizontal scrolling */
}

.container{
  height: 100vh;
    width: 100vw;
}

a {
    color: #cddc39;
    text-decoration: none;
}
a:active {
    color: #ff5722;
}
img{
    height: 10vh;
    width: 10vw;
}


body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   
    z-index: -1; /* Place the background behind all content */
    animation: animateBg 5s linear infinite;
    filter: hue-rotate(0deg);
}

.logo{
  height: 10rem;
  
   width: 10rem;

}

@keyframes animateBg {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rotate(360deg);
    }
}`;

export default GlobalStyles;
/////////////////////////////////////////
