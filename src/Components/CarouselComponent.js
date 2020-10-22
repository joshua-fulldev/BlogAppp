import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as Bootstrap from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import firstimg from './images/firstall.jpg';
import secondimg from './images/secondall.jpg';
import thirdimg from './images/thirdall.png';
import fourthimg from './images/bennall.jpg';
import '../App.css';
import {Link} from 'react-router-dom';

function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={secondimg}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>The Pirate King and His Captains</h3>
                    <p>Who is the Strongest?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={thirdimg}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>One Piece: 5 Things Zoro Can Do That Luffy Can't (& 5 Luffy Can Do That Zoro Can't)</h3>
                    <p>Luffy and Zoro are at the heart of One Piece - but each has skills that the other definitely doesn't!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={fourthimg}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Most Underrated Character</h3>
                    <p>Benn Beckman is the first mate and an officer of the Red Hair Pirates.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;