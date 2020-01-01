import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Footer from '../containers/footer';
import About from './about';
import Events from './events';
import Service from './service';
import Nav from '../containers/nav';

export default () => (
  <React.Fragment>
    <div className="content">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  </React.Fragment>
);
