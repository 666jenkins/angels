import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from '../components/Contact';
import Header from '../components/Header';
import News from '../components/news/News';
import LandingPage from '../components/LandingPage'

const Main = () => {

    const visited = sessionStorage.getItem("visited")
    if (visited === null) {
        return <LandingPage />
    }
    return (
        <>
            <Header />
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/news" component={News} />
                <Route exact path="/" component={Contact} />
            </Switch>
        </>
    )
}

export default Main