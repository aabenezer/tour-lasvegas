import React from 'react';
import ImgCarousel from '../../Components/ImgCarousel/ImgCarousel';
import { CarouselData } from '../../Components/ImgCarousel/CarouselData';
import './AboutVegas.css';
import 'font-awesome/css/font-awesome.css';

import {
    Card, CardBody,
    CardTitle, CardText
} from "reactstrap";


const AboutVegas = () => {
    return (
        <div className='about'>

            <div className='carousel'>
                <ImgCarousel slides={CarouselData} />
            </div>

            <div className='text'>

                <h2 className='text-title'><span>Las Vegas: </span>where the neon lights never fade, and the fun never ends.</h2>
                <div className='description'>
                    <div className=''>
                        <p>Las Vegas, known as the "Entertainment Capital of the World," has a rich history that dates back to the early 1900s. Originally a small railway stopover, the city started to grow when the construction of the Hoover Dam began in 1931, attracting workers and visitors. The legalization of gambling in 1931 also contributed to the city's rapid expansion, making Las Vegas a destination for those seeking entertainment and fortune. The 1950s saw the rise of luxurious resorts and iconic landmarks such as the Flamingo, Sands, and Stardust, solidifying Las Vegas' reputation as a playground for the rich and famous.

                            Today, Las Vegas continues to be a top tourist destination, attracting millions of visitors each year. The city has evolved into a hub for entertainment, nightlife, and gambling, with some of the most extravagant resorts in the world. Visitors can enjoy world-class shows, fine dining, shopping, and of course, casino gaming. In recent years, Las Vegas has expanded its offerings to include family-friendly attractions, outdoor adventures, and cultural experiences, making it a destination suitable for all ages.</p>
                    </div>
                    <div>
                        <p>However, Las Vegas has not been immune to challenges. The city experienced a significant downturn during the 2008 recession, causing a drop in tourism and a decrease in economic activity. The COVID-19 pandemic in 2020 also had a significant impact on the city, with many resorts temporarily closing and a sharp decline in tourism. Nevertheless, Las Vegas has shown resilience and has been working to adapt and recover, implementing safety measures and reimagining its offerings to cater to changing visitor preferences.

                            In conclusion, Las Vegas has come a long way from its humble beginnings as a railway stopover to become a world-renowned entertainment destination. Its history and iconic landmarks make it a unique and exciting city to visit, and its adaptability and resilience ensure that it will continue to thrive as a top tourist destination for years to come.</p>
                    </div>
                </div>
            </div>

            <div className='info-cards'>


                <div className='cards'>
                    <Card>
                        <CardBody>
                            <CardTitle className='card-title'><i className='fa fa-map fa-md  card-icon' /></CardTitle>
                            <h2 className='card-header'>135.9 mi²</h2>
                            <CardText className='card-body'>

                                Las Vegas stretches across an approximate width of 16 miles, encompassing a dynamic landscape that ranges from the iconic Las Vegas Strip, renowned for its dazzling lights and grand resorts, to the picturesque outskirts framed by the breathtaking Red Rock Canyon.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>



                <div className='cards'>
                    <Card>
                        <CardBody>
                            <CardTitle className='card-title'><i className='fa fa-users fa-md  card-icon' /></CardTitle>
                            <h2 className='card-header'> 35,000,000</h2>
                            <CardText className='card-body'>

                                Las Vegas, a captivating hub of entertainment and allure, entices global visitors with vibrant lights, renowned casinos, and an iconic Strip. As the most visited U.S. city, more than 35 million visitors flock here annually, seeking its unique blend of excitement and extravagance.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>



                <div className='cards'>
                    <Card>
                        <CardBody>
                            <CardTitle className='card-title'><i className='fa fa-bed fa-md  card-icon' /></CardTitle>
                            <h2 className='card-header'> 150,000</h2>
                            <CardText className='card-body'>

                                As of 2022, the Las Vegas Convention and Visitors Authority reports there were over 150,000 hotel rooms across more than 150 different hotels on the Las Vegas Strip and downtown area. The Las Vegas Strip itself contains over 130,000 rooms across around 25 major resort-style hotel-casinos.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>


                <div className='cards'>
                    <Card>
                        <CardBody>
                            <CardTitle className='card-title'><i className='fa fa-heart fa-md  card-icon' /></CardTitle>
                            <h2 className='card-header'> 300</h2>
                            <CardText className='card-body'>

                                Las Vegas has earned its reputation as the "Wedding Capital of the World" by hosting an impressive average of around 300 weddings per day. This bustling daily celebration of love and commitment showcases the city's unique appeal to couples from all walks of life.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>






    )
}

export default AboutVegas