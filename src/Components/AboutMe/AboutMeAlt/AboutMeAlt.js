import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../AboutMeAlt/AboutMeAlt.css';
import AltImg from '.././../../Media/Me.jpg';

const AboutMeAlt = () => (
    <Container className='Alt-Container'>
        <Row>
            <Col>
                <img className='About-Me-Img'
                    src={AltImg}
                    alt='Profile'
                ></img>
            </Col>
            <Col>
                <h2>Continued</h2>
                <p>More about me</p>
            </Col>
        </Row>
    </Container>
);

export default AboutMeAlt;