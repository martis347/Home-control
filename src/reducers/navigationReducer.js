import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function navigationReducer(state = initialState.navigation, action){
  switch (action.type){
    case types.TOGGLE_NAVIGATION:
      return Object.assign({}, state, {expand: !state.expand});
    default:
      return state;
  }
}
