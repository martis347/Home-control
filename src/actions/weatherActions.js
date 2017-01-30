import * as types from './actionTypes';

export function weatherRequestSuccess() {
  return {type: types.REQUEST_WEATHER_SUCCESS};
}

export function weatherRequestError() {
  return {type: types.REQUEST_WEATHER_ERROR};
}

export function requestWeather(close) {
  return function (dispatch) {
    dispatch(close ? closeNavigation() : openNavigation());
  };
}
