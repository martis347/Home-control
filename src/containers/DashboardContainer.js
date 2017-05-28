import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../actions/weatherActions';
import Clock from '../components/dashboard/Clock';
import Date from '../components/dashboard/DateComponent';
import Weather from '../components/dashboard/Weather';
import WeatherChart from '../components/dashboard/WeatherChart';
import FutureWeather from '../components/dashboard/FutureWeather';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {

    this.props.weatherActions.requestWeatherDarksky()
      .catch(error => console.log(error));

    document.body.classList.toggle('dark', true);
  }

  componentDidMount() {
    window.setInterval(function () {
      this.props.weatherActions.requestWeatherDarksky()
        .then(this.setState({active: !this.state.active}))
        .catch(error => console.log(error));
    }.bind(this), 600000);
  }

  componentWillUnmount() {
    document.body.classList.toggle('dark', false);
  }

  render() {
    return (
      <div>
        <Clock/>
        <Date/>
        <Weather data={this.props.darkskyWeather.today}/>
        <WeatherChart active={true} data={this.props.darkskyWeather.hourly}/>
        <FutureWeather data={this.props.darkskyWeather.daily}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    darkskyWeather: state.weather.darkskyWeather
  };
}

function mapDispatchToProps(dispatch) {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch)
  };
}

DashboardContainer.propTypes = {
  weatherActions: PropTypes.func.isRequired,
  darkskyWeather: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
