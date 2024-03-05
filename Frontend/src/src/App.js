
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Signup from './components/Signup';
import MapView from './components/MapView';
import Signin from './components/Signin';
import SearchResult from './components/SearchResult';






function App() {
  return ( 
    //  <MapView/>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HeroSection/>} ></Route>
      {/* <Route path='/' element={<Footer/>} ></Route> */}
      <Route path='/sign-up' element={<Signup/>} ></Route>
      <Route path='/sign-in' element={<Signin/>} ></Route>
      <Route path='/map' element={<MapView/>} ></Route>
      <Route path="/search/:query/:filter" element={<SearchResult/>} ></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
