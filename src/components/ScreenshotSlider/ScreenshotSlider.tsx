"use client";

import { useState } from "react";
import styles from "./screenshot-slider.module.scss";

interface Project {
  title: string;
  imageSrc: string;
  url: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Сайт портфолио фрилансера",
    imageSrc: "/screenshots/portfolio.webp",
    url: "https://portfolio.wstudio.tech",
    description: "Минималистичное портфолио с акцентом на проекты и навыки",
  },
  {
    title: "Сайт отеля «Calypso»",
    imageSrc: "/screenshots/calypso.webp",
    url: "https://calypso.calypso-hotel.ru",
    description: "Современный сайт с бронированием номеров и галереей",
  },
  {
    title: "Сайт IT-компании",
    imageSrc: "/screenshots/drupal.webp",
    url: "https://drupalsite.wstudio.tech",
    description: "Корпоративный сайт с кейсами и услугами",
  },
  {
    title: "Web-сервис «Pagelist»",
    imageSrc: "/screenshots/pagelist.webp",
    url: "https://pagelist.ru",
    description: "Инструмент для анализа веб-страниц и SEO",
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
    <div className={styles.slider}>
      {/* кнопка возврата на сайт */}
      <a href="/" className={styles.return}
      >
        <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
      </a>
      {/* Левая стрелка — внутри слайда */}
      <button
        className={`${styles.navButton} ${styles.prev}`}
        onClick={prevSlide}
        aria-label="Предыдущий слайд"
      >
        <img src="images/arrowleft.svg" alt="Назад" />
      </button>

      {/* Слайд */}
      <div
        className={styles.slide}
        onClick={() =>
          window.open(currentProject.url, "_blank", "noopener,noreferrer")
        }
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") nextSlide();
        }}
        aria-label={`Посмотреть сайт: ${currentProject.title}`}
      >
        
        <img
          src={currentProject.imageSrc}
          alt={`Скриншот сайта: ${currentProject.title}`}
          loading="lazy"
          className={styles.image}
        />
        <div className={styles.info}>
          <h5>{currentProject.title}</h5>
          <p>{currentProject.description}</p>
        </div>
      </div>

      {/* Правая стрелка — внутри слайда */}
      <button
        className={`${styles.navButton} ${styles.next}`}
        onClick={nextSlide}
        aria-label="Следующий слайд"
      >
        <img src="images/arrowright.svg" alt="Вперёд" />
      </button>

      {/* Индикаторы — внутри слайда */}
      <div className={styles.dots}>
        {projects.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => setCurrentIndex(index)}
            role="button"
            tabIndex={0}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
