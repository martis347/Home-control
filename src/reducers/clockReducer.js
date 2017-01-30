import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function clockReducer(state = initialState.time, action) {
  switch (action.type) {
    case types.CLOCK_UPDATE:
      debugger;
      return Object.assign({}, state, action.time);
    default:
      return state;
  }
}
