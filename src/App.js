import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App  ()  {

  return (
    <div className="container">
      <Header /> {/** faye **/}
      <Main />   {/** mika **/}
      <Footer /> {/** aldrin **/}   
    </div>
  );
}

export default App