import React from 'react';

import Header from './common/Header';
import Home from './home/Home';
import Signup from './signup/Signup';
import Profile from './profile/Profile';

import { Auth0Provider  } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Auth0Provider
      domain="dev-gimcuepq.us.auth0.com"
      clientId="eOQE39RSOcbNM350PN1wZjmERHubpINY"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <Router>
        <div className="App container mx-auto">
          <Header />

        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </Auth0Provider>
  );
}

export default App;
