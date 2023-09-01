import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/img/vegas logo color.png';
import 'font-awesome/css/font-awesome.css';
import { FaUtensils, FaHotel, FaInfoCircle, FaPaperPlane } from "react-icons/fa";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className={`navbar ${showMenu ? 'show' : ''}`}>
            <Link to='/'>
                <img src={logo} alt='tour-lasvegas-logo' className='logo-image' />
            </Link>
            <h2 className='logo'>Tour Las Vegas</h2>

            <div className="menu-icon" onClick={toggleMenu}>
                <i className={`fa ${showMenu ? 'fa-times' : 'fa-bars'} fa-lg`} />
            </div>

            <ul className={`menu-items ${showMenu ? 'show' : ''}`}
                onClick={() => setShowMenu(false)}
            >
                <Link className='hotels' to='HotelsCasinos'>
                    <FaHotel /> &nbsp;
                    Hotels & Casinos
                </Link>
                <Link className='restaurants' to='BestRestaurants'>
                    <FaUtensils /> &nbsp;
                    Best Restaurants
                </Link>
                <Link className='aboutVegas' to='AboutVegas'>
                    <FaInfoCircle /> &nbsp;
                    About Vegas
                </Link>
                <Link className='contact' to='ContactUs'>
                    <FaPaperPlane /> &nbsp;
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