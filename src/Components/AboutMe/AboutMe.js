import React, { Component } from 'react';
import './AboutMe.css';
import AboutMeMain from './AboutMeMain/AboutMeMain';
import AboutMeAlt from './AboutMeAlt/AboutMeAlt';
// import { Container, Row, Col } from 'react-bootstrap';
// import MyImg from '../../Media/ProfilePic.jpg';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 0,
            buttonTxt: 'Sounds amazing. Tell me more!'
        }
    }

    pageChangeHandler = () => {
        const updatedPageNum = this.state.pageNum + 1
        if (updatedPageNum >= 2) {
            this.setState ({pageNum: 0, buttonTxt: 'Sounds amazing. Tell me more!'})
        }else {
            this.setState ({pageNum: updatedPageNum, buttonTxt: 'New Button'})
        }
    }

    pageLoader = () => {
        switch (this.state.pageNum) {
            case 0: 
                return <AboutMeMain></AboutMeMain>;
            case 1: 
                return <AboutMeAlt></AboutMeAlt>
            default:
                return <AboutMeMain></AboutMeMain>;
        }
    }

    render() {
        return (
            <div  className='About-Me'>
                <div className='About-Me-Head'></div>
                {this.pageLoader()}
                <button 
                    className='Button-Style'
                    onClick={this.pageChangeHandler}>
                    {this.state.buttonTxt}
                </button>
            </div>
        );
    }
} 

export default AboutMe;