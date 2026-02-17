import style from "./tarif.module.scss";
import styleSlider from "./slider-tarif.module.scss";
import { useState, useRef, useEffect } from "react";
import Button from "../Button/button";

export const Tarif = () => {
  const [currentItem, setCurrentItem] = useState(0); // Индекс текущего элемента
  const items = [
    {
      title: 'Сайт\n "Визитка"',
      price: "От 30.000₽",
      time: "От 5 дней",
      description:
        "Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.",
    },
    {
      title: 'Сайт\n "Lending Page"',
      price: "От 25.000₽",
      time: "От 17 дней",
      description:
        "Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Мы умеем создавать веб-ресурсы, полностью готовые к наплыву лавины посетителей. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.",
    },
    {
      title: 'Сайт\n "Специалиста"',
      price: "От 30.000₽",
      time: "От 7 дней",
      description:
        "Сайт специалиста — это персональный веб-ресурс (визитка, портфолио или личный бренд), предназначенный для презентации профессиональных навыков, услуг и опыта работы одного человека, например, психолога, дизайнера или консультанта. Он помогает сформировать репутацию, привлечь клиентов и демонстрирует экспертность.",
    },
    {
      title: 'Сайт\n "Компании"',
      price: "От 60.000₽",
      time: "От 17 дней",
      description:
        "Корпоративный сайт – это крупномасштабный портал, который создается не только для контакта организации с клиентами, но и для обмена информацией, мнениями, идеями между сотрудниками и руководством. Электронный ресурс такого типа – лицо компании, солидный «костюм», вызывающий у партнёров и контрагентов уважение и интерес.",
    },
    {
      title: 'Сайт\n "Интернет магазин"',
      price: "От 75.000₽",
      time: "От 30 дней",
      description:
        "Сайт интернет-магазин — это веб-площадка для дистанционной продажи товаров или услуг, позволяет пользователям просматривать каталог, оформлять заказы, выбирать способы доставки и оплачивать покупки онлайн. Он работает круглосуточно, и включает «корзину», личный кабинет и систему управления заказами.",
    },
    {
      title: 'Сайт\n "Каталог"',
      price: "От 60.000₽",
      time: "От 15 дней",
      description:
        "Сайт-каталог – это полноценный веб-ресурс, в котором потребители могут ознакомиться с товарами или услугами компании. Являясь удобным инструментом продаж, сайт-каталог может повысить доходность бизнеса и упростить задачу по предоставлению ассортимента целевой аудитории.",
    },
    {
      title: 'Сайт\n "Индивидуальный"',
      price: "От ? ₽",
      time: "От ? дней",
      description:
        "Мы готовы выслушать вашу идею, и выполнить задание. Цена проекта будет складываться от ее технического задания и сроков выполнения.",
    },
  ]; // Массив данных

  const totalItems = items.length;

  // Обработчики кликов
  const handleRightClick = () => {
    setCurrentItem((prev) => (prev + 1) % items.length);
  };

  const handleLeftClick = () => {
    setCurrentItem((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  // Определяем индексы для текущего, следующего и предыдущего элементов
  const nextIndex = (currentItem + 1) % items.length;
  const prevIndex = currentItem === 0 ? items.length - 1 : currentItem - 1;

  // Создаем массив элементов с их позициями
  const carouselItems = [
    { position: "left", index: prevIndex },
    { position: "main", index: currentItem },
    { position: "right", index: nextIndex },
  ];

  return (
    <div className={`container ${style["container-tarif"]}`} id="tarif">
      <div className="aside-line"></div>
      <div className={`'content' ${style["tarif-contant"]}`}>
        <div className={style["title-tarif"]}>
          <h2>Тарифы</h2>
        </div>

        {/* Контейнер слайдера */}
        <div className={styleSlider["slider-tarif_container"]}>
          <div className={styleSlider.carousel}>
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`${styleSlider["carousel__item"]} ${styleSlider[`carousel__item--${item.position}`]}`}
              >
                <div className={styleSlider["carousel__text"]}>
                  <div className={styleSlider["text-block"]}>
                    <h4 className={styleSlider.title}>
                      {items[item.index].title}
                    </h4>
                    <p className={styleSlider.titlep}>{items[item.index].description}</p>
                  </div>
                  <div className={styleSlider["price-block"]}>
                    <div className={styleSlider.price}>
                      <p className={styleSlider.pricep}>{items[item.index].price}</p>
                      <span>{items[item.index].time}</span>
                    </div>
                    <a href="/">
                      <Button
                        styleButton={styleSlider["button"]}
                        fontButton={styleSlider["style-text"]}
                        nameButton={
                          <>
                            Подробнее <img src="images/arr.svg" alt="" />
                          </>
                        }
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Стрелки */}
        <div className={styleSlider["carousel__btns"]}>
          <button
            className={styleSlider["carousel__btn"]}
            onClick={handleLeftClick}
          >
            <div className={styleSlider.ball}>
              <img src="images/arrowleft.svg" alt="" />
            </div>
          </button>
          <button
            className={styleSlider["carousel__btn"]}
            onClick={handleRightClick}
          >
            <div className={styleSlider.ball}>
              <img src="images/arrowright.svg" alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
