import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Button
} from "reactstrap";
import './Home.css';
import Quote from '../../Components/Quote/Quote';
import ent from '../../assets/img/Entertainment.jpg';
import night from '../../assets/img/Nightlife.jpg';
import attraction from '../../assets/img/Attraction.jpg';
import dining from '../../assets/img/Dining.jpg';
import banner from '../../assets/img/banner.jpg'; 


const Home = () => {
    return (
        <div>
            <HeroSection />


            <div className='information-cards'>

                <div className='cards'>
                    <Card>
                        <CardImg src={ent} alt='lasvegas-entertainment' className='card-imgs' />
                        <CardBody>
                            <CardTitle className='card-title'>ENTERTAINMENT</CardTitle>
                            <CardText className='card-body'>

                                Las Vegas earns its reputation for extravagant shows, concerts, and performances. The city regularly hosts world-renowned entertainers and musicians, in addition to being a hub for Cirque du Soleil shows, magic performances, and comedy acts.
                            </CardText>

                        </CardBody>
                    </Card>
                    </div>




                    <div className='cards'>
                        <Card>
                            <CardImg src={attraction} alt='lasvegas-entertainment' className='card-imgs' />
                            <CardBody>
                                <CardTitle className='card-title'>ATTRACTIONS</CardTitle>
                                <CardText className='card-body'>


                                    Las Vegas is home to many world-famous attractions, including the Bellagio fountains, the High Roller observation wheel, the Stratosphere Tower, and the Hoover Dam. There are also many shopping centers, restaurants, and other tourist attractions in the city.
                                </CardText>

                            </CardBody>
                        </Card>
                    </div>


                    <div className='cards'>
                        <Card>
                            <CardImg src={night} alt='lasvegas-entertainment' className='card-imgs' />
                            <CardBody>
                                <CardTitle className='card-title'>NIGHTLIFE</CardTitle>
                                <CardText className='card-body'>

                                    Las Vegas is famous for its nightlife, with a vast array of casinos, bars, clubs, and lounges. The city is particularly well-known for its hotels and casinos, which are open 24/7 and offer a wide range of slot and table games for the customers.
                                </CardText>

                            </CardBody>
                        </Card>
                    </div>

                    <div className='cards'>
                        <Card>
                            <CardImg src={dining} alt='lasvegas-entertainment' className='card-imgs' />
                            <CardBody>
                                <CardTitle className='card-title'>SHOPPING & DINING</CardTitle>
                                <CardText className='card-body'>

                                    Las Vegas offers an unparalleled shopping and dining experience, from luxury boutiques to budget-friendly outlets. With celebrity chef restaurants and diverse dining concepts, it's a culinary wonderland. Visitors can savor gourmet dishes, indulge in buffets, and discover hidden gems for a delectable adventure.
                                </CardText>

                            </CardBody>
                        </Card>
                    </div>
                </div>

            <Quote/>

            <div>

                <img className='banner-image' src={banner} alt="My Image" />
            </div>
           
            </div>
      




    );
}

export default Home