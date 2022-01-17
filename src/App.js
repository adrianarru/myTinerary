import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Carousel from './components/Carousel';
import CityCard from './components/CityCard';
import SignIn from "./components/SignIn";

function App() {
  return (

    <div>
    <NavBar/>
    <SignIn/>
    <Home/>
    <CityCard/>
    </div>
    

  );
}

export default App;
