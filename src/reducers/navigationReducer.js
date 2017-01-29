import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function navigationReducer(state = initialState.navigation, action){
  switch (action.type){
    case types.NAVIGATION_CLOSE:
      return Object.assign({}, state, {expand: false});
    case types.NAVIGATION_OPEN:
      return Object.assign({}, state, {expand: true});
    default:
      return state;
  }
}
