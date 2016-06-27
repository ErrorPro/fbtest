import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

export default () => createStore(combineReducers(reducers), applyMiddleware(thunk, createLogger()));
