import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

// utils
import history from './utils/history';

// pages
import CityDetails from './pages/CityDetails';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/city-details/:name" component={CityDetails} />
      </Switch>
    </Router>
  );
}

export default App;
