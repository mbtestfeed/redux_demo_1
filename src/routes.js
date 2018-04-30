import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import GenericsPage from './components/generic/GenericsPage';
import ManageGenericPage from './components/generic/ManageGenericPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="generics" component={GenericsPage} />
    <Route path="generic" component={ManageGenericPage} />
    <Route path="generic/:id" component={ManageGenericPage} />
  </Route>
);
