import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function carReducer(state = initialState.price, action) {
  switch (action.type) {
    case types.CAR_RATE_SUCCESS:
      return action.price;
    default:
      return state;
  }
}
