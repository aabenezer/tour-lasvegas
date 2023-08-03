import React from 'react';
import vegaswide from '../../assets/img/las vegas wide 1.png';
import './HeroSection.css';
import ab from '../../pages/HotelsCasinos';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <div>
                <img src={vegaswide} alt='lasvegas-image' className='hero-image' />
            </div>
            <div className='hero-text'>
                <h2>The City that Never Sleeps</h2>
                <p>Las Vegas is a dazzling desert oasis that never sleeps,
                    known for its vibrant nightlife, extravagant casinos with
                    a larger-than-life reputation as the entertainment
                    capital of the world.</p>
                <button className='hero-button' href={ab}>Explore</button>

            </div>



        </div>
    )
}

export default HeroSection
