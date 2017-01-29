import {combineReducers} from 'redux';
import navigation from './navigationReducer';
import clock from './clockReducer';

const rootReducer = combineReducers({
  navigation,
  clock
});

export default rootReducer;
