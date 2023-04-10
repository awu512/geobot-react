import './App.css';
import Nav from './Nav.js'

import { useState } from 'react';

function App() {
    const [isDemo, setIsDemo] = useState(true);

    return (
        <div className="app">
            <header>
                <Nav isDemo={isDemo} setIsDemo={setIsDemo} />
            </header>
            <body>
                
            </body>
        </div>
    );
}

export default App;
