import Button from "../Button/button";
import style from "./portfolio.module.scss";
import sliderStyle from "./slider-portfolio.module.scss";
import { useEffect, useRef, useState, useMemo } from "react";

export const Portfolio = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const btnLeftRef = useRef<HTMLButtonElement>(null);
  const btnRightRef = useRef<HTMLButtonElement>(null);

  // Состояние для пути к изображениям
  const [imagePath, setImagePath] = useState(() => {
  if (typeof window === "undefined") return "images/"; // fallback
  return window.innerWidth >= 1480 ? "images/" : "smallimages/";
});
  const [dimensions, setDimensions] = useState({ width: 0, slideWidth: 0 });

  // 🔁 Блокировка кликов во время анимации
  const [isBlocked, setIsBlocked] = useState(false);

  // Конфигурация
  const config = useMemo(
    () => ({
      totalUniqueSlides: 8, // ✅ Исправлено: было 8, но слайдов 7
      transitionTime: 0.7,
    }),
    []
  );

  // Определяем размеры и путь
  const updateDimensions = useCallback(() => {
  const innerWidth = window.innerWidth;
  const isDesktop = innerWidth >= 1480;
  const slideWidth = isDesktop ? 671 : 295;
  const path = isDesktop ? "images/" : "smallimages/";

  setDimensions({ width: innerWidth, slideWidth });
  setImagePath(path);
}, []);

  // Инициализация и ресайз
  useEffect(() => {
    if (typeof window !== "undefined") {
      updateDimensions();

      const handleResize = () => {
        clearTimeout((window as any).resizeTimeout);
        (window as any).resizeTimeout = setTimeout(updateDimensions, 100);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        if ((window as any).resizeTimeout) {
          clearTimeout((window as any).resizeTimeout);
        }
      };
    }
  }, [updateDimensions]);

  // Генерация путей к слайдам (зависит от imagePath)
  const slideImages = useMemo(() => {
    return Array.from({ length: config.totalUniqueSlides + 2 }, (_, i) => {
      const num = i === 0 ? 7 : i <= 7 ? i : i - 7;
      return `${imagePath}slide${num}.png`;
    });
  }, [imagePath, config.totalUniqueSlides]);

  // Перемещение слайдера
  const moveSlider = useCallback(
    (direction: number) => {
      // 🔒 Проверяем, не заблокировано ли переключение
      if (!sliderRef.current || !dimensions.slideWidth || isBlocked) return;

      // 🔒 Блокируем новые клики
      setIsBlocked(true);

      const trackLength = config.totalUniqueSlides * dimensions.slideWidth;
      let offset = parseFloat(sliderRef.current.style.transform.replace(/[^0-9\\-]/g, "") || "0");

      // direction: -1 → вправо, +1 ← влево
      offset -= direction * dimensions.slideWidth;

      sliderRef.current.style.transition = `${config.transitionTime}s`;
      sliderRef.current.style.transform = `translateX(${offset}px)`;

      // Коррекция для бесконечного скролла
      setTimeout(() => {
        if (offset <= -trackLength) {
          sliderRef.current!.style.transition = "none";
          sliderRef.current!.style.transform = `translateX(${-dimensions.slideWidth}px)`;
        } else if (offset > -dimensions.slideWidth) {
          sliderRef.current!.style.transition = "none";
          sliderRef.current!.style.transform = `translateX(${-trackLength + dimensions.slideWidth}px)`;
        }

        // ✅ Разблокируем после завершения анимации
        setIsBlocked(false);
      }, config.transitionTime * 1000);
    },
    [dimensions.slideWidth, config, isBlocked]
  );

  // Обработчики кликов
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

  // Установка начального смещения
  useEffect(() => {
    if (sliderRef.current && dimensions.slideWidth) {
      sliderRef.current.style.transition = "none"; // Без анимации при старте
      sliderRef.current.style.transform = `translateX(${-dimensions.slideWidth}px)`;
    }
  }, [dimensions.slideWidth]);

  return (
    <div className={`container ${style["container-portfolio"]}`} id="portfolio">
      <div className="aside-line"></div>
      <div className={`content ${style["portfolio-content"]}`}>
        <div className={style["title-portfolio_block"]}>
          <h2>Наше портфолио</h2>
          <p>
            <br />
            В данном портфолио вы сможете увидеть кейсы наших работ на 2025 - 2026 год
            <br />
            <br />
            <br />
          </p>
          <a href="/">
            <Button
              styleButton={style["button-portfolio"]}
              fontButton={style["button-font_portfolio"]}
              nameButton="Компьютерные версии"
            />
          </a>
        </div>

        <div className={sliderStyle["slider-block"]}>
          <div className={sliderStyle["slider-portfolio_container"]}>
            <div ref={sliderRef} className={sliderStyle.slider}>
              {slideImages.map((src, index) => (
                <div key={index} className={sliderStyle.slide}>
                  <img src={src} alt={`Slide ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={sliderStyle["arrow-container"]}>
          <button
            ref={btnLeftRef}
            className={sliderStyle["arrow-circle"]}
            id="left"
            aria-label="Previous slide"
            disabled={isBlocked} // 👉 Кнопки становятся неактивными
            style={{ opacity: isBlocked ? 0.5 : 1, cursor: isBlocked ? "not-allowed" : "pointer" }}
          >
            <div className={sliderStyle.arrow}>
              <img src={`${imagePath}arrowleft.svg`} alt="Previous" />
            </div>
          </button>
          <button
            ref={btnRightRef}
            className={sliderStyle["arrow-circle"]}
            id="right"
            aria-label="Next slide"
            disabled={isBlocked}
            style={{ opacity: isBlocked ? 0.5 : 1, cursor: isBlocked ? "not-allowed" : "pointer" }}
          >
            <div className={sliderStyle.arrow}>
              <img src={`${imagePath}arrowright.svg`} alt="Next" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

// Вспомогательная функция
const useCallback = (...args: any[]) => require("react").useCallback(...args);