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
import {TranslatorProvider} from "react-translate";

const store = configureStore();

const translations = {
  locale: "en",
  NavigationContainer: {
    HOME: 'Namai',
    CLOCK: 'Laikrodis',
    CONTROLS: 'Valdikliai',
    ABOUT: 'Kontaktai'
  },
  Calendar: {
    MONDAY: 'Pr',
    TUESDAY: 'An',
    WEDNESDAY: 'Tr',
    THURSDAY: 'Kt',
    FRIDAY: 'Pn',
    SATURDAY: 'Še',
    SUNDAY: 'Se',

    JANUARY: 'Sausis',
    FEBRUARY: 'Vasaris',
    MARCH: 'Kovas',
    APRIL: 'Balandis',
    MAY: 'Gegužė',
    JUNE: 'Birželis',
    JULY: 'Liepa',
    AUGUST: 'Rugpjūtis',
    SEPTEMBER: 'Rugsėjis',
    OCTOBER: 'Spalis',
    NOVEMBER: 'Lapkritis',
    DECEMBER: 'Gruodis'
  },
  Weather: {
    RAIN_PROBABILITY: 'Lietaus tikimybė',
    TEMPERATURE: 'Temperatūra',
    REAL_FEEL: 'Juntama temperatūra'
  }
};

render(
  <TranslatorProvider translations={translations}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
  </TranslatorProvider>,
  document.getElementById("app")
);

