import React from 'react';
import {Route, IndexRedirect, Redirect} from 'react-router';
import App from './App';
import Home from '../containers/HomeContainer';
import Clock from '../containers/ClockContainer';
import Dashboard from '../containers/DashboardContainer';
import Control from '../containers/ControlContainer';
import NotFound from '../containers/NotFoundContainer';

export default (
  <Route path="/" component={App} >
    <IndexRedirect to={"/home"}/>
    <Redirect from="/" to="/home"/>
    <Route path="/home" component={Home}/>
    <Route path="/clock" component={Clock}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/control" component={Control}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
