import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../styles/App.css';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Carousel from '../components/Carousel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/NavBar" element={<NavBar/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
