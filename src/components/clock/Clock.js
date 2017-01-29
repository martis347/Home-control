import React, {PropTypes} from 'react';

class Clock extends React.Component {
  componentWillReceiveProps(nextProp) {
    if (this.props.time != nextProp.time) {
      this.setState({time: nextProp.time});
    }
  }

  render() {
    return (
      <div className="clock">
        {this.props.time}
      </div>
    );
  }
}

Clock.propTypes = {
  time: PropTypes.string.isRequired
};

export default Clock;
