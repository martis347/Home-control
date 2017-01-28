import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './home/HomePage';
import NotFound from './notFound/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
