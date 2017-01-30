import {combineReducers} from 'redux';
import navigation from './navigationReducer';
import clock from './clockReducer';
import weather from './weatherReducer';

const rootReducer = combineReducers({
  navigation,
  clock,
  weather
});

export default rootReducer;
