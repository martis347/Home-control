import * as types from './actionTypes';

export function updateClock() {
  return {type: types.CLOCK_UPDATE};
}

export function tick() {
  return function (dispatch) {
    dispatch(updateClock());
  };
}
