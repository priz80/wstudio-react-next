import "./button.scss"

const Button = ( { styleButton = "medium", fontButton, nameButton = "Кнопка"}) => {
    return (
        <button type="button" className={`button ${fontButton} ${styleButton}`}>{nameButton}</button>
    )
}

export default Button