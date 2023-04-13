import './App.css';
import Nav from './Nav.js'

import { useState } from 'react';
import Upload from './Upload';

function App() {
    const [isDemo, setIsDemo] = useState(true);

    return (
        <div className="app">
            <header>
                <Nav isDemo={isDemo} setIsDemo={setIsDemo} />
            </header>
            <body>
                <div className="main">
                    <Upload />
                </div>
            </body>
        </div>
    );
}

export default App;
