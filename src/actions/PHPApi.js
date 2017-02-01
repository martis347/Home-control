import * as types from './actionTypes';

export function phpApiSuccess(result) {
  return {type: types.PHP_API_SUCCESS, result};
}

export function callPHPApi() {
  return function (dispatch) {
    return fetch('https://verbal-diagnoses.000webhostapp.com/')
      .then(result => {
        return result.json();
      })
      .then(result => {
        dispatch(phpApiSuccess(result));
      });
  };
}
