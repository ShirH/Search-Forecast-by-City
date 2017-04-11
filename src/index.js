import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); //use for adding Middleware- It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
// People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>  //make the store available to all container components in the application without passing it explicitly
    <App />
  </Provider>
  , document.querySelector('.container'));
