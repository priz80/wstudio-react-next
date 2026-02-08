import Button from "../../../app/button";
import "./about.module.scss";


export const About = () => {
  return (
    <div className="container container-about"  id="about">
        <div className="aside-line"></div>
      <div className="content">
        <div className="about-title_block">
          <div className="about-title">
            <h4>Причины сотрудничать с нами</h4>
            <p>
              Пока конкуренты говорят о том, что они лучшие - мы это доказываем
              делом.
              <span className="hide-span_about">
                <br/><br/>Вы можете ознакомиться с информацией о нас и посмотреть наше
                портфолио
              </span>
            </p>

            <Button sizeButton="button-portfolio" titleButton="Портфолио" />
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
