/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './components/routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import 'react-select/dist/react-select.css';
import 'bootstrap/fonts/glyphicons-halflings-regular.woff2';

const store = configureStore();

render(
  <div>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
  </div> ,
  document.getElementById("app")
);
