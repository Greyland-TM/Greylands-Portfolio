import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';import CarouselItem from './Carousel/Carousel';
import './Carousels.css';

const ProjectCarousel = () => (
    <Carousel>
        <Carousel.Item interval='1000000' className='Carousel'>
            <div>
                <h2>React Native</h2>
            </div>
            <Container  className='Carousel-Container'>
                <Row> 
                    <Col xs={1} xl={4}>
                        <CarouselItem 
                            langues='React Native'
                            url='url(https://miro.medium.com/max/3200/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover'
                            text='Here is Project #1 of the react projects I want to develope and present.'
                        ></CarouselItem>
                    </Col>
                    <Col xs={1} xl={4}>
                        <CarouselItem
                            langues='React Native'
                            url='url(https://miro.medium.com/max/3200/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover'
                            text='Here is Project #1 of the react projects I want to develope and present.'
                        ></CarouselItem>
                    </Col>
                    <Col xs={1} xl={4}>
                        <CarouselItem
                            langues='React Native'
                            url='url(https://miro.medium.com/max/3200/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg) center / cover'
                            text='Here is Project #1 of the react projects I want to develope and present.'
                        ></CarouselItem>
                    </Col>
                </Row>
            </Container>
            <div>
                <p></p>
            </div>
        </Carousel.Item>
        <Carousel.Item  interval='1000000' className='Carousel'>
            <div>
                <h2>Buisness Intellegence</h2>
            </div>
            <Container className='Carousel-Container'>
                <Row>
                    <Col xs={4} xl={4}>
                        <CarouselItem  className='Carousel-Item'
                            langues='VBA'
                            url='url(https://wallpaperaccess.com/full/833308.png) center / cover'
                            text='Here is Project #1 of the react projects I want to develope and present.'
                        ></CarouselItem>
                    </Col>
                    <Col xs={4} xl={4}>
                        <CarouselItem  className='Carousel-Item'
                            langues='VBA'
                            url='url(https://wallpaperaccess.com/full/833308.png) center / cover'
                            text='Here is Project #1 of the react projects I want to develope and present.'
                        ></CarouselItem>
                    </Col>
                    <Col xs={4} xl={4}>
                        <CarouselItem  className='Carousel-Item'
                            langues='VBA'
                            url='url(https://wallpaperaccess.com/full/833308.png) center / cover'
                            text='Here is Project #1 of the react projects I want to develope and present.'
                        ></CarouselItem>
                    </Col>
                </Row>
            </Container>
            <div>
                <p></p>
            </div>
        </Carousel.Item>
        <Carousel.Item interval='1000000' className='Carousel'>
            <div>
                <h2>Python</h2>
            </div>
            <Container className='Carousel-Container'>
                <Row>
                    <Col xs={4} xl={4}>
                        <CarouselItem className='Carousel-Items'
                            langues='Python'
                            url='url(https://i.pinimg.com/originals/74/99/53/7499532401420bdd8e549814bab51587.jpg) center / cover'
                            text='Here is Project #1 of the react projects I want to develope and present.'
                        ></CarouselItem>
                    </Col>
                    <Col xs={4} xl={4}>
                        <CarouselItem className='Carousel-Items'
                            langues='Python'
                            url='url(https://i.pinimg.com/originals/74/99/53/7499532401420bdd8e549814bab51587.jpg) center / cover'
                            text='Here is Project #1 of the react projects I want to develope and present.'
                        ></CarouselItem>
                    </Col>
                    <Col xs={4} xl={4}>
                        <CarouselItem className='Carousel-Items'
                            langues='Python'
                            url='url(https://i.pinimg.com/originals/74/99/53/7499532401420bdd8e549814bab51587.jpg) center / cover'
                            text='Here is Project #1 of the react projects I want to develope and present.'
                        ></CarouselItem>
                    </Col>
                </Row>
            </Container>
            <div>
                <p></p>
            </div>
        </Carousel.Item>
    </Carousel>
);

export default ProjectCarousel;