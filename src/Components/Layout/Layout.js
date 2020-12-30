import React, { Component } from 'react';
import Aux from '../../HOC/Aux';
import Main from '../Main/Main';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import './Layout.css';

class Layout extends Component {

    render() {
        return(
            <Aux className='Background'>
                <Main></Main>
                <LandingPage></LandingPage>
                <AboutMe></AboutMe>
                <Projects></Projects>
                <Contact></Contact>
                <Footer></Footer>
            </Aux>
        );
    }
}

export default Layout;