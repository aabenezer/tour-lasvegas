import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/vegas logo white.png';
import 'font-awesome/css/font-awesome.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-sections'>
                <div className='footer-sections-1'>
                    <div className='footer-logo'>
                        <Link to='/'>
                            <img src={logo} alt='nucamp logo' className='logo-image img-fluid' />
                        </Link>
                        <h3 className='logo'>Tour Las Vegas</h3>
                        
                    </div>
                    <hr className='small' />

                    <div className='footer-links'>
                        <h4></h4>
                        <ul className='footer-links-list' >
                            <Link className='hotels' to='HotelsCasinos'>

                                Hotels & Casinos
                            </Link>
                            <Link className='restaurants' to='BestRestaurants'>

                                Best Restaurants
                            </Link>
                            <Link className='aboutVegas' to='AboutVegas'>

                                About Vegas
                            </Link>
                            <Link className='contact' to='ContactUs'>

                                Contact Us
                            </Link>
                        </ul>
                    </div>
                    <hr className='small' />

                    <div className='footer-social'>
                        <h4>Connect with us</h4>
                        <Link className='social' to='/'>
                            <i className='fa fa-facebook fa-md' />
                        </Link>
                        <Link className='social' to='/'>
                            <i className='fa fa-twitter fa-md' />
                        </Link>
                        <Link className='social' to='/'>
                            <i className='fa fa-youtube-play fa-md' />
                        </Link>
                        <Link className='social' to='/'>
                            <i className='fa fa-instagram fa-md' />
                        </Link>
                    </div>
                </div>
                <hr />
                <div className='footer-sections-2'>
                    <div className='footer-end'>
                        <div className='copyright'>
                            <p>
                                @{new Date().getFullYear()} Tour Las Vegas. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;