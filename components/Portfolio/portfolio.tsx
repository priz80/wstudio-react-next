import Button from "../Button/button";
import "./portfolio.scss";

export const Portfolio = () => {
  return (
    <div className="container container-portfolio" id="portfolio">
      <div className="aside-line"></div>
      <div className="content">
        <div className="title-portfolio_block">
          <h4>Наше портфолио</h4>
          <p>
            В данном портфолио вы сможете увидеть кейсы наших работ на 2025 -
            2026 год
          </p>
            <a href="/">
              <Button
                styleButton="button-portfolio"
                fontButton="button-font_portfolio"
                nameButton="Компьютерные версии"
              />
            </a>
        </div>
      </div>
    </div>
  );
};
