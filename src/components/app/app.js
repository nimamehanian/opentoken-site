import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Header from '../header';
import Team from '../team';
import Faq from '../faq';
import SalePage from '../salepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/team" component={Team} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/salepage" component={SalePage} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default hot(module)(App);
