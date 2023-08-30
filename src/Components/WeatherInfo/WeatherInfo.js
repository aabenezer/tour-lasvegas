import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherPopup = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [popupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        // Fetch weather data here, using your API key
        const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
        const CITY = 'Las Vegas';
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

        axios.get(API_URL)
            .then(response => {
                setWeatherData(response.data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }, []);

    const togglePopup = () => {
        setPopupVisible(!popupVisible);
    };

    return (
        <div className="weather-popup">
            <div className="weather-icon" onClick={togglePopup}>
                {weatherData && (
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
                )}
            </div>
            {popupVisible && weatherData && (
                <div className="popup">
                    <h2>Weather in Las Vegas</h2>
                    <p>{weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default WeatherPopup;
