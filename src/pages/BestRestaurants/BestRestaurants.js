import React from 'react';
import RestaurantsList from '../../Components/RestaurantList/RestaurantsList';
import './BestRestaurant.css'

const BestRestaurants = () => {
    return (
        <div>
            <h1 className='restaurant-main-title'>Best Restaurants</h1>
            <p className='restaurant-main-text'>Las Vegas is renowned for its diverse and vibrant culinary scene, offering an array of restaurants that cater to every palate and preference. From celebrity-chef-driven establishments to hidden local gems, the city boasts an extensive range of dining options. Visitors can indulge in luxurious fine dining experiences at iconic resorts along the Strip, savoring meticulously crafted dishes that combine innovation and artistry.  </p>
            <RestaurantsList />
        </div>
    )
}

export default BestRestaurants