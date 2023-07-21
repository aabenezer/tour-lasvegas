import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import abc from '../../assets/img/vegas logo white.png'








const Header = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>

                <img src={abc} alt='nucamp logo' className='logo-image img-fluid' />
            </Link>
            <h3 className='logo'>Tour Las Vergas</h3>
            <ul className='nav-links'>

                <Link className='hotels' to='HotelsCasinos'>
                    <i className='fa fa-bath fa-md' />&nbsp; &nbsp;
                    Hotels & Casinos
                </Link>
                <Link className='restaurants' to='BestRestaurants'>
                    <i className='fa fa-cutlery fa-md' />&nbsp; &nbsp;
                    Best Restaurants
                </Link>
                <Link className='aboutVegas' to='AboutVegas'>
                    <i className='fa fa-flag fa-md' />&nbsp; &nbsp;
                    About Vegas
                </Link>
                <Link className='contact' to='ContactUs'>
                    <i className='fa fa-paper-plane fa-md' />&nbsp; &nbsp;
                    Contact Us
                </Link>
                <Link className='signin' to='SignIn'>
                    <i className='fa fa-user-circle-o fa-md' />&nbsp; &nbsp;
                    Sign In
                </Link>
            </ul>
        </nav >
    )
}






export default Header;