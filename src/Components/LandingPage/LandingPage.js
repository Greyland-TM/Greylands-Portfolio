import React from 'react';
import MyVid from '../../Media/video.mp4';
import { Col, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => (
    <div>
        <video
            className='Video'
            src={MyVid}
            alt='My Video'
            autoPlay={true}
            loop={true}
        ></video>
        <Container className='img-txt-container'>
        <Row className='img-txt-1'>
          <Col>Greyland Miller is here</Col>
        </Row>
        <Row className='img-txt-2'>
          <Col>Buiisness Intelligence / Freelance Web Developer</Col>
        </Row>
        <Row>
            <Col className='img-txt-3'>JavaScript | HTML/CSS | React Native | VBA | Python | C | C++</Col>
        </Row>
       
      </Container>
    </div>
);

export default LandingPage;