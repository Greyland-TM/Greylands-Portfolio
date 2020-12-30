import React from 'react';
import MyVid from '../../Media/video.mp4';
import { Col, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => (
    <div>
        <video
            className='Video'
            src={MyVid}
            alt='splash back'
            autoPlay={true}
            loop={true}
        ></video>
        <Container className='img-txt-container'>
        <Row className='img-txt-1'>
          <Col>Greyland T. Miller</Col>
        </Row>
        <Row className='img-txt-2'>
          <Col>Buiisness Intelligence / Freelance Web Developer</Col>
        </Row>
        <Row>
            <Col className='img-txt-3'>JavaScript | HTML/CSS | React Native | VBA | Python | C | C++</Col>
        </Row>
        <Col className='social-links'>
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
    </div>
);

export default LandingPage;