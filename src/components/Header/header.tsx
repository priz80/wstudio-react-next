import { useState } from "react";
import Button from "../Button/button";
import headerStyles from "./headers.module.scss";
import menuStyles from "./main-menu.module.scss";
import burgerStyles from "./burger.module.scss";
import imageMan from "public/images/man.png"
import imageManSmall from "public/images/man-small.png"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={headerStyles.header}>
      
      <div className={`container ${headerStyles['container-header']}`}  id="header">
        <img
          src="./images/lamp.svg"
          className={headerStyles['lamp-container']}
          alt="lamp"
        />
        <div className="aside-line"></div>
        <div className={headerStyles['man-container']}> <img src={imageMan.src} alt="Man" /> </div>
        <div className={headerStyles['man-container-small']}> <img src={imageManSmall.src} alt="Man" /> </div>
        <div className={headerStyles.circle}>
          <div className={`${headerStyles.circle} ${headerStyles['circle-m']}`}>
            <div className={`${headerStyles.circle} ${headerStyles['circle-s']}`}></div>
          </div>
        </div>

        <div className="content">
          <div className={menuStyles['menu-container']}>
            <div className={menuStyles.logo}>
              <p className={menuStyles['logo-studio']}>Studio</p>
              <p className={menuStyles['logo-web']}>Web</p>
            </div>
            <img
              src="./images/logo.svg"
              className={menuStyles['logo-mobile']}
              alt="logo"
            />
            <div className={menuStyles.menu}>
              {/* Бургер-иконка */}
              <div
                className={`${burgerStyles.burger} ${isMenuOpen ? burgerStyles.active : ""}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className={burgerStyles.span}></span>
                <span className={`${burgerStyles.span} ${burgerStyles['span-m']}`}></span>
                <span className={burgerStyles.span}></span>
              </div>

              {/* Основное меню (бургер-версия + десктоп) */}
              <nav
                onClick={() => setIsMenuOpen(false)}
                className={`${menuStyles['nav-menu']} ${isMenuOpen ? menuStyles.active : ""}`}
              >
                <ul className={menuStyles.menuUl}>
                  <li>
                    <a className={menuStyles.menuLink} href="/" onClick={() => setIsMenuOpen(false)}>
                      Главная
                    </a>
                  </li>
                  <li>
                    <a className={menuStyles.menuLink} href="#about" onClick={() => setIsMenuOpen(false)}>
                      Почему именно мы?
                    </a>
                  </li>
                  <li className={menuStyles['mobile-only']}>
                    <a className={menuStyles.menuLink} href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                      Портфолио
                    </a>
                  </li>
                  <li>
                    <a className={menuStyles.menuLink} href="#contacty" onClick={() => setIsMenuOpen(false)}>
                      Контакты
                    </a>
                  </li>
                  <li className={menuStyles['mobile-only']}>
                    <a href="#forma" onClick={() => setIsMenuOpen(false)}>
                      Оставить заявку
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Кнопка "Заказать" */}
              <a href="#forma">
                <Button styleButton={menuStyles['button-menu']} fontButton={menuStyles['button-font_menu']} nameButton="Заказать" />
              </a>
            </div>
          </div>

          {/* Основной заголовок */}
          <div className={headerStyles['title-block']}>
            <h1>Разработка сайтов</h1>
            <span className={headerStyles['header-subtitle']}>Для твоего бизнеса</span>
            <div className={headerStyles['header-manifesto']}><p></p></div>
            <div className={headerStyles['question-block']}>
              <a href="#about">
                <Button styleButton={headerStyles['button-header']} fontButton={headerStyles['buttonFontHeader']} nameButton="Подробнее" />
              </a>
              <a href="/"><span className={headerStyles.question}>Остались вопросы?</span></a>
            </div>
          </div>
        </div>
        
      </div>
      <div className={headerStyles['line-header']}></div>
    </header>
  );
}
