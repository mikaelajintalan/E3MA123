import './App.css';
import Header from './Header';
import NavLinks from './NavLinks';
import Main from './Main';
import Footer from './Footer';


function App  ()  {

  return (
    <div className="container">
      {Header} 
      {NavLinks}
      {Main}
      {Footer}
    </div>
  );
}

export default App