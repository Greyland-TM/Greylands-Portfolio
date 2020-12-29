import React, { Component } from 'react';
import './AboutMe.css';
import AboutMeMain from './AboutMeMain/AboutMeMain';
// import { Container, Row, Col } from 'react-bootstrap';
// import MyImg from '../../Media/ProfilePic.jpg';

class AboutMe extends Component {
    render() {
        return (
            <div  className='About-Me'>
                <div className='About-Me-Head'></div>
                <AboutMeMain></AboutMeMain>
            </div>
        );
    }
} 

export default AboutMe;