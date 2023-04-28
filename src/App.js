import './App.css';
import Nav from './Nav.js'

import { useState } from 'react';
import About from './About';
import Upload from './Upload';
import Results from './Results';
import Spinner from './Spinner';

function App() {
    const [isDemo, setIsDemo] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isResults, setIsResults] = useState(false);
    const [image, setImage] = useState(null);
    const [results, setResults] = useState(null);

    async function onUpload(image) {
        setIsLoading(true);
        setImage(image);

        const url = 'http://127.0.0.1:5000/upload'

        const formData = new FormData();
        formData.append('file', image);

        const opts = {
            method: 'POST',
            body: formData
        }

        let res = await fetch(url, opts);
        let data = await res.json();

        setResults(data);
        setIsResults(true);
        setIsLoading(false);
    }

    return (
        <div className="app">
            <div className='header'>
                <Nav isDemo={isDemo} setIsDemo={setIsDemo} />
            </div>
            <div className='body'>
                <div className="main">
                    {isDemo && isLoading && <Spinner />}
                    {isDemo && !isResults && !isLoading && <Upload onUpload={onUpload} />}
                    {isDemo && isResults && <Results image={image} results={results}/>}

                    {!isDemo && <About />}
                </div>
            </div>
        </div>
    );
}

export default App;
