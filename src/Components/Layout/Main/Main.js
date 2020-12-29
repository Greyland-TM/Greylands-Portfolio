import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';

const Main = () => (
    <Switch>
        <Route exact path="/landingPage" component={LandingPage} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
)

export default Main;