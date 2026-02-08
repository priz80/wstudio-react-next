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
        <img src="img/header_img/man.png" className="man-container" alt="man" />
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
                    <a href="/" onClick={() => setIsMenuOpen(false)}>
                      Почему именно мы?
                    </a>
                  </li>
                  <li className="mobile-only">
                    <a href="/" onClick={() => setIsMenuOpen(false)}>
                      Портфолио
                    </a>
                  </li>
                  <li>
                    <a href="/" onClick={() => setIsMenuOpen(false)}>
                      Контакты
                    </a>
                  </li>
                  <li className="mobile-only">
                    <a href="/" onClick={() => setIsMenuOpen(false)}>
                      Оставить заявку
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Кнопка "Заказать" */}
              <a href="/">
                <Button sizeButton="button-menu" titleButton="Заказать" />
              </a>
            </div>
          </div>

          {/* Основной заголовок */}
          <div className="title-block">
            <h1>Разработка сайтов</h1>
            <h2>Для твоего бизнеса</h2>
            <h3>
              Мы - студия web-разработки, работаем уже более 3-х
              <br />
              лет, готовы разработать для вас сайт в кротчайшие
              <br />
              сроки.
            </h3>
            <div className="question-block">
              <a href="/">
                <Button sizeButton="button-header" titleButton="Подробнее" />
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
