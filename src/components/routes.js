import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './home/HomePage';
import Clock from '../containers/ClockContainer';
import NotFound from './notFound/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/clock" component={Clock}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
