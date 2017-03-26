import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxActionStatus';

export function getCarRate(price) {
  return {type: types.CAR_RATE_SUCCESS, price};
}

export function carRate(car) {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    const options = {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'})
    };

    options.body = JSON.stringify(car);
    return fetch('http://78.63.201.236:100/api/cars', options).then(result => {
      return result.json();
    }).then(result => dispatch(getCarRate(result)));
  };
}
