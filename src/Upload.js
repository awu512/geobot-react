import './Upload.css';

function Upload() {
    return (
        <div>
            <div className="upload">
                <p></p>
                <div 
                className={"btn btn-off"}
                onClick={() => props.setIsDemo(false)}>
                    UPLOAD
                </div>
            </div>
            <div className="upload">
                <p></p>
                
            </div>
        </div>
    );
}

export default Upload;