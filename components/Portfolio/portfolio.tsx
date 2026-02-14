import Button from "../Button/button";
import "./portfolio.scss";
import "./slider-portfolio.scss";
import "./slider-portfolio.js";

export const Portfolio = () => {
  return (
    <div className="container container-portfolio" id="portfolio">
      <div className="aside-line"></div>
      <div className="content portfolio-content">
        <div className="title-portfolio_block">
          <h2>Наше портфолио</h2>
          <p>
            <br />
            В данном портфолио вы сможете увидеть кейсы наших работ на 2025 -
            2026 год
            <br />
            <br />
            <br />
          </p>
          <a href="/">
            <Button
              styleButton="button-portfolio"
              fontButton="button-font_portfolio"
              nameButton="Компьютерные версии"
            />
          </a>
        </div>
        <div className="content">
          <div className="slider-container">
            <div className="slider">
              <div className="slide slide7"></div>
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
              <div className="slide slide4"></div>
              <div className="slide slide5"></div>
              <div className="slide slide6"></div>
              <div className="slide slide7"></div>
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
            </div>

            <div className="button-block">
              <button id="left" aria-label="Previous slide">
                <div className="ball">
                  <img src="./img/arrowleft.svg" alt="Previous" />
                </div>
              </button>
              <button id="right" aria-label="Next slide">
                <div className="ball">
                  <img src="./img/arrowright.svg" alt="Next" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
