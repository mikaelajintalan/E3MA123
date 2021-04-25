import logo from './images/logo.png';

const Header = (props) => {
    return (
        <header>
            <h1 className="title">SAINTWATCHING</h1>
            <img src={logo} className="Saint" alt="logo" />
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>GET STARTED</li>
                    <li>PHOTOS</li>
                    <li>GEAR</li>
                    <li>FORUM</li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;
