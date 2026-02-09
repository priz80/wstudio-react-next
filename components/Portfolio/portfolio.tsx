import Button from "../Button/button";
import "./portfolio.scss";
import "./slider-portfolio.scss";
import { useState, useRef, useEffect } from "react";

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const totalSlides = 9; // количество слайдов
  const slideWidth = 672; // ширина одного слайда + отступ (настройте под себя)
  const visibleSlides = 3; // сколько слайдов видно одновременно

  const nextSlide = () => {
    if (currentIndex >= totalSlides - visibleSlides) {
      setCurrentIndex(0); // Сброс к началу
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(totalSlides - visibleSlides); // Перейти к последней позиции
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Прокручиваем слайдер при изменении currentIndex
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  }, [currentIndex, slideWidth]);

  return (
    <div className="container container-portfolio" id="portfolio">
      <div className="aside-line"></div>
      <div className="content portfolio-content">
        <div className="title-portfolio_block">
          <h4>Наше портфолио</h4>
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
        <div className="slider-block">
          <div className="slider-portfolio_container">
            <div className="slider" ref={sliderRef}>
              {Array.from({ length: totalSlides }, (_, i) => (
                <div className="slide" key={i}>
                  <img src={`./img/portfolio_img/slide${i + 1}.png`} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="arrow-container">
          <div className="arrow-circle" onClick={prevSlide}>
            <div className="arrow" id="left">
              <img src="./img/portfolio_img/arrowleft.svg" alt="" />
            </div>
          </div>
          <div className="arrow-circle" onClick={nextSlide}>
            <div className="arrow">
              <img src="./img/portfolio_img/arrowright.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
