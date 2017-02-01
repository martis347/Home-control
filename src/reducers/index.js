import {combineReducers} from 'redux';
import navigation from './navigationReducer';
import clock from './clockReducer';
import weather from './weatherReducer';
import locale from './localeReducer';
import php from './PHPApiReducer';

const rootReducer = combineReducers({
  navigation,
  clock,
  weather,
  locale,
  php
});

export default rootReducer;
