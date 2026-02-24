import styles from "./button.module.scss";

type ButtonProps = {
  styleButton?: string;
  fontButton?: string;
  nameButton: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button = ({
  styleButton = styles.medium,
  fontButton = styles["default-font"],
  nameButton = "Кнопка",
  type = "button", // ← По умолчанию "button", но можно переопределить
  onClick, // ← деструктуризировано
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${fontButton} ${styleButton}`}
      onClick={onClick} // ← передано
    >
      {nameButton}
    </button>
  );
};

export default Button;
