import Button from "../Button/button";
import styles from "./forma.module.scss";
import Image from "next/image";
import { useState } from "react";

export const Forma = () => {
  const [modal, setModal] = useState<{
    show: boolean;
    title: string;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    title: "",
    message: "",
    type: "success",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // Сохраняем ссылку на форму

    const formData = new FormData(form);
    const data: Record<string, string> = {};
    for (const [key, value] of formData) {
      data[key] = String(value);
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log("Ответ от API:", res.status, res.statusText);

      let result;
      try {
        result = await res.json();
        console.log("JSON ответ:", result);
      } catch (err) {
        console.error("Не удалось распарсить JSON", err);
        throw new Error("Invalid JSON response");
      }

      if (res.ok) {
        setModal({
          show: true,
          title: "✅ Заявка отправлена!",
          message: "Спасибо!\nВ ближайшее время мы свяжемся с вами.",
          type: "success",
        });
        // Сбрасываем форму только если она ещё существует
        if (form) {
          form.reset();
        }
      } else {
        setModal({
          show: true,
          title: "❌ Ошибка",
          message: result.error || "Неизвестная ошибка",
          type: "error",
        });
      }
    } catch (err) {
      console.error("Ошибка отправки:", err);
      setModal({
        show: true,
        title: "❌ Ошибка сети",
        message: "Нет соединения или сервер вернул некорректный ответ.",
        type: "error",
      });
    }
  };

  const closeModal = () => {
    setModal((prev) => ({ ...prev, show: false }));
  };

  return (
    <>
      {/* Форма */}
      <div className={styles["forma-container"]} id="forma">
        <div className="content">
          <div className={styles["title-forma"]}>
            <h5>Оставь заявку</h5>
            <form onSubmit={handleSubmit} className={styles["foma-block"]}>
              {/* Имя */}
              <div className={styles["forma-item-wrapper"]}>
                <label htmlFor="fio" className={styles["input-label"]}>
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="fio"
                  name="fio"
                  className={styles["forma-item"]}
                  placeholder="Введите имя"
                  required
                  autoComplete="name"
                />
              </div>

              {/* Email */}
              <div className={styles["forma-item-wrapper"]}>
                <label htmlFor="email" className={styles["input-label"]}>
                  E-MAIL адрес *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles["forma-item"]}
                  placeholder="example@mail.com"
                  required
                  autoComplete="email"
                />
              </div>

              {/* Телефон */}
              <div className={styles["forma-item-wrapper"]}>
                <label htmlFor="phone" className={styles["input-label"]}>
                  Номер телефона (по желанию)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles["forma-item"]}
                  placeholder="Введите номер"
                  autoComplete="tel"
                />
              </div>

              {/* Telegram */}
              <div className={styles["forma-item-wrapper"]}>
                <label htmlFor="telegram" className={styles["input-label"]}>
                  Telegram (@username)
                </label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  className={styles["forma-item"]}
                  placeholder="@ivan_777"
                  autoComplete="off"
                />
              </div>

              {/* Бюджет */}
              <div className={styles["forma-item-wrapper"]}>
                <label htmlFor="summ" className={styles["input-label"]}>
                  Бюджет на сайт (если известен)
                </label>
                <input
                  type="text"
                  id="summ"
                  name="summ"
                  className={styles["forma-item"]}
                  placeholder="Например, от 50 000 ₽"
                  autoComplete="off"
                />
              </div>

              

              

              

              {/* Комментарий */}
              {/* <div className={styles["forma-item-wrapper"]}>
                <label htmlFor="description" className={styles["input-label"]}>
                  Комментарий (по желанию)
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className={styles["forma-item"]}
                  placeholder="Опишите ваш проект"
                  autoComplete="off"
                />
              </div> */}


              {/* Скрытое поле с темой */}
              <input
                type="hidden"
                name="_subject"
                value="Заявка с сайта StudioWeb!"
              />

              {/* Кнопка отправки */}
              <div className={styles["forma-item_button"]}>
                <Button
                  type="submit"
                  styleButton={styles["button-forma"]}
                  fontButton={styles["button-font_forma"]}
                  nameButton="Отправить"
                />
              </div>
            </form>
          </div>

          {/* Блок с изображениями */}
          <div className={styles.imagesBlock}>
            <div className={`${styles.iphoneButton} ${styles.leftButton}`}>
              <div className={styles.iconGroup}>
                <div className={styles.iconElips}>
                  <div>
                    <Image
                      src="/images/Group.svg"
                      alt="Web icon"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
              <p>
                Уведомление!
                <span> В скорейшем времени вам перезвонят </span>
              </p>
            </div>
            <div className={styles.imagesIphone}></div>
            <div className={`${styles.iphoneButton} ${styles.rightButton}`}>
              <div className={styles.iconGroup}>
                <div className={styles.iconElipse}>
                  <div>
                    <Image
                      src="/images/web.svg"
                      alt="Web icon"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
              <p>
                Работа закончена!
                <span> Мы закончили работу над вашим сайтом </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {modal.show && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={styles.modalTitle}>{modal.title}</h3>
            <p className={styles.modalMessage}>{modal.message}</p>
            <Button
              type="button"
              styleButton={styles["button-forma"]}
              fontButton={styles["button-font_forma"]}
              nameButton="Закрыть"
              onClick={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Forma;
