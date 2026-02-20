import Link from "next/link";
import Button from "../Button/button";
import style from "./portfolio.module.scss";
import sliderStyle from "./slider-portfolio.module.scss";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";

// Список проектов: десктопный и мобильный формат
const projects = [
  { desktop: "portfolio.png", mobile: "portfolio.png" },
  { desktop: "calypso.png", mobile: "calypso.png" },
  { desktop: "drupal.png", mobile: "drupal.png" },
  { desktop: "pagelist.png", mobile: "pagelist.png" },
  { desktop: "portfolio.png", mobile: "portfolio.png" },
  { desktop: "calypso.png", mobile: "calypso.png" },
  { desktop: "drupal.png", mobile: "drupal.png" },
  { desktop: "pagelist.png", mobile: "pagelist.png" },
];

export const Portfolio = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const btnLeftRef = useRef<HTMLButtonElement>(null);
  const btnRightRef = useRef<HTMLButtonElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [slideWidth, setSlideWidth] = useState(671);
  const [isBlocked, setIsBlocked] = useState(false);

  const config = useMemo(() => ({
    totalUniqueSlides: 9,
    transitionTime: 0.7,
  }), []);

  // Определяем устройство
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1482;
      setIsMobile(mobile);
      setSlideWidth(mobile ? 295 : 671);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Формируем пути к изображениям
  const slideImages = useMemo(() => {
    const basePath = isMobile ? "/screenshots/mobile/" : "/screenshots/desktop/";
    /* const format = isMobile ? "mobile" : "desktop"; */

    // Для бесконечного слайдера: [последний] + [все] + [первый]
    const first = projects[0];
    const last = projects[projects.length - 1];

    const ordered = [
      last,           // для плавного перехода назад
      ...projects,    // основные
      first,          // для плавного перехода вперёд
    ];

    return ordered.map((proj) => {
      const filename = isMobile ? proj.mobile : proj.desktop;
      return `${basePath}${filename}`;
    });
  }, [isMobile]);

  // Перемещение слайдера
  const moveSlider = useCallback(
    (direction: number) => {
      if (!sliderRef.current || isBlocked) return;

      setIsBlocked(true);

      const trackLength = config.totalUniqueSlides * slideWidth;
      let offset = parseFloat(sliderRef.current.style.transform.replace(/[^0-9\\-]/g, "") || "0");

      offset -= direction * slideWidth;

      sliderRef.current.style.transition = `${config.transitionTime}s`;
      sliderRef.current.style.transform = `translateX(${offset}px)`;

      setTimeout(() => {
        if (offset <= -trackLength) {
          sliderRef.current!.style.transition = "none";
          sliderRef.current!.style.transform = `translateX(${-slideWidth}px)`;
        } else if (offset > -slideWidth) {
          sliderRef.current!.style.transition = "none";
          sliderRef.current!.style.transform = `translateX(${-trackLength + slideWidth}px)`;
        }
        setIsBlocked(false);
      }, config.transitionTime * 1000);
    },
    [slideWidth, config, isBlocked]
  );

  // Обработчики кнопок
  useEffect(() => {
    const leftBtn = btnLeftRef.current;
    const rightBtn = btnRightRef.current;

    if (!leftBtn || !rightBtn) return;

    const clickLeft = () => moveSlider(1);
    const clickRight = () => moveSlider(-1);

    leftBtn.addEventListener("click", clickLeft);
    rightBtn.addEventListener("click", clickRight);

    return () => {
      leftBtn.removeEventListener("click", clickLeft);
      rightBtn.removeEventListener("click", clickRight);
    };
  }, [moveSlider]);

  // Инициализация начального положения
  useEffect(() => {
    if (sliderRef.current && slideWidth) {
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.transform = `translateX(${-slideWidth}px)`;
    }
  }, [slideWidth]);

  return (
    <div className={`container ${style["container-portfolio"]}`} id="portfolio">
      <div className="aside-line"></div>
      <div className={`content ${style["portfolio-content"]}`}>
        <div className={style["title-portfolio_block"]}>
          <h2>Наше портфолио</h2>
          <p>
            В данном портфолио вы сможете увидеть кейсы наших работ на 2025 - 2026 год
          </p>
          <Link href="/examples" key={0}>
            <Button
              styleButton={style["button-portfolio"]}
              fontButton={style["button-font_portfolio"]}
              nameButton="Полные версии сайтов"
            />
          </Link>
        </div>

        {/* Слайдер */}
        <div className={sliderStyle["slider-block"]}>
          <div className={sliderStyle["slider-portfolio_container"]} >
            <div ref={sliderRef} className={sliderStyle.slider}>
              {slideImages.map((src, index) => (
                <a href="/examples" key={index}>
                  <div key={index} className={sliderStyle.slide}>
                    <img src={src} alt={`Проект ${index}`} loading="lazy" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Кнопки */}
        <div className={sliderStyle["arrow-container"]}>
          <button
            ref={btnLeftRef}
            className={sliderStyle["arrow-circle"]}
            aria-label="Предыдущий слайд"
            disabled={isBlocked}
            style={{
              opacity: isBlocked ? 0.5 : 1,
              cursor: isBlocked ? "not-allowed" : "var(--cursor)",
            }}
          >
            <div className={sliderStyle.arrow}>
              <img src="/images/arrowleft.svg" alt="Назад" />
            </div>
          </button>
          <button
            ref={btnRightRef}
            className={sliderStyle["arrow-circle"]}
            aria-label="Следующий слайд"
            disabled={isBlocked}
            style={{
              opacity: isBlocked ? 0.5 : 1,
              cursor: isBlocked ? "not-allowed" : "var(--cursor)",
            }}
          >
            <div className={sliderStyle.arrow}>
              <img src="/images/arrowright.svg" alt="Вперёд" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};