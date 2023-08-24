import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import './Restaurant.css';

const RestaurantsList = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {

        fetch('/Restaurants.json')
            .then(response => response.json())
            .then(data => setJsonData(data))
            .catch(error => console.error('Error fetching JSON data:', error));
    }, []);


    return (
        <div className="App">

            <div className="restaurant-list">
                {jsonData && jsonData.Restaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default RestaurantsList;