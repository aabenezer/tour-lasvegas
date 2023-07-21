import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home';
import AboutVegas from './pages/AboutVegas';
import BestRestaurants from './pages/BestRestaurants';
import HotelsCasinos from './pages/HotelsCasinos';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/HotelsCasinos' element={<HotelsCasinos />} />
        <Route path='/BestRestaurants' element={<BestRestaurants />} />
        <Route path='/AboutVegas' element={<AboutVegas />} />
        <Route path='/ContactUs' element={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
