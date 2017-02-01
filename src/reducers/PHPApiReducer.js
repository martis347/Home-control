import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function PhpApiReducer(state = initialState.phpApiResult, action){
  switch (action.type){
    case types.PHP_API_SUCCESS:
      return Object.assign({}, action.result);
    default:
      return state;
  }
}
