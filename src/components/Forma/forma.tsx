import Button from "../Button/button";
import styles from "./forma.module.scss";

export const Forma = () => {
  return (
    <div className={`container ${styles["forma-container"]}`} id="forma">
      <div className="content">
        <div className={styles["title-forma"]}>
          <h5>Оставь заявку</h5>
        </div>
        <form action="" className={styles['foma-block']}>
          {/* Имя */}
          <div className={styles['forma-item-wrapper']}>
            <label htmlFor="name" className={styles['input-label']}>
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles["forma-item"]}
              placeholder="Введите имя"
              required
              autoComplete="name" // ✅ Теперь правильно: camelCase
            />
          </div>

          {/* Телефон */}
          <div className={styles['forma-item-wrapper']}>
            <label htmlFor="phone" className={styles['input-label']}>
              Номер телефона
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles['forma-item']}
              placeholder="Введите номер"
              autoComplete="tel" // ✅
            />
          </div>

          {/* Бюджет */}
          <div className={styles['forma-item-wrapper']}>
            <label htmlFor="budget" className={styles['input-label']}>
              Бюджет на сайт
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              className={styles['forma-item']}
              placeholder="Например, от 50 000 ₽"
              autoComplete="off" // ✅
            />
          </div>

          {/* Email */}
          <div className={styles['forma-item-wrapper']}>
            <label htmlFor="email" className={styles['input-label']}>
              E-MAIL адрес
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles['forma-item']}
              placeholder="example@mail.com"
              required
              autoComplete="email" // ✅
            />
          </div>

          {/* Комментарий */}
          <div className={styles['forma-item-wrapper']}>
            <label htmlFor="comment" className={styles['input-label']}>
              Комментарий (по желанию)
            </label>
            <input
              type="text"
              id="comment"
              name="comment"
              className={styles['forma-item']}
              placeholder="Опишите ваш проект"
              autoComplete="off" // ✅
            />
          </div>
          <div className={styles['forma-item_button']}>
            <a href="/">
              <Button
                styleButton={styles['button-forma']}
                fontButton={styles['button-font_forma']}
                nameButton="Отправить"
              />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
