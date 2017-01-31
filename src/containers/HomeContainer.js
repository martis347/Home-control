import React, {PropTypes} from 'react';
import HomePage from '../components/home/HomePage';
import LocalePicker from '../components/home/LocalePicker';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as localeActions from '../actions/localeActions';

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

HomeContainer.propTypes = {
  changeLocale: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    expand: state.navigation.expand,
    locale: state.locale
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: bindActionCreators(localeActions.changeLocale, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
