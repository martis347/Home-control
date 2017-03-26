import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      time: "",
      intervalId: 0
    };

    this.getTime = this.getTime.bind(this);
  }

  componentWillMount() {
    document.body.classList.toggle('dark', true);
    this.setState({time: this.getTime()});
    const intervalId = setInterval(() => {
      this.setState({time: this.getTime()});
    }, 1000);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    document.body.classList.toggle('dark', false);
    clearInterval(this.state.intervalId);
  }

  addTimeZero = i => {
    return (i < 10) ? "0" + i : i;
  };

  getTime = () => {
    const time = new Date();
    return this.addTimeZero(time.getHours()) + ":" + this.addTimeZero(time.getMinutes());
  };


  render() {
    return (
      <div className="clock-new">
        {this.state.time}
      </div>
    );
  }
}

export default Clock;
