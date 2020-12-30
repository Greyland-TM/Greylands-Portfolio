import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import myImg from '../../Media/ProfilePic.jpg';
import Information from './ContactInfo/ContactInfo';

class Contact extends Component {
    render() {
        return(
            <div className='Contacct-Background'>
                <div className='About-Me-Head'></div>
                <Container className='Container'>
                    <Row>
                        <Col className='txt-left'>
                            <h2>Greyland Miller</h2>
                            <img
                                src={myImg}
                                alt='Me'
                            ></img>
                            <p>My name is Greyland and here is my contact userform. I check my emails daily and will respond as quickly as I am able.</p>
                        </Col>
                        <Col className='txt-right'>
                            <h2>Contact Me.</h2>
                            <Information></Information>
                        </Col>
                    </Row>
                </Container>
                <div className='Container-Bottom'></div>
            </div>
        )
    }
}
    
export default Contact;