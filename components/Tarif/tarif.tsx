import "./tarif.scss";
import "./slider-tarif.scss";
import { useState, useRef, useEffect } from "react";
import Button from "../Button/button";

export const Tarif = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const totalSlides = 9;
  const visibleSlides = 3; // количество видимых слайдов

  // --- Динамическая ширина слайда (включая gap) ---
  const [slideWidth, setSlideWidth] = useState(372);

  const slides = [
    
    {
      title: 'Сайт "Каталог"',
      price: 'от 60.000Р',
      time: 'От 15 дней',
      desc: 'Сайт-каталог – это полноценный веб-ресурс, в котором потребители могут ознакомиться с товарами или услугами компании.',
    },
    {
      title: 'Сайт "Визитка"',
      price: 'от 30.000Р',
      time: 'От 5 дней',
      desc: 'Сайт-визитка — компактный веб-ресурс для старта бизнеса в интернете. Содержит информацию о компании и контакты.',
    },
    {
      title: 'Сайт "Интернет магазин"',
      price: 'от 75.000Р',
      time: 'От 30 дней',
      desc: 'Полноценный интернет-магазин с корзиной, оплатой и админкой. Подходит для масштабирования бизнеса.',
    },
    {
      title: 'Сайт "Landing page"',
      price: 'от 25.000Р',
      time: 'От 17 дней',
      desc: 'Одностраничный сайт для рекламных кампаний и быстрых продаж. Высокая конверсия и фокус на действии.',
    },
    {
      title: 'Сайт "Корп.сайт"',
      price: 'от 60.000Р',
      time: 'От 17 дней',
      desc: 'Крупномасштабный портал для обмена информацией внутри компании и представления её партнёрам.',
    },
    {
      title: 'Сайт "Индивидуальный"',
      price: 'от ?Р',
      time: 'От ? дней',
      desc: 'Мы готовы выслушать вашу идею и выполнить проект под ключ. Цена зависит от технического задания.',
    },
    {
      title: 'Сайт "Компании"',
      price: 'от 35.000Р',
      time: 'От 7 дней',
      desc: 'Профессиональный сайт для компаний среднего бизнеса с портфолио, услугами и формой обратной связи.',
    },
    {
      title: 'Сайт "Каталог"',
      price: 'от 60.000Р',
      time: 'От 15 дней',
      desc: 'Сайт-каталог – это полноценный веб-ресурс, в котором потребители могут ознакомиться с товарами или услугами компании.',
    },
    {
      title: 'Сайт "Визитка"',
      price: 'от 30.000Р',
      time: 'От 5 дней',
      desc: 'Сайт-визитка — компактный веб-ресурс для старта бизнеса в интернете. Содержит информацию о компании и контакты.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (totalSlides - visibleSlides + 1));
  };

  const prevSlide = () => {
    const maxIndex = totalSlides - visibleSlides;
    setCurrentIndex((prev) => (prev - 1 + maxIndex + 1) % (maxIndex + 1));
  };

  // --- Определение ширины слайда в зависимости от размера экрана ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setSlideWidth(303); // 274 (ширина) + 27 (gap)
      } else {
        setSlideWidth(373); // 370 + 2 (gap, как было)
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Применение сдвига слайдера ---
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  }, [currentIndex, slideWidth]);

  return (
    <div className="container container-tarif" id="tarif">
      <div className="aside-line"></div>
      <div className="content tarif-contant">
        <div className="title-tarif">
          <h4>Тарифы</h4>
        </div>
      </div>

      {/* Контейнер слайдера */}
      <div className="slider-tarif_container">
        <div
          ref={sliderRef}
          className="slider-tarif"
          style={{
            display: "flex",
            transition: "transform 0s ease", // плавная анимация
          }}
        >
          {slides.map((slide, index) => {
            const isCenter = index === currentIndex + 1;
            const isVisible = index >= currentIndex && index < currentIndex + visibleSlides;

            return (
              <div
                className={`slide-tarif ${isVisible ? "visible" : ""} ${isCenter ? "center" : ""}`}
                key={index}
              >
                <div className="slide-text_block">
                  <div>
                    <p className="slide-price_title">{slide.title}</p>
                    <p className="slide-price_subtitle">{slide.desc}</p>
                  </div>
                  <div className="slide-button_block">
                    <div className="slide-price">
                      <p className="price">{slide.price}</p>
                      <p className="time">{slide.time}</p>
                    </div>
                    <a href="/">
                      <Button
                        styleButton="button-tarif"
                        fontButton="font-button_tarif"
                        nameButton="Подробнее"
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Стрелки */}
      <div className="arrow-tarif_container">
        <div className="arrow-tarif_circle" onClick={prevSlide}>
          <div className="arrow-tarif" id="left">
            <img src="./img/arrowleft.svg" alt="Previous" />
          </div>
        </div>
        <div className="arrow-tarif_circle" onClick={nextSlide}>
          <div className="arrow-tarif" id="right">
            <img src="./img/arrowright.svg" alt="Next" />
          </div>
        </div>
      </div>
    </div>
  );
};