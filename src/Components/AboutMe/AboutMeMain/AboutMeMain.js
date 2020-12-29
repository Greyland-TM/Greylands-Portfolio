import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyImg from '../../../Media/ProfilePic.jpg';
import '../AboutMeMain/AboutMeMain.css';

const AboutMeMain = () => (
    <Container>
        <Row>
            <Col>
                <h2>What About Greyland?</h2>
                <p> I am a largly self taught software developer who is currently persuring a masters in computer 
                    science and working at Columbia Helicopters as a Buisness Intelligence Developer. 
                    Most of my expierence is in front end web development and Microsoft applications. 
                </p>
                <h2>How Can I Help You?</h2>
                <p>
                    You're starting up a brand new company and need help <span>promoting </span>
                    your name and building the perfect website, Greyland can help.
                </p>
                <p>
                    You need a better way to manage the employees you already have? Greyland can <span>design </span>
                    personalized spreadsheets that will exceed your wildest expectations.
                </p>
            </Col>
            <Col>
                <img className='About-Me-Img'
                    src={MyImg}
                    alt='Profile'
                ></img>
            </Col>
        </Row>
            <Col></Col>
            <Col className='About-links'>
                {/* Github */}
                <a href='https://github.com/Greyland-TM/' 
                    target='_blank' rel='noopener noreferrer' 
                    className='Hover-Effect'>
                    <i className='fab fa-github' aria-hidden='true' />
                </a>

                {/* Linkden */}
                <a href='https://www.linkedin.com/in/greyland-miller-a08b1a1b5/' 
                    target='_blank' rel='noopener noreferrer' 
                    className='Hover-Effect'>
                    <i className='fab fa-linkedin' aria-hidden='true' />
                </a>

                {/* FaceBook */}
                <a href='https://www.facebook.com/greyland.miller/' 
                    target='_blank' rel='noopener noreferrer' 
                    className='Hover-Effect'>
                    <i className='fab fa-facebook' aria-hidden='true' />
                </a>
            </Col>
    </Container>
);

export default AboutMeMain;