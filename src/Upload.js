import FileInput from './FileInput';
import TextInput from './TextInput';
import './Upload.css';
import Dropzone from 'react-dropzone';

function Upload({setImage}) {
    return (
        <div>
            <div className="upload">
                <p>pick an image from somewhere in the world</p>
                <FileInput 
                    className="up-btn"
                    text="UPLOAD"
                    onChange={setImage(1)}
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