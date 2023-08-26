import React from 'react';
import './Restaurant.css'
import 'font-awesome/css/font-awesome.css';
import { FaUtensils, FaMoneyBillWave, FaMapMarkerAlt } from "react-icons/fa";


const RestaurantCard = ({ restaurant }) => {

    const renderStars = (rating) => {
        const maxRating = 5;
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;

        const starArray = [];

        for (let i = 0; i < fullStars; i++) {
            starArray.push(<i key={`full-star-${i}`} className="fa fa-star"></i>);
        }

        if (halfStar) {
            starArray.push(<i key="half-star" className="fa fa-star-half-o"></i>);
        }

        for (let i = starArray.length; i < maxRating; i++) {
            starArray.push(<i key={`empty-star-${i}`} className="fa fa-star-o"></i>);
        }

        return starArray;
    };

    return (
        <div className='cards-container'>
            <div className="restaurant-card">
                <img className='restaurant-img' src={restaurant.image} alt={restaurant.title} />
                <div className='restaurant-text'>
                    <h2 className='restaurant-title'>{restaurant.title}</h2>
                    <p className='restaurant-desc'>{restaurant.description}</p> 
                    <div className='restaurant-rating'>{renderStars(restaurant.rating)}</div>
                    <div className='inline-container'>
                        <p className='restaurant-price restaurant-text-info'><FaMoneyBillWave className='side-icons' /> {restaurant.price}</p>&nbsp;  |  &nbsp;      
                        <p className='restaurant-type restaurant-text-info'><FaUtensils className='side-icons' /> {restaurant.type}</p>
                    </div>
                    
                    <p className='restaurant-address restaurant-text-info'><FaMapMarkerAlt className='side-icons' /> {restaurant.address}</p>
                    <a className='restaurant-link' href={restaurant.book} target="_blank" rel="noopener noreferrer">Reserve a table</a>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;