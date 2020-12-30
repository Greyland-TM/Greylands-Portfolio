import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Footer/Footer.css';

const Footer = () => (
    <div className='Footer-Background'>
        <div className='Footer-Top'></div>
        <Row className='Footer-Info'>
            <Col>Powered by Grey</Col>
            <Col>Source Code</Col>
        </Row>
    </div>
);

export default Footer;