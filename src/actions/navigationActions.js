import * as types from './actionTypes';

export function closeNavigation() {
  return {type: types.NAVIGATION_CLOSE};
}

export function openNavigation() {
  return {type: types.NAVIGATION_OPEN};
}

export function toggle(close) {
  return function (dispatch) {
    dispatch(close ? closeNavigation() : openNavigation());
  };
}
