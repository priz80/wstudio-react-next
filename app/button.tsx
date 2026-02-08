import "./button.scss";

const Button = ( { sizeButton = "medium", titleButton = "Кнопка"}) => {
    return (
        <button type="button" className={`button button-font ${sizeButton}`}>{titleButton}</button>
    )
}

export default Button