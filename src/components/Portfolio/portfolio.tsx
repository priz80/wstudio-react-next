import Button from "../Button/button";
import style from "./portfolio.module.scss";
import sliderStyle from "./slider-portfolio.module.scss";
import { useEffect, useRef } from "react";
import slide1Placeholder from "../../../public/images/slide1.png";

// Базовый путь — зависит от режима (production/local)
const basePath = process.env.NODE_ENV === 'production' 
  ? '/wstudio-react-next' 
  : '';

const slideImages = [
  `${basePath}/images/slide7.png`,
  `${basePath}/images/slide1.png`,
  `${basePath}/images/slide2.png`,
  `${basePath}/images/slide3.png`,
  `${basePath}/images/slide4.png`,
  `${basePath}/images/slide5.png`,
  `${basePath}/images/slide6.png`,
  `${basePath}/images/slide7.png`,
  `${basePath}/images/slide1.png`,
  `${basePath}/images/slide2.png`,
];


export const Portfolio = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const btnLeftRef = useRef<HTMLButtonElement>(null);
  const btnRightRef = useRef<HTMLButtonElement>(null);

  // Конфигурация
  const config = {
    totalUniqueSlides: 7,
    transitionTime: 0.7, // секунды
  };

  let slideWidth: number, step: number, trackLength: number, offset: number;
  let isAnimating = false;

  // Настройки под размер экрана
  const getBreakpointConfig = () => {
    const innerWidth = window.innerWidth;
    return innerWidth >= 1480 ? { slideWidth: 671 } : { slideWidth: 295 };
  };

  // Обновление параметров слайдера
  const updateConfig = () => {
    const { slideWidth: width } = getBreakpointConfig();
    slideWidth = width;

    trackLength = config.totalUniqueSlides * slideWidth;
    offset = -slideWidth; // начальное смещение

    // Применяем без анимации
    if (sliderRef.current) {
      sliderRef.current.style.transition = "0s";
      sliderRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  // Перемещение слайдера
  const moveSlider = (direction: number) => {
    if (isAnimating || !sliderRef.current) return;
    isAnimating = true;

    // direction: +1 ←, -1 →
    offset -= direction * slideWidth;

    // Анимация
    sliderRef.current.style.transition = `${config.transitionTime}s`;
    sliderRef.current.style.transform = `translateX(${offset}px)`;

    // Бесконечная прокрутка — коррекция после анимации
    const handleInfiniteScroll = () => {
      if (offset <= -trackLength) {
        // Сброс влево (после последнего уникального слайда)
        offset = 0; // возвращаемся к начальной видимой позиции
      } else if (offset >= 0) {
        // Сброс вправо (перед первым уникальным слайдом)
        offset = -trackLength;
      } else {
        return; // Не требуется коррекция
      }

      // Мгновенный переход без анимации
      sliderRef.current!.style.transition = "0s";
      sliderRef.current!.style.transform = `translateX(${offset}px)`;
    };

    // Ожидание окончания анимации
    setTimeout(() => {
      handleInfiniteScroll();
      isAnimating = false;
    }, config.transitionTime * 1000);
  };

  useEffect(() => {
    updateConfig();

    const handleResize = () => {
      clearTimeout((window as any).resizeTimeout);
      (window as any).resizeTimeout = setTimeout(() => {
        updateConfig();
        console.log("Окно изменено. Конфиг обновлён.");
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    // Очистка
    return () => {
      window.removeEventListener("resize", handleResize);
      if ((window as any).resizeTimeout) {
        clearTimeout((window as any).resizeTimeout);
      }
    };
  }, []);

  // Инициализация обработчиков кликов
  useEffect(() => {
    const leftBtn = btnLeftRef.current;
    const rightBtn = btnRightRef.current;
    const slider = sliderRef.current;

    if (!leftBtn || !rightBtn || !slider) return;

    const clickLeft = () => moveSlider(1);
    const clickRight = () => moveSlider(-1);

    leftBtn.addEventListener("click", clickLeft);
    rightBtn.addEventListener("click", clickRight);

    return () => {
      leftBtn.removeEventListener("click", clickLeft);
      rightBtn.removeEventListener("click", clickRight);
    };
  }, []);

  return (
    <div className={`container ${style["container-portfolio"]}`} id="portfolio">
      <div className="aside-line"></div>
      <div className={`content ${style["portfolio-content"]}`}>
        <div className={style["title-portfolio_block"]}>
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
              styleButton={style["button-portfolio"]}
              fontButton={style["button-font_portfolio"]}
              nameButton="Компьютерные версии"
            />
          </a>
        </div>
        <div className={sliderStyle["slider-block"]}>
          <div className={sliderStyle["slider-portfolio_container"]}>
            <div ref={sliderRef} className={sliderStyle.slider}>
              {slideImages.map((slide, index) => (
                <div
                  key={index}
                  className={sliderStyle.slide}
                >
                  <img src={slide} alt={`Slide ${index + 1}`} />
                  
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
          >
            <div className={sliderStyle.arrow}>
              <img src={`${basePath}/images/arrowleft.svg`} alt="Previous" />
            </div>
          </button>
          <button
            ref={btnRightRef}
            className={sliderStyle["arrow-circle"]}
            id="right"
            aria-label="Next slide"
          >
            <div className={sliderStyle.arrow}>
              <img src={`${basePath}/images/arrowleft.svg`} alt="Previous" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
