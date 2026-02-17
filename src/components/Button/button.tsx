import styles from "./button.module.scss";

type ButtonProps = {
  styleButton?: string;
  fontButton?: string;
  nameButton: React.ReactNode;
};

const Button = ({
  styleButton = styles.medium,     // используем классы из модуля
  fontButton = styles["default-font"],
  nameButton = "Кнопка",
}: ButtonProps) => {
  return (
    <button type="button" className={`${styles.button} ${fontButton} ${styleButton}`}>
      {nameButton}
    </button>
  );
};

export default Button;