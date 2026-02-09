import Button from "../Button/button";
import "./forma.scss";

export const Forma = () => {
  return (
    <div className="container forma-container" id="forma">
      <div className="content">
        <div className="title-forma">
          <h5>Оставь заявку</h5>
        </div>
        <form action="" className="foma-block">
          {/* Имя */}
          <div className="forma-item-wrapper">
            <label htmlFor="name" className="input-label">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="forma-item"
              placeholder="Введите имя"
              required
              autoComplete="name" // ✅ Теперь правильно: camelCase
            />
          </div>

          {/* Телефон */}
          <div className="forma-item-wrapper">
            <label htmlFor="phone" className="input-label">
              Номер телефона
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="forma-item"
              placeholder="Введите номер"
              autoComplete="tel" // ✅
            />
          </div>

          {/* Бюджет */}
          <div className="forma-item-wrapper">
            <label htmlFor="budget" className="input-label">
              Бюджет на сайт
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              className="forma-item"
              placeholder="Например, от 50 000 ₽"
              autoComplete="off" // ✅
            />
          </div>

          {/* Email */}
          <div className="forma-item-wrapper">
            <label htmlFor="email" className="input-label">
              E-MAIL адрес
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="forma-item"
              placeholder="example@mail.com"
              required
              autoComplete="email" // ✅
            />
          </div>

          {/* Комментарий */}
          <div className="forma-item-wrapper">
            <label htmlFor="comment" className="input-label">
              Комментарий (по желанию)
            </label>
            <input
              type="text"
              id="comment"
              name="comment"
              className="forma-item"
              placeholder="Опишите ваш проект"
              autoComplete="off" // ✅
            />
          </div>
          <div className="forma-item_button">
            <a href="/">
              <Button
                styleButton="button-forma"
                fontButton="button-font_forma"
                nameButton="Отправить"
              />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
