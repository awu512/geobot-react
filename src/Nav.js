import logo from './logo.svg';
import './Nav.css';

import { useState } from 'react';

function Nav() {
    const [isDemo, setIsDemo] = useState(true);

    return (
        <div className='nav'>
            <div className="wordmark-container">
                <div className="logo-container">
                    <img src={logo} className="logo" alt="GeoBot logo" />
                </div>
                <h1 className="wordmark">GeoBot</h1>
            </div>
            <div class="btn-container">
                <div 
                className={"btn btn-" + (isDemo ? "off" : "on")}
                onClick={() => setIsDemo(false)}>
                    ABOUT
                </div>
                <div 
                className={"btn btn-" + (isDemo ? "on" : "off")}
                onClick={() => setIsDemo(true)}>
                    DEMO
                </div>
            </div>
        </div>
    );
}

export default Nav;