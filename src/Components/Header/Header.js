import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/img/vegas logo white.png';
import 'font-awesome/css/font-awesome.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className={`navbar ${showMenu ? 'show' : ''}`}>
            <Link to='/'>
                <img src={logo} alt='tour-lasvegas-logo' className='logo-image img-fluid' />
            </Link>
            <h3 className='logo'>Tour Las Vegas</h3>

            <div className="menu-icon" onClick={toggleMenu}>
                <i className={`fa ${showMenu ? 'fa-times' : 'fa-bars'} fa-lg`} />
            </div>

            <ul className={`menu-items ${showMenu ? 'show' : ''}`}
                onClick={() => setShowMenu(false)}
            >
                <Link className='hotels' to='HotelsCasinos'>
                    <i className='fa fa-bath fa-md' />&nbsp; &nbsp;
                    Hotels & Casinos
                </Link>
                <Link className='restaurants' activeStyle={{ color: '#5754a8' }} to='BestRestaurants'>
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
        </nav>
    );
};

export default Header;