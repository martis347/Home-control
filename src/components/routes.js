import React from 'react';
import {Route, IndexRedirect, Redirect} from 'react-router';
import App from './App';
import Home from '../containers/HomeContainer';
import Clock from '../containers/ClockContainer';
import NotFound from '../containers/NotFoundContainer'

export default (
  <Route path="/" component={App} >
    <IndexRedirect to={"/Home-control/home"}/>
    <Redirect from="/Home-control" to="/Home-control/home"/>
    <Route path="/Home-control/home" component={Home}/>
    <Route path="/Home-control/clock" component={Clock}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
