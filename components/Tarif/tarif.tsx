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
      price: 'от 60.000Р',
      time: 'От 15 дней',
      desc: 'Сайт-каталог – это полноценный веб-ресурс, в котором потребители могут ознакомиться с товарами или услугами компании. Являясь удобным инструментом продаж, сайт-каталог может повысить доходность бизнеса и упростить задачу по предоставлению ассортимента целевой аудитории.',
    },
    {
      title: 'Сайт "Визитка"',
      price: 'от 30.000Р',
      time: 'От 5 дней',
      desc: 'Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.',
    },
    {
      title: 'Сайт "Интернет магазин"',
      price: 'от 75.000Р',
      time: 'От 30 дней',
      desc: 'Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.',
    },
    {
      title: 'Сайт "Landing page"',
      price: 'от 25.000Р',
      time: 'От 17 дней',
      desc: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Мы умеем создавать веб-ресурсы, полностью готовые к наплыву лавины посетителей. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.',
    },
    {
      title: 'Сайт "Корп.сайт"',
      price: 'от 60.000Р',
      time: 'От 17 дней',
      desc: 'Корпоративный сайт – это крупномасштабный портал, который создается не только для контакта организации с клиентами, но и для обмена информацией, мнениями, идеями между сотрудниками и руководством. Электронный ресурс такого типа – лицо компании, солидный «костюм», вызывающий у партнёров и контрагентов уважение и интерес.',
    },
    {
      title: 'Сайт "Индивидуальный"',
      price: 'от ?Р',
      time: 'От ? дней',
      desc: 'Мы готовы выслушать вашу идею, и выполнить задание. Цена проекта будет складываться от ее технического задания и сроков выполнения.',
    },
    {
      title: 'Сайт "Компании"',
      price: 'от 35.000Р',
      time: 'От 7 дней',
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
              transition: "transform 0s ease",
              width: `${totalSlides * slideWidth}px`,
            }}
          >
            {/* Генерация слайдов по данным */}
            {slides.map((slide, index) => (
              <div className="slide-tarif" key={index}>
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