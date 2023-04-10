import logo from './logo.svg';
import './Nav.css';

function Nav(props) {
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
                className={"btn btn-" + (props.isDemo ? "off" : "on")}
                onClick={() => props.setIsDemo(false)}>
                    ABOUT
                </div>
                <div 
                className={"btn btn-" + (props.isDemo ? "on" : "off")}
                onClick={() => props.setIsDemo(true)}>
                    DEMO
                </div>
            </div>
        </div>
    );
}

export default Nav;