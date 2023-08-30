import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/vegas logo white.png';
import 'font-awesome/css/font-awesome.css';


const Footer = () => {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className='footer'>
            <div className='footer-sections'>
                <div className='footer-sections-1'>
                    <div className='footer-logo'>
                        <Link to='/'>
                            <img src={logo} alt='nucamp logo' onClick={scrollToTop} className='logo-image img-fluid' />
                        </Link>
                        <h3 className='logo'>Tour Las Vegas</h3>
                        
                    </div>
                    <hr className='small' />

                    
                    <div className='footer-links-main'>
                    <div className='footer-links'>
                    
                        <h4 className='footer-title'>Navigation Links</h4>
                        <ul className='footer-links-lists' >
                                <Link className='link' onClick={scrollToTop}  to='HotelsCasinos'>

                                Hotels & Casinos
                            </Link>
                                <Link className='link' onClick={scrollToTop} to='BestRestaurants'>

                                Best Restaurants
                            </Link>
                                <Link className='link' onClick={scrollToTop} to='AboutVegas'>

                                About Vegas
                            </Link>
                                <Link className='link' onClick={scrollToTop} to='ContactUs'>

                                Contact Us
                            </Link>
                        </ul>
                    </div>



                    <div className='footer-links'>
                        <h4 className='footer-title'>Useful Links</h4>
                        <ul className='footer-links-lists' >
                            
                            <a href="https://www.lasvegasnevada.gov/" class="link" target="_blank">City of Las Vegas</a>
                            <a href="https://www.lvcva.com/" class="link" target="_blank">Las vegas convention center</a>
                            <a href="https://www.harryreidairport.com/" class="link" target="_blank">Harry Reid International Airport</a>
                            <a href="https://www.rtcsnv.com/" class="link" target="_blank">RTC of Southern Nevada</a>
                           
                        </ul>
                    </div>

                    </div>



                    <hr className='small' />

                    <div className='footer-social'>
                        <h4>Connect with us</h4>
                        <Link className='social' to='https://www.facebook.com/'>
                            <i className='fa fa-facebook fa-md' />
                        </Link>
                        <Link className='social' to='https://twitter.com/'>
                            <i className='fa fa-twitter fa-md' />
                        </Link>
                        <Link className='social' to='https://www.youtube.com/'>
                            <i className='fa fa-youtube-play fa-md' />
                        </Link>
                        <Link className='social' to='https://www.instagram.com/'>
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