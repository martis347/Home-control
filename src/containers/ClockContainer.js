import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as clockActions from '../actions/clockActions';
import Clock from '../components/clock/Clock';
import Calendar from '../components/clock/Calendar';

class ClockContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toUTCString()
    };
  }

  componentWillMount(){
    this.props.actions.tick();
    document.body.classList.toggle('dark', true);
  }

  componentDidMount(){
    window.setInterval(function () {
      this.props.actions.tick();
    }.bind(this), 1000);
  }

  componentWillUnmount(){
    document.body.classList.toggle('dark', false);
  }

  render() {
    return (
      <div>
        <Clock time={this.props.time} />
        <Calendar calendar={this.props.calendar} />
      </div>
    );
  }
}

ClockContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired,
  calendar: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    time: state.clock.time,
    calendar: state.clock.calendar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clockActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockContainer);
