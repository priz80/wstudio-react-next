import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles["footer-block"]}>
      <p className={styles.copyright}>
        © 2022–2026, WEB Studio - Разработка сайтов для предприятий
        <br />
        <br />
      </p>
      <a href="Link /">
        <p className={styles.policy}>
          Политика сайта и обработка персональных данных
        </p>
      </a>
      <a
        href="https://fastvps.ru/c_4295ba5d6a21fdd9e4d2b8a7fad98400"
        target="_blank"
      >
        <p className={styles.policy}>Сайт работает на быстром VPS/VDS хостинге от FASTVPS</p>
      </a>
    </div>
  );
};
