import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as clockActions from '../actions/clockActions';
import * as weatherActions from '../actions/weatherActions';
import * as phpActions from '../actions/PHPApi';
import Clock from '../components/clock/Clock';
import Calendar from '../components/clock/Calendar';
import Weather from '../components/clock/Weather';
import RandomComic from '../components/clock/RandomComic';
import Quote from '../components/clock/Quote';

class ClockContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calendar: {},
      active: true,
      phpResult: {
        comic: '',
        quotes: {
          humorists: '',
          definitions: ''
        }
      }
    };
  }

  componentWillMount() {
    this.props.clockActions.tick();

    this.props.weatherActions.requestWeather()
      .then(this.setState({active: !this.state.active}))
      .catch(error => console.log(error));
    document.body.classList.toggle('dark', true);
  }

  componentDidMount() {
    window.setInterval(function () {
      this.props.clockActions.tick();
    }.bind(this), 1000);

    window.setInterval(function () {
      this.props.weatherActions.requestWeather()
        .then(this.setState({active: !this.state.active}))
        .catch(error => console.log(error));
    }.bind(this), 600000);
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.phpResult !== nextProp.phpResult || this.state.phpResult.comic === '') {
      this.setState({phpResult: nextProp.phpResult});
    }
  }

  componentWillUnmount() {
    document.body.classList.toggle('dark', false);
  }

  render() {
    return (
      <div>
        <Clock time={this.props.time}/>
        <Calendar calendar={this.props.calendar}/>
        <Weather data={this.props.weather} active={this.state.active}/> <Weather data={this.props.weather} active={!this.state.active}/>
        <RandomComic image={this.state.phpResult.comic}/>
        <Quote className={'quote-bottom'} text={this.state.phpResult.quotes.humorists}/>
      </div>
    );
  }
}

ClockContainer.propTypes = {
  clockActions: PropTypes.object.isRequired,
  weatherActions: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired,
  calendar: PropTypes.object.isRequired,
  weather: PropTypes.array.isRequired,
  phpActions: PropTypes.object.isRequired,
  phpResult: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    time: state.clock.time,
    calendar: state.clock.calendar,
    weather: state.weather.weather,
    phpResult: state.php
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clockActions: bindActionCreators(clockActions, dispatch),
    weatherActions: bindActionCreators(weatherActions, dispatch),
    phpActions: bindActionCreators(phpActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockContainer);
