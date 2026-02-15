import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles['footer-block']}>
        <p className={styles.copyright}>
          © 2022–2026, WEB Studio - Разработка сайтов для предприятий
          <br />
          <br />
        </p>
      <a href="/">
        <p className={styles.policy}>Политика сайта и обработка персональных данных</p>
      </a>
    </div>
  );
};
