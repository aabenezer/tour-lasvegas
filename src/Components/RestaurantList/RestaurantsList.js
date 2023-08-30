import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import './Restaurant.css';
import { FiSearch } from 'react-icons/fi';

const RestaurantsList = () => {
    const [jsonData, setJsonData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [minRating, setMinRating] = useState(0);
    const [restaurantType, setRestaurantType] = useState('');

    useEffect(() => {

        fetch('/Restaurants.json')
            .then(response => response.json())
            .then(data => setJsonData(data))
            .catch(error => console.error('Error fetching JSON data:', error));
    }, []);


    const filteredRestaurants = jsonData
        ? jsonData.Restaurants.filter(
            restaurant =>
                restaurant.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                restaurant.rating >= minRating &&
                (restaurantType === '' || restaurant.type === restaurantType)
        )
        : [];

    return (
        <div className="App">
            <div className="search-filters">
                <div className="search-input">
                    <FiSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search Restaurants"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                
            </div>

            <div className="restaurant-list">
                {filteredRestaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default RestaurantsList;