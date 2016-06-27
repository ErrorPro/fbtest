import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'
import {LayoutContainer} from './src/Layout';
import {MainContainer} from './src/Main';
import createStore from './createStore';

const store = createStore();

const onEnter = (nextState, replace) => {
  const {user} = store.getState();

  if (!user.name) {
    replace('/');
  }
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={LayoutContainer} />
      <Route path="/main" component={MainContainer} onEnter={onEnter}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
