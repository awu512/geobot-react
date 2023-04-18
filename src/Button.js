import './Button.css';

function Button({
    className, 
    text, 
    active, 
    onClick
}) {
    return (
        <button 
            className={`btn btn-${active ? "on" : "off"} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;