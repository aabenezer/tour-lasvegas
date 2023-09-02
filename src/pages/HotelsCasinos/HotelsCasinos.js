import React from 'react';
import HotelsList from '../../Components/HotelList/HotelsList';
import './HotelsCasinos.css';



const HotelsCasinos = () => {

  return (
    <div>
      <h1 className='hotel-main-title'>Hotels & Casinos</h1>
      <p className='hotel-main-text'>Las Vegas hotels stand as paragons of extravagant luxury and unparalleled entertainment, epitomizing the concept of offering everything under one roof. Renowned for their opulent design, world-class amenities, and round-the-clock entertainment, these hotels redefine the boundaries of hospitality. </p>
      <HotelsList />
    </div>
  )
}

export default HotelsCasinos;