import Button from "../Button/button";
import styles from "./forma.module.scss";
import Image from 'next/image';

export const Forma = () => {
  return (
    <div className={styles["forma-container"]} id="forma">
      <div className="content">
        <div className={styles["title-forma"]}>
          <h5>Оставь заявку</h5>
          <form action="" className={styles["foma-block"]}>
            {/* Имя */}
            <div className={styles["forma-item-wrapper"]}>
              <label htmlFor="name" className={styles["input-label"]}>
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
            <div className={styles["forma-item-wrapper"]}>
              <label htmlFor="phone" className={styles["input-label"]}>
                Номер телефона
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={styles["forma-item"]}
                placeholder="Введите номер"
                autoComplete="tel" // ✅
              />
            </div>

            {/* Бюджет */}
            <div className={styles["forma-item-wrapper"]}>
              <label htmlFor="budget" className={styles["input-label"]}>
                Бюджет на сайт
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                className={styles["forma-item"]}
                placeholder="Например, от 50 000 ₽"
                autoComplete="off" // ✅
              />
            </div>

            {/* Email */}
            <div className={styles["forma-item-wrapper"]}>
              <label htmlFor="email" className={styles["input-label"]}>
                E-MAIL адрес
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles["forma-item"]}
                placeholder="example@mail.com"
                required
                autoComplete="email" // ✅
              />
            </div>

            {/* Комментарий */}
            <div className={styles["forma-item-wrapper"]}>
              <label htmlFor="comment" className={styles["input-label"]}>
                Комментарий (по желанию)
              </label>
              <input
                type="text"
                id="comment"
                name="comment"
                className={styles["forma-item"]}
                placeholder="Опишите ваш проект"
                autoComplete="off" // ✅
              />
            </div>
            <div className={styles["forma-item_button"]}>
              <a href="/">
                <Button
                  styleButton={styles["button-forma"]}
                  fontButton={styles["button-font_forma"]}
                  nameButton="Отправить"
                />
              </a>
            </div>
          </form>
        </div>
        
          <div className={styles.imagesBlock}>
            <div className={`${styles.iphoneButton} ${styles.leftButton}`}>
                <div className={styles.iconGroup}>
                  <div className={styles.iconElips}>
                    <div>
                      <Image src="/images/Group.svg" alt="Web icon"  width={24} 
  height={24} />
                    </div>
                  </div>
                </div>
                <p>
                  Уведомление!
                  <span>
                    В скорейшем времени вам перезвонят
                  </span>
                </p>
            </div>
            <div className={styles.imagesIphone}></div>
            <div className={`${styles.iphoneButton} ${styles.rightButton}`}>
                <div className={styles.iconGroup}>
                  <div className={styles.iconElipse}>
                    <div>
                      <Image src="/images/web.svg" alt="Web icon"  width={24} 
  height={24} />
                    </div>
                  </div>
                </div>
                <p>
                  Работа закончена!
                  <span>
                    Мы закончили работу над вашим сайтом
                  </span>
                </p>
            </div>
          </div>
          
      </div>
    </div>
  );
};
