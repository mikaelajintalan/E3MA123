import logo from './images/logo.png';

const Header = (props) => {
    return (
        <header>
            <h1 className="title">SAINTWATCHING</h1>
            <img src={logo} className="Saint" alt="logo" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Get started</li>
                    <li>Photos</li>
                    <li>Gear</li>
                    <li>Forum</li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;
