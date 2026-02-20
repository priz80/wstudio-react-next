import { useEffect, useState } from "react";
import Button from "../Button/button";
import headerStyles from "./headers.module.scss";
import menuStyles from "./main-menu.module.scss";
import burgerStyles from "./burger.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={headerStyles.header}>
      <div className={`container ${headerStyles['container-header']}`} id="header">
        <img
          src="images/lamp.svg"
          className={headerStyles['lamp-container']}
          alt="lamp"
        />
        <div className="aside-line"></div>
        <div className={headerStyles['man-container']}>
          <img src="images/man.png" alt="Man" />
        </div>
        <div className={headerStyles['man-container-small']}>
          <img src="images/man-small.svg" alt="Man" />
        </div>
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
              src="images/logo.svg"
              className={menuStyles['logo-mobile']}
              alt="logo"
            />

            <div className={menuStyles.menu}>
              {/* Бургер-иконка */}
              <div
                className={`${burgerStyles.burger} ${isMenuOpen ? burgerStyles.active : ""}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={burgerStyles.span}></span>
                <span className={`${burgerStyles.span} ${burgerStyles['span-m']}`}></span>
                <span className={burgerStyles.span}></span>
              </div>

              {/* Мобильное меню */}
              <nav
                className={`${menuStyles['nav-menu']} ${isMenuOpen ? menuStyles.active : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <ul className={menuStyles.menuUl}>
                  <li><a href="/" className={menuStyles.menuLink}>Главная</a></li>
                  <li><a href="#about" className={menuStyles.menuLink}>Почему именно мы?</a></li>
                  <li className={menuStyles['mobile-only']}><a href="#portfolio" className={menuStyles.menuLink}>Портфолио</a></li>
                  <li><a href="#contacty" className={menuStyles.menuLink}>Контакты</a></li>
                  <li className={menuStyles['mobile-only']}>
                    <a href="#forma" className={menuStyles.menuLink}>Оставить заявку</a>
                  </li>
                </ul>
              </nav>

              {/* Кнопка "Заказать" (десктоп) */}
              <a href="#forma">
                <Button
                  styleButton={menuStyles['button-menu']}
                  fontButton={menuStyles['button-font_menu']}
                  nameButton="Заказать"
                />
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
                <Button
                  styleButton={headerStyles['button-header']}
                  fontButton={headerStyles['buttonFontHeader']}
                  nameButton={
                    <>
                      Подробнее <img src="images/arr.svg" alt="" />
                    </>
                  }
                />
              </a>
              <a href="https://t.me/Studio_WWW" target="blank_"><span className={headerStyles.question}>Остались вопросы?</span></a>
            </div>
          </div>
        </div>
      </div>
      <div className={headerStyles['line-header']}></div>
    </header>
  );
};