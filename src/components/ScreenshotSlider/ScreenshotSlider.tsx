"use client"; // ← нужен, так как есть onClick, useState и т.д.

import { useState } from "react";
import styles from "./screenshot-slider.module.scss";
import Button from "../Button/button";

interface Project {
  title: string;
  url: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Сайт портфолио фрилансера",
    url: "https://portfolio.wstudio.tech",
    description: "Минималистичное портфолио с акцентом на проекты и навыки",
  },
  {
    title: "Сайт отеля «Calypso»",
    url: "https://calypso.calypso-hotel.ru",
    description: "Современный сайт с бронированием номеров и галереей",
  },
  {
    title: "Сайт IT-компании",
    url: "https://drupalsite.wstudio.tech",
    description: "Корпоративный сайт с кейсами и услугами",
  },
  {
    title: "Web-сервис «Pagelist»",
    url: "https://pagelist.ru",
    description: "Сервис онлайн конструктора сайтов",
  },
];

export default function ScreenshotSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className={styles.sliderContainer}>
      {/* Левая стрелка */}
      <button
        className={`${styles.navButton} ${styles.left}`}
        onClick={prevSlide}
        aria-label="Предыдущий слайд"
      >
        <img src="/images/arrowleft.svg" alt="Назад" />
      </button>

      <div className={styles.slider}>
        <div
          className={styles.slide}
          /* onClick={() =>
            window.open(currentProject.url, "_blank", "noopener,noreferrer")
          } */
          /* role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") nextSlide();
          }} */
          aria-label={`Посмотреть сайт: ${currentProject.title}`}
        >
          <iframe
            src={currentProject.url}
            className={styles.iframeSite}
            loading="lazy"
            // Отключаем прокрутку
            sandbox="allow-same-origin allow-scripts"
            scrolling="no"
          />
          <div className={styles.info}>
            <h5>{currentProject.title}</h5>
            <p>{currentProject.description}</p>
            <a onClick={() =>
            window.open(currentProject.url, "_blank", "noopener,noreferrer")
          }><Button styleButton={styles.buttonSite} nameButton={`перейти на сайт: ${currentProject.title}`}/></a>
            <a href="/"><Button styleButton={styles.buttonSlider} nameButton="вернуться на главную"/></a>
          </div>
          
        </div>

        {/* Точки навигации */}
          <div className={styles.dots}>
            {projects.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                role="button"
                tabIndex={0}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
      </div>    


      {/* Правая стрелка */}
      <button
        className={`${styles.navButton} ${styles.right}`}
        onClick={nextSlide}
        aria-label="Следующий слайд"
      >
        <img src="/images/arrowright.svg" alt="Вперёд" />
      </button>
    </div>
  );
}