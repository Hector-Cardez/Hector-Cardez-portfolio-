import React, { useState, useEffect, useRef } from "react";
import LogoCardez from "../img/cadezCode-navBar.png";

import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Techstack from "./Techstack";

const HomePage = () => {
  const [displayHP, setDisplayHP] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0); // Track active section
  const sectionsRef = useRef([]);
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
    const handleResize = () => {
      isScrolling.current = false; // Reset scrolling lock during resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1; // Scroll down or up
      const nextIndex = activeSection + direction;

      if (nextIndex >= 0 && nextIndex < sectionsRef.current.length) {
        isScrolling.current = true;
        e.preventDefault();

        setActiveSection(nextIndex); // Update active section index
        scrollToSection(nextIndex);

        setTimeout(() => {
          isScrolling.current = false;
        }, 1000); // Lock scrolling for X period of time
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeSection]); // Trigger on activeSection change

  useEffect(() => {
    let startY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY; // Record the starting Y position
    };

    const handleTouchMove = (e) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      const endY = e.touches[0].clientY;
      const direction = endY < startY ? 1 : -1; // Scroll down or up
      const nextIndex = activeSection + direction;

      if (nextIndex >= 0 && nextIndex < sectionsRef.current.length) {
        isScrolling.current = true;

        setActiveSection(nextIndex); // Update active section index
        scrollToSection(nextIndex);

        setTimeout(() => {
          isScrolling.current = false;
        }, 1000); // Lock scrolling for X period of time
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeSection]); // Dependency on activeSection

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
          <a
            className="navLink"
            href="#services"
            onClick={() => {
              setActiveSection(0);
              closeNav();
            }}
          >
            Services
          </a>
          <a
            className="navLink"
            href="#about"
            onClick={() => {
              setActiveSection(1);
              closeNav();
            }}
          >
            About
          </a>
          <a
            className="navLink"
            href="#portfolio"
            onClick={() => {
              setActiveSection(2);
              closeNav();
            }}
          >
            Portfolio
          </a>
          <a
            className="navLink"
            href="#techstack"
            onClick={() => {
              setActiveSection(3);
              closeNav();
            }}
          >
            Techstack
          </a>
          <a
            className="navLink"
            href="#contact"
            onClick={() => {
              setActiveSection(4);
              closeNav();
            }}
          >
            Contact
          </a>
        </div>

        <img className="logo" src={LogoCardez} alt="Logo Cardez" />
        <button className="sidebarToggle" onClick={toggleNav}>
          ☰
        </button>
      </div>

      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`section-wrapper first ${
          activeSection === 0 ? "visible" : "hidden"
        }`}
      >
        <div className="outer services">
          <div className="inner">
            <div className="bg one">
              <Services />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className={`section-wrapper second ${
          activeSection === 1 ? "visible" : "hidden"
        }`}
      >
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <About />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className={`section-wrapper third ${
          activeSection === 2 ? "visible" : "hidden"
        }`}
      >
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <Portfolio />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className={`section-wrapper fourth ${
          activeSection === 3 ? "visible" : "hidden"
        }`}
      >
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <Techstack />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[4] = el)}
        className={`section-wrapper fifth ${
          activeSection === 4 ? "visible" : "hidden"
        }`}
      >
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
