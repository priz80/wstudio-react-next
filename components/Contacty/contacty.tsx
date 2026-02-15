import styles from "./contacty.module.scss";

export const Contacty = () => {
  return (
    <>
      <div className={styles.container} id="contacty">
        <div className={styles.content}>
          <div className={styles["title-contacty"]}>
            <h6>Контакты</h6>
          </div>
        </div>
        <div className={styles["ball-block_contacty"]}>
          <a href="/">
            <div className={styles["ball-circle"]}>
              <div className={styles.ball}>
                <div className={styles["ball-icon"]}>
                  {/* SVG content remains commented */}
                </div>
              </div>
            </div>
          </a>
          <a href="/">
            <div className={styles["ball-circle"]}>
              <div className={styles.ball}>
                <div className={styles["ball-icon"]}>
                  {/* SVG content remains commented */}
                </div>
              </div>
            </div>
          </a>
          <a href="/">
            <div className={styles["ball-circle"]}>
              <div className={styles.ball}>
                <div className={styles["ball-icon"]}>
                  {/* SVG content remains commented */}
                </div>
              </div>
            </div>
          </a>
          <a href="/">
            <div className={styles["ball-circle"]}>
              <div className={styles.ball}>
                <div className={styles["ball-icon"]}>
                  {/* SVG content remains commented */}
                </div>
              </div>
            </div>
          </a>
          <a href="/">
            <div className={styles["ball-circle"]}>
              <div className={styles.ball}>
                <div className={styles["ball-icon"]}>
                  {/* SVG content remains commented */}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};