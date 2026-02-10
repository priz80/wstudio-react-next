import { useState } from "react";
import Button from "../Button/button";
import "./header.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      
      <div className="container container-header"  id="header">
        <img
          src="img/header_img/lamp.svg"
          className="lamp-container"
          alt="lamp"
        />
        <div className="aside-line"></div>
        <div className="man-container"></div>
        {/* <img src="img/header_img/man.png" className="man-container" alt="man" /> */}
        <div className="circle">
          <div className="circle circle-m">
            <div className="circle circle-s"></div>
          </div>
        </div>

        <div className="content">
          <div className="menu-container">
            <div className="logo">
              <p className="logo-studio">Studio</p>
              <p className="logo-web">Web</p>
            </div>
            <img
              src="/img/header_img/logo.svg"
              className="logo-mobile"
              alt="logo"
            />
            <div className="menu">
              {/* Бургер-иконка */}
              <div
                className={`burger ${isMenuOpen ? "active" : ""}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="span"></span>
                <span className="span span-m"></span>
                <span className="span span"></span>
              </div>

              {/* Основное меню (бургер-версия + десктоп) */}
              <nav
                onClick={() => setIsMenuOpen(false)}
                className={`nav-menu ${isMenuOpen ? "active" : ""}`}
              >
                <ul>
                  <li>
                    <a href="/" onClick={() => setIsMenuOpen(false)}>
                      Главная
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>
                      Почему именно мы?
                    </a>
                  </li>
                  <li className="mobile-only">
                    <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                      Портфолио
                    </a>
                  </li>
                  <li>
                    <a href="#contacty" onClick={() => setIsMenuOpen(false)}>
                      Контакты
                    </a>
                  </li>
                  <li className="mobile-only">
                    <a href="#forma" onClick={() => setIsMenuOpen(false)}>
                      Оставить заявку
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Кнопка "Заказать" */}
              <a href="#forma">
                <Button styleButton="button-menu" fontButton="button-font_menu" nameButton="Заказать" />
              </a>
            </div>
          </div>

          {/* Основной заголовок */}
          <div className="title-block">
            <h1>Разработка сайтов</h1>
            <span className="header-subtitle">Для твоего бизнеса</span>
            <div className="header-manifesto"><p></p></div>
            <div className="question-block">
              <a href="#about">
                <Button styleButton="button-header" fontButton="button-font_header" nameButton="Подробнее" />
              </a>
              <a href="/"><span className="question">Остались вопросы?</span></a>
            </div>
          </div>
        </div>
        
      </div>
      <div className="line-header"></div>
    </header>
  );
}
