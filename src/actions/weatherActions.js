import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxActionStatus';
import fetchJsonp from 'fetch-jsonp';

export function weatherRequestSuccess(data) {
  return {type: types.REQUEST_WEATHER_SUCCESS, weather: mapWeatherData(data)};
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

export function requestWeather() {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return fetchJsonp('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/228309?apikey=qhUHn5Jnb4op7FRHGRXyEunk6M4tgYp1&details=true&metric=true')
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
