import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './Cards/Cards';
import './Carousel.css';

const CarouselItem = (props) => (
    <Container className='Carousel-Item-Center'>
        <Row>
            <Col>
                <h1 className='Carousel'>{props.title}</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <ProjectCard
                    langues={props.langues} 
                    url={props.url}
                    text={props.text}
                ></ProjectCard>
            </Col>
        </Row>
    </Container>
);

export default CarouselItem;