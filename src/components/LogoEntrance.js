import React, { useState, useEffect } from "react";
import "../styles/LogoEntrance.css";
import ImgLeft from "../img/Cardez_Code_Left.png";
import ImgRight from "../img/Cardez_Code_Orange_right.png";
import InnerText from "../img/intro-logo.png";

const LogoEntrance = () => {
  const [spin, setSpin] = useState(false);
  const [moved, setMoved] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [innerText, setInnerText] = useState(false);

  useEffect(() => {
    const spinTimer = setTimeout(() => {
      setSpin(true);
    }, 500);

    const moveTimer = setTimeout(() => {
      setMoved(true);
    }, 1500);

    const insertText = setTimeout(() => {
      setInnerText(true);
    }, 1700);

    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 3300);

    return () => {
      clearTimeout(spinTimer);
      clearTimeout(moveTimer);
      clearTimeout(hideTimer);
      clearTimeout(insertText);
    };
  }, []);

  // Inline style to ensure component is hidden
  const wrapperStyle = {
    display: hidden ? "none" : "flex",
    backgroundColor: "#333",
    width: "100%",
    height: "100vh",
    position: "relative",
  };

  return (
    <div style={wrapperStyle}>
      <div className="container-logoEntrance">
        <div
          className={`image-wrapper ${spin ? "spinning" : ""} ${
            moved ? "moved" : ""
          } ${hidden ? "hidden" : ""}`}
        >
          <img
            src={ImgLeft}
            alt="Image Left"
            className={`image left ${spin ? "spin" : ""} ${
              moved ? "move-left" : ""
            }`}
          />
          <img
            src={ImgRight}
            alt="Image Right"
            className={`image right ${spin ? "spin" : ""} ${
              moved ? "move-right" : ""
            }`}
          />
          <img
            src={InnerText}
            alt="Cardez Code"
            className={`image inner-text ${innerText ? "appear" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoEntrance;
