import React from "react";
import styled from "styled-components";
import ImgPortfolio1 from "../img/project1.png";
import ImgPortfolio2 from "../img/workshop.png";
import ImgPortfolio3 from "../img/mockup.png";
import ImgPortfolio4 from "../img/cineScore.png";
import ImgPortfolio5 from "../img/e-commerce.png";

const Style = styled.div`
  .portfolioItem img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }

  @media (max-height: 750px) {
    transform: scale(0.9, 0.9);
    position: relative;
    top: -20px;
    display: flex;
    font-size: 0.9rem;
  }

  @media (max-width: 700px) {
    position: relative;
    top: -15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 0.5rem 0.5rem;
    justify-content: center;
  }
  @media (max-height: 390px) {
    transform: scale(0.8, 0.8);
    position: relative;
    top: -20px;
    display: flex;
    font-size: 1rem;
  }
`;
const Portfolio = () => {
  return (
    <div id="portfolio" className="content-wrapper">
      {/* Blurred background */}
      <div className="background-blur bg-portfolio"></div>

      {/* Content */}
      <div className="wrapper-inner">
        <h2 className="section-header">Portfolio</h2>

        <Style>
          <div className="portfolioItem">
            <img src={ImgPortfolio1} alt="Project 1" />
            <p>
              {" "}
              Project 1( Concordia Bootcamp){" "}
              <a href="https://project-js-nyan-cat-ashen.vercel.app/">
                Click here to visit
              </a>{" "}
            </p>
          </div>
          <div className="portfolioItem">
            <img src={ImgPortfolio2} alt="workshop" />
            <p> Workshop tic-tac-toe( Concordia Bootcamp) ... link to come </p>
          </div>
          <div className="portfolioItem">
            <img src={ImgPortfolio3} alt="workshop" />
            <p>
              Mockup Page( Concordia Bootcamp) ...
              <a href="https://zjx5x8.csb.app/">Click here to visit</a>
            </p>
          </div>

          <div className="portfolioItem">
            <img src={ImgPortfolio4} alt="cineScore" />
            <p>
              CineScore(Your guide to great movies) ...
              <a href="https://cine-score-iota.vercel.app/all">
                Click here to visit
              </a>
            </p>
          </div>
          <div className="portfolioItem">
            <img src={ImgPortfolio5} alt="e-commerce" />
            <p>
              E-commerce project(YConcordia Bootcamp) ...
              <a href="https://e-commerce-yqz5.vercel.app/">
                Click here to visit
              </a>
            </p>
          </div>
          <div className="portfolioItem">
            <div className="moreToCome">
              <p> More to come... </p>
            </div>
          </div>
        </Style>
      </div>
    </div>
  );
};

export default Portfolio;
