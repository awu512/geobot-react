import './Upload.css';
import Dropzone from 'react-dropzone';

function Upload({onUpload}) {
    function handleFileDrop(acceptedFiles) {
        onUpload(acceptedFiles[0]);
    }

    return (
        <div>
            <Dropzone onDrop={handleFileDrop}>
                {({getRootProps, getInputProps}) => (
                    <div className="upload" {...getRootProps()}>
                        <p>pick an image from somewhere in the world</p>
                        <label 
                            for='file-upload' 
                            className='file-in'
                        >
                            UPLOAD
                        </label>
                        <input 
                            type='file'
                            id='file-upload'
                            {...getInputProps()}
                        />
                    </div>
                )}
            </Dropzone>
        </div>
    );
}

export default Upload;