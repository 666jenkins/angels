import React from 'react';
import './App.css';
import Main from './Main';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  );
}

export default App;