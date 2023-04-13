import Button from './Button';
import TextInput from './TextInput';
import './Upload.css';

function Upload() {
    return (
        <div>
            <div className="upload">
                <p>pick an image from somewhere in the world</p>
                <Button 
                    className="up-btn"
                    active={false}
                    pressable={true}
                    text="UPLOAD"
                />
            </div>
            <div className="upload">
                <p>or paste an image url in the box below</p>
                <TextInput />
            </div>
        </div>
    );
}

export default Upload;