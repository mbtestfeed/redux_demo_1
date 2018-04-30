/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStores from './stores/configureStores';
import {Provider} from 'react-redux';
// import { actionOnStart } from './actions/relevantActions';
import {loadGenerics} from './actions/genericActions';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStores();
// store.dispatch(actionOnStart());
store.dispatch(loadGenerics());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
