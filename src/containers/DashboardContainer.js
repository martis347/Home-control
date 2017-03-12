import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Clock from '../components/dashboard/Clock';
import Date from '../components/dashboard/DateC';
import {bindActionCreators} from 'redux';

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

DashboardContainer.propTypes = {

};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
