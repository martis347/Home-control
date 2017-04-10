import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxActionStatus';
import fetchJsonp from 'fetch-jsonp';

export function weatherRequestSuccess(data) {
  return {type: types.REQUEST_WEATHER_SUCCESS, weather: mapWeatherData(data)};
}

export function weatherRequestDarkskySuccess(data) {
  return {type: types.REQUEST_WEATHER_DARKSKY_SUCCESS, weather: mapWeatherDataDarkSky(data)};
}

export function mapWeatherData(allData) {
  return allData.map(data => {
    return {
      hour: new Date(data.DateTime).getHours(),
      iconNumber: data.WeatherIcon,
      isDaylight: data.IsDaylight,
      temperature: data.Temperature.Value,
      realFeelTemperature: data.RealFeelTemperature.Value,
      wind: data.Wind.Speed.Value,
      humidity: data.RelativeHumidity,
      rainProbability: data.RainProbability
    };
  });
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
    today: {
      temperature: (allData.currently.temperature - 32) * 5 / 9,
      icon: allData.currently.icon
    }
  };

  result.daily.pop();

  return result;
}

export function requestWeather() {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return fetchJsonp('https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/228309?apikey=qhUHn5Jnb4op7FRHGRXyEunk6M4tgYp1&details=true&metric=true')
      .then(result => {
        return result.json();
      })
      .then(result => dispatch(weatherRequestSuccess(result)))
      .catch(error => {
        dispatch(ajaxCallError());
        throw (error);
      });
  };
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
