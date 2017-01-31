import {combineReducers} from 'redux';
import navigation from './navigationReducer';
import clock from './clockReducer';
import weather from './weatherReducer';
import locale from './localeReducer';

const rootReducer = combineReducers({
  navigation,
  clock,
  weather,
  locale
});

export default rootReducer;
