import styles from "./contacty.module.scss";
import Image from 'next/image';

export const Contacty = () => {
  return (
    <div className="container">
      <div  id="contacty">
          <div className={styles["title-contacty"]}>
            <h6>Контакты</h6>
          </div>
        <div className={styles["ball-block_contacty"]}>
          <div className={styles.ballBlock}>
            <a href="Link /">
                <div className={styles.ball}>
                  
                    {/* SVG content remains commented */}
                  
                </div>
            </a>
            <a href="Link /" target="blank_">
                <div className={styles.ball}>
                    <Image src="/icons/max.svg" alt=""  width={114} 
  height={44} />
                </div>
            </a>
            <a href="https://t.me/Studio_WWW" target="blank_">
                <div className={styles.ball}>
                    <Image src="/icons/telegram.svg" alt=""  width={44} 
  height={44} />
                </div>
            </a>
            <a href="Link /" target="blank_">
                <div className={styles.ball}>
                    <Image src="/icons/vk.svg" alt="" width={44} 
  height={44}  />
                </div>
            </a>
            <a href="Link /">
                <div className={styles.ball}>
                    <Image src="/icons/gmail.svg" alt=""  width={44} 
  height={44} />
                </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};