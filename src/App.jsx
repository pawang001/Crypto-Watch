import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/coin/:coinId' element= {<Coin/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
