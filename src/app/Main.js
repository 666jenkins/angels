import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from '../components/Contact';

const Main = () => {
    return (
        <Switch>
            <Route path='/contact' component={Contact} />
        </Switch>
    )
}

export default Main