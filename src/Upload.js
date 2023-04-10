import Button from './Button';
import './Upload.css';

function Upload() {
    return (
        <div>
            <div className="upload">
                <p></p>
                <Button 
                    active={false}
                    pressable={true}
                >
                    UPLOAD
                </Button>
            </div>
            <div className="upload">
                <p></p>
                
            </div>
        </div>
    );
}

export default Upload;