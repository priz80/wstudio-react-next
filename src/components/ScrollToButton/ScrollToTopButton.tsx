// src/components/ScrollToTopButton/ScrollToTopButton.tsx
import { useState, useEffect } from "react";
import style from "./scroll-to-top.module.scss";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Показывать кнопку, когда пролистали > 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${style["scroll-to-top"]} ${isVisible ? style.show : ""}`}
      onClick={scrollToTop}
      aria-label="Наверх"
      title="Наверх"
    >
      <img className={style.arrowUp} src="images/arrowleft.svg" alt="" />
    </button>
  );
};