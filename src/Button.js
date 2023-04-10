import './Button.css';

function Button(props) {
    return (
        <div 
        className={"btn btn-" + (props.active ? "on" : "off")}
        onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default Button;