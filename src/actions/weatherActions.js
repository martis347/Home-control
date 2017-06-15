import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxActionStatus';
import fetchJsonp from 'fetch-jsonp';

export function weatherRequestDarkskySuccess(data) {
  return {type: types.REQUEST_WEATHER_DARKSKY_SUCCESS, weather: mapWeatherDataDarkSky(data)};
}

export function mapWeatherDataDarkSky(allData) {
  let result = {
    daily: allData.daily.data.map(data => {
      return {
        day: new Date(data.time * 1000),
        icon: data.icon,
        min: (data.temperatureMin - 32) * 5 / 9,
        max: (data.temperatureMax - 32) * 5 / 9
      };
    }),
    hourly: allData.hourly.data.map(data => {
      return {
        temperature: Math.round(((data.temperature - 32) * 5 / 9) * 10) / 10,
        rainProbability: data.precipProbability * 100,
        realFeelTemperature: Math.round((data.apparentTemperature - 32) * 5 / 9),
        hour: new Date(data.time * 1000).getHours()
      };
    }).slice(0,18),
    today: {
      temperature: (allData.currently.temperature - 32) * 5 / 9,
      icon: allData.currently.icon
    }
  };

  result.daily.pop();

  return result;
}

export function requestWeatherDarksky() {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return fetchJsonp('https://api.darksky.net/forecast/3f0cb3aaed7ef5f8b0914694e51cea88/54.891784,23.918678')
      .then(result => {
        return result.json();
      })
      .then(result => dispatch(weatherRequestDarkskySuccess(result)))
      .catch(error => {
        dispatch(ajaxCallError());
        throw (error);
      });
  };
}
