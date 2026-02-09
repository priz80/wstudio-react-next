import "./tarif.scss";
import "./slider-tarif.scss";
import { useState, useRef, useEffect } from "react";
import Button from "../Button/button";

export const Tarif = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const totalSlides = 7; // Обновлено: теперь 7 тарифов
  const slideWidth = 434; // ширина одного слайда + gap
  const visibleSlides = 3;

  // Данные для каждого слайда
  const slides = [
    {
      title: 'Сайт "Каталог"',
      price: 'от 10.000Р',
      time: 'От 15 дней',
      desc: 'Сайт-каталог – это полноценный веб-ресурс, в котором потребители могут ознакомиться с товарами или услугами компании. Являясь удобным инструментом продаж, сайт-каталог может повысить доходность бизнеса и упростить задачу по предоставлению ассортимента целевой аудитории.',
    },
    {
      title: 'Сайт "Визитка"',
      price: 'от 5.000Р',
      time: 'От 7 дней',
      desc: 'Сайт-визитка — это лаконичный ресурс, представляющий компанию, услугу или специалиста. Идеально подходит для старта онлайн-присутствия с минимальными вложениями.',
    },
    {
      title: 'Сайт "Интернет магазин"',
      price: 'от 25.000Р',
      time: 'От 30 дней',
      desc: 'Полноценный интернет-магазин с корзиной, каталогом, оплатой и админкой. Подходит для масштабирования бизнеса и автоматизации продаж.',
    },
    {
      title: 'Сайт "Landing page"',
      price: 'от 8.000Р',
      time: 'От 10 дней',
      desc: 'Одностраничный сайт для рекламных кампаний, презентаций продукта или сбора лидов. Высокая конверсия и фокус на действии пользователя.',
    },
    {
      title: 'Сайт "Корп.сайт"',
      price: 'от 20.000Р',
      time: 'От 25 дней',
      desc: 'Корпоративный сайт с несколькими разделами, новостями, командой и документами. Отражает статус компании и используется для B2B-коммуникаций.',
    },
    {
      title: 'Сайт "Индивидуальный"',
      price: 'от 50.000Р',
      time: 'От 45 дней',
      desc: 'Уникальный сайт под ключ с нестандартным дизайном и функционалом. Полная кастомизация под цели бизнеса и целевую аудиторию.',
    },
    {
      title: 'Сайт "Компании"',
      price: 'от 15.000Р',
      time: 'От 20 дней',
      desc: 'Профессиональный сайт для компаний, который сочетает информационные блоки, услуги, портфолио и форму обратной связи. Подходит для среднего бизнеса.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (totalSlides - visibleSlides + 1));
  };

  const prevSlide = () => {
    const maxIndex = totalSlides - visibleSlides;
    setCurrentIndex((prev) => (prev - 1 + maxIndex + 1) % (maxIndex + 1));
  };

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

        <div className="slider-tarif_container">
          <div
            ref={sliderRef}
            className="slider-tarif"
            style={{
              display: "flex",
              transition: "transform 0.5s ease",
              width: `${totalSlides * slideWidth}px`,
            }}
          >
            {/* Генерация слайдов по данным */}
            {slides.map((slide, index) => (
              <div className="slide-tarif" key={index}>
                <div className="slide-text_block">
                  <p className="slide-price_title">{slide.title}</p>
                  <p className="slide-price_subtitle">{slide.desc}</p>
                  <div className="slide-button_block">
                    <div className="slide-price">
                      <p className="price">{slide.price}</p>
                      <p className="time">{slide.time}</p>
                    </div>
                    <a href="/"><Button styleButton="button-tarif" fontButton="font-button_tarif" nameButton="Подробнее"/></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
    </div>
  );
};