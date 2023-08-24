import React, { useState, useEffect } from 'react';
import HotelCard from './HotelCard'; 
import './Hotel.css'

const HotelsCasinos = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        
        fetch('/Hotels.json') 
            .then(response => response.json())
            .then(data => setJsonData(data))
            .catch(error => console.error('Error fetching JSON data:', error));
    }, []);

    return (
        <div className="App">
            
            <div className="hotel-list">
                {jsonData && jsonData.Hotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))}
            </div>
        </div>
    );
};

export default HotelsCasinos;