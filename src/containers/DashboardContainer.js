import React from 'react';
import {connect} from 'react-redux';
import Clock from '../components/dashboard/Clock';
import Date from '../components/dashboard/DateC';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillMount() {
    document.body.classList.toggle('dark', true);
  }

  componentWillUnmount() {
    document.body.classList.toggle('dark', false);
  }

  render() {
    return (
      <div>
        <Clock/>
        <Date/>
      </div>
    );
  }
}

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
