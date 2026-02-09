import "./button.scss"

type ButtonProps = {
  styleButton?: string;
  fontButton?: string;
  nameButton?: string;
};

const Button = ({ 
  styleButton = "medium", 
  fontButton = "default-font",
  nameButton = "Кнопка" 
}: ButtonProps) => {
  return (
    <button type="button" className={`button ${fontButton} ${styleButton}`}>
      {nameButton}
    </button>
  );
};

export default Button;