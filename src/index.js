import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import App from './components/app';
import appReducer from './components/app/reducer';

import './styles/manifest.styl';

const epicMiddleware = createEpicMiddleware(combineEpics());

const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainStore = createStore(
  combineReducers({
    app: appReducer,
    routing: routerReducer,
  }),
  composeEnhancers(applyMiddleware(epicMiddleware, routeMiddleware))
);

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={history}>
          <Route path="/" component={App} />
        </ConnectedRouter>
      </Provider>
    );
  }
}

render(
  <Root store={mainStore} />,
  document.getElementById('app')
);
