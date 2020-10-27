import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as Bootstrap from "react-bootstrap";
import NavBar from './NavBar';
import Carousel from './CarouselComponent';
import { Link } from 'react-router-dom';
import '../App.css';
import Articles from './PreviewArticleComponents/Articlehgp';
import Footer from './FooterComponent';
import Verify from './LoggedInVerify';
import SubRouter from './SubRouter';
import { ChangeTheme } from '../UseTheme';

function HomePage(props) {
  const theme = ChangeTheme();
  console.log({ props });

  const ThemeHandler = () => {
    theme.changeMode();
  };

  return (
    <div className="">
      <>
        <NavBar>
          {props}
        </NavBar>
        <SubRouter />
      </>
    </div>
  );
}

export default HomePage;