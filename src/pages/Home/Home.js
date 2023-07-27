import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Button
} from "reactstrap";
import './Home.css';
import ent from '../../assets/img/Entertainment.jpg';
import night from '../../assets/img/Nightlife.jpg';
import attraction from '../../assets/img/Attraction.jpg';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <div className='info-cards'>







                <div className='cards'>
                    <Card>
                        <CardImg src={ent} alt='lasvegas-entertainment' className='card-imgs' />
                        <CardBody>
                            <CardTitle className='card-title'>Entertainment</CardTitle>
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
                            <CardTitle className='card-title'>Attractions</CardTitle>
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
                            <CardTitle className='card-title'>Nightlife</CardTitle>
                            <CardText className='card-body'>

                                Las Vegas is famous for its nightlife, with a vast array of casinos, bars, clubs, and lounges. The city is particularly well-known for its hotels and casinos, which are open 24/7 and offer a wide range of slot and table games for the customers.
                            </CardText>

                        </CardBody>
                    </Card>
                </div>

            </div>
        </div>


    );
}

export default Home