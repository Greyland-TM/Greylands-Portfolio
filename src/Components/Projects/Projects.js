import React from 'react';
import './Projects.css';
import Aux from '../../HOC/Aux';
import ProjectCarousel from './ Carousels/Carousels';

const Projects = () => (
    <div className='Projects-Aux'>
        <div className='Projects-Head'></div>
        <ProjectCarousel></ProjectCarousel>
    </div>
);

export default Projects;