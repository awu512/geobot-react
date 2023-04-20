import Button from './Button';
import logo from './logo.svg';
import './Nav.css';

function Nav(props) {
    return (
        <div className='nav'>
            <div className="wordmark-container">
                <div className="logo-container">
                    <img src={logo} className="logo" alt="GeoBot logo" />
                </div>
                <h1 className="wordmark">GEoFFREY</h1>
            </div>
            <div class="btn-container">
                <Button 
                    className="nav-btn" 
                    active={!props.isDemo}
                    pressable={false}
                    text="ABOUT"
                    onClick={() => props.setIsDemo(false)}
                />
                <Button 
                    className="nav-btn" 
                    active={props.isDemo}
                    pressable={false}
                    text="DEMO"
                    onClick={() => props.setIsDemo(true)}
                />
            </div>
        </div>
    );
}

export default Nav;