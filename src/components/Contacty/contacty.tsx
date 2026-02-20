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
            {/* <div className={styles["ball-circle"]}> */}
              <div className={styles.ball}>
                
                  {/* SVG content remains commented */}
                
              </div>
            {/* </div> */}
          </a>
          <a href="/" target="blank_">
            {/* <div className={styles["ball-circle"]}> */}
              <div className={styles.ball}>
                
                  <img src="/icons/max.svg" alt="" />
                
              </div>
            {/* </div> */}
          </a>
          <a href="https://t.me/Studio_WWW" target="blank_">
            {/* <div className={styles["ball-circle"]}> */}
              <div className={styles.ball}>
                
                  <img src="/icons/telegram.svg" alt="" />
                
              </div>
            {/* </div> */}
          </a>
          <a href="/" target="blank_">
            {/* <div className={styles["ball-circle"]}> */}
              <div className={styles.ball}>
                
                  <img src="/icons/vk.svg" alt="" />
                
              </div>
            {/* </div> */}
          </a>
          <a href="/">
            {/* <div className={styles["ball-circle"]}> */}
              <div className={styles.ball}>
                
                  <img src="/icons/gmail.svg" alt="" />
                
              </div>
            {/* </div> */}
          </a>
        </div>
      </div>
    </>
  );
};