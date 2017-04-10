import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function weatherReducer(state = initialState.weather, action) {
  switch (action.type) {
    case types.REQUEST_WEATHER_SUCCESS:
      return Object.assign({}, state, {weather: action.weather});
    case types.REQUEST_WEATHER_DARKSKY_SUCCESS:
      return Object.assign({}, state, {darkskyWeather: action.weather});
    default:
      return state;
  }
}
