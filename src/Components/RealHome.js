import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as Bootstrap from "react-bootstrap";
import NavBar from './NavBar';
import Carousel from './CarouselComponent';
import { Link } from 'react-router-dom';
import '../App.css';
import Articles from './PreviewArticleComponents/Articlehgp';
import Footer from './FooterComponent';
import Verify from './LoggedInVerify';
import { ChangeTheme } from '../UseTheme';

function RealHome() {
    const theme = ChangeTheme();

    return (
        <div>
            <Carousel />
            <div className="MajorContainer">
                <Bootstrap.Jumbotron bg-color="none">
                <h1>One Piece</h1>
                    <p>
                        One Piece is a Japanese manga series written and illustrated by Eiichiro Oda.
                        It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 1997,
                        with its individual chapters compiled into 97 tankōbon volumes as of September 2020
                        .
            </p>
                </Bootstrap.Jumbotron>
                <Articles />
            </div>
            <Footer />
        </div>
    )
}

export default RealHome;