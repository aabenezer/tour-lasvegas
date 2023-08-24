import React from 'react';
import vegaswide from '../../assets/img/las vegas wide 8.jpg';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import ab from '../../pages/HotelsCasinos/HotelsCasinos';
import HotelsCasinos from '../../pages/HotelsCasinos/HotelsCasinos';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <div>
                <img src={vegaswide} alt='lasvegas-image' className='hero-image' />
                <div className='hero-text'>
                    <h2>The City that Never Sleeps</h2>
                    <p>Las Vegas is a dazzling desert oasis that never sleeps,
                        known for its vibrant nightlife, extravagant casinos with
                        a larger-than-life reputation as the entertainment
                        capital of the world.</p>
                    <button className='hero-button'>
                        <Link to='/HotelsCasinos' className='hero-button'>Explore</Link>
                    </button>
                </div>


            </div>



        </div>
    )
}

export default HeroSection
