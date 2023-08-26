import React from 'react';
import HotelsList from '../../Components/HotelList/HotelsList';
import './HotelsCasinos.css'


const HotelsCasinos = () => {
  return (
<div>
      <h1 className='hotel-main-title'>Hotels & Casinos</h1>
      <p className='hotel-main-text'>Las Vegas hotels stand as paragons of extravagant luxury and unparalleled entertainment, epitomizing the concept of offering everything under one roof. Renowned for their opulent design, world-class amenities, and round-the-clock entertainment, these hotels redefine the boundaries of hospitality. From the iconic themed resorts along the legendary Las Vegas Strip to the lavish establishments in the city's heart, each hotel is a destination in itself, boasting sprawling casinos, Michelin-starred dining, rejuvenating spas, captivating live shows, and pools that transform into vibrant daytime parties. With their dedication to providing an all-encompassing experience, Las Vegas hotels embody a unique blend of sophistication and excitement that consistently leaves visitors awe-inspired and craving for more.</p>
    <HotelsList />
    </div>
  )
}

export default HotelsCasinos;