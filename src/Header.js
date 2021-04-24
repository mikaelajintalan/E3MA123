import logo from './images/logo.jpg';

const Header = (props) => {
    return (
        <header>
            <h1 className="title">SAINTWATCHING</h1>
            <img src={logo} className="Saint" alt="logo" />
        </header>
        
    )
}

export default Header;
