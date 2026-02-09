import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer-block">
        <p className="copyright">
          © 2022–2026, WEB Studio - Разработка сайтов для предприятий
          <br />
          <br />
        </p>
      <a href="/">
        <p className="policy">Политика сайта и обработка персональных данных</p>
      </a>
    </div>
  );
};
