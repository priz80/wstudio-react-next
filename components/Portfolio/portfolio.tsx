import Button from "@/Button/button";
import "@/Portfolio/portfolio.scss";
import "@/Portfolio/slider-portfolio.scss";
import { useEffect, useRef } from 'react';

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
    return innerWidth >= 1480
      ? { slideWidth: 671}
      : { slideWidth: 295};
  };

  // Обновление параметров слайдера
  const updateConfig = () => {
    const { slideWidth: width } = getBreakpointConfig();
    slideWidth = width;
  
    trackLength = config.totalUniqueSlides * slideWidth;
    offset = -slideWidth; // начальное смещение

    // Применяем без анимации
    if (sliderRef.current) {
      sliderRef.current.style.transition = '0s';
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
      sliderRef.current!.style.transition = '0s';
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
        console.log('Окно изменено. Конфиг обновлён.');
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    // Очистка
    return () => {
      window.removeEventListener('resize', handleResize);
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

    leftBtn.addEventListener('click', clickLeft);
    rightBtn.addEventListener('click', clickRight);

    return () => {
      leftBtn.removeEventListener('click', clickLeft);
      rightBtn.removeEventListener('click', clickRight);
    };
  }, []);

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
        <div className="slider-block">
          <div className="slider-portfolio_container">
            <div ref={sliderRef} className="slider">
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
          </div>
        </div>
        <div className="arrow-container">
          <button ref={btnLeftRef} className="arrow-circle" id="left" aria-label="Previous slide">
            <div className="arrow">
              <img src="./img/arrowleft.svg" alt="Previous" />
            </div>
          </button>
          <button ref={btnRightRef} className="arrow-circle" id="right" aria-label="Next slide">
            <div className="arrow">
              <img src="./img/arrowright.svg" alt="Next" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};