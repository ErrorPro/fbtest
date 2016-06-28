import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'
import {LayoutContainer} from './src/Layout';
import {MainContainer} from './src/Main';
import {NotFound} from './src/NotFound';
import createStore from './createStore';

const store = createStore();

const onEnter = (nextState, replace) => {
  const {user} = store.getState();

  if (!user || !user.name) {
    replace('/~ven/');
  }
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/~ven/" component={LayoutContainer} />
      <Route path="/~ven/main" component={MainContainer} onEnter={onEnter}>
        //for chindren
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
