import React from 'react';
import './ContactInfo.css';
import { Container, Row, Col } from 'react-bootstrap';

const information = () => (
    <Container className='contact-info'>
        <Row>
            <Col xs={2}>
                <i className='fa fa-phone-square' aria-hidden='true'></i>
            </Col>
            <Col>
                <p>Phone Number</p>
            </Col>
        </Row>
        <Row>
            <Col xs={2}>
            <i className='fa fa-envelope' aria-hidden='true'></i>
            </Col>
            <Col>
                <p>Email</p>
            </Col>
        </Row>
        <Row>
            <Col xs={2}>
            <i className='fa fa-fax' aria-hidden='true'></i>
            </Col>
            <Col>
                <p>Fax</p>
            </Col>
        </Row>
    </Container>
);

export default information;