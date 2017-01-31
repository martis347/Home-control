import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import App from './App';
import Home from '../containers/HomeContainer';
import Clock from '../containers/ClockContainer';
import NotFound from './notFound/NotFoundPage';

export default (
  <Route path="/" component={App} >
    <IndexRedirect to={"/Home-control/home"}/>
    <Route path="/Home-control/home" component={Home}/>
    <Route path="/Home-control/clock" component={Clock}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
