import React from 'react';
import './Hotel.css'
import 'font-awesome/css/font-awesome.css';
import { FaHome } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
    return (
        <div className='cards-container'>
            <div className="hotel-card">
                <img className='hotel-img' src={hotel.image} alt={hotel.title} />
                <div className='hotel-text'>
                    <h2 className='hotel-title'>{hotel.title}</h2>
                    <p className='hotel-desc'>{hotel.description}</p>
                    <p className='hotel-price'><FaMoneyBillWave className='side-icons' />&nbsp; &nbsp; {hotel.price}</p>
                    <p className='hotel-rooms'><FaHome className='side-icons' />&nbsp; &nbsp; {hotel.rooms}</p>
                    <p className='hotel-address'><FaMapMarkerAlt className='side-icons' /> &nbsp; &nbsp;  {hotel.address}</p>
                    <a className='hotel-link' href={hotel.webAddress} target="_blank" rel="noopener noreferrer">Website</a>
                    <a className='hotel-link' href={hotel.book} target="_blank" rel="noopener noreferrer">Book Now</a>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;