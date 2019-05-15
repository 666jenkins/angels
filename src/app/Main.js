import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from '../components/Contact';
import Header from '../components/Header';

const Main = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/home" component={Contact} />
            </Switch>
        </>
    )
}

export default Main