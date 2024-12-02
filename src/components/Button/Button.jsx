import './Button.css'

function Button({children, onClick, className, type='button'}){
    return (

            <button className={className} type={type} onClick={onClick}>{children}</button>

    )
}

export default Button;