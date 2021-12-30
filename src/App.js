import './App.css';
import { Footer, Header } from './components';
import { Home, ForSchools, ForSubstitutes, About, Contact } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/for-skolor" element={<ForSchools/>}/>
          <Route path="/for-vikarier" element={<ForSubstitutes/>}/>
          <Route path="/om-oss" element={<About/>}/>
          <Route path="/kontakt" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
