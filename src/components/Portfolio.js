import "../styles/portfolio.css";
import ImgPortfolio1 from "../img/project1.png";
import ImgPortfolio2 from "../img/workshop.png";
import ImgPortfolio3 from "../img/mockup.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio sectionHP">
      <div className="emptySpace"></div>
      <br />
      <h2>Portfolio</h2>
      <br />
      <br />
      <br />
      <br />
      <p>
        A showcase of dynamic and responsive web applications built with
        JavaScript, React, useState, CSS, and HTML. These projects demonstrate
        the implementation of user-friendly interfaces and seamless
        functionality.
      </p>

      <div className="portfolioItem">
        <img src={ImgPortfolio1} alt="Project 1" />
        <p> Project 1( Concordia Bootcamp) ... link to come </p>
      </div>
      <div className="portfolioItem">
        <img src={ImgPortfolio2} alt="workshop" />
        <p> Workshop tic-tac-toe( Concordia Bootcamp) ... link to come </p>
      </div>
      <div className="portfolioItem">
        <img src={ImgPortfolio3} alt="workshop" />
        <p>
          Mockup Page( Concordia Bootcamp) ...
          <a href="https://zjx5x8.csb.app/">Click here to visit</a>{" "}
        </p>
      </div>
      <div className="portfolioItem">
        <div className="moreToCome">
          <p> More to come... </p>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
