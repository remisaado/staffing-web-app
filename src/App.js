import './App.css';
import { Footer, MenuNavigation } from './components';

function App() {

  return (
    <div>
      <header className="header">
        <div className="container">
          <h1 className="title">Lärarcentralen</h1>
          <MenuNavigation/>
        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
