import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from '../components/Contact';
import News from '../components/news/News';
import OurDogs from '../components/ourDogs/OurDogs';

const Main = () => {
    return (
        <Switch>
            <Route path='/contact' component={Contact} />
            <Route path='/news' component={News} />
            <Route path='/ourDogs' component={OurDogs} />
        </Switch>
    )
}

export default Main