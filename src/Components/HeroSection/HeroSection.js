import React from 'react';
import vegaswide from '../../assets/img/las vegas wide 6.jpg';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <div>
                <img src={vegaswide} alt='lasvegas at night' className='hero-image' />
                <div className='hero-text'>
                    <h2>The City that Never Sleeps</h2>
                    <p>Las Vegas is a dazzling desert oasis that never sleeps,
                        known for its vibrant nightlife, extravagant casinos with
                        a larger-than-life reputation as the entertainment
                        capital of the world.</p>
                    <div>
                        <Link to='/HotelsCasinos' className='btn'>Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
