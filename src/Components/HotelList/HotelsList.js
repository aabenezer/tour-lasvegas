import React, { useState, useEffect } from 'react';
import HotelCard from './HotelCard';
import './Hotel.css'
import { FiSearch } from 'react-icons/fi';

const HotelsCasinos = () => {
    const [jsonData, setJsonData] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [searchName, setSearchName] = useState('');

    useEffect(() => {

        fetch('/Hotels.json')
            .then(response => response.json())
            .then(data => setJsonData(data))
            .catch(error => console.error('Error fetching JSON data:', error));
    }, []);




    return (
        <div className="App">
            <div className="search-filter">
                <FiSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search Hotels"
                    value={searchName}
                    onChange={event => setSearchName(event.target.value)}
                />

            </div>
            <div className="hotel-list">
                {jsonData && jsonData.Hotels.filter(hotel => (
                    (searchName === '' || hotel.title.toLowerCase().includes(searchName.toLowerCase()))
                )).map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))}
            </div>
        </div>
    );
};

export default HotelsCasinos;