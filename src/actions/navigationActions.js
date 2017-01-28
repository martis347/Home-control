import * as types from './actionTypes';

export function toggleNavigation() {
  return {type: types.TOGGLE_NAVIGATION};
}

export function toggle() {
  return function (dispatch) {
    dispatch(toggleNavigation());
  };
}
