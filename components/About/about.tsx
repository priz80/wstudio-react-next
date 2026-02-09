import Button from "../Button/button";
import "./about.scss";

export const About = () => {
  return (
    <div className="container container-about" id="about">
      <div className="aside-line"></div>
      <div className="content">
        <div className="about-title_block">
          <div className="about-title">
            <h4>Причины сотрудничать с нами</h4>
            <p>
              <br />
              Пока конкуренты говорят о том, что они лучшие - мы это доказываем
              делом.
              <span className="hide-span_about">
                <br />
                <br />
                Вы можете ознакомиться с информацией о нас и посмотреть наше
                портфолио
                <br /><br /><br />
              </span>
            </p>

            <div className="button-about_block">
              <a href="#portfolio"><Button styleButton="button-about" fontButton="button-font_about" nameButton="Портфолио" /></a>
              <div className="button-about_shadow"></div>
            </div>
          </div>
          <div className="about-tile"></div>
        </div>
        <div className="about-tile_block">
          <div className="about-tile"></div>
          <div className="about-tile"></div>
          <div className="about-tile"></div>
        </div>
      </div>
    </div>
  );
};
