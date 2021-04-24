import logo from './images/logo.png';

const Header = (props) => {
    return (
        <header>
            <h1 className="title">SAINTWATCHING</h1>
            <img src={logo} className="Saint" alt="logo" />
        </header>
        
    )
}

export default Header;
