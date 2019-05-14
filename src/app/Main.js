import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from '../components/Contact';
import LandingPage from '../components/LandingPage';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path='/contact' component={Contact} />
        </Switch>
    )
}

export default Main