import React, { useState, useEffect, useRef } from "react";
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
  const sectionsRef = useRef([]);
  const currentSectionIndex = useRef(0);
  const isScrolling = useRef(false);

  const scrollToSection = (index) => {
    const targetSection = sectionsRef.current[index];
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      isScrolling.current = true;
      setTimeout(() => (isScrolling.current = false), 800);

      if (e.deltaY > 0) {
        // Scroll down
        if (currentSectionIndex.current < sectionsRef.current.length - 1) {
          currentSectionIndex.current++;
          scrollToSection(currentSectionIndex.current);
        }
      } else {
        // Scroll up
        if (currentSectionIndex.current > 0) {
          currentSectionIndex.current--;
          scrollToSection(currentSectionIndex.current);
        }
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
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

        <img className="logo" src={LogoCardez} alt="Logo Cardez" />
        <button className="sidebarToggle" onClick={toggleNav}>
          ☰
        </button>
      </div>

      <section ref={(el) => (sectionsRef.current[0] = el)} className="first">
        <div className="outer">
          <div className="inner">
            <div className="bg one">
              <Services />
            </div>
          </div>
        </div>
      </section>

      <section ref={(el) => (sectionsRef.current[1] = el)} className="second">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <About />
            </div>
          </div>
        </div>
      </section>

      <section ref={(el) => (sectionsRef.current[2] = el)} className="third">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <Portfolio />
            </div>
          </div>
        </div>
      </section>

      <section ref={(el) => (sectionsRef.current[3] = el)} className="fourth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <Techstack />
            </div>
          </div>
        </div>
      </section>

      <section ref={(el) => (sectionsRef.current[4] = el)} className="fifth">
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
