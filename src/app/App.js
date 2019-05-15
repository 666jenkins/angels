import React from 'react';
import './App.css';
import Main from './Main';
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage';

function App() {
  return (
    <Switch>
      <Route path="/home" component={Main} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
