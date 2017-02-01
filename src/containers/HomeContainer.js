import React from 'react';
import HomePage from '../components/home/HomePage';
import LocalePicker from '../components/home/LocalePicker';
import {connect} from 'react-redux';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <LocalePicker/>
        <HomePage/>
      </div>
    );
  }
}

export default connect()(HomeContainer);
