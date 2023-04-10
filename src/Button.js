import './Button.css';

function Button(props) {
    return (
        <button 
            className={"btn btn-" + (props.active ? "on" : "off") + 
                        (props.pressable ? "pressable" : "")}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default Button;