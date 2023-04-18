import './FileInput.css';

function Button({
    className, 
    text,
    onChange
}) {
    return (
        <div>
            <label for='file-upload' className={`file-in ${className}`}>
                {text}
            </label>
            <input 
                type='file'
                id='file-upload'
                onChange={onChange}
            />
        </div>
    );
}

export default Button;