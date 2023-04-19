import './App.css';
import Nav from './Nav.js'

import { useState } from 'react';
import Upload from './Upload';
import Results from './Results';
import Spinner from './Spinner';

function App() {
    const [isDemo, setIsDemo] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isResults, setIsResults] = useState(false);
    const [image, setImage] = useState(null);

    function onUpload(image) {
        setIsLoading(true);
        setImage(image);
        setTimeout(() => {
            setIsResults(true);
            setIsLoading(false);
        }, 1000);
    }

    return (
        <div className="app">
            <header>
                <Nav isDemo={isDemo} setIsDemo={setIsDemo} />
            </header>
            <body>
                <div className="main">
                    {isLoading && <Spinner />}
                    {!isResults && !isLoading && <Upload onUpload={onUpload} />}
                    {isResults && <Results image={image} />}
                </div>
            </body>
        </div>
    );
}

export default App;
