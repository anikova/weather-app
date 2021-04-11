import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

// pages
import CityDetails from './pages/CityDetails';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/weather-app" component={LandingPage} />
        <Route exact path="/city-details/:cityName/" component={CityDetails} />
      </Switch>
    </HashRouter>
  );
}

export default App;
